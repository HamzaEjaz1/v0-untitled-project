"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export default function AnimatedText({ text, className, once = true }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text, isVisible])

  useEffect(() => {
    if (!once || !isComplete) return

    const interval = setInterval(() => {
      // Add a blinking cursor effect when complete
      setDisplayedText((prev) => (prev.endsWith("_") ? prev.slice(0, -1) : `${text}_`))
    }, 500)

    return () => clearInterval(interval)
  }, [isComplete, once, text])

  return (
    <span
      className={cn(
        "text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400",
        className,
      )}
    >
      {displayedText}
    </span>
  )
}
