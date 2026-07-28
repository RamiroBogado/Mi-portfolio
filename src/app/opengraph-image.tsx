import { ImageResponse } from "next/og";

export const alt = "Ramiro Bogado - Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        background: "linear-gradient(135deg, #050816 0%, #111827 50%, #1E293B 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Geist", "Inter", system-ui, sans-serif',
        padding: 60,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 120,
          fontWeight: 700,
          color: "#F9FAFB",
          letterSpacing: "-4px",
          marginBottom: 20,
        }}
      >
        RB
        <span style={{ color: "#2563EB" }}>.</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "#94A3B8",
          textAlign: "center",
          lineHeight: 1.5,
          maxWidth: 600,
        }}
      >
        Backend Developer — Java, Spring Boot & AI Agents
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 36,
          padding: "14px 28px",
          borderRadius: 12,
          background: "rgba(37, 99, 235, 0.15)",
          border: "1px solid rgba(37, 99, 235, 0.3)",
          fontSize: 20,
          color: "#60A5FA",
        }}
      >
        ramirobogado.dev
      </div>
    </div>,
    { ...size }
  );
}
