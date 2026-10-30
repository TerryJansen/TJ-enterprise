document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Menu openen' : 'Menu sluiten');
  navigation.classList.toggle('is-open', !expanded);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Menu openen');
    navigation.classList.remove('is-open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const reducedMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const prefersReducedMotion = reducedMotionPreference.matches;
const homepageBackgroundVideo = document.querySelector('#homepage-background-video');
const backgroundVideoToggle = document.querySelector('#homepage-background-video-toggle');

if (homepageBackgroundVideo && backgroundVideoToggle) {
  let pausedByUser = false;
  const updateVideoToggle = () => {
    const playing = !homepageBackgroundVideo.paused && !homepageBackgroundVideo.ended;
    backgroundVideoToggle.setAttribute('aria-pressed', String(playing));
    backgroundVideoToggle.setAttribute('aria-label', playing ? 'Pauzeer achtergrondvideo' : 'Speel achtergrondvideo af');
    backgroundVideoToggle.textContent = playing ? 'Pauzeer video' : 'Speel video';
  };
  const playBackgroundVideo = () => homepageBackgroundVideo.play().catch(updateVideoToggle);

  backgroundVideoToggle.hidden = false;
  backgroundVideoToggle.addEventListener('click', () => {
    if (homepageBackgroundVideo.paused) {
      pausedByUser = false;
      playBackgroundVideo();
    } else {
      pausedByUser = true;
      homepageBackgroundVideo.pause();
    }
  });
  homepageBackgroundVideo.addEventListener('play', updateVideoToggle);
  homepageBackgroundVideo.addEventListener('pause', updateVideoToggle);
  reducedMotionPreference.addEventListener('change', (event) => {
    if (event.matches) homepageBackgroundVideo.pause();
    else if (!pausedByUser) playBackgroundVideo();
  });
  if (!prefersReducedMotion) playBackgroundVideo();
  updateVideoToggle();
}

function splitVisibleTextIntoLetters() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent || parent.closest('script, style, noscript, [aria-hidden="true"], .brand, .menu-toggle')) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  textNodes.forEach((node) => {
    const text = node.nodeValue;
    const accessibleText = document.createElement('span');
    accessibleText.className = 'visually-hidden';
    accessibleText.textContent = text;

    const letterRun = document.createElement('span');
    letterRun.className = 'letter-run';
    letterRun.setAttribute('aria-hidden', 'true');

    let letterIndex = 0;
    let word = null;
    Array.from(text).forEach((character) => {
      if (/\s/u.test(character)) {
        word = null;
        letterRun.append(document.createTextNode(character));
        return;
      }
      if (!word) {
        word = document.createElement('span');
        word.className = 'letter-word';
        letterRun.append(word);
      }
      const letter = document.createElement('span');
      letter.className = 'letter-pop';
      letter.style.setProperty('--letter-index', letterIndex);
      letter.textContent = character;
      word.append(letter);
      letterIndex += 1;
    });

    node.replaceWith(accessibleText, letterRun);
  });
}

if (prefersReducedMotion) {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
} else {
  splitVisibleTextIntoLetters();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -3% 0px' });

    document.querySelectorAll('.reveal, .letter-run').forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll('.reveal, .letter-run').forEach((element) => element.classList.add('is-visible'));
  }
}
