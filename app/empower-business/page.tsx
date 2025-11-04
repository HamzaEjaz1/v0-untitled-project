"use client"

import { ArrowRight, Rocket, TrendingUp, Zap, Shield, Users, Target, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import AnimatedText from "@/components/ui/animated-text"

export default function EmpowerBusinessPage() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We understand your business goals, challenges, and opportunities. Through collaborative discovery sessions, we develop a strategic roadmap for digital transformation.",
      icon: Lightbulb,
    },
    {
      number: "02",
      title: "Design & Planning",
      description:
        "Our team designs tailored solutions that align with your vision. We create detailed plans, prototypes, and timelines to ensure successful execution.",
      icon: Target,
    },
    {
      number: "03",
      title: "Build & Develop",
      description:
        "We build world-class digital solutions using cutting-edge technologies. Regular updates and transparent communication keep you informed every step of the way.",
      icon: Rocket,
    },
    {
      number: "04",
      title: "Launch & Optimize",
      description:
        "We ensure a smooth launch and provide continuous optimization. Your success is our success, and we're committed to delivering measurable results.",
      icon: Zap,
    },
  ]

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate processes and reduce manual work to boost productivity and reduce costs.",
      icon: Zap,
    },
    {
      title: "Better Customer Experience",
      description: "Delight customers with intuitive, fast, and reliable digital experiences.",
      icon: Users,
    },
    {
      title: "Data-Driven Decisions",
      description: "Gain actionable insights to make informed business decisions with confidence.",
      icon: TrendingUp,
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with innovative technology solutions.",
      icon: Rocket,
    },
    {
      title: "Scalable Growth",
      description: "Build solutions that grow with your business without compromising quality.",
      icon: TrendingUp,
    },
    {
      title: "Peace of Mind",
      description: "Enterprise-grade security and support keep your digital assets safe.",
      icon: Shield,
    },
  ]

  return (
    <main className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <p className="text-primary font-medium tracking-wider">HOW WE EMPOWER BUSINESS</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
                <AnimatedText text="Transform Your Business with Digital Innovation" />
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                At Wrapify Solutions, we don't just build digital products—we empower your business to thrive in the
                digital age. We partner with you to create solutions that drive growth, efficiency, and customer
                satisfaction.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/contact">
                  Let's Transform Together
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Approach</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We follow a structured methodology to ensure your digital transformation succeeds from start to finish.
              </p>
            </div>
          </Reveal>

          <div className="space-y-8 max-w-4xl mx-auto">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <Reveal key={step.number} delay={idx * 0.1}>
                  <div className="flex gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary mb-1">{step.number}</div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
              <p className="text-gray-600 dark:text-gray-300">
                When you partner with Wrapify Solutions, you gain access to expertise that drives real business results.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <Reveal key={benefit.title} delay={idx * 0.05}>
                  <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Partnership Matters */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Partnership Matters</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Reveal delay={0.1}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Dedicated Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your success is our priority. We provide ongoing support and optimization to ensure your digital
                    solutions continue to deliver value long after launch.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Latest Technology</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We stay at the forefront of technology trends, ensuring your solutions leverage the latest
                    innovations and best practices in the industry.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Scalable Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We build for growth. Your solutions are architected to scale with your business needs without
                    compromising performance or reliability.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Transparent Communication</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We believe in open, honest communication. Regular updates, clear timelines, and proactive feedback
                    ensure you're always in the loop.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#375CA6]/10 to-[#3767A6]/10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Empower Your Business?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Let's discuss how Wrapify Solutions can help you achieve your business goals through digital innovation
                and transformation.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/contact">
                  Schedule Your Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
