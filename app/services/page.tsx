import { Code, Smartphone, Bot, MessageSquare, Palette } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import AnimatedText from "@/components/ui/animated-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DetailedServiceCard from "@/components/sections/detailed-service-card"

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <p className="text-green-600 dark:text-green-400 font-medium tracking-wider">OUR SERVICES</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
                <AnimatedText text="Comprehensive Digital Solutions" />
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                At Wrapify Solutions, we offer comprehensive digital solutions to help businesses thrive in the modern
                digital landscape. Our expertise spans across multiple domains to deliver exceptional results.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <DetailedServiceCard
                icon={<Code className="h-10 w-10 text-green-600" />}
                title="Web Development"
                description="Scalable, high-performance websites tailored to your brand and business needs."
                features={[
                  "Responsive web design",
                  "Progressive web applications",
                  "E-commerce solutions",
                  "Content management systems",
                  "Custom web portals",
                ]}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <DetailedServiceCard
                icon={<Smartphone className="h-10 w-10 text-green-600" />}
                title="App Development"
                description="Intuitive mobile and desktop applications designed for impact and usability."
                features={[
                  "Native iOS and Android apps",
                  "Cross-platform development",
                  "Desktop applications",
                  "App store optimization",
                  "Maintenance and updates",
                ]}
              />
            </Reveal>
            <Reveal delay={0.2}>
              <DetailedServiceCard
                icon={<Bot className="h-10 w-10 text-green-600" />}
                title="AI Agents"
                description="Smart, autonomous systems to streamline processes and decision-making."
                features={[
                  "Process automation",
                  "Intelligent decision systems",
                  "Data analysis and insights",
                  "Predictive analytics",
                  "Custom AI solutions",
                ]}
              />
            </Reveal>
            <Reveal delay={0.3}>
              <DetailedServiceCard
                icon={<MessageSquare className="h-10 w-10 text-green-600" />}
                title="Chatbot Development"
                description="Intelligent chatbots to enhance customer engagement and automate support."
                features={[
                  "Customer service automation",
                  "AI-powered virtual assistants",
                  "Multi-platform integration",
                  "Natural language processing",
                  "24/7 customer support",
                ]}
              />
            </Reveal>
            <Reveal delay={0.4}>
              <DetailedServiceCard
                icon={<Palette className="h-10 w-10 text-green-600" />}
                title="UI/UX Designing"
                description="Human-centered designs that blend functionality with stunning visuals."
                features={[
                  "User experience research",
                  "Interface design",
                  "Prototyping and wireframing",
                  "Design systems",
                  "Usability testing",
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We follow a structured process to ensure successful project delivery and client satisfaction.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Discovery</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We begin by understanding your business goals, challenges, and requirements.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Design & Planning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We create detailed designs and project plans with timelines and milestones.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team works on implementing the solution with regular updates and feedback.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Launch & Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We launch your solution and provide ongoing support and maintenance.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Contact us today to discuss your project requirements and how we can help you achieve your goals.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link href="/contact">Let's Build Together</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
