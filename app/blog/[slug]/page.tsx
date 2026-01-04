import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"

// Import blog posts from the main blog page
const blogPosts = [
  {
    id: "1",
    title: "Web Development Best Practices in 2025: Creating High-Performance Websites for USA Markets",
    slug: "web-development-best-practices-usa",
    excerpt:
      "Discover the latest web development trends and best practices to build fast, responsive websites that rank well in search engines and convert visitors into customers.",
    content: `Web development has evolved significantly in recent years. Modern websites need to be lightning-fast, mobile-responsive, and SEO-optimized to compete in today's digital landscape.

## Key Web Development Trends for 2025

### 1. Next.js and React Dominance
React continues to be the most popular JavaScript library for building user interfaces. Next.js, built on React, provides an excellent framework for creating fast, SEO-friendly web applications. Its server-side rendering capabilities ensure optimal performance and search engine visibility.

### 2. Mobile-First Design Approach
With over 60% of web traffic coming from mobile devices, adopting a mobile-first design philosophy is non-negotiable. Responsive web design, progressive web apps (PWAs), and mobile optimization are essential.

### 3. Performance Optimization
Page speed directly impacts user experience and SEO rankings. Techniques like code splitting, image optimization, lazy loading, and content delivery networks (CDNs) are crucial for modern web development.

### 4. Cloud Deployment
Deploying applications to cloud platforms like Vercel, AWS, or Google Cloud provides scalability, reliability, and better performance. Serverless architectures are becoming increasingly popular.

## Best Practices for Web Development in USA

1. **SEO Optimization**: Ensure your website is optimized for search engines with proper meta tags, structured data, and quality content.
2. **Security**: Implement SSL/TLS encryption, secure authentication, and regular security audits.
3. **Accessibility**: Follow WCAG guidelines to ensure your website is accessible to all users.
4. **Performance**: Optimize images, minimize CSS/JavaScript, and leverage caching strategies.

## Conclusion

Building successful websites in 2025 requires understanding modern technologies, performance optimization, and user-centered design principles. Partner with experienced web developers who understand these trends.`,
    category: "Web Development",
    author: "Wrapify Solutions Team",
    date: "2025-01-04",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    keywords: ["web development USA", "responsive web design", "web performance", "SEO optimization"],
    location: "USA",
  },
  {
    id: "2",
    title: "Mobile App Development Guide: Building iOS & Android Apps for the Middle East Market (Qatar)",
    slug: "mobile-app-development-qatar",
    excerpt: "Learn how to develop successful mobile applications for the Qatar and Middle East market.",
    content: `Mobile app development in Qatar requires understanding local user preferences and market dynamics.

## Understanding the Qatar Market

Qatar has a highly digitized population with strong smartphone penetration. App developers need to consider:

- **Local Languages**: Support for Arabic alongside English
- **Cultural Sensitivity**: Respect local customs and traditions
- **Payment Methods**: Integration with local payment solutions
- **Compliance**: Understanding local regulations and data protection laws

## Development Approaches

### Native Development
- iOS apps using Swift
- Android apps using Kotlin
- Optimal performance and native features

### Cross-Platform Development
- React Native for faster development
- Flutter for beautiful UI
- Code sharing across platforms

## Testing & Quality Assurance

Thorough testing is essential for app success. QA should cover:
- Functional testing
- Performance testing
- Security testing
- User acceptance testing

## Conclusion

Building apps for Qatar requires both technical expertise and cultural understanding. Our team has extensive experience developing apps for Middle Eastern markets.`,
    category: "App Development",
    author: "Wrapify Solutions Team",
    date: "2025-01-03",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1512941691920-25bda36dc643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    keywords: ["app development Qatar", "mobile app development", "iOS development", "Android app"],
    location: "Qatar",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container px-4 mx-auto relative z-10 max-w-3xl">
          <Reveal>
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:opacity-80 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mb-6">
              <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">{post.category}</span>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{post.title}</h1>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <span className="text-foreground font-medium">{post.author}</span>
              {post.location && (
                <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full">{post.location}</span>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container px-4 mx-auto max-w-3xl">
          <Reveal>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto max-w-3xl">
          <Reveal>
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
                {post.content.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="text-base md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>

          {/* Share & CTA */}
          <Reveal delay={0.2}>
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Share this article</h3>
                  <div className="flex gap-4">
                    <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">Get Expert Help</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
