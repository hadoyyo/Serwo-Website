import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const supreme = localFont({
  src: [
    {
      path: './fonts/Supreme-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Supreme-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Supreme-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-supreme',
})

export const metadata: Metadata = {
  title: 'Serwolift',
  description: 'Serwis ładowarek teleskopowych, wózków widłowych, suwnic, HDS-ów i podnośników. Przeglądy, przygotowanie dokumentacji technicznej, obliczanie stopnia wykorzystania resursu i wiele więcej',
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://serwolift.pl'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${supreme.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}