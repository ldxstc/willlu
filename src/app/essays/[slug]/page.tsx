import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getEssays, getEssayBySlug, formatDate } from "@/lib/essays";

export function generateStaticParams() {
  return getEssays().map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return {};
  return {
    title: `${essay.title} — Will Lu`,
    description: essay.description,
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) notFound();

  return (
    <article className="essay-page">
      <Link href="/#writing" className="back-link">
        &larr; Back
      </Link>

      <header className="essay-header">
        <h1>{essay.title}</h1>
        <div className="essay-page-meta">
          {essay.readTime} &middot; {formatDate(essay.date)}
        </div>
        {essay.linkedin && (
          <div className="essay-linkedin-note">
            Originally published on LinkedIn
          </div>
        )}
      </header>

      <div className="essay-body">
        <MDXRemote source={essay.content} />
      </div>
    </article>
  );
}
