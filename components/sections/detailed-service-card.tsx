import type React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface DetailedServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  className?: string
}

export default function DetailedServiceCard({
  icon,
  title,
  description,
  features,
  className,
}: DetailedServiceCardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group",
        className,
      )}
    >
      <div className="flex items-start gap-6">
        <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-xl group-hover:bg-green-200 dark:group-hover:bg-green-800/40 transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
