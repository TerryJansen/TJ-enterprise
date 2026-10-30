export const categories = [
  { slug: 'olie-gas', label: 'Olie & gas', description: 'Offshoreplatformen, FPSO’s en subsea-ontwikkelingen.' },
  { slug: 'maritiem', label: 'Maritiem', description: 'Schepen, zwaar materieel en offshore constructies.' },
  { slug: 'energie', label: 'Offshore wind', description: 'Windparken, fundaties en offshore energie-infrastructuur.' },
  { slug: 'defensie', label: 'Defensie', description: 'Technische projecten voor maritieme en defensiegerelateerde toepassingen.' },
  { slug: 'petrochemie', label: 'Petrochemie', description: 'Industriële installaties en procesinfrastructuur.' },
];

export const projects = [
  {
    slug: 'de-ruyter', title: 'Nieuwbouw offshoreplatform De Ruyter', client: 'Petro Canada', category: 'olie-gas', image: 'images/projects/de-ruyter.jpg', imageUrl: 'https://qunited.eu/wp-content/uploads/2024/10/de_ruyter_platform3_full-1-1.jpg',
    summary: 'P11B omvatte een nieuw offshoreplatform met twee jacket towers, een geïntegreerd productieplatform en een gravity-based structure, inclusief subsea-leidingen en ROV-systemen.',
    facts: ['Integrated Production Deck (IPD)', 'Gravity Based Structure (GBS)', 'Locatie: Vlissingen en Zwijndrecht, Nederland'],
  },
  {
    slug: 'valhall', title: 'Nieuwbouw offshoreplatform Valhall', client: 'Aker BP', category: 'olie-gas', image: 'images/projects/valhall.jpg', imageUrl: 'https://qunited.eu/wp-content/uploads/2024/10/MG_7336-1.jpg',
    summary: 'Voor het Noorse Valhall-veld werd een geïntegreerde productie- en accommodatievoorziening gerealiseerd. De topside weegt circa 11.000 ton.',
    facts: ['Integrated Production & Hotel Facility', 'Topsides van circa 11.000 ton', 'Locatie: Zwijndrecht, Nederland'],
  },
  {
    slug: 'kaombo', title: 'Kaombo diepwaterproject', client: 'Total France', category: 'olie-gas', image: 'images/projects/kaombo.jpg', imageUrl: 'https://qunited.eu/wp-content/uploads/2024/10/projet_kaombo.jpg',
    summary: 'Kaombo ontwikkelt olievelden in Block 32 voor de kust van Angola. De ontwikkeling verbindt zes velden via ongeveer 300 kilometer subsea-leidingen met twee FPSO-schepen: Kaombo Norte en Kaombo Sul.',
    facts: ['Waterdiepte tot circa 2.000 meter', 'Ongeveer 300 km subsea-leidingen', 'Productiegebied: Block 32, Angola'],
  },
  {
    slug: 'audacia', title: 'Conversie pijplegschip Audacia', client: 'Allseas', category: 'maritiem', image: 'images/projects/audacia.jpg', imageUrl: 'https://qunited.eu/wp-content/uploads/2024/10/1920px-Audacia_-_port_of_rotterdam_173-1.jpg',
    summary: 'Een omvangrijke conversie van een pijplegschip met een stinger-pijplegsysteem, acht DP-thrusters, nieuwe machinekamers, extra kranen en accommodatie.',
    facts: ['Conversie van een offshore pijplegschip', 'Acht thrusters voor het DP-systeem', 'Locatie: Keppel Verolme, Rotterdam'],
  },
  {
    slug: 'sleipnir', title: 'Nieuwbouw kraanschip Sleipnir', client: 'Heerema Marine Contractors', category: 'maritiem', image: 'images/projects/sleipnir.jpg', imageUrl: 'https://qunited.eu/wp-content/uploads/2024/10/IMG_6019.jpg',
    summary: 'De Sleipnir is een semi-submersible crane vessel voor zwaar offshore hijswerk, met twee grote kranen en uitgebreide accommodatie aan boord.',
    facts: ['Twee kranen met elk 10.000 ton hijscapaciteit', 'Lengte: circa 220 meter', 'Accommodatie voor circa 400 personen'],
  },
  {
    slug: 'piranema', title: 'Nieuwbouw FPSO SSP Piranema', client: 'Sevan Marine', category: 'olie-gas', image: 'images/projects/piranema.jpg', imageUrl: 'https://qunited.eu/wp-content/uploads/2024/10/foto16.jpg',
    summary: 'De SSP Piranema is een nieuwgebouwde FPSO voor Petrobras, met een opslagcapaciteit van 250.000 vaten en 25 slots. Het project omvatte procesinstallaties en maritieme systemen.',
    facts: ['Opslagcapaciteit: 250.000 vaten', '25 slots', 'Locatie: Keppel Verolme, Rotterdam'],
  },
  {
    slug: 'northwester-2', title: 'Offshore windpark Northwester 2', client: 'Parkwind', category: 'energie', image: 'images/projects/northwester-2.jpg', imageUrl: 'https://qunited.eu/wp-content/uploads/2024/10/Northwester-2-offshore-wind-farm-platform.jpg',
    summary: 'Northwester 2 is een offshore windproject van 219 MW met 23 windturbines. De productie is voldoende voor het elektriciteitsverbruik van ongeveer 230.000 huishoudens.',
    facts: ['Vermogen: 219 MW', '23 offshore windturbines', 'Fundaties en fabricage in België, Denemarken en Polen'],
  },
  {
    slug: 'norther', title: 'Offshore windpark Norther', client: 'Elicio / Eneco', category: 'energie', image: 'images/projects/norther.jpg', imageUrl: 'https://qunited.eu/wp-content/uploads/2024/10/V164-1.jpg',
    summary: 'Norther is een offshore windpark voor de Belgische kust. Bij voltooiing levert het project duurzame elektriciteit voor ongeveer 400.000 huishoudens.',
    facts: ['44 windturbinefundaties', 'Offshore hoogspanningsstation en kabels', 'Locatie: Belgische Noordzee'],
  },
  {
    slug: 'mxda-xa1', title: 'Nieuwbouw plant MXDA XA1', client: 'Kraft Europe / Mitsubishi Gas Chemical', category: 'petrochemie', image: 'images/projects/mxda-xa1.webp', imageUrl: 'https://qunited.eu/wp-content/uploads/2025/11/PHOTO-2025-09-22-15-38-46-1.webp',
    summary: 'Nieuwbouw van een chemische installatie voor Mitsubishi Gas Chemical. Het project omvatte mechanische en leidingwerkpakketten en de montage van meer dan 200 equipment-items.',
    facts: ['Project: MGCN MXDA XA-1', 'Meer dan 200 equipment-items', 'Locaties: Dubai, Hongarije en Rotterdam-Botlek'],
  },
  {
    slug: 'ram-jetty-cranes', title: 'RAM luffing jetty cranes', client: 'MoD UK', category: 'defensie', image: 'images/projects/ram-jetty-cranes.webp', imageUrl: 'https://qunited.eu/wp-content/uploads/2025/11/Ammunition-Jetty-Portsmouth-topaz-high-fidelity-v2-4x.webp',
    summary: 'Een project voor luffing-jettykranen met kwaliteits- en documentatie-eisen voor een defensiegerelateerde maritieme toepassing. De fabricagelocatie is niet openbaar vermeld.',
    facts: ['Opdrachtgever: MoD UK', 'Technische norm: JSP467', 'Fabricagelocatie: Nederland, niet openbaar vermeld'],
  },
  {
    slug: 'k5cu', title: 'K5CU offshoreplatform en pijpleiding', client: 'Total E&P Nederland', category: 'olie-gas', image: 'images/projects/k5cu.jpg', imageUrl: 'https://qunited.eu/wp-content/uploads/2024/10/K5CU-132.jpg',
    summary: 'K5CU omvatte een nieuw offshoreplatform met jacket en topsides, gasverwerkingsapparatuur en een subsea-pijpleidingontwikkeling in het Nederlandse deel van de Noordzee.',
    facts: ['Platform met 8 slots', 'Gasverwerking, energieopwekking en helideck', 'Risers: 10 inch export en 3 inch DEG'],
  },
  {
    slug: 'changhua', title: 'Changhua offshore windproject', client: 'Ørsted', category: 'energie', image: 'images/projects/changhua.jpg', imageUrl: 'https://qunited.eu/wp-content/uploads/2024/10/Changhua-Offshore-Wind-Farm-2MB-1.jpg',
    summary: 'Het Changhua-windpark voor de kust van Taiwan bestaat uit 21 offshore windturbines van elk 5,2 MW. Het project omvatte onder meer fundaties, kabels en turbine-installatie.',
    facts: ['21 windturbines van 5,2 MW', 'Totaal vermogen: circa 109 MW', 'Locatie: Taiwan'],
  },
  {
    slug: 'borssele', title: 'Borssele III & IV en Borssele V', client: 'Blauwwind / Eneco', category: 'energie', image: 'images/projects/borssele.jpg', imageUrl: 'https://qunited.eu/wp-content/uploads/2024/10/installation_09.jpg',
    summary: 'Borssele III & IV en Borssele V liggen circa 22 kilometer uit de kust van Zeeland. De projecten omvatten fundaties en inter-array kabels voor offshore windenergie.',
    facts: ['Borssele III & IV: 77 turbines', 'Borssele V: 2 R&D-turbines', 'Verwachte productie: meer dan 3.200 GWh per jaar'],
  },
  {
    slug: 'deutsche-bucht', title: 'Offshore windpark Deutsche Bucht', client: 'Northland Power', category: 'energie', image: 'images/projects/deutsche-bucht.jpg', imageUrl: 'https://qunited.eu/wp-content/uploads/2024/10/20180620_114341.jpg',
    summary: 'Deutsche Bucht ligt circa 95 kilometer ten noordwesten van Borkum in de Duitse Bocht. Het windpark bestaat uit 31 turbines en heeft een vermogen van 252 MW.',
    facts: ['31 windturbines van 8 MW', 'Totaal vermogen: 252 MW', 'Locatie: Duitse Bocht, Noordzee'],
  },
];

