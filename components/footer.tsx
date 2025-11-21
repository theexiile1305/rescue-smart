"use client"

import { useState } from "react"
import { LegalModal } from "@/components/modals/legal-modal"

export function Footer() {
  const [legalContent, setLegalContent] = useState<"impressum" | "datenschutz" | null>(null)

  return (
    <>
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RescueSmart</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Exzellente Erste-Hilfe-Ausbildung für Unternehmen und Privatpersonen.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Kurse</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => {
                      const element = document.querySelector("#leistungen")
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Betriebliche Ersthelfer
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.querySelector("#leistungen")
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Führerschein
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.querySelector("#leistungen")
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Bildungseinrichtungen
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => {
                      const element = document.querySelector("#ueber-uns")
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Über uns
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.querySelector("#kontakt")
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Kontakt
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.querySelector("#faq")
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setLegalContent("impressum")}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Impressum
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLegalContent("datenschutz")}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Datenschutz
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} RescueSmart. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      <LegalModal content={legalContent} isOpen={!!legalContent} onClose={() => setLegalContent(null)} />
    </>
  )
}
