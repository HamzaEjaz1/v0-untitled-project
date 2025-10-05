import type React from "react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export default function ServiceCard({ icon, title, description, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group",
        className,
      )}
    >
      <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl inline-block mb-6 group-hover:bg-primary/15 dark:group-hover:bg-primary/25 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}
