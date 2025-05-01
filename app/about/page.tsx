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
              <p className="text-pink-600 dark:text-pink-400 font-medium tracking-wider">ABOUT US</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
                <AnimatedText text="Who We Are" />
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We are a dynamic team of innovative developers, united by our passion for transforming ideas into
                real-world solutions. At our core, we are driven by a shared commitment to excellence and a deep belief
                in the power of technology to make a positive impact on the world.
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
                  To bridge complex problems with cutting-edge solutions across web development, data science, machine
                  learning, and more. We strive to empower businesses with technology that drives growth and innovation.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To be at the forefront of technological innovation, creating solutions that not only meet current
                  needs but anticipate future challenges. We envision a world where technology enhances human potential
                  and creates sustainable value.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-600 dark:text-gray-300">These principles guide our work and define our culture</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <ValueCard
                icon={<Briefcase className="h-8 w-8 text-pink-600" />}
                title="Excellence"
                description="We strive for excellence in everything we do, from code quality to client communication."
              />
            </Reveal>
            <Reveal delay={0.2}>
              <ValueCard
                icon={<Users className="h-8 w-8 text-pink-600" />}
                title="Collaboration"
                description="We believe in the power of teamwork and collaborative problem-solving."
              />
            </Reveal>
            <Reveal delay={0.3}>
              <ValueCard
                icon={<Award className="h-8 w-8 text-pink-600" />}
                title="Innovation"
                description="We embrace new ideas and technologies to create cutting-edge solutions."
              />
            </Reveal>
            <Reveal delay={0.4}>
              <ValueCard
                icon={<Target className="h-8 w-8 text-pink-600" />}
                title="Client Focus"
                description="We prioritize our clients' goals and exceed their expectations."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Reveal>
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 z-10"></div>
                  <img src="/images/about-image.png" alt="Our Story" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            </div>
            <div className="flex-1 space-y-6">
              <Reveal direction="right">
                <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              </Reveal>
              <Reveal direction="right" delay={0.1}>
                <p className="text-gray-600 dark:text-gray-300">
                  Founded in 2024, HamHib Coders began with a simple vision: to create technology solutions that make a
                  difference. What started as a small team of passionate developers has grown into a forward-thinking
                  technology company committed to excellence.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.2}>
                <p className="text-gray-600 dark:text-gray-300">
                  Based in Islamabad, Pakistan, we've quickly established ourselves as a reliable partner for businesses
                  seeking innovative technology solutions. Our journey is defined by continuous learning, adaptation,
                  and a relentless pursuit of excellence.
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
