import { siteConfig } from "@/lib/data/navigation";

/** Content date for sitemap lastmod. The join page was updated from Natalie's recruiting flyers. */
export const joinTeamContentDate = "2026-11-04";

export const joinOffice = {
  address: "24624 I-45 N Ste 120, Spring, TX 77386",
  phone: "(832) 290-7003",
  phoneHref: "tel:+18322907003",
  broker: "Cory Kammerdiener",
  brokerTitle: "Designated Broker",
};

export const revshareLevels = [
  { level: "Level 1", share: "50%", max: "$5,000" },
  { level: "Level 2", share: "30%", max: "$3,000" },
  { level: "Level 3", share: "20%", max: "$2,000" },
] as const;

/** Categories named on the $149 value flyer. The flyer states the total as $15,000+ per year. */
export const valueStack = [
  "Community",
  "Training and coaching",
  "Events",
  "Office and workspace",
  "Tech and tools",
  "Marketing",
  "Transaction coordinator",
  "Revshare",
  "Lead generation",
  "Brokerage backing",
  "HomeRock Mortgage and Insurance referral programs",
  "Business building",
  "Culture",
] as const;

export type JoinFlyer = {
  src: string;
  title: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Recruiting flyers. The transaction-fee chart is omitted.
 * None shows a past calendar date for an event.
 * "Meet the broker, Sunday 1 to 3" has a weekday and hours, not a date that has passed.
 */
export const joinFlyers: JoinFlyer[] = [
  {
    src: "/images/join-my-team/join-my-team.webp",
    title: "Join my team",
    width: 1122,
    height: 1402,
    alt: "HomeRock Realty flyer that says Realtors, join my team. Natalie Pilkinton appears beside a laptop open to BoldTrail. The flyer says keep 90% of your commissions, capped at $10,000, and that the process is 100% confidential.",
  },
  {
    src: "/images/join-my-team/ninety-ten-split.webp",
    title: "90/10 split",
    width: 1080,
    height: 1080,
    alt: "HomeRock flyer for agents closing 10 or more deals a year. It shows a 90/10 split with a $10,000 cap, 50% revshare at level 1, a tile for 3 income streams, and $0 post-cap fees, and it invites a commission audit.",
  },
  {
    src: "/images/join-my-team/monthly-fee-value-stack.webp",
    title: "$149 value stack",
    width: 1024,
    height: 1536,
    alt: "HomeRock Realty flyer titled One brokerage. Endless value. It calls the $149 monthly brokerage fee an investment and states a total of $15,000+ per year. It lists community, training and coaching, events, office and workspace, tech and tools, marketing, a transaction coordinator, revshare, lead generation, brokerage backing, mortgage and insurance, business building, and culture. It says the fee is waived when you refer 3 agents if you meet eligibility. The Spring office is printed as 24624 Interstate 45N, #120, Spring, TX 77386.",
  },
  {
    src: "/images/join-my-team/three-level-revshare.webp",
    title: "3-level revshare",
    width: 448,
    height: 585,
    alt: "Now hiring Realtors flyer from HomeRock Realty. It states a 90/10 split with a $10,000 cap and a 3-level revenue share table: level 1 is 50% with a max of $5,000 per agent per year, level 2 is 30% with a max of $3,000, and level 3 is 20% with a max of $2,000. An illustration shows potential revshare across 39 agents, marked as potential earnings for capping agents in their anniversary year.",
  },
  {
    src: "/images/join-my-team/agents-over-bottom-line.webp",
    title: "Agents over the bottom line",
    width: 1254,
    height: 1254,
    alt: "HomeRock Realty flyer with the line We put our agents over our bottom line. It compares brokerage revshare earned with the revshare paid to agents.",
  },
  {
    src: "/images/join-my-team/boldtrail-pro.webp",
    title: "BoldTrail Pro",
    width: 1391,
    height: 1800,
    alt: "HomeRock Realty comparison of BoldTrail plans. The agent monthly fee is shown as $149. BoldTrail Pro retail is shown as $949 a month and crossed out. The Pro column includes IDX websites, an AI-powered CRM, BackOffice transaction management, Microsoft 365, and live virtual training.",
  },
  {
    src: "/images/join-my-team/twenty-years-boldtrail.webp",
    title: "20 years in real estate",
    width: 1024,
    height: 1536,
    alt: "Natalie Pilkinton holding a HomeRock sign next to a laptop running BoldTrail Pro. The flyer says 20 years in the real estate business, lists an AI-powered CRM, IDX websites, and transaction management, and says keep 90% of your commission with a $10,000 cap.",
  },
  {
    src: "/images/join-my-team/free-agent-toolkit.webp",
    title: "Free agent toolkit",
    width: 1122,
    height: 1402,
    alt: "Natalie Pilkinton, labeled mentor, and Cory Kammerdiener, labeled broker, on a HomeRock flyer. It lists a 90/10 commission split, revenue share, and practical training, and offers a free agent marketing toolkit with customizable templates, follow-up scripts, and a 30-day social media calendar.",
  },
  {
    src: "/images/join-my-team/meet-the-broker.webp",
    title: "Meet the broker",
    width: 1071,
    height: 1599,
    alt: "HomeRock flyer headed Meet the broker, Sunday 1 to 3. Natalie Pilkinton is labeled mentor and Cory Kammerdiener is labeled broker. A table shows 3-level revshare: level 1 at 50% up to $5,000, level 2 at 30% up to $3,000, and level 3 at 20% up to $2,000 per agent per year.",
  },
  {
    src: "/images/join-my-team/gap-months.webp",
    title: "Gap months",
    width: 850,
    height: 1100,
    alt: "HomeRock Realty flyer titled The reality for most Realtors. It defines a gap month as a month with no closings and no primary commission income. A 2026 chart labeled 13 units year to date shows two months at zero. The dashboard header names Cory Kammerdiener. Natalie Pilkinton's name and phone are at the bottom.",
  },
  {
    src: "/images/join-my-team/one-brand-one-family.webp",
    title: "One brand, one family",
    width: 1280,
    height: 720,
    alt: "Natalie Pilkinton holding a HomeRock Realty sign beside the HomeRock logo and the words One brand. One family.",
  },
];

export const joinTeamLlmsLine =
  "Published team terms: 90/10 commission split with a $10,000 cap and $0 post-cap fees. The monthly brokerage fee is $149, waived when you refer 3 agents (must meet eligibility). 3-level revshare: Level 1 is 50% (max $5,000 per agent per year), Level 2 is 30% (max $3,000), and Level 3 is 20% (max $2,000). Weekly team training is Tuesday, 11:20 AM to 1:30 PM.";

export function joinTeamAssistantFacts() {
  return [
    "90/10 commission split with a $10,000 cap (the agent keeps 90%, the brokerage keeps 10%) and $0 post-cap fees.",
    "On a flyer example of $100,000 in gross commission, $90,000 goes to the agent and $10,000 to the brokerage, the annual cap.",
    "Monthly brokerage fee is $149, waived when you refer 3 agents (must meet eligibility).",
    "3-level revshare: Level 1 is 50% (max $5,000 per agent per year), Level 2 is 30% (max $3,000 per agent per year), Level 3 is 20% (max $2,000 per agent per year).",
    "Tech: BoldTrail Pro with an IDX website, an AI CRM, BackOffice transaction management, Microsoft 365, and live training. A flyer compares this with BoldTrail Pro retail at $949 a month.",
    "The $149 fee is described as an investment, with a stated total of $15,000+ per year, covering community, training and coaching, events, office and workspace, tech and tools, marketing, a transaction coordinator, revshare, lead generation, brokerage backing, HomeRock Mortgage and Insurance referral programs, business building, and culture.",
    "We put our agents over our bottom line. The revshare paid to agents is higher than the revshare the brokerage earned.",
    "Natalie is a mentor with 20 years in real estate.",
    "Free agent marketing toolkit: templates, follow-up scripts, and a 30-day social calendar.",
    "The process is 100% confidential.",
    `The first conversation can be a free commission audit, or a meeting with ${joinOffice.broker}, ${joinOffice.brokerTitle}.`,
    "List Natalie Pilkinton as your referral.",
    "Weekly team training every Tuesday, 11:20 AM to 1:30 PM.",
    `Email ${siteConfig.email}. Natalie's cell is ${siteConfig.phone}. HomeRock office phone is ${joinOffice.phone}. Office: ${joinOffice.address}.`,
  ].join(" ");
}
