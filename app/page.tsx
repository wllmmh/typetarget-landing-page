import { Faq } from "@/components/landing/faq"
import { Hero } from "@/components/landing/hero"
import { Install } from "@/components/landing/install"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import { SpecSheet } from "@/components/landing/spec-sheet"
import { UseCases } from "@/components/landing/use-cases"

const Page = () => (
  <>
    <SiteHeader />
    <main>
      <Hero />
      <UseCases />
      <SpecSheet />
      <Install />
      <Faq />
    </main>
    <SiteFooter />
  </>
)

export default Page
