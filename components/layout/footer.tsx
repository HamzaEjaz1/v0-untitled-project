import Link from "next/link"
import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#375CA6] to-[#3767A6] bg-clip-text text-transparent">
              Wrapify Solutions
            </span>
            <p className="text-gray-300 mb-6 mt-4">
              We wrap ideas into intelligent digital solutions. Serving USA, Qatar, Saudi Arabia, and Pakistan with
              world-class software development, web development, app development, AI agents, and digital transformation
              services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61581415486409"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Facebook"
                title="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/wrapifysolutions/"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Instagram"
                title="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/wrapifysolutions"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="LinkedIn"
                title="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@wrapifysolutions"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="YouTube"
                title="Subscribe to our YouTube channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@wrapifysolutions"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="TikTok"
                title="Follow us on TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0h.15c.5 0 .97.48.97.97v5.44c0 .45-.37.82-.82.82-.44 0-.82-.37-.82-.82V3.79c-.25.03-.5.06-.76.06A6.56 6.56 0 0 0 5.5 10.46v5.54a6.56 6.56 0 0 0 6.56 6.56 6.56 6.56 0 0 0 6.56-6.56v-2.68c1.47 1.06 3.24 1.7 5.19 1.7.52 0 1.04-.05 1.53-.13.45-.08.85.29.85.74v.7a9.86 9.86 0 0 1-9.86 9.86 9.86 9.86 0 0 1-9.92-9.86v-5.54a9.86 9.86 0 0 1 9.92-9.85z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/wrapifysolutions"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Twitter"
                title="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-gray-300 hover:text-primary transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-development" className="text-gray-300 hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/app-development" className="text-gray-300 hover:text-primary transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-agents" className="text-gray-300 hover:text-primary transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/services/chatbot-development"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Chatbot Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-gray-300 hover:text-primary transition-colors">
                  UI/UX Designing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Locations */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact & Locations</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">wrapifysolutions@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">+92 343 9024736</span>
              </li>
              <li className="text-sm text-gray-400 mt-4 font-semibold">Serving:</li>
              <li className="text-gray-300 text-sm">USA | Qatar | Saudi Arabia | Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Wrapify Solutions. All Rights Reserved. | Web Development | App Development |
              AI Automation | Chatbot Development
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-primary text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
