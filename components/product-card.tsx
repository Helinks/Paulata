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
import { ShoppingBag, Check, ArrowLeft, Baby, Venus, Mars } from "lucide-react"
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

type Gender = "mujer" | "hombre" | "nino"

const ADULT_SIZES = ["XS", "S", "M", "L", "XL", "XXL"]
const CHILDREN_SIZES = ["2", "4", "6", "8", "10", "12", "14", "16"]

type SizeGuideRow = [string, string, string, string, string, string]

const sizeGuideData: Record<Gender, { title: string; rows: SizeGuideRow[] }> = {
  mujer: {
    title: "Tallas Dama",
    rows: [
      ["XS", "95", "33", "82", "58", "42"],
      ["S", "97", "37", "84", "60", "45"],
      ["M", "98", "38", "90", "62", "46"],
      ["L", "100", "40", "92", "63", "48"],
      ["XL", "102", "40", "96", "66", "50"],
      ["XXL", "104", "40", "102", "67", "52"],
    ],
  },
  hombre: {
    title: "Tallas Caballero",
    rows: [
      ["XS", "97", "43", "84", "64", "50"],
      ["S", "98", "48", "92", "66", "51"],
      ["M", "100", "48", "94", "69", "53"],
      ["L", "102", "48", "96", "70", "55"],
      ["XL", "104", "49", "102", "73", "57"],
      ["XXL", "106", "49", "104", "75", "60"],
    ],
  },
  nino: {
    title: "Tallas Niños",
    rows: [
      ["2", "56", "26", "60", "36", "33"],
      ["4", "59", "27", "63", "40", "36"],
      ["6", "63", "28", "68", "43", "35"],
      ["8", "68", "29", "71", "47", "38"],
      ["10", "72", "31", "74", "52", "39"],
      ["12", "76", "31", "77", "56", "41"],
      ["14", "84", "35", "80", "59", "41"],
      ["16", "84", "35", "86", "64", "41"],
    ],
  },
}

const genderOptions: { id: Gender; label: string; icon: React.ElementType }[] = [
  { id: "mujer", label: "Mujer", icon: Venus },
  { id: "hombre", label: "Hombre", icon: Mars },
  { id: "nino", label: "Niño", icon: Baby },
]

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [open, setOpen] = useState(false)
  const [gender, setGender] = useState<Gender | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)

  const handleGenderSelect = (g: Gender) => {
    setGender(g)
    setSelectedSize(null)
  }

  const handleBack = () => {
    setGender(null)
    setSelectedSize(null)
  }

  const handleAddToCart = () => {
    if (!gender || !selectedSize) return
    setIsAdding(true)
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      gender,
      size: selectedSize,
      image: product.image,
    })
    setTimeout(() => {
      setIsAdding(false)
      setOpen(false)
      setSelectedSize(null)
      setGender(null)
    }, 1200)
  }

  const sizes = gender === "nino" ? CHILDREN_SIZES : ADULT_SIZES
  const genderLabel = gender === "mujer" ? "Mujer" : gender === "hombre" ? "Hombre" : "Niño"

  const selectedGuideRow = gender && selectedSize
    ? sizeGuideData[gender].rows.find((row) => row[0] === selectedSize)
    : null

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
        <DialogContent className="sm:max-w-sm max-h-[90vh] overflow-y-auto">
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

            {!gender ? (
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-foreground text-center">
                  ¿Para quién es?
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {genderOptions.map((opt) => {
                    const Icon = opt.icon
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleGenderSelect(opt.id)}
                        className="flex flex-col items-center gap-2 rounded-xl border-2 border-border py-4 px-2 text-sm font-semibold transition-all hover:border-foreground hover:bg-secondary/50 active:scale-95"
                      >
                        <Icon className="h-6 w-6" />
                        {opt.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleBack}
                    className="rounded-md p-1 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Cambiar género"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <p className="text-sm font-medium text-foreground">
                    Talla para <span className="font-semibold">{genderLabel}</span>
                  </p>
                </div>

                <div className={cn(
                  "grid gap-2",
                  gender === "nino" ? "grid-cols-4" : "grid-cols-3"
                )}>
                  {sizes.map((size) => (
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

                {selectedGuideRow && (
                  <div className="rounded-md border border-border bg-secondary/20 px-3 py-2 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">{selectedGuideRow[0]}</span>
                    <span className="mx-1.5 text-border/50">|</span>
                    Pant. {selectedGuideRow[1]}cm
                    <span className="mx-1.5 text-border/50">|</span>
                    Short {selectedGuideRow[2]}cm
                    <span className="mx-1.5 text-border/50">|</span>
                    Cintura {selectedGuideRow[3]}cm
                    <span className="mx-1.5 text-border/50">|</span>
                    Camiseta {selectedGuideRow[4]}x{selectedGuideRow[5]}cm
                  </div>
                )}
              </div>
            )}
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Fabricamos bajo pedido. No aceptamos cambios ni devoluciones.
          </p>

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
