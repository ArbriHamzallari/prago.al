import type { MetadataRoute } from "next";
import { SITE_FACTS } from "@/lib/site-facts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_FACTS.url;

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/en`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    { url: `${base}/terms`, lastModified: new Date() },
    { url: `${base}/airbnb-vs-qera-mujore`, lastModified: new Date() },
    { url: `${base}/en/airbnb-vs-qera-mujore`, lastModified: new Date() }
  ];
}
