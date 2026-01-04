"use client"

import Link from "next/link"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { useState, useMemo, Suspense } from "react"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"

type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  keywords: string[]
  location?: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Web Development Best Practices in 2025: Creating High-Performance Websites for USA Markets",
    slug: "web-development-best-practices-usa",
    excerpt:
      "Discover the latest web development trends and best practices to build fast, responsive websites that rank well in search engines and convert visitors into customers. Wrapify Solutions provides expert web development services across the USA.",
    content:
      "Web development has evolved significantly. Modern websites need to be lightning-fast, mobile-responsive, and SEO-optimized. We explore the latest technologies like Next.js, React, and cloud deployment strategies that help businesses in the USA achieve better online visibility and user engagement.",
    category: "Web Development",
    author: "Wrapify Solutions Team",
    date: "2025-01-04",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    keywords: [
      "web development USA",
      "responsive web design",
      "web performance optimization",
      "SEO-friendly websites",
      "USA web development company",
    ],
    location: "USA",
  },
  {
    id: "2",
    title: "Mobile App Development Guide: Building iOS & Android Apps for Qatar and Middle East Markets",
    slug: "mobile-app-development-qatar",
    excerpt:
      "Learn how to develop successful mobile applications for Qatar and the Middle East market. Wrapify Solutions specializes in native iOS, Android, and cross-platform app development for businesses in Qatar.",
    content:
      "Mobile app development in Qatar requires understanding local user preferences and market dynamics. This guide covers iOS and Android development, localization for Arabic-speaking users, local payment integration, and compliance with Qatar's regulations for successful app launches.",
    category: "App Development",
    author: "Wrapify Solutions Team",
    date: "2025-01-03",
    readTime: "10 min read",
    image:
      "data:image/jpeg;base64,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",
    keywords: [
      "app development Qatar",
      "mobile app development",
      "iOS development Qatar",
      "Android app development",
      "Middle East app development",
    ],
    location: "Qatar",
  },
  {
    id: "3",
    title: "AI Agents and Automation: Transforming Business Operations in USA and Qatar",
    slug: "ai-agents-automation-usa-qatar",
    excerpt:
      "Explore how AI agents are revolutionizing business automation across USA and Qatar. Discover intelligent automation solutions that streamline operations, reduce costs, and improve customer experience.",
    content:
      "AI agents represent the next frontier in business automation. These intelligent systems can handle complex tasks, automate repetitive processes, and make autonomous decisions. Discover how companies across USA and Qatar are leveraging AI agents for process automation, customer service, and data analysis.",
    category: "AI & Automation",
    author: "Wrapify Solutions Team",
    date: "2025-01-02",
    readTime: "9 min read",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT481hfEbXAW3_Fw1Q7y8fuCPomu5fkqfNTFA&s",
    keywords: [
      "AI agents",
      "business automation",
      "AI automation USA Qatar",
      "intelligent automation",
      "process automation",
    ],
    location: "USA & Qatar",
  },
  {
    id: "4",
    title: "Chatbot Development for Customer Service Excellence in Saudi Arabia",
    slug: "chatbot-development-saudi-arabia",
    excerpt:
      "Master chatbot development and AI-powered customer service solutions tailored for Saudi Arabia. Wrapify Solutions builds intelligent chatbots that enhance customer engagement and reduce support costs.",
    content:
      "Modern chatbots powered by advanced NLP can understand customer intent in Arabic and English, providing meaningful responses. This guide covers chatbot architecture, conversation design, and deployment strategies for businesses in Saudi Arabia seeking to improve customer satisfaction.",
    category: "Chatbot Development",
    author: "Wrapify Solutions Team",
    date: "2025-01-01",
    readTime: "7 min read",
    image:
      "https://www.chatbase.co/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fi6kpkyc7%2Fprod-dataset%2Ff583b425cf8de440c00179e5ed9f042375807d88-2048x1152.jpg&w=3840&q=75",
    keywords: [
      "chatbot development Saudi Arabia",
      "AI chatbot",
      "customer service automation",
      "conversational AI Saudi Arabia",
    ],
    location: "Saudi Arabia",
  },
  {
    id: "5",
    title: "Software Development Services in Pakistan: Building Digital Solutions for Growth",
    slug: "software-development-pakistan",
    excerpt:
      "Discover custom software development services for Pakistani businesses. Wrapify Solutions delivers web development, app development, and digital transformation solutions for startups and enterprises.",
    content:
      "Pakistan's tech industry is booming, and businesses need reliable software development partners. Wrapify Solutions provides comprehensive software development services including web applications, mobile apps, AI solutions, and digital transformation consulting tailored to Pakistan's growing digital economy.",
    category: "Software Development",
    author: "Wrapify Solutions Team",
    date: "2024-12-31",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    keywords: [
      "software development Pakistan",
      "web development Pakistan",
      "app development Pakistan",
      "IT services Pakistan",
      "custom software Pakistan",
    ],
    location: "Pakistan",
  },
  {
    id: "6",
    title: "UI/UX Design Excellence: Creating Beautiful Digital Experiences Globally",
    slug: "ui-ux-design-trends-2025",
    excerpt:
      "Discover cutting-edge UI/UX design trends that create engaging user experiences worldwide. Wrapify Solutions specializes in user-centered design for web and mobile applications across all markets.",
    content:
      "User experience is paramount in digital products. Modern design trends emphasize minimalism, accessibility, and emotional connection. Learn about the latest design tools, frameworks, and methodologies that work across different markets and cultures globally.",
    category: "UI/UX Design",
    author: "Wrapify Solutions Team",
    date: "2024-12-30",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    keywords: ["UI UX design", "design trends 2025", "user experience design", "interface design", "digital design"],
  },
  {
    id: "7",
    title: "Digital Transformation Services: Modernizing Business Operations in USA",
    slug: "digital-transformation-usa-enterprise",
    excerpt:
      "Learn how digital transformation is revolutionizing businesses in the USA. Wrapify Solutions provides enterprise digital transformation consulting and implementation services.",
    content:
      "Digital transformation is essential for business survival. Companies across USA are migrating to cloud infrastructure, implementing AI solutions, and adopting modern development practices. Discover the strategies that drive successful digital transformations for enterprises.",
    category: "Digital Transformation",
    author: "Wrapify Solutions Team",
    date: "2024-12-29",
    readTime: "8 min read",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_QsbOAqD6w7nT0etazU3XqheGfcJdOEYiw&s",
    keywords: [
      "digital transformation USA",
      "cloud migration",
      "enterprise digital transformation",
      "technology modernization",
      "business digital solutions",
    ],
    location: "USA",
  },
  {
    id: "8",
    title: "E-Commerce Website Development for Businesses in Middle East and Beyond",
    slug: "ecommerce-website-development",
    excerpt:
      "Build powerful e-commerce websites with Wrapify Solutions. Expert e-commerce development for businesses in Qatar, Saudi Arabia, UAE, and beyond with secure payments and localization.",
    content:
      "E-commerce is transforming retail across the Middle East. Successful online stores require secure payment processing, fast performance, mobile optimization, and localization. Discover how to build e-commerce platforms that convert visitors into customers across multiple markets.",
    category: "Web Development",
    author: "Wrapify Solutions Team",
    date: "2024-12-28",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-adf4e40db15e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    keywords: [
      "e-commerce development",
      "online store development",
      "e-commerce website",
      "payment gateway integration",
      "e-commerce solutions Middle East",
    ],
  },
]

function BlogContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = !selectedCategory || post.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const categories = Array.from(new Set(blogPosts.map((p) => p.category)))

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#375CA6]/10 to-transparent rounded-full blur-3xl animate-float-pattern"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Reveal>
              <p className="text-primary font-medium tracking-wider mb-4">INSIGHTS & RESOURCES</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text-animate mb-4">Blog & Resources</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Expert insights on web development, app development, AI automation, and digital transformation for USA
                and Middle East markets.
              </p>
            </Reveal>
          </div>

          {/* Search Bar */}
          <Reveal delay={0.3}>
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </Reveal>

          {/* Category Filter */}
          <Reveal delay={0.4}>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === null
                    ? "bg-primary text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <Reveal key={post.id} delay={idx * 0.05}>
                  <article className="group h-full rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 card-hover-lift">
                    {/* Featured Image */}
                    <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={`${post.title} - ${post.category} article cover`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4 flex-wrap">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                        {post.location && (
                          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300">
                            {post.location}
                          </span>
                        )}
                      </div>

                      {/* Read More Link */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group/link"
                      >
                        Read Article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container px-4 mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Expert Software Solutions?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our team of experienced developers is ready to bring your ideas to life. Contact us for a free
              consultation.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      }
    >
      <BlogContent />
    </Suspense>
  )
}
