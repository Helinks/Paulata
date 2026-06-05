"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const quickLinks = [
  { href: "/", label: "Inicio" },
  { href: "/shop", label: "Colecciones" },
  { href: "/contacto", label: "Contáctanos" },
]

const customerService = [
  { href: "/guiaTallas", label: "Guía de Tallas" },
  { href: "/devoluciones", label: "Devoluciones" },
  { href: "/envios", label: "Información de Envío" },
  { href: "/terminos", label: "Términos y Condiciones" },
]

const socialLinks = [
  { href: "https://www.instagram.com/paulata.co/", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Compañía</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Atención al Cliente
            </h3>
            <ul className="mt-4 space-y-2">
              {customerService.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Síguenos</h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/images/logo.jpeg"
                alt="Paulata"
                width={80}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Paulata. Todos los derechos
              reservados.
            </p>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground mr-2">
              Método de pago:
            </span>
            <div className="flex items-center gap-2">
                <div
                  className="flex h-6 items-center justify-center rounded border border-border bg-background px-2"
                >
                  <span className="text-[10px] font-medium text-muted-foreground">
                    Contraentrega
                  </span>
                </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
