import { CourseCard } from "@/components/icons/CourseCard";
import { FaqSection } from "@/components/FaqSection";
import Link from "next/link";
import FirstAidIcon from "@/components/icons/FirstAidIcon";
import RefreshIcon from "@/components/icons/RefreshIcon";
import BoltIcon from "@/components/icons/BoltIcon";
import CarIcon from "@/components/icons/CarIcon";

const services = [
  {
    title: "Ausbildung betriebliche Ersthelfer",
    description:
      "DGUV-konforme Grundausbildung (9 UE) für Ersthelfer in Unternehmen. Vermittelt alle notwendigen Kenntnisse zur Erstversorgung bei Arbeitsunfällen.",
    features: [
      "DGUV Vorschrift 1 konform",
      "9 Unterrichtseinheiten",
      "Zertifikat am selben Tag",
      "Inhouse-Schulung möglich",
    ],
    icon: <FirstAidIcon />,
  },
  {
    title: "Fortbildung betriebliche Ersthelfer",
    description:
      "Auffrischung und Vertiefung der Kenntnisse für bereits ausgebildete betriebliche Ersthelfer. Pflicht alle 2 Jahre gemäß DGUV.",
    features: [
      "Alle 2 Jahre erforderlich",
      "9 Unterrichtseinheiten",
      "Aktuelle Richtlinien",
      "Flexible Termine",
    ],
    icon: <RefreshIcon />,
  },
  {
    title: "Erste Hilfe für Führerschein",
    description:
      "Pflicht-Kurs für alle Führerscheinklassen gemäß § 19 FeV. Vermittelt grundlegende Kenntnisse für Notfälle im Straßenverkehr und Alltag.",
    features: [
      "Für alle Führerscheinklassen",
      "9 bzw. 16 Unterrichtseinheiten",
      "Sofortige Bescheinigung",
      "Wochenendtermine verfügbar",
    ],
    icon: <CarIcon />,
  },
  {
    title: "AED-Einweisung & Notfalltraining",
    description:
      "Spezialisierte Schulungen für medizinische Einrichtungen, Feuerwehr und Organisationen mit besonderen Anforderungen.",
    features: [
      "AED-Bedienung praxisnah",
      "Für medizinische Einrichtungen",
      "Notfallszenarien-Training",
      "Individuelle Inhalte",
    ],
    icon: <BoltIcon />,
  },
];

const whyRescueSmart = [
  {
    title: "Praxiserprobte Trainer",
    description:
      "Unsere Ausbilder arbeiten hauptberuflich in der Gesundheitsbranche und bringen jahrelange Einsatzerfahrung im Rettungsdienst mit.",
  },
  {
    title: "Realistische Szenarien",
    description:
      "Wir trainieren mit realistischen Fallbeispielen, damit Sie im Ernstfall sicher handeln können.",
  },
  {
    title: "Flexible Termine",
    description:
      "Ob Wochentag, Wochenende oder Inhouse. Wir passen uns Ihrem Zeitplan an.",
  },
  {
    title: "Anerkennung nach DGUV und Fev",
    description:
      "Alle unsere betrieblichen Kurse sind von der DGUV sowie FeV anerkannt und erfüllen die gesetzlichen Anforderungen.",
  },
  {
    title: "Zertifikat am selben Tag",
    description:
      "Nach erfolgreichem Abschluss erhalten Sie Ihr Zertifikat direkt vor Ort - ohne Wartezeit.",
  },
  {
    title: "Individuelle Betreuung",
    description:
      "Kleine Kursgruppen ermöglichen persönliche Betreuung und intensives Üben für jeden Teilnehmer.",
  },
];

const testimonials = [
  {
    quote:
      "Die Inhouse-Schulung von RescueSmart war hervorragend. Unsere Mitarbeiter fühlen sich jetzt deutlich sicherer bei der Erstversorgung.",
    author: "Kathrin Meier",
    role: "Personalleitung, Müller & Schmidt GmbH",
  },
  {
    quote:
      "Dank der DGUV-konformen Ausbildung sind wir als Unternehmen bestens aufgestellt. Sehr professionelle Trainer!",
    author: "Thomas Wagner",
    role: "Geschäftsführer, Berliner Logistik AG",
  },
  {
    quote:
      "Kompetente Trainer aus dem Rettungsdienst, praxisnahe Inhalte und flexible Terminplanung. Wir buchen jedes Jahr aufs Neue.",
    author: "Stefan Becker",
    role: "Sicherheitsbeauftragter, Norddeutsche Bau GmbH",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Schnell handeln.{" "}
            <span className="text-accent-400">Leben retten.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100">
            Exzellente Erste-Hilfe-Ausbildung für Unternehmen &amp;
            Organisationen. Konforme Kurse nach DGUV sowie Fev aus der Praxis
            für die Praxis.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-accent-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-accent-700 hover:shadow-xl"
            >
              Anfrage senden
            </Link>
            <a
              href="#leistungen"
              className="inline-block rounded-lg border-2 border-white/30 px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              Unsere Leistungen
            </a>
          </div>
        </div>
      </section>

      {/* Unsere Leistungen */}
      <section id="leistungen" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Unsere Leistungen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Von der betrieblichen Ersthelfer-Ausbildung bis zum
              Führerschein-Kurs. Wir bieten innovative Schulungen auf hohen
              Qualitätsstandard für jeden Bedarf.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((kurs) => (
              <CourseCard
                key={kurs.title}
                title={kurs.title}
                description={kurs.description}
                features={kurs.features}
                icon={kurs.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Warum Rescue Smart? */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Warum Rescue Smart?
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyRescueSmart.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Das sagen unsere Kunden
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="rounded-2xl bg-slate-50 p-6"
              >
                <p className="text-sm leading-relaxed text-slate-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {t.author}
                  </p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* CTA */}
      <section className="bg-primary-800 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Bereit für Ihre Erste-Hilfe-Ausbildung?
          </h2>
          <p className="mt-4 text-primary-100">
            Kontaktieren Sie uns für ein individuelles Angebot. Egal ob
            Inhouse-Schulung, offener Kurs oder Ihrenn individullen
            Anforderungen.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-accent-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-accent-700 hover:shadow-xl"
          >
            Jetzt anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
