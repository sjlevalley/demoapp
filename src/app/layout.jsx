import { Geist } from "next/font/google"
import { Providers } from "../components/Providers"
import SidebarWithHeader from "../components/SidebarWithHeader"
import { Amplify } from "aws-amplify"
import ConfigureAmplifyClientSide from "../components/ConfigureAmplifyClientSide"
import "./globals.css"
import awsmobile from "../aws-exports"
import HubListener from "@/components/HubListener"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata = {
  title: "Demo App",
  description: "A demo application",
}

Amplify.configure({ ...awsmobile }, { ssr: true })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>
        <ConfigureAmplifyClientSide config={awsmobile} />
        <Providers>
          <HubListener />
          <SidebarWithHeader>{children}</SidebarWithHeader>
        </Providers>
      </body>
    </html>
  )
}
