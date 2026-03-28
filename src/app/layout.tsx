import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Sans_SC } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sc",
});

export const metadata: Metadata = {
  title: "Will Lu — Enterprise AI Builder",
  description:
    "Enterprise AI builder. Stanford GSB. Google Cloud AI. Co-Founded Orby AI (acquired by Uniphore). Frameworks for building compounding businesses.",
  openGraph: {
    title: "Will Lu — Enterprise AI Builder",
    description:
      "Enterprise AI builder. Frameworks for building compounding businesses.",
    url: "https://willlu.com",
    siteName: "Will Lu",
    images: [
      {
        url: "https://willlu.com/headshot.jpg",
        width: 800,
        height: 800,
        alt: "Will Lu",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Will Lu — Enterprise AI Builder",
    description:
      "Enterprise AI builder. Frameworks for building compounding businesses.",
    images: ["https://willlu.com/headshot.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} ${notoSansSC.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
