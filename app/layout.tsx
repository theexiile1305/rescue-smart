import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default:
      "Rescue Smart - Erste-Hilfe-Ausbildung für Unternehmen & Führerschein",
    template: "%s | Rescue Smart",
  },
  description:
    "Rescue Smart bietet konforme Erste-Hilfe-Ausbildung nach DGUV sowie Fev für Unternehmen und Führerschein-Kurse. Exzellente Schulungen aus der Praxis für die Praxis.",
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
    <html lang="de">
      <body className="flex min-h-screen flex-col bg-white text-slate-800 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary-700 focus:px-4 focus:py-2 focus:text-white"
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
