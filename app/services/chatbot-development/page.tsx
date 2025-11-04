"use client"

import { ArrowRight, CheckCircle2, MessageSquare, Zap, Lock, BarChart3, Users, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import AnimatedText from "@/components/ui/animated-text"

export default function ChatbotDevelopmentPage() {
  const features = [
    {
      title: "24/7 Customer Support",
      description: "Always-on support without the overhead of large support teams",
      icon: Clock,
    },
    {
      title: "Natural Conversations",
      description: "AI that understands context and provides human-like responses",
      icon: MessageSquare,
    },
    {
      title: "Instant Resolution",
      description: "Quick answers that reduce support tickets and costs",
      icon: Zap,
    },
    {
      title: "Data Security",
      description: "Enterprise-grade encryption and compliance standards",
      icon: Lock,
    },
    {
      title: "Customer Insights",
      description: "Understand customer needs through conversation analytics",
      icon: BarChart3,
    },
    {
      title: "Multi-Channel",
      description: "Deploy across web, mobile, WhatsApp, Facebook, and more",
      icon: Users,
    },
  ]

  const services = [
    "Customer Service Chatbots",
    "Lead Generation & Qualification",
    "AI Virtual Assistants",
    "Multi-Language Support",
    "Integration with CRM & Help Desk",
    "Continuous Learning & Improvement",
  ]

  return (
    <main className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <p className="text-primary font-medium tracking-wider">CHATBOT DEVELOPMENT</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
                <AnimatedText text="Intelligent Conversational AI" />
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                Engage customers with intelligent chatbots that provide instant support, qualify leads, and enhance
                customer experiences. Available 24/7 across your favorite platforms.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/contact">
                  Deploy Your Chatbot
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Chatbots?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Transform customer engagement with AI-powered conversations that feel natural, intelligent, and helpful.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Chatbot Services</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Customer Support?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Let's create a chatbot that delights your customers and reduces costs.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/contact">Get Your Chatbot</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
