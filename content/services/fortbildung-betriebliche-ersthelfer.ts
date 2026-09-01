import type { ServicePageContent } from "@/content/types";
import { defaultCheckCallActSteps } from "@/content/checkCallAct";

export const content: ServicePageContent = {
  slug: "fortbildung-betriebliche-ersthelfer",
  courseId: "fortbildung",
  keyword: "Fortbildung Ersthelfer DGUV",
  hero: {
    title: "Fortbildung für betriebliche Ersthelfer — alle 2 Jahre Pflicht",
    subtitle:
      "Das Zertifikat Ihrer betrieblichen Ersthelfer ist zwei Jahre gültig — danach schreibt die DGUV Vorschrift 1 eine Fortbildung vor, damit Wissen und Handgriffe im Ernstfall sitzen. In 9 Unterrichtseinheiten frischen wir Reanimation, Wundversorgung und Notfallmanagement praxisnah auf und gehen gezielt auf aktuelle Leitlinien sowie Rückfragen aus dem Arbeitsalltag Ihrer Ersthelfer ein. So bleibt Ihr Unternehmen durchgehend, ohne Lücke in der Absicherung, gesetzeskonform aufgestellt. Die Fortbildung endet mit sofortigem Zertifikat und findet in Berg bei Starnberg oder als Inhouse-Termin bei Ihnen statt.",
    ctaLabel: "Jetzt Fortbildungstermin sichern",
  },
  trust: {
    heading: "Warum die Frist wichtig ist",
    paragraph:
      "Läuft das Zertifikat eines Ersthelfers ab, gilt die Person im Sinne der DGUV Vorschrift 1 nicht mehr als ausgebildeter Ersthelfer. Planen Sie die Fortbildung daher rechtzeitig ein — idealerweise 4 bis 6 Wochen vor Ablauf —, damit in Ihrem Unternehmen keine Lücke in der betrieblichen Absicherung entsteht.",
  },
  audience: {
    heading: "Für wen ist die Fortbildung geeignet?",
    paragraph:
      "Die Fortbildung richtet sich an bereits ausgebildete betriebliche Ersthelfer, deren Zertifikat in Kürze abläuft oder bereits abgelaufen ist. Anders als die Grundausbildung setzt sie kein neues Wissen bei null an, sondern frischt vorhandene Kenntnisse gezielt auf und vertieft sie anhand aktueller Fallbeispiele aus dem betrieblichen Alltag.",
  },
  curriculum: {
    heading: "Inhalte der Fortbildung",
    items: [
      {
        title: "Auffrischung Herz-Lungen-Wiederbelebung & AED",
        description: "Reanimation und erste AED-Schritte praxisnah wiederholt.",
      },
      {
        title: "Update zu aktuellen Reanimationsleitlinien",
        description: "Was sich seit der letzten Ausbildung verändert hat.",
      },
      {
        title: "Wiederholung Wundversorgung, Schock und Frakturen",
        description: "Gezieltes Auffrischen der wichtigsten Handgriffe.",
      },
      {
        title: "Fallbeispiele aus dem betrieblichen Alltag",
        description:
          "Praxisnahe Szenarien aus dem Berufsfeld Ihrer Teilnehmenden.",
      },
      {
        title: "Auffrischung der Dokumentationspflichten",
        description: "Korrekte Erfassung von Vorfällen im Verbandbuch.",
      },
    ],
  },
  duration: {
    heading: "Dauer, Termine und Kosten",
    paragraph:
      "Die Fortbildung umfasst wie die Grundausbildung 9 Unterrichtseinheiten und findet an einem Tag statt — wochentags oder am Wochenende. Der Preis richtet sich nach Teilnehmerzahl und wird häufig von der Berufsgenossenschaft übernommen. Eine kostenlose Stornierung oder Umbuchung ist bis 7 Tage vor Kursbeginn möglich.",
  },
  regional: {
    heading: "Fortbildung in Ihrer Region",
    paragraph:
      "Egal ob Ihr Team in Starnberg, Gauting oder Wolfratshausen sitzt oder Sie als überregionales Unternehmen Standorte in München, Augsburg, Rosenheim, Landsberg am Lech, Kaufbeuren oder Ingolstadt betreiben — wir organisieren die Fortbildung an einem Termin, der für Ihr Team passt.",
  },
  faq: [
    {
      question: "Was passiert, wenn die 2-Jahres-Frist bereits abgelaufen ist?",
      answer:
        "Kein Problem — melden Sie sich, wir finden zeitnah einen Termin. Bis zur Fortbildung sollte im Unternehmen wo möglich ein noch gültig ausgebildeter Ersthelfer verfügbar sein.",
    },
    {
      question:
        "Unterscheidet sich die Fortbildung inhaltlich von der Ausbildung?",
      answer:
        "Ja, der Fokus liegt auf Auffrischung, aktuellen Leitlinien und Praxisfällen statt auf Grundlagenvermittlung.",
    },
    {
      question: "Wie lange ist das Zertifikat gültig?",
      answer:
        "Das Zertifikat für betriebliche Ersthelfer ist 2 Jahre gültig. Danach ist eine Fortbildung (9 UE) erforderlich.",
    },
    {
      question: "Kann ich einen gebuchten Kurs stornieren oder umbuchen?",
      answer:
        "Ja, eine kostenlose Stornierung oder Umbuchung ist bis 7 Tage vor Kursbeginn möglich. Bei kurzfristigeren Änderungen kontaktieren Sie uns bitte direkt.",
    },
  ],
  checkCallAct: { steps: defaultCheckCallActSteps },
  certificateBadge: { validityMonths: 24 },
  cta: {
    heading: "Zertifikat läuft bald ab? Sichern Sie sich Ihren Termin",
    paragraph:
      "Kontaktieren Sie uns rechtzeitig vor Ablauf Ihres Zertifikats — wir finden gemeinsam einen passenden Fortbildungstermin.",
    ctaLabel: "Jetzt Fortbildungstermin sichern",
  },
  internalLinks: [
    {
      href: "/ausbildung-betriebliche-ersthelfer",
      label: "Zur Grundausbildung",
    },
    {
      href: "/ratgeber/wie-oft-fortbildung-ersthelfer",
      label: "Details zur gesetzlichen Frist",
    },
    { href: "/aed-notfalltraining", label: "AED-Training als Ergänzung" },
    { href: "/einsatzgebiet", label: "Unser Einsatzgebiet in der Übersicht" },
  ],
  seo: {
    title: "Fortbildung Ersthelfer DGUV",
    description:
      "Pflicht-Fortbildung für betriebliche Ersthelfer alle 2 Jahre nach DGUV Vorschrift 1. 9 UE, Zertifikat sofort, Termine in Starnberg und München.",
    h1: "Fortbildung für betriebliche Ersthelfer — alle 2 Jahre Pflicht",
    keywordH2: "Ihre DGUV-Fortbildung, bevor das Zertifikat abläuft",
  },
};
