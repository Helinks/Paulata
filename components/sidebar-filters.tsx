"use client"

import { useState } from "react"
import { ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { filterOptions } from "@/data/products"
import { cn } from "@/lib/utils"

export interface SidebarFilters {
  sizes: string[]
  materials: string[]
  subcategories: string[]
}

interface SidebarFiltersProps {
  filters: SidebarFilters
  onFiltersChange: (filters: SidebarFilters) => void
  productCount: number
}

interface FilterSectionProps {
  title: string
  defaultOpen?: boolean
  children: React.ReactNode
}

function FilterSection({ title, defaultOpen = true, children }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-3 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pt-1 pb-2">{children}</div>
        </div>
      </div>
    </div>
  )
}

export function SidebarFilters({
  filters,
  onFiltersChange,
  productCount,
}: SidebarFiltersProps) {
  const handleSizeChange = (size: string, checked: boolean) => {
    const newSizes = checked
      ? [...filters.sizes, size]
      : filters.sizes.filter((s) => s !== size)
    onFiltersChange({ ...filters, sizes: newSizes })
  }

  const handleMaterialChange = (material: string, checked: boolean) => {
    const newMaterials = checked
      ? [...filters.materials, material]
      : filters.materials.filter((m) => m !== material)
    onFiltersChange({ ...filters, materials: newMaterials })
  }

  const handleSubcategoryChange = (subcategory: string, checked: boolean) => {
    const newSubcategories = checked
      ? [...filters.subcategories, subcategory]
      : filters.subcategories.filter((s) => s !== subcategory)
    onFiltersChange({ ...filters, subcategories: newSubcategories })
  }

  const clearAllFilters = () => {
    onFiltersChange({
      sizes: [],
      materials: [],
      subcategories: [],
    })
  }

  const activeFilterCount = filters.sizes.length + filters.materials.length + filters.subcategories.length

  return (
    <aside className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Filtros</h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {productCount} productos
          </p>
        </div>
        {activeFilterCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Limpiar ({activeFilterCount})
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 py-4 border-b border-border">
          {filters.sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeChange(size, false)}
              className="inline-flex items-center gap-1 rounded-full bg-foreground/10 px-3 py-1 text-xs font-medium text-foreground hover:bg-foreground/20 transition-colors"
            >
              Talla: {size}
              <X className="h-3 w-3" />
            </button>
          ))}
          {filters.materials.map((material) => (
            <button
              key={material}
              onClick={() => handleMaterialChange(material, false)}
              className="inline-flex items-center gap-1 rounded-full bg-foreground/10 px-3 py-1 text-xs font-medium text-foreground hover:bg-foreground/20 transition-colors"
            >
              {filterOptions.materials.find((m) => m.value === material)?.label}
              <X className="h-3 w-3" />
            </button>
          ))}
          {filters.subcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => handleSubcategoryChange(sub, false)}
              className="inline-flex items-center gap-1 rounded-full bg-foreground/10 px-3 py-1 text-xs font-medium text-foreground hover:bg-foreground/20 transition-colors"
            >
              {sub === "navidad" ? "🎄 Navidad" : sub}
              <X className="h-3 w-3" />
            </button>
          ))}
        </div>
      )}

      {/* Material Filter */}
      <FilterSection title="Material">
        <div className="flex flex-col gap-3">
          {filterOptions.materials.map((material) => (
            <label
              key={material.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Checkbox
                checked={filters.materials.includes(material.value)}
                onCheckedChange={(checked) =>
                  handleMaterialChange(material.value, checked as boolean)
                }
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {material.label}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Size Filter */}
      <FilterSection title="Talla">
        <div className="flex flex-wrap gap-2">
          {filterOptions.sizes.map((size) => (
            <button
              key={size}
              onClick={() =>
                handleSizeChange(size, !filters.sizes.includes(size))
              }
              className={cn(
                "min-w-[40px] px-3 py-1.5 text-sm font-medium rounded-md border transition-all",
                filters.sizes.includes(size)
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Navidad Filter */}
      <FilterSection title="🎄 Navidad">
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <Checkbox
              checked={filters.subcategories.includes("navidad")}
              onCheckedChange={(checked) =>
                handleSubcategoryChange("navidad", checked as boolean)
              }
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Solo artículos de Navidad
            </span>
          </label>
        </div>
      </FilterSection>
    </aside>
  )
}
