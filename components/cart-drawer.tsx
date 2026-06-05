"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"
import { useCart } from "@/context/cart-context"
import { ScrollArea } from "@/components/ui/scroll-area"

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    clearCart,
  } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="text-lg">
            Tu Carrito ({items.length} {items.length === 1 ? "producto" : "productos"})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 py-8">
            <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <p className="text-muted-foreground text-center">
              Tu carrito está vacío
            </p>
            <Button variant="outline" onClick={closeCart}>
              Seguir comprando
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-4 px-4">
              <ul className="divide-y divide-border">
                {items.map((item) => (
                  <li
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 py-4"
                  >
                    {/* Product Image */}
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-secondary/30">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-foreground line-clamp-1">
                            {item.name}
                          </h4>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {item.gender === "mujer" ? "Mujer" : item.gender === "hombre" ? "Hombre" : "Niño"} &middot; Talla: {item.size}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          aria-label="Eliminar producto"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 border border-border rounded-md">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.quantity - 1
                              )
                            }
                            className="p-1.5 hover:bg-secondary transition-colors"
                            aria-label="Reducir cantidad"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.size,
                                item.quantity + 1
                              )
                            }
                            className="p-1.5 hover:bg-secondary transition-colors"
                            aria-label="Aumentar cantidad"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="text-sm font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>

            <SheetFooter className="flex-col gap-4 border-t border-border pt-4 sm:flex-col">
              {/* Subtotal */}
              <div className="flex items-center justify-between w-full">
                <span className="text-base font-medium">Subtotal</span>
                <span className="text-lg font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Los impuestos y el envío se calculan en el checkout
              </p>

              {/* Actions */}
              <div className="flex flex-col gap-2 w-full">
                <Button size="lg" className="w-full" asChild onClick={closeCart}>
                  <Link href="/checkout">
                    Finalizar Compra
                  </Link>
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={closeCart}
                  >
                    Seguir comprando
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearCart}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    Vaciar carrito
                  </Button>
                </div>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
