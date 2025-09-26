import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wrapify Solutions | Web Development & AI Solutions",
  description:
    "Wrapify Solutions is a forward-thinking technology company driven by innovation, design, and excellence. We wrap ideas into intelligent digital solutions.",
    generator"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://media.licdn.com/dms/image/v2/D4D0BAQFIDPmuzSMGqQ/company-logo_200_200/B4DZmChSH9IcAI-/0/1758831388221/wrapifysolutions_logo?e=1761782400&v=beta&t=U5y2vRUVWE0X71BdHSThbTdW3Ir2Oj9XGrCP1SUxqPU" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
