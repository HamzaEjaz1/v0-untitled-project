import ProjectCard from "@/components/sections/project-card"
import { Reveal } from "@/components/ui/reveal"
import AnimatedText from "@/components/ui/animated-text"

const projects = [
  {
    title: "Sehat ke Baat",
    slug: "sehat-ke-baat",
    category: "App",
    summary: "Health education app with bite-sized lessons, bookmarking, and offline mode.",
    image: "/sehat-ke-baat-health-education-mobile-app-ui.jpg",
  },
  {
    title: "Quick Qari",
    slug: "quick-qari",
    category: "App",
    summary: "Learning and recitation app with guided audio loops and progress tracking.",
    image: "/quick-qari-learning-recitation-mobile-app.jpg",
  },
  {
    title: "HAndyQ",
    slug: "handyq",
    category: "App",
    summary: "Daily productivity app for quick tasks, timers, and team reminders.",
    image: "/handyq-productivity-mobile-app-screens.jpg",
  },
  {
    title: "Company Profile Website",
    slug: "company-profile",
    category: "Website",
    summary: "A modern corporate website with brand story, services, and contact.",
    image: "/company-profile-corporate-website-landing.jpg",
  },
  {
    title: "Aussie Take Off",
    slug: "aussie-take-off",
    category: "Website",
    summary: "Conversion-optimized marketing website tailored for Australian audiences.",
    image: "/aussie-take-off-website-landing.jpg",
  },
  {
    title: "Personal GPT",
    slug: "personal-gpt",
    category: "AI",
    summary: "A private, fine-tuned assistant for documents, emails, and knowledge retrieval.",
    image: "/personal-gpt-ai-assistant-dashboard.jpg",
  },
  {
    title: "AI Agents Platform",
    slug: "ai-agents-platform",
    category: "AI",
    summary: "Composable agents for intake, triage, automation, and customer support.",
    image: "/ai-agents-platform-workflow-builder.jpg",
  },
] as const

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <p className="text-primary font-medium tracking-wider">PROJECTS</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
                <AnimatedText text="Selected Work" />
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-muted-foreground">
                A snapshot of apps, AI solutions, and websites we’ve shipped.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <ProjectCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
