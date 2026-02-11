export const clinic = {
  // === IDENTIDAD ===
  name: "Wonder Fisioterapia",
  tagline: "Fisioterapia Especializada en Guadalajara",
  description: "Wonder Fisioterapia es una clínica de fisioterapia especializada en Guadalajara dirigida por Patricia García Gallego. Expertos en suelo pélvico, embarazo y posparto, fisioterapia traumatológica, secuelas de cáncer de mama, pilates terapéutico y gimnasia abdominal hipopresiva.",

  // === PALETA (Turquesa / Healing) ===
  colors: {
    primary: "#20B2AA",      // Turquesa marca Wonder
    secondary: "#1A1A2E",    // Negro azulado profundo
    accent: "#5DCFC6",       // Turquesa claro
    neutral: "#F0FAF8",      // Menta suave
  },

  // === CONTACTO ===
  phone: "638 91 86 86",
  whatsapp: "+34638918686",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros servicios de fisioterapia.",
  email: "",

  // === UBICACIÓN ===
  address: {
    street: "C. Alemania, 11, local 9",
    city: "Guadalajara",
    province: "Guadalajara",
    postalCode: "19005",
    country: "España",
  },
  googleMapsUrl: "https://maps.google.com/?q=Wonder+Fisioterapia+C.+Alemania+11+Guadalajara",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.5!2d-3.166!3d40.632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sC.+Alemania%2C+11%2C+19005+Guadalajara!5e0!3m2!1ses!2ses!4v1",
  coordinates: { lat: 40.632, lng: -3.166 },

  // === HORARIOS ===
  schedule: [
    { days: "Lunes - Jueves", hours: "9:30 - 14:00 / 17:00 - 21:30" },
    { days: "Viernes", hours: "9:00 - 14:00 / 17:00 - 20:00" },
    { days: "Sábado - Domingo", hours: "Cerrado" },
  ],

  // === REDES SOCIALES ===
  social: {
    instagram: "https://www.instagram.com/wonderfisioterapia/",
    facebook: null as string | null,
    linkedin: null as string | null,
    tiktok: null as string | null,
  },

  // === RESEÑAS GOOGLE ===
  reviews: {
    rating: 5.0,
    count: 5021,
    url: "#",
    featured: [
      {
        author: "Anita Muñoz",
        rating: 5,
        text: "Patricia es una gran profesional y mejor persona. Da gusto que te trate siempre con una sonrisa. Trata con mucho mimo y con una escucha amable que te hace sentir muy cómoda.",
        date: "hace 2 meses",
      },
      {
        author: "María Jesús Conde",
        rating: 5,
        text: "Soy paciente oncológica de mama y gracias a la fisioterapia oncológica de Proyecto Yunquera conocí a Patri, la mejor fisio que he conocido. Profesional, cercana y con una dedicación increíble.",
        date: "hace 3 meses",
      },
      {
        author: "Rebeca Sánchez",
        rating: 5,
        text: "Sencillamente excepcional. Si hubiesen 10 estrellas se las daría. Acudí recomendada para suelo pélvico por mi fisio habitual y salí encantada. El trato y los resultados son inmejorables.",
        date: "hace 4 meses",
      },
      {
        author: "Ana",
        rating: 5,
        text: "Llevo dos meses en pilates y estoy contentísima. Patricia es una persona maravillosa, que hace las clases muy cercanas, activas y adaptadas a las dolencias de cada persona. Lo recomiendo sin lugar a dudas.",
        date: "hace 3 meses",
      },
      {
        author: "M L.E.",
        rating: 5,
        text: "Increíble la mejoría. Fui recomendado por un amigo y el avance en mi lesión en el sóleo ha sido espectacular. Muy buen trato y dedicación y sobre todo es una gran profesional que consigue resultados y acortar los plazos de recuperación.",
        date: "hace 2 meses",
      },
    ],
  },

  // === SERVICIOS ===
  services: [
    {
      id: "suelo-pelvico",
      name: "Fisioterapia de Suelo Pélvico",
      description: "Tratamiento especializado para disfunciones del suelo pélvico: incontinencia, prolapsos, dolor pélvico y preparación al parto. Valoración personalizada y plan de tratamiento adaptado.",
      benefits: ["Recupera el control", "Sin cirugía", "Resultados duraderos"],
      icon: "ShieldCheck",
    },
    {
      id: "embarazo-posparto",
      name: "Embarazo y Posparto",
      description: "Acompañamiento fisioterapéutico durante el embarazo y la recuperación posparto. Preparación física al parto, recuperación abdominal y reeducación postural.",
      benefits: ["Embarazo activo", "Recuperación segura", "Cuidado integral"],
      icon: "Heart",
    },
    {
      id: "traumatologica",
      name: "Fisioterapia Traumatológica",
      description: "Rehabilitación de lesiones musculoesqueléticas, fracturas, esguinces, tendinopatías y recuperación postquirúrgica. Terapia manual y ejercicio terapéutico.",
      benefits: ["Recuperación rápida", "Terapia manual", "Vuelta a la actividad"],
      icon: "Activity",
    },
    {
      id: "oncologica",
      name: "Secuelas Cáncer de Mama",
      description: "Fisioterapia oncológica especializada en el tratamiento de secuelas del cáncer de mama: linfedema, cicatrices, movilidad del hombro y recuperación funcional.",
      benefits: ["Tratamiento del linfedema", "Mejora movilidad", "Acompañamiento cercano"],
      icon: "Ribbon",
    },
    {
      id: "pilates",
      name: "Pilates Terapéutico",
      description: "Clases de pilates dirigidas por fisioterapeuta. Ejercicio terapéutico adaptado a cada persona, ideal para rehabilitación, prevención y bienestar general.",
      benefits: ["Grupos reducidos", "Adaptado a ti", "Mejora postural"],
      icon: "Dumbbell",
    },
    {
      id: "hipopresivos",
      name: "Gimnasia Abdominal Hipopresiva",
      description: "Técnica de ejercicios hipopresivos para fortalecer la faja abdominal y el suelo pélvico. Ideal para posparto, prevención de prolapsos y mejora postural.",
      benefits: ["Abdomen firme", "Protege suelo pélvico", "Mejora postural"],
      icon: "Wind",
    },
  ],

  // === PROCESO ===
  process: [
    {
      step: 1,
      title: "Contacta",
      description: "Llámanos o escríbenos por WhatsApp para reservar tu primera cita",
    },
    {
      step: 2,
      title: "Valoración",
      description: "Realizamos una valoración completa para entender tu caso y establecer objetivos",
    },
    {
      step: 3,
      title: "Tratamiento",
      description: "Plan de tratamiento personalizado con terapia manual, ejercicio terapéutico y seguimiento",
    },
    {
      step: 4,
      title: "Resultados",
      description: "Recupera tu bienestar y calidad de vida con un seguimiento continuo",
    },
  ],

  // === POR QUÉ ELEGIRNOS ===
  whyUs: [
    {
      title: "Más de 5.000 Reseñas",
      description: "5.021 pacientes satisfechos nos avalan con la máxima puntuación en Google. Resultados que hablan por sí solos",
      icon: "Star",
    },
    {
      title: "Especialización Real",
      description: "Formación continua y especialización en suelo pélvico, embarazo, oncología mamaria y traumatología",
      icon: "Award",
    },
    {
      title: "Trato Cercano y Personalizado",
      description: "Cada paciente recibe un plan de tratamiento único, con dedicación y escucha activa en cada sesión",
      icon: "UserCheck",
    },
    {
      title: "Fisioterapia Basada en Evidencia",
      description: "Tratamientos respaldados por la evidencia científica más actual, combinando terapia manual y ejercicio terapéutico",
      icon: "BookOpen",
    },
  ],

  // === EQUIPO ===
  team: [
    {
      name: "Patricia García Gallego",
      role: "Fisioterapeuta Especializada",
      image: "/images/team/patricia.webp",
      bio: "Fisioterapeuta colegiada con amplia experiencia y formación especializada en suelo pélvico, embarazo y posparto, fisioterapia oncológica mamaria y traumatológica. Apasionada por ayudar a sus pacientes a recuperar su bienestar y calidad de vida con un trato cercano y profesional.",
    },
  ],

  // === GALERÍA ===
  gallery: [
    { src: "/images/gallery/clinica-fuera.webp", alt: "Fachada de Wonder Fisioterapia en Guadalajara" },
  ],

  // === FAQ ===
  faq: [
    {
      question: "¿Qué es la fisioterapia de suelo pélvico?",
      answer: "Es una especialidad de la fisioterapia que trata las disfunciones del suelo pélvico como incontinencia urinaria, prolapsos, dolor pélvico o disfunciones sexuales. Mediante valoración interna y externa, terapia manual y ejercicio terapéutico, trabajamos para recuperar la función y mejorar tu calidad de vida.",
    },
    {
      question: "¿Cuándo debo acudir al fisioterapeuta durante el embarazo?",
      answer: "Lo ideal es acudir desde el primer trimestre para preparar tu cuerpo, prevenir molestias y aprender ejercicios adaptados. En el tercer trimestre trabajamos la preparación al parto. También es fundamental la valoración posparto a partir de las 6-8 semanas tras el parto.",
    },
    {
      question: "¿Qué incluyen las clases de pilates terapéutico?",
      answer: "Las clases son en grupos reducidos y dirigidas por Patricia como fisioterapeuta. Se adaptan los ejercicios a las necesidades y dolencias de cada persona. Trabajamos fuerza, flexibilidad, control postural y conciencia corporal de forma segura y efectiva.",
    },
    {
      question: "¿En qué consiste la fisioterapia oncológica mamaria?",
      answer: "Tratamos las secuelas del cáncer de mama y sus tratamientos: linfedema, cicatrices, restricción de movilidad del hombro, dolor y alteraciones posturales. El objetivo es mejorar tu funcionalidad y calidad de vida durante y después del proceso oncológico.",
    },
    {
      question: "¿Qué es la gimnasia abdominal hipopresiva?",
      answer: "Son ejercicios posturales y respiratorios que reducen la presión intraabdominal, fortaleciendo la faja abdominal y el suelo pélvico sin dañarlos. Especialmente indicados en el posparto, prevención de prolapsos y mejora postural.",
    },
    {
      question: "¿Cuántas sesiones de fisioterapia voy a necesitar?",
      answer: "Depende de tu caso particular. En la primera valoración evaluamos tu situación, establecemos objetivos y te damos una estimación del plan de tratamiento. Cada persona es diferente y los tiempos de recuperación varían según la patología.",
    },
    {
      question: "¿Necesito prescripción médica para ir al fisioterapeuta?",
      answer: "No, puedes acudir directamente sin necesidad de prescripción médica. El fisioterapeuta es un profesional sanitario capacitado para valorar, diagnosticar y tratar de forma autónoma.",
    },
    {
      question: "¿Cómo puedo pedir cita?",
      answer: "Puedes contactarnos por teléfono o WhatsApp al 638 91 86 86. Te atenderemos y buscaremos el horario que mejor se adapte a ti. También puedes escribirnos por Instagram.",
    },
  ],

  // === SEO ===
  seo: {
    titleTemplate: "%s | Wonder Fisioterapia - Guadalajara",
    defaultTitle: "Wonder Fisioterapia | Patricia García Gallego - Fisioterapia en Guadalajara",
    defaultDescription: "Clínica de fisioterapia especializada en Guadalajara. Suelo pélvico, embarazo y posparto, traumatológica, secuelas cáncer de mama, pilates y ejercicio terapéutico. 5.021 reseñas. Cita: 638 91 86 86.",
    keywords: [
      "fisioterapia Guadalajara",
      "fisioterapeuta Guadalajara",
      "suelo pélvico Guadalajara",
      "fisioterapia embarazo Guadalajara",
      "fisioterapia posparto",
      "fisioterapia traumatológica Guadalajara",
      "fisioterapia oncológica mama",
      "pilates terapéutico Guadalajara",
      "gimnasia hipopresiva Guadalajara",
      "Patricia García Gallego",
      "Wonder Fisioterapia",
      "fisioterapia especializada",
    ],
    ogImage: "/og-image.jpg",
  },

  // === LEGAL ===
  legal: {
    companyName: "Wonder Fisioterapia - Patricia García Gallego",
    cif: "",
    registeredAddress: "C. Alemania, 11, local 9, 19005 Guadalajara",
  },
}

export type Clinic = typeof clinic
