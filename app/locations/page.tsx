import { MapPin, Users, Zap, Globe } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Wrapify Solutions in USA & Qatar | Local Software Development Services",
  description:
    "Wrapify Solutions serves businesses across USA and Qatar. With offices and expertise in both regions, we deliver local insights with global standards in web development, app development, and AI automation services.",
  keywords:
    "software development USA, software development Qatar, web development services USA, app development Qatar, local development company, software solutions",
}

export default function LocationsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Serving USA & Qatar</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Wrapify Solutions brings global expertise with local understanding. Whether you're in the USA or Qatar,
                we deliver world-class software development, AI automation, and digital solutions tailored to your
                market.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">Serving USA</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We serve businesses across all major US cities and states including California, Texas, New York,
                  Florida, and more. Our expertise spans various US markets and industries.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Web Development & Design Services
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Mobile App Development (iOS & Android)
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    AI Agents & Business Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Chatbot Development & Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Custom Software Solutions
                  </li>
                </ul>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/contact">Start a Project in USA</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold">Serving Qatar</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Established in Doha and serving throughout Qatar, we bring international standards with local market
                  knowledge. Supporting businesses in the Gulf region and beyond.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Arabic & Multi-Language Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Region-Specific Compliance Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Enterprise Application Development
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Digital Transformation Services
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    24/7 Local Support & Maintenance
                  </li>
                </ul>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/contact">Start a Project in Qatar</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Wrapify Solutions?</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Expert Team</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Experienced professionals across all technology domains
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Fast Delivery</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Agile approach for quick turnaround without quality compromise
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Global Standards</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  International best practices with local market expertise
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Local Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Dedicated support in USA and Qatar time zones
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're in the USA or Qatar, contact us today to discuss your project requirements and how we can
              help you succeed.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
