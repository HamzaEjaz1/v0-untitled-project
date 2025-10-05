import { Briefcase, Users, Award, Target } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import AnimatedText from "@/components/ui/animated-text"
import TeamSection from "@/components/sections/team-section"
import ValueCard from "@/components/sections/value-card"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <p className="text-primary font-medium tracking-wider">ABOUT US</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
                <AnimatedText text="Who We Are" />
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Wrapify Solutions is a forward-thinking technology company driven by innovation, design, and excellence.
                Our passionate team combines expertise in software engineering, AI, and design to craft solutions that
                don't just solve problems but create lasting impact.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To wrap ideas into intelligent digital solutions that empower businesses to grow in the digital era.
                  We specialize in turning complex challenges into seamless, user-friendly, and scalable solutions.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To be the leading provider of intelligent digital solutions that transform how businesses operate and
                  engage with their customers. We envision a future where technology seamlessly integrates with human
                  creativity.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Wrapify Solutions?</h2>
              <p className="text-gray-600 dark:text-gray-300">These principles guide our work and define our culture</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <ValueCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Expert Team"
                description="Skilled professionals across multiple technology domains."
              />
            </Reveal>
            <Reveal delay={0.2}>
              <ValueCard
                icon={<Target className="h-8 w-8 text-primary" />}
                title="Tailored Solutions"
                description="Custom-built strategies to fit your unique vision."
              />
            </Reveal>
            <Reveal delay={0.3}>
              <ValueCard
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Innovation First"
                description="Leveraging the latest technologies for future-ready products."
              />
            </Reveal>
            <Reveal delay={0.4}>
              <ValueCard
                icon={<Briefcase className="h-8 w-8 text-primary" />}
                title="Client-Centric"
                description="Your goals drive everything we create."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <TeamSection />
    </main>
  )
}
