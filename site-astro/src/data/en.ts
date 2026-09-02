import type { SiteContent } from './types';

// === ALL ENGLISH SITE COPY LIVES HERE ===
// Editing this file changes the /en/ home and footer. Single source.

export const en: SiteContent = {
  lang: 'en',
  ogLocale: 'en_GB',
  title: 'PC Repair in Alhaurín de la Torre | PCAlhaurín',
  description:
    'Computer technician in Alhaurín de la Torre. Laptop and desktop repairs for software and hardware issues, with a clear diagnosis and a quote before any repair. Contact me via WhatsApp.',
  hero: {
    headline: 'PC repair in Alhaurín de la Torre',
    subtitle:
      'Laptop and desktop repairs for software and hardware issues. Clear diagnosis and a quote before any repair.',
    cta: 'Request a quote',
  },
  services: [
    {
      title: 'Format and reinstall',
      desc: 'Windows reinstalled, drivers installed and basic setup configured. A backup is included before the service.',
      price: '€35–45',
    },
    {
      title: 'Virus and malware removal',
      desc: 'Removal of viruses, adware and unwanted software, with basic protection configured.',
      price: '€25–35',
    },
    {
      title: 'RAM or SSD upgrade',
      desc: 'RAM expansion or SSD installation to improve performance. Labour only; the component is supplied at cost price.',
      price: '€20–30',
    },
    {
      title: "Won't boot or blue screen",
      desc: 'Diagnosis of the fault, boot repair and component replacement when necessary.',
      price: '€25–40',
    },
    {
      title: 'WiFi and network',
      desc: 'Router and extender setup, and diagnosis of connection problems.',
      price: '€20–30',
    },
    {
      title: 'Tune-up',
      desc: 'Internal cleaning, startup optimisation and removal of unnecessary programs.',
      price: '€25–35',
    },
  ],
  servicesNote:
    "Indicative pricing. Tell me your problem via WhatsApp and I'll quote you — no commitment. Home visit: +€20.",
  zones: [
    'Alhaurín de la Torre',
    'Alhaurín el Grande',
    'Cártama',
    'Estación de Cártama',
    'Campanillas',
    'Churriana',
    'Pizarra',
  ],
  zonesText:
    'Computer repair service in Alhaurín de la Torre, Alhaurín el Grande, Cártama, Estación de Cártama, Campanillas, Churriana and Pizarra. Collection and delivery are arranged in advance. Home visits are also available for issues that can be resolved on site.',
  about:
    'PCAlhaurín is an independent computer repair service with 17 years of experience. I repair Windows and Linux laptops and desktop computers, with a clear diagnosis, a quote before any repair and an explanation of the repair options.',
  faq: [
    {
      q: 'How much does computer repair cost in Alhaurín de la Torre?',
      a: 'The price depends on the issue. A full format with backup costs between €35 and €45, and virus removal costs between €25 and €35. These are indicative prices; the quote is confirmed before any repair is carried out.',
    },
    {
      q: 'Do you offer home visits?',
      a: 'Home visits are available in Alhaurín de la Torre and nearby towns for issues that can be resolved at home. There is a €20 surcharge for the visit. When the equipment needs a more complete assessment, collection is arranged so it can be worked on in the workshop.',
    },
    {
      q: 'Are repairs carried out without authorisation?',
      a: 'No. I inspect the computer first, explain the issue and confirm the quote. The repair is only carried out after I receive your authorisation.',
    },
    {
      q: 'Can a slow computer be improved?',
      a: 'In many cases, yes. Common causes include too many programs at startup, an old hard drive or malware. A tune-up or SSD installation can significantly improve performance.',
    },
    {
      q: 'Do you repair Mac computers?',
      a: 'The service focuses on Windows and Linux computers. Mac repairs are not offered.',
    },
    {
      q: 'How are collection and delivery arranged?',
      a: 'Collection and delivery are arranged in advance via WhatsApp. Usual support and collection hours are Monday to Friday, 18:00–21:00, and Saturday mornings.',
    },
  ],
  contact: {
    phone: '+34 614 47 99 22',
    whatsapp: '34614479922',
    location: 'Avenida El Limón, Alhaurín de la Torre, Málaga',
    hours: 'Support and collection hours: Monday to Friday, 18:00–21:00, and Saturday mornings.',
  },
  ui: {
    mainNav: 'Main navigation',
    changeLang: 'Change language',
    langLabel: '🇬🇧 English',
    skipToContent: 'Skip to content',
    servicesHeading: 'Services',
    workGallery: 'Work gallery',
    galleryRegion: 'Gallery of completed work',
    faqHeading: 'Frequently asked questions',
    serviceAreaHeading: 'Service area',
    townsAria: 'Towns where we provide service',
    aboutHeading: 'About me',
    contactHeading: 'Contact',
    contactWhatsApp: 'Message me on WhatsApp',
    alsoByPhone: 'Also by phone:',
    priceLabel: (p: string) => `Price: ${p}`,
    legalLink: 'Legal',
    footerQuoteText: 'Hi,%20I%20need%20a%20quote',
    heroQuoteText: 'Hi,%20I%20need%20a%20quote%20for%20my%20computer',
    contactQuoteText: 'Hi,%20I%20need%20a%20quote%20for%20my%20computer',
    floatHelpText: 'Hi,%20I%20need%20help%20with%20my%20computer',
    navQuoteText: 'Hi,%20I%20need%20a%20quote',
    offerCatalogName: 'PC repair services',
  },
  galleryAlt: [
    'AMD processor ready for installation',
    'CPU socket on motherboard',
    'Dell laptop motherboard during RAM upgrade',
    'Restored Amstrad CPC running a game',
    'Hardware error diagnosis on screen',
    'Motherboard PCB circuit detail',
  ],
};
