import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { trainerName } from "@/content/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Über uns - Erste-Hilfe-Trainerin",
  description:
    "Physiotherapeutin, Rettungssanitäterin und MHFA-Trainerin: Lernen Sie die Fachfrau hinter Rescue Smart und ihre Ausbildungsphilosophie kennen.",
  path: "/ueber-uns",
});

export default function AboutPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-primary-800 sm:text-4xl">
          Über Rescue Smart — und die Trainerin dahinter
        </h1>

        <section className="mt-8">
          <h2 className="font-display text-xl font-semibold text-primary-800">
            Wer wir sind
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Rescue Smart steht für fundierte Erste-Hilfe-Ausbildung aus einer
            Hand - getragen von echter Einsatzerfahrung und interdisziplinärer
            Fachkompetenz. Hinter Rescue Smart steht eine Person: hauptberuflich
            Physiotherapeutin, staatlich geprüfte Kinderpflegerin und mit
            langjähriger Einsatzerfahrung ehrenamtliche Rettungssanitäterin bei
            verschiedenen Hilfsorganisationen im Rettungsdienst. Als
            zertifizierte MHFA- und MHFA-Youth-Ersthelferin verbindet sie
            körperliche und psychische Gesundheit in ihrer Arbeit und befähigt
            Menschen, in Notfallsituationen kompetent und sicher zu handeln —
            ein Hintergrund, der besonders Unternehmen mit erhöhten
            Anforderungen an{" "}
            <Link
              href="/aed-notfalltraining"
              className="font-medium text-primary-700 underline hover:text-primary-800"
            >
              AED- und Notfalltraining
            </Link>{" "}
            zugutekommt.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-primary-800">
            Unsere Mission
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Erste Hilfe bedeutet mehr als das Beherrschen von Handgriffen. Die
            Mission von Rescue Smart ist es, lebensrettendes Wissen - physisch
            als auch psychisch - ganzheitlich zu vermitteln. Durch den
            interdisziplinären Hintergrund als Physiotherapeutin,
            Kinderpflegerin, Rettungssanitäterin und MHFA- sowie
            MHFA-Youth-Ersthelferin entsteht ein einzigartiger Ansatz, der
            medizinisches Fachwissen, praktische Einsatzerfahrung und
            einfühlsame Pädagogik vereint.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-primary-800">
            Unsere Erfahrung
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Physiotherapeutin (staatlich anerkannt)",
              "Staatlich geprüfte Kinderpflegerin",
              "Ehrenamtliche Rettungssanitäterin",
              "MHFA-Ersthelferin (Erwachsene)",
              "Rettungsschwimmerin",
              "MHFA-Youth-Ersthelferin (Jugendliche)",
            ].map((qual) => (
              <div
                key={qual}
                className="rounded-xl bg-primary-50 px-5 py-4 text-sm font-medium text-primary-700"
              >
                {qual}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-primary-800">
            Warum RescueSmart?
          </h2>
          <ul className="mt-4 space-y-3">
            {[
              "Aktive Einsatzerfahrung im Rettungsdienst - kein reines Theoriewissen",
              "Interdisziplinäre Kompetenz: Physiotherapie, Pädagogik und Notfallmedizin in einer Person",
              "Zertifizierte MHFA-Ersthelferin für Erwachsene und Jugendliche",
              "Einfühlsame Wissensvermittlung dank pädagogischer Ausbildung als Kinderpflegerin",
              "DGUV sowie FeV konforme Kurse, die alle gesetzlichen Anforderungen erfüllen",
              "Flexible Termine und individuelle Inhouse-Schulungen",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-600">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-accent-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-xl bg-paper-muted p-6">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-primary-800">
              Autorin der Ratgeber-Artikel:
            </span>{" "}
            {trainerName} teilt ihr Fachwissen auch im{" "}
            <Link
              href="/ratgeber"
              className="font-medium text-primary-700 underline hover:text-primary-800"
            >
              Rescue-Smart-Ratgeber
            </Link>{" "}
            — praxisnahe Antworten rund um Ersthelferpflichten und
            Erste-Hilfe-Kurse.
          </p>
        </section>
      </div>
    </div>
  );
}
