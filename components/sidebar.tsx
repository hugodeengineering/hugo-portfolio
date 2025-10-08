"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Github, Linkedin, Mail, Phone, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Sidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-bold text-primary">Hugo de Mendoza</span>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-background pt-16">
          <nav className="flex flex-col gap-4 p-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-80 lg:flex-col border-r border-border bg-card">
        <div className="flex flex-col gap-y-8 px-8 py-12 h-full">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-foreground">Hugo de Mendoza</h1>
            <p className="text-sm text-muted-foreground">Mechanical Engineer and Robotics Student</p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              Finishing my bachelor's in 2026 and pursuing my master's in 2027.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all" />
                <span className="uppercase tracking-wider font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="mt-auto flex flex-col gap-4">
            <div className="flex gap-4">
              <a
                href="https://github.com/hugo-de-mendoza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/hugo-de-mendoza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hugo.demendoza.eng@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              
            </div>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <a href="/resume.pdf" download>
                <FileText className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}
