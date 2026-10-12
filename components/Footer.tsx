import Link from "next/link";
import Image from "next/image";
import { business, fullAddress } from "@/content/site-config";

const quickLinks = [
  { href: "/", label: "Startseite" },
  { href: "/einsatzgebiet", label: "Einsatzgebiet" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
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
              className="h-20 w-auto brightness-0 invert"
            />
            <p className="mt-2 text-sm">
              Exzellente Erste-Hilfe-Ausbildung für Unternehmen &amp;
              Organisationen. Kurse aus der Praxis für die Praxis.
            </p>
            <address className="mt-4 text-sm not-italic">
              <p>{fullAddress}</p>
              <p className="mt-1">
                Tel:{" "}
                <a
                  href={`tel:${business.telephone}`}
                  className="transition-colors hover:text-white"
                >
                  {business.telephoneDisplay}
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a
                  href={`mailto:${business.email}`}
                  className="transition-colors hover:text-white"
                >
                  {business.email}
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

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-slate-700 pt-8 text-sm sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} Rescue Smart. Alle Rechte
            vorbehalten.
          </p>
          <p>
            Built with ❤️ by{" "}
            <a
              href="https://github.com/theexiile1305"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              theexiile1305
            </a>
            . Please report any issues at{" "}
            <a
              href="https://github.com/theexiile1305/rescue-smart/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
