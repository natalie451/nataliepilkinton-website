import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { Callout } from "@/components/ui/Callout";
import { ContactActions } from "@/components/cta/ContactActions";
import { EndCta } from "@/components/cta/EndCta";
import { JoinInterestForm } from "@/components/forms/JoinInterestForm";
import { CalendlyInline } from "@/components/booking/CalendlyInline";
import { FlyerGallery } from "@/components/join/FlyerGallery";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/navigation";
import { joinOffice, revshareLevels, transactionFees, valueStack } from "@/lib/content/joinTeam";

export const metadata: Metadata = buildMetadata({
  title: "Join a Real Estate Team in Spring, TX / North Houston",
  absoluteTitle: true,
  description:
    "Join Natalie Pilkinton's HomeRock Realty team in Spring, TX. 90/10 split with a $10,000 cap, a $149 monthly fee, and a free commission audit.",
  path: "/join-my-team",
});

const headlineFacts = [
  {
    label: "90/10 split with a $10,000 cap",
    detail: "You keep 90%. The brokerage keeps 10%, up to a $10,000 cap. Post-cap fees are $0.",
  },
  {
    label: "$149 monthly brokerage fee",
    detail: "The monthly brokerage fee is $149. It is waived when you refer 3 agents. *Must meet eligibility.",
  },
  {
    label: "BoldTrail Pro",
    detail:
      "The team tech stack is BoldTrail Pro: an IDX website, an AI CRM, BackOffice transaction management, Microsoft 365, and live training. The comparison flyer shows BoldTrail Pro retail at $949 a month.",
  },
];

