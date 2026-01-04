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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

        {/* Enhanced floating blobs */}
        <div className="decorative-blob decorative-blob-1"></div>
        <div className="decorative-blob decorative-blob-2"></div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#375CA6]/20 to-[#3767A6]/10 rounded-full blur-3xl animate-float-pattern"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#3767A6]/15 to-[#375CA6]/5 rounded-full blur-3xl animate-float-pattern"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <Reveal>
                <p className="text-primary font-medium tracking-wider animate-slide-in-left">
                  WELCOME TO WRAPIFY SOLUTIONS - SERVING USA & QATAR
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Expert Web Development, App Development & <br />
                  <span className="gradient-text-animate">
                    <AnimatedText text="AI Automation Solutions" />
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl animate-slide-in-left">
                  Wrapify Solutions is your trusted partner for custom web development, mobile app development, AI
                  agents, chatbot development, and digital transformation. We deliver innovative software solutions for
                  businesses across USA and Qatar, helping you build scalable, high-performance applications that drive
                  growth and empower your organization.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground btn-glow animate-glow-pulse"
                    asChild
                  >
                    <Link href="/services">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:scale-105 transition-transform bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Get a Free Consultation</Link>
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="flex-1 relative">
              <Reveal direction="right">
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer animate-scale-in">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#375CA6]/20 to-[#3767A6]/20 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Digital Solutions"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20"></div>
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

      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute top-32 left-0 w-96 h-96 bg-gradient-to-br from-[#375CA6]/10 to-transparent rounded-full blur-3xl opacity-50 animate-float-pattern"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container px-4 mx-auto relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-animate">Our Core Services</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Comprehensive digital solutions tailored for businesses in USA and Qatar. From web applications to
                AI-powered automation, we provide expert software development and IT services.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="card-hover-lift">
                <ServiceCard
                  icon={<Code className="h-8 w-8 text-primary" />}
                  title="Web Development"
                  description="Custom responsive websites, progressive web apps, and e-commerce platforms. Our web development services deliver fast, secure, and SEO-optimized solutions for businesses in the USA and Qatar."
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="card-hover-lift">
                <ServiceCard
                  icon={<Smartphone className="h-8 w-8 text-primary" />}
                  title="App Development"
                  description="Native iOS and Android applications, cross-platform development, and desktop applications. Build powerful mobile apps that engage users and drive business growth."
                />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="card-hover-lift">
                <ServiceCard
                  icon={<Bot className="h-8 w-8 text-primary" />}
                  title="AI Agents & Automation"
                  description="Intelligent AI agents for process automation, data analysis, and autonomous decision-making. Streamline your operations with cutting-edge artificial intelligence solutions."
                />
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="card-hover-lift">
                <ServiceCard
                  icon={<MessageSquare className="h-8 w-8 text-primary" />}
                  title="Chatbot Development"
                  description="AI-powered customer service chatbots, virtual assistants, and 24/7 automated support. Enhance customer engagement and reduce support costs with intelligent conversational AI."
                />
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="card-hover-lift">
                <ServiceCard
                  icon={<Palette className="h-8 w-8 text-primary" />}
                  title="UI/UX Design"
                  description="User-centered design, interface design, and prototyping. Create beautiful, intuitive digital experiences that users love and businesses trust."
                />
              </div>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="card-hover-lift">
                <ServiceCard
                  icon={<Zap className="h-8 w-8 text-primary" />}
                  title="AI Automation Services"
                  description="Business process automation, workflow optimization, and intelligent automation solutions. Transform your business with AI-powered efficiency and innovation."
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-animate">
                Why Choose Wrapify Solutions?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                We combine innovation, expertise, and dedication to deliver exceptional results that exceed
                expectations.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer card-hover-lift border border-transparent hover:border-primary/20">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 mb-6 group-hover:scale-110 transition-transform animate-bounce-subtle">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Years of experience delivering successful projects across diverse industries with measurable results.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer card-hover-lift border border-transparent hover:border-primary/20">
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 mb-6 group-hover:scale-110 transition-transform animate-bounce-subtle"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Security First</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enterprise-grade security and compliance standards to protect your data and maintain user trust.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer card-hover-lift border border-transparent hover:border-primary/20">
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 mb-6 group-hover:scale-110 transition-transform animate-bounce-subtle"
                  style={{ animationDelay: "1s" }}
                >
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Agile methodology ensures quick turnaround times without compromising on quality or attention to
                  detail.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#375CA6]/10 to-[#3767A6]/10"></div>
        <div
          className="absolute right-0 top-1/2 w-96 h-96 bg-gradient-to-br from-[#3767A6]/20 to-transparent rounded-full blur-3xl animate-pulse-glow"
          style={{ marginTop: "-192px" }}
        ></div>
        <div className="absolute left-0 top-1/4 w-80 h-80 bg-gradient-to-br from-[#375CA6]/15 to-transparent rounded-full blur-3xl animate-float-pattern"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-animate">
                Ready to Wrap Your Ideas into Reality?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Partner with Wrapify Solutions to create digital experiences that wrap innovation, design, and
                intelligence into one transformative solution. Let's build something extraordinary together.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground btn-glow animate-glow-pulse hover:scale-110 transition-transform"
                asChild
              >
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
