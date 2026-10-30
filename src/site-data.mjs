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
  { route: 'diensten', title: 'Diensten', eyebrow: 'Wat we doen', intro: 'Onafhankelijke quality engineering, assurance en control: van ontwerp en inkoop tot fabricage, bouw en het opleverdossier.', body: 'We ondersteunen opdrachtgevers in elke fase van een project waarin kwaliteit het verschil maakt. Onze diensten zijn ingedeeld in drie groepen; de technische disciplines waarop ze rusten, vind je onder Expertise.', related: ['diensten/quality-engineering', 'diensten/inspectie-expediting', 'diensten/certificering'] },
  { route: 'diensten/quality-engineering', title: 'Quality engineering & assurance', eyebrow: 'Dienst', intro: 'Kwaliteitsborging die al in de ontwerpfase begint: reviews, audits en een sluitend kwaliteitsdossier.', body: 'Kwaliteit laat zich niet achteraf inspecteren. Door vroeg in het project mee te kijken naar ontwerp, specificaties en leveranciers, voorkomen we afwijkingen die later duur zijn om te herstellen. Tegelijk zorgen we dat de projectdocumentatie vanaf de eerste dag op orde is.' },
  { route: 'diensten/inspectie-expediting', title: 'Inspectie & expediting', eyebrow: 'Dienst', intro: 'Toezicht bij leveranciers en op de werf, zodat materialen en onderdelen op tijd en volgens specificatie binnenkomen.', body: 'Een groot deel van de kwaliteit van een installatie wordt bepaald bij leveranciers en fabrikanten, vaak ver van de bouwlocatie. Wij zijn daar aanwezig: we inspecteren, bewaken de voortgang en stemmen af met fabrikanten en onderaannemers, nationaal en internationaal.' },
  { route: 'diensten/certificering', title: 'Certificering & autoriteiten', eyebrow: 'Dienst', intro: 'Afstemming met Notified Bodies, klassebureaus en defensie-autoriteiten voor conformiteit en acceptatie.', body: 'Voor drukapparatuur, maritieme installaties en defensieprojecten is goedkeuring door een externe partij een harde voorwaarde voor oplevering. We kennen de eisen en de werkwijze van deze partijen en begeleiden het traject van beoordeling tot certificaat.' },
  { route: 'expertise', title: 'Expertise', eyebrow: 'Zeven disciplines', intro: 'Specialistische kennis van materialen, lassen, NDT, coating, E&I, drukapparatuur en leveranciersbewaking.', body: 'Onze kwaliteitsdiensten rusten op zeven technische disciplines. Samen dekken ze de volledige keten, van de keuze en traceerbaarheid van materialen tot de eindacceptatie van een installatie.', related: ['diensten/quality-engineering', 'diensten/inspectie-expediting', 'diensten/certificering'] },
  { route: 'projecten', title: 'Projecten', eyebrow: 'Geselecteerde ervaring', intro: 'Veertien projecten in vijf sectoren — van offshoreplatformen en FPSO’s tot windparken en industriële installaties.', body: 'Selecteer een sector of bekijk alle projecten. De detailpagina’s geven de projectcontext en belangrijkste technische gegevens weer.', related: ['projecten/olie-gas', 'projecten/maritiem', 'projecten/energie', 'projecten/defensie', 'projecten/petrochemie'] },
  { route: 'projecten/olie-gas', title: 'Olie & gas', eyebrow: 'Projecten', intro: 'Offshoreplatformen, diepwaterontwikkelingen, pijpleidingen en FPSO-projecten.', body: 'Bekijk projectcontext en technische kerngegevens van olie- en gasprojecten in het portfolio.', category: 'olie-gas' },
  { route: 'projecten/maritiem', title: 'Maritiem', eyebrow: 'Projecten', intro: 'Scheepsconversies en zwaar materieel voor werk op zee.', body: 'Bekijk projecten rond offshore schepen en maritieme constructies.', category: 'maritiem' },
  { route: 'projecten/energie', title: 'Offshore wind & energie', eyebrow: 'Projecten', intro: 'Offshore windparken, fundaties, kabels en energie-infrastructuur.', body: 'Bekijk de windprojecten en hun gepubliceerde projectgegevens.', category: 'energie' },
  { route: 'projecten/defensie', title: 'Defensie', eyebrow: 'Projecten', intro: 'Een maritiem hijskraanproject met beperkte openbare locatiegegevens.', body: 'Projectinformatie wordt beperkt tot openbaar vermelde gegevens; niet-openbare fabricagedetails worden niet getoond.', category: 'defensie' },
  { route: 'projecten/petrochemie', title: 'Petrochemie', eyebrow: 'Projecten', intro: 'Een nieuwbouwproject voor een chemische installatie in Rotterdam-Botlek.', body: 'Bekijk de projectcontext en technische kerngegevens van MXDA XA1.', category: 'petrochemie' },
  { route: 'over-ons', title: 'Over TJ Enterprise', eyebrow: 'Onafhankelijke quality engineering', intro: 'Een onafhankelijk, multidisciplinair bedrijf voor quality engineering, assurance en control, gevestigd nabij de haven van Rotterdam.', body: 'We werken voor opdrachtgevers in olie & gas, maritiem, energie, petrochemie en defensie, en ondersteunen hen van het eerste ontwerp tot de oplevering.', related: ['over-ons/missie', 'over-ons/visie', 'over-ons/waarden'] },
  { route: 'over-ons/missie', title: 'Onze missie', eyebrow: 'Waar we voor staan', intro: 'Onafhankelijke, multidisciplinaire kwaliteitsdiensten die zorgen voor betrouwbaarheid en compliance, van ontwerp tot oplevering.', body: 'Onze missie beschrijft wat ons drijft, hoe we onze opdrachtgevers bedienen en welk effect we op ieder project willen hebben.' },
  { route: 'over-ons/visie', title: 'Onze visie', eyebrow: 'Vooruitkijken', intro: 'Uitgroeien tot een toonaangevende, onafhankelijke partner in quality engineering voor maritiem, defensie, energie, olie & gas en petrochemie.', body: 'Onze visie geeft richting aan het bedrijf: we willen het voorbeeld geven in quality engineering, assurance en control, en blijvende waarde toevoegen voor opdrachtgevers, partners en de sectoren waarin we werken.' },
  { route: 'over-ons/waarden', title: 'Onze waarden', eyebrow: 'Hoe we werken', intro: 'Tien waarden die bepalen hoe we beslissen, samenwerken en leveren.', body: 'Onze waarden zijn geen tekst aan de muur. Ze bepalen welke keuzes we maken, hoe we met opdrachtgevers en partners omgaan en hoe we onze afspraken nakomen, elke dag opnieuw.' },
  { route: 'werken-bij', title: 'Werken bij TJ Enterprise', eyebrow: 'Samen bouwen', intro: 'Ervaren quality engineers, inspecteurs, auditors en specialisten: bouw mee aan een groeiend team.', body: 'Ons bedrijf draait om mensen. We bouwen aan een netwerk van professionals in quality engineering, assurance en control, actief in olie & gas, petrochemie, energie, maritiem en defensie.', related: ['contact'] },
  { route: 'contact', title: 'Contact', eyebrow: 'Neem contact op', intro: 'Op zoek naar een kwaliteitsspecialist voor je project? We denken graag mee.', body: 'Stuur een e-mail naar info@tjenterprise.nl. Vertel kort om welk project het gaat, in welke fase het zit en welke discipline je zoekt; dan koppelen we je aan de juiste specialist.' },
];

