import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Award, Rocket, Wrench, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const DATA = {
  "sehat-ke-baat": {
    title: "Sehat ke Baat",
    type: "App",
    summary: "A health education app delivering bite-sized modules with video, audio, bookmarks, and offline mode.",
    hero: "/sehat-ke-baat-app-screens.jpg",
    stack: ["Next.js", "React Native", "TypeScript", "Supabase", "Vercel"],
    results: ["3x lesson completion", "Sub-200ms transitions", "Offline playback"],
    features: ["Offline sync", "Audio/video modules", "Progress analytics"],
  },
  "quick-qari": {
    title: "Quick Qari",
    type: "App",
    summary: "Learning and recitation app with guided audio loops, streaks, and spaced repetition for mastery.",
    hero: "/quick-qari-recitation-learning-app.jpg",
    stack: ["Next.js", "React Native", "Zustand", "Edge media", "Vercel"],
    results: ["2.4x DAU in 6 weeks", "Audio latency < 80ms", "Optimized for low-end devices"],
    features: ["Audio engine", "Profiles & streaks", "Spaced repetition"],
  },
  handyq: {
    title: "HAndyQ",
    type: "App",
    summary: "Daily productivity app for quick tasks, timers, and team reminders—built to work offline-first.",
    hero: "/handyq-productivity-app-ui.jpg",
    stack: ["Next.js", "React Native", "SQLite", "Push Notifications", "Vercel"],
    results: ["28% faster task completion", "Zero-downtime sync", "PWA Lighthouse scores in green"],
    features: ["Offline reminders", "Fast search", "Team sharing"],
  },
  "aussie-take-off": {
    title: "Aussie Take Off",
    type: "Website",
    summary: "Conversion-optimized marketing site with CMS content, SEO foundations, and A-grade performance.",
    hero: "/aussie-take-off-website-landing.jpg",
    stack: ["Next.js", "Tailwind CSS", "Vercel", "On-page SEO", "Image Optimization"],
    results: ["+38% sign-ups in 30 days", "Core Web Vitals green", "Easy publishing via CMS"],
    features: ["CMS sections", "SEO & analytics", "Fast TLCP & TTFB"],
  },
  "company-profile": {
    title: "Company Profile",
    type: "Website",
    summary: "A modern corporate website with brand story, services, and lead capture.",
    hero: "/company-profile-corporate-website-ui.jpg",
    stack: ["Next.js", "Tailwind CSS", "SEO", "Vercel"],
    results: ["Improved engagement", "Faster load times", "Clear service funnels"],
    features: ["Brand narrative", "Service sections", "Contact forms"],
  },
  "personal-gpt": {
    title: "Personal GPT",
    type: "AI",
    summary: "A private, fine-tuned assistant for documents, emails, and knowledge retrieval with custom tools.",
    hero: "/personal-gpt-assistant-dashboard-ui.jpg",
    stack: ["Next.js", "AI SDK", "Vector DB", "RAG", "Vercel"],
    results: ["-45% time spent searching docs", "Higher response accuracy", "Role-based access"],
    features: ["RAG retrieval", "Tool calling", "Secure spaces"],
  },
  "ai-agents-platform": {
    title: "AI Agents Platform",
    type: "AI",
    summary: "Composable agents for intake, triage, automation, and customer support with observability.",
    hero: "/ai-agents-platform-builder-ui.jpg",
    stack: ["Next.js", "AI SDK", "Workers", "Queues", "Vercel"],
    results: ["Reduced handle time", "Automated workflows", "Audit trails"],
    features: ["Agent orchestration", "Observability", "Tool integrations"],
  },
} as const

type Slug = keyof typeof DATA

export function generateMetadata({ params }: { params: { slug: Slug } }): Metadata {
  const record = DATA[params.slug]
  if (!record) return {}
  return {
    title: `${record.title} - Case Study | Wrapify Solutions`,
    description: record.summary,
  }
}

export default function CaseStudyPage({ params }: { params: { slug: Slug } }) {
  const cs = DATA[params.slug as Slug]
  if (!cs) return notFound()

  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to all case studies
          </Link>

          <div className="mt-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Reveal>
                <p className="text-primary font-medium">{cs.type}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold mt-2">{cs.title}</h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 text-muted-foreground">{cs.summary}</p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {cs.stack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-sm bg-primary/10 text-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal direction="right">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                <img
                  src={cs.hero || "/placeholder.svg"}
                  alt={`${cs.title} hero image`}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto grid md:grid-cols-2 gap-10">
          <Reveal>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Key Features</h2>
              </div>
              <ul className="space-y-2">
                {cs.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Results</h2>
              </div>
              <ul className="space-y-2">
                {cs.results.map((r) => (
                  <li key={r} className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-foreground/80">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Gallery</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n, i) => (
              <Reveal key={n} delay={i * 0.05}>
                <div className="rounded-xl overflow-hidden border border-border shadow-md">
                  <img
                    src={`/placeholder.svg?height=600&width=900&query=${encodeURIComponent(`${cs.title} screen ${n}`)}`}
                    alt={`${cs.title} screen ${n}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
