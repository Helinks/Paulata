"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ShopPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function ShopPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ShopPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  // Show limited page numbers on mobile
  const getVisiblePages = () => {
    if (totalPages <= 5) return pages
    
    if (currentPage <= 3) {
      return [...pages.slice(0, 4), "...", totalPages]
    }
    
    if (currentPage >= totalPages - 2) {
      return [1, "...", ...pages.slice(totalPages - 4)]
    }
    
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages]
  }

  return (
    <nav
      className="flex items-center justify-center gap-1"
      aria-label="Paginación"
    >
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {getVisiblePages().map((page, index) =>
        typeof page === "string" ? (
          <span
            key={`ellipsis-${index}`}
            className="px-2 text-muted-foreground"
          >
            {page}
          </span>
        ) : (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "ghost"}
            size="icon-sm"
            onClick={() => onPageChange(page)}
            className={cn(
              "w-8",
              currentPage === page && "pointer-events-none"
            )}
            aria-label={`Página ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </Button>
        )
      )}

      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  )
}
