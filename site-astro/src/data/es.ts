import type { SiteContent } from './types';

// === TODO EL TEXTO EN ESPAÑOL DEL SITIO ESTÁ AQUÍ ===
// Editar este fichero cambia el contenido de la home y del pie. Un solo sitio.

export const es: SiteContent = {
  lang: 'es',
  ogLocale: 'es_ES',
  title: 'Reparación de Ordenadores en Alhaurín de la Torre | PCAlhaurín',
  description:
    'Servicio técnico informático en Alhaurín de la Torre. Reparamos ordenadores y portátiles con problemas de software y hardware, con diagnóstico claro y presupuesto previo. Información y presupuesto por WhatsApp.',
  hero: {
    headline: 'Reparación de ordenadores en Alhaurín de la Torre',
    subtitle:
      'Reparación de ordenadores y portátiles con problemas de software y hardware. Diagnóstico claro y presupuesto previo antes de realizar cualquier reparación.',
    cta: 'Solicitar presupuesto',
  },
  services: [
    {
      title: 'Formateo e instalación de Windows',
      desc: 'Formateo del equipo, reinstalación de Windows, instalación de controladores y configuración básica. Copia de seguridad previa incluida en el servicio.',
      price: '35–45€',
    },
    {
      title: 'Eliminación de virus y malware',
      desc: 'Eliminación de virus, malware, adware y software no deseado, con configuración básica de protección.',
      price: '25–35€',
    },
    {
      title: 'Ampliación de RAM y SSD',
      desc: 'Ampliación de memoria RAM o instalación de SSD para mejorar el rendimiento. La mano de obra se factura por separado; el componente se facilita a precio de coste.',
      price: '20–30€',
    },
    {
      title: 'Reparación de PC: no arranca o pantalla azul',
      desc: 'Diagnóstico de averías de arranque, reparación de pantallas azules y sustitución de componentes cuando es necesario.',
      price: '25–40€',
    },
    {
      title: 'Configuración de WiFi y redes',
      desc: 'Configuración de routers y repetidores, conexión WiFi y diagnóstico de problemas de red.',
      price: '20–30€',
    },
    {
      title: 'Puesta a punto y optimización',
      desc: 'Limpieza interna, optimización del arranque y eliminación de programas innecesarios para mejorar el rendimiento.',
      price: '25–35€',
    },
  ],
  servicesNote:
    'Precios orientativos. Cuéntanos tu problema por WhatsApp y te preparamos un presupuesto sin compromiso. Desplazamiento a domicilio: +20€.',
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
    'Servicio técnico de ordenadores en Alhaurín de la Torre, Alhaurín el Grande, Cártama, Estación de Cártama, Campanillas, Churriana y Pizarra. Coordinamos previamente la recogida y entrega de equipos. También realizamos visitas a domicilio para incidencias que puedan resolverse en el lugar.',
  about:
    'En PCAlhaurín trabajamos con portátiles y equipos de sobremesa con Windows y Linux. Tenemos 17 años de experiencia y ofrecemos un diagnóstico claro, presupuesto previo y explicación de las opciones de reparación.',
  faq: [
    {
      q: '¿Cuánto cuesta reparar un ordenador en Alhaurín de la Torre?',
      a: 'El precio depende de la avería. Un formateo completo con copia de seguridad cuesta entre 35 y 45 € y la eliminación de virus, entre 25 y 35 €. Son precios orientativos; el presupuesto se confirma antes de realizar cualquier reparación.',
    },
    {
      q: '¿Se realizan reparaciones a domicilio?',
      a: 'Realizamos visitas a domicilio en Alhaurín de la Torre y localidades cercanas para incidencias que puedan resolverse en el propio domicilio. La visita tiene un suplemento de 20 €. Cuando el equipo requiere una revisión más completa, coordinamos su recogida para trabajar en el taller.',
    },
    {
      q: '¿Se realiza la reparación sin autorización?',
      a: 'No. Primero revisamos el equipo, explicamos la avería y confirmamos el presupuesto. La reparación solo se realiza después de recibir la autorización.',
    },
    {
      q: '¿Se puede mejorar el rendimiento de un ordenador lento?',
      a: 'En muchos casos podemos mejorar notablemente el rendimiento. Las causas habituales son el exceso de programas al arrancar, un disco duro antiguo o software malicioso. Una puesta a punto o la instalación de un SSD puede resolver el problema.',
    },
    {
      q: '¿Se presta servicio de reparación para equipos Mac?',
      a: 'El servicio se centra en equipos Windows y Linux. No realizamos reparaciones de equipos Mac.',
    },
    {
      q: '¿Cómo se coordina la recogida o entrega?',
      a: 'Coordinamos la recogida y la entrega previamente por WhatsApp. Nuestro horario habitual de atención y recogida es de lunes a viernes, de 18:00 a 21:00, y los sábados por la mañana.',
    },
  ],
  contact: {
    phone: '+34 614 47 99 22',
    whatsapp: '34614479922',
    location: 'Avenida El Limón, Alhaurín de la Torre, Málaga',
    hours: 'Horario de atención y recogida: lunes a viernes, de 18:00 a 21:00, y los sábados por la mañana.',
  },
  pages: {
    services: {
      metaTitle: 'Servicios de reparación de ordenadores | PCAlhaurín',
      title: 'Servicios de reparación de ordenadores en Alhaurín de la Torre',
      description:
        'Servicios de reparación de ordenadores y portátiles en Alhaurín de la Torre: Windows, virus, RAM, SSD, WiFi y diagnóstico, con precios orientativos y presupuesto previo.',
      intro:
        'Reparación de ordenadores y portátiles con problemas de software y hardware. Estos son los servicios más habituales, con precios orientativos y una explicación clara antes de cualquier reparación.',
      sections: [
        {
          heading: 'Presupuesto previo y precios orientativos',
          paragraphs: [
            'Los precios publicados son orientativos. Primero revisamos el equipo y confirmamos el presupuesto antes de realizar la reparación.',
          ],
        },
        {
          heading: 'Recogida, taller y visitas a domicilio',
          paragraphs: [
            'Algunas incidencias se pueden resolver en el domicilio. Cuando el equipo necesita una revisión más completa, coordinamos la recogida y la entrega previamente por WhatsApp.',
          ],
        },
      ],
      cta: 'Solicitar presupuesto',
      ctaText: 'Hola,%20necesito%20presupuesto%20para%20mi%20ordenador',
    },
    homeVisits: {
      metaTitle: 'Informático a domicilio en Alhaurín | PCAlhaurín',
      title: 'Informático a domicilio en Alhaurín de la Torre',
      description:
        'Servicio informático a domicilio en Alhaurín de la Torre y localidades cercanas. Configuración de WiFi, puesta a punto y resolución de incidencias que pueden solucionarse en el lugar.',
      intro:
        'Realizamos visitas a domicilio para incidencias que pueden resolverse en el lugar. El desplazamiento tiene un suplemento de 20 € y se confirma el presupuesto antes de cualquier reparación.',
      sections: [
        {
          heading: 'Incidencias que pueden resolverse a domicilio',
          paragraphs: [
            'La atención a domicilio es adecuada cuando no es necesario desmontar el equipo o hacer una revisión prolongada en el taller.',
          ],
          bullets: [
            'Configuración de WiFi, routers y repetidores.',
            'Puesta a punto y problemas de rendimiento.',
            'Configuración de programas y eliminación de software no deseado.',
          ],
        },
        {
          heading: 'Cuándo se recoge el equipo',
          paragraphs: [
            'Cuando la avería requiere una revisión más completa, coordinamos la recogida y la entrega previamente por WhatsApp para trabajar en el taller.',
          ],
        },
      ],
      cta: 'Solicitar visita o presupuesto',
      ctaText: 'Hola,%20necesito%20una%20visita%20a%20domicilio',
    },
    howWeWork: {
      metaTitle: 'Cómo trabajamos | PCAlhaurín',
      title: 'Cómo trabajamos',
      description:
        'Así funciona el servicio de reparación de ordenadores de PCAlhaurín: contacto, diagnóstico, presupuesto previo, reparación y entrega.',
      intro:
        'Trabajamos con un proceso sencillo y transparente para que conozcas la avería, el precio y las opciones antes de autorizar cualquier reparación.',
      sections: [
        {
          heading: '1. Primer contacto',
          paragraphs: [
            'Cuéntanos por WhatsApp qué le ocurre al ordenador, portátil o conexión. Con esa información podemos orientarte sobre los siguientes pasos.',
          ],
        },
        {
          heading: '2. Revisión y diagnóstico',
          paragraphs: [
            'Revisamos el equipo para identificar la causa del problema y distinguir entre una incidencia de software, hardware o configuración.',
          ],
        },
        {
          heading: '3. Presupuesto previo',
          paragraphs: [
            'Explicamos la avería y confirmamos el presupuesto antes de realizar cualquier reparación. No se hace ningún trabajo sin autorización.',
          ],
        },
        {
          heading: '4. Reparación y entrega',
          paragraphs: [
            'Una vez autorizado el trabajo, coordinamos la reparación, la recogida o la entrega del equipo y explicamos las opciones aplicadas.',
          ],
        },
      ],
      cta: 'Hablar por WhatsApp',
      ctaText: 'Hola,%20necesito%20ayuda%20con%20mi%20ordenador',
    },
    contact: {
      metaTitle: 'Contacto y presupuesto | PCAlhaurín',
      title: 'Contacto y presupuesto en Alhaurín de la Torre',
      description:
        'Contacta con PCAlhaurín por WhatsApp o teléfono para solicitar presupuesto de reparación de ordenadores en Alhaurín de la Torre y alrededores.',
      intro:
        'Para pedir presupuesto, explicar una avería o coordinar una recogida, el medio más rápido es WhatsApp. También puedes llamar por teléfono durante el horario de atención.',
      sections: [
        {
          heading: 'Recogida y visitas a domicilio',
          paragraphs: [
            'La recogida y la entrega se coordinan previamente. Las visitas a domicilio están disponibles para incidencias que puedan resolverse en el lugar y tienen un suplemento de 20 €.',
          ],
        },
        {
          heading: 'Zona de servicio',
          paragraphs: [
            'Atendemos Alhaurín de la Torre, Alhaurín el Grande, Cártama, Estación de Cártama, Campanillas, Churriana y Pizarra.',
          ],
        },
      ],
      cta: 'Escríbenos por WhatsApp',
      ctaText: 'Hola,%20necesito%20presupuesto',
    },
  },
  ui: {
    mainNav: 'Navegación principal',
    navHome: 'Inicio',
    navServices: 'Servicios',
    navHowWeWork: 'Cómo trabajamos',
    navAreas: 'Zonas',
    navHomeVisits: 'A domicilio',
    navContact: 'Contacto',
    changeLang: 'Cambiar idioma',
    langLabel: '🇪🇸 Español',
    skipToContent: 'Saltar al contenido',
    servicesHeading: 'Servicios',
    workGallery: 'Galería de trabajos',
    galleryRegion: 'Galería de trabajos realizados',
    faqHeading: 'Preguntas frecuentes',
    serviceAreaHeading: 'Zona de cobertura',
    townsAria: 'Localidades donde ofrecemos servicio',
    aboutHeading: 'Cómo trabajamos',
    contactHeading: 'Contacto',
    contactWhatsApp: 'Escríbenos por WhatsApp',
    alsoByPhone: 'También puedes llamarnos:',
    priceLabel: (p: string) => `Precio: ${p}`,
    legalLink: 'Aviso legal',
    websiteBy: 'Un sitio web de ErebosForge',
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
