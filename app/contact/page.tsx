import { Mail, MapPin, Phone } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import AnimatedText from "@/components/ui/animated-text"
import ContactForm from "@/components/sections/contact-form"

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <p className="text-primary font-medium tracking-wider">GET IN TOUCH</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
                <AnimatedText text="Contact Us" />
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Have a question or want to work together? We'd love to hear from you. Fill out the form below or reach
                out to us directly.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <Reveal>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Send Us a Message</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Please help us to respond better to your query by filling out the form below.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <ContactForm />
              </Reveal>
            </div>
            <div className="flex-1">
              <Reveal direction="right">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Information</h2>
              </Reveal>
              <div className="space-y-8">
                <Reveal direction="right" delay={0.1}>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                      <p className="text-gray-600 dark:text-gray-300">Islamabad, Pakistan</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal direction="right" delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
                      <p className="text-gray-600 dark:text-gray-300">+92 343 9024736</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal direction="right" delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Address</h3>
                      <p className="text-gray-600 dark:text-gray-300">business@wrapifysolutions.com</p>
                    </div>
                  </div>
                </Reveal>
              </div>
              <Reveal direction="right" delay={0.4}>
                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Find answers to common questions about our services and process.
              </p>
            </div>
          </Reveal>
          <div className="max-w-3xl mx-auto">
            <Reveal delay={0.1}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-4">
                <h3 className="text-xl font-semibold mb-2">What services do you offer?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We offer a wide range of services including web development, data science, machine learning, deep
                  learning, generative AI, and chatbot development.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-4">
                <h3 className="text-xl font-semibold mb-2">How long does a typical project take?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks,
                  while more complex applications can take several months. We'll provide a detailed timeline during the
                  planning phase.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-4">
                <h3 className="text-xl font-semibold mb-2">Do you provide ongoing support after project completion?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we offer ongoing support and maintenance packages to ensure your solution continues to run
                  smoothly and stays up-to-date with the latest technologies.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">How do we get started working together?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Simply reach out to us through the contact form or via email/phone. We'll schedule an initial
                  consultation to discuss your needs and determine how we can best help you achieve your goals.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
