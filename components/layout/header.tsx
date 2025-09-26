"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D0BAQFIDPmuzSMGqQ/company-logo_200_200/B4DZmChSH9IcAI-/0/1758831388221/wrapifysolutions_logo?e=1761782400&v=beta&t=U5y2vRUVWE0X71BdHSThbTdW3Ir2Oj9XGrCP1SUxqPU"  // ✅ Replace with your actual logo path (e.g., from /public folder)
              alt="Wrapify Solutions Logo"
              className="h-10 w-auto" // Adjust size as needed
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400",
                  pathname === item.path ? "text-green-600 dark:text-green-400" : "text-gray-700 dark:text-gray-200",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button className="hidden md:flex bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 px-4 transition-all duration-300 ease-in-out">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400 py-2",
                  pathname === item.path ? "text-green-600 dark:text-green-400" : "text-gray-700 dark:text-gray-200",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="bg-green-600 hover:bg-green-700 text-white w-full"
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
