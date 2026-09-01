import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { siteUrl } from "@/content/site-config";

const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Rescue Smart - Erste-Hilfe-Ausbildung für Unternehmen & Führerschein",
    template: "%s | Rescue Smart",
  },
  description:
    "Rescue Smart bietet konforme Erste-Hilfe-Ausbildung nach DGUV sowie FeV für Unternehmen und Führerschein-Kurse. Exzellente Schulungen aus der Praxis für die Praxis.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Rescue Smart",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper text-slate-800 antialiased">
        <JsonLd data={localBusinessSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Zum Hauptinhalt springen
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
