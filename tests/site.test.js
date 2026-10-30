import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [html, css, js, logo] = await Promise.all([
  readFile(new URL('../index.html', import.meta.url), 'utf8'),
  readFile(new URL('../styles.css', import.meta.url), 'utf8'),
  readFile(new URL('../script.js', import.meta.url), 'utf8'),
  readFile(new URL('../images/tj-enterprise-logo-transparent.png', import.meta.url)),
]);

test('homepage includes the requested offshore hero and core sections', () => {
  assert.match(html, /TJ Enterprise/i);
  assert.match(html, /Gebouwd voor<br><span>de open zee\./);
  assert.match(html, /images\/tj-enterprise-offshore\.png/);
  assert.match(html, /id="expertise"/);
  assert.match(html, /id="aanpak"/);
  assert.match(html, /mailto:info@tjenterprise\.nl/);
});

test('homepage uses the supplied transparent logo in both brand placements', () => {
  assert.equal((html.match(/images\/tj-enterprise-logo-transparent\.png/g) || []).length, 2);
  assert.equal((html.match(/class="brand-logo"/g) || []).length, 2);
  assert.match(css, /\.brand-logo\{display:block;width:auto;height:46px\}/);
  assert.deepEqual([...logo.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  assert.equal(logo[25], 6, 'logo PNG should support alpha transparency');
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
