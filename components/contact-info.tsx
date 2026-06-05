"use client"

import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    label: "Telefono",
    value: "3224732230 - 3053541277",
    href: "tel:+525512345678",
  },
  {
    icon: MapPin,
    label: "Direccion",
    value: "Bogotá D.C, Colombia",
    href: null,
  },
  {
    icon: Clock,
    label: "Horario de atencion",
    value: "Lun - Vie: 9:00 - 18:00",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/paulata.co/",
    handle: "@paulata"
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-foreground">
          Informacion de contacto
        </h3>
        <div className="space-y-5">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <detail.icon className="h-4 w-4 text-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{detail.label}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-sm font-medium text-foreground hover:underline"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground">
                    {detail.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-foreground">
          Siguenos en redes
        </h3>
        <div className="space-y-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 transition-colors hover:bg-secondary/50"
            >
              <social.icon className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {social.label}
                </p>
                <p className="text-xs text-muted-foreground">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      

      {/* Brand Quote */}
      <div className="rounded-xl border border-border bg-secondary/30 p-6">
        <p className="text-center text-lg italic text-muted-foreground">
          &quot;Solo ponte comodo&quot;
        </p>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          - Paulata
        </p>
      </div>
    </div>
  )
}
