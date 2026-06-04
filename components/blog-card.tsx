import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/data/blog-posts"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-2xl bg-card border border-border">
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
              <Badge 
                variant="secondary" 
                className="w-fit mb-4 bg-secondary text-secondary-foreground font-medium"
              >
                {post.category}
              </Badge>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-tight mb-4 group-hover:text-foreground/80 transition-colors text-balance">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={36}
                    height={36}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{formattedDate}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge 
            variant="secondary" 
            className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground font-medium"
          >
            {post.category}
          </Badge>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-lg font-semibold text-foreground leading-snug mb-3 group-hover:text-foreground/80 transition-colors line-clamp-2 text-balance">
            {post.title}
          </h3>
          
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={28}
                height={28}
                className="rounded-full object-cover"
              />
              <span className="text-xs text-muted-foreground">{post.author.name}</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{formattedDate}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime} min
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

// Compact card for sidebar
export function BlogCardCompact({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("es-ES", {
    month: "short",
    day: "numeric",
  })

  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="flex gap-4">
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center min-w-0">
          <h4 className="text-sm font-medium text-foreground leading-snug line-clamp-2 group-hover:text-foreground/80 transition-colors">
            {post.title}
          </h4>
          <p className="text-xs text-muted-foreground mt-1">{formattedDate}</p>
        </div>
      </Link>
    </article>
  )
}
