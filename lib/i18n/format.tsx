import { Fragment, type ReactNode } from "react"

const PLACEHOLDER = /\{(\w+)\}/g
const TAG = /<(\w+)>(.*?)<\/\1>/g

/** Fills a message's `{name}` placeholders. */
export const format = (
  message: string,
  values: Record<string, string | number>
) =>
  message.replace(PLACEHOLDER, (match, name: string) =>
    name in values ? String(values[name]) : match
  )

const splitOn = (
  message: string,
  pattern: RegExp,
  render: (match: RegExpExecArray) => ReactNode
): ReactNode => {
  const nodes: ReactNode[] = []
  let last = 0
  for (const match of message.matchAll(pattern)) {
    nodes.push(message.slice(last, match.index))
    nodes.push(<Fragment key={match.index}>{render(match)}</Fragment>)
    last = match.index + match[0].length
  }
  nodes.push(message.slice(last))
  return <>{nodes}</>
}

/** Like `format`, for values that are elements rather than text. */
export const interpolate = (
  message: string,
  values: Record<string, ReactNode>
): ReactNode =>
  splitOn(message, PLACEHOLDER, ([match, name]) =>
    name in values ? values[name] : match
  )

/**
 * Renders each `<tag>text</tag>` in a message with that tag's function, so a
 * translation can put a link or a button name wherever its grammar needs it.
 * Tags don't nest. A tag with no function is a build error, not lost text.
 */
export const rich = (
  message: string,
  tags: Record<string, (text: string) => ReactNode>
): ReactNode =>
  splitOn(message, TAG, ([, name, text]) => {
    const render = tags[name]
    if (!render) throw new Error(`No renderer for <${name}> in "${message}"`)
    return render(text)
  })
