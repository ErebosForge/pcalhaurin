// Shared shape of the site copy. Editing text = editing es.ts / en.ts only.
// This type is the "schema": TypeScript flags a missing/renamed field at build.

export interface Service {
  title: string;
  desc: string;
  price: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface InfoPageSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface InfoPageContent {
  metaTitle: string;
  title: string;
  description: string;
  intro: string;
  sections: InfoPageSection[];
  cta: string;
  ctaText: string;
}

export interface Contact {
  phone: string;
  whatsapp: string;
  location: string;
  hours: string;
}

export interface SiteContent {
  /** <html lang> and hreflang code */
  lang: 'es' | 'en';
  /** og:locale value */
  ogLocale: string;
  /** <title> */
  title: string;
  /** meta description */
  description: string;
  hero: {
    headline: string;
    subtitle: string;
    cta: string;
  };
  services: Service[];
  /** Note shown under the services grid */
  servicesNote: string;
  zones: string[];
  zonesText: string;
  about: string;
  pages: {
    services: InfoPageContent;
    homeVisits: InfoPageContent;
    howWeWork: InfoPageContent;
    contact: InfoPageContent;
  };
  faq: Faq[];
  contact: Contact;
  /** UI strings that were inline conditionals in the Hugo template */
  ui: {
    mainNav: string;
    navHome: string;
    navServices: string;
    navHowWeWork: string;
    navAreas: string;
    navHomeVisits: string;
    navContact: string;
    changeLang: string;
    langLabel: string;
    skipToContent: string;
    servicesHeading: string;
    workGallery: string;
    galleryRegion: string;
    faqHeading: string;
    serviceAreaHeading: string;
    townsAria: string;
    aboutHeading: string;
    contactHeading: string;
    contactWhatsApp: string;
    alsoByPhone: string;
    priceLabel: (p: string) => string;
    legalLink: string;
    websiteBy: string;
    footerQuoteText: string; // wa.me prefilled text (URL-encoded)
    heroQuoteText: string;
    contactQuoteText: string;
    floatHelpText: string;
    navQuoteText: string;
    offerCatalogName: string;
  };
  /** Alt texts for the 6 gallery images, in order */
  galleryAlt: string[];
}
