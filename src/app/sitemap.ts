import { getEssays } from "@/lib/essays";

export default function sitemap() {
  const essays = getEssays();

  const essayUrls = essays.map((essay) => ({
    url: `https://willlu.com/essays/${essay.slug}`,
    lastModified: new Date(essay.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://willlu.com",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...essayUrls,
  ];
}
