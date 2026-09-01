import Link from "next/link";
import type { Article } from "@/content/types";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";
import { trainerName } from "@/content/site-config";
import { iconMap } from "@/components/icons";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArticleTemplate({ article }: { article: Article }) {
  const Icon = iconMap[article.icon];

  return (
    <>
      <Breadcrumbs
        segments={[
          { name: "Ratgeber", path: "/ratgeber" },
          { name: article.title, path: `/ratgeber/${article.slug}` },
        ]}
      />
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-800 text-white">
            <Icon className="h-7 w-7" />
          </div>
          <h1 className="font-display text-4xl font-bold text-primary-800 sm:text-5xl">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-slate-600">
            <span>
              Veröffentlicht am{" "}
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>
            </span>
            <span aria-hidden="true">·</span>
            <span>{article.readingMinutes} Min. Lesezeit</span>
            <span aria-hidden="true">·</span>
            <span>
              Autorin:{" "}
              <Link
                href="/ueber-uns"
                className="underline hover:text-primary-700"
              >
                {trainerName}
              </Link>
            </span>
          </div>

          <div className="mt-8 space-y-5">
            {article.body.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p key={index} className="leading-relaxed text-slate-700">
                      {block.text}
                    </p>
                  );
                case "heading":
                  return block.level === 2 ? (
                    <h2
                      key={index}
                      className="font-display pt-4 text-2xl font-bold text-primary-800"
                    >
                      {block.text}
                    </h2>
                  ) : (
                    <h3
                      key={index}
                      className="font-display pt-2 text-xl font-semibold text-primary-800"
                    >
                      {block.text}
                    </h3>
                  );
                case "list":
                  return (
                    <ul
                      key={index}
                      className="list-disc space-y-2 pl-5 text-slate-700"
                    >
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                case "callout":
                  return (
                    <div
                      key={index}
                      role="note"
                      className={
                        block.variant === "verify"
                          ? "rounded-xl border-l-4 border-hazard-400 bg-hazard-50 p-5 text-sm leading-relaxed text-primary-900"
                          : "rounded-xl border-l-4 border-primary-700 bg-paper-muted p-5 text-sm leading-relaxed text-slate-700"
                      }
                    >
                      {block.text}
                    </div>
                  );
                case "link":
                  return (
                    <p key={index}>
                      <Link
                        href={block.href}
                        className="font-semibold text-accent-700 underline decoration-accent-300 underline-offset-4 hover:text-accent-800"
                      >
                        {block.label}
                      </Link>
                    </p>
                  );
                default:
                  return null;
              }
            })}
          </div>

          <div className="mt-12 border-t border-sand-300 pt-6">
            <Link
              href="/ratgeber"
              className="text-sm font-medium text-primary-700 hover:text-primary-800"
            >
              ← Zurück zum Ratgeber
            </Link>
          </div>
        </div>
      </article>
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.description,
          slug: article.slug,
          publishedAt: article.publishedAt,
          updatedAt: article.updatedAt,
          authorName: trainerName,
        })}
      />
    </>
  );
}
