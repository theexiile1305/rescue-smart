import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { content } from "@/content/services/fortbildung-betriebliche-ersthelfer";

export const metadata: Metadata = buildMetadata({
  title: content.seo.title,
  description: content.seo.description,
  path: `/${content.slug}`,
});

export default function Page() {
  return <ServicePageTemplate content={content} />;
}
