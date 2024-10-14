import { DraftAlert } from "@/src/components/misc/DraftAlert"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import "@/src/styles/globals.css"
import Header from "@/src/components/header/Header"
import Footer from "@/src/components/footer/Footer"
import { LocaleProvider } from "@/src/contexts/LocaleContext"

export const metadata: Metadata = {
  title: {
    default: "Laaha Homepage",
    template: "%s | Homepage for Laaha",
  },
  description: "Laaha is a safe space for women and girls to discuss health, safety, violence, and relationships.",
  icons: {
    icon: "/favicon.ico",
  },
}

export interface RootLayoutProps {
  children: ReactNode,
  params: {
    locale: string
  }
}

export default function RootLayout({
  children, params
}: RootLayoutProps) {
  return (
    <LocaleProvider>
      <html lang={params.locale}>
        <body>
          <DraftAlert />
          <div className="max-w-screen-md px-6 mx-auto">
            <Header />
            <main className="container py-10 mx-auto">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </LocaleProvider>
  )
}
