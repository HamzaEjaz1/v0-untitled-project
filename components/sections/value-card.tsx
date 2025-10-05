import type React from "react"
import { cn } from "@/lib/utils"

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export default function ValueCard({ icon, title, description, className }: ValueCardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group",
        className,
      )}
    >
      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full inline-flex items-center justify-center mb-4 group-hover:bg-primary/15 dark:group-hover:bg-primary/25 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
  )
}
