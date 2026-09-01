export interface City {
  name: string;
  region: "fuenfseenland" | "muenchen" | "oberbayern-schwaben";
}

export const cities: City[] = [
  { name: "Berg", region: "fuenfseenland" },
  { name: "Starnberg", region: "fuenfseenland" },
  { name: "Gauting", region: "fuenfseenland" },
  { name: "Wolfratshausen", region: "fuenfseenland" },
  { name: "Weilheim", region: "fuenfseenland" },
  { name: "München", region: "muenchen" },
  { name: "Augsburg", region: "oberbayern-schwaben" },
  { name: "Rosenheim", region: "oberbayern-schwaben" },
  { name: "Landsberg am Lech", region: "oberbayern-schwaben" },
  { name: "Kaufbeuren", region: "oberbayern-schwaben" },
  { name: "Ingolstadt", region: "oberbayern-schwaben" },
];

export const cityNames = cities.map((c) => c.name);
