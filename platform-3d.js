import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Water } from 'three/addons/objects/Water.js';
import { Sky } from 'three/addons/objects/Sky.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const WATER_NORMALS_URL = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r160/examples/textures/waternormals.jpg';

const canvas = document.getElementById('platform-canvas');
const stage = document.getElementById('platform-stage');
const hint = document.querySelector('.platform3d-hint');
const loading = document.getElementById('platform-loading');

if (canvas && stage) {
  try {
    initScene();
  } catch (error) {
    if (loading) {
      loading.textContent = '3D-weergave is niet beschikbaar in deze browser.';
      loading.classList.remove('is-hidden');
    }
    hint?.classList.add('is-hidden');
    console.error(error);
  }
}

function initScene() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isSmall = window.matchMedia('(max-width: 760px)').matches;

  let seed = 23;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  const gauss = () => (rnd() + rnd() + rnd() - 1.5) / 1.5;
  const V3 = (x, y, z) => new THREE.Vector3(x, y, z);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.42;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 1, 20000);
  camera.position.set(-112, 38, 178);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(-2, 30, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.minDistance = 55;
  controls.maxDistance = 420;
  controls.maxPolarAngle = 1.52;
  controls.minPolarAngle = 0.3;
  controls.enablePan = false;
  controls.autoRotate = !reduceMotion;
  controls.autoRotateSpeed = 0.22;
  let resumeTimer;
  controls.addEventListener('start', () => {
    hint?.classList.add('is-hidden');
    controls.autoRotate = false;
    clearTimeout(resumeTimer);
  });
  controls.addEventListener('end', () => {
    if (reduceMotion) return;
    resumeTimer = setTimeout(() => { controls.autoRotate = true; }, 4000);
  });

  // Sky and sun
  const sun = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(88.6), THREE.MathUtils.degToRad(166));
  const sky = new Sky();
  sky.scale.setScalar(10000);
  const su = sky.material.uniforms;
  su.turbidity.value = 5;
  su.rayleigh.value = 3.6;
  su.mieCoefficient.value = 0.0025;
  su.mieDirectionalG.value = 0.96;
  su.sunPosition.value.copy(sun);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.add(sky);
  scene.environment = pmrem.fromScene(envScene).texture;
  scene.add(sky);

  // Water
  const water = new Water(new THREE.PlaneGeometry(10000, 10000), {
    textureWidth: isSmall ? 512 : 1024,
    textureHeight: isSmall ? 512 : 1024,
    waterNormals: proceduralWaterNormals(),
    sunDirection: sun.clone(),
    sunColor: 0xffd2a0,
    waterColor: 0x001a26,
    distortionScale: 3.7,
    fog: false,
  });
  water.rotation.x = -Math.PI / 2;
  water.material.uniforms.size.value = 1.1;
  scene.add(water);
  new THREE.TextureLoader().load(WATER_NORMALS_URL, (texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    water.material.uniforms.normalSampler.value = texture;
  });

  // Clouds
  const cloudTextures = [makeCloudTexture(), makeCloudTexture(), makeCloudTexture()];
  const sunHorizontal = new THREE.Vector2(sun.x, sun.z).normalize();
  const cloudFar = new THREE.Color(0x3a3048);
  const cloudNear = new THREE.Color(0xff8a4a);
  for (let i = 0; i < 34; i += 1) {
    const angle = rnd() * Math.PI * 2;
    const distance = 3300 + rnd() * 1500;
    const elevation = THREE.MathUtils.degToRad(1.2 + Math.pow(rnd(), 1.5) * 10);
    const dir = new THREE.Vector2(Math.sin(angle), Math.cos(angle));
    const k = Math.pow((dir.dot(sunHorizontal) + 1) / 2, 2.2);
    const color = cloudFar.clone().lerp(cloudNear, k).multiplyScalar(0.75 + 0.35 * (1 - elevation / 0.2));
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: cloudTextures[i % 3], color, transparent: true, depthWrite: false, opacity: 0.4 + rnd() * 0.3, fog: false,
    }));
    const width = 600 + rnd() * 900;
    sprite.scale.set(width, width * 0.22, 1);
    sprite.position.set(dir.x * distance, Math.tan(elevation) * distance, dir.y * distance);
    scene.add(sprite);
  }

  // Lighting
  const sunLight = new THREE.DirectionalLight(0xffa066, 2.4);
  sunLight.position.copy(sun).multiplyScalar(300);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(isSmall ? 1024 : 2048, isSmall ? 1024 : 2048);
  Object.assign(sunLight.shadow.camera, { left: -85, right: 85, top: 85, bottom: -85, near: 10, far: 700 });
  sunLight.shadow.bias = -0.0004;
  sunLight.shadow.normalBias = 0.6;
  scene.add(sunLight);
  scene.add(new THREE.HemisphereLight(0x8a8fb8, 0x2a1c14, 0.55));

  // Materials
  const hullTex = canvasTexture(1024, 256, (c, w, h) => grime(c, w, h, '#1a2431'));
  const colTex = canvasTexture(256, 512, (c, w, h) => {
    grime(c, w, h, '#1a2431');
    c.fillStyle = '#4f1f1a';
    c.fillRect(0, h * 0.66, w, h * 0.34);
    c.fillStyle = 'rgba(20,14,10,0.55)';
    c.fillRect(0, h * 0.66, w, h * 0.04);
    for (let i = 0; i < 60; i += 1) {
      c.fillStyle = `rgba(30,40,30,${rnd() * 0.25})`;
      c.fillRect(rnd() * w, h * 0.7 + rnd() * h * 0.3, 2 + rnd() * 8, 2 + rnd() * 20);
    }
  });
  const deckTex = canvasTexture(512, 512, (c, w, h) => {
    c.fillStyle = '#4b5054';
    c.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 64) {
      for (let x = 0; x < w; x += 128) {
        const v = rnd() * 16 - 8;
        c.fillStyle = `rgb(${75 + v},${80 + v},${84 + v})`;
        c.fillRect(x + 1, y + 1, 126, 62);
      }
    }
    for (let i = 0; i < 40; i += 1) {
      const x = rnd() * w; const y = rnd() * h; const r = 4 + rnd() * 26;
      const g = c.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(15,15,15,0.35)');
      g.addColorStop(1, 'rgba(15,15,15,0)');
      c.fillStyle = g;
      c.fillRect(x - r, y - r, r * 2, r * 2);
    }
    c.fillStyle = 'rgba(212,170,40,0.7)';
    for (let x = 0; x < w; x += 128) c.fillRect(x, 0, 3, h);
  }, [6, 3]);

  const std = (o) => new THREE.MeshStandardMaterial(o);
  const hullMat = std({ map: hullTex, roughness: 0.7, metalness: 0.35 });
  const colMat = std({ map: colTex, roughness: 0.75, metalness: 0.3 });
  const deckMat = std({ map: deckTex, roughness: 0.9, metalness: 0.25 });
  const red = std({ color: 0xa31f17, roughness: 0.45, metalness: 0.35 });
  const lattice = std({ color: 0x161616, roughness: 0.55, metalness: 0.6 });
  const yellow = std({ color: 0xd9a514, roughness: 0.5, metalness: 0.3 });
  const orange = std({ color: 0xe0581a, roughness: 0.45 });
  const white = std({ color: 0xe6e6e0, roughness: 0.5, metalness: 0.1 });
  const grey = std({ color: 0x6a7075, roughness: 0.55, metalness: 0.5 });
  const wire = std({ color: 0x222222, roughness: 0.4, metalness: 0.8 });
  const railMat = std({ color: 0xb59a2e, roughness: 0.5, metalness: 0.4 });

  // Builders
  const ship = new THREE.Group();
  scene.add(ship);
  const box = (w, h, d, m, x, y, z, parent = ship) => {
    const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
    o.position.set(x, y, z);
    parent.add(o);
    return o;
  };
  const rbox = (w, h, d, m, x, y, z, parent = ship, r = 0.6) => {
    const o = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, r), m);
    o.position.set(x, y, z);
    parent.add(o);
    return o;
  };
  const segStore = new Map();
  const unitCyl = new THREE.CylinderGeometry(1, 1, 1, 7);
  const UP = V3(0, 1, 0);
  const seg = (parent, a, b, r, m) => {
    const d = new THREE.Vector3().subVectors(b, a);
    const q = new THREE.Quaternion().setFromUnitVectors(UP, d.clone().normalize());
    const mx = new THREE.Matrix4().compose(a.clone().addScaledVector(d, 0.5), q, V3(r, d.length(), r));
    const key = parent.uuid + m.uuid;
    if (!segStore.has(key)) segStore.set(key, { parent, m, list: [] });
    segStore.get(key).list.push(mx);
  };
  const flushSegs = () => {
    segStore.forEach((s) => {
      const im = new THREE.InstancedMesh(unitCyl, s.m, s.list.length);
      s.list.forEach((mx, i) => im.setMatrixAt(i, mx));
      im.castShadow = true;
      im.receiveShadow = true;
      s.parent.add(im);
    });
  };
  const lampGeo = new THREE.SphereGeometry(1, 10, 8);
  const lampMats = {};
  const noShadow = new Set();
  const lamp = (parent, x, y, z, color, intensity, size) => {
    const key = `${color}_${intensity}`;
    if (!lampMats[key]) lampMats[key] = std({ color: 0x000000, emissive: color, emissiveIntensity: intensity });
    const o = new THREE.Mesh(lampGeo, lampMats[key]);
    o.scale.setScalar(size);
    o.position.set(x, y, z);
    parent.add(o);
    noShadow.add(o);
  };
  const blinkMat = std({ color: 0x000000, emissive: 0xff2010, emissiveIntensity: 8 });
  const blink = (parent, x, y, z, size) => {
    const o = new THREE.Mesh(lampGeo, blinkMat);
    o.scale.setScalar(size);
    o.position.set(x, y, z);
    parent.add(o);
    noShadow.add(o);
  };

  // Hull, columns, deck
  const colPos = [];
  [-34, -11.5, 11.5, 34].forEach((x) => [-15, 15].forEach((z) => {
    colPos.push([x, z]);
    rbox(8, 20, 8, colMat, x, 4, z, ship, 1.1);
  }));
  rbox(96, 6, 40, hullMat, 0, 17, 0, ship, 0.8);
  box(95, 0.3, 39, deckMat, 0, 20.15, 0);
  [[-48, -19.8, 48, -19.8], [-48, 19.8, 48, 19.8], [48, -19.8, 48, 19.8]].forEach(([x1, z1, x2, z2]) => {
    seg(ship, V3(x1, 21.3, z1), V3(x2, 21.3, z2), 0.09, railMat);
    seg(ship, V3(x1, 20.8, z1), V3(x2, 20.8, z2), 0.06, railMat);
    const n = Math.round(Math.hypot(x2 - x1, z2 - z1) / 2.5);
    for (let i = 0; i <= n; i += 1) {
      const x = x1 + (x2 - x1) * i / n; const z = z1 + (z2 - z1) * i / n;
      seg(ship, V3(x, 20.3, z), V3(x, 21.3, z), 0.06, railMat);
    }
  });

  // Hull lettering
  const nameCanvas = document.createElement('canvas');
  nameCanvas.width = 1024;
  nameCanvas.height = 128;
  const nameCtx = nameCanvas.getContext('2d');
  nameCtx.font = 'bold 92px Outfit, Arial, sans-serif';
  nameCtx.fillStyle = '#e8e8e2';
  nameCtx.textAlign = 'center';
  nameCtx.fillText('TJ ENTERPRISE', 512, 98);
  const nameTex = new THREE.CanvasTexture(nameCanvas);
  nameTex.colorSpace = THREE.SRGBColorSpace;
  const nameMat = std({ map: nameTex, transparent: true, roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -2 });
  const nameA = new THREE.Mesh(new THREE.PlaneGeometry(30, 3.75), nameMat);
  nameA.position.set(24, 17, 20.12);
  ship.add(nameA);
  const nameB = nameA.clone();
  nameB.position.set(-24, 17, -20.12);
  nameB.rotation.y = Math.PI;
  ship.add(nameB);
  noShadow.add(nameA);
  noShadow.add(nameB);

  // Accommodation block
  rbox(20, 15, 34, windowMaterial(18, 6, 0.55), -37, 27.7, 0, ship, 0.3);
  [25.2, 30.2].forEach((y) => box(21.4, 0.3, 35.4, white, -37, y, 0));
  box(20.6, 0.5, 34.6, white, -37, 35.45, 0);
  rbox(14, 4.5, 24, windowMaterial(10, 2, 0.75), -38, 37.9, 0, ship, 0.3);
  box(15, 0.4, 25, white, -38, 40.35, 0);
  box(2, 0.3, 31, white, -33, 36.2, 0);
  box(4, 4, 4, lattice, -30, 37.9, 0);
  seg(ship, V3(-36, 40.5, 0), V3(-36, 54, 0), 0.35, white);
  seg(ship, V3(-36, 50, -4.5), V3(-36, 50, 4.5), 0.2, white);
  seg(ship, V3(-36, 46, -3), V3(-36, 46, 3), 0.15, white);
  [[-34, 44, 2], [-38, 44, -2], [-33, 43, -5]].forEach((q) => seg(ship, V3(q[0], 40.5, q[2]), V3(q[0], q[1] + 4, q[2]), 0.08, white));
  [-7, 7].forEach((z) => {
    const dome = new THREE.Mesh(new THREE.SphereGeometry(1.5, 16, 12), white);
    dome.position.set(-32, 42, z);
    ship.add(dome);
  });
  blink(ship, -36, 54.6, 0, 0.35);
  lamp(ship, -36, 50.4, 4.5, 0xffffff, 4, 0.2);

  // Helideck
  const hx = -53; const hy = 36.5;
  const heliTex = canvasTexture(512, 512, (c, w, h) => {
    c.fillStyle = '#2c3a30';
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 300; i += 1) {
      c.fillStyle = `rgba(0,0,0,${rnd() * 0.08})`;
      c.fillRect(rnd() * w, rnd() * h, rnd() * 30, rnd() * 30);
    }
    c.strokeStyle = '#e0b318';
    c.lineWidth = 18;
    c.beginPath(); c.arc(256, 256, 150, 0, Math.PI * 2); c.stroke();
    c.fillStyle = '#eeeeea';
    c.fillRect(196, 180, 26, 152); c.fillRect(290, 180, 26, 152); c.fillRect(196, 243, 120, 26);
    c.strokeStyle = '#eeeeea';
    c.lineWidth = 8;
    c.beginPath(); c.arc(256, 256, 246, 0, Math.PI * 2); c.stroke();
  });
  const heli = new THREE.Mesh(new THREE.CylinderGeometry(11, 11, 0.7, 56), [grey, std({ map: heliTex, roughness: 0.85 }), grey]);
  heli.position.set(hx, hy, 0);
  ship.add(heli);
  const heliEdge = new THREE.Mesh(new THREE.TorusGeometry(11.2, 0.22, 6, 56), grey);
  heliEdge.rotation.x = Math.PI / 2;
  heliEdge.position.set(hx, hy + 0.45, 0);
  ship.add(heliEdge);
  [-7, 7].forEach((z) => {
    seg(ship, V3(-47, 23, z), V3(-56, hy - 0.3, z * 0.8), 0.4, grey);
    seg(ship, V3(-47, 33, z), V3(-61, hy - 0.2, z * 0.55), 0.35, grey);
  });
  for (let k = 0; k < 18; k += 1) {
    const a = k / 18 * Math.PI * 2;
    lamp(ship, hx + Math.cos(a) * 10.9, hy + 0.6, Math.sin(a) * 10.9, k % 2 ? 0x7dff8a : 0xffe27a, 5, 0.22);
  }

  // Lifeboats
  const capsule = new THREE.CapsuleGeometry(1.3, 4.2, 6, 14);
  [-44, -37, -30].forEach((x) => [18.6, -18.6].forEach((z) => {
    const boat = new THREE.Mesh(capsule, orange);
    boat.rotation.z = Math.PI / 2;
    boat.position.set(x, 23.6, z);
    ship.add(boat);
    box(3.2, 0.8, 1.8, white, x, 25, z);
    [-1.8, 1.8].forEach((o) => seg(ship, V3(x + o, 20.3, z * 0.92), V3(x + o, 26, z), 0.14, grey));
  }));

  // Deck cargo
  const containerCache = {};
  const containerMat = (hex) => {
    if (containerCache[hex]) return containerCache[hex];
    const tex = canvasTexture(256, 128, (c, w, h) => {
      c.fillStyle = hex;
      c.fillRect(0, 0, w, h);
      for (let x = 0; x < w; x += 8) {
        c.fillStyle = 'rgba(0,0,0,0.18)'; c.fillRect(x, 0, 3, h);
        c.fillStyle = 'rgba(255,255,255,0.06)'; c.fillRect(x + 4, 0, 2, h);
      }
      for (let i = 0; i < 40; i += 1) {
        c.fillStyle = `rgba(90,45,20,${rnd() * 0.3})`;
        c.fillRect(rnd() * w, rnd() * h, 2 + rnd() * 10, 2 + rnd() * 6);
      }
      c.fillStyle = 'rgba(0,0,0,0.3)';
      c.fillRect(0, 0, w, 4);
      c.fillRect(0, h - 4, w, 4);
    });
    containerCache[hex] = std({ map: tex, roughness: 0.65, metalness: 0.35 });
    return containerCache[hex];
  };
  const palette = ['#d4a017', '#c8551b', '#2f5a8a', '#6c6f72', '#b5b5ad', '#8a2b1f', '#2d6b4a'];
  for (let i = 0; i < 60; i += 1) {
    const x = -24 + rnd() * 46; const z = -17 + rnd() * 34;
    if (x > 19 && Math.abs(Math.abs(z) - 11) < 10) continue;
    const w = 2.4 + rnd() * 5; const d = 2.4 + rnd() * 3.5; const h = 1.4 + rnd() * 3.2;
    box(w, h, d, containerMat(palette[Math.floor(rnd() * palette.length)]), x, 20.3 + h / 2, z);
  }
  const frame = (x, z, h, s) => {
    const cs = [[s, s], [-s, s], [-s, -s], [s, -s]];
    cs.forEach((q, i) => {
      const n = cs[(i + 1) % 4];
      seg(ship, V3(x + q[0], 20.3, z + q[1]), V3(x + q[0], 20.3 + h, z + q[1]), 0.25, yellow);
      seg(ship, V3(x + q[0], 20.3 + h, z + q[1]), V3(x + n[0], 20.3 + h, z + n[1]), 0.22, yellow);
      seg(ship, V3(x + q[0], 20.3, z + q[1]), V3(x + n[0], 20.3 + h, z + n[1]), 0.13, yellow);
      seg(ship, V3(x + q[0], 20.3 + h / 2, z + q[1]), V3(x + n[0], 20.3 + h / 2, z + n[1]), 0.13, yellow);
    });
  };
  frame(2, -9, 9, 2.5);
  frame(12, 6, 7, 2);
  frame(-14, 9, 6, 2);
  frame(-4, 12, 11, 1.6);
  const reel = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 2.2, 28), std({ color: 0x223040, roughness: 0.6, metalness: 0.4 }));
  reel.rotation.x = Math.PI / 2;
  reel.position.set(14, 23, -5);
  ship.add(reel);

  // Cranes
  const buildCrane = (px, pz, ry, tilt, hang) => {
    const cg = new THREE.Group();
    cg.position.set(px, 20.2, pz);
    cg.rotation.y = ry;
    ship.add(cg);
    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(6.5, 7, 4, 32), hullMat);
    pedestal.position.y = 2;
    cg.add(pedestal);
    rbox(15, 11, 15, red, 0, 9.5, 0, cg, 0.5);
    rbox(7, 3.2, 9, red, 5, 16.6, 0, cg, 0.3);
    rbox(3.2, 3, 3.2, windowMaterial(2, 1, 1), -7.6, 9, 6.6, cg, 0.2);
    [[-7.5, 7.5], [7.5, 7.5], [-7.5, -7.5], [7.5, -7.5]].forEach((q) => {
      seg(cg, V3(q[0], 15.4, q[1]), V3(q[0], 16.4, q[1]), 0.06, railMat);
      lamp(cg, q[0], 15.6, q[1], 0xffd08a, 7, 0.3);
    });
    const apex = V3(9, 35, 0);
    [[3, 5.5], [3, -5.5], [13, 5.5], [13, -5.5]].forEach((q) => seg(cg, V3(q[0], 15, q[1]), apex, 0.75, red));
    seg(cg, V3(3, 24, 5), V3(13, 24, 5), 0.35, red);
    seg(cg, V3(3, 24, -5), V3(13, 24, -5), 0.35, red);
    box(1.8, 1.8, 4.2, red, apex.x, apex.y, 0, cg);

    const pivot = V3(-6.5, 13, 0);
    const boom = new THREE.Group();
    boom.position.copy(pivot);
    boom.rotation.z = tilt;
    cg.add(boom);
    const length = 78; const steps = 24;
    let prev = null;
    for (let i = 0; i <= steps; i += 1) {
      const y = i / steps * length; const w = 2.8 - 1.8 * i / steps;
      const cur = [V3(w, y, w), V3(-w, y, w), V3(-w, y, -w), V3(w, y, -w)];
      if (prev) {
        for (let k = 0; k < 4; k += 1) {
          seg(boom, prev[k], cur[k], 0.3, lattice);
          seg(boom, prev[k], cur[(k + 1) % 4], 0.1, lattice);
          if (i % 3 === 0) seg(boom, cur[k], cur[(k + 1) % 4], 0.09, lattice);
        }
      }
      prev = cur;
    }
    rbox(3, 3, 3, red, 0, length, 0, boom, 0.3);
    rbox(6.2, 4, 6.6, red, 0, 1, 0, boom, 0.3);

    const sn = Math.sin(tilt); const cs = Math.cos(tilt);
    const tip = V3(pivot.x - sn * length, pivot.y + cs * length, 0);
    [0.8, -0.8].forEach((o) => seg(cg, V3(apex.x, apex.y, o), V3(tip.x, tip.y, o), 0.11, wire));
    const hookPos = tip.clone();
    hookPos.y -= hang;
    [0.6, -0.6].forEach((o) => seg(cg, V3(tip.x, tip.y, o), V3(hookPos.x, hookPos.y + 1.6, o), 0.07, wire));
    box(1.9, 3.2, 1.3, yellow, hookPos.x, hookPos.y, 0, cg);
    box(1.95, 0.6, 1.35, lattice, hookPos.x, hookPos.y + 0.6, 0, cg);
    box(1.95, 0.6, 1.35, lattice, hookPos.x, hookPos.y - 0.6, 0, cg);
    const hook = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.25, 8, 16, Math.PI * 1.4), grey);
    hook.position.set(hookPos.x, hookPos.y - 2.5, 0);
    hook.rotation.z = Math.PI * 0.8;
    cg.add(hook);
    const aux = V3(pivot.x - sn * length * 0.86, pivot.y + cs * length * 0.86, 2.6);
    const auxHook = aux.clone();
    auxHook.y -= hang * 0.65;
    seg(cg, aux, V3(auxHook.x, auxHook.y + 1, auxHook.z), 0.06, wire);
    box(1.2, 2, 1, yellow, auxHook.x, auxHook.y, auxHook.z, cg);
    blink(cg, tip.x, tip.y + 2, 0, 0.45);
    blink(cg, apex.x, apex.y + 1.3, 0, 0.35);
    for (let f = 0.25; f < 0.8; f += 0.25) {
      lamp(cg, pivot.x - sn * length * f + 1.2, pivot.y + cs * length * f, 2.6, 0xffe4b0, 6, 0.28);
    }
  };
  buildCrane(33, -11, -0.18, 0.42, 36);
  buildCrane(33, 11, 0.14, 0.6, 26);

  // Deck lighting
  for (let dx = -46; dx <= 46; dx += 5) {
    lamp(ship, dx, 21.9, 20.3, 0xffcf8a, 6, 0.22);
    lamp(ship, dx, 21.9, -20.3, 0xffcf8a, 6, 0.22);
  }
  [[-27, 35.9, 17.3], [-47, 35.9, 17.3], [-27, 35.9, -17.3], [-47, 35.9, -17.3],
    [-31, 40.9, 12.5], [-45, 40.9, 12.5], [-31, 40.9, -12.5], [-45, 40.9, -12.5]]
    .forEach((q) => lamp(ship, q[0], q[1], q[2], 0xffe0a8, 7, 0.32));
  [[0, 34, 0], [-22, 32, 14], [20, 34, -6], [24, 32, 12]].forEach((q) => {
    const light = new THREE.PointLight(0xffb468, 520, 0, 2);
    light.position.set(q[0], q[1], q[2]);
    ship.add(light);
  });

  flushSegs();
  ship.traverse((o) => {
    if (o.isMesh && !noShadow.has(o)) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });

  // Foam around columns
  const foamTex = canvasTexture(256, 256, (c, w, h) => {
    c.clearRect(0, 0, w, h);
    for (let i = 0; i < 700; i += 1) {
      const a = rnd() * Math.PI * 2; const rr = 70 + gauss() * 26;
      const x = 128 + Math.cos(a) * rr; const y = 128 + Math.sin(a) * rr; const r = 1 + rnd() * 7;
      c.fillStyle = `rgba(255,255,255,${0.08 + rnd() * 0.3})`;
      c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill();
    }
  });
  const foams = colPos.map(([x, z]) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(17, 17), new THREE.MeshBasicMaterial({
      map: foamTex, transparent: true, depthWrite: false, opacity: 0.6, color: 0xd9c6b8,
    }));
    m.rotation.x = -Math.PI / 2;
    m.position.set(x, 0.12, z);
    scene.add(m);
    return m;
  });

  // Post-processing
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(512, 512), 0.38, 0.5, 1.1));
  composer.addPass(new OutputPass());

  const resize = () => {
    const w = stage.clientWidth; const h = stage.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
  };
  window.addEventListener('resize', resize);
  resize();

  let visible = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.02 }).observe(stage);
  }

  const clock = new THREE.Clock();
  let firstFrame = true;
  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    if (!visible) return;
    if (!reduceMotion) {
      water.material.uniforms.time.value += dt * 0.7;
      ship.position.y = Math.sin(t * 0.4) * 0.22;
      ship.rotation.z = Math.sin(t * 0.3) * 0.0035;
      ship.rotation.x = Math.sin(t * 0.23) * 0.0025;
      foams.forEach((f, i) => {
        f.rotation.z = t * 0.05 * (i % 2 ? 1 : -1);
        f.material.opacity = 0.45 + 0.18 * Math.sin(t * 1.3 + i);
      });
    }
    blinkMat.emissiveIntensity = Math.sin(t * 2.6) > 0.55 ? 10 : 0.4;
    controls.update();
    composer.render();
    if (firstFrame) {
      firstFrame = false;
      loading?.classList.add('is-hidden');
    }
  });

  function proceduralWaterNormals() {
    const S = 256;
    const cv = document.createElement('canvas');
    cv.width = cv.height = S;
    const ctx = cv.getContext('2d');
    const img = ctx.createImageData(S, S);
    const waves = [[3, 1, 0.9, 0.1], [-2, 4, 0.7, 1.3], [5, -3, 0.5, 2.1], [-7, -2, 0.35, 0.7], [9, 6, 0.25, 2.9],
      [-12, 9, 0.18, 4.1], [15, -13, 0.12, 1.1], [-19, -17, 0.08, 3.3], [24, 5, 0.06, 0.4]];
    for (let y = 0; y < S; y += 1) {
      for (let x = 0; x < S; x += 1) {
        let dx = 0; let dy = 0;
        waves.forEach((w) => {
          const c = Math.cos(2 * Math.PI * (w[0] * x + w[1] * y) / S + w[3]) * w[2] * 2 * Math.PI / S;
          dx += c * w[0];
          dy += c * w[1];
        });
        const nx = -dx * 7; const ny = -dy * 7; const l = Math.hypot(nx, ny, 1); const i = (y * S + x) * 4;
        img.data[i] = (nx / l * 0.5 + 0.5) * 255;
        img.data[i + 1] = (ny / l * 0.5 + 0.5) * 255;
        img.data[i + 2] = (1 / l * 0.5 + 0.5) * 255;
        img.data[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    const texture = new THREE.CanvasTexture(cv);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  function makeCloudTexture() {
    const cv = document.createElement('canvas');
    cv.width = 512;
    cv.height = 256;
    const c = cv.getContext('2d');
    for (let i = 0; i < 110; i += 1) {
      const x = 256 + gauss() * 170; const y = 140 + gauss() * 38 - Math.abs(gauss()) * 20; const r = 18 + rnd() * 62;
      const g = c.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(255,255,255,0.2)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      c.fillStyle = g;
      c.fillRect(x - r, y - r, r * 2, r * 2);
    }
    const texture = new THREE.CanvasTexture(cv);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  function canvasTexture(w, h, draw, repeat) {
    const cv = document.createElement('canvas');
    cv.width = w;
    cv.height = h;
    draw(cv.getContext('2d'), w, h);
    const texture = new THREE.CanvasTexture(cv);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    if (repeat) texture.repeat.set(repeat[0], repeat[1]);
    texture.anisotropy = 8;
    return texture;
  }

  function grime(c, w, h, base) {
    c.fillStyle = base;
    c.fillRect(0, 0, w, h);
    for (let i = 0; i < 500; i += 1) {
      c.fillStyle = rnd() < 0.5 ? `rgba(8,12,18,${0.04 + rnd() * 0.12})` : `rgba(60,75,92,${0.03 + rnd() * 0.08})`;
      const y = rnd() * h;
      c.fillRect(rnd() * w, y, 1 + rnd() * 3, rnd() * (h - y));
    }
    for (let i = 0; i < 80; i += 1) {
      c.fillStyle = `rgba(110,52,28,${0.08 + rnd() * 0.18})`;
      c.fillRect(rnd() * w, rnd() * h * 0.7, 1 + rnd() * 2, 20 + rnd() * 120);
    }
    c.fillStyle = 'rgba(0,0,0,0.18)';
    for (let y = 48; y < h; y += 64) c.fillRect(0, y, w, 1.5);
    for (let x = 96; x < w; x += 128) c.fillRect(x, 0, 1.5, h);
  }

  function windowMaterial(cols, rows, litChance) {
    const cv = document.createElement('canvas');
    cv.width = 512;
    cv.height = 256;
    const a = cv.getContext('2d');
    const ev = document.createElement('canvas');
    ev.width = 512;
    ev.height = 256;
    const e = ev.getContext('2d');
    a.fillStyle = '#e2e2dc';
    a.fillRect(0, 0, 512, 256);
    e.fillStyle = '#000';
    e.fillRect(0, 0, 512, 256);
    const cw = 512 / cols; const rh = 256 / rows;
    for (let r = 0; r < rows; r += 1) {
      a.fillStyle = 'rgba(120,110,95,0.35)';
      a.fillRect(0, r * rh + rh * 0.88, 512, rh * 0.12);
      for (let k = 0; k < cols; k += 1) {
        const x = k * cw + cw * 0.2; const y = r * rh + rh * 0.3; const w = cw * 0.6; const h = rh * 0.36;
        const on = rnd() < litChance;
        a.fillStyle = on ? '#ffd58a' : '#2f383e';
        a.fillRect(x, y, w, h);
        a.fillStyle = 'rgba(90,60,40,0.25)';
        a.fillRect(x, y + h, w * 0.3, rh * 0.25);
        if (on) {
          e.fillStyle = `rgb(255,${170 + Math.floor(rnd() * 40)},100)`;
          e.fillRect(x, y, w, h);
        }
      }
    }
    const map = new THREE.CanvasTexture(cv);
    const emissiveMap = new THREE.CanvasTexture(ev);
    map.colorSpace = THREE.SRGBColorSpace;
    emissiveMap.colorSpace = THREE.SRGBColorSpace;
    return std({ map, emissiveMap, emissive: 0xffffff, emissiveIntensity: 2.2, roughness: 0.55, metalness: 0.1 });
  }
}
