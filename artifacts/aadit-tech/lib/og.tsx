import { ImageResponse } from "next/og"
import { SITE_NAME } from "./site"

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = "image/png"

/**
 * Shared Open Graph / Twitter card renderer. Uses the brand "command-center"
 * palette (deep navy + electric cyan) to match the site hero. No remote fonts
 * are fetched, keeping image generation fast and build-safe.
 */
export function renderOgImage({
  title,
  eyebrow,
}: {
  title: string
  eyebrow?: string
}) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0b1220 0%, #111c33 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* subtle top accent bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #38c9e6 0%, #3b6bef 100%)",
            }}
          />
          <div
            style={{
              color: "#e6edf7",
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {eyebrow ? (
            <div
              style={{
                color: "#38c9e6",
                fontSize: "26px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </div>
          ) : null}
          <div
            style={{
              color: "#ffffff",
              fontSize: title.length > 48 ? "58px" : "72px",
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: "980px",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#9fb3cc",
            fontSize: "24px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "9999px",
              background: "#38c9e6",
            }}
          />
          Cybersecurity · Compliance · IT Managed Services
        </div>
      </div>
    ),
    { ...OG_SIZE },
  )
}
