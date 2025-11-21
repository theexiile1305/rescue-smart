"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { CourseModal } from "@/components/modals/course-modal"

const courses = [
  {
    id: "betriebliche-ersthelfer",
    icon: "🏢",
    title: "Ausbildung betriebliche Ersthelfer",
    description:
      "DGUV-konforme Grundausbildung für Ersthelfer in Unternehmen. Vermittelt alle notwendigen Kenntnisse zur Erstversorgung bei Arbeitsunfällen.",
    duration: "7,5 Stunden (1 Tag)",
    target: "Mitarbeiter in Unternehmen, die als betriebliche Ersthelfer eingesetzt werden",
    content: [
      "Absichern von Unfallstellen",
      "Rettung aus Gefahrenbereichen",
      "Stabile Seitenlage",
      "Herz-Lungen-Wiederbelebung (CPR)",
      "Einsatz des Automatisierten Externen Defibrillators (AED)",
      "Wundversorgung und Verbandstechniken",
      "Umgang mit Knochenbrüchen und Verbrennungen",
      "Schockbekämpfung",
    ],
    certificate: "DGUV-anerkanntes Zertifikat, gültig 2 Jahre",
    billing: "Abrechnung direkt über Berufsgenossenschaft möglich",
  },
  {
    id: "fortbildung-ersthelfer",
    icon: "🔄",
    title: "Fortbildung betriebliche Ersthelfer",
    description:
      "Auffrischung und Vertiefung der Kenntnisse für bereits ausgebildete betriebliche Ersthelfer. Pflicht alle 2 Jahre.",
    duration: "7,5 Stunden (1 Tag)",
    target: "Betriebliche Ersthelfer mit gültigem oder abgelaufenem Zertifikat (max. 2 Jahre)",
    content: [
      "Wiederholung lebensrettender Sofortmaßnahmen",
      "Aktualisierung der Reanimationstechniken",
      "Praktische Übungen mit AED",
      "Fallbeispiele aus der betrieblichen Praxis",
      "Neue Entwicklungen in der Ersten Hilfe",
      "Vertiefung der Wundversorgung",
    ],
    certificate: "DGUV-anerkanntes Zertifikat, gültig weitere 2 Jahre",
    billing: "Abrechnung direkt über Berufsgenossenschaft möglich",
  },
  {
    id: "bildungseinrichtungen",
    icon: "👶",
    title: "Erste Hilfe in Bildungseinrichtungen",
    description:
      "Spezialisierter Kurs für Erzieher, Lehrer und Betreuer. Fokus auf Notfälle bei Säuglingen, Kleinkindern und Kindern.",
    duration: "7,5 Stunden (1 Tag)",
    target: "Erzieher, Lehrer, Tagesmütter, Betreuer in Kitas und Schulen",
    content: [
      "Besonderheiten bei Kindernotfällen",
      "Reanimation bei Säuglingen und Kindern",
      "Umgang mit Verschlucken und Ersticken",
      "Fieberkrämpfe und allergische Reaktionen",
      "Verletzungen im Spiel- und Schulalltag",
      "Psychische Erste Hilfe für Kinder",
      "Dokumentation und rechtliche Aspekte",
    ],
    certificate: "Anerkanntes Zertifikat für Bildungs- und Betreuungseinrichtungen",
    billing: "Individuelle Abrechnung oder Gruppenbuchung",
  },
  {
    id: "fuehrerschein",
    icon: "🚗",
    title: "Erste Hilfe für Führerschein",
    description:
      "Pflicht-Kurs für alle Führerscheinklassen. Vermittelt grundlegende Kenntnisse für Notfälle im Straßenverkehr und Alltag.",
    duration: "7,5 Stunden (1 Tag)",
    target: "Führerscheinanwärter aller Klassen, Privatpersonen",
    content: [
      "Absicherung von Unfallstellen",
      "Notruf richtig absetzen",
      "Rettung aus dem Fahrzeug",
      "Stabile Seitenlage",
      "Herz-Lungen-Wiederbelebung",
      "Starke Blutungen stillen",
      "Schockbekämpfung",
      "Umgang mit Bewusstlosigkeit",
    ],
    certificate: "Bundesweit anerkannte Bescheinigung für Führerscheinantrag",
    billing: "Direkte Bezahlung, keine Kostenübernahme durch BG",
  },
  {
    id: "aed-notfalltraining",
    icon: "⚡",
    title: "AED-Einweisung & Notfalltraining",
    description:
      "Spezialisierte Schulungen für medizinische Einrichtungen, Feuerwehr und Organisationen mit besonderen Anforderungen.",
    duration: "2-4 Stunden (individuell)",
    target: "Medizinisches Personal, Feuerwehr, Rettungsdienste, Sicherheitspersonal",
    content: [
      "Intensives AED-Training",
      "Erweiterte Reanimationstechniken",
      "Teamarbeit bei Notfällen",
      "Szenario-basiertes Training",
      "Spezifische Notfallsituationen",
      "Rechtliche Grundlagen",
    ],
    certificate: "Teilnahmebescheinigung mit spezifischen Inhalten",
    billing: "Individuelle Vereinbarung nach Umfang",
  },
]

export function Services() {
  const [selectedCourse, setSelectedCourse] = useState<(typeof courses)[0] | null>(null)

  return (
    <>
      <section id="leistungen" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Unsere Leistungen</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Professionelle Erste-Hilfe-Ausbildung für jeden Bedarf - von der betrieblichen Pflichtschulung bis zur
              spezialisierten Fortbildung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => setSelectedCourse(course)}
              >
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{course.description}</p>
                <button className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center gap-2">
                  Details ansehen
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CourseModal course={selectedCourse} isOpen={!!selectedCourse} onClose={() => setSelectedCourse(null)} />
    </>
  )
}
