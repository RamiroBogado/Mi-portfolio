import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/common/theme-provider";
import { siteConfig } from "@/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
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
    url: siteConfig.url,
    siteName: "Ramiro Bogado",
    title: "Ramiro Bogado | Backend Developer",
    description:
      "Backend Developer specialized in Java and Spring Boot. Building scalable applications and exploring AI agents.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramiro Bogado | Backend Developer",
    description:
      "Backend Developer specialized in Java and Spring Boot. REST APIs, client-server architecture, and AI agents with MCP, LangGraph, and RAG.",
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
  url: siteConfig.url,
  jobTitle: "Backend Developer",
  description:
    "Backend Developer specialized in Java and Spring Boot. REST APIs, client-server architecture, and AI agents with MCP, LangGraph, and RAG.",
  sameAs: ["https://github.com/RamiroBogado", "https://www.linkedin.com/in/ramirobogado/"],
  knowsAbout: ["Java", "Spring Boot", "Artificial Intelligence", "Software Engineering"],
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
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background min-h-screen font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
