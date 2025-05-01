import Link from "next/link"
import { ArrowRight, Code, Database, Lightbulb, MessageSquare, Sparkles } from "lucide-react"
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
                <p className="text-pink-600 dark:text-pink-400 font-medium tracking-wider">WELCOME TO HAMHIB CODERS</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  We Transform <br />
                  <AnimatedText text="Data and Web into Solutions" />
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                  Revolutionize your digital future with HamHib Coders! Our team of experts is passionate about
                  leveraging the latest technologies to drive business success.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white" asChild>
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
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Digital Transformation"
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
                We offer cutting-edge solutions across various domains to help businesses thrive in the digital era.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <ServiceCard
                icon={<Code className="h-8 w-8 text-pink-600" />}
                title="Web Development"
                description="Custom web applications designed to meet your unique business needs with modern technologies."
              />
            </Reveal>
            <Reveal delay={0.2}>
              <ServiceCard
                icon={<Database className="h-8 w-8 text-pink-600" />}
                title="Data Science"
                description="Transforming data into actionable insights for strategic decision-making and business growth."
              />
            </Reveal>
            <Reveal delay={0.3}>
              <ServiceCard
                icon={<Lightbulb className="h-8 w-8 text-pink-600" />}
                title="Machine Learning"
                description="Building systems that adapt and learn from data to enhance efficiency and automation."
              />
            </Reveal>
            <Reveal delay={0.4}>
              <ServiceCard
                icon={<Sparkles className="h-8 w-8 text-pink-600" />}
                title="Generative AI"
                description="Creating innovative content and solutions with AI-driven creativity and intelligence."
              />
            </Reveal>
            <Reveal delay={0.5}>
              <ServiceCard
                icon={<MessageSquare className="h-8 w-8 text-pink-600" />}
                title="Chatbots"
                description="Implementing intelligent chatbots to improve customer interactions and automate responses."
              />
            </Reveal>
            <Reveal delay={0.6}>
              <ServiceCard
                icon={<Sparkles className="h-8 w-8 text-pink-600" />}
                title="Deep Learning"
                description="Developing sophisticated models for complex problem-solving and pattern recognition."
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
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Partner with HamHib Coders to leverage cutting-edge technology solutions that drive growth and
                innovation.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white" asChild>
                <Link href="/contact">
                  Get in Touch
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
