/**
 * TEG Website Copy Constants
 *
 * All copy extracted character-for-character from Obsidian vault clean sources
 * Source: /home/fivefingerdisco/Projects/Obsidian_Vault_GIT/Projects/TEG/research/page-copy/latvian/
 * Extraction Date: 2025-11-08
 * Version: 2.0 (Rebuilt from clean vault sources, replacing OCR-corrupted version)
 *
 * CRITICAL: Do NOT modify any text without explicit approval. Character-for-character accuracy required.
 */

// ============================================================================
// HOMEPAGE COPY
// ============================================================================

export const HOMEPAGE_COPY = {
  hero: {
    headline: 'Pārbaudi, pirms pērc!',
    subheadline: 'Detalizēta transportlīdzekļa tehniskā stāvokļa pārbaude pirms tā iegādes visā Eiropā. Nav nepieciešams ierasties klātienē.',
    ctaText: 'Pasūtīt pārbaudi',
    ctaHref: '/kontakti',
  },

  valueProposition: {
    headline: 'KĀ TAS STRĀDĀ?',
    items: [
      {
        title: 'Tu atrodi vēlamo auto',
        description: 'Tu izvēlies transportlīdzekli, kas tev interesē, un vienkārši sazinies ar mums. Nav nepieciešams nekur braukt.',
      },
      {
        title: 'Mēs pārbaudām un dokumentējam',
        description: 'Mūsu eksperts atbrauc uz auto atrašanās vietu un veic detalizētu tehnisko pārbaudi ar profesionālu aprīkojumu. Tu vari palikt mājās.',
      },
      {
        title: 'Tu saņem pilnu informāciju',
        description: 'Tu saņem detalizētu ziņojumu ar fotogrāfijām un ekspertu atzinumu par auto stāvokli. Tagad tu vari pieņemt informētu lēmumu.',
      },
    ],
  },

  services: {
    headline: 'MŪSU PAKALPOJUMI',
    subheadline: 'Neatkarīgi eksperti, kas palīdz izvairīties no slikta pirkuma. Profesionāli auto ekspertu pakalpojumi visā Eiropā.',
  },

  testimonialsSection: {
    headline: 'ATSAUKSMES',
    subheadline: 'Apskati, ko mūsu klienti par mums saka:',
  },

  serviceCards: [
    {
      title: 'Pamatpārbaude',
      description: 'Detalizēta transportlīdzekļa tehniskā stāvokļa pārbaude pirms tā iegādes visā Eiropā. Dzinēja diagnostika, VIN vēstures pārbaude, virsbūves un krāsojuma inspekcija.',
      price: 'No €100',
      ctaText: 'Pasūtīt pārbaudi',
      ctaHref: '/kontakti',
    },
    {
      title: 'Auto meklēšana un piegāde',
      description: 'Pilns serviss - auto meklēšana, tehniskā pārbaude, piegāde līdz durvīm un dokumentu noformēšanas palīdzība.',
      price: 'No €350',
      ctaText: 'Uzsākt meklēšanu',
      ctaHref: '/kontakti',
    },
    {
      title: 'Mobilais serviss',
      description: 'Palīdzība uz ceļa - kļūdu diagnostika, akumulatora pārbaude, motora iedarbināšana, ECU programmēšana un atslēgu remonts.',
      price: 'No €50',
      ctaText: 'Izsaukt speciālistu',
      ctaHref: '/kontakti',
    },
  ] as const,

  inspectionCategories: {
    headline: 'KO MĒS PĀRBAUDĀM?',
    ctaText: 'Pasūtīt pārbaudi',
    ctaHref: '/kontakti',
    categories: [
      {
        title: 'Dzinējs',
        description: 'Dzinēja vizuāla apskate un datoru diagnostika, lai identificētu eļļas noplūžas, trokšņus, sensoru un sprauslu darbības nepilnības.',
        items: [
          'Datordiagnostika ar profesionālu aprīkojumu visu dzinēja parametru novērtēšanai',
          'Visu elektrobloku skenēšana, lai identificētu kļūdu kodus un sistēmu stāvokli',
          'Sprauslu darbības un efektivitātes pārbaude degvielas iesmidzināšanas sistēmā',
          'Sensoru darbības un reakcijas pārbaude visās dzinēja sistēmās',
          'Hybrid elektromotora un baterijas pārbaude elektrisko komponentu stāvokļa novērtēšanai',
        ],
      },
      {
        title: 'Šasijas numurs',
        description: 'Šasijas numura pārbaude vairākās starptautiskās un vietējās datu bāzēs, lai identificētu transportlīdzekļa vēsturi.',
        items: [
          'CarVertical/AutoDna starptautiskās datu bāzes pārbaude par negadījumiem, nobraukumu un īpašnieku vēsturi',
          'Dīler centru un ražotāju datu bāzēs glabātā servisa vēsture un garantijas informācija',
          'LTAB apdrošināšanas prasību un negadījumu vēstures pārbaude',
          'CSDD oficiālā reģistrācijas un tehniskās pārbaudes vēsture',
          'Izsoles ieraksti, lai identificētu iespējamo negadījumu vai remonta vēsturi',
        ],
      },
      {
        title: 'Virsbūve un salons',
        description: 'Virsbūves un salona elementu vispusīga pārbaude, lai novērtētu transportlīdzekļa stāvokli un identificētu iespējamos bojājumus vai remontus.',
        items: [
          'Krāsas biezuma mērīšana, virsbūves un salona elementu pārbaude, lai atklātu remonta vai CSN pēdas un novērtētu auto stāvokli',
          'Salona elementu, aprīkojuma un drošības jostu stāvokļa un funkcionalitātes pārbaude',
          'Stiklojuma un ārējās optikas atbilstības pārbaude normatīvajiem standartiem',
          'Komplektācijas atbilstības VIN numuram pārbaude, lai identificētu iespējamas izmaiņas',
        ],
      },
      {
        title: 'Tehniskie šķidrumi',
        description: 'Tehnisko šķidrumu kvalitātes un līmeņu pārbaude, lai novērtētu transportlīdzekļa apkopes stāvokli un drošību.',
        items: [
          'Bremžu eļļas kvalitātes un līmeņa pārbaude bremžu sistēmas drošībai',
          'Dzinēja eļļas kvalitātes un līmeņa novērtējums dzinēja aizsardzībai',
          'Dzesēšanas šķidruma kvalitātes un līmeņa pārbaude optimālai dzesēšanai',
          'Transmisijas eļļas kvalitātes un līmeņa pārbaude pārnesumkārbas darbībai',
          'Stūres pastiprinātāja eļļas līmeņa pārbaude stūres sistēmas funkcionalitātei',
        ],
      },
      {
        title: 'Balstiekārta',
        description: 'Balstiekārtas, bremžu sistēmas un riepu stāvokļa novērtējums ar testa braucienu un vizuālu apskati.',
        items: [
          'Riepu protektora atlikuma mērīšana un nodiluma vienmērīguma novērtējums',
          'Bremžu disku un uzliku stāvokļa pārbaude, lai novērtētu nodilumu un efektivitāti',
          'Stūres un amortizācijas sistēmas stāvokļa novērtējums ar testa braucienu',
          'Balstiekārtas komponentu un savienojumu pārbaude drošībai un komfortam',
        ],
      },
      {
        title: 'Elektroapgāde',
        description: 'Elektroapgādes sistēmas, akumulatora un lādēšanas mehānismu pārbaude, lai nodrošinātu drošu un uzticamu darbību.',
        items: [
          'Akumulatora baterijas stāvokļa un uzlādes līmeņa novērtējums',
          'Lādēšanas sistēmas un ģeneratora darbības efektivitātes pārbaude',
          'Startera sistēmas un elektroinstalācijas stāvokļa pārbaude',
        ],
      },
    ],
  },

  antiFraud: {
    headline: 'KRĀPNIEKU PAŅĒMIENI:',
    tactics: [
      {
        title: 'Patiesā nobraukuma koriģēšana',
        description: 'Mainot odometra rādījumu, pārdevējs negodīgi palielina automašīnas vērtību, bet samazina tās mezglu ekspluatācijas mūžu.',
      },
      {
        title: 'Slēptas negadījumu pēdas',
        description: 'Lielākoties, remonts veikts nekvalitatīvi, šādi auto nav droši un ekspluatācijā var radīt lielas problēmas.',
      },
      {
        title: 'Bojātas drošību sistēmas',
        description: 'Drošības sistēmu remonts ir ļoti dārgs. Retais pēc negadījumiem šo sistēmu atjauno, tā vietā programmē un "prasmīgi" paslēpj tās nepilnības, auto padarot nedrošu.',
      },
      {
        title: 'Dzinēja kļūmju slēpšana',
        description: 'Vairums slēptos defektus var konstatēt tikai ar atbilstošas diagnostikas izmantošanu.',
      },
      {
        title: 'Patiesais gads un komplektācija',
        description: 'Norādot nepatiesu automašīnas ražošanas gadu un komplektāciju, lielisks veids kā pievilināt nezinošu pircēju.',
      },
      {
        title: 'Servisa grāmata un dokumenti',
        description: 'Fiktīvi aizpildīta servisa grāmata, neatbilstoši pārdošanas un importa dokumenti.',
      },
    ],
  },

  pricing: {
    headline: 'PAKALPOJUMU CENAS:',
    services: [
      {
        title: 'Pamatpārbaude',
        price: 'Sākot no €100 (bez PVN)',
      },
      {
        title: 'Pilns serviss (meklēšana, pārbaude, piegāde)',
        price: 'Sākot no €350 (bez PVN)',
      },
      {
        title: 'Palīdzība uz ceļa',
        price: 'Sākot no €50 (bez PVN)',
      },
    ],
  },

  contact: {
    phone: '+371 25201710',
    phoneHref: 'tel:+37125201710',
    availability: 'Pakalpojumi pieejami visā Eiropā jebkura vecuma vai klases transportlīdzekļiem.',
  },

  instagram: {
    handle: 'teg.auto',
    bio: 'Tehniskā stāvokļa ekspertīze, jebkuras klases un vecuma transportlīdzekliem.',
    profileUrl: 'https://instagram.com/teg.auto',
  },

  testimonials: {
    headline: 'ATSAUKSMES',
    subheadline: 'Apskati, ko mūsu klienti par mums saka:',
    title: 'Ko saka mūsu klienti',
    overallRating: 4.8,
    reviewCount: 200,
    featured: {
      quote: 'Pateicos par ātro un profesionālo pārbaudi. Palīdzējāt izvairīties no sliktas pirkuma!',
      author: 'Jānis K.',
      rating: 5,
    },
    // Placeholder testimonials - replace with actual Google reviews
    placeholders: [
      {
        quote: 'Detalizēts pārskats ar bildēm. Ļoti noderīgi pirms lēmuma pieņemšanas.',
        author: 'Līga M.',
        rating: 5,
      },
      {
        quote: 'Profesionāla komanda, ātri atbildēja uz visiem jautājumiem. Ieteicu!',
        author: 'Andris P.',
        rating: 5,
      },
      {
        quote: 'Pārbaude bija ļoti rūpīga, saņēmu pilnu informāciju par auto stāvokli.',
        author: 'Māris L.',
        rating: 5,
      },
    ],
    items: [
      {
        id: 'testimonial-1',
        name: 'Jānis K.',
        text: 'Pateicos par ātro un profesionālo pārbaudi. Palīdzējāt izvairīties no sliktas pirkuma!',
        review: 'Pateicos par ātro un profesionālo pārbaudi. Palīdzējāt izvairīties no sliktas pirkuma!',
        timeAgo: '2 nedēļas atpakaļ',
        rating: 5,
      },
      {
        id: 'testimonial-2',
        name: 'Līga M.',
        text: 'Detalizēts pārskats ar bildēm. Ļoti noderīgi pirms lēmuma pieņemšanas.',
        review: 'Detalizēts pārskats ar bildēm. Ļoti noderīgi pirms lēmuma pieņemšanas.',
        timeAgo: '1 mēnesi atpakaļ',
        rating: 5,
      },
      {
        id: 'testimonial-3',
        name: 'Andris P.',
        text: 'Profesionāla komanda, ātri atbildēja uz visiem jautājumiem. Ieteicu!',
        review: 'Profesionāla komanda, ātri atbildēja uz visiem jautājumiem. Ieteicu!',
        timeAgo: '3 nedēļas atpakaļ',
        rating: 5,
      },
    ],
  },

  serviceDetails: [
    {
      title: 'Pamatpārbaude pirms iegādes',
      description: 'Detalizēta transportlīdzekļa tehniskā stāvokļa pārbaude pirms tā iegādes visā Eiropā. Dzinēja diagnostika, VIN vēstures pārbaude, virsbūves un krāsojuma inspekcija. Saņem pilnu ziņojumu ar fotogrāfijām un ekspertu atzinumu.',
      ctaText: 'Pasūtīt pārbaudi',
      ctaHref: '/kontakti',
    },
    {
      title: 'Auto meklēšana un piegāde',
      description: 'Pilns serviss - mēs atrodam transportlīdzekli, kas atbilst tavām vēlmēm un budžetam, veicam rūpīgu tehnisko pārbaudi, piegādājam līdz durvīm un palīdzam ar dokumentāciju. Viss, kamēr tu vari palikt mājās.',
      ctaText: 'Uzsākt meklēšanu',
      ctaHref: '/kontakti',
    },
    {
      title: 'Mobilais serviss - palīdzība uz ceļa',
      description: 'Autoserviss brauc pie tevis. Diagnostika, remonti, programmēšana - viss uz vietas.',
      benefits: [
        // Most common issues (top priority)
        'Bojāta riepa / Nav rezerves riteņa / Palīdzība pie riepas punktēšanas',
        'Nepieciešams "Piepīpēt" (akumulatora uzlāde)',
        'Tukša degvielas bāka',
        'Durvju atvēršana / Atslēgu izgatavošana un dublikātu izgatavošana',
        'Rokas bremzes atbloķēšana',
        // Diagnostic and electrical services
        'Kļūdu diagnostika un dzēšana / Elektrokļūmju lasīšana',
        'Akumulatora testēšana, pārbaude ar printētu izdruku un maiņa',
        'ECU un elektro bloku programmēšana / kodēšana',
        'Spuldžu nomaiņa un programmēšana',
        // Repairs and maintenance
        'Slēdzeņu nomaiņa / Logu mehānismu maiņa un remonts',
        'Bremžu, dzinēja un salonu remonti uz vietas',
      ],
      pricing: 'No €50',
      ctaText: 'Izsaukt speciālistu',
      ctaHref: '/kontakti',
    },
  ] as const,

  darkFooterForm: {
    headline: 'Priecāsimies saņemt Jūsu ziņu.',
    introText: 'Pateicamies Tev par izrādīto interesi, atbildēsim tiklīdz tas būs iespējams.',
  } as const,
} as const;

