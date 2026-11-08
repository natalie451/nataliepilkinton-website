import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/data/navigation";
import type { NewHomeCommunity } from "@/lib/data/newHomes";
import {
  lastCheckedLabel,
  promoDisclaimer,
  promosForBuilder,
  promosForCommunity,
  unmatchedPromos,
  type BuilderPromo,
} from "@/lib/data/builderPromotions";

export function incentivesAvailable(slug: string) {
  return promosForCommunity(slug).length > 0;
}

function IncentiveBlock({ promo }: { promo: BuilderPromo }) {
  return (
    <div className="mt-md rounded-xs bg-cream p-md">
      <p className="mb-xs text-xs font-semibold uppercase tracking-[0.12em] text-blue">Current incentive</p>
      <p className="mb-sm text-navy">{promo.text}</p>
      {promo.expires && <p className="mb-sm text-sm font-semibold text-navy">Ends: {promo.expires}</p>}
      <a href={promo.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue">
        {promo.sourceLabel}
      </a>
    </div>
  );
}

/** Builder cards with that builder's current incentive inside the card. */
export function BuildersInCommunity({ community }: { community: NewHomeCommunity }) {
  const extras = unmatchedPromos(
    community.slug,
    community.builders.map((builder) => builder.name),
  );
  const hasPromos = incentivesAvailable(community.slug);

  return (
    <section className="bg-white py-3xl">
      <Container>
        <h2 className="mt-0">Builders in {community.name}</h2>
        <p className="text-sm font-semibold text-navy">Last checked: {lastCheckedLabel(community.slug)}</p>
        <div className="grid grid-cols-2 gap-md max-md:grid-cols-1">
          {community.builders.map((builder) => {
            const promos = promosForBuilder(community.slug, builder.name);
            return (
              <article key={builder.name} className="rounded-xs border border-gray-light bg-white p-lg">
                <h3 className="mb-sm mt-0 text-xl">{builder.name}</h3>
                <p className={promos.length ? "mb-0 text-gray-dark" : "mb-0 text-gray-dark"}>{builder.detail}</p>
                {promos.map((promo) => (
                  <IncentiveBlock key={promo.text.slice(0, 40)} promo={promo} />
                ))}
              </article>
            );
          })}
          {extras.map((promo) => (
            <article key={promo.text.slice(0, 40)} className="rounded-xs border border-gray-light bg-white p-lg">
              <h3 className="mb-sm mt-0 text-xl">{promo.builder}</h3>
              <p className="mb-0 text-gray-dark">Published incentive for this community. This name is not one of the home-builder cards above.</p>
              <IncentiveBlock promo={promo} />
            </article>
          ))}
        </div>
        {!hasPromos && (
          <div className="mt-lg max-w-[40rem] rounded-xs border border-blue bg-cream p-lg">
            <p className="text-lg font-semibold text-navy">Ask Natalie about current incentives</p>
            <p className="text-gray-dark">
              No current promotion was printed on an official builder page for {community.name} when this list was checked.
            </p>
            <div className="flex flex-wrap gap-sm">
              <Button href="#tour">Tour with Natalie</Button>
              <Button href={siteConfig.phoneHref} variant="secondary">
                Call or text
              </Button>
            </div>
          </div>
        )}
        <p className="mt-lg mb-0 max-w-[46rem] text-sm text-gray-dark">{promoDisclaimer}</p>
      </Container>
    </section>
  );
}
