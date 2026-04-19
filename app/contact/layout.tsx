import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Rescue Smart für konforme konforme Erste-Hilfe-Ausbildung nach DGUV sowie FeV. Wir freuen uns auf Ihre Anfrage.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
