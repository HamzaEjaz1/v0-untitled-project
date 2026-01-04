import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wrapify Solutions | Web & App Development, AI Automation Company in USA & Qatar",
  description:
    "Leading web development, app development, AI agents, chatbot development, and UI/UX design company serving USA and Qatar. Expert software solutions for startups and enterprises. Get AI automation, custom software, and digital transformation services.",
  keywords:
    "web development USA, app development USA, AI automation USA, software development company USA, chatbot development USA, custom software solutions, web development Qatar, app development Qatar, AI agents, digital transformation, SaaS development, responsive web design, mobile app development, AI chatbot, business automation, web design services, software house, development agency",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Wrapify Solutions | Web Development & AI Automation",
    description:
      "We wrap your ideas into intelligent digital solutions. Wrapify Solutions builds modern web, mobile, and AI-driven applications for global businesses.",
    url: "https://wrapifysolutions.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wrapify Solutions - Web Development & AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrapify Solutions | Leading AI & Web Development Agency",
    description:
      "AI-powered digital solutions for startups & enterprises — Web Development, SaaS, Chatbots, Automation, and App Design.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "https://media.licdn.com/dms/image/v2/D4D0BAQF2nk-epdLwrA/company-logo_100_100/B4DZmMgUDJGkAQ-/0/1758998915469/wrapifysolutions_logo?e=1767830400&v=beta&t=SXmzK204CMHrvUVzs9-L8GPd2hOHQH4PzSfT1MDF9yc",
    shortcut:
      "https://media.licdn.com/dms/image/v2/D4D0BAQF2nk-epdLwrA/company-logo_100_100/B4DZmMgUDJGkAQ-/0/1758998915469/wrapifysolutions_logo?e=1767830400&v=beta&t=SXmzK204CMHrvUVzs9-L8GPd2hOHQH4PzSfT1MDF9yc",
    apple:
      "https://media.licdn.com/dms/image/v2/D4D0BAQF2nk-epdLwrA/company-logo_100_100/B4DZmMgUDJGkAQ-/0/1758998915469/wrapifysolutions_logo?e=1767830400&v=beta&t=SXmzK204CMHrvUVzs9-L8GPd2hOHQH4PzSfT1MDF9yc",
  },
    generator: 'v0.app'
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
        <link
          rel="icon"
          href="https://media.licdn.com/dms/image/v2/D4D0BAQF2nk-epdLwrA/company-logo_100_100/B4DZmMgUDJGkAQ-/0/1758998915469/wrapifysolutions_logo?e=1767830400&v=beta&t=SXmzK204CMHrvUVzs9-L8GPd2hOHQH4PzSfT1MDF9yc"
        />
        <link
          rel="apple-touch-icon"
          href="https://media.licdn.com/dms/image/v2/D4D0BAQF2nk-epdLwrA/company-logo_100_100/B4DZmMgUDJGkAQ-/0/1758998915469/wrapifysolutions_logo?e=1767830400&v=beta&t=SXmzK204CMHrvUVzs9-L8GPd2hOHQH4PzSfT1MDF9yc"
        />
        <meta name="theme-color" content="#0b132b" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE_HERE" />
        <meta property="og:title" content="Wrapify Solutions | Web, SaaS & AI Automation Experts" />
        <meta
          property="og:description"
          content="Wrapify Solutions provides innovative AI, SaaS, and Web Development services to help your business grow through automation and technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wrapifysolutions.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wrapify Solutions | AI Automation & Web Development Company" />
        <meta
          name="twitter:description"
          content="Empowering startups and enterprises with AI-driven digital solutions, SaaS platforms, and web automation."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
