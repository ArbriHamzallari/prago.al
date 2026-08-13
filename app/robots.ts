import type { MetadataRoute } from "next";
import { SITE_FACTS } from "@/lib/site-facts";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_FACTS.url}/sitemap.xml`
  };
}
