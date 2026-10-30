import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [html, css, js] = await Promise.all([
  readFile(new URL('../index.html', import.meta.url), 'utf8'),
  readFile(new URL('../styles.css', import.meta.url), 'utf8'),
  readFile(new URL('../script.js', import.meta.url), 'utf8'),
]);

test('homepage includes the requested offshore hero and core sections', () => {
  assert.match(html, /TJ Enterprise/i);
  assert.match(html, /Gebouwd voor<br><span>de open zee\./);
  assert.match(html, /images\/tj-enterprise-offshore\.png/);
  assert.match(html, /id="expertise"/);
  assert.match(html, /id="aanpak"/);
  assert.match(html, /mailto:info@tjenterprise\.nl/);
});

test('responsive and reduced-motion styles are present', () => {
  assert.match(css, /@media\s*\(max-width:\s*760px\)/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});

test('navigation behavior and reveal motion have accessible fallbacks', () => {
  assert.match(html, /aria-expanded="false"/);
  assert.match(js, /IntersectionObserver/);
  assert.match(js, /prefers-reduced-motion: reduce/);
});
