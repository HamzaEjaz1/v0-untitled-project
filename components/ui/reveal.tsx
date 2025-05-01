"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const getDirectionStyles = () => {
    switch (direction) {
      case "up":
        return "translate-y-16"
      case "down":
        return "-translate-y-16"
      case "left":
        return "translate-x-16"
      case "right":
        return "-translate-x-16"
      default:
        return "translate-y-16"
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 transform-none" : `opacity-0 ${getDirectionStyles()}`,
        className,
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