export const pageSections = {
  'over-ons': [
    {
      title: 'Wie we zijn',
      body: [
        'TJ Enterprise is een onafhankelijk, multidisciplinair bedrijf voor quality engineering, quality assurance en quality control. We zijn gevestigd nabij de haven van Rotterdam en werken voor opdrachtgevers in vijf sectoren: olie & gas, maritiem, energie, petrochemie en defensie.',
        'Onze rol loopt door het hele project heen. We sluiten aan bij het ontwerp, begeleiden inkoop en fabricage en blijven betrokken tot het opleverdossier compleet is.',
      ],
    },
    {
      title: 'Waarom we bestaan',
      body: [
        'Het bedrijf is opgericht als antwoord op een probleem dat in projecten steeds terugkomt: kwaliteitsborging en -controle die tekortschieten. Er gaapt vaak een gat tussen algemene engineeringondersteuning en de specialistische kennis die nodig is om kwaliteit echt te borgen. Dat gat willen wij dichten.',
        'Ons managementteam heeft gemiddeld meer dan 25 jaar internationale ervaring in het veld, opgedaan in complexe, multidisciplinaire projecten op land en op zee.',
      ],
    },
    {
      title: 'Wat we doen',
      body: ['Onze technische kwaliteitsdiensten zijn gericht op compliance, betrouwbaarheid en prestaties:'],
      list: [
        'Quality engineering, assurance en control, inclusief leveranciersaudits',
        'Constructability reviews en technische beoordelingen',
        'Inspectie en expediting',
        'Kwaliteitsondersteuning bij inkoop',
        'Specialistische kennis van materialen, lastechniek, NDT, coating en E&I',
        'Coördinatie met autoriteiten en technisch toezicht',
      ],
    },
    {
      title: 'Hoe we werken',
      body: [
        'We combineren praktische kennis uit het veld met inzicht in regelgeving. Het doel is steeds een kwaliteitsresultaat dat meetbaar is, niet alleen een afgevinkte lijst.',
        'Daarbij houden we drie principes aan: nauwkeurigheid, transparantie en samenwerking.',
      ],
    },
    {
      title: 'Ons netwerk',
      body: ['We onderhouden nauwe relaties met de partijen die samen een project maken:'],
      list: [
        'Olie- en energiemaatschappijen',
        'Certificerende instanties',
        'Maritieme en pijpleidingaannemers',
        'Fabrikanten en staalbouwers',
        'Walserijen',
        'Bouwwerven',
        'Leveranciers',
      ],
    },
    {
      title: 'Internationale partners',
      body: ['Naast ons team in Nederland werken we samen met partners in Spanje en de Verenigde Arabische Emiraten.'],
    },
  ],
  'over-ons/missie': [
    {
      title: 'Uitmuntende kwaliteit',
      body: ['We willen de technische standaard zetten. Ieder project moet voldoen aan de lokale en internationale normen en codes uit de betrokken vakgebieden, en aan de geldende wet- en regelgeving.'],
    },
    {
      title: 'Integriteit en verantwoordelijkheid',
      body: ['We handelen eerlijk en verantwoordelijk. We beschermen de belangen van onze opdrachtgevers en doen wat we toezeggen.'],
    },
    {
      title: 'Samenwerking en vertrouwen',
      body: ['We werken zij aan zij met opdrachtgevers, partners en autoriteiten. Open communicatie staat daarbij voorop; vertrouwen bouwen we op door consequent en transparant te zijn.'],
    },
    {
      title: 'Continu verbeteren',
      body: ['We blijven leren, vernieuwen en onze methoden aanscherpen, zodat we blijvende waarde en meetbare verbeteringen leveren.'],
    },
    {
      title: 'Kwaliteit zonder concessies',
      body: ['Kwaliteit is voor ons geen controle aan het eind van de rit. Ze zit ingebakken in onze processen, in wat we opleveren en in de samenwerkingen die we aangaan.'],
    },
  ],
  'over-ons/visie': [
    {
      title: 'Een toonaangevende, onafhankelijke partner',
      body: ['We willen erkend worden als een van de toonaangevende onafhankelijke partners in quality engineering voor maritiem, defensie, energie, olie & gas en petrochemie. Die reputatie bouwen we op technische vakkennis, betrouwbaarheid en professionele integriteit.'],
    },
    {
      title: 'De standaard zetten',
      body: [
        'Op lange termijn willen we de maatstaf zijn voor quality assurance en control. Daarvoor blijven we investeren in onze expertise, in digitale hulpmiddelen en in ons netwerk van specialisten.',
        'Het doel: ieder project voldoet aan de hoogste lokale, internationale en defensiespecifieke normen, zoals ISO 9001 en NATO AQAP.',
      ],
    },
    {
      title: 'Eén aanspreekpunt',
      body: ['We bouwen aan een duurzame organisatie die hooggekwalificeerde professionals samenbrengt onder één identiteit. Zo hebben opdrachtgevers één aanspreekpunt voor multidisciplinaire kwaliteitsexpertise gedurende de hele levenscyclus van een project, van ontwerp tot eindacceptatie.'],
    },
  ],
  diensten: [
    {
      title: 'Kwaliteit in elke projectfase',
      body: ['We leveren geïntegreerde kwaliteitsoplossingen die met het project meebewegen:'],
      list: [
        'Ontwerp en engineering: constructability- en kwaliteitsreviews',
        'Inkoop: leveranciersbeoordeling, inspectieplanning en het opstellen van ITP’s',
        'Fabricage: inspectie van materialen, lassen, NDT en coating',
        'Bouw en installatie: technisch toezicht en E&I-inspectie',
        'Oplevering: kwaliteitsdossier, certificering en acceptatie',
      ],
    },
    {
      title: 'Samen met opdrachtgever en autoriteiten',
      body: ['We combineren technische diepgang met kwaliteitsmanagement op systeemniveau. We werken nauw samen met opdrachtgevers, klassebureaus en autoriteiten, en leveren binnen de afgesproken planning.'],
    },
  ],
  'diensten/quality-engineering': [
    {
      title: 'Audits',
      body: ['We voeren audits uit op systeem-, proces- en leveranciersniveau:'],
      list: [
        'ISO 9001',
        'AQAP voor defensieprojecten',
        'PED voor drukapparatuur',
        'Coating- en lasaudits',
        'Kwalificatie van leveranciers',
      ],
    },
    {
      title: 'Constructability- en kwaliteitsreviews',
      body: ['Tijdens de ontwerp- en engineeringfase beoordelen we of een ontwerp maakbaar, inspecteerbaar en certificeerbaar is. Afwijkingen die hier worden gevonden, kosten een fractie van wat ze op de werf zouden kosten.'],
    },
    {
      title: 'Kwaliteitsplanning en documentatie',
      body: ['We zetten de kwaliteitsdocumentatie van een project op en houden die bij:'],
      list: [
        'Kwaliteitsplannen',
        'Inspection and Test Plans (ITP’s)',
        'Non-conformity reports (NCR’s)',
        'Root cause analyses',
        'Corrigerende en preventieve maatregelen',
      ],
    },
  ],
  'diensten/inspectie-expediting': [
    {
      title: 'Vendor surveillance en expediting',
      body: ['We auditen en inspecteren leveranciers, bewaken de voortgang van hun productie en coördineren met fabrikanten en onderaannemers, waar ter wereld ze ook zitten.'],
    },
    {
      title: 'Kwaliteit in inkoop en keten',
      body: ['Kwaliteit begint bij de keuze van de leverancier. We beoordelen leveranciers, plannen de inspecties en stellen de ITP’s op waarmee duidelijk wordt wat er wanneer gecontroleerd wordt.'],
    },
    {
      title: 'Inspectie tijdens fabricage en bouw',
      body: ['Op de werf en bij fabrikanten inspecteren we materialen, laswerk, NDT, coating en elektrotechniek en instrumentatie. De technische achtergrond van deze disciplines staat beschreven onder Expertise.'],
    },
  ],
  'diensten/certificering': [
    {
      title: 'Drukapparatuur (PED/CE)',
      body: ['Voor drukapparatuur onderhouden we het contact met Notified Bodies en autoriteiten. We ondersteunen de conformiteitsbeoordeling en begeleiden het traject tot en met de certificering.'],
    },
    {
      title: 'Defensie: GQA en AQAP',
      body: ['In defensieprojecten ondersteunen we bij Government Quality Assurance en AQAP-compliance, in nauwe samenwerking met de Government Quality Assurance Representatives (GQAR’s).'],
    },
    {
      title: 'Klassebureaus en technisch toezicht',
      body: ['We stemmen af met klassebureaus en andere toezichthouders en houden technisch toezicht op de uitvoering, zodat acceptatie bij oplevering geen verrassingen oplevert.'],
    },
  ],
  expertise: [
    {
      title: 'Ondersteunende kwaliteitsdiensten',
      body: ['Rond de zeven disciplines leveren we kwaliteitsmanagement en projectborging:'],
      list: [
        'Audits: ISO 9001, AQAP, PED, coating, lassen en leverancierskwalificatie',
        'Constructability- en kwaliteitsreviews in de ontwerp- en engineeringfase',
        'Kwaliteit in inkoop en keten: leveranciersbeoordeling, inspectieplanning en ITP’s',
        'Kwaliteitsplanning en documentatie: kwaliteitsplannen, ITP’s, NCR’s, root cause analyses en corrigerende en preventieve maatregelen',
        'Government Quality Assurance en AQAP-compliance voor defensieprojecten, samen met GQAR’s',
      ],
    },
    {
      title: 'Vakgebieden',
      body: ['Onze specialisten zijn actief in de volgende vakgebieden:'],
      list: [
        'Piping en processystemen',
        'Constructies (structural)',
        'Pijpleidingen',
        'Niet-destructief onderzoek',
        'Lastechniek en metallurgie',
        'Elektrotechniek en instrumentatie',
        'Wet- en regelgeving',
      ],
    },
    {
      title: 'Onze aanpak',
      body: ['We combineren technische diepgang met kwaliteitsmanagement op systeemniveau. Zo ondersteunen we compliance, betrouwbaarheid en prestaties, in nauwe samenwerking met opdrachtgevers, klassebureaus en autoriteiten, en binnen de afgesproken planning.'],
    },
  ],
  projecten: [
    {
      title: 'Over de projectinformatie',
      body: ['De projectpagina’s beschrijven de context en de technische kerngegevens van installaties waarin onze specialisten actief zijn geweest. De gegevens zijn gebaseerd op openbare projectinformatie. Waar fabricagelocaties of contractuele details niet openbaar zijn gemaakt, worden ze hier ook niet vermeld.'],
    },
  ],
  'werken-bij': [
    {
      title: 'Jouw loopbaan, jouw manier',
      body: ['Er zijn verschillende manieren om met ons samen te werken:'],
      list: [
        'Een vaste positie in ons kernteam',
        'Opdrachten op contractbasis voor zelfstandige experts, in binnen- en buitenland',
        'Parttime of fulltime, afgestemd op je expertise, beschikbaarheid en doelen',
      ],
    },
    {
      title: 'Wie we zoeken',
      body: ['We zoeken mensen met een aantoonbare technische achtergrond in:'],
      list: [
        'Lastechniek en materiaalkunde',
        'NDT, coating en oppervlaktebescherming',
        'Vendor surveillance en expediting',
        'QA/QC-management en auditing',
        'Ondersteuning bij PED/CE-certificering',
        'Quality engineering voor defensie en maritiem',
      ],
    },
    {
      title: 'Past dit bij jou?',
      body: ['Hecht je aan kwaliteit, neem je verantwoordelijkheid en werk je graag in teamverband? Dan pas je bij ons.'],
    },
    {
      title: 'Zo solliciteer je',
      body: [
        'Vul het formulier hieronder in of mail je cv met een korte motivatie. Geef daarbij aan of je een vaste, parttime, fulltime of contractrol zoekt.',
        'We bekijken iedere sollicitatie zorgvuldig en nemen contact op met geschikte kandidaten voor een kennismaking of een technisch gesprek.',
      ],
    },
    {
      title: 'Groeien met ons',
      body: ['We gaan voor langdurige relaties met onze mensen, partners en opdrachtgevers. We waarderen vakmanschap, luisteren naar ideeën en willen dat je werk het verschil maakt.'],
    },
  ],
  contact: [
    {
      title: 'Waarmee we kunnen helpen',
      body: ['Een eerste gesprek gaat meestal over het project en de fase waarin het zit. Neem bijvoorbeeld contact op voor:'],
      list: [
        'Een kwaliteitsspecialist voor je project',
        'Een audit of leveranciersbeoordeling',
        'Inspectie of expediting bij een leverancier of op de werf',
        'Begeleiding bij PED/CE-certificering of AQAP-compliance',
        'Een sollicitatie of een voorstel als zelfstandige',
      ],
    },
    {
      title: 'Wat je kunt verwachten',
      body: ['Je mail komt rechtstreeks binnen, niet in een ticketsysteem. We reageren met een inhoudelijk antwoord of een voorstel voor een gesprek, ook als je vraag buiten onze scope valt.'],
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
        'Petrochemische installaties combineren zware equipment met uitgebreid leidingwerk en strenge eisen aan lassen, conservering en keuring. Het opleverdossier is daarbij net zo bepalend als de installatie zelf.',
        'Werkzaamheden lopen vaak over meerdere locaties en landen, waardoor afstemming tussen fabricage, transport en montage op de bouwplaats zwaar weegt.',
      ],
    },
  ],
};

