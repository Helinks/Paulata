import Link from "next/link"
import Image from "next/image"

export function ShopHero() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Bienvenido a{" "}
                <span className="relative">
                  Paulata
                  <svg
                    className="absolute -bottom-2 left-0 h-3 w-full text-primary/30"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 8 Q25 0 50 8 T100 8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  </svg>
                </span>
              </h1>
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-foreground">Pagina principal</span>
          </nav>
        </div>
      </div>

      {/* Decorative images - mimicking the reference */}
      <div className="absolute right-0 top-0 h-full w-2/3 overflow-hidden opacity-20 sm:opacity-40">
        <div className="absolute inset-0 flex items-center justify-end gap-4 pr-8">
          <div className="relative overflow-hidden group h-36 w-28 rounded-lg bg-foreground/10 sm:h-46 sm:w-36" >
            <Image
              src={"/images/IMG-20251214-WA0032.jpg"}
              alt={"Foto 1"}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
          <div className="relative overflow-hidden group h-40 w-31 rounded-lg bg-foreground/10 sm:h-50 sm:w-38" >
            <Image
              src={"/images/IMG-20251105-WA0018 (2).png"}
              alt={"Foto 2"}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
          <div className="hidden sm:block relative overflow-hidden group h-40 w-31 rounded-lg bg-foreground/10 sm:h-55 sm:w-40" >
            <Image
              src={"/images/IMG-20251214-WA0033.jpg"}
              alt={"Foto 1"}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
          <div className="hidden sm:block relative overflow-hidden group h-40 w-31 rounded-lg bg-foreground/10 sm:h-46 sm:w-36" >
            <Image
              src={"/images/IMG-20251214-WA0037.jpg"}
              alt={"Foto 1"}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
