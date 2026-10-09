import type { ServicePageContent } from "@/content/types";
import { defaultCheckCallActSteps } from "@/content/checkCallAct";

export const content: ServicePageContent = {
  slug: "aed-notfalltraining",
  courseId: "aed",
  keyword: "AED Training Unternehmen",
  hero: {
    title: "AED-Training und Notfallszenarien für Unternehmen",
    subtitle:
      "Ob Arztpraxis, Pflegeeinrichtung, Großraumbüro oder Produktionsstandort: Überall dort, wo im Notfall schnell und richtig reagiert werden muss, lohnt sich ein gezieltes AED-Training. Wir zeigen Ihrem Team praxisnah, wie ein Defibrillator bedient wird, wie realistische Notfallszenarien ablaufen und wie Reanimation und AED-Einsatz sicher ineinandergreifen. Das Training richtet sich an Unternehmen und Organisationen mit erhöhtem Risiko oder besonderen Anforderungen und lässt sich individuell auf Ihre Branche, Ihre Räumlichkeiten und Ihre vorhandene Ausstattung zuschneiden. Inhouse oder in Berg bei Starnberg.",
    ctaLabel: "Jetzt AED-Training anfragen",
  },
  trust: {
    heading: "Praxisnah, von echter Rettungsdiensterfahrung geprägt",
    paragraph:
      "Es gibt kein eigenständiges gesetzliches Pflichtformat wie bei der DGUV-Ausbildung — ein AED-Training ist aber eine sinnvolle Ergänzung für Betriebe mit einem Defibrillator vor Ort oder erhöhtem Publikumsverkehr. Unsere Trainerin bringt eigene Rettungsdiensterfahrung mit AED-Einsätzen im Ernstfall mit.",
  },
  audience: {
    heading: "Für wen ist das Training geeignet?",
    paragraph:
      "Das Training eignet sich für medizinische Einrichtungen, Pflegedienste, große Bürostandorte, Einzelhandel mit hoher Kundenfrequenz, Fitnessstudios, Bildungseinrichtungen sowie für Betriebe mit vorhandenem oder geplantem Defibrillator.",
  },
  curriculum: {
    heading: "Trainingsinhalte",
    items: [
      { title: "AED-Bedienung Schritt für Schritt" },
      { title: "Zusammenspiel von Herzdruckmassage und Defibrillation" },
      {
        title: "Realistische Notfallszenarien",
        description: "Kreislaufstillstand und Kollaps im Team üben.",
      },
      { title: "Verhalten im Team bei mehreren Ersthelfern gleichzeitig" },
      { title: "Wartung und Einsatzbereitschaft des betriebseigenen AED" },
      { title: "Individuell anpassbare Fallbeispiele je nach Branche" },
    ],
  },
  duration: {
    heading: "Umfang, Termine und Kosten",
    paragraph:
      "Das Training ist flexibel skalierbar und wird häufig als Ergänzung zur DGUV-Ausbildung oder als eigenständiges Training gebucht. Der Preis richtet sich nach Teamgröße und Umfang und wird auf Anfrage mitgeteilt.",
  },
  regional: {
    heading: "AED-Training in Ihrer Region",
    paragraph:
      "Wir führen AED-Trainings inhouse durch — bei Unternehmen in Starnberg, München, Gauting, Wolfratshausen und Weilheim ebenso wie bei Organisationen in Augsburg, Rosenheim, Landsberg am Lech, Kaufbeuren und Ingolstadt.",
  },
  faq: [
    {
      question: "Ist ein AED-Training gesetzlich vorgeschrieben?",
      answer:
        "Für die meisten Betriebe gibt es keine allgemeine gesetzliche Pflicht — bei erhöhtem Risiko oder hoher Publikumsfrequenz ist es aber empfehlenswert. Mehr dazu in unserem Ratgeber-Artikel.",
    },
    {
      question: "Muss unser Unternehmen bereits einen Defibrillator besitzen?",
      answer:
        "Nein, das Training eignet sich auch zur Vorbereitung auf eine geplante AED-Anschaffung.",
    },
    {
      question:
        "Kann das Training mit der betrieblichen Ersthelfer-Ausbildung kombiniert werden?",
      answer:
        "Ja, viele Unternehmen buchen AED-Training als Ergänzung im Anschluss an die DGUV-Ausbildung.",
    },
    {
      question: "Wie viele Teilnehmer sind in einem Kurs?",
      answer:
        "Unsere Kurse haben maximal 20 Teilnehmende, um eine optimale Betreuung und ausreichend Praxiszeit für jeden zu gewährleisten.",
    },
  ],
  checkCallAct: { steps: defaultCheckCallActSteps },
  cta: {
    heading: "Bereit, Ihr Team fit für den Ernstfall zu machen?",
    paragraph:
      "Kontaktieren Sie uns für ein individuelles AED-Training, zugeschnitten auf Ihre Branche und Ausstattung.",
    ctaLabel: "Jetzt AED-Training anfragen",
  },
  internalLinks: [
    {
      href: "/ausbildung-betriebliche-ersthelfer",
      label: "Als Ergänzung zur betrieblichen Ersthelfer-Ausbildung",
    },
    {
      href: "/ratgeber/aed-im-betrieb-pflicht-oder-empfehlung",
      label: "Ob ein AED für Ihr Unternehmen Pflicht ist",
    },
    { href: "/einsatzgebiet", label: "Unser Einsatzgebiet in der Übersicht" },
  ],
  seo: {
    title: "AED-Training für Unternehmen",
    description:
      "AED-Simulation und Notfalltraining für Unternehmen, Praxen und Einrichtungen mit erhöhtem Risiko. Praxisnahe Szenarien, Zertifikat, Region München.",
    h1: "AED-Training und Notfallszenarien für Unternehmen",
    keywordH2: "AED-Training für Unternehmen mit besonderen Anforderungen",
  },
};
