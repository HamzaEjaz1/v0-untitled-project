"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    submenu: [
      { name: "Web Development", path: "/services/web-development" },
      { name: "App Development", path: "/services/app-development" },
      { name: "AI Agents", path: "/services/ai-agents" },
      { name: "Chatbot Development", path: "/services/chatbot-development" },
      { name: "UI/UX Design", path: "/services/ui-ux-design" },
    ],
  },
  { name: "Use Cases", path: "/use-cases" },
  { name: "Blog", path: "/blog" },
  { name: "How We Empower", path: "/empower-business" },
  {
    name: "Locations",
    path: "/locations",
    submenu: [
      { name: "USA", path: "/locations/usa" },
      { name: "Saudi Arabia", path: "/locations/saudi-arabia" },
      { name: "UAE", path: "/locations/united-arab-emirates" },
      { name: "Qatar", path: "/locations/qatar" },
      { name: "Egypt", path: "/locations/egypt" },
      { name: "Pakistan", path: "/locations/pakistan" },
    ],
  },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setOpenSubmenu(null)
  }, [pathname])

  const handleSubmenuClick = () => {
    setIsMenuOpen(false)
    setOpenSubmenu(null)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#375CA6] to-[#3767A6] bg-clip-text text-transparent">
              Wrapify Solutions
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  href={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                    pathname === item.path || item.submenu?.some((subitem) => pathname.startsWith(subitem.path))
                      ? "text-primary"
                      : "text-gray-700 dark:text-gray-200",
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white dark:bg-gray-900 shadow-lg rounded-lg py-2 px-0 mt-2 min-w-max animate-in fade-in zoom-in-95 duration-200">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.path}
                        href={subitem.path}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-4 block",
                          pathname === subitem.path
                            ? "text-primary bg-gray-50 dark:bg-gray-800"
                            : "text-gray-700 dark:text-gray-200",
                        )}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <button className="md:hidden text-gray-700 dark:text-gray-200" onClick={() => setIsMenuOpen((v) => !v)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobile && isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 px-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <div key={item.path}>
                <button
                  onClick={() => {
                    if (item.submenu) {
                      setOpenSubmenu(openSubmenu === item.path ? null : item.path)
                    } else {
                      setIsMenuOpen(false)
                    }
                  }}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary py-2 w-full text-left flex items-center justify-between",
                    pathname === item.path || item.submenu?.some((subitem) => pathname.startsWith(subitem.path))
                      ? "text-primary"
                      : "text-gray-700 dark:text-gray-200",
                  )}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown
                      className={cn("h-4 w-4 transition-transform", openSubmenu === item.path && "rotate-180")}
                    />
                  )}
                </button>
                {item.submenu && openSubmenu === item.path && (
                  <div className="ml-4 flex flex-col space-y-1 mt-2 border-l-2 border-primary/30">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.path}
                        href={subitem.path}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary py-2 pl-4",
                          pathname === subitem.path ? "text-primary" : "text-gray-700 dark:text-gray-200",
                        )}
                        onClick={handleSubmenuClick}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
