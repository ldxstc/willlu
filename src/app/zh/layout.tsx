import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "陆东旭 — 企业AI构建者",
  description:
    "企业AI构建者。斯坦福商学院。Google Cloud AI。Orby AI联合创始人（被Uniphore收购）。构建复利型企业的框架。",
  openGraph: {
    title: "陆东旭 — 企业AI构建者",
    description:
      "企业AI构建者。构建复利型企业的框架。",
    url: "https://willlu.com/zh",
    siteName: "陆东旭",
    locale: "zh_CN",
    images: [
      {
        url: "https://willlu.com/headshot.jpg",
        width: 800,
        height: 800,
        alt: "陆东旭",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "陆东旭 — 企业AI构建者",
    description:
      "企业AI构建者。构建复利型企业的框架。",
    images: ["https://willlu.com/headshot.jpg"],
  },
};

export default function ZhLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
