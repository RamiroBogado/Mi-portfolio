import type {
  NavLink,
  Badge,
  TimelineItem,
  Technology,
  Project,
  Experience,
  Education,
  Locale,
} from "@/types";

export const siteConfig = {
  name: "Ramiro Enzo Bogado León",
  title: "Backend Developer Junior | Java · Spring Boot · React | AI Agents · MCP · RAG · SDD",
  shortTitle: "Backend Developer Junior — Java, Spring Boot, React & AI Agents",
  description:
    "Junior Backend Developer specialized in Java and Spring Boot, with applied AI (MCP, RAG, SDD). Builder of FinanzasAppSDD, a multi-user personal finance platform with an intelligent assistant. Certified in Building with the Claude API + MCP (Anthropic). 4th-year Information Systems student at UNLa with a GPA of 8.20/10.",
  shortDescription:
    "Junior Backend Developer (Java/Spring Boot) building REST APIs and AI-powered apps — including FinanzasAppSDD, a multi-user finance manager with an intelligent assistant.",
  url: "https://ramirobogado-portfolio.vercel.app",
  email: "ramiro99bogado@gmail.com",
  github: "https://github.com/RamiroBogado",
  linkedin: "https://www.linkedin.com/in/ramirobogado/",
  whatsapp: "https://wa.me/5491139003592",
  cvUrl: "/cv.pdf",
};

