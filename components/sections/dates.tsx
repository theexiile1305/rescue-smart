"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/modals/booking-modal"

const upcomingDates = [
  {
    id: "1",
    course: "Ausbildung betriebliche Ersthelfer",
    date: "15. Januar 2025",
    time: "08:00 - 16:00 Uhr",
    location: "Berlin-Mitte",
    spots: 8,
  },
  {
    id: "2",
    course: "Erste Hilfe für Führerschein",
    date: "18. Januar 2025",
    time: "09:00 - 17:00 Uhr",
    location: "Hamburg",
    spots: 12,
  },
  {
    id: "3",
    course: "Fortbildung betriebliche Ersthelfer",
    date: "22. Januar 2025",
    time: "08:00 - 16:00 Uhr",
    location: "München",
    spots: 5,
  },
  {
    id: "4",
    course: "Erste Hilfe in Bildungseinrichtungen",
    date: "25. Januar 2025",
    time: "08:30 - 16:30 Uhr",
    location: "Köln",
    spots: 10,
  },
  {
    id: "5",
    course: "Ausbildung betriebliche Ersthelfer",
    date: "29. Januar 2025",
    time: "08:00 - 16:00 Uhr",
    location: "Frankfurt",
    spots: 6,
  },
  {
    id: "6",
    course: "Erste Hilfe für Führerschein",
    date: "1. Februar 2025",
    time: "09:00 - 17:00 Uhr",
    location: "Stuttgart",
    spots: 15,
  },
]

export function Dates() {
  const [selectedDate, setSelectedDate] = useState<(typeof upcomingDates)[0] | null>(null)

  return (
    <>
      <section id="termine" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Termine & Buchung</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Wählen Sie einen passenden Termin und sichern Sie sich Ihren Platz
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {upcomingDates.map((date) => (
              <Card key={date.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{date.course}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {date.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {date.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {date.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Noch verfügbar</div>
                      <div className="text-lg font-bold text-primary">{date.spots} Plätze</div>
                    </div>
                    <Button onClick={() => setSelectedDate(date)} className="bg-accent hover:bg-accent/90">
                      Buchen
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BookingModal date={selectedDate} isOpen={!!selectedDate} onClose={() => setSelectedDate(null)} />
    </>
  )
}
