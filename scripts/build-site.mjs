import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { categories, pages, projects } from '../src/site-data.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicUrl = 'https://terryjansen.github.io/TJ-enterprise/';
const pageRoutes = ['', ...pages.map((page) => page.route), ...projects.map((project) => `projecten/${project.slug}`)];
const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const routeParts = (route) => route ? route.split('/').filter(Boolean) : [];
const rootPrefix = (route) => '../'.repeat(routeParts(route).length) || './';

function routeHref(from, to) {
  const source = routeParts(from);
  const target = routeParts(to);
  let common = 0;
  while (common < source.length && common < target.length && source[common] === target[common]) common += 1;
  const rel = [...Array(source.length - common).fill('..'), ...target.slice(common)].join('/');
  return rel ? `${rel}/` : './';
}

function asset(from, file) { return `${rootPrefix(from)}${file}`; }
function link(from, to, text, className = 'text-link') {
  return `<a class="${className}" href="${routeHref(from, to)}">${text}<span aria-hidden="true">↗</span></a>`;
}

function nav(from) {
  const items = [['projecten', 'Projecten'], ['diensten', 'Diensten'], ['over-ons', 'Over TJ'], ['contact', 'Contact']];
  return items.map(([route, label]) => `<a href="${routeHref(from, route)}"${from === route ? ' aria-current="page"' : ''}>${label}</a>`).join('');
}

function header(from) {
  return `<a class="skip-link" href="#main">Direct naar inhoud</a>
<header class="site-header">
  <a class="brand" href="${routeHref(from, '')}" aria-label="TJ Enterprise — home"><img class="brand-logo" src="${asset(from, 'images/tj-enterprise-logo-transparent.png')}" alt="TJ Enterprise"></a>
  <button class="menu-toggle" type="button" aria-label="Menu openen" aria-expanded="false" aria-controls="site-navigation"><span></span><span></span></button>
  <nav class="site-nav" id="site-navigation" aria-label="Hoofdnavigatie">${nav(from)}<a class="nav-cta" href="${routeHref(from, 'contact')}">Start een gesprek <span aria-hidden="true">↗</span></a></nav>
</header>`;
}

function footer(from) {
  return `<section class="contact-band reveal"><div class="contact-inner"><p class="eyebrow"><span class="eyebrow-line"></span>Volgende stap</p><h2>Een project op zee?<br><span>Laten we praten.</span></h2><a class="button button-outline" href="mailto:info@tjenterprise.nl">Neem contact op <span aria-hidden="true">↗</span></a></div><span class="contact-watermark" aria-hidden="true">TJ</span></section>
<footer class="site-footer"><a class="brand footer-brand" href="${routeHref(from, '')}"><img class="brand-logo" src="${asset(from, 'images/tj-enterprise-logo-transparent.png')}" alt="TJ Enterprise"></a><p>Onafhankelijke offshore platformbouw</p><a href="mailto:info@tjenterprise.nl">info@tjenterprise.nl</a><p class="copyright">© <span id="year"></span> TJ Enterprise</p></footer>`;
}

function shell({ route, title, description, content, image, interactive3d = false }) {
  const canonical = `${publicUrl}${route ? `${route}/` : ''}`;
  const share = `${publicUrl}${image || 'images/tj-enterprise-offshore.png'}`;
  return `<!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#101719">
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${esc(canonical)}">
  <link rel="icon" type="image/png" href="${asset(route, 'images/tj-enterprise-favicon.png')}">
${route ? `  <link rel="preload" as="image" href="${asset(route, 'images/tj-enterprise-offshore.png')}">\n` : ''}  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)} | TJ Enterprise">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${esc(share)}">
  <title>${esc(title)} | TJ Enterprise</title>
  <link rel="stylesheet" href="${asset(route, 'styles.css?v=4')}">
  <link rel="stylesheet" href="${asset(route, 'site.css?v=1')}">
  <script src="${asset(route, 'script.js?v=4')}" defer></script>
${interactive3d ? `  <script type="importmap">{ "imports": { "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js", "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/" } }</script><script type="module" src="${asset(route, 'platform-3d.js?v=5')}"></script>\n` : ''}</head>
<body>
${header(route)}
<main id="main">${content}</main>
${footer(route)}
</body>
</html>`;
}