export const navLinks: Record<Locale, NavLink[]> = {
  en: [
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  es: [
    { label: "Sobre mí", href: "#about" },
    { label: "Tecnologías", href: "#tech-stack" },
    { label: "Proyectos", href: "#projects" },
    { label: "Experiencia", href: "#experience" },
    { label: "Educación", href: "#education" },
    { label: "Contacto", href: "#contact" },
  ],
};

export const heroBadges: Badge[] = [
  { label: "Java" },
  { label: "Spring Boot" },
  { label: "AI Agents" },
  { label: "MCP" },
  { label: "RAG" },
  { label: "SDD" },
];

export const aboutTimeline: Record<Locale, TimelineItem[]> = {
  en: [
    {
      title: "Bachelor's in Information Systems",
      subtitle: "Universidad Nacional de Lanús",
      description:
        "4th year (70% completed) with a GPA of 8.20/10 and the Programmer Analyst intermediate degree in progress. Advanced studies in distributed systems, databases, and software architecture.",
    },
    {
      title: "Postgraduate Diploma in Software Development & AI Agents",
      subtitle: "Universidad Nacional de Lanús",
      description:
        "Jun 2026 – Sep 2026. AI agent architecture: Model Context Protocol (MCP), LangGraph, Retrieval-Augmented Generation (RAG), AI-Ops, Context Engineering, and vector databases (ChromaDB, Pinecone), built with spec-driven development (SDD).",
    },
    {
      title: "Computer & Console Repair Technician",
      subtitle: "Self-employed",
      description:
        "10+ years of experience servicing ~260 devices per year with an 80% first-time fix rate: 100+ full builds, 50+ networks configured, and 520+ support cases resolved across PCs and PlayStation consoles.",
    },
  ],
  es: [
    {
      title: "Licenciatura en Sistemas de Información",
      subtitle: "Universidad Nacional de Lanús",
      description:
        "4.º año (70 % completado) con promedio de 8.20/10 y título intermedio de Analista Programador en curso. Estudios avanzados en sistemas distribuidos, bases de datos y arquitectura de software.",
    },
    {
      title: "Diplomado de Posgrado en Desarrollo de Software y Agentes de IA",
      subtitle: "Universidad Nacional de Lanús",
      description:
        "jun. 2026 – sep. 2026. Arquitectura de agentes de IA: Model Context Protocol (MCP), LangGraph, generación aumentada por recuperación (RAG), AI-Ops, ingeniería de contexto y bases de datos vectoriales (ChromaDB, Pinecone), con desarrollo guiado por especificaciones (SDD).",
    },
    {
      title: "Técnico en Reparación de Computadoras y Consolas",
      subtitle: "Trabajo independiente",
      description:
        "Más de 10 años de experiencia con un promedio de 260 equipos por año y una tasa de resolución del 80 % en la primera intervención: más de 100 equipos ensamblados, más de 50 redes configuradas y más de 520 casos de soporte resueltos en PC y consolas PlayStation.",
    },
  ],
};

export const technologies: Technology[] = [
  { name: "Java", category: "Backend", level: "Advanced", iconName: "Coffee" },
  { name: "Spring Boot", category: "Backend", level: "Advanced", iconName: "Leaf" },
  { name: "Spring MVC", category: "Backend", level: "Advanced", iconName: "Leaf" },
  { name: "Spring Security", category: "Backend", level: "Intermediate", iconName: "Shield" },
  { name: "Hibernate / JPA", category: "Backend", level: "Intermediate", iconName: "Database" },
  { name: "REST APIs", category: "Backend", level: "Advanced", iconName: "Globe" },
  { name: "JWT", category: "Backend", level: "Intermediate", iconName: "Key" },
  { name: "Maven", category: "Backend", level: "Advanced", iconName: "Package" },
  { name: "Node.js", category: "Backend", level: "Intermediate", iconName: "Server" },
  { name: "Express.js", category: "Backend", level: "Intermediate", iconName: "Zap" },
  { name: "FastAPI", category: "Backend", level: "Intermediate", iconName: "Zap" },
  { name: "React", category: "Frontend", level: "Advanced", iconName: "Atom" },
  { name: "Next.js", category: "Frontend", level: "Advanced", iconName: "FileJson" },
  { name: "TypeScript", category: "Frontend", level: "Intermediate", iconName: "FileCode" },
  { name: "JavaScript", category: "Frontend", level: "Advanced", iconName: "Braces" },
  { name: "HTML5", category: "Frontend", level: "Intermediate", iconName: "Code" },
  { name: "CSS3", category: "Frontend", level: "Intermediate", iconName: "Palette" },
  { name: "Tailwind CSS", category: "Frontend", level: "Intermediate", iconName: "Palette" },
  { name: "Bootstrap", category: "Frontend", level: "Intermediate", iconName: "Columns2" },
  { name: "Thymeleaf", category: "Frontend", level: "Intermediate", iconName: "FileCode" },
  { name: "Kotlin / Android", category: "Frontend", level: "Intermediate", iconName: "Code" },
  { name: "Vite", category: "Frontend", level: "Intermediate", iconName: "Zap" },
  { name: "Recharts", category: "Frontend", level: "Intermediate", iconName: "FileSpreadsheet" },
  { name: "shadcn/ui", category: "Frontend", level: "Learning", iconName: "Palette" },
  { name: "MySQL", category: "Database", level: "Advanced", iconName: "Database" },
  { name: "SQL", category: "Database", level: "Advanced", iconName: "FileSpreadsheet" },
  { name: "MongoDB", category: "Database", level: "Intermediate", iconName: "Database" },
  { name: "ChromaDB", category: "Database", level: "Intermediate", iconName: "Database" },
  { name: "Pinecone", category: "Database", level: "Intermediate", iconName: "Database" },
  { name: "SQLite", category: "Database", level: "Advanced", iconName: "Database" },
  { name: "MCP Protocol", category: "AI", level: "Advanced", iconName: "Plug" },
  { name: "LangGraph", category: "AI", level: "Intermediate", iconName: "GitBranch" },
  { name: "RAG Systems", category: "AI", level: "Intermediate", iconName: "BookOpen" },
  { name: "LLMs", category: "AI", level: "Advanced", iconName: "Sparkles" },
  { name: "Ollama", category: "AI", level: "Intermediate", iconName: "Cpu" },
  { name: "AI-Ops", category: "AI", level: "Intermediate", iconName: "Cpu" },
  { name: "Context Engineering", category: "AI", level: "Advanced", iconName: "Puzzle" },
  { name: "Docker", category: "DevOps", level: "Intermediate", iconName: "Box" },
  { name: "CI/CD", category: "DevOps", level: "Intermediate", iconName: "RefreshCw" },
  { name: "Linux", category: "DevOps", level: "Advanced", iconName: "Terminal" },
  { name: "Bash", category: "DevOps", level: "Intermediate", iconName: "Terminal" },
  { name: "Vercel", category: "DevOps", level: "Intermediate", iconName: "Globe" },
  { name: "Git", category: "Tools", level: "Advanced", iconName: "GitBranch" },
  { name: "GitHub", category: "Tools", level: "Advanced", iconName: "GitFork" },
  { name: "Postman", category: "Tools", level: "Advanced", iconName: "Send" },
  { name: "SDD", category: "Tools", level: "Intermediate", iconName: "ListChecks" },
  { name: "TDD", category: "Tools", level: "Intermediate", iconName: "FlaskConical" },
  { name: "Scrum / Kanban", category: "Tools", level: "Intermediate", iconName: "Kanban" },
];

export const featuredProjects: Record<Locale, Project[]> = {
  en: [
    {
      id: "finanzasapp-sdd",
      title: "FinanzasAppSDD",
      description:
        "Multi-user finance tracker that centralizes budgets, savings goals and alerts with an AI assistant for natural-language queries. Built with SDD: JWT-secured Express API plus React dashboard, MCP tools and RAG advisor (FastAPI, Ollama, ChromaDB). Live demo with real data — Dockerized, 220 automated tests, JWT auth and SQLite persistence.",
      image: "/projects/finanzasapp.svg",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "FastAPI",
        "Ollama",
        "ChromaDB",
        "RAG",
        "MCP",
        "Docker",
        "SDD",
      ],
      githubUrl: "https://github.com/RamiroBogado/FinanzasAppSDD",
      repo: "RamiroBogado/FinanzasAppSDD",
      liveUrl: "https://finanzas-app-sdd.vercel.app/",
      featured: true,
    },
    {
      id: "chat-analytics",
      title: "ChatAnalyticsPlatform",
      description:
        "Web application for processing exported WhatsApp conversations and generating interactive statistics on participant activity. Built with a client-server architecture: Spring Boot backend and React/Next.js frontend for metrics visualization.",
      image: "/projects/chat-analytics.svg",
      technologies: ["Java", "Spring Boot", "React", "Next.js", "TypeScript", "MySQL"],
      githubUrl: "https://github.com/RamiroBogado/ChatAnalyticsPlatform",
      repo: "RamiroBogado/ChatAnalyticsPlatform",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "app-futbol",
      title: "AppFutbol",
      description:
        "Team-built Android application in Kotlin with a modern UI, external REST API consumption on background threads, local database persistence with user login and registration, 'remember me' via Shared Preferences, and Fragments-based navigation.",
      image: "/projects/app-futbol.svg",
      technologies: ["Kotlin", "Android", "REST APIs", "SQLite", "Shared Preferences"],
      githubUrl: "https://github.com/RamiroBogado/AppFutbol",
      repo: "RamiroBogado/AppFutbol",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "appointment-system",
      title: "Appointment Management System",
      description:
        "Web application for appointment management, handling users, specialties, and assignments through a layered architecture built on Spring Boot with Spring Data JPA and Hibernate.",
      image: "/projects/appointment-system.svg",
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "Thymeleaf"],
      githubUrl: "https://github.com/RamiroBogado/AppSpringBootTurnosG16",
      repo: "RamiroBogado/AppSpringBootTurnosG16",
      liveUrl: "#",
      featured: true,
    },
  ],
  es: [
    {
      id: "finanzasapp-sdd",
      title: "FinanzasAppSDD",
      description:
        "Gestor de finanzas multiusuario que centraliza presupuestos, metas de ahorro y alertas con un asistente de IA para consultas en lenguaje natural. Construido con SDD: API en Express protegida con JWT, panel en React, herramientas MCP y asesor RAG (FastAPI, Ollama, ChromaDB). Demo en vivo con datos reales: contenerizado con Docker, 220 pruebas automatizadas, autenticación JWT y persistencia en SQLite.",
      image: "/projects/finanzasapp.svg",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "FastAPI",
        "Ollama",
        "ChromaDB",
        "RAG",
        "MCP",
        "Docker",
        "SDD",
      ],
      githubUrl: "https://github.com/RamiroBogado/FinanzasAppSDD",
      repo: "RamiroBogado/FinanzasAppSDD",
      liveUrl: "https://finanzas-app-sdd.vercel.app/",
      featured: true,
    },
    {
      id: "chat-analytics",
      title: "ChatAnalyticsPlatform",
      description:
        "Aplicación web para procesar conversaciones exportadas de WhatsApp y generar estadísticas interactivas sobre la actividad de los participantes. Construida con arquitectura cliente-servidor: backend en Spring Boot y frontend en React/Next.js para la visualización de métricas.",
      image: "/projects/chat-analytics.svg",
      technologies: ["Java", "Spring Boot", "React", "Next.js", "TypeScript", "MySQL"],
      githubUrl: "https://github.com/RamiroBogado/ChatAnalyticsPlatform",
      repo: "RamiroBogado/ChatAnalyticsPlatform",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "app-futbol",
      title: "AppFutbol",
      description:
        "Aplicación Android en Kotlin desarrollada en equipo, con interfaz moderna, consumo de API REST externa en hilos secundarios, persistencia local con inicio de sesión y registro de usuarios, opción «recordarme» con Shared Preferences y navegación basada en Fragments.",
      image: "/projects/app-futbol.svg",
      technologies: ["Kotlin", "Android", "REST APIs", "SQLite", "Shared Preferences"],
      githubUrl: "https://github.com/RamiroBogado/AppFutbol",
      repo: "RamiroBogado/AppFutbol",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "appointment-system",
      title: "Appointment Management System",
      description:
        "Aplicación web para la gestión de turnos, con administración de usuarios, especialidades y asignaciones mediante una arquitectura en capas construida con Spring Boot, Spring Data JPA e Hibernate.",
      image: "/projects/appointment-system.svg",
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "Thymeleaf"],
      githubUrl: "https://github.com/RamiroBogado/AppSpringBootTurnosG16",
      repo: "RamiroBogado/AppSpringBootTurnosG16",
      liveUrl: "#",
      featured: true,
    },
  ],
};

