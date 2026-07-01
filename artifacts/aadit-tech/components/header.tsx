"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Menu, Shield, X, ChevronDown } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(menu)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center gap-2 z-50 relative">
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-bold text-lg tracking-tight">Aadit Technologies</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {/* Cybersecurity */}
          <div 
            className="group relative"
            onMouseEnter={() => handleMouseEnter('cyber')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="flex items-center gap-1 hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted"
              aria-expanded={activeDropdown === 'cyber'}
              aria-haspopup="true"
            >
              Cybersecurity <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'cyber' && (
              <div className="absolute top-full left-0 w-80 pt-2 pb-4">
                <div className="bg-background border rounded-lg shadow-lg overflow-hidden flex flex-col">
                  <div className="p-4 grid gap-3">
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">Penetration Testing</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Identify and fix vulnerabilities before attackers do.</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">Vulnerability Assessment</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Continuous scanning and security monitoring.</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">Security Architecture</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Design resilient infrastructure from the ground up.</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">Incident Response</div>
                      <div className="text-xs text-muted-foreground mt-0.5">24/7 rapid response to security breaches.</div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Compliance */}
          <div 
            className="group relative"
            onMouseEnter={() => handleMouseEnter('compliance')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="flex items-center gap-1 hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted"
              aria-expanded={activeDropdown === 'compliance'}
              aria-haspopup="true"
            >
              Compliance <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'compliance' && (
              <div className="absolute top-full left-0 w-80 pt-2 pb-4">
                <div className="bg-background border rounded-lg shadow-lg overflow-hidden flex flex-col">
                  <div className="p-4 grid gap-3">
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">ISO 27001</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Information security management standard.</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">SOC 2</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Trust services criteria for service organizations.</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">HIPAA</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Healthcare data privacy and security.</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">DPDP Act</div>
                      <div className="text-xs text-muted-foreground mt-0.5">India Digital Personal Data Protection readiness.</div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* IT Managed Services */}
          <div 
            className="group relative"
            onMouseEnter={() => handleMouseEnter('it')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="flex items-center gap-1 hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted"
              aria-expanded={activeDropdown === 'it'}
              aria-haspopup="true"
            >
              IT Managed Services <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'it' && (
              <div className="absolute top-full left-0 w-80 pt-2 pb-4">
                <div className="bg-background border rounded-lg shadow-lg overflow-hidden flex flex-col">
                  <div className="p-4 grid gap-3">
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">Infrastructure Management</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Proactive monitoring and maintenance.</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">Cloud Operations</div>
                      <div className="text-xs text-muted-foreground mt-0.5">AWS, Azure, and GCP management.</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">Help Desk</div>
                      <div className="text-xs text-muted-foreground mt-0.5">24/7 technical support.</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">Backup & DR</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Business continuity and disaster recovery.</div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries */}
          <div 
            className="group relative"
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="flex items-center gap-1 hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted"
              aria-expanded={activeDropdown === 'industries'}
              aria-haspopup="true"
            >
              Industries <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'industries' && (
              <div className="absolute top-full left-0 w-80 pt-2 pb-4">
                <div className="bg-background border rounded-lg shadow-lg overflow-hidden flex flex-col">
                  <div className="p-4 grid gap-3">
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">Healthcare</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">BFSI</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">Fintech</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">SaaS</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">Enterprise</div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Resources */}
          <div 
            className="group relative"
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="flex items-center gap-1 hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted"
              aria-expanded={activeDropdown === 'resources'}
              aria-haspopup="true"
            >
              Resources <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'resources' && (
              <div className="absolute top-full left-0 w-80 pt-2 pb-4">
                <div className="bg-background border rounded-lg shadow-lg overflow-hidden flex flex-col">
                  <div className="p-4 grid gap-3">
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">Blog</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">Glossary</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">Whitepapers</div>
                    </Link>
                    <Link href="#" className="block group/link">
                      <div className="font-semibold text-foreground group-hover/link:text-primary">EBooks</div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted">
            About
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Button variant="primary">Book a Call</Button>
        </div>

        <button className="md:hidden p-2 z-50 relative" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background overflow-y-auto border-t">
          <div className="flex flex-col p-4 gap-6 text-base">
            <div>
              <div className="font-bold mb-3 text-muted-foreground">Cybersecurity</div>
              <div className="flex flex-col gap-3 pl-4 border-l">
                <Link href="#" onClick={() => setMobileOpen(false)}>Penetration Testing</Link>
                <Link href="#" onClick={() => setMobileOpen(false)}>Vulnerability Assessment</Link>
                <Link href="#" onClick={() => setMobileOpen(false)}>Incident Response</Link>
              </div>
            </div>
            
            <div>
              <div className="font-bold mb-3 text-muted-foreground">Compliance</div>
              <div className="flex flex-col gap-3 pl-4 border-l">
                <Link href="#" onClick={() => setMobileOpen(false)}>ISO 27001</Link>
                <Link href="#" onClick={() => setMobileOpen(false)}>SOC 2</Link>
                <Link href="#" onClick={() => setMobileOpen(false)}>HIPAA</Link>
                <Link href="#" onClick={() => setMobileOpen(false)}>DPDP Act</Link>
              </div>
            </div>

            <div>
              <div className="font-bold mb-3 text-muted-foreground">IT Managed Services</div>
              <div className="flex flex-col gap-3 pl-4 border-l">
                <Link href="#" onClick={() => setMobileOpen(false)}>Infrastructure Management</Link>
                <Link href="#" onClick={() => setMobileOpen(false)}>Cloud Operations</Link>
                <Link href="#" onClick={() => setMobileOpen(false)}>Backup & DR</Link>
              </div>
            </div>
            
            <Link href="/about" className="font-bold py-2 border-t" onClick={() => setMobileOpen(false)}>About</Link>
            
            <div className="pt-4 border-t">
              <Button variant="primary" className="w-full" size="lg">Book a Call</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}