// ============================================================================
// ABOUT PAGE COPY
// ============================================================================

export const ABOUT_PAGE_COPY = {
  headline: 'Transporta ekspertu grupa – sava aroda profesionāļu grupa, kam auto ir sirdslieta.',
  greeting: 'Labdien!',
  paragraphs: [
    'Mēs esam neatkarīgi, pieredzes bagāti, entuziasma pilni autotransporta jomas eksperti.',
    'Organizācija specializējas lietotu un jaunu transportlīdzekļu pārbaudē un iegādē, kā arī piedāvā tehnisko palīdzību uz ceļa un vispārīgus automobiļu padomus.',
    'Mēs sniedzam profesionālu konsultāciju transportlīdzekļu iegādei visā Eiropā. Mūsu pakalpojumi ietver jebkuras klases vai vecuma transportlīdzekļu tehniskā stāvokļa pārbaudes ar ekspertīzi odométra krāpniecības, sliktu remontu, slēptu bojājumu un viltotu dokumentācijas identificēšanā.',
    'Komanda izmanto kvalificētu profesionālo aprīkojumu, sadarbojas ar nozares speciālistiem un automobiļu datubāzēm, lai sniegtu kvalitatīvus, drošus un uzticamus pakalpojumus.',
    'Grupa palīdz klientiem atrast transportlīdzekļus, kas atbilst viņu vēlmēm un budžetam, veic rūpīgas pārbaudes un piedāvā dokumentācijas palīdzību - visu to, kamēr klienti var palikt mājās.',
  ],
  closing: 'Transporta ekspertu grupa',
  contact: {
    phone: '+371 25201710',
    phoneHref: 'tel:+37125201710',
  },
} as const;

