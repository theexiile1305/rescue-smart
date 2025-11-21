"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface BookingModalProps {
  date: {
    id: string
    course: string
    date: string
    time: string
    location: string
    spots: number
  } | null
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ date, isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    participants: "1",
    company: "",
    notes: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Booking submitted:", { date, formData })
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        participants: "1",
        company: "",
        notes: "",
      })
    }, 3000)
  }

  if (!date) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Kurs buchen</DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-2 text-primary">Buchung erfolgreich!</h3>
            <p className="text-muted-foreground">Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details.</p>
          </div>
        ) : (
          <>
            <div className="bg-muted p-4 rounded-lg mb-6">
              <h3 className="font-bold mb-2">{date.course}</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>📅 {date.date}</p>
                <p>🕐 {date.time}</p>
                <p>📍 {date.location}</p>
                <p className="text-primary font-medium">Noch {date.spots} Plätze verfügbar</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    Vorname *
                  </label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Nachname *
                  </label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
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

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="participants" className="block text-sm font-medium mb-2">
                    Anzahl Teilnehmer *
                  </label>
                  <Input
                    id="participants"
                    type="number"
                    min="1"
                    max={date.spots}
                    required
                    value={formData.participants}
                    onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Firma (optional)
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium mb-2">
                  Anmerkungen (optional)
                </label>
                <Input
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                Verbindlich buchen
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Mit der Buchung akzeptieren Sie unsere AGB. Stornierung bis 7 Tage vor Kursbeginn kostenfrei möglich.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
