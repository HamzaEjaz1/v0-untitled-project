import { MapPin, Users, Zap, Globe, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Wrapify Solutions - USA & MENA Region | Software Development Services",
  description:
    "Wrapify Solutions serves businesses across USA and MENA region including Saudi Arabia, UAE, Qatar, Egypt, and Pakistan. Local software development expertise with global standards across all markets.",
  keywords:
    "software development USA, MENA region software, Saudi Arabia development, UAE web development, Egypt app development, Qatar software solutions, Pakistan IT services, Middle East North Africa tech",
}

export default function LocationsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Serving USA & MENA Region
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Wrapify Solutions brings global expertise with local understanding. We serve businesses across USA,
                Saudi Arabia, UAE, Qatar, Egypt, and Pakistan. Delivering world-class software development, AI
                automation, and digital solutions tailored to each market's unique needs and regulations.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Regions</h2>
              <p className="text-gray-600 dark:text-gray-300">Click on any region to learn more about our services</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* USA Region */}
            <Reveal delay={0.1}>
              <Link href="/locations/usa">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-primary/20 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">United States</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Serving all major US cities and states with comprehensive web development, app development, and AI
                    automation solutions.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Explore <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Saudi Arabia */}
            <Reveal delay={0.2}>
              <Link href="/locations/saudi-arabia">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-primary/20 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">Saudi Arabia</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Serving Riyadh, Jeddah, and across the Kingdom with Vision 2030 compliant solutions and local
                    expertise.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Explore <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* UAE */}
            <Reveal delay={0.3}>
              <Link href="/locations/united-arab-emirates">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-primary/20 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">UAE</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Serving Dubai, Abu Dhabi, and across Emirates with innovative tech solutions and world-class
                    support.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Explore <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Qatar */}
            <Reveal delay={0.4}>
              <Link href="/locations/qatar">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-primary/20 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">Qatar</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Established in Doha with expertise in serving Gulf region businesses with premium software
                    solutions.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Explore <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Egypt */}
            <Reveal delay={0.5}>
              <Link href="/locations/egypt">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-primary/20 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">Egypt</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Serving Cairo, Alexandria, and across Egypt with affordable, scalable software development
                    solutions.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Explore <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Pakistan */}
            <Reveal delay={0.6}>
              <Link href="/locations/pakistan">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-primary/20 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">Pakistan</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Serving Karachi, Lahore, Islamabad with cost-effective, high-quality software development services.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Explore <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Wrapify Solutions?</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Expert Team</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Experienced professionals across all technology domains serving multiple regions
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
                  International best practices with regional market expertise
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Local Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  24/7 support across USA, MENA, and Asia timezones
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
              Whether you're in USA or MENA region, contact us today to discuss your project and how we can help you
              succeed globally.
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
