export type CourseId = "ausbildung" | "fortbildung" | "fuehrerschein" | "aed";

export interface Course {
  id: CourseId;
  name: string;
  slug: string;
  legalBasis: string;
  durationUnits: number;
  unitLengthMinutes: number;
  /** Certificate validity in months; null means unlimited (Führerschein-Bescheinigung). */
  validityMonths: number | null;
  icon: "hardHat" | "refresh" | "car" | "bolt";
}

export const courses: Record<CourseId, Course> = {
  ausbildung: {
    id: "ausbildung",
    name: "Ausbildung betriebliche Ersthelfer",
    slug: "ausbildung-betriebliche-ersthelfer",
    legalBasis: "DGUV Vorschrift 1",
    durationUnits: 9,
    unitLengthMinutes: 45,
    validityMonths: 24,
    icon: "hardHat",
  },
  fortbildung: {
    id: "fortbildung",
    name: "Fortbildung betriebliche Ersthelfer",
    slug: "fortbildung-betriebliche-ersthelfer",
    legalBasis: "DGUV Vorschrift 1",
    durationUnits: 9,
    unitLengthMinutes: 45,
    validityMonths: 24,
    icon: "refresh",
  },
  fuehrerschein: {
    id: "fuehrerschein",
    name: "Erste-Hilfe-Kurs für den Führerschein",
    slug: "erste-hilfe-fuehrerschein",
    legalBasis: "§ 19 FeV",
    durationUnits: 9,
    unitLengthMinutes: 45,
    validityMonths: null,
    icon: "car",
  },
  aed: {
    id: "aed",
    name: "AED-Training & Notfallszenarien",
    slug: "aed-notfalltraining",
    legalBasis: "Empfehlung für Unternehmen mit erhöhtem Risiko",
    durationUnits: 9,
    unitLengthMinutes: 45,
    validityMonths: null,
    icon: "bolt",
  },
};

export const courseList = Object.values(courses);
