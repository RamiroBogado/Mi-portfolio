import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#050816",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Geist", "Inter", system-ui, sans-serif',
          fontWeight: 700,
          fontSize: 14,
          color: "#F9FAFB",
          letterSpacing: "-0.5px",
        }}
      >
        RB
        <span style={{ color: "#2563EB" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
