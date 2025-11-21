"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function InHouse() {
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    participants: "",
    timeframe: "",
    location: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Inhouse inquiry submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        company: "",
        contact: "",
        email: "",
        phone: "",
        participants: "",
        timeframe: "",
        location: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section id="inhouse" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Inhouse-Schulungen</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Wir kommen zu Ihnen – flexible Erste-Hilfe-Schulungen direkt in Ihrem Unternehmen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="font-bold mb-2">Vor Ort</h3>
              <p className="text-sm text-muted-foreground">Training in Ihren Räumlichkeiten mit Ihren Gegebenheiten</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold mb-2">Flexibel</h3>
              <p className="text-sm text-muted-foreground">
                Termine nach Ihrem Zeitplan, auch außerhalb der Geschäftszeiten
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-bold mb-2">Individuell</h3>
              <p className="text-sm text-muted-foreground">Angepasst an Ihre Branche und spezifischen Anforderungen</p>
            </Card>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Anfrage stellen</h3>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h4 className="text-xl font-bold mb-2 text-primary">Anfrage gesendet!</h4>
                <p className="text-muted-foreground">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Firma / Organisation *
                    </label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium mb-2">
                      Ansprechpartner *
                    </label>
                    <Input
                      id="contact"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-Mail *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="participants" className="block text-sm font-medium mb-2">
                      Anzahl Teilnehmer *
                    </label>
                    <Input
                      id="participants"
                      type="number"
                      required
                      min="1"
                      value={formData.participants}
                      onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="timeframe" className="block text-sm font-medium mb-2">
                      Gewünschter Zeitraum
                    </label>
                    <Input
                      id="timeframe"
                      placeholder="z.B. KW 5/2025"
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-2">
                    Ort / PLZ *
                  </label>
                  <Input
                    id="location"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Nachricht / Besondere Anforderungen
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Anfrage absenden
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
