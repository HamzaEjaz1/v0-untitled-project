import { Smartphone, Globe, CheckCircle2, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/ui/reveal"

type UseCase = {
  title: string
  description: string
  category: "App Development" | "Web Development"
  image: string
}

const useCases: UseCase[] = [
  {
    title: "HAndyQ",
    description: "A handy, on-the-go utility app designed to streamline daily tasks with a clean, intuitive interface.",
    category: "App Development",
    image: "/mobile-productivity-app-screenshot.jpg",
  },
  {
    title: "Sehat ke Baat",
    description:
      "A health-focused app enabling users to access wellness content and track daily health habits with ease.",
    category: "App Development",
    image: "/health-wellness-mobile-app-ui.jpg",
  },
  {
    title: "Quick Qari",
    description: "An educational app for learning and recitation with audio guidance and progress tracking.",
    category: "App Development",
    image: "/education-learning-mobile-app-recitation.jpg",
  },
  {
    title: "Company Profile",
    description:
      "A modern, responsive corporate website showcasing brand identity, services, and a compelling company story.",
    category: "Web Development",
    image: "/corporate-company-profile-website-landing.jpg",
  },
  {
    title: "Aussie Take Off Website",
    description:
      "A sleek marketing site tailored for an Australian audience, optimized for performance and conversions.",
    category: "Web Development",
    image: "https://media.licdn.com/dms/image/v2/D4D33AQG3m9HW5BlrlA/productpage-image_1128_635/B4DZnUpfONJMAQ-/0/1760209270904?e=1762246800&v=beta&t=KrXG4H4N_773Zpq-ItcMLov8Z2kyCRcWUcGtfFn7T8I",
  },
]

export default function UseCasesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <p className="text-primary font-medium tracking-wider">PORTFOLIO</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">Use Cases</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Real-world projects where we wrapped ideas into intelligent, high-impact products.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((uc, idx) => (
              <Reveal key={uc.title} delay={idx * 0.05}>
                <article className="group overflow-hidden rounded-2xl bg-card shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={uc.image || "/placeholder.svg"}
                      alt={`${uc.title} preview`}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border px-3 py-1.5 rounded-full text-xs font-medium">
                      {uc.category === "App Development" ? (
                        <Smartphone className="h-4 w-4 text-primary" />
                      ) : (
                        <Globe className="h-4 w-4 text-primary" />
                      )}
                      <span className="text-foreground/80">{uc.category}</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-7">
                    <h3 className="text-xl font-bold text-foreground mb-2">{uc.title}</h3>
                    <p className="text-muted-foreground">{uc.description}</p>
                    <div className="mt-5 flex items-center gap-3 text-sm text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Production-ready quality</span>
                    </div>
                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
                      >
                        Discuss a similar project <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
