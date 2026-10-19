import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { OG_IMAGE } from "@/lib/site"

// Static export only prerenders route handlers marked static.
export const dynamic = "force-static"

// The site's `--primary` and `--foreground`: `ImageResponse` takes no oklch.
const PRIMARY = "#c10007"
const FOREGROUND = "#0a0a0a"
const MUTED = "#737373"

// The link preview image. One for every language, so it has no words to
// translate: the name, a text field with its cursor, and the address.
export const GET = async () => {
  const icon = await readFile(join(process.cwd(), "public/typetarget-icon.png"))
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`
  const { width, height } = OG_IMAGE

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        background: "white",
        color: FOREGROUND,
        borderTop: `16px solid ${PRIMARY}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
        <img src={iconSrc} width={128} height={128} alt="" />
        <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: -4 }}>
          TypeTarget
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 56,
          height: 96,
          padding: "0 32px",
          border: "3px solid #e5e5e5",
          borderRadius: 16,
        }}
      >
        <div style={{ width: 6, height: 56, background: PRIMARY }} />
      </div>
      <div style={{ marginTop: 40, fontSize: 36, color: MUTED }}>
        typetarget.com
      </div>
    </div>,
    { width, height }
  )
}
