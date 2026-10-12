import type { ServicePageContent } from "@/content/types";
import { defaultCheckCallActSteps } from "@/content/checkCallAct";

export const content: ServicePageContent = {
  slug: "ausbildung-betriebliche-ersthelfer",
  courseId: "ausbildung",
  keyword: "Ausbildung betriebliche Ersthelfer",
  hero: {
    title: "Ausbildung zum betrieblichen Ersthelfer nach DGUV",
    subtitle:
      "Jedes Unternehmen in Deutschland benötigt eine ausreichende Anzahl betrieblicher Ersthelfer — die Grundausbildung ist der erste Schritt dorthin. In 9 Unterrichtseinheiten vermitteln wir alles, was Ihre Mitarbeitenden brauchen, um bei Arbeitsunfällen und medizinischen Notfällen sicher und richtig zu handeln: von der Ersteinschätzung über die stabile Seitenlage bis zur Herz-Lungen-Wiederbelebung. Die Ausbildung ist DGUV Vorschrift 1 konform, praxisnah aufgebaut und schließt am selben Tag mit Zertifikat ab. Wir kommen auf Wunsch auch zu Ihnen ins Unternehmen — in Starnberg, München oder der gesamten Region.",
    ctaLabel: "Jetzt Ausbildungstermin anfragen",
  },
  trust: {
    heading: "DGUV-konform und sofort einsatzbereit",
    paragraph:
      "Unsere Ausbildung zum betrieblichen Ersthelfer erfüllt die Vorgaben der DGUV Vorschrift 1 vollständig und wird von den Berufsgenossenschaften anerkannt. Sie schließt am selben Tag mit einem gültigen Zertifikat ab, das zwei Jahre lang gilt. Für viele Unternehmen werden die Kosten von der zuständigen Berufsgenossenschaft übernommen.",
  },
  audience: {
    heading: "Für wen ist die Ausbildung geeignet?",
    paragraph:
      "Die Ausbildung richtet sich an alle Mitarbeitenden, die im Unternehmen zu betrieblichen Ersthelfern bestellt werden sollen — unabhängig von Branche oder Vorkenntnissen. Wie viele Ersthelfer Ihr Unternehmen konkret benötigt, hängt von Beschäftigtenzahl und Branche ab; die verbindliche Auskunft dazu gibt Ihre Berufsgenossenschaft. Geeignet für Neueinsteiger ohne medizinisches Vorwissen ebenso wie für Unternehmen, die ihr bestehendes Ersthelfer-Team aufstocken möchten.",
  },
  curriculum: {
    heading: "Kursinhalte",
    items: [
      {
        title: "Verhalten am Unfallort",
        description:
          "Absichern, Gefahren erkennen und die Situation richtig einschätzen.",
      },
      {
        title: "Bewusstlosigkeit und stabile Seitenlage",
        description:
          "Sichere Lagerung bewusstloser Personen mit intakter Atmung.",
      },
      {
        title: "Herz-Lungen-Wiederbelebung inkl. AED-Grundlagen",
        description:
          "Reanimation nach aktuellen Leitlinien, inklusive erster Schritte am Defibrillator.",
      },
      {
        title: "Wundversorgung und Blutungen",
        description:
          "Versorgung von Wunden, Verbrennungen und starken Blutungen.",
      },
      {
        title: "Schockbekämpfung",
        description: "Erkennen und Behandeln eines Schockzustands.",
      },
      {
        title: "Knochenbrüche und Verletzungen des Bewegungsapparats",
        description: "Erste Maßnahmen bei Frakturen und Gelenkverletzungen.",
      },
      {
        title: "Dokumentation nach DGUV-Vorgaben",
        description: "Korrekte Erfassung des Vorfalls im Verbandbuch.",
      },
    ],
  },
  duration: {
    heading: "Dauer, Termine und Kosten",
    paragraph:
      "Die Ausbildung umfasst 9 Unterrichtseinheiten à 45 Minuten und findet an einem Tag statt — wochentags oder am Wochenende. Der Preis richtet sich nach Teilnehmerzahl und Kursformat und wird für betriebliche Ersthelfer häufig von der zuständigen Berufsgenossenschaft übernommen. Eine kostenlose Stornierung oder Umbuchung ist bis 7 Tage vor Kursbeginn möglich.",
  },
  regional: {
    heading: "Ausbildung in Ihrer Region",
    paragraph:
      "Unsere Ausbildungen zum betrieblichen Ersthelfer finden in Berg bei Starnberg statt oder als Inhouse-Schulung direkt bei Ihnen — ob Ihr Unternehmen in München, Starnberg, Gauting, Wolfratshausen oder Weilheim sitzt, oder etwas weiter entfernt in Augsburg, Rosenheim, Landsberg am Lech, Kaufbeuren oder Ingolstadt: Wir sind flexibel vor Ort.",
  },
  faq: [
    {
      question: "Wie viele Ersthelfer muss mein Unternehmen ausbilden lassen?",
      answer:
        "Das hängt von der Beschäftigtenzahl und der Branche Ihres Unternehmens ab. In unserem Ratgeber-Artikel erklären wir die gängigen Grundregeln — die verbindliche Auskunft gibt am Ende Ihre Berufsgenossenschaft.",
    },
    {
      question: "Kann die Ausbildung als Inhouse-Schulung stattfinden?",
      answer:
        "Ja, wir kommen zu Ihnen ins Unternehmen — mit Fokus auf die Region Starnberg/München, auf Anfrage auch darüber hinaus.",
    },
    {
      question: "Was kostet ein Erste-Hilfe-Kurs?",
      answer:
        "Die Kosten variieren je nach Kursart und Teilnehmerzahl. Für betriebliche Ersthelfer werden die Kosten in der Regel von der zuständigen Berufsgenossenschaft übernommen. Kontaktieren Sie uns für ein individuelles Angebot.",
    },
    {
      question: "Ist die Teilnahme barrierefrei möglich?",
      answer:
        "Ja, unsere Kursräume sind barrierefrei zugänglich. Bitte informieren Sie uns bei der Anmeldung über besondere Bedürfnisse, damit wir uns optimal vorbereiten können.",
    },
  ],
  checkCallAct: { steps: defaultCheckCallActSteps },
  certificateBadge: { validityMonths: 24 },
  cta: {
    heading: "Bereit, Ihre Ersthelfer auszubilden?",
    paragraph:
      "Kontaktieren Sie uns für einen individuellen Ausbildungstermin — bei uns in Berg bei Starnberg oder direkt in Ihrem Unternehmen.",
    ctaLabel: "Jetzt Ausbildungstermin anfragen",
  },
  internalLinks: [
    {
      href: "/fortbildung-betriebliche-ersthelfer",
      label: "Nach 2 Jahren zur Fortbildung",
    },
    { href: "/aed-notfalltraining", label: "AED-Training als Ergänzung" },
    {
      href: "/ratgeber/dguv-vorschrift-1-pflichten-arbeitgeber",
      label: "Ihre Pflichten als Arbeitgeber im Detail",
    },
    {
      href: "/ratgeber/wie-viele-ersthelfer-braucht-mein-unternehmen",
      label: "Wie viele Ersthelfer Sie konkret benötigen",
    },
    { href: "/einsatzgebiet", label: "Unser Einsatzgebiet in der Übersicht" },
  ],
  seo: {
    title: "Ausbildung betriebliche Ersthelfer",
    description:
      "DGUV-konforme Ausbildung zum betrieblichen Ersthelfer in 9 UE, Zertifikat am selben Tag, max. 20 Teilnehmer. Kurse in Starnberg, München und Umgebung.",
    h1: "Ausbildung zum betrieblichen Ersthelfer nach DGUV",
    keywordH2: "Ihre Grundausbildung für betriebliche Ersthelfer im Überblick",
  },
};
