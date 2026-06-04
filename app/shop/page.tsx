"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { ProductCard } from "@/components/product-card"
import { SidebarFilters, type SidebarFilters as SidebarFiltersType } from "@/components/sidebar-filters"
import { SortDropdown } from "@/components/sort-dropdown"
import { MobileFilters } from "@/components/mobile-filters"
import { ShopPagination } from "@/components/shop-pagination"
import { products as allProducts } from "@/data/products"
import { cn } from "@/lib/utils"

const PRODUCTS_PER_PAGE = 9

export default function ShopPage() {
  const [filters, setFilters] = useState<SidebarFiltersType>({
    sizes: [],
    materials: [],
    subcategories: [],
  })
  const [sortBy, setSortBy] = useState("featured")
  const [gridColumns, setGridColumns] = useState<2 | 3 | 4>(3)
  const [currentPage, setCurrentPage] = useState(1)

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = [...allProducts]

    // Filter by material
    if (filters.materials.length > 0) {
      result = result.filter(
        (p) => p.material && filters.materials.includes(p.material)
      )
    }

    // Filter by size
    if (filters.sizes.length > 0) {
      result = result.filter(
        (p) => p.sizes && p.sizes.some((s) => filters.sizes.includes(s))
      )
    }

    // Filter by subcategory (e.g. navidad)
    if (filters.subcategories.length > 0) {
      result = result.filter(
        (p) => p.subcategory && filters.subcategories.includes(p.subcategory)
      )
    }

    // Sort products
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name))
        break
      case "newest":
        result.reverse()
        break
      default:
        break
    }

    return result
  }, [filters, sortBy])

  // Paginate products
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE)
  }, [filteredProducts, currentPage])

  const handleFiltersChange = (newFilters: SidebarFiltersType) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const activeFilterCount =
    filters.sizes.length +
    filters.materials.length +
    filters.subcategories.length

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <CartDrawer />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Inicio
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="font-medium text-foreground">Colecciones</span>
            </nav>
            <h1 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              Colecciones
            </h1>
            <p className="mt-1 text-muted-foreground">
              Descubre nuestra colección de pijamas y ropa de descanso
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <SidebarFilters
                  filters={filters}
                  onFiltersChange={handleFiltersChange}
                  productCount={filteredProducts.length}
                />
              </div>
            </div>

            {/* Products Section */}
            <div className="flex-1 min-w-0">
              {/* Header with Sort and Mobile Filter */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <MobileFilters
                    filters={filters}
                    onFiltersChange={handleFiltersChange}
                    productCount={filteredProducts.length}
                    activeFilterCount={activeFilterCount}
                  />
                  <p className="text-sm text-muted-foreground">
                    {filteredProducts.length} productos
                  </p>
                </div>
                <SortDropdown
                  sortBy={sortBy}
                  onSortChange={(value) => {
                    setSortBy(value)
                    setCurrentPage(1)
                  }}
                  gridColumns={gridColumns}
                  onGridColumnsChange={setGridColumns}
                />
              </div>

              {/* Products Grid */}
              <div
                className={cn(
                  "mt-6 grid gap-4 sm:gap-6",
                  gridColumns === 2 && "grid-cols-2",
                  gridColumns === 3 && "grid-cols-2 lg:grid-cols-3",
                  gridColumns === 4 && "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                )}
              >
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="rounded-full bg-secondary p-4 mb-4">
                    <svg
                      className="h-8 w-8 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-foreground">
                    No se encontraron productos
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground max-w-sm">
                    Intenta ajustar los filtros para encontrar lo que buscas.
                  </p>
                    <button
                      onClick={() =>
                        setFilters({
                          sizes: [],
                          materials: [],
                          subcategories: [],
                        })
                      }
                      className="mt-4 text-sm font-medium text-foreground underline underline-offset-4 hover:no-underline"
                    >
                      Limpiar todos los filtros
                    </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12">
                  <ShopPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
