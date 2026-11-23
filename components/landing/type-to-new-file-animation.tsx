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

// Matches new-file-field.ts, highlight.ts and session-badge.ts in the extension: a box fixed
// over the bottom third, a 2px frame 4px outside it, and two pill chips just above the frame.
const BOX_MARGIN = 16
const BOX_HEIGHT = VIEW_HEIGHT / 3
const BOX_RADIUS = 8
const FRAME_WIDTH = 2
const FRAME_GAP = 4
/** How far the frame's outer edge is from the box's; the chips line up with it. */
const REACH = FRAME_WIDTH + FRAME_GAP
const ROW_HEIGHT = 36
const ROW_GAP = 4
const BUTTON_SIZE = 32
const CONTROLS_PADDING_X = 2
/** The editor tab's page padding: room above the box for the frame and the chips' row. */
const EDITOR_PADDING_TOP = 56

const BOX_TOP = VIEW_HEIGHT - BOX_MARGIN - BOX_HEIGHT
const ROW_TOP = BOX_TOP - REACH - ROW_GAP - ROW_HEIGHT
const ROW_EDGE = BOX_MARGIN - REACH
const EDITOR_ROW_TOP = EDITOR_PADDING_TOP - REACH - ROW_GAP - ROW_HEIGHT

/** Middle of Open in new tab, the third of four buttons, in stage px. */
const OPEN_IN_TAB = {
  x: (VIEW_WIDTH - ROW_EDGE - CONTROLS_PADDING_X - BUTTON_SIZE * 1.5) * ZOOM,
  y: (ROW_TOP + ROW_HEIGHT / 2) * ZOOM,
}

const GREEN = "#1f9d55"
const FONT_STACK =
  "[font-family:system-ui,-apple-system,'Segoe_UI',Roboto,'Noto_Sans',Ubuntu,sans-serif]"
// The extension's box and editor tab use the popup's colors for the OS theme, not the page theme.
const FIELD_THEME = cn(
  "[--nf-bg:#fff] [--nf-fg:#1f1f1f] [--nf-primary:#0b57d0]",
  "system-dark:[--nf-bg:#1f1f1f] system-dark:[--nf-fg:#e3e3e3] system-dark:[--nf-primary:#a8c7fa]"
)
const FIELD_TEXT_STYLE =
  "text-[15px] leading-[1.5] font-normal tracking-normal text-(--nf-fg)"
const CHIP =
  "absolute flex items-center rounded-full bg-[rgb(16_16_16/0.8)] text-white backdrop-blur-[8px]"

/** Material Icons' 24px paths, as in the extension. */
const SAVE_PATH = "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
const MINIMIZE_PATH = "M19 13H5v-2h14v2z"
const OPEN_IN_TAB_PATH =
  "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
const MOVE_BACK_PATH =
  "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
const CLOSE_PATH =
  "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
const PLAY_PATH = "M8 5v14l11-7z"

const Icon = ({ path }: { path: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={20}
    height={20}
    aria-hidden
    className="block shrink-0"
  >
    <path d={path} fill="currentColor" />
  </svg>
)

const IconButton = ({
  path,
  hovered = false,
}: {
  path: string
  hovered?: boolean
}) => (
  <span
    className={cn(
      "flex items-center justify-center rounded-full",
      hovered && "bg-[color-mix(in_srgb,currentColor_14%,transparent)]"
    )}
    style={{ width: BUTTON_SIZE, height: BUTTON_SIZE }}
  >
    <Icon path={path} />
  </span>
)

const StatusChip = ({
  seconds,
  style,
}: {
  seconds: number
  style: CSSProperties
}) => (
  <div
    style={{ ...style, height: ROW_HEIGHT }}
    className={cn(
      CHIP,
      "gap-2 pr-4 pl-3 text-[13px] leading-4 font-medium whitespace-nowrap tabular-nums"
    )}
  >
    <Icon path={PLAY_PATH} />
    TypeTarget 0:{String(seconds).padStart(2, "0")}
  </div>
)

const ControlsChip = ({
  style,
  children,
}: {
  style: CSSProperties
  children: ReactNode
}) => (
  <div
    style={{ ...style, height: ROW_HEIGHT, paddingInline: CONTROLS_PADDING_X }}
    className={CHIP}
  >
    {children}
  </div>
)

/**
 * The text box and the frame around it. The wrapper is the box's rectangle, so the
 * frame hangs outside it without being clipped by the box.
 */
const Field = ({
  style,
  floating,
  children,
}: {
  style: CSSProperties
  floating: boolean
  children: ReactNode
}) => (
  <div style={style} className="absolute">
    <div
      style={{
        inset: -REACH,
        borderWidth: FRAME_WIDTH,
        borderRadius: BOX_RADIUS + REACH,
        borderColor: GREEN,
      }}
      className="pointer-events-none absolute border-solid"
    />
    <div
      style={{ borderRadius: BOX_RADIUS }}
      className={cn(
        "absolute inset-0 overflow-hidden bg-(--nf-bg) px-4 py-3 whitespace-pre-wrap",
        floating &&
          "shadow-[0_1px_3px_rgb(0_0_0/0.3),0_4px_8px_3px_rgb(0_0_0/0.15)]",
        FIELD_TEXT_STYLE
      )}
    >
      {children}
    </div>
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
        <span className="inline-block animate-blink-cursor text-(--nf-primary)">
          |
        </span>
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
          <Field
            floating={false}
            style={{
              top: EDITOR_PADDING_TOP,
              right: BOX_MARGIN,
              bottom: BOX_MARGIN,
              left: BOX_MARGIN,
            }}
          >
            {text}
          </Field>
          <StatusChip
            seconds={seconds}
            style={{ top: EDITOR_ROW_TOP, left: ROW_EDGE }}
          />
          <ControlsChip style={{ top: EDITOR_ROW_TOP, right: ROW_EDGE }}>
            <IconButton path={SAVE_PATH} />
            <IconButton path={MOVE_BACK_PATH} />
            <IconButton path={CLOSE_PATH} />
          </ControlsChip>
        </div>
      ) : (
        <>
          <Field
            floating
            style={{
              left: BOX_MARGIN,
              right: BOX_MARGIN,
              bottom: BOX_MARGIN,
              height: BOX_HEIGHT,
            }}
          >
            {text}
          </Field>
          <StatusChip
            seconds={seconds}
            style={{ top: ROW_TOP, left: ROW_EDGE }}
          />
          <ControlsChip style={{ top: ROW_TOP, right: ROW_EDGE }}>
            <IconButton path={SAVE_PATH} />
            <IconButton path={MINIMIZE_PATH} />
            <IconButton path={OPEN_IN_TAB_PATH} hovered={openInTabHovered} />
            <IconButton path={CLOSE_PATH} />
          </ControlsChip>
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