function hero({ route, title, eyebrow = 'Projectervaring', intro = '', image, home = false, titleHtml }) {
  return `<section class="hero ${home ? 'hero-home' : 'page-hero'}">
  <img class="hero-image" src="${asset(route, image || 'images/tj-enterprise-offshore.png')}" alt="" aria-hidden="true" fetchpriority="high">
  <div class="hero-shade" aria-hidden="true"></div>
  <div class="hero-content"><p class="eyebrow"><span class="eyebrow-line"></span>${esc(eyebrow)}</p><h1 data-letter-pop>${titleHtml || esc(title)}</h1>${intro ? `<p class="hero-copy">${esc(intro)}</p>` : ''}${home ? link(route, 'projecten', 'Ontdek onze projecten', 'button button-light') : ''}</div>
  <div class="hero-foot"><span>TJ ENTERPRISE</span><span>OFFSHORE PLATFORMBOUW</span></div><span class="hero-scroll-mark" aria-hidden="true"></span>
</section>`;
}

function projectCard(from, project) {
  const category = categories.find((item) => item.slug === project.category);
  return `<a class="project-card reveal" href="${routeHref(from, `projecten/${project.slug}`)}">
    <span class="project-card-image"><img src="${asset(from, project.image)}" alt="${esc(project.title)}" loading="lazy"></span>
    <span class="project-card-copy"><span class="project-card-kicker">${esc(category?.label || '')} <span aria-hidden="true">/</span> ${esc(project.client)}</span><span class="project-card-title">${esc(project.title)}</span><span class="project-card-arrow" aria-hidden="true">↗</span></span>
  </a>`;
}

function categoryLinks(from, active = '') {
  return `<div class="category-links"><a class="category-pill${active === 'all' ? ' is-active' : ''}" href="${routeHref(from, 'projecten')}">Alle projecten <span>${projects.length}</span></a>${categories.map((category) => {
    const count = projects.filter((project) => project.category === category.slug).length;
    return `<a class="category-pill${active === category.slug ? ' is-active' : ''}" href="${routeHref(from, `projecten/${category.slug}`)}">${esc(category.label)} <span>${count}</span></a>`;
  }).join('')}</div>`;
}

function projectGrid(from, items) { return `<div class="project-grid">${items.map((project) => projectCard(from, project)).join('')}</div>`; }

function categoryCards(from) {
  return `<div class="sector-grid">${categories.map((category, index) => {
    const count = projects.filter((project) => project.category === category.slug).length;
    return `<a class="sector-card reveal" href="${routeHref(from, `projecten/${category.slug}`)}"><span class="sector-index">0${index + 1}</span><span class="sector-title">${esc(category.label)}</span><span class="sector-description">${esc(category.description)}</span><span class="sector-count">${count} ${count === 1 ? 'project' : 'projecten'} <span aria-hidden="true">↗</span></span></a>`;
  }).join('')}</div>`;
}

function pageCards(from, routes) {
  const items = routes.map((route) => pages.find((page) => page.route === route)).filter(Boolean);
  return `<div class="page-card-grid">${items.map((page, index) => `<a class="page-card reveal" href="${routeHref(from, page.route)}"><span class="page-card-index">0${index + 1}</span><span class="page-card-title">${esc(page.title)}</span><span class="page-card-arrow" aria-hidden="true">↗</span><p>${esc(page.intro)}</p></a>`).join('')}</div>`;
}

function breadcrumbs(from, label, parent = 'projecten') {
  return `<nav class="breadcrumbs" aria-label="Broodkruimelpad"><a href="${routeHref(from, '')}">Home</a><span aria-hidden="true">/</span><a href="${routeHref(from, parent)}">${parent === 'projecten' ? 'Projecten' : 'Over TJ'}</a><span aria-hidden="true">/</span><span aria-current="page">${esc(label)}</span></nav>`;
}

