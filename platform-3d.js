import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('platform-canvas');
const stage = document.getElementById('platform-stage');
const hint = document.querySelector('.platform3d-hint');
const loading = document.getElementById('platform-loading');

if (canvas && stage) {
  try {
    initPlatformScene();
  } catch (error) {
    showFallback('3D-weergave is niet beschikbaar in deze browser.');
    console.error(error);
  }
}

function showFallback(message) {
  if (loading) {
    loading.textContent = message;
    loading.classList.remove('is-hidden');
  }
  hint?.classList.add('is-hidden');
}

function initPlatformScene() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.background = makeSkyTexture();
  scene.fog = new THREE.Fog(0xcf7f53, 70, 230);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.5, 1000);
  camera.position.set(48, 24, 58);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 12, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 32;
  controls.maxDistance = 120;
  controls.maxPolarAngle = Math.PI * 0.49;
  controls.minPolarAngle = Math.PI * 0.16;
  controls.enablePan = false;
  controls.autoRotate = !reduceMotion;
  controls.autoRotateSpeed = 0.5;
  controls.addEventListener('start', () => hint?.classList.add('is-hidden'));

  const sunPosition = new THREE.Vector3(-85, 22, -40);

  const sunLight = new THREE.DirectionalLight(0xffa35c, 2.4);
  sunLight.position.copy(sunPosition);
  scene.add(sunLight);

  scene.add(new THREE.HemisphereLight(0x8fa6c2, 0x1a2420, 0.7));
  scene.add(new THREE.AmbientLight(0xff8a4c, 0.2));

  scene.add(makeSun(sunPosition.clone().normalize().multiplyScalar(210)));

  const water = makeWater();
  scene.add(water);

  scene.add(buildPlatform());

  resize();
  window.addEventListener('resize', resize);

  let running = true;
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
    }, { threshold: 0.05 });
    io.observe(stage);
  }

  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    if (!running) return;
    const t = clock.getElapsedTime();
    controls.update();
    if (!reduceMotion) {
      water.material.uniforms.uTime.value = t;
    }
    renderer.render(scene, camera);
  });

  loading?.classList.add('is-hidden');

  function resize() {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }
}

function makeSkyTexture() {
  const el = document.createElement('canvas');
  el.width = 2;
  el.height = 256;
  const ctx = el.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 256);
  gradient.addColorStop(0, '#1c2049');
  gradient.addColorStop(0.32, '#50406a');
  gradient.addColorStop(0.55, '#b85a5e');
  gradient.addColorStop(0.74, '#e68a4f');
  gradient.addColorStop(1, '#f7cd92');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 2, 256);
  const texture = new THREE.CanvasTexture(el);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeSun(position) {
  const group = new THREE.Group();

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(6.2, 24, 24),
    new THREE.MeshBasicMaterial({ color: 0xfff1d6 }),
  );
  group.add(core);

  const el = document.createElement('canvas');
  el.width = 256;
  el.height = 256;
  const ctx = el.getContext('2d');
  const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, 'rgba(255,224,185,0.95)');
  grad.addColorStop(0.4, 'rgba(255,168,108,0.38)');
  grad.addColorStop(1, 'rgba(255,168,108,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);
  const glowTexture = new THREE.CanvasTexture(el);
  const glow = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: glowTexture, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }),
  );
  glow.scale.set(75, 75, 1);
  group.add(glow);

  group.position.copy(position);
  return group;
}

