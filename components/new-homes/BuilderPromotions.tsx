import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/data/navigation";
import type { NewHomeCommunity } from "@/lib/data/newHomes";
import {
  promoDisclaimer,
  promoLastChecked,
  promosForCommunity,
  type BuilderPromo,
} from "@/lib/data/builderPromotions";

function PromoCard({ promo }: { promo: BuilderPromo }) {
  return (
    <article className="flex h-full flex-col rounded-xs border border-gray-light border-t-4 border-t-blue bg-white p-lg text-navy shadow-brand-sm">
      <p className="mb-xs text-xs font-semibold uppercase tracking-[0.12em] text-blue">{promo.builder}</p>
      <p className="mb-sm flex-1 text-navy">{promo.text}</p>
      {promo.expires && (
        <p className="mb-sm text-sm font-semibold text-navy">Ends: {promo.expires}</p>
      )}
      <a href={promo.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue">
        {promo.sourceLabel}
      </a>
    </article>
  );
}

export function CommunityPromotions({ name, slug }: { name: string; slug: string }) {
  const promos = promosForCommunity(slug);

  return (
    <section id="promos" className="bg-cream py-3xl">
      <Container>
        <p className="mb-xs text-xs font-semibold uppercase tracking-[0.14em] text-blue">This week</p>
        <h2 className="mt-0">Current builder promotions</h2>
        <p className="text-sm font-semibold text-navy">Last checked: {promoLastChecked}</p>
        {promos.length === 0 ? (
          <div className="max-w-[40rem] rounded-xs border border-blue bg-white p-lg">
            <p className="text-lg font-semibold text-navy">Ask Natalie about current incentives</p>
            <p className="text-gray-dark">
              No current promotion was printed on an official builder page for {name} when this list was checked.
            </p>
            <div className="flex flex-wrap gap-sm">
              <Button href="#tour">Tour with Natalie</Button>
              <Button href={siteConfig.phoneHref} variant="secondary">
                Call or text
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-md max-md:grid-cols-1">
            {promos.map((promo) => (
              <PromoCard key={`${promo.builder}-${promo.text.slice(0, 48)}`} promo={promo} />
            ))}
          </div>
        )}
        <p className="mt-lg mb-0 max-w-[46rem] text-sm text-gray-dark">{promoDisclaimer}</p>
      </Container>
    </section>
  );
}

export function PromoStrip({
  communities,
  title,
}: {
  communities: NewHomeCommunity[];
  title: string;
}) {
  const listed = communities.flatMap((community) => {
    const promos = promosForCommunity(community.slug);
    if (promos.length === 0) return [];
    return [{ community, promo: promos[0], count: promos.length }];
  });

  return (
    <section className="bg-blue py-3xl text-cream">
      <Container>
        <p className="mb-xs text-xs font-semibold uppercase tracking-[0.14em] text-cream">Last checked: {promoLastChecked}</p>
        <h2 className="mt-0 text-cream">{title}</h2>
        {listed.length === 0 ? (
          <div className="max-w-[40rem]">
            <p className="text-lg font-semibold text-cream">Ask Natalie about current incentives</p>
            <p>No current promotion was printed on an official builder page for these communities when this list was checked.</p>
            <Button href={siteConfig.bookingUrl} external variant="on-blue">
              Tour with Natalie
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-md max-lg:grid-cols-2 max-sm:grid-cols-1">
            {listed.map(({ community, promo, count }) => (
              <Link
                key={community.slug}
                href={`/new-homes/${community.citySlug}/${community.slug}#promos`}
                className="block h-full rounded-xs border border-cream/30 bg-cream p-lg text-navy shadow-brand-sm transition hover:-translate-y-0.5 hover:shadow-brand-lg"
              >
                <p className="mb-xs text-xs font-semibold uppercase tracking-[0.12em] text-blue">
                  {community.name}
                  {count > 1 ? `, ${count} offers` : ""}
                </p>
                <p className="mb-xs font-semibold">{promo.builder}</p>
                <p className="mb-0 line-clamp-4 text-sm">{promo.text}</p>
              </Link>
            ))}
          </div>
        )}
        <p className="mt-lg mb-0 max-w-[46rem] text-sm text-cream/85">{promoDisclaimer}</p>
      </Container>
    </section>
  );
}
