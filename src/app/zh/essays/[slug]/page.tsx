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
  const url = `https://willlu.com/zh/essays/${slug}`;
  const title = `${essay.title} — 卢东旭`;

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
      siteName: '卢东旭',
      type: 'article',
      images: [
        {
          url: 'https://willlu.com/headshot.jpg',
          width: 800,
          height: 800,
          alt: '卢东旭',
        },
      ],
      publishedTime: essay.date,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: essay.description,
      images: ['https://willlu.com/headshot.jpg'],
    },
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
      </header>

      <div className="essay-body">
        <MDXRemote source={essay.content} />
      </div>
    </article>
  );
}
