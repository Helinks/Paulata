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
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                                Guía de Tallas
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground text-pretty">
                                Encuentra la talla ideal para dama, caballero y niños. Todas las
                                medidas están expresadas en centímetros.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Size Guide */}
                <section className="py-16 sm:py-20 lg:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="space-y-12">

                            {/* DAMA */}
                            <div className="rounded-2xl border border-border bg-background p-6">
                                <h2 className="mb-6 text-2xl font-medium">Tallas Dama</h2>

                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[800px] border-collapse">
                                        <thead>
                                            <tr className="border-b border-border">
                                                <th className="py-3 text-left">Talla</th>
                                                <th className="py-3 text-left">Largo Pantalón</th>
                                                <th className="py-3 text-left">Largo Pantaloneta / Short</th>
                                                <th className="py-3 text-left">Cintura</th>
                                                <th className="py-3 text-left">Largo Camiseta</th>
                                                <th className="py-3 text-left">Ancho Camiseta</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            {[
                                                ["XS", "95", "33", "82", "58", "42"],
                                                ["S", "97", "37", "84", "60", "45"],
                                                ["M", "98", "38", "90", "62", "46"],
                                                ["L", "100", "40", "92", "63", "48"],
                                                ["XL", "102", "40", "96", "66", "50"],
                                                ["XXL", "104", "40", "102", "67", "52"],
                                            ].map((row) => (
                                                <tr key={row[0]} className="border-b border-border/50">
                                                    {row.map((cell, index) => (
                                                        <td key={`${row[0]}-${index}`} className="py-3">
                                                            {index === 0 ? cell : `${cell} cm`}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* CABALLERO */}
                            <div className="rounded-2xl border border-border bg-background p-6">
                                <h2 className="mb-6 text-2xl font-medium">Tallas Caballero</h2>

                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[800px] border-collapse">
                                        <thead>
                                            <tr className="border-b border-border">
                                                <th className="py-3 text-left">Talla</th>
                                                <th className="py-3 text-left">Largo Pantalón</th>
                                                <th className="py-3 text-left">Largo Pantaloneta / Short</th>
                                                <th className="py-3 text-left">Cintura</th>
                                                <th className="py-3 text-left">Largo Camiseta</th>
                                                <th className="py-3 text-left">Ancho Camiseta</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            {[
                                                ["XS", "97", "43", "84", "64", "50"],
                                                ["S", "98", "48", "92", "66", "51"],
                                                ["M", "100", "48", "94", "69", "53"],
                                                ["L", "102", "48", "96", "70", "55"],
                                                ["XL", "104", "49", "102", "73", "57"],
                                                ["XXL", "106", "49", "104", "75", "60"],
                                            ].map((row) => (
                                                <tr key={row[0]} className="border-b border-border/50">
                                                    {row.map((cell, index) => (
                                                        <td key={`${row[0]}-${index}`} className="py-3">
                                                            {index === 0 ? cell : `${cell} cm`}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* NIÑOS */}
                            <div className="rounded-2xl border border-border bg-background p-6">
                                <h2 className="mb-6 text-2xl font-medium">Tallas Niños</h2>

                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[800px] border-collapse">
                                        <thead>
                                            <tr className="border-b border-border">
                                                <th className="py-3 text-left">Talla</th>
                                                <th className="py-3 text-left">Largo Pantalón</th>
                                                <th className="py-3 text-left">Largo Pantaloneta / Short</th>
                                                <th className="py-3 text-left">Cintura</th>
                                                <th className="py-3 text-left">Largo Camiseta</th>
                                                <th className="py-3 text-left">Ancho Camiseta</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            {[
                                                ["2", "56", "26", "60", "36", "33"],
                                                ["4", "59", "27", "63", "40", "36"],
                                                ["6", "63", "28", "68", "43", "35"],
                                                ["8", "68", "29", "71", "47", "38"],
                                                ["10", "72", "31", "74", "52", "39"],
                                                ["12", "76", "31", "77", "56", "41"],
                                                ["14", "84", "35", "80", "59", "41"],
                                                ["16", "84", "35", "86", "64", "41"],
                                            ].map((row) => (
                                                <tr key={row[0]} className="border-b border-border/50">
                                                    {row.map((cell, index) => (
                                                        <td key={`${row[0]}-${index}`} className="py-3">
                                                            {index === 0 ? cell : `${cell} cm`}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Nota */}
                <section className="border-t border-border bg-secondary/20 py-16">
                    <div className="mx-auto max-w-3xl px-4 text-center">
                        <h2 className="text-xl font-medium">¿No estás seguro de tu talla?</h2>
                        <p className="mt-3 text-muted-foreground">
                            Si tienes dudas sobre cuál elegir, contáctanos y te ayudaremos a
                            encontrar la talla perfecta para ti.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
