export interface StaticRouteEntry {
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}

export const staticRoutes: StaticRouteEntry[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  {
    path: "/ausbildung-betriebliche-ersthelfer",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/fortbildung-betriebliche-ersthelfer",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/erste-hilfe-fuehrerschein",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  { path: "/aed-notfalltraining", changeFrequency: "monthly", priority: 0.9 },
  { path: "/einsatzgebiet", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ratgeber", changeFrequency: "weekly", priority: 0.7 },
  { path: "/ueber-uns", changeFrequency: "yearly", priority: 0.6 },
  { path: "/kontakt", changeFrequency: "yearly", priority: 0.6 },
  { path: "/impressum", changeFrequency: "yearly", priority: 0.2 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.2 },
];
