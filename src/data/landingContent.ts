export const navLinks = [
  { label: 'Inicio', sectionId: 'inicio' },
  { label: 'Servicios', sectionId: 'servicios' },
  { label: 'Proceso', sectionId: 'proceso' },
  { label: 'Nosotros', sectionId: 'nosotros' },
  { label: 'Contacto', sectionId: 'contacto' },
];

export const heroContent = {
  eyebrow: 'Central de Esterilización Externa',
  title: 'Excelencia en Esterilización Quirúrgica',
  description:
    'Soluciones integrales de esterilización para clínicas y hospitales en Lima. Garantizamos la seguridad de sus pacientes con tecnología de punta.',
  primaryCta: { label: 'Solicitar Servicio', targetSection: 'contacto' },
  secondaryCta: { label: 'Conocer Proceso', targetSection: 'proceso' },
  backgroundImage: '/images/limpiando.avif',
  featureCards: [
    {
      title: 'Garantía de Esterilidad',
      description: 'Protocolos validados internacionalmente.',
      icon: 'shield-check',
      accent: 'bg-red-50 text-red-600',
    },
    {
      title: 'Controles Biológicos',
      description: 'Monitoreo constante en cada ciclo.',
      icon: 'beaker',
      accent: 'bg-teal-50 text-teal-600',
    },
    {
      title: 'Tiempos Óptimos',
      description: 'Entrega en 6 - 12 - 16 horas.',
      icon: 'clock',
      accent: 'bg-blue-50 text-blue-600',
    },
  ],
};

export const servicesContent = {
  title: 'Nuestros Servicios',
  description:
    'Brindamos un servicio integral de central de esterilización externa, permitiendo a clínicas y hospitales optimizar sus recursos y garantizar la seguridad del paciente.',
  items: [
    {
      title: 'Lavado y Descontaminación',
      description: 'Proceso riguroso de limpieza y desinfección para eliminar toda carga biológica antes de la esterilización.',
      icon: 'drop-2',
      bgColor: '#00BBA7',
      iconColor: 'white',
    },
    {
      title: 'Esterilización a OE (Oxido de etileno al 100 %)',
      description: 'Proceso ideal para instrumental sensible al calor y la humedad, garantizando una esterilización profunda y efectiva mediante gas de óxido de etileno.',
      icon: 'lightning',
      bgColor: '#FF2056',
      iconColor: 'white',
    },
    {
      title: 'Empaque y Sellado',
      description: 'Uso de barreras estériles de grado médico (papel grado médico, Tyvek) que aseguran la preservación de la esterilidad hasta su uso.',
      icon: 'box',
      bgColor: '#0084D1',
      iconColor: 'white',
    },
    {
      title: 'Entrega de Material',
      description: 'Servicio de transporte seguro para el retorno del instrumental estéril, garantizando la integridad de los empaques hasta su destino.',
      icon: 'truck',
      bgColor: '#314158',
      iconColor: 'white',
    },
  ],
};

export const techContent = {
  title: 'Tecnología de Vanguardia',
  description:
    'Contamos con lavadoras automatizadas y secadoras, empleando esterilización a óxido de etileno. Nuestras instalaciones disponen de un flujo unidireccional para salvaguardar la esterilización. Cada ciclo es validado con indicadores físicos, químicos y biológicos, cumpliendo con las normas técnicas del MINSA y estándares internacionales.',
  bullets: [
    'Lavadoras termodesinfectadoras',
    'Esterilizadores a Óxido de Etileno',
    'Selladoras rotativas',
  ],
  image: '/images/limpiando.avif',
};

export const processContent = {
  title: 'Nuestro Ciclo de Calidad',
  description:
    'Un flujo de trabajo riguroso diseñado para eliminar cualquier riesgo de infección cruzada, garantizando que cada instrumento esté listo para salvar vidas.',
  steps: [
    {
      badge: 'PASO 01',
      title: 'Lavado y Desinfección',
      description: 'Limpieza profunda y descontaminación automatizada.',
      icon: 'drop-2',
    },
    {
      badge: 'PASO 02',
      title: 'Empaque e Inspección',
      description: 'Verificación de funcionalidad y empaque estéril.',
      icon: 'box-tick',
    },
    {
      badge: 'PASO 03',
      title: 'Esterilización OE',
      description: 'Proceso a óxido de etileno al 100 %.',
      icon: 'shield-check',
    },
  ],
};

