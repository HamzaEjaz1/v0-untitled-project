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
    title: "HandyQ - Productivity Mobile Application",
    description:
      "A feature-rich productivity and task management mobile application for iOS and Android. HandyQ helps professionals organize their work, collaborate with teams, and boost productivity with intelligent automation features.",
    category: "App Development",
    image:
      "https://media.licdn.com/dms/image/v2/D4D33AQG-eXpqTJuCnw/productpage-image_1128_635/B4DZm_ioHaJYAM-/0/1759855152092?e=1768154400&v=beta&t=TMeOiFfNHyTpQzPosCfIwScUIz9nhBnZImX21AXr0Ok",
  },
  {
    title: "Sehat ke Baat - Health & Wellness Mobile App",
    description:
      "A comprehensive health-focused mobile application enabling users to access wellness content, track health metrics, and maintain daily health habits. Built with user-centric design for better health outcomes.",
    category: "App Development",
    image:
      "https://media.licdn.com/dms/image/v2/D4D33AQF-Vf92XwaTDQ/productpage-image_1128_635/B4DZnPziu_GQAM-/0/1760128021414?e=1768154400&v=beta&t=EVC_lWk8JmJth387lljI8k1GQSeoyihkm4vd_Lkqkq4",
  },
  {
    title: "Quick Qari - Learning & Recitation App",
    description:
      "An innovative educational mobile app designed for learning and Islamic recitation. Features audio guidance, progress tracking, and interactive learning modules for users of all skill levels.",
    category: "App Development",
    image:
      "https://media.licdn.com/dms/image/v2/D4D33AQEE8oZpIQlZHA/productpage-image_1128_635/B4DZm_idTtKQAM-/0/1759855106411?e=1768154400&v=beta&t=IKP_tn9AUKgqRhZrgUtY2oXjBdsEhDOLWDt1eQYBxLk",
  },
  {
    title: "Modern Corporate Website",
    description:
      "A modern, responsive corporate website showcasing brand identity, company services, and compelling company story. Built with latest web technologies for optimal SEO performance and user engagement.",
    category: "Web Development",
    image:
      "https://media.licdn.com/dms/image/v2/D4D33AQHRG_v7UFy-5g/productpage-image_1128_635/B4DZocyE8WJUAM-/0/1761419482367?e=1768154400&v=beta&t=PK3NoASVaVT7ESCin2WYoTVwVtv3rjcojWv37QoB91U",
  },
  {
    title: "Aussie Take Off - Marketing Website",
    description:
      "A sleek, high-performance marketing website optimized for Australian audiences. Features conversion-focused design, fast loading times, and SEO optimization for maximum online visibility and customer acquisition.",
    category: "Web Development",
    image:
      "https://media.licdn.com/dms/image/v2/D4D33AQG3m9HW5BlrlA/productpage-image_1128_635/B4DZnUpfONJMAQ-/0/1760209270904?e=1768154400&v=beta&t=NjuPzQz6F1IJOMIgR0NSm6v0fa8K-zPRceDg3HC3PQQ",
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
                      alt={`${uc.title} - ${uc.category} project showcase`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border px-3 py-1.5 rounded-full text-xs font-medium shadow-md">
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