function homeContent() {
  const intro = `<section class="section-wrap intro-panel reveal" id="aanpak"><p class="eyebrow"><span class="eyebrow-line"></span>Onafhankelijk. Technisch. Offshore.</p><div class="intro-grid"><h2>Gebouwd voor de <span>complexiteit van zee.</span></h2><div class="intro-text"><p>TJ Enterprise is een onafhankelijk bedrijf dat offshoreplatformen bouwt voor de olie- en gassector. Onze projectervaring omvat ook offshore wind, maritieme constructies en industriële projecten.</p>${link('', 'over-ons', 'Meer over TJ Enterprise')}</div></div></section>
<section class="section-wrap projects-section"><div class="section-heading"><div><p class="eyebrow"><span class="eyebrow-line"></span>Geselecteerde projecten</p><h2>Werk dat <span>verder reikt.</span></h2></div>${link('', 'projecten', 'Bekijk alle projecten')}</div>${projectGrid('', projects.slice(0, 4))}</section>
<section class="section-wrap sectors-section" id="expertise"><div class="section-heading"><div><p class="eyebrow"><span class="eyebrow-line"></span>Ervaring in vijf sectoren</p><h2>Van platform tot <span>windpark.</span></h2></div><p class="section-heading-copy">Een selectie van projecten in offshore, energie en industrie.</p></div>${categoryCards('')}</section>
<section class="section-wrap approach-section"><div class="approach-card reveal"><p class="eyebrow"><span class="eyebrow-line"></span>Onze kern</p><h2>Offshore<br><span>platformbouw.</span></h2><p>Onafhankelijke bouw van offshoreplatformen voor de olie- en gassector.</p>${link('', 'diensten/platformbouw', 'Ontdek onze expertise')}</div><div class="approach-image"><img src="images/tj-enterprise-offshore.png" alt="Offshore kraanschip Sleipnir bij zonsondergang" loading="lazy"></div></section>`;
  const platform3d = `<section class="platform3d section-wrap" id="platform"><p class="eyebrow reveal"><span class="eyebrow-line"></span>Interactief model</p><div class="platform3d-head reveal"><h2>Zelf verkennen.<br><span>Draai het schip.</span></h2><p>Een interactieve weergave van een offshore kraanschip op zee bij zonsondergang. Sleep om te draaien, scroll om in te zoomen.</p></div><div class="platform3d-stage reveal" id="platform-stage"><canvas id="platform-canvas" role="img" aria-label="3D-weergave van een semi-submersible offshore kraanschip op zee bij zonsondergang, te besturen met de muis of vinger"></canvas><p class="platform3d-hint" aria-hidden="true">Sleep om te draaien</p><p class="platform3d-loading" id="platform-loading">Model wordt geladen…</p></div></section>`;
  return `${hero({ route: '', title: 'Gebouwd voor de open zee.', titleHtml: 'Gebouwd voor<br><span>de open zee.</span>', eyebrow: 'Onafhankelijke offshorebouwer', intro: 'Offshoreplatformen gebouwd voor de wereldwijde olie- en gassector.', home: true })}${platform3d}${intro}`;
}

function projectsContent(page) {
  const category = page.category ? categories.find((item) => item.slug === page.category) : null;
  const items = category ? projects.filter((project) => project.category === category.slug) : projects;
  const heroImage = items[0]?.image || 'images/tj-enterprise-offshore.png';
  return `${hero({ route: page.route, title: page.title, eyebrow: page.eyebrow, intro: page.intro, image: heroImage })}<section class="section-wrap archive-section">${breadcrumbs(page.route, page.title)}<div class="section-heading archive-heading"><div><p class="eyebrow"><span class="eyebrow-line"></span>${category ? 'Projectcategorie' : 'Portfolio'}</p><h2>${category ? esc(category.label) : 'Alle projecten'} <span>(${items.length})</span></h2></div><p class="section-heading-copy">${esc(page.body)}</p></div>${categoryLinks(page.route, category?.slug || 'all')}${projectGrid(page.route, items)}</section>`;
}

function projectContent(project) {
  const route = `projecten/${project.slug}`;
  const category = categories.find((item) => item.slug === project.category);
  const other = projects.filter((item) => item.category === project.category && item.slug !== project.slug).slice(0, 3);
  const related = other.length ? other : projects.filter((item) => item.slug !== project.slug).slice(0, 3);
  return `${hero({ route, title: project.title, eyebrow: `${category?.label || 'Project'} / ${project.client}`, intro: project.summary, image: project.image })}
  <section class="section-wrap case-section">${breadcrumbs(route, project.title)}<div class="case-layout"><div class="case-copy"><p class="eyebrow"><span class="eyebrow-line"></span>Projectcontext</p><h2>Een offshoreproject met <span>een eigen schaal.</span></h2><p>${esc(project.summary)}</p><p>De onderstaande kerngegevens beschrijven de openbare projectcontext. Neem contact op voor informatie over de specifieke rol van TJ Enterprise binnen dit project.</p></div><aside class="case-facts"><p class="eyebrow">Project in cijfers</p><p class="case-client">${esc(project.client)}</p><ul>${project.facts.map((fact) => `<li>${esc(fact)}</li>`).join('')}</ul></aside></div><figure class="case-image"><img src="${asset(route, project.image)}" alt="${esc(project.title)} — projectbeeld" loading="lazy"></figure></section>
  ${related.length ? `<section class="section-wrap related-section"><div class="section-heading"><div><p class="eyebrow"><span class="eyebrow-line"></span>Verder ontdekken</p><h2>Meer projecten <span>in dit domein.</span></h2></div>${link(route, `projecten/${project.category}`, `Alle ${esc(category?.label || 'projecten')}`)}</div>${projectGrid(route, related)}</section>` : ''}`;
}

