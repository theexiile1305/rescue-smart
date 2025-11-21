import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "RescueSmart - Exzellente Erste-Hilfe-Ausbildung",
  description: "Professionelle Erste-Hilfe-Kurse für Unternehmen und Organisationen. DGUV-anerkannt, praxisnah, kompetent.",
  keywords: "Erste Hilfe, Erste-Hilfe-Kurs, DGUV, betriebliche Ersthelfer, Notfalltraining, AED",
  openGraph: {
    title: "RescueSmart - Exzellente Erste-Hilfe-Ausbildung",
    description: "Professionelle Erste-Hilfe-Kurse für Unternehmen und Organisationen.",
    type: "website",
    locale: "de_DE",
    url: "https://rescuesmart.de",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
