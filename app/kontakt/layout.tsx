import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt - Erste-Hilfe-Kurs anfragen",
  description:
    "Erste-Hilfe-Kurs anfragen: Kontaktformular, Telefon und E-Mail von Rescue Smart in Berg bei Starnberg. Wir antworten in der Regel innerhalb von 24 Stunden.",
  path: "/kontakt",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
