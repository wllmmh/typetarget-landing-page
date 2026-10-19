import { SiteDocument } from "@/components/site-document"
import { localeRedirectScript } from "@/lib/i18n/locales"

// The English page at `/`, which also sends other browsers to their language.
const RootLayout = ({ children }: LayoutProps<"/">) => (
  <SiteDocument
    locale="en"
    beforePaint={
      <script dangerouslySetInnerHTML={{ __html: localeRedirectScript() }} />
    }
  >
    {children}
  </SiteDocument>
)

export default RootLayout
