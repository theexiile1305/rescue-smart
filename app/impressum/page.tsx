import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum - Rechtliche Angaben zu Rescue Smart.",
};

export default function ImpressumPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
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
                  Wolfratshauser Str. 15
                  <br />
                  8235 Berg, Deutschland
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-700">Telefon</dt>
                <dd>+49 (0) 817 148 088 56</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-700">E-Mail</dt>
                <dd>
                  <a
                    href="mailto:rescuesmart@anabellehofner.de"
                    className="text-primary-700 hover:underline"
                  >
                    rescuesmart@anabellehofner.de
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
              § 26, DGUV Vorschrift 1, Fev sowie weitere Dienstleistungen im
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
