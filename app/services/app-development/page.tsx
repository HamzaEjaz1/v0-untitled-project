"use client"

import { ArrowRight, CheckCircle2, Smartphone, Zap, Lock, BarChart3, Users, Cpu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import AnimatedText from "@/components/ui/animated-text"

export default function AppDevelopmentPage() {
  const features = [
    {
      title: "Native & Cross-Platform",
      description: "iOS, Android, and web apps built with native performance",
      icon: Smartphone,
    },
    {
      title: "Fast Performance",
      description: "Optimized for speed and responsiveness across all devices",
      icon: Zap,
    },
    {
      title: "Security First",
      description: "Enterprise-grade security and data protection",
      icon: Lock,
    },
    {
      title: "Analytics Ready",
      description: "Built-in tracking and insights for user behavior",
      icon: BarChart3,
    },
    {
      title: "User-Focused",
      description: "Intuitive design that users love to interact with",
      icon: Users,
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your user base",
      icon: Cpu,
    },
  ]

  const services = [
    "Native iOS Development (Swift)",
    "Native Android Development (Kotlin)",
    "Cross-Platform Development (React Native, Flutter)",
    "Progressive Web Applications",
    "App Store Optimization",
    "Maintenance & Support",
  ]

  return (
    <main className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <p className="text-primary font-medium tracking-wider">APP DEVELOPMENT</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
                <AnimatedText text="Intuitive Mobile & Desktop Apps" />
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                Create powerful applications that your users will love. We build native and cross-platform apps designed
                for engagement, performance, and scalability.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/contact">
                  Start Your App
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our App Development?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We deliver apps that perform, engage, and deliver results. From concept to app store launch.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <Reveal key={feature.title} delay={idx * 0.05}>
                  <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Our App Development Services</h2>
              <div className="space-y-4">
                {services.map((service, idx) => (
                  <Reveal key={service} delay={idx * 0.05}>
                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-lg font-semibold">{service}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#375CA6]/10 to-[#3767A6]/10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your App?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Let's build something amazing together.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/contact">Begin Development</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
