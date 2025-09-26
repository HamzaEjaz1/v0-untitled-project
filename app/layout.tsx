import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "Wrapify Solutions | Web Development & AI Solutions",
//   description:
//     "Wrapify Solutions is a forward-thinking technology company driven by innovation, design, and excellence. We wrap ideas into intelligent digital solutions.",
//     generator"
// }

export const metadata = {
  title: "Wrapify Solutions | Web Development & AI Solutions",
  description:
    "Wrapify Solutions is a forward-thinking technology company driven by innovation, design, and excellence. We wrap ideas into intelligent digital solutions that empower businesses to scale with modern web development, AI-powered automation, and cloud-native strategies.",
  keywords:
    "Wrapify Solutions, web development, AI solutions, machine learning, deep learning, custom web apps, cloud solutions, API integration, UI/UX design, software development company, tech consultancy, full-stack development",
  author: "Wrapify Solutions Team",
  generator: "Next.js",
  applicationName: "Wrapify Solutions",
  creator: "Wrapify Solutions",
  publisher: "Wrapify Solutions",
  robots: "index, follow",
  themeColor: "#0F172A",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Wrapify Solutions – Transforming Ideas into Intelligent Digital Solutions",
    description:
      "We deliver high-performance websites, AI-driven applications, and innovative tech solutions tailored for startups and enterprises worldwide.",
    url: "https://wrapifysolutions.com",
    siteName: "Wrapify Solutions",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D0BAQFIDPmuzSMGqQ/company-logo_200_200/B4DZmChSH9IcAI-/0/1758831388221/wrapifysolutions_logo?e=1761782400&v=beta&t=U5y2vRUVWE0X71BdHSThbTdW3Ir2Oj9XGrCP1SUxqPU",
        width: 1200,
        height: 630,
        alt: "Wrapify Solutions – Web Development & AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrapify Solutions | Web Development & AI Solutions",
    description:
      "Leading tech company specializing in web development, AI solutions, and cloud-native strategies for innovative businesses.",
    creator: "@WrapifySolutions",
    images: ["https://media.licdn.com/dms/image/v2/D4D0BAQFIDPmuzSMGqQ/company-logo_200_200/B4DZmChSH9IcAI-/0/1758831388221/wrapifysolutions_logo?e=1761782400&v=beta&t=U5y2vRUVWE0X71BdHSThbTdW3Ir2Oj9XGrCP1SUxqPU"],
  },
  icons: {
    icon: "/https://media.licdn.com/dms/image/v2/D4D0BAQFIDPmuzSMGqQ/company-logo_200_200/B4DZmChSH9IcAI-/0/1758831388221/wrapifysolutions_logo?e=1761782400&v=beta&t=U5y2vRUVWE0X71BdHSThbTdW3Ir2Oj9XGrCP1SUxqPU",
    shortcut: "/https://media.licdn.com/dms/image/v2/D4D0BAQFIDPmuzSMGqQ/company-logo_200_200/B4DZmChSH9IcAI-/0/1758831388221/wrapifysolutions_logo?e=1761782400&v=beta&t=U5y2vRUVWE0X71BdHSThbTdW3Ir2Oj9XGrCP1SUxqPU",
    apple: "/https://media.licdn.com/dms/image/v2/D4D0BAQFIDPmuzSMGqQ/company-logo_200_200/B4DZmChSH9IcAI-/0/1758831388221/wrapifysolutions_logo?e=1761782400&v=beta&t=U5y2vRUVWE0X71BdHSThbTdW3Ir2Oj9XGrCP1SUxqPU",
  },
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