export const aboutContent = {
  title: 'Líderes en Bioseguridad en Perú',
  description:
    'XTERIEKIT nace con la misión de elevar los estándares de esterilización en Lima. Somos un aliado estratégico para instituciones de salud que buscan externalizar su central de esterilización con total confianza y cumplimiento normativo.',
  description2:
    'Nuestro centro de operaciones en Lima cuenta con infraestructura diseñada específicamente para flujos unidireccionales, evitando la contaminación cruzada y asegurando la máxima pureza en cada instrumento.',
  checklist: [
    'Personal Técnico Certificado',
    'Normativa MINSA / DIGEMID',
    'Atención 24/7 Emergencias',
    'Certificaciones de Calibración',
  ],
  image: '/images/limpiando2.avif',
  statCard: {
    title: '+10k',
    subtitle: 'Ciclos / año',
    description:
      'Procesamos miles de cajas quirúrgicas anualmente con cero incidencias de infección reportadas.',
  },
};

export const contactContent = {
  title: 'Contáctanos',
  description:
    '¿Necesitas servicios de esterilización? Completa el formulario y nuestro equipo técnico se pondrá en contacto contigo para brindarte una solución a medida.',
  formTitle: 'Formulario de Solicitud',
  sections: [
    {
      title: 'Datos de la Institución',
      fields: [
        { 
          label: 'Nombre de la Clínica / Hospital', 
          name: 'institutionName', 
          type: 'text',
          placeholder: 'Ej. Clínica San Pablo',
          helperText: 'Ingrese el nombre de la institución que requiere el servicio'
        },
        { 
          label: 'RUC', 
          name: 'ruc', 
          type: 'text',
          placeholder: 'Ej. 20123456789',
          helperText: 'Número de RUC de la empresa (11 dígitos)'
        },
        { 
          label: 'Dirección Fiscal', 
          name: 'address', 
          type: 'text',
          placeholder: 'Ej. Av. Principal 123, Distrito, Lima',
          helperText: 'Dirección completa para facturación'
        },
      ],
    },
    {
      title: 'Datos del Solicitante',
      fields: [
        { 
          label: 'Nombre Completo', 
          name: 'fullName', 
          type: 'text',
          placeholder: 'Ej. Dr. Juan Pérez',
          helperText: 'Persona de contacto encargada'
        },
        { 
          label: 'Cargo / Puesto', 
          name: 'role', 
          type: 'text',
          placeholder: 'Ej. Jefe de Logística',
          helperText: 'Cargo que ocupa en la institución'
        },
        { 
          label: 'Teléfono / Celular', 
          name: 'phone', 
          type: 'tel',
          placeholder: 'Ej. +51 999 999 999',
          helperText: 'Número de contacto directo'
        },
        { 
          label: 'Correo Electrónico', 
          name: 'email', 
          type: 'email',
          placeholder: 'Ej. juan.perez@clinica.pe',
          helperText: 'Correo corporativo preferentemente'
        },
      ],
    },
  ],
  detailField: {
    label: 'Detalle del Requerimiento',
    name: 'requirement',
    placeholder: 'Describa brevemente los servicios que necesita...',
    helperText: 'Incluya cantidad aproximada de instrumental, frecuencia y tiempos deseados.',
  },
};

export const footerContent = {
  description:
    'Expertos en esterilización de material médico-quirúrgico. Comprometidos con la seguridad del paciente y la eficiencia operativa de las instituciones de salud en Perú.',
  quickLinks: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios de Esterilización', href: '#servicios' },
    { label: 'Proceso de Calidad', href: '#proceso' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Política de Calidad', href: '#contacto' },
  ],
  contact: {
    address: 'Av. Sta. Catalina 273, Lima - Perú',
    phones: ['+51 1 555-0123', '+51 999 888 777'],
    email: 'contacto@xteriekit.pe',
  },
  social: [
    { name: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
    { name: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
  ],
  mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.03450949185!2d-77.0182!3d-12.083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA0JzU4LjgiUyA3N8KwMDEnMDUuNSJX!5e0!3m2!1ses!2spe!4v1634567890123!5m2!1ses!2spe',
};

export const whatsappConfig = {
  phone: '+51987654321',
  message: 'Hola, necesito más información sobre sus servicios de esterilización.',
};
