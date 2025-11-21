"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface InquiryModalProps {
  isOpen: boolean
  onClose: () => void
}

export function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    participants: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Inquiry submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({
        company: "",
        contact: "",
        email: "",
        phone: "",
        participants: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Inhouse-Schulung anfragen</DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-2 text-primary">Anfrage gesendet!</h3>
            <p className="text-muted-foreground">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
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

            <div className="grid md:grid-cols-2 gap-4">
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

            <div>
              <label htmlFor="participants" className="block text-sm font-medium mb-2">
                Anzahl Teilnehmer *
              </label>
              <Input
                id="participants"
                type="number"
                min="1"
                required
                value={formData.participants}
                onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Ihre Nachricht / Anforderungen
              </label>
              <Textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Gewünschter Zeitraum, Ort, spezielle Anforderungen..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
              Anfrage absenden
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
