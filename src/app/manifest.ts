import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ramiro Bogado | Backend Developer",
    short_name: "RB.",
    description:
      "Backend Developer specialized in Java and Spring Boot. REST APIs, AI agents, and scalable applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
