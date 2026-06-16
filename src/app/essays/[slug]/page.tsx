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
  const url = `https://willlu.com/essays/${slug}`;
  const title = `${essay.title} — Will Lu`;

  return {
    title,
    description: essay.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: essay.description,
      url,
      siteName: 'Will Lu',
      type: 'article',
      images: [
        {
          url: 'https://willlu.com/headshot.jpg',
          width: 800,
          height: 800,
          alt: 'Will Lu',
        },
      ],
      publishedTime: new Date(essay.date).toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: essay.description,
      images: ['https://willlu.com/headshot.jpg'],
    },
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
        ← Back
      </Link>

      <header className="essay-header">
        <h1>{essay.title}</h1>
        <div className="essay-page-meta">
          {essay.readTime} &middot; {formatDate(essay.date)}
        </div>
      </header>

      <div className="essay-body">
        <MDXRemote source={essay.content} />
      </div>
    </article>
  );
}
