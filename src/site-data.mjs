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

const basePages = [
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

export const pageSections = {
  'over-ons': [
    {
      title: 'Wat we doen',
      body: [
        'TJ Enterprise bouwt offshoreplatformen voor de olie- en gassector. Dat werk begint zelden bij een leeg vel: een platform komt voort uit een veldontwikkeling met eigen eisen aan capaciteit, waterdiepte, veiligheid en onderhoud. Onze rol zit in het vertalen van die eisen naar een constructie die gebouwd, getransporteerd en geïnstalleerd kan worden.',
        'Daarnaast reikt de projectervaring verder dan platformen alleen. Offshore windparken, scheepsconversies, petrochemische installaties en maritieme constructies stellen vergelijkbare eisen aan constructie, logistiek en uitvoering op locatie.',
      ],
    },
    {
      title: 'Hoe we werken',
      body: [
        'Onze aanpak is technisch en praktisch. Beslissingen worden genomen op basis van wat op de werf en op zee werkt, niet alleen op wat op tekening klopt. Dat betekent vroeg meedenken over maakbaarheid, transport en installatie, omdat juist daar de kosten en de risico’s van een offshoreproject liggen.',
        'We houden de communicatie direct. Korte lijnen met opdrachtgever, werf en onderaannemers voorkomen dat problemen pas zichtbaar worden als ze duur zijn geworden.',
      ],
    },
    {
      title: 'Wat onafhankelijk betekent',
      body: [
        'TJ Enterprise is niet verbonden aan één werf, leverancier of systeem. Die onafhankelijkheid maakt het mogelijk om per project te kiezen wat technisch en economisch het beste uitpakt, in plaats van te werken naar een vooraf vaststaande oplossing.',
      ],
    },
  ],
  'over-ons/missie': [
    {
      title: 'Bouwen voor de werkelijke omstandigheden',
      body: [
        'Een offshoreplatform staat decennialang op een plek waar het weer niet meewerkt en onderhoud duur is. Onze missie is om constructies te bouwen die daarop zijn ingericht: bestand tegen belasting en corrosie, toegankelijk voor inspectie en onderhoud, en veilig voor de mensen die er werken.',
      ],
    },
    {
      title: 'Techniek en uitvoering dicht bij elkaar',
      body: [
        'Veel problemen in offshoreprojecten ontstaan op de overgang tussen ontwerp en uitvoering. Wij willen die afstand klein houden door uitvoeringskennis vroeg in het proces in te brengen en door tijdens de bouw betrokken te blijven bij de keuzes die op de werf worden gemaakt.',
      ],
    },
    {
      title: 'Waar we op sturen',
      body: [
        'Een project is wat ons betreft geslaagd als de constructie doet wat ze moet doen, binnen de afgesproken planning en zonder dat er op veiligheid is ingeleverd. Die drie punten wegen zwaarder dan de snelste of goedkoopste route naar een tussentijdse mijlpaal.',
      ],
    },
  ],
  'over-ons/visie': [
    {
      title: 'De sector verandert, de eisen worden zwaarder',
      body: [
        'Offshore is al lang niet meer alleen olie en gas. Windparken, elektrificatie en hergebruik van bestaande infrastructuur veranderen wat er op zee gebouwd wordt. Tegelijk worden de eisen aan veiligheid, documentatie en milieu strenger. Wie offshore bouwt, moet met beide bewegingen mee kunnen.',
      ],
    },
    {
      title: 'Techniek blijft de basis',
      body: [
        'Nieuwe toepassingen veranderen de vraagstelling, maar niet de onderliggende techniek. Constructieberekening, materiaalkeuze, lastechniek en installatielogistiek bepalen nog steeds of iets op zee overeind blijft. Wij zien die vakkennis als de kern van het bedrijf en niet als iets dat je per project inhuurt.',
      ],
    },
    {
      title: 'Samenwerken in de keten',
      body: [
        'Offshoreprojecten zijn te groot en te gespecialiseerd om alleen te doen. Werven, ontwerpbureaus, installatiebedrijven en leveranciers leveren allemaal een deel. Onze visie is dat de kwaliteit van een project vooral wordt bepaald door hoe goed die partijen op elkaar aansluiten, en dat daar bewust op gestuurd moet worden.',
      ],
    },
  ],
  'over-ons/waarden': [
    {
      title: 'Veiligheid',
      body: [
        'Offshore werken brengt risico’s met zich mee die niet weg te organiseren zijn, alleen beheersbaar te maken. Veiligheid is daarom geen apart hoofdstuk in een projectplan maar een ontwerpuitgangspunt: hoe komt iemand bij een component, hoe wordt die vervangen, en wat gebeurt er als het misgaat.',
      ],
    },
    {
      title: 'Vakmanschap',
      body: [
        'De kwaliteit van een constructie wordt bepaald door de mensen die eraan werken. Wij hechten aan goed uitgevoerd werk, ook op de plekken die later niet meer zichtbaar zijn. Een las die niet gecontroleerd kan worden of een coating die te snel is aangebracht, komt jaren later terug als probleem.',
      ],
    },
    {
      title: 'Samenwerking',
      body: [
        'We werken bijna altijd binnen een grotere projectorganisatie. Dat vraagt om open communicatie: problemen vroeg melden, afspraken vastleggen en duidelijk zijn over wat wel en niet binnen de scope valt. Liever een lastig gesprek vooraf dan een verrassing bij oplevering.',
      ],
    },
  ],
  diensten: [
    {
      title: 'Van vraagstuk tot oplevering',
      body: [
        'Een offshoreproject doorloopt een aantal fasen die elk hun eigen risico’s kennen. Hoe eerder uitvoeringskennis wordt ingebracht, hoe minder er later hersteld moet worden.',
      ],
      list: [
        'Uitgangspunten: functie, locatie, waterdiepte en de condities waarop ontworpen wordt',
        'Maakbaarheid: kan het gebouwd, getransporteerd en geïnstalleerd worden, en met welk materieel',
        'Fabricage: constructie op de werf, lastechniek, conservering en controle',
        'Transport en installatie: zeevast maken, hijsen en plaatsen op locatie',
        'Oplevering: documentatie, certificering en overdracht aan de beheerorganisatie',
      ],
    },
    {
      title: 'Werken binnen bestaande projectorganisaties',
      body: [
        'Offshoreprojecten kennen vaak al een opdrachtgever, een hoofdaannemer en een reeks onderaannemers. Wij sluiten aan op die structuur in plaats van er een eigen laag naast te zetten, en stemmen scope en verantwoordelijkheden vooraf expliciet af.',
      ],
    },
  ],
  'diensten/platformbouw': [
    {
      title: 'Wat platformbouw omvat',
      body: [
        'Een offshoreplatform bestaat uit meerdere delen die elk op een andere manier gebouwd en geïnstalleerd worden. De samenhang tussen die delen bepaalt in grote mate het verloop van het project.',
      ],
      list: [
        'Onderbouw: jackets, monopiles of gravity-based structures die de belasting naar de zeebodem brengen',
        'Topsides: het dek met proces-, energie- en veiligheidsinstallaties',
        'Modules en skids die apart worden gebouwd en later worden ingehesen',
        'Leidingwerk, risers en doorvoeren naar subsea-systemen',
        'Voorzieningen voor toegang, onderhoud en eventueel accommodatie',
      ],
    },
    {
      title: 'De omstandigheden bepalen het ontwerp',
      body: [
        'Waterdiepte, golfbelasting, bodemgesteldheid en de verwachte levensduur sturen vrijwel elke constructieve keuze. Een platform in ondiep water met een korte ontwerplevensduur vraagt om iets anders dan een installatie die decennia in zwaar weer moet blijven staan.',
        'Daar komt bij dat een platform niet alleen de operationele belasting moet dragen, maar ook de fasen van transport en installatie moet doorstaan. Die tijdelijke situaties zijn vaak maatgevend.',
      ],
    },
    {
      title: 'Samenwerking op de werf',
      body: [
        'Platformbouw gebeurt op werven waar meerdere disciplines tegelijk werken. Planning, volgorde van werkzaamheden en beschikbaarheid van hijsmaterieel bepalen of een bouwfase soepel verloopt. We houden die uitvoeringsrealiteit vanaf het begin in beeld.',
      ],
    },
  ],
  'diensten/offshore-wind': [
    {
      title: 'Wat offshore wind vraagt',
      body: [
        'Een windpark op zee is geen enkele grote constructie maar een reeks onderdelen die in serie worden gebouwd en geïnstalleerd. Dat verschuift de nadruk van maatwerk naar herhaalbaarheid en doorlooptijd.',
      ],
      list: [
        'Fundaties: monopiles, jackets of andere draagconstructies voor de turbines',
        'Overgangsstukken en de voorzieningen voor toegang en onderhoud',
        'Offshore transformator- en hoogspanningsstations',
        'Kabelinfrastructuur tussen turbines onderling en naar de kust',
      ],
    },
    {
      title: 'Schaal en herhaling',
      body: [
        'Bij tientallen vrijwel identieke fundaties telt elke afwijking in het bouwproces door over de hele serie. Standaardisatie, vaste controlemomenten en een strakke logistiek tussen fabricagelocatie en installatieschip zijn daarom bepalend voor het resultaat.',
        'Tegelijk blijft de zee onvoorspelbaar: installatievensters zijn kort en weersafhankelijk, wat betekent dat voorbereiding op de wal zwaarder weegt dan bij veel andere bouwprojecten.',
      ],
    },
  ],
  'diensten/industrie': [
    {
      title: 'Scheepsconversies',
      body: [
        'Bij een conversie wordt een bestaand schip aangepast voor een nieuwe taak: een pijplegsysteem, extra kranen, nieuwe machinekamers of uitgebreide accommodatie. Het werk is complex omdat de bestaande constructie, de stabiliteit en de bestaande systemen het kader vormen waarbinnen alles moet passen.',
      ],
    },
    {
      title: 'Industriële en petrochemische installaties',
      body: [
        'Procesinstallaties op land delen veel met offshorebouw: zware equipment, uitgebreid leidingwerk, strenge eisen aan lassen en conservering, en een opleverdossier dat compleet moet zijn. Het verschil zit vooral in logistiek en in de regelgeving die van toepassing is.',
      ],
    },
    {
      title: 'Maritieme constructies',
      body: [
        'Kranen, steigers, laadvoorzieningen en andere constructies in de haven of op het water vragen om een combinatie van staalbouw en kennis van de maritieme omgeving. Belasting door golven, getij en zoutwatercorrosie speelt ook hier een hoofdrol.',
      ],
    },
  ],
  expertise: [
    {
      title: 'Hoe het portfolio is opgebouwd',
      body: [
        'De projecten op deze site zijn ingedeeld in vijf sectoren. Die indeling volgt het type installatie en de omgeving waarin gewerkt is, niet de omvang van het project. Een klein maar technisch complex project kan meer zeggen over de aard van het werk dan een groot project met een eenvoudige scope.',
      ],
    },
    {
      title: 'Wat je op een projectpagina vindt',
      body: [
        'Iedere case beschrijft de projectcontext en de belangrijkste technische kerngegevens, zoals vermogen, afmetingen, capaciteit of locatie. We beperken ons daarbij tot informatie die openbaar is; niet-openbare fabricage- of locatiegegevens worden niet getoond.',
        'Voor vragen over de specifieke rol van TJ Enterprise binnen een project kun je contact opnemen.',
      ],
    },
  ],
  projecten: [
    {
      title: 'Over de projectinformatie',
      body: [
        'De projectpagina’s beschrijven de context en de technische kerngegevens van installaties waarmee ervaring is opgedaan. De gegevens zijn gebaseerd op openbare projectinformatie. Waar fabricagelocaties of contractuele details niet openbaar zijn gemaakt, worden ze hier ook niet vermeld.',
      ],
    },
  ],
  'werken-bij': [
    {
      title: 'Wie we zoeken',
      body: [
        'Er staan op dit moment geen concrete vacatures online. Dat betekent niet dat er geen gesprek mogelijk is: in de offshorebouw komt werk vaak projectgebonden en op korte termijn beschikbaar. Een introductie op voorhand helpt om snel te kunnen schakelen.',
      ],
      list: [
        'Constructie- en werkvoorbereiding voor staalbouw en offshore constructies',
        'Lastechniek, inspectie en kwaliteitsborging',
        'Projectbegeleiding en toezicht op de werf',
        'Transport-, hijs- en installatie-engineering',
      ],
    },
    {
      title: 'Een open sollicitatie',
      body: [
        'Stuur een korte introductie per e-mail: wie je bent, waar je aan hebt gewerkt en wat voor werk je zoekt. Een uitgebreid cv is niet nodig voor een eerste contact. We reageren ook als er op dat moment niets passends is.',
      ],
    },
    {
      title: 'Samenwerken als partner of zzp’er',
      body: [
        'Naast mensen in loondienst werken we samen met zelfstandigen en gespecialiseerde bedrijven. Ook daarvoor geldt: laat weten wat je doet en in welke fase van een project je meestal wordt ingeschakeld.',
      ],
    },
  ],
  contact: [
    {
      title: 'Waarmee we kunnen helpen',
      body: [
        'Een eerste gesprek gaat meestal over de aard van het project en wat er al ligt. Hoe concreter de uitgangspunten, hoe sneller duidelijk is of we iets voor elkaar kunnen betekenen.',
      ],
      list: [
        'Een offshoreproject waarvoor je een bouwpartner zoekt',
        'Een vraag over maakbaarheid, transport of installatie van een constructie',
        'Samenwerking als werf, leverancier of onderaannemer',
        'Een open sollicitatie of een voorstel als zelfstandige',
      ],
    },
    {
      title: 'Wat je kunt verwachten',
      body: [
        'Je mail komt rechtstreeks binnen, niet in een ticketsysteem. We reageren met een inhoudelijk antwoord of met een voorstel voor een gesprek, ook als een project niet binnen onze scope valt.',
      ],
    },
  ],
  'projecten/olie-gas': [
    {
      title: 'Wat deze projecten gemeen hebben',
      body: [
        'Olie- en gasprojecten offshore draaien om installaties die productie, verwerking en transport combineren op een beperkt oppervlak, ver van de wal. Dat stelt hoge eisen aan veiligheid, redundantie en onderhoudbaarheid.',
        'De projecten in deze categorie lopen uiteen van vaste platformen met jacket en topsides tot drijvende productie- en opslagschepen en diepwaterontwikkelingen met uitgebreide subsea-infrastructuur.',
      ],
    },
  ],
  'projecten/maritiem': [
    {
      title: 'Wat deze projecten gemeen hebben',
      body: [
        'Maritieme projecten gaan over schepen en zwaar materieel dat zelf het werktuig is: kraanschepen, pijplegschepen en vergelijkbare vaartuigen. De constructie moet niet alleen de eigen belasting dragen, maar ook de krachten van het werk dat ermee wordt uitgevoerd.',
        'Bij conversies komt daar een extra beperking bij: de bestaande romp, stabiliteit en systemen bepalen wat er mogelijk is.',
      ],
    },
  ],
  'projecten/energie': [
    {
      title: 'Wat deze projecten gemeen hebben',
      body: [
        'Offshore windprojecten worden gekenmerkt door schaal en herhaling: tientallen vrijwel identieke fundaties, een beperkt installatievenster en een strakke koppeling tussen fabricage, transport en installatie.',
        'Naast de turbinefundaties omvat deze categorie ook offshore hoogspanningsstations en de kabelinfrastructuur die het park met het net verbindt.',
      ],
    },
  ],
  'projecten/defensie': [
    {
      title: 'Wat dit project kenmerkt',
      body: [
        'Defensiegerelateerde projecten werken met eigen technische normen en met zwaardere eisen aan documentatie, traceerbaarheid en acceptatie. Niet alle projectgegevens zijn openbaar.',
        'De informatie op deze site blijft daarom beperkt tot wat openbaar is vermeld; fabricagelocaties en contractuele details die niet zijn vrijgegeven, worden niet getoond.',
      ],
    },
  ],
  'projecten/petrochemie': [
    {
      title: 'Wat deze projecten kenmerkt',
      body: [
        'Petrochemische installaties combineren zware equipment met uitgebreid leidingwerk en strenge eisen aan lassen, conservering en keuring. Het opleverdossier is daarbij net zo bepalend als de constructie zelf.',
        'Werkzaamheden lopen vaak over meerdere locaties en landen, waardoor afstemming tussen fabricage, transport en montage op de bouwplaats zwaar weegt.',
      ],
    },
  ],
};

export const pages = basePages.map((page) => (
  pageSections[page.route] ? { ...page, sections: pageSections[page.route] } : page
));
