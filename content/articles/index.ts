import { article as a1 } from "./wie-oft-fortbildung-ersthelfer";
import { article as a2 } from "./kosten-erste-hilfe-kurs-fuehrerschein";
import { article as a3 } from "./dguv-vorschrift-1-pflichten-arbeitgeber";
import { article as a4 } from "./wie-viele-ersthelfer-braucht-mein-unternehmen";
import { article as a5 } from "./aed-im-betrieb-pflicht-oder-empfehlung";
import type { Article } from "@/content/types";

export const articles: Article[] = [a1, a2, a3, a4, a5];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
