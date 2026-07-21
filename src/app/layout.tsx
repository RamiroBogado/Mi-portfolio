import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ramirobogado.dev";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ramiro Bogado | Backend Developer - Java, Spring Boot & AI Agents",
    template: "%s | Ramiro Bogado",
  },
  description:
    "Backend Developer specialized in Java and Spring Boot. Hands-on experience with REST APIs, client-server architecture, and SQL/NoSQL databases. Pursuing a diploma in AI Agent Architecture with MCP, LangGraph, and RAG.",
  keywords: [
    "Backend Developer",
    "Java",
    "Spring Boot",
    "AI Agents",
    "MCP",
    "LangGraph",
    "RAG",
    "Software Engineer",
    "Argentina",
    "UNLA",
  ],
  authors: [{ name: "Ramiro Enzo Bogado León" }],
  creator: "Ramiro Enzo Bogado León",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ramiro Bogado",
    title: "Ramiro Bogado | Backend Developer",
    description:
      "Backend Developer specialized in Java and Spring Boot. Building scalable applications and exploring AI agents.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ramiro Bogado - Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramiro Bogado | Backend Developer",
    description:
      "Backend Developer specialized in Java and Spring Boot. REST APIs, client-server architecture, and AI agents with MCP, LangGraph, and RAG.",
    images: ["/og-image.png"],
    creator: "@ramirobogado",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ramiro Enzo Bogado León",
  url: siteUrl,
  jobTitle: "Backend Developer",
  description:
    "Backend Developer specialized in Java and Spring Boot. REST APIs, client-server architecture, and AI agents with MCP, LangGraph, and RAG.",
  sameAs: [
    "https://github.com/RamiroBogado",
    "https://www.linkedin.com/in/ramirobogado/",
  ],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Artificial Intelligence",
    "Software Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
