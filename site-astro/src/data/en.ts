import type { SiteContent } from './types';

// === ALL ENGLISH SITE COPY LIVES HERE ===
// Editing this file changes the /en/ home and footer. Single source.

export const en: SiteContent = {
  lang: 'en',
  ogLocale: 'en_GB',
  title: 'PC Repair in Alhaurín de la Torre | PCAlhaurín',
  description:
    'PC repair service in Alhaurín de la Torre. We repair laptops and desktop computers with software and hardware problems, with a clear diagnosis and a quote before any repair. Contact us via WhatsApp for information or a quote.',
  hero: {
    headline: 'PC repair in Alhaurín de la Torre',
    subtitle:
      'Laptop and desktop repairs for software and hardware issues. Clear diagnosis and a quote before any repair.',
    cta: 'Request a quote',
  },
  services: [
    {
      title: 'Windows formatting and installation',
      desc: 'Computer formatting, Windows reinstallation, driver installation and basic setup. Backup included before the service.',
      price: '€35–45',
    },
    {
      title: 'Virus and malware removal',
      desc: 'Removal of viruses, malware, adware and unwanted software, with basic protection configured.',
      price: '€25–35',
    },
    {
      title: 'RAM and SSD upgrade',
      desc: 'RAM expansion or SSD installation to improve performance. Labour is charged separately; the component is supplied at cost price.',
      price: '€20–30',
    },
    {
      title: "PC repair: won't boot or blue screen",
      desc: 'Diagnosis of boot faults, blue-screen repair and component replacement when necessary.',
      price: '€25–40',
    },
    {
      title: 'WiFi and network setup',
      desc: 'Router and extender setup, WiFi connection and diagnosis of network problems.',
      price: '€20–30',
    },
    {
      title: 'Computer tune-up and optimisation',
      desc: 'Internal cleaning, startup optimisation and removal of unnecessary programs to improve performance.',
      price: '€25–35',
    },
  ],
  servicesNote:
    "Indicative pricing. Tell us your problem via WhatsApp and we'll provide a no-obligation quote. Home visit: +€20.",
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
    'Computer repair service in Alhaurín de la Torre, Alhaurín el Grande, Cártama, Estación de Cártama, Campanillas, Churriana and Pizarra. We arrange collection and delivery in advance. We also provide home visits for issues that can be resolved on site.',
  about:
    'At PCAlhaurín, we repair Windows and Linux laptops and desktop computers. We have 17 years of experience and provide a clear diagnosis, a quote before any repair and an explanation of the repair options.',
  faq: [
    {
      q: 'How much does computer repair cost in Alhaurín de la Torre?',
      a: 'The price depends on the issue. A full format with backup costs between €35 and €45, and virus removal costs between €25 and €35. These are indicative prices; the quote is confirmed before any repair is carried out.',
    },
    {
      q: 'Do you offer home visits?',
      a: 'We offer home visits in Alhaurín de la Torre and nearby towns for issues that can be resolved at home. There is a €20 surcharge for the visit. When the equipment needs a more complete assessment, we arrange collection so it can be worked on in the workshop.',
    },
    {
      q: 'Are repairs carried out without authorisation?',
      a: 'No. We inspect the computer first, explain the issue and confirm the quote. The repair is only carried out after we receive your authorisation.',
    },
    {
      q: 'Can a slow computer be improved?',
      a: 'In many cases, we can significantly improve performance. Common causes include too many programs at startup, an old hard drive or malware. A tune-up or SSD installation can solve the problem.',
    },
    {
      q: 'Do you repair Mac computers?',
      a: 'The service focuses on Windows and Linux computers. Mac repairs are not offered.',
    },
    {
      q: 'How are collection and delivery arranged?',
      a: 'We arrange collection and delivery in advance via WhatsApp. Our usual support and collection hours are Monday to Friday, 18:00–21:00, and Saturday mornings.',
    },
  ],
  contact: {
    phone: '+34 614 47 99 22',
    whatsapp: '34614479922',
    location: 'Avenida El Limón, Alhaurín de la Torre, Málaga',
    hours: 'Support and collection hours: Monday to Friday, 18:00–21:00, and Saturday mornings.',
  },
  pages: {
    services: {
      metaTitle: 'Computer Repair Services | PCAlhaurín',
      title: 'Computer repair services in Alhaurín de la Torre',
      description:
        'Computer and laptop repair services in Alhaurín de la Torre: Windows, viruses, RAM, SSD, WiFi and diagnostics, with indicative prices and a quote first.',
      intro:
        'Computer and laptop repairs for software and hardware problems. These are the most common services, with indicative pricing and a clear explanation before any repair.',
      sections: [
        {
          heading: 'Indicative prices and a quote first',
          paragraphs: [
            'Published prices are indicative. We inspect the computer first and confirm the quote before carrying out any repair.',
          ],
        },
        {
          heading: 'Collection, workshop and home visits',
          paragraphs: [
            'Some issues can be resolved at home. When the equipment needs a more complete assessment, we arrange collection and delivery in advance via WhatsApp.',
          ],
        },
      ],
      cta: 'Request a quote',
      ctaText: 'Hi,%20I%20need%20a%20quote%20for%20my%20computer',
    },
    homeVisits: {
      metaTitle: 'Computer Repair at Home in Alhaurín | PCAlhaurín',
      title: 'Computer repair at home in Alhaurín de la Torre',
      description:
        'Computer repair at home in Alhaurín de la Torre and nearby towns. WiFi setup, tune-ups and issues that can be resolved on site.',
      intro:
        'We provide home visits for issues that can be resolved on site. The visit has a €20 surcharge, and the quote is confirmed before any repair.',
      sections: [
        {
          heading: 'Issues that can be resolved at home',
          paragraphs: [
            'Home support is suitable when the computer does not need to be dismantled or assessed in the workshop for an extended period.',
          ],
          bullets: [
            'WiFi, router and extender setup.',
            'Computer tune-ups and performance issues.',
            'Program setup and removal of unwanted software.',
          ],
        },
        {
          heading: 'When equipment is collected',
          paragraphs: [
            'When the fault needs a more complete assessment, we arrange collection and delivery in advance via WhatsApp so the equipment can be worked on in the workshop.',
          ],
        },
      ],
      cta: 'Request a visit or quote',
      ctaText: 'Hi,%20I%20need%20a%20home%20visit',
    },
    howWeWork: {
      metaTitle: 'How We Work | PCAlhaurín',
      title: 'How we work',
      description:
        'How PCAlhaurín computer repair works: contact, diagnosis, quote first, repair and collection or delivery.',
      intro:
        'We use a simple, transparent process so you know the problem, price and repair options before authorising any work.',
      sections: [
        {
          heading: '1. First contact',
          paragraphs: [
            'Tell us via WhatsApp what is happening with your computer, laptop or connection. This helps us advise you on the next step.',
          ],
        },
        {
          heading: '2. Review and diagnosis',
          paragraphs: [
            'We inspect the equipment to identify the cause of the problem and distinguish between software, hardware and configuration issues.',
          ],
        },
        {
          heading: '3. Quote before any repair',
          paragraphs: [
            'We explain the fault and confirm the quote before carrying out any repair. No work is done without authorisation.',
          ],
        },
        {
          heading: '4. Repair and delivery',
          paragraphs: [
            'Once the work is authorised, we arrange the repair, collection or delivery and explain the options applied.',
          ],
        },
      ],
      cta: 'Message us on WhatsApp',
      ctaText: 'Hi,%20I%20need%20help%20with%20my%20computer',
    },
    contact: {
      metaTitle: 'Contact and Quotes | PCAlhaurín',
      title: 'Contact and quotes in Alhaurín de la Torre',
      description:
        'Contact PCAlhaurín by WhatsApp or phone for a computer repair quote in Alhaurín de la Torre and nearby towns.',
      intro:
        'For a quote, an explanation of a fault or to arrange collection, WhatsApp is the quickest option. You can also call during support hours.',
      sections: [
        {
          heading: 'Collection and home visits',
          paragraphs: [
            'Collection and delivery are arranged in advance. Home visits are available for issues that can be resolved on site and have a €20 surcharge.',
          ],
        },
        {
          heading: 'Service area',
          paragraphs: [
            'We serve Alhaurín de la Torre, Alhaurín el Grande, Cártama, Estación de Cártama, Campanillas, Churriana and Pizarra.',
          ],
        },
      ],
      cta: 'Message us on WhatsApp',
      ctaText: 'Hi,%20I%20need%20a%20quote',
    },
  },
  ui: {
    mainNav: 'Main navigation',
    navHome: 'Home',
    navServices: 'Services',
    navHowWeWork: 'How we work',
    navAreas: 'Service areas',
    navHomeVisits: 'Home visits',
    navContact: 'Contact',
    changeLang: 'Change language',
    langLabel: '🇬🇧 English',
    skipToContent: 'Skip to content',
    servicesHeading: 'Services',
    workGallery: 'Work gallery',
    galleryRegion: 'Gallery of completed work',
    faqHeading: 'Frequently asked questions',
    serviceAreaHeading: 'Service area',
    townsAria: 'Towns where we provide service',
    aboutHeading: 'How we work',
    contactHeading: 'Contact',
    contactWhatsApp: 'Message us on WhatsApp',
    alsoByPhone: 'You can also call us:',
    priceLabel: (p: string) => `Price: ${p}`,
    legalLink: 'Legal',
    websiteBy: 'A website by ErebosForge',
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
