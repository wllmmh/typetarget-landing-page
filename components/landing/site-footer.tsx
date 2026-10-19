import { format, rich } from "@/lib/i18n/format"
import type { Messages } from "@/lib/i18n/messages/en"
import { CONTACT_URL, REPO_URL, VERSION } from "@/lib/site"

const footLink =
  "text-foreground underline decoration-border underline-offset-4 hover:decoration-primary"

const linkTo = (href: string, text: string) => (
  <a href={href} className={footLink}>
    {text}
  </a>
)
const link = (href: string) => (text: string) => linkTo(href, text)

export const SiteFooter = ({ messages }: { messages: Messages["footer"] }) => (
  <footer className="mx-auto mt-32 max-w-6xl border-t px-4 pt-8 pb-12 md:mt-40 md:px-8">
    <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">
      {rich(format(messages.text, { version: VERSION }), {
        source: link(REPO_URL),
        privacy: link(`${REPO_URL}/blob/main/PRIVACY.md`),
        issues: link(`${REPO_URL}/issues`),
        contact: link(CONTACT_URL),
      })}
    </p>
  </footer>
)
