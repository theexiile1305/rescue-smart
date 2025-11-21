export function WhyUs() {
  const benefits = [
    {
      number: "1",
      title: "Praxiserprobte Trainer",
      description:
        "Unser Team besteht aus erfahrenen Rettungssanitätern, Notfallmedizinern und zertifizierten Ausbildern mit jahrelanger Praxiserfahrung.",
    },
    {
      number: "2",
      title: "Realistische Szenarien",
      description:
        "Wir trainieren mit realistischen Fallbeispielen und modernen Übungsmaterialien, damit Sie im Ernstfall sicher handeln können.",
    },
    {
      number: "3",
      title: "Flexible Termine",
      description:
        "Regelmäßige Kurse an verschiedenen Standorten sowie individuelle Inhouse-Schulungen nach Ihrem Zeitplan.",
    },
    {
      number: "4",
      title: "DGUV-Anerkennung",
      description:
        "Alle betrieblichen Kurse sind von der DGUV anerkannt und erfüllen die gesetzlichen Anforderungen für Unternehmen.",
    },
    {
      number: "5",
      title: "Zertifikat am selben Tag",
      description: "Sie erhalten Ihr offizielles Zertifikat direkt nach erfolgreichem Kursabschluss – ohne Wartezeit.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Warum RescueSmart?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Exzellenz in der Erste-Hilfe-Ausbildung durch Kompetenz, Praxisnähe und Innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <div key={benefit.number} className="space-y-4">
              <div className="text-6xl font-bold text-primary/20">{benefit.number}</div>
              <h3 className="text-2xl font-bold">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
