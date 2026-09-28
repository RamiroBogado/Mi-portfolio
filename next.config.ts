import type { NextConfig } from "next";

const CANONICAL_HOST = "ramirobogado-portfolio.vercel.app";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Host-scoped 308s only: legacy hosts move to the canonical domain,
    // Vercel preview deployments are untouched (no host match, no redirect).
    const legacyHosts = ["mi-portfolio-nu-gold.vercel.app", "ramirobogado.dev"];
    return legacyHosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: host }],
      destination: `https://${CANONICAL_HOST}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
