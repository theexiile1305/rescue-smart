import type { Metadata } from "next";
import Link from "next/link";
import { CourseCard } from "@/components/icons/CourseCard";
import { Faq } from "@/components/Faq";
import { buildMetadata } from "@/lib/metadata";
import { courseList } from "@/content/courses";
import { testimonials } from "@/content/testimonials";
import { globalFaq } from "@/content/faq";
import { iconMap } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Erste-Hilfe-Kurse Starnberg & München",
  description:
    "DGUV- und FeV-konforme Erste-Hilfe-Kurse für Unternehmen und Privatpersonen in Starnberg, München und Umgebung. Praxisnah, zertifiziert, gleich anfragen.",
  path: "/",
});

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
      "Ob Wochentag oder Wochenende. Wir passen uns Ihrem Zeitplan an.",
  },
  {
    title: "Anerkennung nach DGUV und FeV",
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Erste Hilfe, die im{" "}
            <span className="text-accent-400">Ernstfall wirklich sitzt</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100">
            Rescue Smart bietet DGUV- und FeV-konforme Erste-Hilfe-Ausbildung
            für Unternehmen, Fahrschüler und Organisationen in Starnberg,
            München und ganz Oberbayern. Ob betriebliche Ersthelfer-Ausbildung,
            Fortbildung, Führerschein-Pflichtkurs oder AED-Training: Sie lernen
            bei einer Trainerin mit echter Einsatzerfahrung als
            Rettungssanitäterin. Kurse mit 9 Unterrichtseinheiten, Zertifikat am
            selben Tag, maximal 20 Teilnehmenden pro Gruppe und barrierefreiem
            Zugang in Berg bei Starnberg oder direkt bei Ihnen im Unternehmen.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
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
            <h2 className="font-display text-3xl font-bold text-primary-800 sm:text-4xl">
              Erste-Hilfe-Kurse in Starnberg, München und der Region
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Von der betrieblichen Ersthelfer-Ausbildung bis zum
              Führerschein-Kurs. Wir bieten innovative Schulungen auf hohen
              Qualitätsstandard für jeden Bedarf.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {courseList.map((course) => {
              const Icon = iconMap[course.icon];
              return (
                <Link
                  key={course.slug}
                  href={`/${course.slug}`}
                  className="block"
                >
                  <CourseCard
                    title={course.name}
                    description={courseDescriptions[course.id]}
                    features={courseFeatures[course.id]}
                    icon={<Icon />}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warum Rescue Smart? */}
      <section className="bg-paper-muted px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-primary-800 sm:text-4xl">
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
            <h2 className="font-display text-3xl font-bold text-primary-800 sm:text-4xl">
              Das sagen unsere Kunden
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="rounded-2xl bg-paper-muted p-6"
              >
                <p className="text-sm leading-relaxed text-slate-600">
                  &ldquo;<i>{t.quote}</i>&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="text-sm font-semibold text-primary-800">
                    {t.author}
                  </p>
                  <p className="text-xs text-slate-600">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-600">
            Ihre Stadt ist nicht dabei?{" "}
            <Link
              href="/einsatzgebiet"
              className="font-medium text-primary-700 underline hover:text-primary-800"
            >
              Zu unserem Einsatzgebiet
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <Faq items={globalFaq} heading="Häufig gestellte Fragen" id="faq" />

      {/* CTA */}
      <section className="bg-primary-800 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Bereit für Ihre Erste-Hilfe-Ausbildung?
          </h2>
          <p className="mt-4 text-primary-100">
            Kontaktieren Sie uns für ein individuelles Angebot. Egal ob
            Inhouse-Schulung, offener Kurs oder Ihren individuellen
            Anforderungen. Mehr Hintergrundwissen finden Sie in unserem{" "}
            <Link href="/ratgeber" className="underline hover:text-white">
              Ratgeber
            </Link>
            .
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-lg bg-accent-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-accent-700 hover:shadow-xl"
          >
            Jetzt anfragen
          </Link>
        </div>
      </section>
    </>
  );
}

const courseDescriptions: Record<string, string> = {
  ausbildung:
    "DGUV-konforme Grundausbildung für Ersthelfende in Unternehmen. Vermittelt alle notwendigen Kenntnisse zur Erstversorgung bei Arbeitsunfällen.",
  fortbildung:
    "Auffrischung und Vertiefung der Kenntnisse für bereits ausgebildete betriebliche Ersthelfende. Pflicht alle 2 Jahre gemäß DGUV.",
  fuehrerschein:
    "Pflicht-Kurs für alle Führerscheinklassen gemäß § 19 FeV. Vermittelt grundlegende Kenntnisse für Notfälle im Straßenverkehr und Alltag.",
  aed: "Spezialisierte Schulungen für medizinische Einrichtungen, Feuerwehr und Organisationen mit besonderen Anforderungen.",
};

const courseFeatures: Record<string, string[]> = {
  ausbildung: [
    "DGUV Vorschrift 1 konform",
    "9 Unterrichtseinheiten",
    "Zertifikat am selben Tag",
    "Inhouse-Schulung möglich",
  ],
  fortbildung: [
    "Alle 2 Jahre erforderlich",
    "9 Unterrichtseinheiten",
    "Aktuelle Richtlinien",
    "Flexible Termine",
  ],
  fuehrerschein: [
    "Für alle Führerscheinklassen",
    "9 Unterrichtseinheiten",
    "Sofortige Bescheinigung",
    "Wochenendtermine verfügbar",
  ],
  aed: [
    "AED-Bedienung praxisnah",
    "Für medizinische Einrichtungen",
    "Notfallszenarien-Training",
    "Individuelle Inhalte",
  ],
};
