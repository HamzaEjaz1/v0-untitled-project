import Link from "next/link"
import { ArrowRight, Code, Smartphone, Bot, MessageSquare, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import StatsCounter from "@/components/sections/stats-counter"
import TestimonialSlider from "@/components/sections/testimonial-slider"
import ServiceCard from "@/components/sections/service-card"
import AnimatedText from "@/components/ui/animated-text"
import { Reveal } from "@/components/ui/reveal"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <Reveal>
                <p className="text-green-600 dark:text-green-400 font-medium tracking-wider">
                  WELCOME TO WRAPIFY SOLUTIONS
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  We Wrap Ideas into <br />
                  <AnimatedText text="Intelligent Digital Solutions" />
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                  Welcome to Wrapify Solutions, where creativity meets technology to deliver transformative digital
                  experiences. We specialize in turning complex challenges into seamless, user-friendly, and scalable
                  solutions.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                    <Link href="/services">
                      Explore Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="flex-1 relative">
              <Reveal direction="right">
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Digital Solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <Reveal>
            <StatsCounter />
          </Reveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We offer comprehensive digital solutions to help businesses thrive in the modern digital landscape.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <ServiceCard
                icon={<Code className="h-8 w-8 text-green-600" />}
                title="Web Development"
                description="Scalable, high-performance websites tailored to your brand and business needs."
              />
            </Reveal>
            <Reveal delay={0.2}>
              <ServiceCard
                icon={<Smartphone className="h-8 w-8 text-green-600" />}
                title="App Development"
                description="Intuitive mobile and desktop applications designed for impact and usability."
              />
            </Reveal>
            <Reveal delay={0.3}>
              <ServiceCard
                icon={<Bot className="h-8 w-8 text-green-600" />}
                title="AI Agents"
                description="Smart, autonomous systems to streamline processes and decision-making."
              />
            </Reveal>
            <Reveal delay={0.4}>
              <ServiceCard
                icon={<MessageSquare className="h-8 w-8 text-green-600" />}
                title="Chatbot Development"
                description="Intelligent chatbots to enhance customer engagement and automate support."
              />
            </Reveal>
            <Reveal delay={0.5}>
              <ServiceCard
                icon={<Palette className="h-8 w-8 text-green-600" />}
                title="UI/UX Designing"
                description="Human-centered designs that blend functionality with stunning visuals."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <TestimonialSlider />
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Wrap Your Ideas into Reality?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Partner with Wrapify Solutions to create digital experiences that wrap innovation, design, and
                intelligence into one solution.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link href="/contact">
                  Let's Build Together
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
