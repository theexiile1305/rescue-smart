import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Startseite" },
  { href: "/about", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/privacy-policy", label: "Datenschutz" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company info */}
          <div>
            <Image
              src="/logo.png"
              alt="Rescue Smart"
              width={320}
              height={100}
              className="h-24 w-auto brightness-0 invert"
            />
            <p className="mt-2 text-sm">
              Exzellente Erste-Hilfe-Ausbildung für Unternehmen &amp;
              Organisationen. Kurse aus der Praxis für die Praxis.
            </p>
            <address className="mt-4 text-sm not-italic">
              <p>Wolfratshauser Str. 15</p>
              <p>82335 Berg, Deutschland</p>
              <p className="mt-1">
                Tel:{" "}
                <a
                  href="tel:+4981714808856"
                  className="transition-colors hover:text-white"
                >
                  +49 (0) 817 148 088 56
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:rescuesmart@anabellehofner.de"
                  className="transition-colors hover:text-white"
                >
                  rescuesmart@anabellehofner.de
                </a>
              </p>
            </address>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Schnelllinks
            </p>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Rescue Smart. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