function genericContent(page) {
  const heroImage = page.category ? projects.find((item) => item.category === page.category)?.image : undefined;
  let extra = '';
  if (page.route === 'diensten' || page.route === 'expertise') extra = categoryCards(page.route);
  if (page.route === 'diensten') extra += `<div class="subsection-heading"><p class="eyebrow">Onze focus</p><h2>Een heldere <span>scope.</span></h2></div>${pageCards(page.route, page.related)}`;
  if (page.route === 'over-ons') extra = pageCards(page.route, page.related);
  if (page.related && !['diensten', 'over-ons'].includes(page.route)) extra = pageCards(page.route, page.related);
  if (page.route === 'contact') extra = `<div class="contact-detail reveal"><span class="contact-label">E-mail</span><a href="mailto:info@tjenterprise.nl">info@tjenterprise.nl <span aria-hidden="true">↗</span></a><p>De knop opent een e-mailconcept in je eigen mailprogramma. Er wordt geen formulier verstuurd.</p></div>`;
  if (page.route === 'werken-bij') extra = `<div class="contact-detail reveal"><span class="contact-label">Open gesprek</span><a href="mailto:info@tjenterprise.nl?subject=Werken%20bij%20TJ%20Enterprise">Stuur een introductie <span aria-hidden="true">↗</span></a><p>Er staan momenteel geen concrete vacatures online.</p></div>`;
  if (page.category) {
    const category = categories.find((item) => item.slug === page.category);
    const items = projects.filter((item) => item.category === page.category);
    extra = `<div class="section-heading compact-heading"><div><p class="eyebrow"><span class="eyebrow-line"></span>Projecten</p><h2>${esc(category?.label || '')} <span>(${items.length})</span></h2></div></div>${projectGrid(page.route, items)}${link(page.route, 'projecten', 'Terug naar alle projecten')}`;
  }
  return `${hero({ route: page.route, title: page.title, eyebrow: page.eyebrow, intro: page.intro, image: heroImage })}<section class="section-wrap content-section"><div class="content-narrow"><p class="eyebrow"><span class="eyebrow-line"></span>${esc(page.eyebrow)}</p><h2>${esc(page.title)} <span>in het kort.</span></h2><p class="content-lead">${esc(page.body)}</p>${page.route.startsWith('diensten') ? link(page.route, 'projecten', 'Bekijk projectervaring') : ''}</div>${extra}</section>`;
}

async function writePage(route, html) {
  const target = route ? path.join(root, route, 'index.html') : path.join(root, 'index.html');
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, `${html}\n`, 'utf8');
}

for (const page of pages) {
  const html = shell({ route: page.route, title: page.title, description: page.intro, content: genericContent(page), image: page.category ? projects.find((project) => project.category === page.category)?.image : undefined });
  await writePage(page.route, html);
}

await writePage('', shell({ route: '', title: 'Offshoreplatformen voor de open zee', description: 'TJ Enterprise is een onafhankelijk bedrijf dat offshoreplatformen bouwt voor de olie- en gassector.', content: homeContent(), interactive3d: true }));

for (const page of pages.filter((item) => item.route === 'projecten' || item.route.startsWith('projecten/'))) {
  if (page.route === 'projecten' || page.category) {
    const html = shell({ route: page.route, title: page.title, description: page.intro, content: projectsContent(page), image: projects.find((project) => project.category === page.category)?.image });
    await writePage(page.route, html);
  }
}

for (const project of projects) {
  const route = `projecten/${project.slug}`;
  const html = shell({ route, title: project.title, description: project.summary, content: projectContent(project), image: project.image });
  await writePage(route, html);
}

const notFound = shell({ route: '', title: 'Pagina niet gevonden', description: 'Deze pagina bestaat niet of is verplaatst.', content: `${hero({ route: '', title: 'Deze pagina is op zee verdwenen.', eyebrow: '404', intro: 'De pagina die je zoekt, is niet gevonden.' })}<section class="section-wrap content-section">${link('', 'projecten', 'Bekijk projecten')}</section>` });
await writeFile(path.join(root, '404.html'), `${notFound}\n`, 'utf8');
const sitemap = pageRoutes.map((route) => `<url><loc>${esc(`${publicUrl}${route ? `${route}/` : ''}`)}</loc></url>`).join('');
await writeFile(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap}</urlset>\n`, 'utf8');
await writeFile(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${publicUrl}sitemap.xml\n`, 'utf8');
console.log(`Generated ${pageRoutes.length} static routes (18 information pages + ${projects.length} project cases).`);
