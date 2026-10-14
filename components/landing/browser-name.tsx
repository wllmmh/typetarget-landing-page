"use client"

import { useEffect, useState } from "react"

type BrowserName = "Chrome" | "Brave" | "Edge"

type BraveNavigator = Navigator & {
  brave?: { isBrave: () => Promise<boolean> }
}

const detectBrowser = async (): Promise<BrowserName> => {
  if (await (navigator as BraveNavigator).brave?.isBrave()) return "Brave"
  if (navigator.userAgent.includes("Edg/")) return "Edge"
  return "Chrome"
}

/** Brave hides itself in the user agent, so this renders "Chrome" until detection resolves. */
export const BrowserName = () => {
  const [name, setName] = useState<BrowserName>("Chrome")

  useEffect(() => {
    detectBrowser()
      .then(setName)
      .catch(() => {})
  }, [])

  return <>{name}</>
}