function makeWater() {
  const geometry = new THREE.PlaneGeometry(420, 420, 100, 100);
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uDeep: { value: new THREE.Color(0x0b232c) },
      uShallow: { value: new THREE.Color(0x1f4f52) },
      uSun: { value: new THREE.Color(0xffb27a) },
    },
    vertexShader: `
      varying vec2 vUv;
      uniform float uTime;
      void main() {
        vUv = uv;
        vec3 pos = position;
        float wave = sin(pos.x * 0.07 + uTime * 0.55) * 0.5
                   + sin(pos.y * 0.1 - uTime * 0.4) * 0.35
                   + sin((pos.x + pos.y) * 0.04 + uTime * 0.25) * 0.3;
        pos.z += wave;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uSun;
      void main() {
        vec2 centered = vUv - 0.5;
        float radial = length(centered) * 1.5;
        vec3 base = mix(uShallow, uDeep, smoothstep(0.0, 0.9, radial));
        float streakDist = distance(vUv, vec2(0.2, 0.66));
        float streak = smoothstep(0.26, 0.0, streakDist);
        vec3 color = mix(base, uSun, streak * 0.8);
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 2;
  return mesh;
}

function buildPlatform() {
  const group = new THREE.Group();
  const steelDark = new THREE.MeshStandardMaterial({ color: 0x343d40, roughness: 0.65, metalness: 0.35 });
  const steelLight = new THREE.MeshStandardMaterial({ color: 0x6b7579, roughness: 0.55, metalness: 0.3 });
  const accent = new THREE.MeshStandardMaterial({ color: 0xe79a55, roughness: 0.4, metalness: 0.25 });

  const legHeight = 34;
  const deckY = legHeight - 11;
  const legOffsets = [
    [-9, -9], [9, -9], [-9, 9], [9, 9],
  ];
  legOffsets.forEach(([x, z]) => {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.3, legHeight, 10), steelDark);
    leg.position.set(x, legHeight / 2 - 12, z);
    group.add(leg);
  });

  // diagonal cross bracing between adjacent legs, two tiers
  [6, 16].forEach((y) => {
    const pairs = [
      [[-9, -9], [9, -9]],
      [[-9, 9], [9, 9]],
      [[-9, -9], [-9, 9]],
      [[9, -9], [9, 9]],
    ];
    pairs.forEach(([a, b]) => {
      const start = new THREE.Vector3(a[0], y - 12, a[1]);
      const end = new THREE.Vector3(b[0], y - 12, b[1]);
      const mid = start.clone().lerp(end, 0.5);
      const length = start.distanceTo(end);
      const brace = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, length, 6), steelDark);
      brace.position.copy(mid);
      brace.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        end.clone().sub(start).normalize(),
      );
      group.add(brace);
    });
  });

  const deck = new THREE.Mesh(new THREE.BoxGeometry(24, 2.2, 24), steelLight);
  deck.position.set(0, deckY, 0);
  group.add(deck);

  const module1 = new THREE.Mesh(new THREE.BoxGeometry(6, 4, 5), steelDark);
  module1.position.set(-6, deckY + 1.1 + 2, -6);
  group.add(module1);

  const module2 = new THREE.Mesh(new THREE.BoxGeometry(4, 3, 4), steelDark);
  module2.position.set(5, deckY + 1.1 + 1.5, 6);
  group.add(module2);

  const derrick = buildDerrick(steelDark, accent);
  derrick.position.set(-3, deckY + 1.1, -3);
  group.add(derrick);

  const flareHeight = 20;
  const flare = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.5, flareHeight, 8), steelDark);
  flare.position.set(10, deckY + 1.1 + flareHeight / 2, -8);
  group.add(flare);

  const flame = makeFlame();
  flame.position.set(10, deckY + 1.1 + flareHeight + 0.5, -8);
  group.add(flame);

  const pad = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 0.3, 28), steelLight);
  pad.position.set(8, deckY + 1.1 + 0.15, 8);
  group.add(pad);

  const padRing = new THREE.Mesh(new THREE.RingGeometry(3.5, 4, 32), accent);
  padRing.rotation.x = -Math.PI / 2;
  padRing.position.set(8, deckY + 1.1 + 0.32, 8);
  group.add(padRing);

  const craneBase = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 3, 10), steelDark);
  craneBase.position.set(-10, deckY + 1.1 + 1.5, 9);
  group.add(craneBase);

  const craneArm = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 14, 8), accent);
  craneArm.position.set(-10, deckY + 1.1 + 3 + 5.2, 9);
  craneArm.rotation.z = Math.PI / 3.1;
  craneArm.position.x += 5;
  group.add(craneArm);

  return group;
}

function buildDerrick(material, accentMaterial) {
  const group = new THREE.Group();
  const baseHalf = 3;
  const topHalf = 1;
  const height = 22;

  [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sz]) => {
    const start = new THREE.Vector3(sx * baseHalf, 0, sz * baseHalf);
    const end = new THREE.Vector3(sx * topHalf, height, sz * topHalf);
    const curve = new THREE.CatmullRomCurve3([start, end]);
    const geometry = new THREE.TubeGeometry(curve, 2, 0.24, 6, false);
    group.add(new THREE.Mesh(geometry, material));
  });

  const steps = 5;
  for (let i = 1; i < steps; i += 1) {
    const f = i / steps;
    const width = THREE.MathUtils.lerp(baseHalf * 2, topHalf * 2, f) * 0.78;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(width, 0.11, 6, 4), accentMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.rotation.z = Math.PI / 4;
    ring.position.y = f * height;
    group.add(ring);
  }

  return group;
}

function makeFlame() {
  const el = document.createElement('canvas');
  el.width = 128;
  el.height = 128;
  const ctx = el.getContext('2d');
  const grad = ctx.createRadialGradient(64, 80, 0, 64, 80, 64);
  grad.addColorStop(0, 'rgba(255,235,180,0.95)');
  grad.addColorStop(0.5, 'rgba(255,150,60,0.55)');
  grad.addColorStop(1, 'rgba(255,100,40,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(el);
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: texture, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }),
  );
  sprite.scale.set(6, 8, 1);
  return sprite;
}