// ============================================================================
// SERVICES PAGE COPY
// ============================================================================

export const SERVICES_PAGE_COPY = {
  hero: {
    title: 'AUTOSERVISS BRAUC PIE TEVIS',
    subtitle: 'Izbraukuma autoserviss, palīdzība uz ceļa',
  },

  services: [
    'Kļūdu kodu nolasīšana/dzēšana un dzēšana',
    'Dublikāta atslēgas izgatavošana',
    'Akumulatora testēšana ar drukātiem pārskatiem',
    'Spuldžu un akumulatora maiņa ar programmēšanu',
    'Palīdzība pie punktētas riepas un rezerves riteņa problēmām',
    'Ārkārtas degvielas piegāde',
    'Roku bremzes atbloķēšana',
    'Elektronisko moduļu kodēšana/programmēšana',
    'Durvju atslēgšana un slēdzeņu maiņa; logu mehānismu remonts',
    'Papildu remonti bremzēm, dzinējam un interjeram',
    'Vispārīgi remonti pēc nepieciešamības',
  ],

  pricing: {
    amount: '50 EUR',
    prefix: 'SĀKOT NO',
    full: 'SĀKOT NO 50 EUR',
  },

  disclaimer: {
    main: 'Faktiskie izmaksas mainās atkarībā no transportlīdzekļa gada, markas, modeļa un defekta sarežģītības. Klienti tiek mudināti sazināties ar uzņēmumu par konkrētu cenu jautājumiem. Standarta cenas neietver PVN.',
    tax: 'Standarta cenas neietver PVN.',
  },

  contact: {
    phone: '+371 25 201 710',
    phoneHref: 'tel:+37125201710',
  },
} as const;

