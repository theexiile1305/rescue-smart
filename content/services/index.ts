import { content as ausbildung } from "./ausbildung-betriebliche-ersthelfer";
import { content as fortbildung } from "./fortbildung-betriebliche-ersthelfer";
import { content as fuehrerschein } from "./erste-hilfe-fuehrerschein";
import { content as aed } from "./aed-notfalltraining";
import type { ServicePageContent } from "@/content/types";

export const servicePages: ServicePageContent[] = [
  ausbildung,
  fortbildung,
  fuehrerschein,
  aed,
];

export {
  ausbildung as ausbildungContent,
  fortbildung as fortbildungContent,
  fuehrerschein as fuehrerscheinContent,
  aed as aedContent,
};
