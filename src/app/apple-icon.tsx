import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#050816",
          borderRadius: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Geist", "Inter", system-ui, sans-serif',
          fontWeight: 700,
          fontSize: 72,
          color: "#F9FAFB",
          letterSpacing: "-3px",
        }}
      >
        RB
        <span style={{ color: "#2563EB" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
