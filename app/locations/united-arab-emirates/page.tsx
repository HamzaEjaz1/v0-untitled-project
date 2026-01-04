import { MapPin, Zap, Globe, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Wrapify Solutions in UAE | Web Development Dubai, Abu Dhabi, Sharjah",
  description:
    "Wrapify Solutions provides premium web development, app development, AI automation, and digital solutions across UAE. Serving Dubai, Abu Dhabi, Sharjah, and across Emirates with world-class technology expertise.",
  keywords:
    "web development Dubai, app development UAE, software development Abu Dhabi, AI automation Dubai, digital transformation UAE, fintech development, enterprise solutions, mobile app Dubai, web design Sharjah",
}

export default function UAEPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Premium Software Development Solutions in UAE
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Wrapify Solutions serves businesses across UAE including Dubai, Abu Dhabi, Sharjah, and across the
                Emirates. We deliver world-class web development, mobile app development, AI automation, and digital
                transformation solutions tailored to the UAE market with enterprise-grade quality.
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
                  <h2 className="text-2xl font-bold">Serving UAE</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We serve businesses across all major Emirate cities including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al
                  Khaimah, Fujairah, Umm Al Quwain, and Diba. Our expertise spans finance, retail, hospitality,
                  healthcare, and enterprise sectors.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    Enterprise Web Development Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    Mobile App Development (iOS & Android)
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    FinTech & Banking Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    AI Automation & Blockchain Development
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    Cloud Infrastructure & Scalability
                  </li>
                </ul>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/contact">Start a Project in UAE</Link>
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
                  Established excellence in UAE market with deep understanding of regional business requirements and
                  international standards for enterprise solutions.
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    UAE National AI Strategy Aligned Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    ISO & International Compliance Certified
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    Enterprise-Grade Security & Data Privacy
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    Multi-Lingual Support (Arabic & English)
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    24/7 Premium Technical Support
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Premium Services in UAE</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {[
              { title: "Enterprise Web Solutions", desc: "Scalable, secure web platforms for large organizations" },
              { title: "Mobile App Development", desc: "Premium iOS and Android apps with enterprise features" },
              { title: "FinTech Solutions", desc: "Secure financial technology and banking applications" },
              { title: "AI & Machine Learning", desc: "Advanced AI solutions for business intelligence" },
              { title: "Digital Transformation", desc: "End-to-end modernization of business processes" },
              { title: "Blockchain & Web3", desc: "Next-generation distributed technology solutions" },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your enterprise project and how we can deliver world-class digital solutions
              for your UAE business.
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
