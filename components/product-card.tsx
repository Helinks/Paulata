"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { useCart } from "@/context/cart-context"
import { ShoppingBag, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Product {
  id: string
  name: string
  price: number
  image: string
  sizes?: string[]
  material?: string
  category?: string
  subcategory?: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [open, setOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    if (!selectedSize) return
    setIsAdding(true)
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image,
    })
    setTimeout(() => {
      setIsAdding(false)
      setOpen(false)
      setSelectedSize(null)
    }, 1200)
  }

  return (
    <article className="group flex flex-col">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      {/* Product Info */}
      <div className="mt-3 flex flex-col gap-1.5">
        <h3 className="text-sm font-medium text-foreground line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm font-semibold text-foreground">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Add to cart button */}
      <Button
        onClick={() => setOpen(true)}
        className="mt-3 w-full gap-2"
        size="sm"
      >
        <ShoppingBag className="h-4 w-4" />
        Agregar al carrito
      </Button>

      {/* Product quick-add dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>{product.name}</DialogTitle>
            <DialogDescription>
              ${product.price.toFixed(2)}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            {/* Product image preview */}
            <div className="relative aspect-square w-full max-w-[200px] mx-auto overflow-hidden rounded-lg bg-secondary/30">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>

            {/* Size selector */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-foreground">
                Selecciona tu talla *
              </p>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "rounded-md border py-2 text-sm font-semibold transition-all",
                      selectedSize === size
                        ? "bg-foreground text-background border-foreground"
                        : "bg-background text-foreground border-border hover:border-foreground"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter className="flex-col-reverse sm:flex-col gap-2">
            <Button
              onClick={handleAddToCart}
              disabled={!selectedSize || isAdding}
              className="w-full gap-2"
            >
              {isAdding ? (
                <>
                  <Check className="h-4 w-4" />
                  Agregado
                </>
              ) : (
                <>
                  <ShoppingBag className="h-4 w-4" />
                  Agregar al carrito
                </>
              )}
            </Button>
            <DialogClose asChild>
              <Button variant="outline" className="w-full">
                Cancelar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </article>
  )
}
