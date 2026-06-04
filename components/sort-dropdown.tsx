"use client"

import { ChevronDown, Grid2X2, Grid3X3, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { filterOptions } from "@/data/products"
import { cn } from "@/lib/utils"

interface SortDropdownProps {
  sortBy: string
  onSortChange: (value: string) => void
  gridColumns: 2 | 3 | 4
  onGridColumnsChange: (columns: 2 | 3 | 4) => void
}

export function SortDropdown({
  sortBy,
  onSortChange,
  gridColumns,
  onGridColumnsChange,
}: SortDropdownProps) {
  const currentSort = filterOptions.sortOptions.find((opt) => opt.value === sortBy)

  return (
    <div className="flex items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="justify-between gap-2 text-sm font-normal min-w-[200px]"
          >
            <span className="text-muted-foreground">Ordenar por:</span>
            <span className="font-medium">{currentSort?.label}</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[200px]">
          {filterOptions.sortOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onSortChange(option.value)}
              className={cn(
                "cursor-pointer",
                sortBy === option.value && "bg-accent"
              )}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Grid Toggle */}
      <div className="hidden sm:flex items-center gap-1 border border-border rounded-lg p-1">
        <button
          onClick={() => onGridColumnsChange(2)}
          className={cn(
            "p-1.5 rounded transition-colors",
            gridColumns === 2
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-label="2 columnas"
        >
          <Grid2X2 className="h-4 w-4" />
        </button>
        <button
          onClick={() => onGridColumnsChange(3)}
          className={cn(
            "p-1.5 rounded transition-colors",
            gridColumns === 3
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-label="3 columnas"
        >
          <Grid3X3 className="h-4 w-4" />
        </button>
        <button
          onClick={() => onGridColumnsChange(4)}
          className={cn(
            "p-1.5 rounded transition-colors",
            gridColumns === 4
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-label="4 columnas"
        >
          <LayoutGrid className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
