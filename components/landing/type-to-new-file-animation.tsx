"use client"

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"
import Image from "next/image"

import {
  ContextMenuAnimation,
  type AfterClickControls,
} from "@/components/mock-context-menu/context-menu-animation"
import type { MockMenuEntry } from "@/components/mock-context-menu/layout"
import { cn } from "@/lib/utils"

// Stays in English on every language's page: it's what the video's audio says.
const FIELD_TEXT = "What would you do with unlimited free AI transcriptions?"
// Slow enough that the text is still typing when it moves to the new tab.
const FIELD_TYPE_SPEED = 10
const FIELD_TYPE_DELAY = 300
const LOOP_DELAY = 1500

/** Step 2's video, picked up where that step leaves off, in seconds. */
const VIDEO_START = 6
/** Listening started back in step 2, so the badge's timer is already running. */
const TIMER_START = 6

const WIDTH = 1280
const HEIGHT = 800
/**
 * Like the browser's page zoom, so the text reads at carousel size: page
 * content is drawn this much larger, the native context menu isn't. The app
 * itself draws its text at 15px.
 */
const ZOOM = 2
/** The page's viewport in CSS px at that zoom. */
const VIEW_WIDTH = WIDTH / ZOOM
const VIEW_HEIGHT = HEIGHT / ZOOM

// Matches new-file-field.ts in the extension: fixed over the bottom third.
const BOX_MARGIN = 12
const BOX_HEIGHT = VIEW_HEIGHT / 3
const BOX_TOP = VIEW_HEIGHT - BOX_MARGIN - BOX_HEIGHT
/** The badge and button tabs: a 16px line plus 1px padding each side. */
const TAB_HEIGHT = 18
/** Their bottom sits 1px inside the box's top edge, joining the outline. */
const TAB_TOP = BOX_TOP + 1 - TAB_HEIGHT
const BUTTON_WIDTH = 20
const CONTROLS_PADDING_X = 2

/** Middle of Open in new tab, the third of four buttons, in stage px. */
const OPEN_IN_TAB = {
  x: (VIEW_WIDTH - BOX_MARGIN - CONTROLS_PADDING_X - BUTTON_WIDTH * 1.5) * ZOOM,
  y: (TAB_TOP + TAB_HEIGHT / 2) * ZOOM,
}

const GREEN = "#1f9d55"
const FONT_STACK =
  "[font-family:system-ui,-apple-system,'Segoe_UI',Roboto,'Noto_Sans',Ubuntu,sans-serif]"
// The extension's box and editor tab are Canvas and CanvasText under `color-scheme: light dark`,
// so like native UI they follow the OS theme, not the page theme. These are Chrome's values.
const FIELD_THEME = cn(
  "[--nf-bg:#fff] [--nf-fg:#000]",
  "system-dark:[--nf-bg:#121212] system-dark:[--nf-fg:#fff]"
)
const FIELD_TEXT_STYLE =
  "text-[15px] leading-[1.5] font-normal tracking-normal text-(--nf-fg)"
const DESTINATION_OUTLINE: CSSProperties = {
  outline: `4px double ${GREEN}`,
  outlineOffset: -4,
}

const IconButton = ({
  hovered = false,
  children,
}: {
  hovered?: boolean
  children: ReactNode
}) => (
  <span
    className={cn(
      "flex h-4 w-5 items-center justify-center rounded-[2px]",
      hovered && "bg-white/30"
    )}
  >
    <svg viewBox="0 0 12 12" width={10} height={10} aria-hidden>
      {children}
    </svg>
  </span>
)

const SaveIcon = () => (
  <path
    d="M6 1 V8 M3 5 L6 8 L9 5 M1.5 10.75 H10.5"
    stroke="currentColor"
    strokeWidth={1.5}
    fill="none"
  />
)

const CloseIcon = () => (
  <path
    d="M2.5 2.5 L9.5 9.5 M9.5 2.5 L2.5 9.5"
    stroke="currentColor"
    strokeWidth={1.75}
    fill="none"
  />
)

const StatusTab = ({
  seconds,
  style,
}: {
  seconds: number
  style: CSSProperties
}) => (
  <div
    style={{ ...style, backgroundColor: GREEN }}
    className="absolute flex items-center rounded-t-[3px] px-[6px] py-px text-[11px] leading-4 font-semibold whitespace-nowrap text-white tabular-nums"
  >
    <svg
      viewBox="0 0 12 12"
      width={10}
      height={10}
      aria-hidden
      className="mr-1 shrink-0"
    >
      <path d="M2 1.2 L10.5 6 L2 10.8 Z" fill="currentColor" />
    </svg>
    TypeTarget 0:{String(seconds).padStart(2, "0")}
  </div>
)

const ControlsTab = ({
  style,
  children,
}: {
  style: CSSProperties
  children: ReactNode
}) => (
  <div
    style={{ ...style, backgroundColor: GREEN }}
    className="absolute flex items-center rounded-t-[3px] px-[2px] py-px text-white"
  >
    {children}
  </div>
)

/**
 * The output from the click on. Stays mounted when the text moves to the new
 * tab, so the typing carries on from where it was.
 */