// ============================================================================
// CAR PURCHASE PAGE COPY
// ============================================================================

export const CAR_PURCHASE_PAGE_COPY = {
  hero: {
    headline: 'Kā tas izskatās?',
    tagline: 'Auto diagnostika pirms tā iegādes',
  },

  description: {
    intro: 'Pakalpojums piedāvā ieskatu ikdienas darbā, izmantojot nelielu galeriju. Uzņēmums cenšas savākt visaptverošu informāciju par transportlīdzekli, izmantojot klātienes pārbaudes un VIN datubāzu pārbaudes.',
    services: 'Viņi nodrošina novērtējuma pārskatus, fotogrāfijas, mērījumu datus un datoru diagnostikas rezultātus kopā ar VIN vēstures pārskatiem.',
    consultation: 'Viņi piedāvā konsultācijas par potenciālajiem remontiem, izmaksām, apkopes intervāliem un saistītiem jautājumiem.',
  },

  exclusions: {
    headline: 'Šādi testi ir skaidri izslēgti no viņu pakalpojuma:',
    items: [
      'Bremžu testēšana (uz bremžu testētājiem)',
      'Emisijas vērtību noteikšana',
      'Transportlīdzekļa komponentu izjaukšana precīzai bojājumu novērtēšanai',
    ],
    additional: 'Uzņēmums neveic motociklu vai komerciālo transportlīdzekļu ekspertīzes novērtējumus.',
  },

  gallery: {
    description: 'Plaša foto galerija, kas demonstrē viņu darbu, parādot dažādas transportlīdzekļu pārbaudes, diagnostikas aprīkojumu, mērīšanas rīkus un analīzes pārskatus no dažādiem transportlīdzekļiem.',
  },

  galleryNote: 'Galerija tiek regulāri atjaunināta ar jaunākajiem pārbaudes piemēriem.',

  instagram: {
    cta: 'SEKO MŪSU INSTAGRAM, MŪSU DARBU PAPILDUS GALERIJAS:',
    handle: 'teg.auto',
  },

  contact: {
    phone: '+371 25 201 710',
    phoneHref: 'tel:+37125201710',
  },

  footer: {
    copyright: '© TEG 2023',
  },
} as const;

