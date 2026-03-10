import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Erfahren Sie mehr über Rescue Smart - Ihr Partner für konforme Erste-Hilfe-Ausbildung nach DGUV sowie FeV in Deutschland.",
};

export default function AboutPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Über uns
        </h1>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">Wer wir sind</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Rescue Smart ist ein deutsches Unternehmen, das sich auf konforme
            Erste-Hilfe-Ausbildung nach DGUV sowie FeV für Unternehmen und
            Organisationen spezialisiert hat. Unsere Trainer kommen aus dem
            aktiven Rettungsdienst und bringen jahrelange Einsatzerfahrung in
            jede Schulung ein. Seit unserer Gründung haben wir tausende
            Teilnehmer erfolgreich ausgebildet und ihnen das nötige Wissen und
            Selbstvertrauen vermittelt, um in Notfallsituationen richtig zu
            handeln.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            Unsere Mission
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Wir glauben, dass jeder Mensch in der Lage sein sollte, in einer
            Notsituation Erste Hilfe zu leisten. Unsere Mission ist es,
            lebensrettendes Wissen verständlich, praxisnah und zugänglich zu
            vermitteln - ob im Unternehmen, in Bildungseinrichtungen oder im
            Alltag.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            Unsere Erfahrung
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-primary-50 p-6 text-center">
              <p className="text-3xl font-bold text-primary-700">10+</p>
              <p className="mt-1 text-sm text-slate-600">Jahre Erfahrung</p>
            </div>
            <div className="rounded-xl bg-primary-50 p-6 text-center">
              <p className="text-3xl font-bold text-primary-700">5.000+</p>
              <p className="mt-1 text-sm text-slate-600">
                Geschulte Teilnehmer
              </p>
            </div>
            <div className="rounded-xl bg-primary-50 p-6 text-center">
              <p className="text-3xl font-bold text-primary-700">200+</p>
              <p className="mt-1 text-sm text-slate-600">Firmenkunden</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">
            Warum RescueSmart?
          </h2>
          <ul className="mt-4 space-y-3">
            {[
              "Trainer aus dem aktiven Rettungsdienst und der Notfallmedizin",
              "DGUV-zertifizierte Kurse, die alle gesetzlichen Anforderungen erfüllen",
              "Flexible Termine und Inhouse-Schulungen bundesweit",
              "Realistische Szenarien und praxisnahe Übungen",
              "Zertifikat am selben Tag – ohne Wartezeit",
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
      </div>
    </div>
  );
}
