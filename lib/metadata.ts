import type { Metadata } from "next";
import { siteName, siteUrl } from "@/content/site-config";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  noIndex,
}: BuildMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    // og:image / twitter:image are supplied automatically by the shared
    // app/opengraph-image.tsx file convention (one generated brand card,
    // reused across every page) — no per-page image needed here.
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "de_DE",
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
