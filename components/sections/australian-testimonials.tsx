"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const australianTestimonials = [
  {
    id: 1,
    content:
      "Wrapify Solutions transformed our online presence completely, mate. Their team understood the Australian market perfectly and delivered a website that really resonates with our customers. Couldn't be happier!",
    author: "James Mitchell",
    position: "Founder, Sydney Digital Co.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    rating: 5,
  },
  {
    id: 2,
    content:
      "The AI agents Wrapify built for us have been an absolute game-changer. We've cut our customer support response time in half. Fair dinkum, best investment we've made for the business!",
    author: "Emma Thompson",
    position: "CEO, Brisbane Tech Solutions",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Their UI/UX design team is top-notch. They created an app that our users absolutely love. The attention to detail and user experience is brilliant. Highly recommend Wrapify to any Australian business!",
    author: "David Chen",
    position: "Managing Director, Melbourne Innovations",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    rating: 5,
  },
  {
    id: 4,
    content:
      "We partnered with Wrapify for our mobile app development and the results are extraordinary. Quick turnaround, excellent communication, and a product that exceeds expectations. Legends!",
    author: "Sophie Anderson",
    position: "Product Manager, Perth Startups Hub",
    avatar:
      "https://images.unsplash.com/photo-1507876466836-bc7cc6d5b0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    rating: 5,
  },
  {
    id: 5,
    content:
      "The chatbot solution they developed for our business has been fantastic. It handles inquiries seamlessly and our customers love the instant responses. Definitely worth every cent!",
    author: "Michael O'Sullivan",
    position: "Operations Lead, Adelaide Retail Group",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    rating: 5,
  },
  {
    id: 6,
    content:
      "Working with Wrapify Solutions has been a ripper! From concept to launch, they were professional, responsive, and delivered exceptional results. They truly understand what it takes to succeed in today's digital landscape.",
    author: "Laura Bennett",
    position: "Director of Digital Strategy, Gold Coast Media",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
    rating: 5,
  },
]

export default function AustralianTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? australianTestimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === australianTestimonials.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(goToNext, 6000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#375CA6]/15 to-transparent rounded-full blur-3xl opacity-60 animate-float-pattern"></div>
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#3767A6]/15 to-transparent rounded-full blur-3xl opacity-60 animate-float-pattern"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10">
        {/* Header with modern gradient text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#375CA6] via-[#3767A6] to-[#375CA6] animate-gradient-shift">
            Highly Recommended by Australian Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover what industry leaders across Australia say about their experience partnering with Wrapify Solutions
          </p>
        </div>

        {/* Main Testimonial Card with modern design */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-lg shadow-2xl p-8 md:p-12 border border-white/20 dark:border-gray-700/30 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-[#375CA6]/20 via-transparent to-[#3767A6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            {/* Decorative quote background */}
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
              <Quote className="h-40 w-40" />
            </div>

            {/* Star rating with enhanced animation */}
            <div className="flex gap-1 mb-6 relative z-10">
              {[...Array(australianTestimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-amber-400 text-amber-400 transition-all duration-300 transform"
                  style={{
                    animation: `bounce 0.6s ease-in-out ${i * 0.1}s infinite`,
                  }}
                />
              ))}
            </div>

            {/* Content with smooth animation */}
            <div className="relative z-10">
              <div
                className={cn(
                  "transition-all duration-500 transform",
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0",
                )}
              >
                <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 font-medium mb-8 italic leading-relaxed">
                  "{australianTestimonials[currentIndex].content}"
                </p>

                {/* Author info with enhanced hover effect */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-3 border-gradient-to-r from-[#375CA6] to-[#3767A6] group-hover:shadow-lg group-hover:shadow-[#375CA6]/50 transition-all duration-300">
                    <img
                      src={australianTestimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={australianTestimonials[currentIndex].author}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {australianTestimonials[currentIndex].author}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                      {australianTestimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern dots indicator */}
        <div className="flex justify-center gap-3 mb-8">
          {australianTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true)
                setCurrentIndex(index)
              }}
              className={cn(
                "transition-all duration-300 rounded-full backdrop-blur-sm",
                index === currentIndex
                  ? "bg-gradient-to-r from-[#375CA6] to-[#3767A6] w-8 h-3 shadow-lg shadow-[#375CA6]/50"
                  : "bg-gray-300/50 dark:bg-gray-600/50 w-3 h-3 hover:bg-[#375CA6]/60",
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation buttons with modern design */}
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="rounded-full bg-gradient-to-r from-[#375CA6]/10 to-[#3767A6]/10 hover:from-[#375CA6]/20 hover:to-[#3767A6]/20 border-[#375CA6]/30 text-[#375CA6] hover:text-[#375CA6] transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="rounded-full bg-gradient-to-r from-[#375CA6]/10 to-[#3767A6]/10 hover:from-[#375CA6]/20 hover:to-[#3767A6]/20 border-[#375CA6]/30 text-[#375CA6] hover:text-[#375CA6] transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  )
}
