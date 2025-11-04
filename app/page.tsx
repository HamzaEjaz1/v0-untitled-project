import Link from "next/link"
import { ArrowRight, Code, Smartphone, Bot, MessageSquare, Palette, Zap, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import StatsCounter from "@/components/sections/stats-counter"
import ServiceCard from "@/components/sections/service-card"
import AnimatedText from "@/components/ui/animated-text"
import { Reveal } from "@/components/ui/reveal"
import AustralianTestimonials from "@/components/sections/australian-testimonials"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with animated background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#375CA6]/20 to-[#3767A6]/10 rounded-full blur-3xl animate-float-pattern"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#3767A6]/15 to-[#375CA6]/5 rounded-full blur-3xl animate-float-pattern"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <Reveal>
                <p className="text-primary font-medium tracking-wider">WELCOME TO WRAPIFY SOLUTIONS</p>
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
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
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
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#375CA6]/20 to-[#3767A6]/20 z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Digital Solutions"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <Reveal>
            <StatsCounter />
          </Reveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute top-32 left-0 w-96 h-96 bg-gradient-to-br from-[#375CA6]/10 to-transparent rounded-full blur-3xl opacity-50 animate-float-pattern"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container px-4 mx-auto relative z-10">
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
                icon={<Code className="h-8 w-8 text-primary" />}
                title="Web Development"
                description="Scalable, high-performance websites tailored to your brand and business needs."
              />
            </Reveal>
            <Reveal delay={0.2}>
              <ServiceCard
                icon={<Smartphone className="h-8 w-8 text-primary" />}
                title="App Development"
                description="Intuitive mobile and desktop applications designed for impact and usability."
              />
            </Reveal>
            <Reveal delay={0.3}>
              <ServiceCard
                icon={<Bot className="h-8 w-8 text-primary" />}
                title="AI Agents"
                description="Smart, autonomous systems to streamline processes and decision-making."
              />
            </Reveal>
            <Reveal delay={0.4}>
              <ServiceCard
                icon={<MessageSquare className="h-8 w-8 text-primary" />}
                title="Chatbot Development"
                description="Intelligent chatbots to enhance customer engagement and automate support."
              />
            </Reveal>
            <Reveal delay={0.5}>
              <ServiceCard
                icon={<Palette className="h-8 w-8 text-primary" />}
                title="UI/UX Designing"
                description="Human-centered designs that blend functionality with stunning visuals."
              />
            </Reveal>
            <Reveal delay={0.6}>
              <ServiceCard
                icon={<Zap className="h-8 w-8 text-primary" />}
                title="Performance Optimization"
                description="Lightning-fast solutions that deliver exceptional user experiences."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Wrapify Solutions?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We combine innovation, expertise, and dedication to deliver exceptional results.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Years of experience delivering successful projects across diverse industries.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Security First</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enterprise-grade security and compliance standards to protect your data.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Agile methodology ensures quick turnaround without compromising quality.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div
          className="absolute top-32 right-0 w-96 h-96 bg-gradient-to-br from-[#3767A6]/15 to-transparent rounded-full blur-3xl animate-float-pattern"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container px-4 mx-auto relative z-10">
          <AustralianTestimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#375CA6]/10 to-[#3767A6]/10"></div>
        <div
          className="absolute right-0 top-1/2 w-96 h-96 bg-gradient-to-br from-[#3767A6]/20 to-transparent rounded-full blur-3xl animate-pulse-glow"
          style={{ marginTop: "-192px" }}
        ></div>

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
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
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
