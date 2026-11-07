import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#161616",
        color: "#F5F5F5",
      }}
    >
      <div style={{ fontSize: 28, color: "#A8A29E", marginBottom: 24 }}>
        $ whoami
      </div>
      <div style={{ fontSize: 84, fontWeight: 700, marginBottom: 20 }}>
        {profile.name}
      </div>
      <div style={{ fontSize: 38, color: "#F7A440", marginBottom: 28 }}>
        {profile.title}
      </div>
      <div style={{ fontSize: 26, color: "#A8A29E" }}>
        DevSecOps · Cloud Security · Application Security
      </div>
    </div>,
    size
  );
}
