import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { business } from "@/content/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum - Rechtliche Angaben zu Rescue Smart.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-primary-800 sm:text-4xl">
          Impressum
        </h1>

        <div className="mt-8 space-y-8 text-slate-600">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Angaben gemäß § 5 TMG
            </h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div>
                <dt className="font-medium text-slate-700">Firmenname</dt>
                <dd>Rescue Smart</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-700">Adresse</dt>
                <dd>
                  {business.streetAddress}
                  <br />
                  {business.postalCode} {business.addressLocality}, Deutschland
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-700">Telefon</dt>
                <dd>{business.telephoneDisplay}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-700">E-Mail</dt>
                <dd>
                  <a
                    href={`mailto:${business.email}`}
                    className="text-primary-700 hover:underline"
                  >
                    {business.email}
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Vertretungsberechtigte Geschäftsführerin
            </h2>
            <p className="mt-2 text-sm">Anabelle Hofner</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="mt-2 text-sm">DE458499932</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Unternehmensgegenstand
            </h2>
            <p className="mt-2 text-sm">
              Durchführung von Erste-Hilfe-Ausbildungen und -Fortbildungen gemäß
              § 26, DGUV Vorschrift 1, FeV sowie weitere Dienstleistungen im
              Bereich der Ersten Hilfe.
            </p>
            <p className="text-sm">
              Zuständige Berufsgenossenschaft: BGW - Berufsgenossenschaft für
              Gesundheitsdienst und Wohlfahrtspflege
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Haftungsausschluss
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte können wir jedoch keine Gewähr übernehmen. Als
              Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach
              den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
