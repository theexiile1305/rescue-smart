import { ImageResponse } from "next/og";
import { siteName } from "@/content/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteName;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#0e3b3c",
        padding: "80px",
      }}
    >
      <div
        style={{
          width: 96,
          height: 10,
          backgroundColor: "#e2502a",
          marginBottom: 40,
        }}
      />
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          color: "#f4f5ef",
          lineHeight: 1.1,
        }}
      >
        Rescue Smart
      </div>
      <div
        style={{
          fontSize: 34,
          color: "#e7e2cf",
          marginTop: 24,
        }}
      >
        Erste-Hilfe-Ausbildung für Unternehmen &amp; Führerschein
      </div>
    </div>,
    { ...size },
  );
}