export default function JoinMyTeamPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Join My Team", path: "/join-my-team" }]} />

      <Hero
        title="Join a real estate team in Spring, TX"
        subheading="Natalie Pilkinton is building a team at HomeRock Realty for licensed agents and for people who are new or still getting licensed. Spring is home base, and the work is across North Houston."
        align="left"
      >
        <ContactActions tone="on-dark" size="large" />
      </Hero>

      <Section>
        <Container>
          <h2 className="mb-sm">Commission, fees, and revshare</h2>
          <p className="mb-lg max-w-[46rem] text-gray-dark">
            These terms are printed on Natalie&rsquo;s recruiting flyers. A flyer example uses $100,000 in gross commission: $90,000 to the agent and $10,000 to the brokerage, which is the annual cap.
          </p>
          <div className="mb-xl grid grid-cols-3 gap-lg max-lg:grid-cols-1">
            {headlineFacts.map((fact) => (
              <article key={fact.label} className="rounded-xs border border-gray-light border-t-4 border-t-blue bg-white p-lg">
                <h3 className="mb-sm mt-0 text-xl">{fact.label}</h3>
                <p className="mb-0 text-gray-dark">{fact.detail}</p>
              </article>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-left">
              <caption className="mb-md text-left font-serif text-2xl font-semibold text-ink">3-level revenue share</caption>
              <thead>
                <tr className="bg-blue text-cream">
                  <th scope="col" className="px-md py-sm font-semibold text-cream">
                    Level
                  </th>
                  <th scope="col" className="px-md py-sm font-semibold text-cream">
                    Revshare
                  </th>
                  <th scope="col" className="px-md py-sm font-semibold text-cream">
                    Max per agent per year
                  </th>
                </tr>
              </thead>
              <tbody>
                {revshareLevels.map((row) => (
                  <tr key={row.level} className="border-b border-gray-light bg-white">
                    <th scope="row" className="px-md py-sm font-semibold text-ink">
                      {row.level}
                    </th>
                    <td className="px-md py-sm text-gray-dark">{row.share}</td>
                    <td className="px-md py-sm text-gray-dark">{row.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mb-sm mt-xl text-2xl">Transaction fees</h3>
          <ul className="m-0 grid list-none grid-cols-3 gap-md p-0 max-md:grid-cols-1">
            {transactionFees.map((fee) => (
              <li key={fee.label} className="rounded-xs border border-gray-light bg-white p-md">
                <p className="mb-xs font-semibold text-ink">{fee.label}</p>
                <p className="mb-0 text-gray-dark">
                  {fee.amount}
                  <span className="block text-sm">{fee.note}</span>
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <h2 className="mb-sm">The $149 fee as an investment</h2>
          <p className="mb-lg max-w-[46rem] text-gray-dark">
            The flyers describe the $149 monthly brokerage fee as an investment. The stated total is $15,000+ per year.
          </p>
          <ul className="m-0 grid list-none grid-cols-3 gap-sm p-0 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {valueStack.map((item) => (
              <li key={item} className="border border-gray-light border-l-4 border-l-blue bg-white px-md py-sm text-gray-dark">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="accent">
        <Container>
          <h2 className="mb-sm">We put our agents over our bottom line</h2>
          <p className="mb-lg max-w-[40rem] text-cream">These two figures are printed together on the flyer.</p>
          <div className="grid max-w-[40rem] grid-cols-2 gap-md max-sm:grid-cols-1">
            <div className="rounded-xs border border-cream/40 p-md">
              <p className="mb-xs text-sm font-semibold uppercase tracking-[0.06em] text-cream">Brokerage revshare earned</p>
              <p className="mb-0 font-serif text-3xl text-cream">$26,440.06</p>
            </div>
            <div className="rounded-xs border border-cream/40 p-md">
              <p className="mb-xs text-sm font-semibold uppercase tracking-[0.06em] text-cream">Agent revshare paid</p>
              <p className="mb-0 font-serif text-3xl text-cream">$27,192.38</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-[48rem]">
          <h2 className="mb-sm">Who this is for</h2>
          <p className="text-base leading-relaxed text-gray-dark">
            Licensed agents who want a team, and new or aspiring agents who are working toward a license. Natalie is a mentor with 20 years in real estate. The first conversation can be a free commission audit, or a meeting with {joinOffice.broker}, {joinOffice.brokerTitle}. The process is 100% confidential.
          </p>
          <p className="text-base leading-relaxed text-gray-dark">
            There is a free agent marketing toolkit: templates, follow-up scripts, and a 30-day social calendar.
          </p>
          <Callout title="List Natalie Pilkinton as your referral">
            <p className="mb-0">
              When you join, list Natalie Pilkinton as your referral. If you only need her to represent a client in this market, use the{" "}
              <Link href="/referral-agent" className="font-semibold text-navy underline underline-offset-2">
                referral agent page
              </Link>
              .
            </p>
          </Callout>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
          <h2 className="mb-lg">HomeRock Realty</h2>
          <dl className="mb-lg grid grid-cols-[12rem_1fr] gap-x-xl gap-y-sm max-md:grid-cols-1">
            <dt className="font-semibold text-navy">Brokerage</dt>
            <dd className="m-0 text-gray-dark">HomeRock Realty</dd>
            <dt className="font-semibold text-navy">Designated broker</dt>
            <dd className="m-0 text-gray-dark">{joinOffice.broker}</dd>
            <dt className="font-semibold text-navy">Office</dt>
            <dd className="m-0 text-gray-dark">{joinOffice.address}</dd>
            <dt className="font-semibold text-navy">Office phone</dt>
            <dd className="m-0">
              <a href={joinOffice.phoneHref} className="font-semibold text-blue underline underline-offset-2">
                {joinOffice.phone}
              </a>
            </dd>
            <dt className="font-semibold text-navy">Natalie&rsquo;s cell</dt>
            <dd className="m-0">
              <a href={siteConfig.phoneHref} className="font-semibold text-blue underline underline-offset-2">
                {siteConfig.phone}
              </a>
            </dd>
            <dt className="font-semibold text-navy">Email</dt>
            <dd className="m-0">
              <a href={siteConfig.emailHref} className="font-semibold text-blue underline underline-offset-2">
                {siteConfig.email}
              </a>
            </dd>
            <dt className="font-semibold text-navy">Team training</dt>
            <dd className="m-0 text-gray-dark">Weekly team training every Tuesday, 11:20 AM to 1:30 PM.</dd>
          </dl>
          <p className="mb-0 text-gray-dark">
            TREC License #{siteConfig.licenseNumber}
            {" · "}
            <a
              href={siteConfig.brokerage.iabsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue underline underline-offset-2"
            >
              Information About Brokerage Services
            </a>
            {" · "}
            <a
              href={siteConfig.brokerage.consumerProtectionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue underline underline-offset-2"
            >
              TREC Consumer Protection Notice
            </a>
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="mb-sm">Recruiting flyers</h2>
          <p className="mb-lg max-w-[46rem] text-gray-dark">
            Select a flyer to enlarge it. These are Natalie&rsquo;s recruiting flyers for the team.
          </p>
          <FlyerGallery />
        </Container>
      </Section>

      <Section id="join-interest" tone="light">
        <Container className="max-w-[40rem]">
          <h2 className="mb-sm">Tell Natalie you are interested</h2>
          <p className="text-gray-dark">
            Send your name and email. You can also call or text {siteConfig.phone}, email {siteConfig.email}, or book a call.
          </p>
          <JoinInterestForm />
        </Container>
      </Section>

      <Section id="book">
        <Container>
          <h2 className="mb-sm">Book a call</h2>
          <p className="mb-lg max-w-[40rem] text-gray-dark">
            Pick a time on Natalie&rsquo;s calendar. The office phone is {joinOffice.phone} if you would rather call the brokerage.
          </p>
          <CalendlyInline />
        </Container>
      </Section>

      <EndCta audience="join" />
    </>
  );
}
