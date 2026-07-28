import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, type BreadcrumbSegment } from "@/lib/schema";

interface BreadcrumbsProps {
  segments: BreadcrumbSegment[];
}

export function Breadcrumbs({ segments }: BreadcrumbsProps) {
  const withHome: BreadcrumbSegment[] = [
    { name: "Startseite", path: "/" },
    ...segments,
  ];

  return (
    <nav
      aria-label="Brotkrumen"
      className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
    >
      <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
        {withHome.map((segment, index) => {
          const isLast = index === withHome.length - 1;
          return (
            <li key={segment.path} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-medium text-slate-700"
                >
                  {segment.name}
                </span>
              ) : (
                <Link href={segment.path} className="hover:text-primary-700">
                  {segment.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumbSchema(withHome)} />
    </nav>
  );
}
