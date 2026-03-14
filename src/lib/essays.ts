import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Essay {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  linkedin: boolean;
}

const essaysDir = path.join(process.cwd(), "content", "essays");

export function getEssays(): Essay[] {
  const files = fs.readdirSync(essaysDir).filter((f) => f.endsWith(".mdx"));

  const essays = files.map((file) => {
    const raw = fs.readFileSync(path.join(essaysDir, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug: file.replace(/\.mdx$/, ""),
      title: data.title,
      description: data.description,
      date: data.date,
      readTime: data.readTime,
      linkedin: data.linkedin ?? false,
    } as Essay;
  });

  essays.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return essays;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function getEssayBySlug(slug: string) {
  const filePath = path.join(essaysDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    readTime: data.readTime as string,
    linkedin: (data.linkedin as boolean) ?? false,
    content,
  };
}

export { formatDate };
