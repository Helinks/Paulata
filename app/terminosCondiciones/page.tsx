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
                            <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                                Términos y Condiciones
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground text-pretty">
                                Conoce las políticas de fabricación, pago, envío y condiciones
                                comerciales que regulan las compras realizadas en Paulata.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 sm:py-20 lg:py-24">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <div className="rounded-2xl border border-border bg-background p-6 sm:p-8 lg:p-10">

                            <p className="text-muted-foreground leading-7">
                                El presente documento establece las políticas de fabricación, pago,
                                envío y condiciones comerciales que regulan las transacciones entre
                                nuestra marca y el cliente. Al momento de realizar su compra o
                                confirmar el pedido, usted acepta de manera expresa y sin excepciones
                                las cláusulas aquí descritas.
                            </p>

                            {/* 1 */}
                            <div className="mt-10">
                                <h2 className="text-xl font-medium text-foreground">
                                    1. Política de Cambios y Devoluciones
                                </h2>

                                <div className="mt-4 space-y-4 text-muted-foreground leading-7">
                                    <p>
                                        <strong className="text-foreground">
                                            Fabricación sobre pedido:
                                        </strong>{" "}
                                        Operamos bajo la modalidad de producción exclusiva sobre pedido,
                                        donde cada pieza se fabrica de manera individual tras la
                                        confirmación de la compra.
                                    </p>

                                    <p>
                                        <strong className="text-foreground">
                                            Sin cambios ni devoluciones:
                                        </strong>{" "}
                                        Debido a la naturaleza personalizada de nuestra producción, no se
                                        realizan cambios de prenda, modelo, color ni devoluciones de
                                        dinero bajo ningún motivo.
                                    </p>

                                    <p>
                                        <strong className="text-foreground">
                                            Responsabilidad del tallaje:
                                        </strong>{" "}
                                        Antes de realizar la compra, se pone a disposición del cliente la
                                        guía de tallas correspondiente. Es responsabilidad exclusiva del
                                        comprador revisar detalladamente dicha información y seleccionar
                                        la talla adecuada. No asumimos responsabilidad por errores en la
                                        elección de talla realizados por el cliente.
                                    </p>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className="mt-10">
                                <h2 className="text-xl font-medium text-foreground">
                                    2. Tiempos de Entrega
                                </h2>

                                <p className="mt-4 text-muted-foreground leading-7">
                                    El tiempo estimado de entrega es de{" "}
                                    <strong className="text-foreground">
                                        dos (2) días hábiles
                                    </strong>{" "}
                                    contados a partir del siguiente día hábil después de haberse
                                    confirmado la compra y validado el pago correspondiente.
                                </p>

                            </div>

                            {/* 3 */}
                            <div className="mt-10">
                                <h2 className="text-xl font-medium text-foreground">
                                    3. Métodos de Pago Electrónico
                                </h2>

                                <p className="mt-4 text-muted-foreground leading-7">
                                    Para procesar la orden e iniciar la fabricación del producto,
                                    disponemos de los siguientes medios de pago:
                                </p>

                                <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                                    <li>Nequi</li>
                                    <li>Daviplata</li>
                                    <li>Bancolombia (Cuenta de Ahorros)</li>
                                </ul>

                                <p className="mt-4 text-muted-foreground leading-7">
                                    Una vez realizada la transacción, el cliente deberá enviar un
                                    comprobante de pago legible para registrar oficialmente el pedido.
                                </p>
                            </div>

                            {/* 4 */}
                            <div className="mt-10">
                                <h2 className="text-xl font-medium text-foreground">
                                    4. Cobertura de Pago Contra Entrega
                                </h2>

                                <p className="mt-4 text-muted-foreground leading-7">
                                    El servicio de pago contra entrega está disponible únicamente para
                                    las siguientes ciudades:
                                </p>

                                <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                                    <li>Bogotá</li>
                                    <li>Madrid</li>
                                    <li>Mosquera</li>
                                    <li>Soacha</li>
                                </ul>

                                <p className="mt-4 text-muted-foreground leading-7">
                                    Para cualquier destino fuera de estas zonas de cobertura, el pedido
                                    deberá ser cancelado previamente en su totalidad mediante alguno de
                                    nuestros medios de pago electrónico antes de proceder con el envío.
                                </p>
                            </div>

                            {/* 5 */}
                            <div className="mt-10">
                                <h2 className="text-xl font-medium text-foreground">
                                    5. Aceptación del Comprador
                                </h2>

                                <p className="mt-4 text-muted-foreground leading-7">
                                    El envío del comprobante de pago o, en su defecto, la confirmación
                                    de una orden bajo la modalidad de pago contra entrega constituye la
                                    aceptación total, expresa y sin reservas de los presentes términos
                                    y condiciones.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Nota Final */}
                <section className="border-t border-border bg-secondary/20 py-16">
                    <div className="mx-auto max-w-3xl px-4 text-center">
                        <h2 className="text-xl font-medium text-foreground">
                            ¿Tienes alguna duda?
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            Si necesitas información adicional sobre nuestros procesos de compra,
                            pagos o envíos, puedes comunicarte con nuestro equipo de atención al
                            cliente.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
