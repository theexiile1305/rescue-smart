import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { testimonialsByAuthors } from "@/content/testimonials";
import { courseList } from "@/content/courses";

export const metadata: Metadata = buildMetadata({
  title: "Erste-Hilfe-Kurs Starnberg / München",
  description:
    "Erste-Hilfe-Kurse vor Ort in Starnberg, München, Augsburg, Rosenheim und weiteren Städten der Region. Inhouse oder bei Rescue Smart in Berg buchbar.",
  path: "/einsatzgebiet",
});

const faqItems = [
  {
    question: "Bieten Sie auch Kurse außerhalb der genannten Städte an?",
    answer:
      "Ja, sprechen Sie uns an — wir prüfen die Anfahrt gerne auch für weitere Orte in Oberbayern.",
  },
  {
    question: "Fallen für die Anfahrt zusätzliche Kosten an?",
    answer:
      "Das hängt von Entfernung und Kursart ab — die Details erhalten Sie in Ihrem individuellen Angebot.",
  },
  {
    question: "Ist die Teilnahme barrierefrei möglich?",
    answer:
      "Ja, unsere Kursräume sind barrierefrei zugänglich. Bitte informieren Sie uns bei der Anmeldung über besondere Bedürfnisse, damit wir uns optimal vorbereiten können.",
  },
  {
    question: "Wie viele Teilnehmer sind in einem Kurs?",
    answer:
      "Unsere Kurse haben maximal 20 Teilnehmende, um eine optimale Betreuung und ausreichend Praxiszeit für jeden zu gewährleisten.",
  },
];

export default function EinsatzgebietPage() {
  const muenchenTestimonials = testimonialsByAuthors([
    "K. Meier",
    "T. Wagner",
    "S. Becker",
  ]);
  const fuenfseenlandTestimonial = testimonialsByAuthors(["C. Braun"]);
  const oberbayernTestimonials = testimonialsByAuthors([
    "M. Huber",
    "A. Köhler",
    "J. Schneider",
    "F. Wolf",
    "L. Maier",
  ]);

  return (
    <>
      <Breadcrumbs
        segments={[{ name: "Einsatzgebiet", path: "/einsatzgebiet" }]}
      />

      {/* Hero */}
      <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-4xl font-bold text-primary-800 sm:text-5xl">
            Unser Einsatzgebiet: Erste Hilfe in Starnberg, München und der
            Region
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
            Rescue Smart schult direkt in Berg bei Starnberg und kommt auf
            Wunsch als Inhouse-Team zu Ihnen — egal ob Ihr Unternehmen in
            Starnberg, Gauting oder Wolfratshausen liegt, in München oder
            Weilheim, oder etwas weiter entfernt in Augsburg, Rosenheim,
            Landsberg am Lech, Kaufbeuren oder Ingolstadt. Für betriebliche
            Ersthelfer-Ausbildung, Fortbildung, den Erste-Hilfe-Kurs zum
            Führerschein oder AED-Training reisen wir innerhalb der gesamten
            Region oder empfangen Sie in unseren barrierefreien Räumen.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-primary-800 sm:text-3xl">
            Erste-Hilfe-Kurse in Starnberg und München — auch bei Ihnen vor Ort
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
            Von Berg aus sind die meisten Orte unseres Einsatzgebiets innerhalb
            von 45 bis 60 Minuten erreichbar — für Inhouse-Schulungen ebenso wie
            für Kurstermine bei uns vor Ort.
          </p>
        </div>
      </section>

      {/* Fünfseenland */}
      <section className="bg-paper-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-primary-800 sm:text-3xl">
            Starnberger Fünfseenland
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            In Berg, Starnberg, Gauting, Wolfratshausen und Weilheim sind wir
            regelmäßig für Inhouse-Schulungen bei mittelständischen Unternehmen
            unterwegs. Als Ausgangspunkt unserer Kurse liegt diese Region uns
            besonders nah — kurze Anfahrtswege und flexible Terminplanung
            inklusive.
          </p>
          {fuenfseenlandTestimonial.map((t) => (
            <blockquote
              key={t.author}
              className="mt-6 max-w-md rounded-2xl bg-white p-6"
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
      </section>

      {/* München */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-primary-800 sm:text-3xl">
            Großraum München
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            München ist als größte Stadt der Region ein Schwerpunkt unserer
            Tätigkeit: von Fertigungsbetrieben über Logistikunternehmen bis zum
            Baugewerbe vertrauen zahlreiche Münchner Unternehmen auf unsere
            Ausbildungen und Fortbildungen.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {muenchenTestimonials.map((t) => (
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
        </div>
      </section>

      {/* Oberbayern & Schwaben */}
      <section className="bg-paper-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-primary-800 sm:text-3xl">
            Oberbayern &amp; Schwaben
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            Auch außerhalb des unmittelbaren Umlands sind wir regelmäßig
            unterwegs: In Augsburg schulen wir vor allem Einrichtungen aus dem
            Gesundheitswesen, in Rosenheim sind wir im Gastgewerbe gefragt, in
            Landsberg am Lech begleiten wir Einrichtungen im Bildungswesen, in
            Kaufbeuren Unternehmen der Fertigungsindustrie und in Ingolstadt den
            Einzelhandel.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {oberbayernTestimonials.map((t) => (
              <blockquote key={t.author} className="rounded-2xl bg-white p-6">
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
        </div>
      </section>

      {/* Service cross-reference */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-primary-800 sm:text-3xl">
            Alle Kurse in Ihrer Region
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courseList.map((course) => (
              <li key={course.slug}>
                <Link
                  href={`/${course.slug}`}
                  className="block rounded-xl border border-sand-300 bg-white p-5 text-sm font-semibold text-primary-800 transition-colors hover:border-primary-700"
                >
                  {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq
        items={faqItems}
        heading="Häufig gestellte Fragen"
        id="faq-einsatzgebiet"
      />

      {/* CTA */}
      <section className="bg-primary-800 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Ihre Stadt ist dabei?
          </h2>
          <p className="mt-4 text-primary-100">
            Kontaktieren Sie uns für einen Kurstermin in Ihrer Nähe — bei uns in
            Berg oder direkt bei Ihnen vor Ort.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-lg bg-accent-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-accent-700 hover:shadow-xl"
          >
            Kurs in Ihrer Nähe anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
