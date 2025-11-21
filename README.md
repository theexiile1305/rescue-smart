# RescueSmart – Erste-Hilfe-Ausbildung

Eine moderne, deutschsprachige Single-Page-Website für professionelle Erste-Hilfe-Schulungen.

## Features

- 🎯 **Single-Page-Application** mit flüssigen View Transitions
- 📱 **Vollständig responsive** für alle Geräte
- ♿ **Barrierefrei** nach WCAG 2.2 AA
- 🎨 **Modernes Design** mit Tailwind CSS
- 🔍 **SEO-optimiert** mit Schema.org Markup
- 🍪 **Cookie-Consent** Banner
- 📅 **Kursbuchung** mit Modal-Dialogen
- 🏢 **Inhouse-Anfragen** Formular
- ❓ **FAQ** mit Accordion
- 📍 **Kontakt** mit Google Maps Integration

## Technologie-Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **UI-Komponenten:** shadcn/ui
- **TypeScript:** Vollständig typisiert
- **Deployment:** Vercel

## Lokale Entwicklung

\`\`\`bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Öffne http://localhost:3000
\`\`\`

## Deployment auf Vercel

### Option 1: Über v0.app
Klicken Sie auf "Publish" in der v0-Oberfläche, um direkt zu deployen.

### Option 2: Über GitHub
1. Pushen Sie den Code zu GitHub
2. Verbinden Sie das Repository mit Vercel
3. Vercel erkennt automatisch Next.js und deployt

### Option 3: Vercel CLI
\`\`\`bash
npm i -g vercel
vercel
\`\`\`

## Projektstruktur

\`\`\`
├── app/
│   ├── layout.tsx          # Root Layout mit Fonts & Meta
│   ├── page.tsx            # Haupt-SPA mit allen Sections
│   └── globals.css         # Tailwind + Theme Tokens
├── components/
│   ├── header.tsx          # Sticky Navigation
│   ├── footer.tsx          # Footer mit Links
│   ├── floating-cta.tsx    # Mobile Floating Button
│   ├── cookie-consent.tsx  # Cookie Banner
│   ├── sections/           # Alle Page Sections
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── why-us.tsx
│   │   ├── dates.tsx
│   │   ├── in-house.tsx
│   │   ├── faq.tsx
│   │   ├── about.tsx
│   │   └── contact.tsx
│   └── modals/             # Dialog-Komponenten
│       ├── course-modal.tsx
│       ├── booking-modal.tsx
│       ├── inquiry-modal.tsx
│       └── legal-modal.tsx
└── README.md
\`\`\`

## Anpassungen

### Farben ändern
Bearbeiten Sie die Design Tokens in `app/globals.css`:
\`\`\`css
--color-primary: #0a4d68;
--color-accent: #ff6b35;
\`\`\`

### Kurse hinzufügen
Bearbeiten Sie das `courses` Array in `components/sections/services.tsx`

### Termine aktualisieren
Bearbeiten Sie das `upcomingDates` Array in `components/sections/dates.tsx`

### Kontaktdaten ändern
Bearbeiten Sie `components/sections/contact.tsx` und `components/footer.tsx`

## SEO & Schema.org

Die Website enthält strukturierte Daten für:
- Organization (Footer)
- Course (Kurs-Cards)
- FAQPage (FAQ-Section)

## Lizenz

© 2025 RescueSmart. Alle Rechte vorbehalten.