export const experiences: Record<Locale, Experience[]> = {
  en: [
    {
      role: "Operations Center Operator",
      company: "Municipal Operations Center (COM), Almirante Brown",
      period: "Jan 2023 - Present",
      description: [
        "Cut average incident response time by 60% through real-time monitoring of video surveillance and IT platforms across 5 systems",
        "Handle and prioritize ~45 incidents per shift under pressure, coordinating with security forces and emergency services",
        "Log and track every event with 100% traceability through digital tools",
        "Coordinate cross-functional teams via radio and communication systems",
      ],
    },
    {
      role: "Radio Operator",
      company: "Emergency Medical Care System (SAME), Almirante Brown",
      period: "Aug 2020 - Dec 2022",
      description: [
        "Coordinated ~500 emergency responses per month through dispatch and communication systems",
        "Triaged and prioritized ~15 requests per shift by criticality level, optimizing response times",
        "Took part in 10 coordinated multi-agency emergency operations alongside medical teams",
        "Maintained continuous communication with field units to keep operations running without interruption",
      ],
    },
    {
      role: "Computer & Console Repair Technician",
      company: "Self-employed",
      period: "2016 - Present",
      description: [
        "Service ~260 devices per year with an 80% first-time fix rate: desktops, laptops, and PlayStation consoles",
        "Completed 100+ full PC builds and upgrades: hardware installation, BIOS/UEFI setup, Windows/Linux deployment",
        "Configured 50+ local networks plus software installation and performance optimization",
        "Resolved 520+ support cases with quoting, customer service, and repair follow-up",
      ],
    },
  ],
  es: [
    {
      role: "Operador del Centro de Operaciones",
      company: "Centro de Operaciones Municipal (COM), Almirante Brown",
      period: "ene. 2023 - Actualidad",
      description: [
        "Reducción del tiempo promedio de respuesta ante incidentes en un 60 % mediante el monitoreo en tiempo real de videovigilancia y plataformas de TI en 5 sistemas",
        "Gestión y priorización de aproximadamente 45 incidentes por turno bajo presión, en coordinación con fuerzas de seguridad y servicios de emergencias",
        "Registro y seguimiento de cada evento con trazabilidad total mediante herramientas digitales",
        "Coordinación de equipos multifuncionales por radio y sistemas de comunicación",
      ],
    },
    {
      role: "Operador de Radio",
      company: "Sistema de Atención Médica de Emergencias (SAME), Almirante Brown",
      period: "ago. 2020 - dic. 2022",
      description: [
        "Coordinación de aproximadamente 500 respuestas a emergencias por mes mediante sistemas de despacho y comunicación",
        "Clasificación y priorización de alrededor de 15 solicitudes por turno según su nivel de criticidad, optimizando los tiempos de respuesta",
        "Participación en 10 operativos de emergencia multiagencia coordinados junto a equipos médicos",
        "Mantenimiento de la comunicación continua con las unidades en campo para garantizar la operación sin interrupciones",
      ],
    },
    {
      role: "Técnico en Reparación de Computadoras y Consolas",
      company: "Trabajo independiente",
      period: "2016 - Actualidad",
      description: [
        "Reparación de aproximadamente 260 equipos por año con una tasa de resolución del 80 % en la primera intervención: computadoras de escritorio, portátiles y consolas PlayStation",
        "Más de 100 equipos ensamblados y actualizados: instalación de hardware, configuración de BIOS/UEFI e instalación de Windows/Linux",
        "Configuración de más de 50 redes locales, además de instalación de software y optimización del rendimiento",
        "Resolución de más de 520 casos de soporte con presupuestos, atención al cliente y seguimiento de reparaciones",
      ],
    },
  ],
};

