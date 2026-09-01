import Link from "next/link";
import type { ServicePageContent } from "@/content/types";
import { courses } from "@/content/courses";
import { iconMap } from "@/components/icons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckCallAct } from "@/components/CheckCallAct";
import { CertificateBadge } from "@/components/CertificateBadge";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { courseSchema } from "@/lib/schema";

interface ServicePageTemplateProps {
  content: ServicePageContent;
}

export function ServicePageTemplate({ content }: ServicePageTemplateProps) {
  const course = courses[content.courseId];
  const Icon = iconMap[course.icon];

  return (
    <>
      <Breadcrumbs
        segments={[{ name: content.hero.title, path: `/${content.slug}` }]}
      />

      {/* Hero */}
      <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-800 text-white">
            <Icon className="h-7 w-7" />
          </div>
          <h1 className="font-display text-4xl font-bold text-primary-800 sm:text-5xl">
            {content.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
            {content.hero.subtitle}
          </p>
          <div className="mt-8">
            <Link
              href="/kontakt"
              className="inline-block rounded-lg bg-accent-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-accent-700 hover:shadow-xl"
            >
              {content.hero.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      {content.checkCallAct && (
        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <CheckCallAct
              title={content.checkCallAct.title}
              steps={content.checkCallAct.steps}
            />
          </div>
        </section>
      )}

      {/* Trust / keyword section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent-700">
            {content.trust.heading}
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-primary-800 sm:text-3xl">
            {content.seo.keywordH2}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            {content.trust.paragraph}
          </p>
          {content.certificateBadge && (
            <div className="mt-6 max-w-sm">
              <CertificateBadge
                validityMonths={content.certificateBadge.validityMonths}
              />
            </div>
          )}
          {content.trustBadges && (
            <ul className="mt-6 flex flex-wrap gap-3">
              {content.trustBadges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-primary-700 px-4 py-1.5 text-xs font-medium text-primary-800"
                >
                  {badge}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Audience */}
      <section className="bg-paper-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-primary-800 sm:text-3xl">
            {content.audience.heading}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            {content.audience.paragraph}
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-primary-800 sm:text-3xl">
            {content.curriculum.heading}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {content.curriculum.items.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-sand-300 bg-white p-5"
              >
                <p className="font-semibold text-primary-800">{item.title}</p>
                {item.description && (
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Duration / pricing */}
      <section className="bg-paper-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-primary-800 sm:text-3xl">
            {content.duration.heading}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            {content.duration.paragraph}
          </p>
        </div>
      </section>

      {/* Regional */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-primary-800 sm:text-3xl">
            {content.regional.heading}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            {content.regional.paragraph}
          </p>
          {content.testimonials && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {content.testimonials.map((t) => (
                <blockquote
                  key={t.author}
                  className="rounded-2xl bg-paper-muted p-6"
                >
                  <p className="text-sm leading-relaxed text-slate-600">
                    &ldquo;<i>{t.quote}</i>&rdquo;
                  </p>
                  <footer className="mt-4">
                    <p className="text-sm font-semibold text-primary-800">
                      {t.author}
                    </p>
                    <p className="text-xs text-slate-600">{t.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Internal links */}
      <section className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-primary-700">
            Weiterführende Links
          </h2>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {content.internalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-accent-700 underline decoration-accent-300 underline-offset-4 hover:text-accent-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq
        items={content.faq}
        heading="Häufig gestellte Fragen"
        id={`faq-${content.slug}`}
      />

      {/* CTA */}
      <section className="bg-primary-800 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {content.cta.heading}
          </h2>
          <p className="mt-4 text-primary-100">{content.cta.paragraph}</p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-lg bg-accent-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-accent-700 hover:shadow-xl"
          >
            {content.cta.ctaLabel}
          </Link>
        </div>
      </section>

      <JsonLd data={courseSchema(course, content.seo)} />
    </>
  );
}
