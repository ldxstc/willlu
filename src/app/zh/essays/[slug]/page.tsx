import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getEssaysZh, getEssayZhBySlug, formatDateZh } from "@/lib/essays-zh";

export function generateStaticParams() {
  return getEssaysZh().map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssayZhBySlug(slug);
  if (!essay) return {};
  return {
    title: `${essay.title} — 卢东旭`,
    description: essay.description,
  };
}

export default async function EssayPageZh({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssayZhBySlug(slug);
  if (!essay) notFound();

  return (
    <article className="essay-page">
      <Link href="/zh#writing" className="back-link">
        ← 返回
      </Link>

      <header className="essay-header">
        <h1>{essay.title}</h1>
        <div className="essay-page-meta">
          {essay.readTime} &middot; {formatDateZh(essay.date)}
        </div>
        {essay.linkedin && (
          <div className="essay-linkedin-note">
            最初发表于LinkedIn
          </div>
        )}
      </header>

      <div className="essay-body">
        <MDXRemote source={essay.content} />
      </div>
    </article>
  );
}