export const pageCardGrids = {
  expertise: {
    eyebrow: 'Kerndisciplines',
    title: 'Zeven disciplines,',
    accent: 'één kwaliteitspartner.',
    items: [
      { title: 'Materiaalkunde', text: 'Controle van materiaalspecificaties en traceerbaarheid, en toetsing aan projecteisen en codes.' },
      { title: 'Lastechniek & inspectie', text: 'Kwalificatie van lasmethoden, certificering van lassers, coördinatie van laswerk en inspectie en toezicht.' },
      { title: 'Niet-destructief onderzoek (NDT)', text: 'Coördinatie, beoordeling en bewaking van NDT, getoetst aan normen en de specificaties van de opdrachtgever.' },
      { title: 'Coating & corrosiebescherming', text: 'Beoordeling van coatingspecificaties en inspectie van oppervlaktevoorbehandeling, applicatie en uitharding.' },
      { title: 'E&I-inspectie', text: 'Toezicht op en verificatie van elektrotechniek en instrumentatie, getoetst aan ontwerp- en veiligheidsnormen.' },
      { title: 'Drukapparatuur (PED/CE) & autoriteiten', text: 'Afstemming met Notified Bodies en autoriteiten voor conformiteitsbeoordeling en certificering.' },
      { title: 'Vendor surveillance & expediting', text: 'Audits en inspecties bij leveranciers, voortgangsbewaking en coördinatie met fabrikanten en onderaannemers wereldwijd.' },
    ],
  },
  'over-ons/waarden': {
    eyebrow: 'Onze waarden',
    title: 'Tien waarden,',
    accent: 'elke dag.',
    items: [
      { title: 'Integriteit', text: 'Eerlijk, rechtvaardig en open handelen, en de juiste keuze maken, ook als die moeilijker is.' },
      { title: 'Klantgericht', text: 'De opdrachtgever centraal: goed luisteren naar wat nodig is en leveren met precisie en zorg.' },
      { title: 'Samenwerking', text: 'Samen bereiken we meer, met gedeelde doelen en open samenwerking.' },
      { title: 'Respect', text: 'Waardering voor mensen, hun ideeën en hun verschillen; iedereen professioneel en waardig behandelen.' },
      { title: 'Verantwoordelijkheid', text: 'Verantwoordelijkheid nemen voor ons handelen en onze toezeggingen consequent nakomen.' },
      { title: 'Vertrouwen', text: 'Vertrouwen opbouwen door steeds stabiel, betrouwbaar en principieel te handelen.' },
      { title: 'Teamwork', text: 'Als één team werken aan een gezamenlijk doel en aan resultaat.' },
      { title: 'Communicatie', text: 'Heldere, open en tijdige communicatie, zodat iedereen op één lijn zit.' },
      { title: 'Continu leren', text: 'Investeren in groei, vernieuwing en vakkennis om kwaliteit blijvend te leveren.' },
      { title: 'Betrouwbaarheid', text: 'Opdrachtgevers en partners moeten altijd op ons kunnen rekenen.' },
    ],
  },
};

export const pages = basePages.map((page) => ({
  ...page,
  ...(pageSections[page.route] ? { sections: pageSections[page.route] } : {}),
  ...(pageCardGrids[page.route] ? { cards: pageCardGrids[page.route] } : {}),
}));
