import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FAQ, type FAQEntry } from "@/components/sections/FAQ";
import { siteConfig } from "@/lib/data/navigation";

type Card = {
  title: string;
  body: string;
  short: string;
  sourceLabel?: string;
  sourceUrl?: string;
};

const cards: Card[] = [
  {
    title: "Down payment assistance",
    body: "Some government agencies and nonprofits offer money that can help with a down payment or closing costs. HUD says the cash a buyer must bring to an FHA loan can come from acceptable sources such as gifts and grants through down payment assistance programs. Each program has its own rules. A lender confirms whether a program can be used on your loan.",
    short: "Grants and other assistance programs can help with a down payment or closing costs. A lender confirms whether one can be used on your loan.",
    sourceLabel: "HUD, FHA loans",
    sourceUrl: "https://www.hud.gov/helping-americans/loans/",
  },
  {
    title: "Homes for Texas Heroes",
    body: "The Texas State Affordable Housing Corporation (TSAHC) offers Homes for Texas Heroes for eligible teachers, first responders, veterans, and other professions it lists, including first-time and repeat buyers. TSAHC says qualified buyers can receive a fixed-rate mortgage and down payment assistance of up to 5% of the loan amount, as a grant or as a second lien that can be forgiven after three years if you do not sell or refinance. You apply through a participating lender, not through Natalie, and TSAHC publishes income and credit rules.",
    short: "TSAHC's Homes for Texas Heroes program is for eligible teachers, first responders, veterans, and other listed professions. A participating lender takes the application.",
    sourceLabel: "TSAHC, Homes for Texas Heroes",
    sourceUrl: "https://www.tsahc.org/program/homes-for-texas-heroes/",
  },
  {
    title: "FHA",
    body: "An FHA loan is a mortgage from an approved lender that the Federal Housing Administration, part of HUD, insures. HUD says the down payment can be as low as 3.5% of the purchase price. The lender, not Natalie, decides whether you qualify.",
    short: "HUD insures FHA loans made by approved lenders and says the down payment can be as low as 3.5% of the purchase price.",
    sourceLabel: "HUD, FHA loans",
    sourceUrl: "https://www.hud.gov/helping-americans/loans/",
  },
  {
    title: "VA",
    body: "A VA-backed purchase loan is for eligible service members, veterans, and certain surviving spouses. VA says it often has no down payment when the sales price is not higher than the appraised value, you have a Certificate of Eligibility, and you will live in the home. You still have to meet VA's rules and your lender's credit and income rules. A lender may still require a down payment.",
    short: "VA-backed loans are for eligible service members, veterans, and certain surviving spouses. VA says many have no down payment, and the lender still has to approve the loan.",
    sourceLabel: "VA purchase loan",
    sourceUrl: "https://www.va.gov/housing-assistance/home-loans/loan-types/purchase-loan/",
  },
  {
    title: "USDA",
    body: "USDA's Single Family Housing Guaranteed Loan Program helps approved lenders offer 100% financing to eligible low- and moderate-income buyers for a primary home in an eligible rural area. Household income cannot be above 115% of the area median. Some outer Greater Houston communities may fall in an eligible area, and others do not. Check the address on USDA's eligibility site. Natalie does not decide eligibility.",
    short: "USDA loans are for eligible buyers in eligible rural areas, sometimes with no down payment. Some outer communities may qualify. Verify the address with USDA.",
    sourceLabel: "USDA guaranteed loans",
    sourceUrl: "https://www.rd.usda.gov/programs-services/single-family-housing-programs/single-family-housing-guaranteed-loan-program",
  },
  {
    title: "Conventional",
    body: "A conventional loan is a mortgage from a private lender that is not insured by FHA, VA, or USDA. Lenders also offer low-down-payment conventional options. Your lender explains which ones they offer and whether you qualify. This card is general information, not a quote from a loan program.",
    short: "Conventional loans come from private lenders and are not insured by FHA, VA, or USDA. Low-down-payment options exist. Your lender explains them.",
  },
  {
    title: "Builder incentives and seller concessions",
    body: "A builder incentive or a seller concession is money the builder or seller agrees to contribute. It can be written to help with closing costs or a rate buydown when the purchase contract and the lender allow it. The builder cards above show only offers that builder published, and those offers change. Nothing on this page promises that a concession will be available or approved.",
    short: "A builder incentive or seller concession can help with closing costs or a rate buydown when the contract and the lender allow it. It is not guaranteed.",
  },
];

export const financingFaqs: FAQEntry[] = [
  {
    question: "Is Natalie a lender?",
    answer:
      "No. Natalie is a REALTOR, not a lender. She works with your lender of choice. A lender, and the program's own rules, decide whether you qualify for any loan or assistance.",
  },
  {
    question: "Can a builder incentive help with closing costs?",
    answer:
      "It can, when the purchase contract and the lender allow the builder's money or a seller concession to go toward closing costs or a rate buydown. The builder cards on a community page show only offers that builder published. Those offers change, and approval is not guaranteed.",
  },
  {
    question: "Does every Houston-area community qualify for a USDA loan?",
    answer:
      "No. USDA's guaranteed loan is for eligible buyers buying a primary home in an eligible rural area. Some outer communities may qualify and others do not. Check the address on USDA's eligibility site. Natalie does not decide eligibility.",
  },
];

export function WaysToMakeItWork({
  variant,
  ctaHref,
  ctaExternal = false,
  showFaq = false,
}: {
  variant: "full" | "short";
  ctaHref: string;
  ctaExternal?: boolean;
  showFaq?: boolean;
}) {
  return (
    <Section>
      <Container>
        <h2>Ways to make it work</h2>
        <p className="max-w-[46rem] text-gray-dark">
          These are general ways buyers pay for a new home. This is education, not a loan offer, a rate, or a promise
          that you will qualify.
        </p>
        <div className={variant === "full" ? "grid grid-cols-2 max-md:grid-cols-1 gap-lg" : "grid grid-cols-2 max-lg:grid-cols-1 gap-md"}>
          {cards.map((card) => (
            <article key={card.title} className="rounded-xs border border-gray-light bg-cream p-lg">
              <h3 className="mt-0 text-navy">{card.title}</h3>
              <p className="mb-sm text-gray-dark">{variant === "full" ? card.body : card.short}</p>
              {card.sourceUrl && card.sourceLabel ? (
                <p className="mb-0 text-sm">
                  <a href={card.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue">
                    {card.sourceLabel}
                  </a>
                </p>
              ) : null}
            </article>
          ))}
        </div>
        <p className="mt-lg max-w-[46rem] text-navy">
          Natalie is a REALTOR, not a lender; she works with your lender of choice.
        </p>
        <div className="flex flex-wrap gap-sm">
          <Button href={ctaHref} external={ctaExternal}>
            Ask Natalie which options fit you
          </Button>
          {ctaHref.startsWith("#") ? (
            <Button href={siteConfig.bookingUrl} external variant="secondary">
              Book on Calendly
            </Button>
          ) : null}
        </div>
        {showFaq ? (
          <div className="mt-xl max-w-[48rem]">
            <h3>Questions about paying for a new home</h3>
            <FAQ items={financingFaqs} />
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
