"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Sind Ihre Kurse DGUV bzw. FeV anerkannt?",
    answer:
      "Ja, alle unsere betrieblichen Erste-Hilfe-Kurse sind von der DGUV (Deutsche Gesetzliche Unfallversicherung) sowie der FeV (Fahrerlaubnis-Verordnung) offiziell anerkannt und erfüllen die dafür nötigen Anforderungen.",
  },
  {
    question: "Wie lange ist das Zertifikat gültig?",
    answer:
      "Das Zertifikat für betriebliche Ersthelfer ist 2 Jahre gültig. Danach ist eine Fortbildung (9 UE) erforderlich. Die Bescheinigung für den Führerschein ist unbegrenzt gültig.",
  },
  {
    question:
      "Wie lange dauert ein Erste-Hilfe-Kurs im Kontext der DGUV bzw. FeV?",
    answer:
      "Die Kurse umfassen 9 Unterrichtseinheiten (à 45 Minuten) je nach Anforderung und finden an einem Tag statt.",
  },
  {
    question: "Was kostet ein Erste-Hilfe-Kurs?",
    answer:
      "Die Kosten variieren je nach Kursart und Teilnehmerzahl. Für betriebliche Ersthelfer werden die Kosten in der Regel von der zuständigen Berufsgenossenschaft übernommen. Kontaktieren Sie uns für ein individuelles Angebot.",
  },
  {
    question: "Gibt es ein Mindestalter für die Teilnahme?",
    answer:
      "Für den Führerschein-Kurs müssen Teilnehmer mindestens 15 Jahre alt sein. Für betriebliche Kurse gibt es kein Mindestalter, jedoch müssen die Teilnehmer im Unternehmen beschäftigt sein.",
  },
  {
    question: "In welcher Sprache finden die Kurse statt?",
    answer:
      "Unsere Kurse finden standardmäßig auf Deutsch statt. Auf Anfrage bieten wir auch Kurse auf Englisch an.",
  },
  {
    question: "Benötige ich Vorkenntnisse?",
    answer:
      "Nein, unsere Kurse sind für Teilnehmer ohne Vorkenntnisse konzipiert. Alles wird von Grund auf verständlich erklärt und praktisch geübt.",
  },
  {
    question: "Ist die Teilnahme barrierefrei möglich?",
    answer:
      "Ja, unsere Kursräume sind barrierefrei zugänglich. Bitte informieren Sie uns bei der Anmeldung über besondere Bedürfnisse, damit wir uns optimal vorbereiten können.",
  },
  {
    question: "Kann ich einen gebuchten Kurs stornieren oder umbuchen?",
    answer:
      "Ja, eine kostenlose Stornierung oder Umbuchung ist bis 7 Tage vor Kursbeginn möglich. Bei kurzfristigeren Änderungen kontaktieren Sie uns bitte direkt.",
  },
  {
    question: "Wie viele Teilnehmer sind in einem Kurs?",
    answer:
      "Unsere Kurse haben maximal 20 Teilnehmende, um eine optimale Betreuung und ausreichend Praxiszeit für jeden zu gewährleisten.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Häufig gestellte Fragen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere
            Erste-Hilfe-Kurse.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            return (
              <div key={index} className="rounded-2xl bg-white shadow-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-sm font-semibold text-slate-900">
                    {item.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  id={answerId}
                  role="region"
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}
                >
                  <p className="px-6 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
