import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Rescue Smart gemäß DSGVO.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-slate-600">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              1. Verantwortlicher
            </h2>
            <p className="mt-2">
              Rescue Smart
              <br />
              c/o Anabelle Hofner
              <br />
              Wolfratshauser Str. 15, 8235 Berg, Deutschland
              <br />
              E-Mail: rescuesmart@anabellehofner.de
              <br />
              Telefon: +49 (0) 817 148 088 56
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p className="mt-2">
              Wir erheben personenbezogene Daten nur, wenn Sie uns diese
              freiwillig mitteilen, z.&nbsp;B. bei der Nutzung unseres
              Kontaktformulars. Die Verarbeitung erfolgt auf Grundlage von Art.
              6 Abs. 1 lit. a und b DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              3. Kontaktformular
            </h2>
            <p className="mt-2">
              Wenn Sie uns über das Kontaktformular kontaktieren, werden die
              angegebenen Daten (Name, E-Mail-Adresse, Nachricht) zum Zweck der
              Bearbeitung Ihrer Anfrage verarbeitet. Eine Weitergabe an Dritte
              findet nicht statt. Das Kontaktformular verwendet eine
              mailto:-Funktion, die Ihre Nachricht direkt über Ihr
              E-Mail-Programm versendet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">4. Cookies</h2>
            <p className="mt-2">
              Diese Website verwendet keine Tracking-Cookies. Es werden
              lediglich technisch notwendige Cookies eingesetzt, die für den
              Betrieb der Website erforderlich sind.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">5. Hosting</h2>
            <p className="mt-2">
              Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA gehostet. Beim Zugriff auf diese Website
              werden automatisch Informationen allgemeiner Natur (z.&nbsp;B.
              IP-Adresse, Browsertyp) erfasst. Weitere Informationen finden Sie
              in der Datenschutzerklärung von Vercel.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              6. Ihre Rechte
            </h2>
            <p className="mt-2">
              Sie haben gemäß DSGVO folgende Rechte bezüglich Ihrer
              personenbezogenen Daten:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-2">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
              info@rescuesmart.de
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              7. Beschwerderecht
            </h2>
            <p className="mt-2">
              Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu
              beschweren. Zuständige Aufsichtsbehörde ist die Berliner
              Beauftragte für Datenschutz und Informationsfreiheit,
              Friedrichstr. 219, 10969 Berlin.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              8. Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="mt-2">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht.
            </p>
            <p className="mt-2">Stand: März 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
}
