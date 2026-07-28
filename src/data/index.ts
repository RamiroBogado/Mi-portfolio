import type {
  NavLink,
  Badge,
  TimelineItem,
  Technology,
  Project,
  Experience,
  Education,
} from "@/types";

export const siteConfig = {
  name: "Ramiro Enzo Bogado León",
  title: "Backend Developer | Java · Spring Boot | AI Agents · MCP · RAG",
  shortTitle: "Backend Developer — Java, Spring Boot & AI Agents",
  description:
    "Backend Developer in training, specialized in Java and Spring Boot, with hands-on experience designing and implementing REST APIs, client-server architecture, and SQL/NoSQL database modeling. Currently in the 4th year of my Bachelor's in Information Systems (UNLA), complemented by a postgraduate diploma in Software Development and AI Agent Architecture.",
  shortDescription:
    "Backend Developer specialized in Java and Spring Boot, with hands-on experience in REST APIs, database modeling, and AI Agent architecture.",
  url: "https://ramirobogado.dev",
  email: "ramiro99bogado@gmail.com",
  github: "https://github.com/RamiroBogado",
  linkedin: "https://www.linkedin.com/in/ramirobogado/",
  whatsapp: "https://wa.me/5491139003592",
  cvUrl: "/cv.pdf",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges: Badge[] = [
  { label: "Java" },
  { label: "Spring Boot" },
  { label: "AI Agents" },
  { label: "MCP" },
  { label: "RAG" },
];

export const aboutTimeline: TimelineItem[] = [
  {
    title: "Bachelor's in Information Systems",
    subtitle: "Universidad Nacional de Lanús",
    description:
      "Currently in the 4th year with a GPA of 8.20/10 and 70% program completion. Advanced studies in distributed systems, databases, and software architecture.",
  },
  {
    title: "Postgraduate Diploma in Software Development & AI Agents",
    subtitle: "Universidad Nacional de Lanús",
    description:
      "Specialized diploma covering AI agent architecture, Model Context Protocol (MCP), LangGraph, Retrieval-Augmented Generation (RAG), AI-Ops, Context Engineering, and vector databases (ChromaDB, Pinecone).",
  },
  {
    title: "Computer & Console Repair Technician",
    subtitle: "Self-employed",
    description:
      "Over 8 years of experience diagnosing, repairing, and maintaining desktop computers, laptops, and PlayStation consoles. Assembly, upgrading, OS setup, and network configuration.",
  },
];

export const technologies: Technology[] = [
  { name: "Java", category: "Backend", level: "Advanced", iconName: "Coffee" },
  { name: "Spring Boot", category: "Backend", level: "Advanced", iconName: "Leaf" },
  { name: "Spring MVC", category: "Backend", level: "Advanced", iconName: "Leaf" },
  { name: "Hibernate / JPA", category: "Backend", level: "Advanced", iconName: "Database" },
  { name: "REST APIs", category: "Backend", level: "Advanced", iconName: "Globe" },
  { name: "Maven", category: "Backend", level: "Advanced", iconName: "Package" },
  { name: "Node.js", category: "Backend", level: "Intermediate", iconName: "Server" },
  { name: "Express.js", category: "Backend", level: "Intermediate", iconName: "Zap" },
  { name: "React", category: "Frontend", level: "Intermediate", iconName: "Atom" },
  { name: "Next.js", category: "Frontend", level: "Intermediate", iconName: "FileJson" },
  { name: "TypeScript", category: "Frontend", level: "Intermediate", iconName: "FileCode" },
  { name: "JavaScript", category: "Frontend", level: "Intermediate", iconName: "Braces" },
  { name: "Tailwind CSS", category: "Frontend", level: "Intermediate", iconName: "Palette" },
  { name: "Bootstrap", category: "Frontend", level: "Intermediate", iconName: "Columns2" },
  { name: "MySQL", category: "Database", level: "Advanced", iconName: "Database" },
  { name: "SQL", category: "Database", level: "Advanced", iconName: "FileSpreadsheet" },
  { name: "MongoDB", category: "Database", level: "Intermediate", iconName: "Database" },
  { name: "MCP Protocol", category: "AI", level: "Intermediate", iconName: "Plug" },
  { name: "LangGraph", category: "AI", level: "Intermediate", iconName: "GitBranch" },
  { name: "RAG Systems", category: "AI", level: "Intermediate", iconName: "BookOpen" },
  { name: "AI-Ops", category: "AI", level: "Learning", iconName: "Cpu" },
  { name: "Context Engineering", category: "AI", level: "Learning", iconName: "Puzzle" },
  { name: "Docker", category: "DevOps", level: "Intermediate", iconName: "Box" },
  { name: "Git", category: "Tools", level: "Advanced", iconName: "GitBranch" },
  { name: "GitHub", category: "Tools", level: "Advanced", iconName: "GitFork" },
  { name: "Postman", category: "Tools", level: "Advanced", iconName: "Send" },
  { name: "Linux", category: "Tools", level: "Advanced", iconName: "Terminal" },
];

export const featuredProjects: Project[] = [
  {
    id: "chat-analytics",
    title: "ChatAnalyticsPlatform",
    description:
      "Web application for processing exported WhatsApp conversations and generating interactive statistics on participant activity. Built with a client-server architecture: Spring Boot backend and React/Next.js frontend for metrics visualization.",
    image: "/projects/chat-analytics.svg",
    technologies: ["Java", "Spring Boot", "React", "Next.js", "TypeScript", "MySQL"],
    githubUrl: "https://github.com/RamiroBogado/ChatAnalyticsPlatform",
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
    liveUrl: "#",
    featured: true,
  },
  {
    id: "game-distribution",
    title: "Digital Video Game Distribution Platform",
    description:
      "Steam-inspired web application simulating a digital game distribution platform: browsable catalog, detailed game info, simulated purchases, and a user library, all in a modern, responsive interface built with React and Vite.",
    image: "/projects/game-platform.svg",
    technologies: ["React", "Vite", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    githubUrl: "https://github.com/RamiroBogado/DemoSteam-UNLA-PS20261C-E05",
    liveUrl: "#",
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    role: "Computer & Console Repair Technician",
    company: "Self-employed ",
    period: "2016 - Present",
    description: [
      "Diagnosis, maintenance, and repair of desktop computers, laptops, and PlayStation consoles",
      "Assembly and upgrading of equipment: hardware installation, BIOS/UEFI configuration, and Windows/Linux OS setup",
      "Local network configuration, software installation, and performance optimization",
      "Customer service, quoting, and repair follow-up.",
    ],
  },
  {
    role: "Operator",
    company: "Municipal Operations Center (COM), Almirante Brown ",
    period: "2023 - Present",
    description: [
      "Real-time monitoring of video surveillance systems and IT platforms for incident management",
      "Logging and tracking of events, ensuring information traceability through digital tools",
      "Resolution and prioritization of operational incidents under pressure, optimizing response times",
      "Coordination with security forces, emergency services, and cross-functional teams via communication systems",
    ],
  },
  {
    role: "Radio Operator",
    company: "Emergency Medical Care System (SAME), Almirante Brown",
    period: "2020 - 2022",
    description: [
      "Operation of dispatch and communication systems to coordinate resources during emergencies",
      "Classification and prioritization of requests by criticality level, optimizing response times",
      "Continuous communication with medical teams and emergency organizations to coordinate operations",
    ],
  },
];

export const githubRepos = [
  "RamiroBogado/ChatAnalyticsPlatform",
  "RamiroBogado/AppSpringBootTurnosG16",
  "RamiroBogado/DemoSteam-UNLA-PS20261C-E05",
];

export const educationList: Education[] = [
  {
    degree: "Electronics Technician",
    institution: "E.E.S.T. No. 5 '2 de Abril', Temperley",
    period: "Graduated",
    status: "Completed",
  },
  {
    degree: "Analista Programador Universitario",
    institution: "Universidad Nacional de Lanús",
    period: "2023 - 2026",
    status: "Completed",
  },
  {
    degree: "Licenciatura en Sistemas",
    institution: "Universidad Nacional de Lanús",
    period: "2023 - Present",
    status: "4th Year GPA: 8.20/10  |  Program completion: 70%",
  },
  {
    degree: "AI Agents Diploma",
    institution: "Universidad Nacional de Lanús",
    period: "2026",
    status: "in progress",
  },
];
