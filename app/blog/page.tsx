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
      "https://images.unsplash.com/photo-1512941691920-25bda36dc643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1677442d019cecc7d45f48eea7ef3dbbf89abf5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1677946127149-b3e325df5f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
