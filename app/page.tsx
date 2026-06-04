"use client"

import { useState, useMemo, useRef, useEffect, useCallback } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { ShopHero } from "@/components/shop-hero"
import { FabricCategorySelector } from "@/components/fabric-category-selector"
import { products, fabricCategories, type FabricType } from "@/data/products"
import { ProductCard } from "@/components/product-card"
import { ShopPagination } from "@/components/shop-pagination"
import { cn } from "@/lib/utils"
const PRODUCTS_PER_PAGE = 8

export default function ShopPage() {
  const [selectedFabric, setSelectedFabric] = useState<FabricType | null>(null)
  const [showNavidad, setShowNavidad] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const productGridRef = useRef<HTMLDivElement>(null)

  const subcategoryOrder: Record<string, number> = { nuevo: 0, antiguo: 1, navidad: 2 }

  // Filter products by selected fabric, optionally filter by navidad, then sort by subcategory order
  const filteredProducts = useMemo(() => {
    if (!selectedFabric) return []
    let result = products.filter((product) => product.material === selectedFabric)
    if (showNavidad) {
      result = result.filter((product) => product.subcategory === "navidad")
    }
    return result.sort((a, b) => {
      const orderA = subcategoryOrder[a.subcategory ?? ""] ?? 99
      const orderB = subcategoryOrder[b.subcategory ?? ""] ?? 99
      return orderA - orderB
    })
  }, [selectedFabric, showNavidad])

  // Paginate products
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE))
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE)
  }, [filteredProducts, currentPage])

  const handleFabricChange = useCallback((fabric: FabricType | null) => {
    setSelectedFabric(fabric)
    setCurrentPage(1)
  }, [])

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
    productGridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  // Get selected fabric category info
  const selectedCategory = useMemo(() => {
    return fabricCategories.find((cat) => cat.id === selectedFabric)
  }, [selectedFabric])

  // Scroll to product grid when a category is selected
  useEffect(() => {
    if (selectedFabric && productGridRef.current) {
      // Small delay to allow the animation to start
      const timeout = setTimeout(() => {
        productGridRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [selectedFabric])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <CartDrawer />

      <main className="flex-1">
        {/* Hero Section */}
        
        <ShopHero />

        {/* Fabric Category Selection - Always visible */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-10 text-center">
              <h3 className="mt-3 mb-5 text-foreground"> Unicamente pago Contra Entrega</h3>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Elige tu tela favorita
              </h2>
              
              <p className="mt-3 text-muted-foreground">
                Descubre nuestra colección organizada por tipo de tela
              </p>
            </div>

            {/* Category Cards - Always visible */}
            <FabricCategorySelector
              selectedCategory={selectedFabric}
              onSelectCategory={handleFabricChange}
            />

            {/* Tagline */}
            <p className="mt-10 text-center text-lg italic text-muted-foreground">
              &ldquo;Solo ponte cómodo&rdquo;
            </p>
            <a
                href="https://wa.me/573224732230?text=Quiero%20personalizar%20mi%20pijama%21"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-3xl text-center italic underline font-semibold tracking-tight text-foreground md:text-2xl hover:text-primary transition-colors"
              >
                Personaliza tu pijama aquí !
              </a>
          </div>
        </section>

        {/* Expandable Product Grid */}
        <div
          ref={productGridRef}
          className={cn(
            "overflow-hidden transition-all duration-700 ease-out",
            selectedFabric
              ? "max-h-[5000px] opacity-100"
              : "max-h-0 opacity-0"
          )}
        >
          <section className="border-t bg-background pb-16 pt-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Category Header */}
              <div
                className={cn(
                  "mb-8 transition-all duration-500 delay-200",
                  selectedFabric
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                      {selectedCategory?.name}
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      {filteredProducts.length} productos disponibles
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => { setShowNavidad(!showNavidad); setCurrentPage(1) }}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium border transition-all",
                        showNavidad
                          ? "bg-red-600 text-white border-red-600"
                          : "bg-transparent text-muted-foreground border-border hover:border-red-400 hover:text-red-600"
                      )}
                    >
                      🎄 Navidad
                    </button>
                  </div>
                </div>
              </div>

              {/* Products Grid with staggered animation */}
              <div
                className={cn(
                  "grid gap-4 sm:gap-6",
                  "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                )}
              >
                {paginatedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={cn(
                      "transition-all duration-500",
                      selectedFabric
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    )}
                    style={{
                      transitionDelay: selectedFabric ? `${200 + index * 75}ms` : "0ms"
                    }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {selectedFabric && filteredProducts.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16">
                  <p className="text-muted-foreground">
                    No hay productos disponibles en esta categoría.
                  </p>
                </div>
              )}

              {/* Pagination */}
              {selectedFabric && totalPages > 1 && (
                <div className="mt-10">
                  <ShopPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </div>
          </section>
          
        </div>

        {/* Additional Info Section */}
        <section className="border-t bg-secondary/20 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">Pago Contra Entrega</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Pagas cuando llegue tu producto
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">Calidad Premium</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Materiales de la más alta calidad
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">Devolución Fácil</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  30 días para cambios y devoluciones
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
    </div>
  )
}
