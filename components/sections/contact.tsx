import { Card } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="kontakt" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Kontakt</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Wir sind für Sie da – kontaktieren Sie uns bei Fragen oder für eine persönliche Beratung
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-6">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <div className="font-medium">Adresse</div>
                    <div className="text-muted-foreground">
                      Musterstraße 123
                      <br />
                      10115 Berlin
                      <br />
                      Deutschland
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <div className="font-medium">E-Mail</div>
                    <a
                      href="mailto:info@rescuesmart.de"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      info@rescuesmart.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <div className="font-medium">Telefon</div>
                    <a href="tel:+493012345678" className="text-primary hover:text-secondary transition-colors">
                      +49 30 123 456 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <div className="font-medium">Erreichbarkeit</div>
                    <div className="text-muted-foreground">
                      Mo-Fr: 08:00 - 18:00 Uhr
                      <br />
                      Sa: 09:00 - 14:00 Uhr
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-0 overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.4851594!2d13.404954!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMxJzEyLjAiTiAxM8KwMjQnMTcuOCJF!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RescueSmart Standort"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