const OutputStage = ({
  inTab,
  openInTabHovered,
}: {
  inTab: boolean
  openInTabHovered: boolean
}) => {
  const [typed, setTyped] = useState(0)
  const [seconds, setSeconds] = useState(TIMER_START)

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>
    const typeTo = (count: number) => {
      id = setTimeout(
        () => {
          setTyped(count)
          if (count < FIELD_TEXT.length) typeTo(count + 1)
        },
        count === 1 ? FIELD_TYPE_DELAY : FIELD_TYPE_SPEED
      )
    }
    typeTo(1)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setSeconds((value) => value + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const text = (
    <>
      {FIELD_TEXT.slice(0, typed)}
      {typed < FIELD_TEXT.length && (
        <span className="inline-block animate-blink-cursor">|</span>
      )}
    </>
  )

  return (
    <div
      style={{ zoom: ZOOM, width: VIEW_WIDTH, height: VIEW_HEIGHT }}
      className={cn("absolute top-0 left-0", FIELD_THEME, FONT_STACK)}
    >
      {inTab ? (
        // The editor tab: a full-page box with Move back to page instead of the window buttons.
        <div className="absolute inset-0 bg-(--nf-bg)">
          <div
            style={DESTINATION_OUTLINE}
            className={cn(
              "absolute top-[30px] right-[10px] -bottom-1 left-[10px] rounded-t-[4px] px-4 py-3",
              FIELD_TEXT_STYLE
            )}
          >
            {text}
          </div>
          <StatusTab seconds={seconds} style={{ top: 13, left: 10 }} />
          <ControlsTab style={{ top: 13, right: 10 }}>
            <IconButton>
              <SaveIcon />
            </IconButton>
            <IconButton>
              <path
                d="M10 2 V7 H3 M5.5 4.5 L3 7 L5.5 9.5"
                stroke="currentColor"
                strokeWidth={1.5}
                fill="none"
              />
            </IconButton>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </ControlsTab>
        </div>
      ) : (
        <>
          <div
            style={{
              ...DESTINATION_OUTLINE,
              left: BOX_MARGIN,
              right: BOX_MARGIN,
              bottom: BOX_MARGIN,
              height: BOX_HEIGHT,
            }}
            className={cn(
              "absolute overflow-hidden rounded-[4px] bg-(--nf-bg) px-4 py-3 shadow-[0_0_16px_rgb(0_0_0/0.25)]",
              FIELD_TEXT_STYLE
            )}
          >
            {text}
          </div>
          <StatusTab
            seconds={seconds}
            style={{ top: TAB_TOP, left: BOX_MARGIN }}
          />
          <ControlsTab style={{ top: TAB_TOP, right: BOX_MARGIN }}>
            <IconButton>
              <SaveIcon />
            </IconButton>
            <IconButton>
              <path
                d="M2 9.5 H10"
                stroke="currentColor"
                strokeWidth={1.75}
                fill="none"
              />
            </IconButton>
            <IconButton hovered={openInTabHovered}>
              <path
                d="M7 1.5 H10.5 V5 M10.5 1.5 L5.5 6.5 M9 7.5 V10.5 H1.5 V3 H4.5"
                stroke="currentColor"
                strokeWidth={1.5}
                fill="none"
              />
            </IconButton>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </ControlsTab>
        </>
      )}
    </div>
  )
}

export const TypeToNewFileAnimation = ({
  label,
  menuEntries,
  submenuEntries,
  startDelay,
  paused,
  onLoopEnd,
}: {
  label: string
  menuEntries: MockMenuEntry[]
  /** The TypeTarget submenu while a tab is being listened to. */
  submenuEntries: MockMenuEntry[]
  startDelay?: number
  paused?: boolean
  onLoopEnd?: () => void
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [inTab, setInTab] = useState(false)
  const [openInTabHovered, setOpenInTabHovered] = useState(false)

  // Hidden slides stay mounted, so stop the video rather than let it play unseen.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    // The only keyframe is at 0s, so a seek takes a moment; done while hidden, the slide
    // shows 6s from the start instead of 0s until the seek lands.
    if (paused) {
      video.pause()
      video.currentTime = VIDEO_START
      return
    }
    if (video.currentTime !== VIDEO_START) video.currentTime = VIDEO_START
    video.play().catch(() => {
      // Blocked or interrupted by a pause: the poster image stays up, which is fine.
    })
  }, [paused])

  const afterClick = async ({ moveTo, wait, press }: AfterClickControls) => {
    // A stopped run can leave these set; this lands with the click, before the box shows.
    setInTab(false)
    setOpenInTabHovered(false)
    await wait(500)

    await moveTo(OPEN_IN_TAB, 0.1)
    setOpenInTabHovered(true)
    await wait(300)

    press(true)
    await wait(120)
    press(false)
    setInTab(true)
    setOpenInTabHovered(false)
    // A look at the new tab before the pointer heads back.
    await wait(550)
  }

  return (
    <ContextMenuAnimation
      cursorStart={{ x: 64, y: 256 }}
      menuEntries={menuEntries}
      submenuEntries={submenuEntries}
      submenuTargetId="type-to-new-file"
      afterClick={afterClick}
      renderStage={(clicked) =>
        clicked && (
          <OutputStage inTab={inTab} openInTabHovered={openInTabHovered} />
        )
      }
      loopDelay={LOOP_DELAY}
      startDelay={startDelay}
      paused={paused}
      onLoopEnd={() => {
        // Every run picks up from the same moment of step 2.
        const video = videoRef.current
        if (video) video.currentTime = VIDEO_START
        onLoopEnd?.()
      }}
      width={WIDTH}
      height={HEIGHT}
      label={label}
      background={
        <>
          {/* Sits under the video: it's what shows if the video fails to load, or with reduced motion. */}
          <Image
            src="/listen-to-tab-background.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 760px, 100vw"
            className="object-cover"
          />
          <video
            ref={videoRef}
            src="/listen-to-tab-background.mp4"
            poster="/listen-to-tab-background.webp"
            // Step 2 already buffered it, so this mostly comes from cache.
            preload="auto"
            muted
            loop
            playsInline
            aria-hidden
            className="absolute inset-0 size-full object-cover motion-reduce:hidden"
          />
        </>
      }
    />
  )
}
