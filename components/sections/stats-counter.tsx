"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Users, Code, Award, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatProps {
  icon: React.ReactNode
  value: number
  label: string
  duration?: number
  className?: string
}

const StatItem = ({ icon, value, label, duration = 2000, className }: StatProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    const incrementTime = duration / end
    let timer: NodeJS.Timeout

    const updateCount = () => {
      start += 1
      setCount(start)
      if (start < end) {
        timer = setTimeout(updateCount, incrementTime)
      }
    }

    timer = setTimeout(updateCount, incrementTime)

    return () => clearTimeout(timer)
  }, [value, duration])

  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-4">{icon}</div>
      <h3 className="text-4xl font-bold mb-2">{count}+</h3>
      <p className="text-gray-600 dark:text-gray-300">{label}</p>
    </div>
  )
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <StatItem icon={<Briefcase className="h-8 w-8 text-green-600" />} value={50} label="Projects Completed" />
      <StatItem icon={<Users className="h-8 w-8 text-green-600" />} value={25} label="Happy Clients" />
      <StatItem icon={<Code className="h-8 w-8 text-green-600" />} value={10000} label="Lines of Code" />
      <StatItem icon={<Award className="h-8 w-8 text-green-600" />} value={15} label="Awards Won" />
    </div>
  )
}
