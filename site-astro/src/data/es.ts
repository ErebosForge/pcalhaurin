import type { SiteContent } from './types';

// === TODO EL TEXTO EN ESPAÑOL DEL SITIO ESTÁ AQUÍ ===
// Editar este fichero cambia el contenido de la home y del pie. Un solo sitio.

export const es: SiteContent = {
  lang: 'es',
  ogLocale: 'es_ES',
  title: 'Reparación de Ordenadores en Alhaurín de la Torre | PCAlhaurín',
  description:
    'Técnico informático en Alhaurín de la Torre. Reparación de ordenadores y portátiles, software y hardware, con diagnóstico claro y presupuesto previo. Solicite información por WhatsApp.',
  hero: {
    headline: 'Reparación de ordenadores en Alhaurín de la Torre',
    subtitle:
      'Reparación de ordenadores y portátiles con problemas de software y hardware. Diagnóstico claro y presupuesto previo antes de realizar cualquier reparación.',
    cta: 'Solicitar presupuesto',
  },
  services: [
    {
      title: 'Formateo y reinstalación',
      desc: 'Reinstalación de Windows, instalación de controladores y configuración básica. Copia de seguridad previa incluida en el servicio.',
      price: '35–45€',
    },
    {
      title: 'Eliminación de virus',
      desc: 'Eliminación de virus, adware y software no deseado, con configuración básica de protección.',
      price: '25–35€',
    },
    {
      title: 'Ampliación de RAM o SSD',
      desc: 'Ampliación de memoria RAM o instalación de SSD para mejorar el rendimiento. Se factura únicamente la mano de obra; el componente se facilita a precio de coste.',
      price: '20–30€',
    },
    {
      title: 'No arranca o pantalla azul',
      desc: 'Diagnóstico de la avería, reparación del arranque y sustitución de componentes cuando sea necesario.',
      price: '25–40€',
    },
    {
      title: 'WiFi y red',
      desc: 'Configuración de routers y repetidores, y diagnóstico de problemas de conexión.',
      price: '20–30€',
    },
    {
      title: 'Puesta a punto',
      desc: 'Limpieza interna, optimización del arranque y eliminación de programas innecesarios.',
      price: '25–35€',
    },
  ],
  servicesNote:
    "Precios orientativos. Cuéntame tu problema por WhatsApp y te doy presupuesto sin compromiso. Desplazamiento a domicilio: +20€.",
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
    'Servicio técnico de ordenadores en Alhaurín de la Torre, Alhaurín el Grande, Cártama, Estación de Cártama, Campanillas, Churriana y Pizarra. La recogida y entrega de equipos se coordinan previamente. También se realizan visitas a domicilio para incidencias que puedan resolverse en el lugar.',
  about:
    'PCAlhaurín es un servicio técnico informático independiente con 17 años de experiencia. Se reparan portátiles y equipos de sobremesa con Windows y Linux, con diagnóstico claro, presupuesto previo y explicación de las opciones de reparación.',
  faq: [
    {
      q: '¿Cuánto cuesta reparar un ordenador en Alhaurín de la Torre?',
      a: 'El precio depende de la avería. Un formateo completo con copia de seguridad cuesta entre 35 y 45 € y la eliminación de virus, entre 25 y 35 €. Son precios orientativos; el presupuesto se confirma antes de realizar cualquier reparación.',
    },
    {
      q: '¿Se realizan reparaciones a domicilio?',
      a: 'Se realizan visitas a domicilio en Alhaurín de la Torre y localidades cercanas para incidencias que puedan resolverse en el propio domicilio. La visita tiene un suplemento de 20 €. Cuando el equipo requiere una revisión más completa, se coordina su recogida para trabajar en el taller.',
    },
    {
      q: '¿Se realiza la reparación sin autorización?',
      a: 'No. Primero se revisa el equipo, se explica la avería y se confirma el presupuesto. La reparación solo se realiza después de recibir la autorización.',
    },
    {
      q: '¿Se puede mejorar el rendimiento de un ordenador lento?',
      a: 'En muchos casos es posible mejorar notablemente el rendimiento. Las causas habituales son el exceso de programas al arrancar, un disco duro antiguo o software malicioso. Una puesta a punto o la instalación de un SSD puede resolver el problema.',
    },
    {
      q: '¿Se presta servicio de reparación para equipos Mac?',
      a: 'El servicio se centra en equipos Windows y Linux. No se realizan reparaciones de equipos Mac.',
    },
    {
      q: '¿Cómo se coordina la recogida o entrega?',
      a: 'La recogida y la entrega se coordinan previamente por WhatsApp. El horario habitual de atención y recogida es de lunes a viernes, de 18:00 a 21:00, y los sábados por la mañana.',
    },
  ],
  contact: {
    phone: '+34 614 47 99 22',
    whatsapp: '34614479922',
    location: 'Avenida El Limón, Alhaurín de la Torre, Málaga',
    hours: 'Horario de atención y recogida: lunes a viernes, de 18:00 a 21:00, y los sábados por la mañana.',
  },
  ui: {
    mainNav: 'Navegación principal',
    changeLang: 'Cambiar idioma',
    langLabel: '🇪🇸 Español',
    skipToContent: 'Saltar al contenido',
    servicesHeading: 'Servicios',
    workGallery: 'Galería de trabajos',
    galleryRegion: 'Galería de trabajos realizados',
    faqHeading: 'Preguntas frecuentes',
    serviceAreaHeading: 'Zona de cobertura',
    townsAria: 'Localidades donde ofrecemos servicio',
    aboutHeading: 'Sobre mí',
    contactHeading: 'Contacto',
    contactWhatsApp: 'Escríbeme por WhatsApp',
    alsoByPhone: 'También por teléfono:',
    priceLabel: (p: string) => `Precio: ${p}`,
    legalLink: 'Aviso legal',
    footerQuoteText: 'Hola,%20necesito%20presupuesto',
    heroQuoteText: 'Hola,%20necesito%20presupuesto%20para%20mi%20ordenador',
    contactQuoteText: 'Hola,%20necesito%20presupuesto%20para%20mi%20ordenador',
    floatHelpText: 'Hola,%20necesito%20ayuda%20con%20mi%20ordenador',
    navQuoteText: 'Hola,%20necesito%20presupuesto',
    offerCatalogName: 'Servicios de reparación de ordenadores',
  },
  galleryAlt: [
    'Procesador AMD preparado para instalación',
    'Socket de procesador en placa base',
    'Placa base de portátil Dell durante ampliación de memoria',
    'Amstrad CPC restaurado y funcionando',
    'Diagnóstico de error de hardware en pantalla',
    'Detalle de circuito impreso de placa base',
  ],
};
