import type { ServicePageContent } from "@/content/types";
import { fuehrerscheinCheckCallActSteps } from "@/content/checkCallAct";

export const content: ServicePageContent = {
  slug: "erste-hilfe-fuehrerschein",
  courseId: "fuehrerschein",
  keyword: "Erste-Hilfe-Kurs Führerschein",
  hero: {
    title: "Erste-Hilfe-Kurs für Ihren Führerschein (§ 19 FeV)",
    subtitle:
      "Für jede Führerscheinklasse ist ein Erste-Hilfe-Kurs nach § 19 FeV Pflicht — egal ob Sie mit 15 oder 16 Jahren Ihre Fahrausbildung beginnen oder als Erwachsene den Führerschein nachholen. In 9 Unterrichtseinheiten lernen Sie an einem Tag, wie Sie bei Verkehrsunfällen und Notfällen im Alltag richtig reagieren: absichern, Notruf absetzen, stabile Seitenlage, Wiederbelebung. Ohne Vorkenntnisse, verständlich erklärt und mit sofortiger Bescheinigung für Ihre Fahrschule. Kurstermine finden in Berg bei Starnberg statt, mit guter Erreichbarkeit aus München und der Region.",
    ctaLabel: "Jetzt Kurstermin anfragen",
  },
  trust: {
    heading: "Bundesweit anerkannt, unbegrenzt gültig",
    paragraph:
      "Unser Kurs ist nach § 19 FeV anerkannt und wird von jeder Fahrschule und Führerscheinstelle in Deutschland akzeptiert. Anders als das Zertifikat für betriebliche Ersthelfer hat Ihre Bescheinigung kein Ablaufdatum — Sie legen den Kurs einmal ab und sind dauerhaft versorgt.",
  },
  audience: {
    heading: "Für wen ist der Kurs geeignet?",
    paragraph:
      "Der Kurs richtet sich in erster Linie an Jugendliche ab 15 Jahren, die ihre Fahrausbildung beginnen, sowie an Erwachsene, die den Führerschein erstmals machen oder nach einem Entzug neu erwerben. Vorkenntnisse sind nicht erforderlich — alles wird verständlich und praxisnah vermittelt.",
  },
  curriculum: {
    heading: "Kursinhalte",
    items: [
      { title: "Verhalten und Absicherung an der Unfallstelle" },
      {
        title: "Notruf richtig absetzen",
        description: "Notrufnummer und die wichtigsten W-Fragen.",
      },
      { title: "Stabile Seitenlage" },
      { title: "Herz-Lungen-Wiederbelebung" },
      {
        title: "Versorgung typischer Verkehrsunfallverletzungen",
        description: "Blutungen und Schock richtig behandeln.",
      },
      {
        title: "Verhalten bei eingeklemmten Personen",
        description: "Theoretische Grundlagen für den Ernstfall.",
      },
    ],
  },
  duration: {
    heading: "Dauer, Termine und Kosten",
    paragraph:
      "Der Kurs umfasst 9 Unterrichtseinheiten und findet an einem Tag statt — auch an Wochenenden, damit er sich gut mit Schule oder Ausbildung vereinbaren lässt. Der Preis wird auf Anfrage mitgeteilt. Eine kostenlose Stornierung oder Umbuchung ist bis 7 Tage vor Kursbeginn möglich.",
  },
  regional: {
    heading: "Kursort und Anfahrt",
    paragraph:
      "Der Kurs findet in Berg bei Starnberg statt und ist von München, Starnberg, Gauting, Wolfratshausen und Weilheim gut erreichbar — auch aus Augsburg, Rosenheim, Landsberg am Lech, Kaufbeuren und Ingolstadt reisen regelmäßig Teilnehmende an.",
  },
  faq: [
    {
      question: "Kann ich den Kurs schon vor Beginn der Fahrschule machen?",
      answer:
        "Ja, der Kurs ist unabhängig von der Fahrschulanmeldung buchbar — viele legen ihn vorab ab, um sich die Terminplanung zu erleichtern.",
    },
    {
      question: "Was kostet der Kurs und ist er bei jeder Fahrschule gültig?",
      answer:
        "Der Preis wird auf Anfrage mitgeteilt; mehr zu den Einflussfaktoren lesen Sie in unserem Ratgeber-Artikel. Die Bescheinigung wird bundesweit von jeder Fahrschule anerkannt.",
    },
    {
      question: "Benötige ich Vorkenntnisse?",
      answer:
        "Nein, unsere Kurse sind für Teilnehmer ohne Vorkenntnisse konzipiert. Alles wird von Grund auf verständlich erklärt und praktisch geübt.",
    },
    {
      question: "In welcher Sprache finden die Kurse statt?",
      answer:
        "Unsere Kurse finden standardmäßig auf Deutsch statt. Auf Anfrage bieten wir auch Kurse auf Englisch an.",
    },
  ],
  checkCallAct: { steps: fuehrerscheinCheckCallActSteps },
  certificateBadge: { validityMonths: null },
  trustBadges: [
    "§ 19 FeV anerkannt",
    "Bundesweit gültig",
    "Bescheinigung sofort",
  ],
  cta: {
    heading: "Bereit für Ihren Führerschein-Pflichtkurs?",
    paragraph:
      "Sichern Sie sich jetzt einen Kurstermin — auch am Wochenende möglich.",
    ctaLabel: "Jetzt Kurstermin anfragen",
  },
  internalLinks: [
    {
      href: "/ratgeber/kosten-erste-hilfe-kurs-fuehrerschein",
      label: "Was der Kurs konkret kostet",
    },
    { href: "/einsatzgebiet", label: "Unser Einsatzgebiet in der Übersicht" },
    { href: "/ueber-uns", label: "Mehr über Ihre Trainerin erfahren" },
  ],
  seo: {
    title: "Erste-Hilfe-Kurs Führerschein",
    description:
      "Erste-Hilfe-Kurs für den Führerschein nach § 19 FeV: 9 UE, Bescheinigung am selben Tag, ab 15 Jahren. Termine in Berg, Starnberg und München.",
    h1: "Erste-Hilfe-Kurs für Ihren Führerschein (§ 19 FeV)",
    keywordH2: "Der Erste-Hilfe-Kurs zum Führerschein — Ablauf & Termine",
  },
};
