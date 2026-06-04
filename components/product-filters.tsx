"use client"

import { useState } from "react"
import { ChevronDown, Grid3X3, LayoutGrid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FilterOption {
  label: string
  value: string
}

const categories: FilterOption[] = [
  { label: "Todos", value: "all" },
  { label: "Pijamas", value: "pijamas" },
  { label: "Batas", value: "batas" },
  { label: "Pantuflas", value: "pantuflas" },
  { label: "Sets", value: "sets" },
]

const colors: FilterOption[] = [
  { label: "Todos", value: "all" },
  { label: "Azul", value: "blue" },
  { label: "Rosa", value: "pink" },
  { label: "Gris", value: "gray" },
  { label: "Negro", value: "black" },
  { label: "Beige", value: "beige" },
]

const sizes: FilterOption[] = [
  { label: "Todas", value: "all" },
  { label: "XS", value: "xs" },
  { label: "S", value: "s" },
  { label: "M", value: "m" },
  { label: "L", value: "l" },
  { label: "XL", value: "xl" },
]

interface FilterDropdownProps {
  label: string
  options: FilterOption[]
  selected: string
  onSelect: (value: string) => void
}

function FilterDropdown({
  label,
  options,
  selected,
  onSelect,
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const selectedLabel = options.find((o) => o.value === selected)?.label

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
      >
        {label}
        {selected !== "all" && (
          <span className="text-foreground">: {selectedLabel}</span>
        )}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 z-20 mt-2 min-w-[140px] rounded-md border border-border bg-background p-2 shadow-lg">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onSelect(option.value)
                  setIsOpen(false)
                }}
                className={cn(
                  "flex w-full items-center gap-2 rounded-sm px-3 py-1.5 text-sm transition-colors hover:bg-secondary",
                  selected === option.value && "bg-secondary font-medium"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export interface Filters {
  category: string
  color: string
  size: string
}

interface ProductFiltersProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
  gridColumns: 2 | 3 | 4
  onGridColumnsChange: (columns: 2 | 3 | 4) => void
}

export function ProductFilters({
  filters,
  onFiltersChange,
  gridColumns,
  onGridColumnsChange,
}: ProductFiltersProps) {
  const hasActiveFilters =
    filters.category !== "all" ||
    filters.color !== "all" ||
    filters.size !== "all"

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <span className="text-sm font-medium text-foreground flex items-center gap-2">
          Filtrar por
          {hasActiveFilters && (
            <span className="h-2 w-2 rounded-full bg-primary" />
          )}
        </span>
        <FilterDropdown
          label="Categoría"
          options={categories}
          selected={filters.category}
          onSelect={(value) =>
            onFiltersChange({ ...filters, category: value })
          }
        />
        <FilterDropdown
          label="Color"
          options={colors}
          selected={filters.color}
          onSelect={(value) => onFiltersChange({ ...filters, color: value })}
        />
        <FilterDropdown
          label="Talla"
          options={sizes}
          selected={filters.size}
          onSelect={(value) => onFiltersChange({ ...filters, size: value })}
        />
        {hasActiveFilters && (
          <button
            onClick={() =>
              onFiltersChange({ category: "all", color: "all", size: "all" })
            }
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Grid Toggle */}
      <div className="hidden sm:flex items-center gap-1 border border-border rounded-md p-1">
        <Button
          variant={gridColumns === 2 ? "secondary" : "ghost"}
          size="icon-sm"
          onClick={() => onGridColumnsChange(2)}
        >
          <List className="h-4 w-4" />
          <span className="sr-only">2 columnas</span>
        </Button>
        <Button
          variant={gridColumns === 3 ? "secondary" : "ghost"}
          size="icon-sm"
          onClick={() => onGridColumnsChange(3)}
        >
          <LayoutGrid className="h-4 w-4" />
          <span className="sr-only">3 columnas</span>
        </Button>
        <Button
          variant={gridColumns === 4 ? "secondary" : "ghost"}
          size="icon-sm"
          onClick={() => onGridColumnsChange(4)}
        >
          <Grid3X3 className="h-4 w-4" />
          <span className="sr-only">4 columnas</span>
        </Button>
      </div>
    </div>
  )
}
