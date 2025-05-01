import { Code, Database, Lightbulb, MessageSquare, Sparkles, BrainCircuit } from "lucide-react"
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
              <p className="text-pink-600 dark:text-pink-400 font-medium tracking-wider">OUR SERVICES</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
                <AnimatedText text="Innovative Solutions for the Future" />
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                At HamHib Coders, we are dedicated to delivering cutting-edge solutions that drive the future of
                technology and development. Our expertise positions us at the forefront of innovation.
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
                icon={<Code className="h-10 w-10 text-pink-600" />}
                title="Web Development"
                description="Custom web applications designed to meet your unique business needs with modern technologies."
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
                icon={<Database className="h-10 w-10 text-pink-600" />}
                title="Data Science"
                description="Transforming data into actionable insights for strategic decision-making and business growth."
                features={[
                  "Data analysis and visualization",
                  "Predictive analytics",
                  "Business intelligence solutions",
                  "Data mining and processing",
                  "Custom dashboards and reporting",
                ]}
              />
            </Reveal>
            <Reveal delay={0.2}>
              <DetailedServiceCard
                icon={<Lightbulb className="h-10 w-10 text-pink-600" />}
                title="Machine Learning"
                description="Building systems that adapt and learn from data to enhance efficiency and automation."
                features={[
                  "Supervised and unsupervised learning",
                  "Natural language processing",
                  "Computer vision solutions",
                  "Recommendation systems",
                  "Anomaly detection",
                ]}
              />
            </Reveal>
            <Reveal delay={0.3}>
              <DetailedServiceCard
                icon={<BrainCircuit className="h-10 w-10 text-pink-600" />}
                title="Deep Learning"
                description="Developing sophisticated models for complex problem-solving and pattern recognition."
                features={[
                  "Neural network design",
                  "Image and speech recognition",
                  "Sentiment analysis",
                  "Time series forecasting",
                  "Transfer learning applications",
                ]}
              />
            </Reveal>
            <Reveal delay={0.4}>
              <DetailedServiceCard
                icon={<Sparkles className="h-10 w-10 text-pink-600" />}
                title="Generative AI"
                description="Creating innovative content and solutions with AI-driven creativity and intelligence."
                features={[
                  "Text and content generation",
                  "Image and art creation",
                  "Music and audio synthesis",
                  "Creative assistance tools",
                  "Personalized content solutions",
                ]}
              />
            </Reveal>
            <Reveal delay={0.5}>
              <DetailedServiceCard
                icon={<MessageSquare className="h-10 w-10 text-pink-600" />}
                title="Chatbots & LLMs"
                description="Implementing intelligent chatbots to improve customer interactions and automate responses."
                features={[
                  "Customer service automation",
                  "AI-powered virtual assistants",
                  "Multi-platform chatbot integration",
                  "Custom LLM fine-tuning",
                  "Conversational AI solutions",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We follow a structured process to ensure successful project delivery and client satisfaction.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold text-xl">
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
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Planning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We develop a detailed project plan with timelines, milestones, and deliverables.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold text-xl">
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
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Delivery & Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We deliver the final solution and provide ongoing support and maintenance.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"></div>
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
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