// ============================================================================
// CONTACT PAGE COPY
// ============================================================================

export const CONTACT_PAGE_COPY = {
  whatsappCta: 'Rakstiet mums Whatsapp',
  headline: 'Priecāsimies saņemt Jūsu ziņu.',
  introText: 'Pateicamies Tev par izrādīto interesi, atbildēsim tiklīdz tas būs iespējams.',
  urgentText: 'Bet ja jautājums ir steidzams - rakstiet mums whatsapp vai zvaniet.',
  confirmationMessage: 'Pateicamies Tev par izrādīto interesi, atbildēsim tiklīdz tas būs iespējams.',

  contactInfo: {
    phoneLabel: 'Tālrunis',
    phone: '+371 25 201 710',
    phoneHref: 'tel:+37125201710',
    hoursLabel: 'Darba Laiks',
    hours: 'Pirmdiena–Sestdiena, 9:00–20:00',
  },

  socialMedia: {
    title: 'Mūs sociālajos tīklos',
    platforms: ['Facebook', 'Instagram', 'TikTok'],
    handles: {
      instagram: '@teg.auto',
      tiktok: '@teg.auto',
      facebook: 'Transportaekspertugrupa',
    },
    facebook: {
      url: 'https://www.facebook.com/Transportaekspertugrupa',
      handle: 'Transportaekspertugrupa',
    },
    instagram: {
      url: 'https://www.instagram.com/teg.auto/',
      handle: '@teg.auto',
      bio: 'Neatkarīgi auto eksperti. Pārbaudām auto pirms pirkuma visā Eiropā.',
      followers: '2.5K+',
      likes: '15K+',
    },
    tiktok: {
      url: 'https://www.tiktok.com/@teg.auto',
      handle: '@teg.auto',
      buttonText: 'Sekot TikTok',
    },
  },

  form: {
    formNote: 'Lauki, kas ir apzīmēti ar zvaigznīti (*) ir jāaizpilda obligāti.',
    fields: {
      name: 'Vārds',
      email: 'E-pasts',
      message: 'Jautājums mums',
    },
    requiredMarker: '*',
    submitText: 'Nosūtīt',
    placeholders: {
      name: 'Vārds',
      email: 'E-pasts *',
      message: 'Jautājums mums *',
    },
  },
} as const;

