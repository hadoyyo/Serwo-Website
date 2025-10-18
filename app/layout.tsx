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
  title: 'SERWOLIFT - Serwis urządzeń transportu bliskiego (UTB)',
  description: 'Profesjonalny serwis ładowarek teleskopowych, wózków widłowych, podnośników i HDS. Przeglądy UDT i dokumentacja techniczna. Kąkolewnica - Międzyrzec Podlaski',
  keywords: 'serwis ładowarek, naprawa wózków widłowych, przeglądy UDT, serwis podnośników, serwis HDS, ładowarki teleskopowe, Kąkolewnica',
  
  metadataBase: new URL('https://serwolift.pl'),
  
  openGraph: {
    title: 'SERWOLIFT - Serwis urządzeń transportu bliskiego (UTB)',
    description: 'Profesjonalny serwis UTB: ładowarki teleskopowe, wózki widłowe, podnośniki, suwnice i HDS. Przeglądy UDT, naprawy, dokumentacja techniczna. Dojazd do klienta.',
    url: 'https://serwolift.pl',
    siteName: 'Serwolift',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Serwolift - Specjalistyczny Serwis UTB',
      },
    ],
  },
  
  robots: {
    index: true,
    follow: true,
  },
  
  icons: {
    icon: '/favicon.ico',
  },
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