import { Card } from "@/components/ui/card"

const team = [
  {
    name: "Dr. Sarah Müller",
    role: "Ärztliche Leitung & Ausbilderin",
    image: "/female-doctor-portrait.png",
    bio: "Notärztin mit 15 Jahren Erfahrung im Rettungsdienst. Spezialisiert auf Notfallmedizin und medizinische Ausbildung.",
  },
  {
    name: "Michael Schmidt",
    role: "Rettungssanitäter & Trainer",
    image: "/male-paramedic-professional-portrait.jpg",
    bio: "Langjährige Erfahrung im Rettungsdienst und als Ausbilder für betriebliche Ersthelfer. DGUV-zertifiziert.",
  },
  {
    name: "Lisa Wagner",
    role: "Pädagogin & Trainerin",
    image: "/female-teacher-portrait.png",
    bio: "Spezialistin für Erste Hilfe in Bildungseinrichtungen. Erfahrung in Kitas, Schulen und Jugendeinrichtungen.",
  },
]

export function About() {
  return (
    <section id="ueber-uns" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Über uns</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            RescueSmart steht für exzellente Erste-Hilfe-Ausbildung auf höchstem Niveau. Unser Anspruch ist es, Menschen
            zu befähigen, im Notfall schnell, sicher und kompetent zu handeln.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Mit modernsten Lehrmethoden, realistischen Trainingsszenarien und einem erfahrenen Team aus
            Notfallmedizinern und Pädagogen vermitteln wir nicht nur theoretisches Wissen, sondern vor allem praktische
            Handlungskompetenz. Jeder Kurs ist darauf ausgerichtet, Ihnen die Sicherheit zu geben, im Ernstfall Leben
            retten zu können.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Unser Team</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
