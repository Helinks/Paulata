"use client"

import Link from "next/link"
import { Search, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BlogCardCompact } from "@/components/blog-card"
import type { BlogPost, BlogCategory } from "@/data/blog-posts"

interface BlogSidebarProps {
  popularPosts: BlogPost[]
  categories: BlogCategory[]
  selectedCategory?: string
  onCategoryChange?: (category: string | undefined) => void
  searchQuery?: string
  onSearchChange?: (query: string) => void
}

export function BlogSidebar({
  popularPosts,
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery = "",
  onSearchChange,
}: BlogSidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <Search className="h-4 w-4" />
          Buscar
        </h3>
        <div className="relative">
          <Input
            type="search"
            placeholder="Buscar artículos..."
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      {/* Categories */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">
          Categorías
        </h3>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => onCategoryChange?.(undefined)}
              className={`w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-colors ${
                !selectedCategory
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <span>Todos los artículos</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => onCategoryChange?.(category.slug)}
                className={`w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-colors ${
                  selectedCategory === category.slug
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <span>{category.name}</span>
                <span className={`text-xs ${
                  selectedCategory === category.slug 
                    ? "text-primary-foreground/70" 
                    : "text-muted-foreground"
                }`}>
                  ({category.count})
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">
          Posts Populares
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <BlogCardCompact key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="rounded-xl border border-border bg-secondary/50 p-5">
        <div className="text-center">
          <h3 className="text-sm font-semibold text-foreground mb-2">
            Suscríbete al Newsletter
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            Recibe consejos de bienestar y novedades directamente en tu inbox.
          </p>
          <Link href="/#newsletter">
            <Button size="sm" className="w-full">
              Suscribirse
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative retro element */}
      <div className="rounded-xl border-2 border-dashed border-border p-6 text-center">
        <p className="text-2xl mb-2">{"🌙"}</p>
        <p className="text-sm font-medium text-foreground italic">
          {'"Solo ponte cómodo"'}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          — Paulata
        </p>
      </div>
    </aside>
  )
}
