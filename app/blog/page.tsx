"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { BlogCard } from "@/components/blog-card"
import { BlogSidebar } from "@/components/blog-sidebar"
import { blogPosts, blogCategories, popularPosts } from "@/data/blog-posts"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>()
  const [searchQuery, setSearchQuery] = useState("")

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    let posts = blogPosts

    if (selectedCategory) {
      posts = posts.filter(
        (post) =>
          post.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory
      )
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
      )
    }

    return posts
  }, [selectedCategory, searchQuery])

  // Get featured posts (first 2 featured posts)
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 1)
  const regularPosts = filteredPosts.filter(
    (post) => !featuredPosts.some((fp) => fp.id === post.id) || selectedCategory || searchQuery
  )

  const showFeatured = !selectedCategory && !searchQuery

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <CartDrawer />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">
                Inicio
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground font-medium">Blog</span>
            </nav>

            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                El Blog de Paulata
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Consejos para dormir mejor, tendencias de moda cómoda y todo lo que
                necesitas saber para disfrutar del descanso que te mereces.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {showFeatured && featuredPosts.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px flex-1 bg-border" />
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Artículo Destacado
              </h2>
              <span className="h-px flex-1 bg-border" />
            </div>
            <BlogCard post={featuredPosts[0]} featured />
          </section>
        )}

        {/* Main Content */}
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Posts Grid */}
            <div className="flex-1">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-semibold text-foreground">
                  {selectedCategory
                    ? `Categoría: ${blogCategories.find((c) => c.slug === selectedCategory)?.name || selectedCategory}`
                    : searchQuery
                      ? `Resultados para "${searchQuery}"`
                      : "Todos los Artículos"}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {filteredPosts.length} artículo{filteredPosts.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Posts */}
              {regularPosts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2">
                  {regularPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 px-4 rounded-xl border border-dashed border-border">
                  <p className="text-2xl mb-3">{"📝"}</p>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    No se encontraron artículos
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Intenta con otra categoría o término de búsqueda.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <BlogSidebar
                  popularPosts={popularPosts}
                  categories={blogCategories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
