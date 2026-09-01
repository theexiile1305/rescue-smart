export interface CheckCallActStepContent {
  label: string;
  description?: string;
  icon: "check" | "phone" | "hands" | "car" | "clipboard";
}

export type CheckCallActSteps = [
  CheckCallActStepContent,
  CheckCallActStepContent,
  CheckCallActStepContent,
];

/** Default steps: the German original, not a literal translation of "Check-Call-Act". */
export const defaultCheckCallActSteps: CheckCallActSteps = [
  {
    label: "Prüfen",
    description: "Lage einschätzen und die Umgebung sichern.",
    icon: "check",
  },
  {
    label: "Rufen",
    description: "Notruf absetzen und Hilfe organisieren.",
    icon: "phone",
  },
  {
    label: "Handeln",
    description: "Erste-Hilfe-Maßnahmen sicher durchführen.",
    icon: "hands",
  },
];

export const fuehrerscheinCheckCallActSteps: CheckCallActSteps = [
  {
    label: "Anmelden",
    description: "Kurstermin online oder telefonisch reservieren.",
    icon: "clipboard",
  },
  {
    label: "Teilnehmen",
    description: "9 Unterrichtseinheiten an einem Tag, praxisnah vermittelt.",
    icon: "car",
  },
  {
    label: "Bescheinigung erhalten",
    description: "Nachweis für Ihre Fahrschule direkt am Kurstag.",
    icon: "check",
  },
];