export const educationList: Record<Locale, Education[]> = {
  en: [
    {
      degree: "Licenciatura en Sistemas (Programmer Analyst in progress)",
      institution: "Universidad Nacional de Lanús",
      period: "2022 - Present",
      status: "4th Year · GPA 8.20/10 · 70%",
    },
    {
      degree: "Software Development & AI Agent Architecture Diploma",
      institution: "Universidad Nacional de Lanús",
      period: "Jun 2026 - Sep 2026",
      status: "Completed",
    },
    {
      degree: "Building with the Claude API + MCP",
      institution: "Anthropic Academy",
      period: "2026",
      status: "Certified",
    },
    {
      degree: "Electronics Technician",
      institution: "E.E.S.T. No. 5 '2 de Abril', Temperley",
      period: "2012 - 2019",
      status: "Completed",
    },
  ],
  es: [
    {
      degree: "Licenciatura en Sistemas (Analista Programador en curso)",
      institution: "Universidad Nacional de Lanús",
      period: "2022 - Actualidad",
      status: "4.º año · Promedio 8.20/10 · 70 %",
    },
    {
      degree: "Diplomado en Desarrollo de Software y Arquitectura de Agentes de IA",
      institution: "Universidad Nacional de Lanús",
      period: "jun. 2026 - sep. 2026",
      status: "Completado",
    },
    {
      degree: "Building with the Claude API + MCP",
      institution: "Anthropic Academy",
      period: "2026",
      status: "Certificado",
    },
    {
      degree: "Técnico en Electrónica",
      institution: "E.E.S.T. N.º 5 «2 de Abril», Temperley",
      period: "2012 - 2019",
      status: "Completado",
    },
  ],
};