// ============================================================================
// NAVIGATION COPY
// ============================================================================

export const NAVIGATION_COPY = {
  menuItems: [
    { label: 'Sākums', href: '/' },
    { label: 'Par mums', href: '/par-mums' },
    { label: 'Auto iegāde', href: '/auto-iegade' },
    { label: 'Pakalpojumi', href: '/pakalpojumi' },
    { label: 'Kontakti', href: '/kontakti' },
  ],

  phone: {
    display: '+371 25 201 710',
    displayWithPrefix: 'Zvani mums +371 25 201 710',
    href: 'tel:+37125201710',
  },

  languages: [
    { code: 'lv', label: 'LAT' },
    { code: 'en', label: 'ENG' },
    { code: 'ru', label: 'RUS' },
  ],
} as const;

// ============================================================================
// FOOTER COPY
// ============================================================================

export const FOOTER_COPY = {
  copyright: '© TEG 2023',
  phone: '+371 25201710',
  phoneHref: 'tel:+37125201710',
} as const;

// ============================================================================
// COMMON/SHARED COPY
// ============================================================================

export const COMMON_COPY = {
  cta: {
    orderInspection: 'Pasūtīt pārbaudi',
    learnMore: 'Uzzināt vairāk',
    submit: 'Nosūtīt',
    contact: 'Sazināties',
    whatsapp: 'Rakstiet mums Whatsapp',
  },

  validation: {
    required: 'Šis lauks ir obligāts',
    emailInvalid: 'Lūdzu, ievadiet derīgu e-pasta adresi',
    phoneInvalid: 'Lūdzu, ievadiet derīgu tālruņa numuru',
  },

  notifications: {
    success: 'Ziņojums veiksmīgi nosūtīts!',
    error: 'Radās kļūda. Lūdzu, mēģiniet vēlreiz.',
  },
} as const;

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type HomepageCopy = typeof HOMEPAGE_COPY;
export type AboutPageCopy = typeof ABOUT_PAGE_COPY;
export type ContactPageCopy = typeof CONTACT_PAGE_COPY;
export type ServicesPageCopy = typeof SERVICES_PAGE_COPY;
export type CarPurchasePageCopy = typeof CAR_PURCHASE_PAGE_COPY;
export type NavigationCopy = typeof NAVIGATION_COPY;
export type FooterCopy = typeof FOOTER_COPY;
export type CommonCopy = typeof COMMON_COPY;
