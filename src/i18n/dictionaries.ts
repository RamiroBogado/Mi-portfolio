import type { ExperienceLevel, Locale, TechCategory } from "@/types";

export const LANGUAGE_STORAGE_KEY = "portfolio-lang";

export interface Dictionary {
  nav: {
    openMenu: string;
    closeMenu: string;
    menuLabel: string;
  };
  theme: {
    toggleLabel: string;
    switchToLight: string;
    switchToDark: string;
  };
  language: {
    action: string;
  };
  hero: {
    eyebrow: string;
    description: string;
    viewProjects: string;
    downloadCv: string;
    scroll: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
  };
  techStack: {
    title: string;
    subtitle: string;
    categories: Record<TechCategory, string>;
    levels: Record<ExperienceLevel, string>;
  };
  projects: {
    title: string;
    subtitle: string;
    sourceCode: string;
    liveDemo: string;
    previewLabel: string;
  };
  experience: {
    title: string;
    subtitle: string;
  };
  education: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
  };
  footer: {
    tagline: string;
    rights: string;
    emailLabel: string;
    backToTopLabel: string;
  };
  backToTop: {
    label: string;
  };
}

const en: Dictionary = {
  nav: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuLabel: "Navigation menu",
  },
  theme: {
    toggleLabel: "Toggle theme",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
  },
  language: {
    action: "Switch language to Spanish",
  },
  hero: {
    eyebrow: "Backend Developer Junior | Java · Spring Boot · React | AI Agents · MCP · RAG · SDD",
    description:
      "Junior Backend Developer (Java/Spring Boot) building REST APIs and AI-powered apps — including FinanzasAppSDD, a multi-user finance manager with an intelligent assistant.",
    viewProjects: "View Projects",
    downloadCv: "Download CV",
    scroll: "Scroll",
  },
  about: {
    title: "About Me",
    subtitle: "Background",
    paragraph1:
      "Backend Developer specialized in Java and Spring Boot, with hands-on experience building REST APIs, designing database schemas, and implementing client-server architectures. Currently pursuing a Bachelor's in Information Systems (UNLA, 4th year) and a postgraduate diploma in AI Agent Architecture covering MCP, LangGraph, and RAG.",
    paragraph2:
      "I complement my software development skills with over 10 years of technical expertise from electronics repair, computer maintenance, and high-pressure operational roles in emergency response coordination — experience that sharpened my diagnostic thinking, quality standards, and ability to perform under pressure.",
  },
  techStack: {
    title: "Tech Stack",
    subtitle: "Technologies",
    categories: {
      Backend: "Backend",
      Frontend: "Frontend",
      Database: "Database",
      AI: "AI",
      DevOps: "DevOps",
      Tools: "Tools",
    },
    levels: {
      Advanced: "Advanced",
      Intermediate: "Intermediate",
      Learning: "Learning",
    },
  },
  projects: {
    title: "Featured Projects",
    subtitle: "Work",
    sourceCode: "Source Code",
    liveDemo: "Live Demo",
    previewLabel: "project preview",
  },
  experience: {
    title: "Experience",
    subtitle: "Career",
  },
  education: {
    title: "Education",
    subtitle: "Studies",
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Contact",
    description:
      "I am always open to new opportunities, collaborations, and interesting projects. Whether you have a question or just want to say hello, feel free to reach out.",
  },
  footer: {
    tagline: "Backend Developer. Java & Spring Boot. AI Agents.",
    rights: "All rights reserved.",
    emailLabel: "Email",
    backToTopLabel: "Back to top",
  },
  backToTop: {
    label: "Back to top",
  },
};

const es: Dictionary = {
  nav: {
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menuLabel: "Menú de navegación",
  },
  theme: {
    toggleLabel: "Cambiar tema",
    switchToLight: "Cambiar a modo claro",
    switchToDark: "Cambiar a modo oscuro",
  },
  language: {
    action: "Cambiar el idioma a inglés",
  },
  hero: {
    eyebrow:
      "Desarrollador Backend Junior | Java · Spring Boot · React | Agentes de IA · MCP · RAG · SDD",
    description:
      "Desarrollador Backend Junior (Java/Spring Boot) que crea APIs REST y aplicaciones con IA — incluyendo FinanzasAppSDD, un gestor de finanzas multiusuario con asistente inteligente.",
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
    scroll: "Desplázate",
  },
  about: {
    title: "Sobre mí",
    subtitle: "Trayectoria",
    paragraph1:
      "Desarrollador Backend especializado en Java y Spring Boot, con experiencia práctica en la creación de APIs REST, el diseño de esquemas de bases de datos y la implementación de arquitecturas cliente-servidor. Actualmente cursa la Licenciatura en Sistemas de Información (UNLa, 4.º año) y un diplomado de posgrado en Arquitectura de Agentes de IA que abarca MCP, LangGraph y RAG.",
    paragraph2:
      "Complemento mis habilidades de desarrollo de software con más de 10 años de experiencia técnica en reparación de electrónica, mantenimiento de computadoras y funciones operativas de alta exigencia en coordinación de emergencias, experiencia que fortaleció mi capacidad de diagnóstico, mis estándares de calidad y mi desempeño bajo presión.",
  },
  techStack: {
    title: "Stack Tecnológico",
    subtitle: "Tecnologías",
    categories: {
      Backend: "Backend",
      Frontend: "Frontend",
      Database: "Bases de datos",
      AI: "IA",
      DevOps: "DevOps",
      Tools: "Herramientas",
    },
    levels: {
      Advanced: "Avanzado",
      Intermediate: "Intermedio",
      Learning: "En aprendizaje",
    },
  },
  projects: {
    title: "Proyectos Destacados",
    subtitle: "Trabajo",
    sourceCode: "Código fuente",
    liveDemo: "Demo en vivo",
    previewLabel: "vista previa del proyecto",
  },
  experience: {
    title: "Experiencia",
    subtitle: "Trayectoria profesional",
  },
  education: {
    title: "Educación",
    subtitle: "Estudios",
  },
  contact: {
    title: "Hablemos",
    subtitle: "Contacto",
    description:
      "Siempre estoy abierto a nuevas oportunidades, colaboraciones y proyectos interesantes. Si tienes alguna pregunta o simplemente quieres saludar, no dudes en escribirme.",
  },
  footer: {
    tagline: "Desarrollador Backend. Java y Spring Boot. Agentes de IA.",
    rights: "Todos los derechos reservados.",
    emailLabel: "Correo electrónico",
    backToTopLabel: "Volver arriba",
  },
  backToTop: {
    label: "Volver arriba",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, es };
