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

const navItems = [
  ['projecten', 'Projecten'],
  ['diensten', 'Diensten'],
  ['expertise', 'Expertise'],
  ['over-ons', 'Over TJ'],
  ['werken-bij', 'Werken bij'],
  ['contact', 'Contact'],
];

function nav(from) {
  return navItems.map(([route, label]) => `<a href="${routeHref(from, route)}"${from === route ? ' aria-current="page"' : ''}>${label}</a>`).join('');
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
  return `<section class="contact-band reveal"><div class="contact-inner"><p class="eyebrow"><span class="eyebrow-line"></span>Beschikbaar voor projecten</p><h2>Een project op zee?<br><span>Laten we praten.</span></h2><a class="button button-outline" href="mailto:info@tjenterprise.nl">Neem contact op <span aria-hidden="true">↗</span></a></div><span class="contact-watermark" aria-hidden="true">TJ</span></section>
<footer class="site-footer"><a class="brand footer-brand" href="${routeHref(from, '')}"><img class="brand-logo" src="${asset(from, 'images/tj-enterprise-logo-transparent.png')}" alt="TJ Enterprise"></a><p>Onafhankelijke quality engineering<br>Regio Rotterdam, Nederland</p><nav class="footer-nav" aria-label="Footernavigatie">${navItems.map(([route, label]) => `<a href="${routeHref(from, route)}">${label}</a>`).join('')}</nav><a href="mailto:info@tjenterprise.nl">info@tjenterprise.nl</a><p class="copyright">© <span id="year"></span> TJ Enterprise · Conceptontwerp voor Qunited BV; TJ Enterprise is een voorbeeldnaam</p></footer>`;
}

function shell({ route, title, description, content, image, homepage = false }) {
  const canonical = `${publicUrl}${route ? `${route}/` : ''}`;
  const share = `${publicUrl}${image || 'images/tj-enterprise-offshore.png'}`;
  return `<!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#101719">
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="noindex,nofollow">
  <link rel="canonical" href="${esc(canonical)}">
  <link rel="icon" type="image/png" href="${asset(route, 'images/tj-enterprise-favicon.png')}">
  <link rel="preload" as="image" href="${asset(route, image || 'images/tj-enterprise-offshore.png')}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)} | TJ Enterprise">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${esc(share)}">
  <title>${esc(title)} | TJ Enterprise</title>
  <link rel="stylesheet" href="${asset(route, 'styles.css?v=5')}">
  <link rel="stylesheet" href="${asset(route, 'site.css?v=7')}">
  <script src="${asset(route, 'script.js?v=6')}" defer></script>
</head>
<body${route ? ` class="interior-page" style="--page-backdrop:url('${esc(image || 'images/tj-enterprise-offshore.png')}')"` : ` class="home-page" style="--page-backdrop:url('${esc(image || 'images/tj-enterprise-offshore.png')}')"`}>
${homepage ? `<video class="homepage-background-video" id="homepage-background-video" muted loop playsinline preload="metadata" poster="${asset(route, 'images/homepage-background-poster.jpg')}?v=2" aria-hidden="true" tabindex="-1"><source src="${asset(route, 'images/homepage-background.mp4')}?v=2" type="video/mp4"></video>` : ''}
${header(route)}
${homepage ? `<button class="background-video-toggle" id="homepage-background-video-toggle" type="button" aria-controls="homepage-background-video" aria-label="Speel achtergrondvideo af" aria-pressed="false" hidden>Speel video</button>` : ''}
<main id="main">${content}</main>
${footer(route)}
</body>
</html>`;
}

function hero({ route, title, eyebrow = 'Projectervaring', intro = '', image, home = false, titleHtml, extraHtml = '' }) {
  return `<section class="hero ${home ? 'hero-home' : 'page-hero'}">
  <img class="hero-image" src="${asset(route, image || 'images/tj-enterprise-offshore.png')}" alt="" aria-hidden="true" fetchpriority="high">
  <div class="hero-shade" aria-hidden="true"></div>
  <div class="hero-content"><p class="eyebrow"><span class="eyebrow-line"></span>${esc(eyebrow)}</p><h1 data-letter-pop>${titleHtml || esc(title)}</h1>${intro ? `<p class="hero-copy">${esc(intro)}</p>` : ''}${extraHtml}${home ? link(route, 'projecten', 'Ontdek onze projecten', 'button button-light') : ''}</div>
  <div class="hero-foot"><span>TJ ENTERPRISE</span><span>QUALITY ENGINEERING · ASSURANCE · CONTROL</span></div><span class="hero-scroll-mark" aria-hidden="true"></span>
</section>`;
}

