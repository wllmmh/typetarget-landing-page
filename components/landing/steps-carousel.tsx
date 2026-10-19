"use client"

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react"
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
import {
  getChromePageMenu,
  getTypeTargetListeningSubmenu,
  getTypeTargetSubmenu,
} from "@/components/mock-context-menu/default-entries"
import type { MockMenuEntry } from "@/components/mock-context-menu/layout"
import type { PanelEntry } from "@/components/mock-popup/layout"
import { PopupAnimation } from "@/components/mock-popup/popup-animation"
import { Button } from "@/components/ui/button"
import type { ExtensionStrings } from "@/lib/i18n/extension-strings"
import { format, rich } from "@/lib/i18n/format"
import type { Messages } from "@/lib/i18n/messages/en"
import { cn } from "@/lib/utils"

/** Everything the slides say, in the page's language. */
type StepsText = {
  menuEntries: MockMenuEntry[]
  submenuEntries: MockMenuEntry[]
  listeningSubmenuEntries: MockMenuEntry[]
  popupStrings: ExtensionStrings
  languageEntries: PanelEntry[]
  popupDir: "ltr" | "rtl"
  mute: { mute: string; unmute: string }
  animations: Record<StepId, string>
}

type MediaProps = {
  startDelay: number
  /** Off-screen slides hold still and restart from the beginning when shown. */
  paused: boolean
  /** The carousel moves on once the shown slide's animation has played through. */
  onLoopEnd: () => void
  text: StepsText
}

const ListenToTabMedia = ({
  startDelay,
  paused,
  onLoopEnd,
  text,
}: MediaProps) => {
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
          menuEntries={text.menuEntries}
          submenuEntries={text.submenuEntries}
          startDelay={startDelay}
          paused={paused}
          onLoopEnd={onLoopEnd}
          label={text.animations.selectInput}
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
        <MuteButton labels={text.mute} className="absolute right-3 bottom-3" />
      </div>
    </MuteProvider>
  )
}

type StepId = "pickModel" | "selectInput" | "chooseOutput"

type Step = {
  id: StepId
  optional: boolean
  Media: (props: MediaProps) => ReactNode
}

const steps: Step[] = [
  {
    id: "pickModel",
    optional: true,
    Media: ({ text, ...props }) => (
      <PopupAnimation
        {...props}
        strings={text.popupStrings}
        languageEntries={text.languageEntries}
        dir={text.popupDir}
        label={text.animations.pickModel}
      />
    ),
  },
  { id: "selectInput", optional: false, Media: ListenToTabMedia },
  {
    id: "chooseOutput",
    optional: false,
    Media: ({ text, ...props }) => (
      <TypeToNewFileAnimation
        {...props}
        menuEntries={text.menuEntries}
        submenuEntries={text.listeningSubmenuEntries}
        label={text.animations.chooseOutput}
      />
    ),
  },
]

const code = (text: string) => <Code>{text}</Code>

/** The extension's button and menu names the steps refer to, so they match it. */
const getUiNames = (extension: ExtensionStrings) => ({
  startListening: extension.startListening,
  startTyping: extension.startTyping,
  listenToTab: extension.menuListenHere,
  typeToField: extension.menuTypeHere,
  typeToNewFile: extension.menuNewFile,
})

/**
 * Shows one step at a time and moves to the next once the shown step's
 * animation finishes a loop. With reduced motion the animations hold a still
 * frame and never finish, so it stays put until a step is picked.
 */
export const StepsCarousel = ({
  messages,
  chromeMenu,
  extension,
  languageEntries,
  popupDir,
  startDelay = 0,
}: {
  messages: Messages["steps"]
  chromeMenu: Messages["chromeMenu"]
  /** The extension's own text, which the mock popup and menus show. */
  extension: ExtensionStrings
  /** The mock popup's Spoken language menu, built on the server. */
  languageEntries: PanelEntry[]
  popupDir: "ltr" | "rtl"
  /** Hold the first animation until this many ms after mount, e.g. while a parent fades in. */
  startDelay?: number
}) => {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)

  // Memoized so the animations, which restart when their entries change, don't on every render.
  const text = useMemo<StepsText>(() => {
    const names = getUiNames(extension)
    return {
      menuEntries: getChromePageMenu(chromeMenu),
      submenuEntries: getTypeTargetSubmenu(extension),
      listeningSubmenuEntries: getTypeTargetListeningSubmenu(extension),
      popupStrings: extension,
      languageEntries,
      popupDir,
      mute: { mute: messages.mute, unmute: messages.unmute },
      animations: {
        pickModel: messages.pickModel.animation,
        selectInput: format(messages.selectInput.animation, names),
        chooseOutput: format(messages.chooseOutput.animation, names),
      },
    }
  }, [messages, chromeMenu, extension, languageEntries, popupDir])

  const names = getUiNames(extension)
  const bodies: Record<StepId, ReactNode> = {
    pickModel: rich(messages.pickModel.body, {
      languages: (label) => (
        <a
          href="#languages"
          className="text-foreground underline decoration-primary underline-offset-4"
        >
          {label}
        </a>
      ),
    }),
    selectInput: rich(format(messages.selectInput.body, names), { code }),
    chooseOutput: rich(format(messages.chooseOutput.body, names), { code }),
  }
  const stepLabel = (index: number) => format(messages.step, { n: index + 1 })

  const next = () => {
    if (playing) setActive((index) => (index + 1) % steps.length)
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={messages.carouselLabel}
      className="flex flex-col gap-6"
    >
      {/* Every slide shares one grid cell, so the carousel is as tall as the tallest and never shifts. */}
      <div aria-live={playing ? "off" : "polite"} className="grid">
        {steps.map(({ id, optional, Media }, index) => {
          const shown = index === active
          return (
            <div
              key={id}
              role="group"
              aria-roledescription="slide"
              aria-label={format(messages.slideLabel, {
                n: index + 1,
                total: steps.length,
              })}
              inert={!shown}
              className={cn(
                "col-start-1 row-start-1 transition-[opacity,visibility] duration-300",
                !shown && "invisible opacity-0"
              )}
            >
              <figure className="grid gap-6 lg:grid-cols-12 lg:gap-12">
                <figcaption className="flex min-w-0 flex-col gap-3 lg:col-span-4 lg:pt-2">
                  <span className="text-2xl font-semibold text-primary tabular-nums">
                    {stepLabel(index)}
                    {optional && (
                      <span className="ms-2 text-sm font-normal text-muted-foreground">
                        {messages.optional}
                      </span>
                    )}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-balance">
                    {messages[id].title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {bodies[id]}
                  </p>
                </figcaption>
                <div className="min-w-0 self-start border bg-muted lg:col-span-8">
                  <Media
                    startDelay={startDelay}
                    paused={!shown}
                    onLoopEnd={next}
                    text={text}
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
          aria-label={playing ? messages.pause : messages.play}
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
        {steps.map(({ id }, index) => (
          <Button
            key={id}
            variant={index === active ? "secondary" : "ghost"}
            size="icon-sm"
            aria-label={stepLabel(index)}
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
