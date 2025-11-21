"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Sind Ihre Kurse DGUV-anerkannt?",
    answer:
      "Ja, alle unsere betrieblichen Erste-Hilfe-Kurse (Ausbildung und Fortbildung) sind von der Deutschen Gesetzlichen Unfallversicherung (DGUV) anerkannt und erfüllen die gesetzlichen Anforderungen für Unternehmen gemäß DGUV Vorschrift 1.",
  },
  {
    question: "Wie lange ist das Zertifikat gültig?",
    answer:
      "Das Zertifikat für betriebliche Ersthelfer ist 2 Jahre gültig. Danach ist eine Fortbildung (ebenfalls 7,5 Stunden) erforderlich, um die Qualifikation aufrechtzuerhalten. Für Führerschein-Kurse gibt es keine zeitliche Begrenzung.",
  },
  {
    question: "Wie lange dauert ein Kurs?",
    answer:
      "Die meisten unserer Kurse dauern 7,5 Stunden (ein Tag) und finden in der Regel von 8:00 bis 16:00 Uhr statt. AED-Einweisungen und spezielle Notfalltrainings können zwischen 2 und 4 Stunden dauern, je nach Umfang.",
  },
  {
    question: "Was kostet ein Erste-Hilfe-Kurs?",
    answer:
      "Die Kosten variieren je nach Kursart. Betriebliche Erste-Hilfe-Kurse können direkt über die Berufsgenossenschaft abgerechnet werden – für Unternehmen entstehen dann keine Kosten. Führerschein-Kurse kosten in der Regel zwischen 40-60 Euro. Für Inhouse-Schulungen erstellen wir individuelle Angebote.",
  },
  {
    question: "Gibt es ein Mindestalter für die Teilnahme?",
    answer:
      "Für die meisten Kurse gibt es kein festgelegtes Mindestalter, jedoch empfehlen wir ein Alter von mindestens 14 Jahren, da körperliche Kraft für Reanimationsübungen erforderlich ist. Für betriebliche Ersthelfer gilt in der Regel ein Mindestalter von 18 Jahren.",
  },
  {
    question: "In welcher Sprache finden die Kurse statt?",
    answer:
      "Unsere Kurse finden standardmäßig auf Deutsch statt. Für Inhouse-Schulungen können wir bei Bedarf auch englischsprachige Trainer bereitstellen. Bitte kontaktieren Sie uns für weitere Sprachen.",
  },
  {
    question: "Benötige ich Vorkenntnisse?",
    answer:
      "Nein, für die Ausbildung zum betrieblichen Ersthelfer und für Führerschein-Kurse sind keine Vorkenntnisse erforderlich. Für die Fortbildung sollte die letzte Erste-Hilfe-Ausbildung nicht länger als 2 Jahre zurückliegen.",
  },
  {
    question: "Ist die Teilnahme barrierefrei möglich?",
    answer:
      "Wir bemühen uns, unsere Kurse für alle zugänglich zu machen. Unsere Schulungsräume sind in der Regel barrierefrei. Bei besonderen Anforderungen (z.B. Gebärdensprachdolmetscher, spezielle Hilfsmittel) kontaktieren Sie uns bitte im Vorfeld, damit wir entsprechende Vorkehrungen treffen können.",
  },
  {
    question: "Kann ich einen gebuchten Kurs stornieren oder umbuchen?",
    answer:
      "Ja, Stornierungen sind bis 7 Tage vor Kursbeginn kostenfrei möglich. Bei späteren Absagen berechnen wir 50% der Kursgebühr. Umbuchungen auf einen anderen Termin sind bis 3 Tage vor Kursbeginn kostenfrei möglich. Bei Krankheit mit ärztlichem Attest finden wir immer eine kulante Lösung.",
  },
  {
    question: "Wie viele Teilnehmer sind in einem Kurs?",
    answer:
      "Um eine optimale Betreuung zu gewährleisten, begrenzen wir die Teilnehmerzahl auf maximal 15 Personen pro Kurs. So kann jeder ausreichend praktisch üben und der Trainer kann individuell auf Fragen eingehen.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Häufig gestellte Fragen</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Antworten auf die wichtigsten Fragen rund um unsere Erste-Hilfe-Kurse
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
