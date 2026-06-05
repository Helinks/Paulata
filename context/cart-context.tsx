"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  gender: "mujer" | "hombre" | "nino"
  size: string
  quantity: number
  image: string
}

interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: string, size: string) => void
  updateQuantity: (id: string, size: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
}

const CART_STORAGE_KEY = "paulata-cart"

function loadCartFromStorage(): CartItem[] {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch { /* ignore */ }
  return []
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setItems(loadCartFromStorage())
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    }
  }, [items, hydrated])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existingItem = prev.find(
        (i) => i.id === item.id && i.size === item.size
      )
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id: string, size: string) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.size === size)))
  }, [])

  const updateQuantity = useCallback(
    (id: string, size: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(id, size)
        return
      }
      setItems((prev) =>
        prev.map((i) =>
          i.id === id && i.size === size ? { ...i, quantity } : i
        )
      )
    },
    [removeItem]
  )

  const clearCart = useCallback(() => {
    setItems([])
    localStorage.removeItem(CART_STORAGE_KEY)
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
