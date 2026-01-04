import { MapPin, Zap, Globe, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Wrapify Solutions in Egypt | Web & App Development Cairo, Alexandria",
  description:
    "Wrapify Solutions provides affordable web development, app development, AI automation, and digital solutions across Egypt. Expert software development for Cairo, Alexandria, Giza businesses.",
  keywords:
    "web development Egypt, app development Cairo, software development Alexandria, AI automation Egypt, digital solutions Cairo, affordable development Egypt, mobile app Egypt, web design Cairo",
}

export default function EgyptPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Software Development Services in Egypt
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Wrapify Solutions serves businesses across Egypt including Cairo, Alexandria, Giza, and beyond. We
                deliver affordable, high-quality web development, mobile app development, AI automation, and digital
                solutions tailored to the Egyptian market.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            <Reveal>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                  <h2 className="text-2xl font-bold">Serving Egypt</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We serve businesses across major Egyptian cities including Cairo, Alexandria, Giza, Zagazig, Mansoura,
                  and throughout the country. Our expertise spans retail, finance, education, and enterprise sectors.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    Web Development & E-Commerce Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    Mobile App Development (iOS & Android)
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    AI Agents & Business Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    Chatbot Development & Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    Affordable, Scalable Solutions
                  </li>
                </ul>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/contact">Start a Project in Egypt</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-8 w-8 text-primary flex-shrink-0" />
                  <h2 className="text-2xl font-bold">Why Choose Us</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Established expertise in Egyptian market. We provide cost-effective solutions without compromising
                  quality, perfect for startups and growing businesses.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    Cost-Effective Pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    Quality & Reliability Assured
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    Arabic Language Support
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    Flexible Payment Terms
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    Local Support & Maintenance
                  </li>
                </ul>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services in Egypt</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {[
              { title: "Web Development", desc: "Responsive, SEO-optimized websites at affordable prices" },
              { title: "App Development", desc: "Custom mobile apps for iOS, Android platforms" },
              { title: "E-Commerce Solutions", desc: "Online stores and payment integration" },
              { title: "AI Chatbots", desc: "Automated customer support in Arabic/English" },
              { title: "Digital Transformation", desc: "Modernize your business with technology" },
              { title: "Tech Consulting", desc: "Strategic technology advice for growth" },
            ].map((service, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Digital Journey Today</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and how we can help you achieve success with
              affordable, quality software solutions.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
