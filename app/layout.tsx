import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactBar } from "@/components/cta/MobileContactBar";
import { NatalieChat } from "@/components/chat/NatalieChat";
import { siteConfig } from "@/lib/data/navigation";
import { jsonLdScriptProps, siteGraphSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Natalie Pilkinton, Spring TX REALTOR | Buyers, Sellers & Investors",
    template: `%s | ${siteConfig.name} - ${siteConfig.brand}`,
  },
  description:
    "Spring, TX REALTOR Natalie Pilkinton serves Greater Houston, especially north of I-10 up to Huntsville, including Houston, Conroe, The Woodlands, Tomball, Magnolia, and Huntsville. Call or text (832) 863-3468.",
  keywords:
    "Spring TX REALTOR, Natalie Pilkinton, Greater Houston, north of I-10, Huntsville, Houston, Conroe, The Woodlands, Tomball, Magnolia, Humble, Klein, Kingwood, HomeRock Realty",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.brand,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: `${siteConfig.name} - ${siteConfig.brand}`,
    title: "Natalie Pilkinton, Spring TX REALTOR | Buyers, Sellers & Investors",
    description:
      "Buy, sell, or invest in Spring, TX with REALTOR Natalie Pilkinton. She serves Greater Houston, especially north of I-10 up to Huntsville.",
    images: [
      {
        url: "https://assets.cdn.filesafe.space/p6coQEMK9WucfxjPnduV/media/6a58be7f524a3ec4c61853f3.png",
        width: 1200,
        height: 630,
        alt: "Natalie Pilkinton - Houston REALTOR®",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natalie Pilkinton, Houston REALTOR®",
    description: "Expert real estate guidance for buyers, sellers & investors.",
    images: ["https://assets.cdn.filesafe.space/p6coQEMK9WucfxjPnduV/media/6a58be7f524a3ec4c61853f3.png"],
  },
  icons: {
    icon: '/favicon.png',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a1a33",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script {...jsonLdScriptProps(siteGraphSchema())} />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileContactBar />
        <NatalieChat />
      </body>
    </html>
  );
}