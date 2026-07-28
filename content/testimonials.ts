import type { Testimonial } from "@/content/types";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Die Inhouse-Schulung von RescueSmart war hervorragend. Unsere Mitarbeiter fühlen sich jetzt deutlich sicherer bei der Erstversorgung.",
    author: "K. Meier",
    role: "Personalleitung, Fertigungsindustrie, München",
  },
  {
    quote:
      "Dank der DGUV-konformen Ausbildung sind wir als Unternehmen bestens aufgestellt. Sehr professionelle Trainerin!",
    author: "T. Wagner",
    role: "Geschäftsführer, Logistikbranche, München",
  },
  {
    quote:
      "Praxisnahe Inhalte und flexible Terminplanung. Die Schulung hat unser Team nachhaltig gestärkt. Wir buchen jedes Jahr aufs Neue.",
    author: "S. Becker",
    role: "Sicherheitsbeauftragter, Baugewerbe, München",
  },
  {
    quote:
      "Unsere Pflegekräfte sind nach der Schulung deutlich sicherer im Umgang mit Notfallsituationen. Absolut empfehlenswert!",
    author: "M. Huber",
    role: "Pflegedienstleitung, Gesundheitswesen, Augsburg",
  },
  {
    quote:
      "Endlich eine Erste-Hilfe-Schulung, die wirklich auf unsere Branche eingeht. Realitätsnah, kompetent und sehr gut organisiert.",
    author: "A. Köhler",
    role: "Betriebsleitung, Gastronomie, Rosenheim",
  },
  {
    quote:
      "Unsere Lehrkräfte haben sich sehr sicher gefühlt nach dem Kurs. Die Vermittlung war verständlich und motivierend.",
    author: "J. Schneider",
    role: "Schulleitung, Bildungswesen, Landsberg am Lech",
  },
  {
    quote:
      "Hervorragende Trainerin mit echter Einsatzerfahrung. Die Mitarbeiter waren begeistert und die Inhalte blieben hängen.",
    author: "F. Wolf",
    role: "Personalreferent, Fertigungsindustrie, Kaufbeuren",
  },
  {
    quote:
      "Sehr empfehlenswert! Die Schulung war genau auf unsere Bedürfnisse zugeschnitten und ließ sich perfekt in den Alltag integrieren.",
    author: "L. Maier",
    role: "Filialleitung, Einzelhandel, Ingolstadt",
  },
  {
    quote:
      "Kompetente und einfühlsame Trainerin - das macht den Unterschied. Unser Team fühlt sich jetzt wirklich gut vorbereitet.",
    author: "C. Braun",
    role: "Teamleitung, Sozialwesen, Starnberg",
  },
];

export function testimonialsByAuthors(authors: string[]): Testimonial[] {
  return authors
    .map((author) => testimonials.find((t) => t.author === author))
    .filter((t): t is Testimonial => Boolean(t));
}
