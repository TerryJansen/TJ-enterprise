import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { categories, pages, projects } from '../src/site-data.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const routeList = ['', ...pages.map((page) => page.route), ...projects.map((project) => `projecten/${project.slug}`)];
const localFile = (route) => path.join(root, route, 'index.html');

function htmlLocalTargets(html) {
  const targets = [];
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (/^(?:https?:|mailto:|tel:|#|data:|javascript:)/i.test(value)) continue;
    targets.push(value);
  }
  return targets;
}

test('build emits every information page and all 14 project detail routes', async () => {
  assert.equal(pages.length, 17);
  assert.equal(projects.length, 14);
  assert.equal(new Set(routeList).size, 32);
  for (const route of routeList) {
    const html = await readFile(localFile(route), 'utf8');
    assert.match(html, /<html lang="nl">/);
    assert.match(html, /TJ Enterprise/);
    assert.match(html, /<main id="main">/);
  }
  const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
  assert.equal((sitemap.match(/<loc>/g) || []).length, 32);
});

test('homepage retains the interactive crane-vessel scene from the remote update', async () => {
  const homepage = await readFile(localFile(''), 'utf8');
  assert.match(homepage, /id="platform-stage"/);
  assert.match(homepage, /id="platform-canvas"/);
  assert.match(homepage, /Draai het schip\./);
  assert.match(homepage, /type="importmap"/);
  assert.match(homepage, /src="(?:\.\/)?platform-3d\.js\?v=4"/);
  assert.match(homepage, /styles\.css\?v=4/);
  assert.match(await readFile(localFile('projecten'), 'utf8'), /site\.css/);
});

test('every project has a unique detail page and a local project image', async () => {
  assert.equal(new Set(projects.map((project) => project.slug)).size, 14);
  for (const project of projects) {
    const page = await readFile(localFile(`projecten/${project.slug}`), 'utf8');
    assert.ok(page.includes(project.title.replaceAll('&', '&amp;')), `${project.slug} page should show its project title`);
    await access(path.join(root, project.image));
  }
  for (const category of categories) {
    assert.ok(projects.some((project) => project.category === category.slug), `${category.slug} needs at least one project`);
  }
});

test('generated pages use valid local links, stylesheets, scripts, and images', async () => {
  for (const route of routeList) {
    const file = localFile(route);
    const html = await readFile(file, 'utf8');
    const base = new URL(`https://site.test/${route ? `${route}/` : ''}`);
    for (const target of htmlLocalTargets(html)) {
      const url = new URL(target, base);
      let pathname = decodeURIComponent(url.pathname);
      if (pathname.endsWith('/')) pathname += 'index.html';
      const diskPath = path.join(root, pathname.replace(/^\/+/, ''));
      await access(diskPath).catch(() => assert.fail(`${route || '/'} has broken local target ${target}`));
    }
  }
});
