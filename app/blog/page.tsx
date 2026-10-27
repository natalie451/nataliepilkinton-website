import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SearchBar } from "@/components/forms/SearchBar";
import { categoryLabels, blogCategories } from "@/lib/content/blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { getArticles } from "@/lib/sanity/client";
import { mergeWithFilePosts } from "@/lib/content/blogFiles";

export const revalidate = 0;

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Real estate education articles for Texas home buyers, sellers, investors, and realtors.",
  path: "/blog",
});

export default async function BlogPage() {
  const articles = await getArticles();
  const typedArticles = mergeWithFilePosts(articles);
  const [featured, ...rest] = typedArticles;

  return (
    <>
      <div className="w-full py-2xl flex items-center justify-center relative overflow-hidden bg-blue">
        <Container>
          <div className="text-left max-w-[48rem]">
            <h1 className="text-balance text-cream text-[clamp(2rem,1rem+4vw,3.25rem)] font-bold leading-[1.1] mb-md">
              Natalie&apos;s Real Estate Insights
            </h1>
            <p
              className="text-sm md:text-base font-semibold tracking-wide text-cream"
              style={{ display: "block", whiteSpace: "normal", width: "100%" }}
            >
              Real Estate • Market Trends • Home Buying • Selling • Investing
            </p>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="mb-2xl max-w-[36rem]">
            <SearchBar placeholder="Search articles..." />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3xl">
            {/* Main column */}
            <div className="lg:col-span-3">
              {/* Featured article */}
              {featured && (
                <Link
                  href={`/blog/${featured.category}/${featured.slug.current}`}
                  className="group block mb-3xl rounded-lg overflow-hidden bg-blue"
                >
                  <div className="p-xl md:p-2xl">
                    <span className="inline-block mb-md px-md py-xs rounded-full text-xs font-bold uppercase tracking-wide bg-cream text-blue">
                      {categoryLabels[featured.category as keyof typeof categoryLabels]}
                    </span>
                    <h2 className="text-cream text-2xl md:text-3xl font-bold leading-tight mb-md group-hover:underline">
                      {featured.title}
                    </h2>
                    <p className="text-cream text-base leading-relaxed mb-lg">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-lg text-xs mb-lg text-cream">
                      <span>{featured.publishedAt ? new Date(featured.publishedAt).toLocaleDateString() : null}</span>
                      <span>{featured.readTime}</span>
                    </div>
                    <span className="inline-block px-lg py-sm rounded font-semibold text-sm bg-cream text-blue">
                      Read Article →
                    </span>
                  </div>
                </Link>
              )}

              {/* Article list — minimal, divided rows */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2xl">
                {rest.map((article: any) => (
                  <Link
                    key={article._id}
                    href={`/blog/${article.category}/${article.slug.current}`}
                    className="group block py-lg border-b border-gray-light"
                  >
                    <span className="block text-xs font-semibold italic mb-xs text-blue">
                      {categoryLabels[article.category as keyof typeof categoryLabels]}
                    </span>
                    <h3 className="text-lg font-bold leading-snug mb-xs text-navy group-hover:underline" style={{ display: "block" }}>
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-dark mb-sm">
                      {new Date(article.publishedAt).toLocaleDateString()} · {article.readTime}
                    </p>
                    <p
                      className="text-sm text-gray-dark leading-relaxed"
                      style={{ display: "block", whiteSpace: "normal", maxWidth: "100%" }}
                    >
                      {article.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="mb-2xl">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy mb-md pb-sm border-b-2 border-blue">
                  Browse by Topic
                </h3>
                <ul className="flex flex-col gap-sm">
                  {blogCategories.map((category) => (
                    <li key={category}>
                      <Link
                        href={`/blog/${category}`}
                        className="text-sm font-semibold text-ink hover:text-blue transition-colors"
                      >
                        {categoryLabels[category]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg p-lg text-cream sticky top-lg bg-blue">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full mb-md flex items-center justify-center text-3xl font-bold bg-cream text-blue">
                    NP
                  </div>
                  <h3 className="text-lg font-bold mb-sm text-cream">Natalie Pilkinton</h3>
                  <p className="text-sm text-cream mb-md font-semibold">REALTOR®</p>
                  <p className="text-xs text-cream mb-lg leading-relaxed">
                    Helping buyers, sellers, and investors across Greater Houston, especially north of I-10 up to Huntsville.
                  </p>
                  <Link href="/booking" className="w-full px-lg py-sm rounded font-semibold text-center bg-cream text-blue">
                    Book a time
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}