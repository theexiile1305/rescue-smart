import { business, siteName, siteUrl } from "@/content/site-config";
import { cityNames } from "@/content/cities";
import type { Course } from "@/content/courses";
import type { FaqItem } from "@/content/faq";

export function localBusinessSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    telephone: business.telephone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      postalCode: business.postalCode,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      addressCountry: business.addressCountry,
    },
    areaServed: cityNames.map((name) => ({
      "@type": "City",
      name,
    })),
  };
}

export function courseSchema(
  course: Course,
  seo: { title: string; description: string },
): Record<string, unknown> {
  const totalMinutes = course.durationUnits * course.unitLengthMinutes;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const timeRequired = `PT${hours}H${minutes ? `${minutes}M` : ""}`;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: seo.description,
    url: `${siteUrl}/${course.slug}`,
    provider: {
      "@type": "Organization",
      name: siteName,
      sameAs: siteUrl,
    },
    timeRequired,
    ...(course.validityMonths != null && {
      educationalCredentialAwarded: seo.title,
    }),
  };
}

export function faqPageSchema(items: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export interface BreadcrumbSegment {
  name: string;
  path: string;
}

export function breadcrumbSchema(
  segments: BreadcrumbSegment[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: segments.map((segment, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: segment.name,
      item: `${siteUrl}${segment.path}`,
    })),
  };
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
}

export function articleSchema(
  input: ArticleSchemaInput,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: `${siteUrl}/ratgeber/${input.slug}`,
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    author: {
      "@type": "Person",
      name: input.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
    },
  };
}
