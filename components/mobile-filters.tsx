"use client"

import { useState } from "react"
import { SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SidebarFilters, type SidebarFilters as SidebarFiltersType } from "./sidebar-filters"

interface MobileFiltersProps {
  filters: SidebarFiltersType
  onFiltersChange: (filters: SidebarFiltersType) => void
  productCount: number
  activeFilterCount: number
}

export function MobileFilters({
  filters,
  onFiltersChange,
  productCount,
  activeFilterCount,
}: MobileFiltersProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2 lg:hidden">
          <SlidersHorizontal className="h-4 w-4" />
          Filtros
          {activeFilterCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-xs text-background">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="pb-4">
          <SheetTitle>Filtros</SheetTitle>
        </SheetHeader>
        <SidebarFilters
          filters={filters}
          onFiltersChange={onFiltersChange}
          productCount={productCount}
        />
        <div className="sticky bottom-0 bg-background pt-4 pb-2 border-t border-border mt-4">
          <Button className="w-full" onClick={() => setOpen(false)}>
            Ver {productCount} productos
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
