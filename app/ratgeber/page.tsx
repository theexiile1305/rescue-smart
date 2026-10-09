import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { articles } from "@/content/articles";
import { iconMap } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Ratgeber Erste Hilfe & Arbeitsschutz",
  description:
    "Praxisnahe Antworten zu DGUV-Vorschriften, Ersthelferpflichten und Erste-Hilfe-Kursen für Unternehmen und Privatpersonen - vom Fachtrainer erklärt.",
  path: "/ratgeber",
});

export default function RatgeberIndexPage() {
  return (
    <>
      <Breadcrumbs segments={[{ name: "Ratgeber", path: "/ratgeber" }]} />

      <section className="px-4 pb-8 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-4xl font-bold text-primary-800 sm:text-5xl">
            Ratgeber: Erste Hilfe, DGUV &amp; Arbeitsschutz verständlich erklärt
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
            Ob Personalverantwortliche, Sicherheitsbeauftragte oder
            Privatpersonen kurz vor der Führerscheinprüfung: Im
            Rescue-Smart-Ratgeber beantworten wir die Fragen, die uns aus der
            Praxis am häufigsten erreichen — von gesetzlichen Fristen bei der
            Fortbildung über die Mindestanzahl an Ersthelfern im Betrieb bis zu
            den Kosten eines Erste-Hilfe-Kurses. Verständlich erklärt, ohne
            unnötigen Fachjargon.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <ul className="grid gap-6 sm:grid-cols-2">
            {articles.map((article) => {
              const Icon = iconMap[article.icon];
              return (
                <li key={article.slug}>
                  <Link
                    href={`/ratgeber/${article.slug}`}
                    className="block h-full rounded-2xl border border-sand-300 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 font-display text-lg font-semibold text-primary-800">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {article.teaser}
                    </p>
                    <p className="mt-4 font-mono text-xs text-slate-600">
                      {article.readingMinutes} Min. Lesezeit
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
