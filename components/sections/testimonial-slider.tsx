"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    content:
      "Wrapify Solutions delivered an exceptional web application that exceeded our expectations. Their team was professional, responsive, and truly understood our business needs.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    content:
      "Working with Wrapify Solutions on our AI agent project was a game-changer for our business. Their expertise and innovative approach helped us achieve results we didn't think were possible.",
    author: "Michael Chen",
    position: "CTO, DataDrive Solutions",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    content:
      "The UI/UX design created by Wrapify Solutions has significantly improved our user engagement. Their team was creative, professional, and delivered stunning results.",
    author: "Emily Rodriguez",
    position: "Head of Product, GlobalServe",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden relative rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-8 md:p-12">
        <div className="absolute top-6 left-6 text-primary">
          <Quote className="h-12 w-12 opacity-20" />
        </div>

        <div className="relative z-10">
          <div className={cn("transition-opacity duration-500", isAnimating ? "opacity-0" : "opacity-100")}>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 italic">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].author}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">{testimonials[currentIndex].author}</h4>
                <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true)
              setCurrentIndex(index)
            }}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex ? "bg-primary w-8" : "bg-gray-300 dark:bg-gray-600 hover:bg-primary/60",
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -left-4 -translate-y-1/2 rounded-full bg-white dark:bg-gray-800 shadow-md hidden md:flex"
        onClick={goToPrevious}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -right-4 -translate-y-1/2 rounded-full bg-white dark:bg-gray-800 shadow-md hidden md:flex"
        onClick={goToNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
