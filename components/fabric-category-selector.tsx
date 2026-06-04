"use client"

import Image from "next/image"
import { fabricCategories, type FabricType } from "@/data/products"
import { cn } from "@/lib/utils"

interface FabricCategorySelectorProps {
  selectedCategory: FabricType | null
  onSelectCategory: (category: FabricType | null) => void
}

export function FabricCategorySelector({ 
  selectedCategory, 
  onSelectCategory 
}: FabricCategorySelectorProps) {
  
  const handleCategoryClick = (categoryId: FabricType) => {
    // Toggle: if clicking the same category, close it; otherwise open the new one
    if (selectedCategory === categoryId) {
      onSelectCategory(null)
    } else {
      onSelectCategory(categoryId)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
      {fabricCategories.map((category) => {
        const isActive = selectedCategory === category.id
        const hasSelection = selectedCategory !== null
        const isInactive = hasSelection && !isActive

        return (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={cn(
              "group relative aspect-[4/3] overflow-hidden rounded-2xl",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2",
              "transition-all duration-500 ease-out",
              // Scale and transform effects
              isActive && "ring-2 ring-foreground ring-offset-2",
              isInactive && "opacity-60 saturate-50",
              !hasSelection && "hover:scale-[1.02]"
            )}
          >
            {/* Background Image */}
            <Image
              src={category.image}
              alt={category.name}
              fill
              className={cn(
                "object-cover transition-transform duration-700",
                !isInactive && "group-hover:scale-110"
              )}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div 
              className={cn(
                "absolute inset-0 bg-black opacity-70" 
              )}
            />

            {/* Gradient Overlay */}
            <div 
              className={cn(
                "absolute inset-0 transition-all duration-500",
                isActive 
                  ? "bg-gradient-to-t from-black/80 via-black/50 to-black/20"
                  : "bg-gradient-to-t from-black/70 via-black/30 to-black/10",
                !isInactive && "group-hover:from-black/80 group-hover:via-black/40"
              )} 
            />

            {/* Active indicator bar */}
            <div 
              className={cn(
                "absolute bottom-0 left-0 right-0 h-1 bg-white transition-all duration-500",
                isActive ? "opacity-100" : "opacity-0"
              )}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center md:p-6">
              <h3 
                className={cn(
                  "text-xl font-semibold text-white md:text-2xl lg:text-3xl text-balance leading-tight transition-transform duration-300",
                  isActive && "scale-105"
                )}
              >
                {category.name}
              </h3>
              <p className="mt-2 text-xs text-white/80 md:text-sm">
                {category.description}
              </p>
              
              {/* Button indicator */}
              <span 
                className={cn(
                  "mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium backdrop-blur-sm transition-all duration-300 md:text-sm",
                  isActive 
                    ? "bg-white text-foreground" 
                    : "bg-white/20 text-white group-hover:bg-white group-hover:text-foreground"
                )}
              >
                {isActive ? "Ocultar" : "Ver colección"}
                <svg 
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-300 md:h-4 md:w-4",
                    isActive ? "rotate-180" : "group-hover:translate-x-1"
                  )} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {isActive ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  )}
                </svg>
              </span>
            </div>
          </button>
        )
      })}
    </div>
  )
}
