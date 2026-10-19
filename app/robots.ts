import type { MetadataRoute } from "next"

import { SITE_URL } from "@/lib/site"

// Static export only prerenders route handlers marked static.
export const dynamic = "force-static"

// Everything is public, AI crawlers included.
const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: "*", allow: "/" },
  sitemap: `${SITE_URL}/sitemap.xml`,
})

export default robots
