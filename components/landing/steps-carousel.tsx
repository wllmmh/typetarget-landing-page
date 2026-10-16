"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Image from "next/image"
import { PauseIcon, PlayIcon } from "@phosphor-icons/react/ssr"

import { Code } from "@/components/landing/code"
import {
  MuteButton,
  MuteProvider,
  MutableVideo,
} from "@/components/landing/mutable-video"
import { TypeToNewFileAnimation } from "@/components/landing/type-to-new-file-animation"
import { ContextMenuAnimation } from "@/components/mock-context-menu/context-menu-animation"
import { PopupAnimation } from "@/components/mock-popup/popup-animation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type MediaProps = {
  startDelay: number
  /** Off-screen slides hold still and restart from the beginning when shown. */
  paused: boolean
  /** The carousel moves on once the shown slide's animation has played through. */
  onLoopEnd: () => void
}

const ListenToTabMedia = ({ startDelay, paused, onLoopEnd }: MediaProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Hidden slides stay mounted, so stop the video rather than let it play (or be heard) unseen.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (paused) {
      video.pause()
      return
    }
    // Restart with the animation, so the two play in step.
    video.currentTime = 0
    video.play().catch(() => {
      // Blocked or interrupted by a pause: the poster image stays up, which is fine.
    })
  }, [paused])

  return (
    <MuteProvider>
      <div className="relative">
        <ContextMenuAnimation
          cursorStart={{ x: 64, y: 256 }}
          startDelay={startDelay}
          paused={paused}
          onLoopEnd={onLoopEnd}
          label="A video call in a browser tab. The pointer right-clicks, opens the TypeTarget menu and clicks Listen to this tab."
          background={
            <>
              {/* Sits under the video: it's what shows if the video fails to load, or with reduced motion. */}
              <Image
                src="/listen-to-tab-background.webp"
                alt=""
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
              <MutableVideo
                ref={videoRef}
                src="/listen-to-tab-background.mp4"
                poster="/listen-to-tab-background.webp"
                // Buffered while hidden, so it starts the moment step 2 is shown.
                preload="auto"
                loop
                playsInline
                aria-hidden
                className="absolute inset-0 size-full object-cover motion-reduce:hidden"
              />
            </>
          }
        />
        <MuteButton className="absolute right-3 bottom-3" />
      </div>
    </MuteProvider>
  )
}

type Step = {
  n: string
  optional: boolean
  title: string
  body: ReactNode
  Media: (props: MediaProps) => ReactNode
}

const steps: Step[] = [
  {
    n: "Step 1",
    optional: true,
    title: "Pick a model and/or language.",
    body: (
      <>
        Select an AI model to transcribe locally on your computer or let a cloud
        provider handle the compute for you. Together, they understand over{" "}
        <a
          href="#languages"
          className="text-foreground underline decoration-primary underline-offset-4"
        >
          100 human languages
        </a>
        .
      </>
    ),
    Media: (props) => (
      <PopupAnimation
        {...props}
        label="The TypeTarget popup. The pointer scrolls through the model list and picks Whisper Large v3 Q5, then scrolls the spoken language list and picks English."
      />
    ),
  },
  {
    n: "Step 2",
    optional: false,
    title: "Select an input.",
    body: (
      <>
        Click the <Code>Start listening</Code> button in the TypeTarget panel,
        or right click on any page. Choose <Code>TypeTarget</Code> →{" "}
        <Code>Listen to this tab</Code>.
      </>
    ),
    Media: ListenToTabMedia,
  },
  {
    n: "Step 3",
    optional: false,
    title: "Choose an output.",
    body: (
      <>
        Click the <Code>Start typing</Code> button in the TypeTarget panel or
        right click on any web page&rsquo;s text field and Select{" "}
        <Code>TypeTarget</Code> → <Code>Type to this field</Code>.
      </>
    ),
    Media: (props) => (
      <TypeToNewFileAnimation
        {...props}
        label="The video call from step 2. The pointer right-clicks, opens the TypeTarget menu and clicks Type to new file. A text box with a green outline and a timer opens over the bottom of the page and transcribed speech types into it. The pointer clicks the box's Open in new tab button, and the text carries on typing in a full-page box in a new tab."
      />
    ),
  },
]

/**
 * Shows one step at a time and moves to the next once the shown step's
 * animation finishes a loop. With reduced motion the animations hold a still
 * frame and never finish, so it stays put until a step is picked.
 */
export const StepsCarousel = ({
  startDelay = 0,
}: {
  /** Hold the first animation until this many ms after mount, e.g. while a parent fades in. */
  startDelay?: number
}) => {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)

  const next = () => {
    if (playing) setActive((index) => (index + 1) % steps.length)
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Setup steps"
      className="flex flex-col gap-6"
    >
      {/* Every slide shares one grid cell, so the carousel is as tall as the tallest and never shifts. */}
      <div aria-live={playing ? "off" : "polite"} className="grid">
        {steps.map(({ n, optional, title, body, Media }, index) => {
          const shown = index === active
          return (
            <div
              key={n}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${steps.length}`}
              inert={!shown}
              className={cn(
                "col-start-1 row-start-1 transition-[opacity,visibility] duration-300",
                !shown && "invisible opacity-0"
              )}
            >
              <figure className="grid gap-6 lg:grid-cols-12 lg:gap-12">
                <figcaption className="flex min-w-0 flex-col gap-3 lg:col-span-4 lg:pt-2">
                  <span className="text-2xl font-semibold text-primary tabular-nums">
                    {n}
                    {optional && (
                      <span className="ml-2 text-sm font-normal text-muted-foreground">
                        (optional)
                      </span>
                    )}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-balance">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </figcaption>
                <div className="min-w-0 self-start border bg-muted lg:col-span-8">
                  <Media
                    startDelay={startDelay}
                    paused={!shown}
                    onLoopEnd={next}
                  />
                </div>
              </figure>
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-center gap-1">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          onClick={() => setPlaying((value) => !value)}
          // Reduced motion has no autoplay to pause.
          className="motion-reduce:hidden"
        >
          {playing ? (
            <PauseIcon className="size-4" />
          ) : (
            <PlayIcon className="size-4" />
          )}
        </Button>
        {steps.map(({ n }, index) => (
          <Button
            key={n}
            variant={index === active ? "secondary" : "ghost"}
            size="icon-sm"
            aria-label={n}
            aria-current={index === active}
            onClick={() => setActive(index)}
            className={cn("tabular-nums", index === active && "text-primary")}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}
