const RSS_URL = "https://anchor.fm/s/110abc21c/podcast/rss";
const SITE_URL = "https://svgradient.fm";

export interface Episode {
  number: number;
  title: string;
  url: string;
  date: string;
  duration: string;
}

export interface Podcast {
  episodes: Episode[];
  total: number;
}

function tag(block: string, name: string): string {
  const m = block.match(
    new RegExp(`<${name}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${name}>`)
  );
  return m ? m[1].trim() : "";
}

function formatDuration(raw: string): string {
  const parts = raw.split(":").map(Number);
  let secs = 0;
  if (parts.length === 1) secs = parts[0];
  else if (parts.length === 2) secs = parts[0] * 60 + parts[1];
  else secs = parts[0] * 3600 + parts[1] * 60 + parts[2];
  return `${Math.round(secs / 60)} min`;
}

export async function getPodcast(limit = 3): Promise<Podcast> {
  try {
    const res = await fetch(RSS_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return { episodes: [], total: 0 };
    const xml = await res.text();
    const items = xml.split("<item>").slice(1);

    const episodes = items.map((item) => {
      const rawTitle = tag(item, "title");
      const epTag = tag(item, "itunes:episode");
      const numMatch = rawTitle.match(/^(\d+)\s*[.．、]\s*/);
      const number = epTag
        ? parseInt(epTag, 10)
        : numMatch
          ? parseInt(numMatch[1], 10)
          : 0;
      const title = rawTitle.replace(/^\d+\s*[.．、]\s*/, "");
      return {
        number,
        title,
        url: number ? `${SITE_URL}/?ep=${number}` : SITE_URL,
        date: tag(item, "pubDate"),
        duration: formatDuration(tag(item, "itunes:duration")),
      };
    });

    episodes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return { episodes: episodes.slice(0, limit), total: episodes.length };
  } catch {
    return { episodes: [], total: 0 };
  }
}

export function formatEpisodeDate(date: string, locale: "en" | "zh" = "en"): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  return locale === "zh"
    ? `${d.getUTCFullYear()}年${d.getUTCMonth() + 1}月${d.getUTCDate()}日`
    : d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      });
}
