import { Code, Smartphone, Bot, MessageSquare, Palette, Zap } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import AnimatedText from "@/components/ui/animated-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DetailedServiceCard from "@/components/sections/detailed-service-card"
import TestimonialSlider from "@/components/sections/testimonial-slider"

export const metadata = {
  title: "Professional Web Development, App Development & AI Services in USA and Qatar | Wrapify Solutions",
  description:
    "Discover Wrapify Solutions' comprehensive web development, app development, AI automation, and chatbot development services. Serving businesses in USA and Qatar with custom software solutions, digital transformation, and intelligent automation.",
  keywords:
    "web development services, app development company, AI automation services, chatbot development, software development USA, software development Qatar, custom web development, mobile app development, digital solutions, business automation",
}

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <p className="text-primary font-medium tracking-wider">OUR SERVICES</p>
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

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Professional Software Development Services for USA & Qatar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <DetailedServiceCard
                icon={<Code className="h-10 w-10 text-primary" />}
                title="Web Development Services"
                description="Custom, scalable web applications built with modern technologies. From startups to enterprises, we deliver high-performance websites and web platforms."
                features={[
                  "Responsive Web Design & Development",
                  "Progressive Web Applications (PWA)",
                  "E-commerce Solutions & Online Stores",
                  "Content Management Systems (CMS)",
                  "SaaS Platform Development",
                  "API Development & Integration",
                  "SEO-Optimized Web Solutions",
                ]}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <DetailedServiceCard
                icon={<Smartphone className="h-10 w-10 text-primary" />}
                title="Mobile App Development"
                description="Native and cross-platform mobile applications for iOS and Android. Build user-friendly apps that deliver exceptional performance and user engagement."
                features={[
                  "Native iOS App Development",
                  "Native Android App Development",
                  "Cross-Platform Mobile Development",
                  "App Store Optimization & Launch",
                  "Mobile App Maintenance & Support",
                  "Real-time Synchronization",
                  "Offline-First Mobile Solutions",
                ]}
              />
            </Reveal>
            <Reveal delay={0.2}>
              <DetailedServiceCard
                icon={<Bot className="h-10 w-10 text-primary" />}
                title="AI Agents & Automation"
                description="Intelligent AI agents for process automation, decision-making, and business optimization. Harness the power of artificial intelligence to transform your operations."
                features={[
                  "Intelligent Process Automation",
                  "AI-Powered Decision Systems",
                  "Predictive Analytics & Insights",
                  "Data Analysis & Reporting",
                  "Custom AI Model Development",
                  "Machine Learning Solutions",
                  "Business Intelligence Tools",
                ]}
              />
            </Reveal>
            <Reveal delay={0.3}>
              <DetailedServiceCard
                icon={<MessageSquare className="h-10 w-10 text-primary" />}
                title="Chatbot & AI Automation"
                description="Advanced conversational AI and chatbots for customer service automation. Available 24/7 to handle inquiries, support tickets, and engage customers intelligently."
                features={[
                  "AI Chatbot Development",
                  "Customer Service Automation",
                  "Multi-Channel Integration",
                  "Natural Language Processing (NLP)",
                  "Conversational AI Training",
                  "FAQ Automation",
                  "Lead Generation Chatbots",
                ]}
              />
            </Reveal>
            <Reveal delay={0.4}>
              <DetailedServiceCard
                icon={<Palette className="h-10 w-10 text-primary" />}
                title="UI/UX Design Services"
                description="Human-centered design approach creating intuitive, beautiful interfaces. Every pixel is crafted to enhance user experience and achieve business goals."
                features={[
                  "User Research & Analysis",
                  "Wireframing & Prototyping",
                  "Interface Design (UI)",
                  "User Experience Design (UX)",
                  "Design Systems & Brand Guidelines",
                  "Accessibility & Usability Testing",
                  "Interactive Prototypes",
                ]}
              />
            </Reveal>
            <Reveal delay={0.5}>
              <DetailedServiceCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Digital Transformation Solutions"
                description="End-to-end digital transformation services to modernize your business. Integrate AI, automation, and cloud technologies for competitive advantage."
                features={[
                  "Legacy System Modernization",
                  "Cloud Migration Services",
                  "Digital Process Optimization",
                  "Technology Stack Assessment",
                  "Enterprise Integration",
                  "Scalability Architecture",
                  "Security & Compliance",
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent to-primary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-12">
            <Reveal>
              <p className="text-primary font-medium tracking-wider text-center">CLIENT SUCCESS STORIES</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mt-4">
                What Our Clients Say
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <TestimonialSlider />
          </Reveal>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#375CA6]/10 to-[#3767A6]/10"></div>
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
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/contact">Let's Build Together</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
