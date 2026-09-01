import type { CourseId } from "@/content/courses";
import type { FaqItem } from "@/content/faq";
import type { CheckCallActSteps } from "@/content/checkCallAct";
import type { IconName } from "@/components/icons";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CurriculumItem {
  title: string;
  description?: string;
}

export interface ServicePageContent {
  slug: string;
  courseId: CourseId;
  keyword: string;
  hero: {
    title: string;
    subtitle: string;
    ctaLabel: string;
  };
  trust: {
    heading: string;
    paragraph: string;
  };
  audience: {
    heading: string;
    paragraph: string;
  };
  curriculum: {
    heading: string;
    items: CurriculumItem[];
  };
  duration: {
    heading: string;
    paragraph: string;
  };
  regional: {
    heading: string;
    paragraph: string;
  };
  faq: FaqItem[];
  checkCallAct?: {
    title?: string;
    steps: CheckCallActSteps;
  };
  certificateBadge?: {
    validityMonths: number | null;
  };
  testimonials?: Testimonial[];
  trustBadges?: string[];
  cta: {
    heading: string;
    paragraph: string;
    ctaLabel: string;
  };
  internalLinks: { href: string; label: string }[];
  seo: {
    title: string;
    description: string;
    h1: string;
    keywordH2: string;
  };
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; variant: "info" | "verify"; text: string }
  | { type: "link"; href: string; label: string; lead?: string };

export interface Article {
  slug: string;
  title: string;
  teaser: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  icon: IconName;
  body: ContentBlock[];
  seo: {
    title: string;
    description: string;
  };
}
