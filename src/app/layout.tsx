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
  alternates: {
    canonical: siteConfig.url,
  },
  title: {
    default: "Ramiro Bogado | Junior Backend Developer - Java, Spring Boot, React & AI Agents",
    template: "%s | Ramiro Bogado",
  },
  description:
    "Junior Backend Developer specialized in Java and Spring Boot, with applied AI (MCP, RAG, SDD). Builder of FinanzasAppSDD, a multi-user finance platform with an intelligent assistant. Certified in Building with the Claude API + MCP (Anthropic).",
  keywords: [
    "Backend Developer",
    "Junior Developer",
    "Java",
    "Spring Boot",
    "React",
    "AI Agents",
    "MCP",
    "LangGraph",
    "RAG",
    "SDD",
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
    title: "Ramiro Bogado | Junior Backend Developer",
    description:
      "Junior Backend Developer specialized in Java and Spring Boot. Builder of FinanzasAppSDD, a multi-user finance platform with an intelligent assistant.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramiro Bogado | Junior Backend Developer",
    description:
      "Junior Backend Developer specialized in Java and Spring Boot. REST APIs, client-server architecture, and AI agents with MCP, RAG, and SDD.",
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
  jobTitle: "Junior Backend Developer",
  description:
    "Junior Backend Developer specialized in Java and Spring Boot. Builder of FinanzasAppSDD: REST APIs, client-server architecture, and AI agents with MCP, RAG, and SDD.",
  sameAs: ["https://github.com/RamiroBogado", "https://www.linkedin.com/in/ramirobogado/"],
  knowsAbout: ["Java", "Spring Boot", "React", "Artificial Intelligence", "Software Engineering"],
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
