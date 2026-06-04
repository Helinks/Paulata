import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/context/cart-context'
import './globals.css'
import { BotonFlotante } from '@/components/float-button-ws'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Paulata | Solo ponte cómodo - Pijamas Premium',
  description: 'Descubre la mejor colección de pijamas, batas y ropa de descanso. Comodidad y estilo para tu hogar. Envío gratis en compras mayores a $50.',
  keywords: ['pijamas', 'ropa de dormir', 'batas', 'loungewear', 'ropa cómoda'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
          <BotonFlotante></BotonFlotante>
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