function projectCard(from, project, attrs = '') {
  const category = categories.find((item) => item.slug === project.category);
  return `<a class="project-card reveal"${attrs} href="${routeHref(from, `projecten/${project.slug}`)}">
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

function cardGrid(cards) {
  if (!cards?.items?.length) return '';
  return `<div class="subsection-heading"><p class="eyebrow">${esc(cards.eyebrow)}</p><h2>${esc(cards.title)} <span>${esc(cards.accent)}</span></h2></div><div class="value-grid">${cards.items.map((item, index) => `<article class="value-card reveal"><span class="value-index">${String(index + 1).padStart(2, '0')}</span><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></article>`).join('')}</div>`;
}

function clientList() {
  const names = [...new Set(projects.flatMap((project) => project.client.split(' / ').map((name) => name.trim())))];
  return `<div class="subsection-heading"><p class="eyebrow">Opdrachtgevers</p><h2>Bedrijven waarvoor <span>we werkten.</span></h2></div><ul class="client-list reveal">${names.map((name) => `<li>${esc(name)}</li>`).join('')}</ul>`;
}

const featuredSlugs = new Set(projects.slice(0, 6).map((project) => project.slug));

function projectFilter(from) {
  const pills = [`<a class="category-pill is-active" href="${routeHref(from, 'projecten')}" data-filter="all">Alle</a>`, ...categories.map((category) => `<a class="category-pill" href="${routeHref(from, `projecten/${category.slug}`)}" data-filter="${category.slug}">${esc(category.label)}</a>`)].join('');
  const cards = projects.map((project) => projectCard(from, project, ` data-category="${project.category}" data-featured="${featuredSlugs.has(project.slug)}"${featuredSlugs.has(project.slug) ? '' : ' hidden'}`)).join('');
  return `<div class="category-links project-filter" data-project-filter aria-label="Filter projecten op sector">${pills}</div><div class="project-grid" data-project-grid>${cards}</div>`;
}

function homeContent() {
  const sectors = ['energie', 'olie & gas', 'maritiem', 'petrochemie', 'defensie'];
  const rotator = `<p class="hero-sectors" data-rotator aria-hidden="true"><span class="hero-sectors-label">Voor</span> ${sectors.map((sector, index) => `<span class="hero-sector${index === 0 ? ' is-active' : ''}">${esc(sector)}</span>`).join('')}</p>`;
  const intro = `<section class="section-wrap intro-panel reveal" id="aanpak"><p class="eyebrow"><span class="eyebrow-line"></span>Onafhankelijk. Multidisciplinair. Technisch.</p><div class="intro-grid"><h2>Kwaliteit van ontwerp <span>tot oplevering.</span></h2><div class="intro-text"><p>TJ Enterprise is een onafhankelijk bedrijf voor quality engineering, assurance en control, gevestigd nabij de haven van Rotterdam. We overbruggen de kloof tussen algemene engineeringondersteuning en de specialistische kennis die nodig is om kwaliteit echt te borgen.</p>${link('', 'over-ons', 'Meer over TJ Enterprise')}</div></div></section>
<section class="section-wrap specialist-section reveal"><div class="specialist-card"><div><p class="eyebrow"><span class="eyebrow-line"></span>Direct schakelen</p><h2>Vraag onze specialist <span>op het gebied van kwaliteit.</span></h2></div><div class="specialist-copy"><p>Materialen, lassen, NDT, coating, E&amp;I of certificering: vertel ons wat je project nodig heeft en we koppelen je aan de juiste specialist.</p><div class="specialist-actions"><a class="button button-light" href="mailto:info@tjenterprise.nl?subject=Vraag%20aan%20een%20specialist">Vraag een specialist <span aria-hidden="true">↗</span></a>${link('', 'expertise', 'Bekijk onze expertise')}</div></div></div><p class="membership-strip"><span class="membership-label">Lidmaatschap</span>Lid van de brancheorganisatie Maritime &amp; Offshore NL</p></section>
<section class="section-wrap projects-section"><div class="section-heading"><div><p class="eyebrow"><span class="eyebrow-line"></span>Geselecteerde projecten</p><h2>Werk dat <span>verder reikt.</span></h2></div>${link('', 'projecten', 'Bekijk alle projecten')}</div>${projectFilter('')}</section>
<section class="section-wrap sectors-section" id="expertise"><div class="section-heading"><div><p class="eyebrow"><span class="eyebrow-line"></span>Actief in vijf sectoren</p><h2>Van platform tot <span>windpark.</span></h2></div>${link('', 'expertise', 'Bekijk onze expertise')}</div>${categoryCards('')}</section>
<section class="section-wrap approach-section"><div class="approach-card reveal"><p class="eyebrow"><span class="eyebrow-line"></span>Onze kern</p><h2>Quality engineering,<br><span>assurance &amp; control.</span></h2><p>Zeven technische disciplines, van materialen en lastechniek tot E&amp;I en drukapparatuur, in iedere fase van het project.</p>${link('', 'diensten', 'Ontdek onze diensten')}</div><div class="approach-image"><img src="images/tj-enterprise-offshore.png" alt="Offshore kraanschip Sleipnir bij zonsondergang" loading="lazy"></div></section>
<section class="section-wrap intro-panel reveal" id="werken-bij"><p class="eyebrow"><span class="eyebrow-line"></span>Werken bij TJ</p><div class="intro-grid"><h2>Bouw mee aan <span>een groeiend team.</span></h2><div class="intro-text"><p>We zoeken ervaren quality engineers, inspecteurs, auditors en specialisten, in vaste dienst of op contractbasis, parttime of fulltime.</p>${link('', 'werken-bij', 'Werken bij TJ Enterprise')}</div></div></section>`;
  return `${hero({ route: '', title: 'Kwaliteit voor de open zee.', titleHtml: 'Kwaliteit voor<br><span>de open zee.</span>', eyebrow: 'Quality engineering, assurance & control', intro: 'Onafhankelijke kwaliteitsexpertise voor energie, olie & gas, maritiem, petrochemie en defensie.', extraHtml: rotator, home: true })}${intro}`;
}

function applyForm() {
  const areas = ['Pipeline', 'Piping', 'Coating', 'Lastechniek en metallurgie', 'NDT', 'Elektrotechniek en instrumentatie', 'Wet- en regelgeving', 'Anders'];
  return `<form class="apply-form reveal" data-apply-form action="mailto:info@tjenterprise.nl?subject=Sollicitatie" method="post" enctype="text/plain">
  <p class="contact-label">Solliciteer direct</p><h3>Word onderdeel van het team</h3>
  <div class="form-row"><label for="apply-name">Naam <span aria-hidden="true">*</span></label><input id="apply-name" name="naam" autocomplete="name" required></div>
  <div class="form-row"><label for="apply-email">E-mailadres <span aria-hidden="true">*</span></label><input id="apply-email" name="email" type="email" autocomplete="email" required></div>
  <div class="form-row"><label for="apply-phone">Telefoonnummer</label><input id="apply-phone" name="telefoon" type="tel" autocomplete="tel"></div>
  <div class="form-row"><label for="apply-area">Vakgebied</label><select id="apply-area" name="vakgebied">${areas.map((area) => `<option>${esc(area)}</option>`).join('')}</select></div>
  <fieldset class="form-row"><legend>Type dienstverband</legend><div class="form-choices">${['Fulltime', 'Parttime', 'Contractbasis'].map((type, index) => `<label><input type="radio" name="dienstverband" value="${type}"${index === 0 ? ' checked' : ''}> ${type}</label>`).join('')}</div></fieldset>
  <div class="form-row"><label for="apply-motivation">Motivatie <span aria-hidden="true">*</span></label><textarea id="apply-motivation" name="motivatie" rows="5" required></textarea></div>
  <p class="form-note">Na verzenden opent je eigen e-mailprogramma met je gegevens ingevuld. Voeg daar je cv toe als bijlage.</p>
  <button class="button button-light" type="submit">Verstuur sollicitatie <span aria-hidden="true">↗</span></button>
</form>`;
}

function projectsContent(page) {
  const category = page.category ? categories.find((item) => item.slug === page.category) : null;
  const items = category ? projects.filter((project) => project.category === category.slug) : projects;
  const heroImage = items[0]?.image || 'images/tj-enterprise-offshore.png';
  return `${hero({ route: page.route, title: page.title, eyebrow: page.eyebrow, intro: page.intro, image: heroImage })}<section class="section-wrap archive-section">${breadcrumbs(page.route, page.title)}<div class="section-heading archive-heading"><div><p class="eyebrow"><span class="eyebrow-line"></span>${category ? 'Projectcategorie' : 'Portfolio'}</p><h2>${category ? esc(category.label) : 'Alle projecten'} <span>(${items.length})</span></h2></div><p class="section-heading-copy">${esc(page.body)}</p></div>${categoryLinks(page.route, category?.slug || 'all')}${projectGrid(page.route, items)}${proseSections(page.sections)}</section>`;
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

function proseSections(sections) {
  if (!sections?.length) return '';
  return `<div class="content-prose">${sections.map((section) => `<section class="prose-block reveal"><h3>${esc(section.title)}</h3>${(section.body || []).map((paragraph) => `<p>${esc(paragraph)}</p>`).join('')}${section.list?.length ? `<ul class="prose-list">${section.list.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>` : ''}</section>`).join('')}</div>`;
}

function genericContent(page) {
  const heroImage = page.category ? projects.find((item) => item.category === page.category)?.image : undefined;
  let extra = '';
  if (page.route === 'diensten') extra = `<div class="subsection-heading"><p class="eyebrow">Onze diensten</p><h2>Drie dienstengroepen, <span>één aanspreekpunt.</span></h2></div>${pageCards(page.route, page.related)}<div class="subsection-heading"><p class="eyebrow">Sectoren</p><h2>Waar we <span>actief zijn.</span></h2></div>${categoryCards(page.route)}`;
  else if (page.route === 'expertise') extra = `<div class="subsection-heading"><p class="eyebrow">Diensten</p><h2>Hoe we de disciplines <span>inzetten.</span></h2></div>${pageCards(page.route, page.related)}<div class="subsection-heading"><p class="eyebrow">Actief in vijf sectoren</p><h2>Sectoren waarin <span>we werken.</span></h2></div>${categoryCards(page.route)}`;
  else if (page.route === 'over-ons') extra = `${clientList()}<div class="subsection-heading"><p class="eyebrow">Meer over ons</p><h2>Missie, visie <span>en waarden.</span></h2></div>${pageCards(page.route, page.related)}`;
  else if (page.route === 'contact') extra = `<div class="contact-detail reveal"><span class="contact-label">E-mail</span><a href="mailto:info@tjenterprise.nl">info@tjenterprise.nl <span aria-hidden="true">↗</span></a><p>De knop opent een e-mailconcept in je eigen mailprogramma.</p></div><div class="contact-detail reveal"><span class="contact-label">Vestiging</span><p class="contact-plain">Regio Rotterdam, Nederland</p><p>Gevestigd nabij de haven van Rotterdam. Onze specialisten werken op locatie: bij leveranciers, op de werf en bij de opdrachtgever, in Nederland en internationaal.</p></div>`;
  else if (page.route === 'werken-bij') extra = applyForm();
  else if (page.related) extra = pageCards(page.route, page.related);
  if (page.category) {
    const category = categories.find((item) => item.slug === page.category);
    const items = projects.filter((item) => item.category === page.category);
    extra = `<div class="section-heading compact-heading"><div><p class="eyebrow"><span class="eyebrow-line"></span>Projecten</p><h2>${esc(category?.label || '')} <span>(${items.length})</span></h2></div></div>${projectGrid(page.route, items)}${link(page.route, 'projecten', 'Terug naar alle projecten')}`;
  }
  const backLink = page.route.startsWith('diensten/') ? link(page.route, 'diensten', 'Alle diensten') : '';
  return `${hero({ route: page.route, title: page.title, eyebrow: page.eyebrow, intro: page.intro, image: heroImage })}<section class="section-wrap content-section"><div class="content-narrow"><p class="eyebrow"><span class="eyebrow-line"></span>${esc(page.eyebrow)}</p><h2>${esc(page.title)} <span>in het kort.</span></h2><p class="content-lead">${esc(page.body)}</p>${backLink}</div>${cardGrid(page.cards)}${proseSections(page.sections)}${extra}</section>`;
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

await writePage('', shell({ route: '', title: 'Quality engineering, assurance & control', description: 'TJ Enterprise is een onafhankelijk bedrijf voor quality engineering, assurance en control in olie & gas, maritiem, energie, petrochemie en defensie.', content: homeContent(), homepage: true }));

for (const page of pages.filter((item) => item.route === 'projecten' || item.route.startsWith('projecten/'))) {
  if (page.route === 'projecten' || page.category) {
    const html = shell({ route: page.route, title: page.title, description: page.intro, content: projectsContent(page), image: projects.find((project) => !page.category || project.category === page.category)?.image });
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
await writeFile(path.join(root, 'robots.txt'), `User-agent: *\nDisallow: /\n`, 'utf8');
console.log(`Generated ${pageRoutes.length} static routes (18 information pages + ${projects.length} project cases).`);
