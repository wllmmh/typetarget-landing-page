"use client"

import {
  createContext,
  useContext,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react"
import {
  SpeakerSimpleHighIcon,
  SpeakerSimpleSlashIcon,
} from "@phosphor-icons/react/ssr"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type MuteState = { muted: boolean; toggle: () => void }

const MuteContext = createContext<MuteState | null>(null)

const useMute = () => {
  const state = useContext(MuteContext)
  if (!state) throw new Error("MutedVideo parts must be inside MuteProvider")
  return state
}

/** Shares the muted state between a video and a button that lives outside it. */
export const MuteProvider = ({ children }: { children: ReactNode }) => {
  const [muted, setMuted] = useState(true)
  return (
    <MuteContext value={{ muted, toggle: () => setMuted((value) => !value) }}>
      {children}
    </MuteContext>
  )
}

/** Starts muted so autoplay is allowed. The user unmutes it with `MuteButton`. */
export const MutableVideo = (props: Omit<ComponentProps<"video">, "muted">) => {
  const { muted } = useMute()
  return <video {...props} muted={muted} />
}

export const MuteButton = ({
  labels,
  className,
}: {
  labels: { mute: string; unmute: string }
  className?: string
}) => {
  const { muted, toggle } = useMute()
  const Icon = muted ? SpeakerSimpleSlashIcon : SpeakerSimpleHighIcon
  return (
    <Button
      variant="secondary"
      size="icon-sm"
      aria-label={muted ? labels.unmute : labels.mute}
      onClick={toggle}
      // The video is hidden for reduced motion, so there's nothing to unmute.
      className={cn("motion-reduce:hidden", className)}
    >
      <Icon className="size-4" />
    </Button>
  )
}