export const pages = [
  { route: 'diensten', title: 'Diensten', eyebrow: 'Wat we doen', intro: 'TJ Enterprise is een onafhankelijk bedrijf dat offshoreplatformen bouwt. Onze projectervaring strekt zich uit over offshore olie & gas, windenergie, maritieme constructies en industriële projecten.', body: 'Ontdek onze kernactiviteit en de sectoren waarin onze projectervaring ligt.', related: ['diensten/platformbouw', 'diensten/offshore-wind', 'diensten/industrie'] },
  { route: 'diensten/platformbouw', title: 'Offshore platformbouw', eyebrow: 'Kernactiviteit', intro: 'Onafhankelijke bouw van offshoreplatformen voor projecten in de olie- en gassector.', body: 'Van platformconcept tot een constructie die klaar is voor de offshore omgeving: TJ Enterprise richt zich op het bouwen van offshoreplatformen. De projectpagina’s geven een beeld van de uiteenlopende installaties en omgevingen waarin die ervaring is opgedaan.', category: 'olie-gas' },
  { route: 'diensten/offshore-wind', title: 'Offshore wind', eyebrow: 'Projectervaring', intro: 'Offshore windparken vragen om grootschalige constructies, fundaties en infrastructuur op zee.', body: 'Het portfolio bevat projecten aan de Noordzee en daarbuiten, van windparkfundaties tot offshore hoogspanningsstations. Bekijk de bijbehorende cases voor projectcontext en technische gegevens.', category: 'energie' },
  { route: 'diensten/industrie', title: 'Maritieme & industriële projecten', eyebrow: 'Projectervaring', intro: 'Naast offshoreplatformen omvat de projectervaring ook scheepsconversies, petrochemische installaties en maritieme constructies.', body: 'Deze projecten laten verschillende technische omgevingen zien. De gepubliceerde case-informatie beschrijft de installatie en projectcontext; voor specifieke rollen of werkzaamheden kun je contact opnemen.', related: ['projecten/maritiem', 'projecten/petrochemie', 'projecten/defensie'] },
  { route: 'expertise', title: 'Expertise & projectervaring', eyebrow: 'Sectoren', intro: 'Een projectportfolio met ervaring in olie & gas, maritieme constructies, offshore wind, defensie en petrochemie.', body: 'TJ Enterprise bouwt offshoreplatformen voor de olie- en gassector. Daaromheen reikt de projectervaring verder: offshore wind, maritieme constructies, petrochemie en defensiegerelateerde projecten. Hieronder staan de diensten en de sectoren waarin die ervaring is opgebouwd.', related: ['diensten/platformbouw', 'diensten/offshore-wind', 'diensten/industrie'] },
  { route: 'projecten', title: 'Projecten', eyebrow: 'Geselecteerde ervaring', intro: 'Veertien projecten in vijf sectoren — van offshoreplatformen en FPSO’s tot windparken en industriële installaties.', body: 'Selecteer een sector of bekijk alle projecten. De detailpagina’s geven de projectcontext en belangrijkste technische gegevens weer.', related: ['projecten/olie-gas', 'projecten/maritiem', 'projecten/energie', 'projecten/defensie', 'projecten/petrochemie'] },
  { route: 'projecten/olie-gas', title: 'Olie & gas', eyebrow: 'Projecten', intro: 'Offshoreplatformen, diepwaterontwikkelingen, pijpleidingen en FPSO-projecten.', body: 'Bekijk projectcontext en technische kerngegevens van olie- en gasprojecten in het portfolio.', category: 'olie-gas' },
  { route: 'projecten/maritiem', title: 'Maritiem', eyebrow: 'Projecten', intro: 'Scheepsconversies en zwaar materieel voor werk op zee.', body: 'Bekijk projecten rond offshore schepen en maritieme constructies.', category: 'maritiem' },
  { route: 'projecten/energie', title: 'Offshore wind & energie', eyebrow: 'Projecten', intro: 'Offshore windparken, fundaties, kabels en energie-infrastructuur.', body: 'Bekijk de windprojecten en hun gepubliceerde projectgegevens.', category: 'energie' },
  { route: 'projecten/defensie', title: 'Defensie', eyebrow: 'Projecten', intro: 'Een maritiem hijskraanproject met beperkte openbare locatiegegevens.', body: 'Projectinformatie wordt beperkt tot openbaar vermelde gegevens; niet-openbare fabricagedetails worden niet getoond.', category: 'defensie' },
  { route: 'projecten/petrochemie', title: 'Petrochemie', eyebrow: 'Projecten', intro: 'Een nieuwbouwproject voor een chemische installatie in Rotterdam-Botlek.', body: 'Bekijk de projectcontext en technische kerngegevens van MXDA XA1.', category: 'petrochemie' },
  { route: 'over-ons', title: 'Over TJ Enterprise', eyebrow: 'Onafhankelijk offshorebedrijf', intro: 'TJ Enterprise is een onafhankelijk bedrijf dat offshoreplatformen bouwt voor de olie- en gassector.', body: 'Onze focus is helder: offshoreplatformen bouwen en projectervaring uit de offshore- en energiesector inzichtelijk maken. We werken vanuit een praktische, technische blik en houden de communicatie direct.', related: ['over-ons/missie', 'over-ons/visie', 'over-ons/waarden'] },
  { route: 'over-ons/missie', title: 'Onze missie', eyebrow: 'Waar we voor staan', intro: 'Bijdragen aan offshoreprojecten door platformen te bouwen die ontworpen zijn voor de realiteit van werken op zee.', body: 'TJ Enterprise richt zich op onafhankelijke offshoreplatformbouw. De missie is om techniek en uitvoering samen te brengen in constructies die hun functie op zee kunnen vervullen.' },
  { route: 'over-ons/visie', title: 'Onze visie', eyebrow: 'Vooruitkijken', intro: 'Offshoreprojecten vragen om sterke techniek, heldere samenwerking en oplossingen die bestand zijn tegen de omstandigheden op zee.', body: 'TJ Enterprise wil een herkenbare, onafhankelijke bouwer zijn binnen de offshoresector en bijdragen aan de volgende generatie offshore-infrastructuur.' },
  { route: 'over-ons/waarden', title: 'Onze waarden', eyebrow: 'Hoe we werken', intro: 'Veiligheid, vakmanschap en samenwerking vormen de basis van onze manier van werken.', body: 'Die waarden zijn richtinggevend voor elke opdracht: zorgvuldig omgaan met de offshore omgeving, kwaliteit serieus nemen en open communiceren met projectpartners.' },
  { route: 'werken-bij', title: 'Werken bij TJ Enterprise', eyebrow: 'Samen bouwen', intro: 'Interesse in offshore platformbouw of samenwerken met TJ Enterprise?', body: 'Op dit moment publiceren we geen concrete vacatures. Stuur een korte introductie per e-mail om te informeren naar toekomstige mogelijkheden.', related: ['contact'] },
  { route: 'contact', title: 'Contact', eyebrow: 'Neem contact op', intro: 'Bespreek een offshoreproject, stel een vraag of neem contact op over samenwerking.', body: 'Stuur een e-mail naar info@tjenterprise.nl. De knop opent een e-mailconcept in je eigen mailprogramma; er wordt geen formulier verstuurd.' },
];
