import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wrapify Solutions | AI Automation, Web & SaaS Development Company",
  description:
    "Wrapify Solutions is a leading AI & Web Development company specializing in SaaS platforms, business automation, and custom software solutions. We empower startups and enterprises with cutting-edge technology, modern UI/UX design, and scalable digital solutions.",
  keywords:
    "AI Automation, Web Development Company, SaaS Development, Software Development, App Development, Custom Software Solutions, AI Solutions, Business Automation, Chatbot Development, React Developer, Next.js Developer, Mobile App Development, Full Stack Development, UI UX Design, Graphic Design, Machine Learning Solutions, AI Company in Australia, Web Developer in UK, SaaS Agency USA, Software House Dubai, Digital Transformation Services, AI Automation Agency, AI Chatbot Company, AI Developers, App Developers Near Me",
  openGraph: {
    title: "Wrapify Solutions | AI Automation, Web & SaaS Development Experts",
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
        <meta name="robots" content="index, follow" />
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
