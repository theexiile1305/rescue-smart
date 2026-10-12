export const siteName = "Rescue Smart";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rescuesmart.de";

export const business = {
  name: "Rescue Smart",
  legalName: "Rescue Smart (Anabelle Hofner)",
  streetAddress: "Wolfratshauser Str. 15",
  postalCode: "82335",
  addressLocality: "Berg",
  addressRegion: "Bayern",
  addressCountry: "DE",
  telephone: "+4981714808856",
  telephoneDisplay: "+49 (0) 817 148 088 56",
  email: "rescuesmart@anabellehofner.de",
} as const;

export const fullAddress = `${business.streetAddress}, ${business.postalCode} ${business.addressLocality}, Deutschland`;

export const trainerName = "Anabelle Hofner";
