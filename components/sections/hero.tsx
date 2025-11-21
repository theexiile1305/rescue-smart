"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { InquiryModal } from "@/components/modals/inquiry-modal"

export function Hero() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur Effect */}
        <div className="absolute inset-0 z-0">
          <img src="/first-aid-training-cpr-professional-medical-emerge.jpg" alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Schnell handeln. Leben retten.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto text-balance">
            RescueSmart - Exzellente Erste-Hilfe-Ausbildung für Unternehmen & Organisationen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#inhouse")}
              className="bg-accent hover:bg-accent/90 text-lg px-8 py-6"
            >
              Anfrage senden
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsInquiryOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 backdrop-blur-sm"
            >
              Inhouse-Schulung anfragen
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <button
            onClick={() => scrollToSection("#leistungen")}
            className="animate-bounce text-white/70 hover:text-white transition-colors"
            aria-label="Nach unten scrollen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  )
}
