import React from "react"
import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg tracking-tight">Aadit Technologies</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Cybersecurity & compliance for the modern enterprise.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Cybersecurity</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Penetration Testing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Vulnerability Assessment</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Security Architecture</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Incident Response</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Compliance & Audits</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">ISO 27001</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">SOC 2</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">HIPAA</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">PCI-DSS</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">RBI Guidelines</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">IT Managed Services</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Infrastructure Management</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cloud Operations</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Help Desk</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Glossary</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Whitepapers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">EBooks</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Aadit Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}