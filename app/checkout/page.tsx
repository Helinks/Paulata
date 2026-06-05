"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Loader2, CheckCircle, ShoppingBag } from "lucide-react"
import Link from "next/link"

const WHATSAPP_NUMBER = "573224732230"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, clearCart } = useCart()
  const [mounted, setMounted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    name: "",
    address: "",
    neighborhood: "",
    phone: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && items.length === 0 && !submitted) {
      router.push("/")
    }
  }, [mounted, items, submitted, router])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    const genderLabel = (g: string) =>
      g === "mujer" ? "Mujer" : g === "hombre" ? "Hombre" : "Niño"

    const itemLines = items
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} - ${genderLabel(item.gender)} - Talla: ${item.size} - Cant: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
      )
      .join("\n")

    const message =
      `🛍️ *NUEVO PEDIDO - Paulata*\n\n` +
      `👤 *Datos del cliente:*\n` +
      `Nombre: ${form.name}\n` +
      `Dirección: ${form.address}\n` +
      `Barrio/Ciudad: ${form.neighborhood}\n` +
      `Teléfono: ${form.phone}\n\n` +
      `📦 *Productos:*\n${itemLines}\n\n` +
      `💰 *Total: $${subtotal.toFixed(2)}*\n\n` +
      `📍 *Indicaciones de entrega:*\nSegún dirección indicada`

    const encoded = encodeURIComponent(message)
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`

    clearCart()
    setSubmitted(true)
    setSubmitting(false)

    window.open(waUrl, "_blank")
  }

  if (!mounted) return null

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <CartDrawer />
        <main className="flex-1 flex items-center justify-center">
          <div className="mx-auto max-w-md px-4 py-16 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground mb-2">
              ¡Pedido enviado!
            </h1>
            <p className="text-muted-foreground mb-8">
              Tu pedido ha sido enviado a través de WhatsApp. Un asesor se
              comunicará contigo para confirmar los detalles.
            </p>
            <Button asChild>
              <Link href="/">Volver a la tienda</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <CartDrawer />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">
              Finalizar Compra
            </h1>
            <p className="mt-2 text-muted-foreground">
              Completa tus datos para recibir el pedido
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 space-y-6"
            >
              <div className="rounded-xl border border-border bg-card p-6 space-y-5">
                <h2 className="text-lg font-semibold text-foreground">
                  Datos de entrega
                </h2>

                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre completo"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">
                    Dirección exacta de entrega *
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="Calle, carrera, número, indicaciones si es conjunto o apartamento"
                    value={form.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="neighborhood">Barrio / Ciudad *</Label>
                  <Input
                    id="neighborhood"
                    name="neighborhood"
                    placeholder="Ej: Chapinero, Bogotá"
                    value={form.neighborhood}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono de contacto *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="300 123 4567"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Confirmar pedido por WhatsApp
                  </>
                )}
              </Button>
            </form>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-card p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Resumen del pedido
                </h2>

                <ScrollArea className="max-h-80">
                  <ul className="divide-y divide-border">
                    {items.map((item) => (
                      <li
                        key={`${item.id}-${item.size}`}
                        className="flex gap-3 py-3"
                      >
                        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-md bg-secondary/30">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.gender === "mujer" ? "Mujer" : item.gender === "hombre" ? "Hombre" : "Niño"} &middot; Talla: {item.size} &middot; Cant:{" "}
                            {item.quantity}
                          </p>
                          <p className="text-sm font-semibold text-foreground">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-base font-medium">Total</span>
                  <span className="text-xl font-bold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
