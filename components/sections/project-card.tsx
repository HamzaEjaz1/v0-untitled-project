import Link from "next/link"
import { Smartphone, Globe, Bot } from "lucide-react"
import { cn } from "@/lib/utils"

type Category = "App" | "Website" | "AI"

export interface ProjectCardProps {
  title: string
  slug?: string
  category: Category
  summary: string
  href?: string
  image: string
  className?: string
}

export default function ProjectCard({ title, slug, category, summary, href, image, className }: ProjectCardProps) {
  const Icon = category === "App" ? Smartphone : category === "Website" ? Globe : Bot
  const link = href ?? (slug ? `/case-studies/${slug}` : "/contact")

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl bg-card shadow-lg border border-border hover:shadow-xl transition-all duration-300",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image || "/placeholder.svg?height=400&width=640&query=project+cover"}
          alt={`${title} preview image`}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-border px-3 py-1.5 rounded-full text-xs font-medium">
          <Icon className="h-4 w-4 text-primary" />
          <span className="text-foreground/80">{category}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-muted-foreground">{summary}</p>
        <div className="mt-6">
          <Link href={link} className="inline-flex items-center gap-2 text-primary hover:opacity-80">
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}
