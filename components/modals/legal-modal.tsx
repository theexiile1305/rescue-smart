import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface LegalModalProps {
  content: "impressum" | "datenschutz" | null
  isOpen: boolean
  onClose: () => void
}

export function LegalModal({ content, isOpen, onClose }: LegalModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {content === "impressum" ? "Impressum" : "Datenschutzerklärung"}
          </DialogTitle>
        </DialogHeader>

        <div className="prose prose-sm max-w-none">
          {content === "impressum" ? (
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-bold text-base mb-2">Angaben gemäß § 5 TMG</h3>
                <p>
                  RescueSmart GmbH
                  <br />
                  Musterstraße 123
                  <br />
                  10115 Berlin
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base mb-2">Vertreten durch</h3>
                <p>Geschäftsführer: Max Mustermann</p>
              </div>

              <div>
                <h3 className="font-bold text-base mb-2">Kontakt</h3>
                <p>
                  Telefon: +49 30 123 456 78
                  <br />
                  E-Mail: info@rescuesmart.de
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base mb-2">Registereintrag</h3>
                <p>
                  Eintragung im Handelsregister
                  <br />
                  Registergericht: Amtsgericht Berlin-Charlottenburg
                  <br />
                  Registernummer: HRB 123456
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base mb-2">Umsatzsteuer-ID</h3>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                  <br />
                  DE123456789
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base mb-2">Verantwortlich für den Inhalt</h3>
                <p>
                  Max Mustermann
                  <br />
                  Musterstraße 123
                  <br />
                  10115 Berlin
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base mb-2">Streitschlichtung / Verbraucherstreitbeilegung</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-bold text-base mb-2">1. Datenschutz auf einen Blick</h3>
                <h4 className="font-semibold mb-2">Allgemeine Hinweise</h4>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base mb-2">2. Datenerfassung auf dieser Website</h3>
                <h4 className="font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung?</h4>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                  können Sie dem Impressum dieser Website entnehmen.
                </p>

                <h4 className="font-semibold mb-2">Wie erfassen wir Ihre Daten?</h4>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B.
                  um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch
                  der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
                  Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base mb-2">3. Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert
                  werden und die Ihr Browser speichert. Sie richten keinen Schaden an. Einige Cookies bleiben auf Ihrem
                  Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten
                  Besuch wiederzuerkennen.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base mb-2">4. Kontaktformular</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                  von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-base mb-2">5. Ihre Rechte</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
                  Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
                  Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
                  Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                </p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
