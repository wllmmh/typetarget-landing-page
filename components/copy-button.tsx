"use client"

import { useEffect, useState } from "react"
import { CheckIcon, CopyIcon } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"

type CopyState = "idle" | "copied" | "failed"

export const CopyButton = ({ value }: { value: string }) => {
  const [state, setState] = useState<CopyState>("idle")

  useEffect(() => {
    if (state === "idle") return
    const timer = setTimeout(() => setState("idle"), 1600)
    return () => clearTimeout(timer)
  }, [state])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setState("copied")
    } catch {
      setState("failed")
    }
  }

  const label = {
    idle: `Copy ${value}`,
    copied: "Copied",
    failed: "Couldn't copy. Select the text instead.",
  }[state]

  return (
    <Button
      variant="outline"
      size="icon-sm"
      onClick={copy}
      aria-label={label}
      title={label}
      data-state={state}
      className="data-[state=failed]:border-destructive data-[state=failed]:text-destructive"
    >
      {state === "copied" ? (
        <CheckIcon className="text-primary" />
      ) : (
        <CopyIcon />
      )}
      <span aria-live="polite" className="sr-only">
        {state === "idle" ? "" : label}
      </span>
    </Button>
  )
}
