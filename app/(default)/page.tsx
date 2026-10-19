import { LandingPage, getPageMetadata } from "@/components/landing/landing-page"

export const metadata = getPageMetadata("en")

const Page = () => <LandingPage locale="en" />

export default Page
