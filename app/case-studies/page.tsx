import Link from "next/link"
import { BadgeCheck, ArrowRight, Smartphone, Globe, Bot } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import AnimatedText from "@/components/ui/animated-text"

const studies = [
  {
    slug: "sehat-ke-baat",
    title: "Sehat ke Baat",
    category: "App",
    summary: "Health education app with offline-first modules and progress analytics.",
    hero: "/sehat-ke-baat-mobile-app-ui.jpg",
    highlights: ["Offline content", "Video/audio lessons", "Progress tracking"],
  },
  {
    slug: "quick-qari",
    title: "Quick Qari",
    category: "App",
    summary: "Learning and recitation app with guided loops and streaks.",
    hero: "/quick-qari-recitation-learning-app.jpg",
    highlights: ["Audio engine", "Streaks", "Low-end optimization"],
  },
  {
    slug: "handyq",
    title: "HAndyQ",
    category: "App",
    summary: "Daily productivity app for quick tasks and team reminders.",
    hero: "/handyq-productivity-app-screens.jpg",
    highlights: ["Offline reminders", "Fast search", "Team sharing"],
  },
  {
    slug: "aussie-take-off",
    title: "Aussie Take Off",
    category: "Website",
    summary: "Conversion-optimized marketing site with SEO foundations.",
    hero: "/aussie-take-off-website.jpg",
    highlights: ["SEO basics", "Great performance", "CMS sections"],
  },
  {
    slug: "company-profile",
    title: "Company Profile",
    category: "Website",
    summary: "Modern corporate website with brand story and services.",
    hero: "/company-profile-corporate-website.jpg",
    highlights: ["Brand narrative", "Service listings", "Contact funnel"],
  },
  {
    slug: "personal-gpt",
    title: "Personal GPT",
    category: "AI",
    summary: "Private, fine-tuned assistant for your documents and workflows.",
    hero: "/personal-gpt-assistant-dashboard.jpg",
    highlights: ["RAG search", "Custom tools", "Security controls"],
  },
  {
    slug: "ai-agents-platform",
    title: "AI Agents Platform",
    category: "AI",
    summary: "Composable agents for intake, triage, and automation.",
    hero: "/ai-agents-platform-workflow.jpg",
    highlights: ["Agent orchestration", "Observability", "Tool calling"],
  },
]

export default function CaseStudiesPage() {
  const iconFor = (cat: string) =>
    cat === "App" ? (
      <Smartphone className="h-4 w-4 text-primary" />
    ) : cat === "Website" ? (
      <Globe className="h-4 w-4 text-primary" />
    ) : (
      <Bot className="h-4 w-4 text-primary" />
    )

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <p className="text-primary font-medium tracking-wider">CASE STUDIES</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
                <AnimatedText text="Proven Outcomes" />
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-muted-foreground">Deep dives into projects and measurable results.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {studies.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <article className="rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[16/9]">
                  <img
                    src={s.hero || "/placeholder.svg"}
                    alt={`${s.title} cover`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border px-3 py-1.5 rounded-full text-xs font-medium">
                    {iconFor(s.category)}
                    <span className="text-foreground/80">{s.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.summary}</p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                        <BadgeCheck className="h-4 w-4 text-primary" /> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href={`/case-studies/${s.slug}`}
                      className="inline-flex items-center gap-2 text-primary hover:opacity-80"
                    >
                      Read case study <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
