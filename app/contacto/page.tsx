import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { CartDrawer } from "@/components/cart-drawer"

export const metadata = {
  title: "Contactanos | Paulata",
  description: "Estamos aqui para ayudarte. Contacta con el equipo de Paulata para cualquier consulta sobre pedidos, productos o colaboraciones.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <CartDrawer />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-secondary/20">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Contactanos
              </h1>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Estamos aqui para ayudarte. Ya sea que tengas preguntas sobre
                nuestros productos, tu pedido, o simplemente quieras saludar.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="">
              <div className="lg:col-span-3">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="border-t border-border bg-secondary/20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-medium text-foreground">
                Preguntas frecuentes
              </h2>
              <p className="mt-3 text-muted-foreground">
                Antes de escribirnos, quiza encuentres la respuesta que buscas
                en nuestra seccion de preguntas frecuentes.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { question: "Tiempos de envio", answer: "2 dias habiles" },
                  { question: "Politica de devolucion", answer: "Sin devoliciones" },
                  { question: "Metodos de pago", answer: "Nequi, Daviplata, cuenta de ahorros Bancolombia" },
                ].map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-xl border border-border bg-background p-5 text-left"
                  >
                    <p className="text-sm font-medium text-foreground">
                      {faq.question}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
