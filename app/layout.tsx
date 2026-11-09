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
  title: 'SERWOLIFT - Serwis UTB | Międzyrzec Podlaski, Radzyń Podlaski, Kąkolewnica',
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
        url: '/search-thumbnail.jpg',
        width: 630,
        height: 630,
        alt: 'Serwolift - Specjalistyczny Serwis UTB',
      },
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Serwolift - Specjalistyczny Serwis UTB',
      },
    ],
  },

  twitter: {
    card: 'summary',
    title: 'SERWOLIFT - Serwis UTB',
    description: 'Profesjonalny serwis ładowarek teleskopowych, wózków widłowych, podnośników i HDS.',
    images: ['/search-thumbnail.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  
  icons: {
    icon: '/favicon.ico',
  },

  other: {
    thumbnail: 'https://serwolift.pl/search-thumbnail.jpg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://serwolift.pl/#organization',
      name: 'Serwolift - Paweł Jóźwik',
      url: 'https://serwolift.pl',
      logo: 'https://serwolift.pl/search-thumbnail.jpg',
      image: 'https://serwolift.pl/search-thumbnail.jpg',
      description: 'Profesjonalny serwis ładowarek teleskopowych, wózków widłowych, podnośników i HDS. Przeglądy UDT i dokumentacja techniczna.',
      telephone: '+48 608 209 586',
      email: 'biuro@serwolift.pl',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Południowa 6',
        addressLocality: 'Kąkolewnica',
        postalCode: '21-302',
        addressRegion: 'lubelskie',
        addressCountry: 'PL',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://serwolift.pl/#webpage',
      url: 'https://serwolift.pl',
      name: 'SERWOLIFT - Serwis UTB | Międzyrzec Podlaski, Radzyń Podlaski, Kąkolewnica',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        '@id': 'https://serwolift.pl/#primaryimage',
        url: 'https://serwolift.pl/search-thumbnail.jpg',
        contentUrl: 'https://serwolift.pl/search-thumbnail.jpg',
        width: 630,
        height: 630,
        caption: 'Serwolift Serwis UTB',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${supreme.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}