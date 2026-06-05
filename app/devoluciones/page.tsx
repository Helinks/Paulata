import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"


export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <CartDrawer />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="border-b border-border bg-secondary/20">
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                                Devoluciones y Garantías
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Conoce nuestras políticas relacionadas con cambios, devoluciones y
                                garantías antes de realizar tu compra.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 sm:py-20 lg:py-24">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <div className="space-y-8">

                            {/* Política principal */}
                            <div className="rounded-2xl border border-border bg-background p-8">
                                <h2 className="text-xl font-medium text-foreground">
                                    Fabricación Sobre Pedido
                                </h2>

                                <p className="mt-4 text-muted-foreground leading-7">
                                    Todos nuestros productos son fabricados exclusivamente después de
                                    confirmar la compra. Cada prenda es producida específicamente para
                                    el cliente, por lo que no manejamos inventario de reposición para
                                    cambios o devoluciones por preferencias personales.
                                </p>
                            </div>

                            {/* Sin cambios */}
                            <div className="rounded-2xl border border-border bg-background p-8">
                                <h2 className="text-xl font-medium text-foreground">
                                    ¿Puedo devolver o cambiar mi pedido?
                                </h2>

                                <p className="mt-4 text-muted-foreground leading-7">
                                    Debido a nuestro modelo de fabricación sobre pedido, no realizamos
                                    cambios de talla, color, diseño o modelo una vez confirmado el
                                    pedido.
                                </p>

                                <p className="mt-4 text-muted-foreground leading-7">
                                    Tampoco realizamos devoluciones de dinero por errores en la
                                    selección de talla o por cambios de opinión posteriores a la
                                    compra.
                                </p>
                            </div>

                            {/* Tallas */}
                            <div className="rounded-2xl border border-border bg-background p-8">
                                <h2 className="text-xl font-medium text-foreground">
                                    Importancia de revisar la guía de tallas
                                </h2>

                                <p className="mt-4 text-muted-foreground leading-7">
                                    Antes de realizar tu compra, te recomendamos revisar cuidadosamente
                                    nuestra guía de tallas. Esta información se encuentra disponible
                                    para ayudarte a seleccionar la opción más adecuada.
                                </p>

                                <p className="mt-4 text-muted-foreground leading-7">
                                    La elección de la talla es responsabilidad del comprador, por lo
                                    que no podremos realizar cambios derivados de una selección
                                    incorrecta.
                                </p>
                            </div>

                            {/* Garantía */}
                            <div className="rounded-2xl border border-border bg-background p-8">
                                <h2 className="text-xl font-medium text-foreground">
                                    Casos cubiertos por garantía
                                </h2>

                                <p className="mt-4 text-muted-foreground leading-7">
                                    Si recibes un producto con defectos de fabricación atribuibles a
                                    nuestro proceso productivo, puedes comunicarte con nosotros para
                                    revisar el caso.
                                </p>

                                <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                                    <li>Costuras defectuosas.</li>
                                    <li>Errores de confección.</li>
                                    <li>Defectos evidentes de fabricación.</li>
                                    <li>Producto diferente al solicitado.</li>
                                </ul>

                                <p className="mt-4 text-muted-foreground leading-7">
                                    Cada caso será evaluado individualmente y podrá requerirse evidencia
                                    fotográfica del producto recibido.
                                </p>
                            </div>

                            {/* Qué hacer */}
                            <div className="rounded-2xl border border-border bg-background p-8">
                                <h2 className="text-xl font-medium text-foreground">
                                    ¿Cómo solicitar una revisión de garantía?
                                </h2>

                                <ol className="mt-4 list-decimal space-y-3 pl-6 text-muted-foreground">
                                    <li>Contáctanos a través de nuestros canales de atención.</li>
                                    <li>Adjunta fotografías claras del producto.</li>
                                    <li>Describe el inconveniente encontrado.</li>
                                </ol>

                                <p className="mt-4 text-muted-foreground leading-7">
                                    Nuestro equipo revisará la solicitud y te informará los pasos a
                                    seguir en el menor tiempo posible.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Nota */}
                <section className="border-t border-border bg-secondary/20 py-16">
                    <div className="mx-auto max-w-3xl px-4 text-center">
                        <h2 className="text-xl font-medium text-foreground">
                            ¿Necesitas ayuda?
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            Si tienes dudas antes de comprar, te recomendamos consultar nuestra
                            guía de tallas o contactarnos para recibir asesoría personalizada.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
