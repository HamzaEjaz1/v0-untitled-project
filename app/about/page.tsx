import { Briefcase, Users, Award, Target } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import AnimatedText from "@/components/ui/animated-text"
import TeamSection from "@/components/sections/team-section"
import ValueCard from "@/components/sections/value-card"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <p className="text-green-600 dark:text-green-400 font-medium tracking-wider">ABOUT US</p>
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

      {/* Mission & Vision */}
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

      {/* Our Values */}
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
                icon={<Users className="h-8 w-8 text-green-600" />}
                title="Expert Team"
                description="Skilled professionals across multiple technology domains."
              />
            </Reveal>
            <Reveal delay={0.2}>
              <ValueCard
                icon={<Target className="h-8 w-8 text-green-600" />}
                title="Tailored Solutions"
                description="Custom-built strategies to fit your unique vision."
              />
            </Reveal>
            <Reveal delay={0.3}>
              <ValueCard
                icon={<Award className="h-8 w-8 text-green-600" />}
                title="Innovation First"
                description="Leveraging the latest technologies for future-ready products."
              />
            </Reveal>
            <Reveal delay={0.4}>
              <ValueCard
                icon={<Briefcase className="h-8 w-8 text-green-600" />}
                title="Client-Centric"
                description="Your goals drive everything we create."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Reveal>
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Our Approach"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="flex-1 space-y-6">
              <Reveal direction="right">
                <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
              </Reveal>
              <Reveal direction="right" delay={0.1}>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in collaboration, customization, and creativity. By working closely with clients, we ensure
                  every solution is aligned with their unique goals.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.2}>
                <p className="text-gray-600 dark:text-gray-300">
                  Our blend of cutting-edge technology and design thinking delivers results that inspire growth and
                  innovation. We don't just deliver projects—we create digital experiences.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </main>
  )
}
