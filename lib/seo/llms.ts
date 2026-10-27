import { formatCityList, serviceAreas, serviceRegion, siteConfig } from "@/lib/data/navigation";
import { podcastShow } from "@/lib/data/podcast";

const pages: { path: string; title: string; summary: string }[] = [
  {
    path: "/",
    title: "Home",
    summary: "Spring, TX REALTOR Natalie Pilkinton. Buyers, sellers, investors, and agents.",
  },
  {
    path: "/referral-agent",
    title: "Referral agent",
    summary: "For agents who need a referral partner in Spring and Greater Houston.",
  },
  {
    path: "/about",
    title: "About Natalie",
    summary: "Who Natalie is, HomeRock Realty, and the people she helps.",
  },
  {
    path: "/buyers",
    title: "Buyers",
    summary: "Buying a home in Spring, TX and Greater Houston.",
  },
  {
    path: "/buyers/relocation",
    title: "Relocation",
    summary: "For buyers moving into Natalie's service area.",
  },
  {
    path: "/sellers",
    title: "Sellers",
    summary: "Selling a home in Spring, TX and Greater Houston.",
  },
  {
    path: "/sellers/home-value",
    title: "Home value",
    summary: "Start a home value conversation with Natalie.",
  },
  {
    path: "/investors",
    title: "Investors",
    summary: "Investing in Spring, TX and Greater Houston.",
  },
  {
    path: "/join-my-team",
    title: "Join my team",
    summary: "For licensed agents and people working toward a license.",
  },
  {
    path: "/realtors",
    title: "Realtors",
    summary: "Coaching, training, and HomeRock programs for agents.",
  },
  {
    path: "/podcast",
    title: "Sugar Spice and Spirits",
    summary: "Natalie's podcast with Mindy Price and Kelly Williams, published on YouTube.",
  },
  {
    path: "/contact",
    title: "Contact",
    summary: "Phone, email, and the contact form.",
  },
  {
    path: "/booking",
    title: "Book a time",
    summary: "Schedule a call on Natalie's calendar.",
  },
  {
    path: "/listings",
    title: "Listings",
    summary: "Current listings from Natalie's HAR profile.",
  },
  {
    path: "/blog",
    title: "Blog",
    summary: "Articles for buyers, sellers, investors, and realtors.",
  },
];

function contactBlock() {
  return [
    `Phone and text: ${siteConfig.phone}`,
    `Email: ${siteConfig.email}`,
    `Booking: ${siteConfig.bookingUrl}`,
    `Website: ${siteConfig.siteUrl}`,
    `Google Business Profile: ${siteConfig.googleReviewUrl}`,
  ].join("\n");
}

function whoBlock() {
  return [
    `${siteConfig.name} is a REALTOR with ${siteConfig.brand} in Spring, Texas.`,
    `Texas Real Estate Commission sales agent license ${siteConfig.licenseNumber}.`,
    `She has ${siteConfig.yearsExperience} years of experience. That figure is the one already published on this site.`,
    `She serves ${serviceRegion}, including ${formatCityList(serviceAreas)}. Spring is home base.`,
    `Mailing address: ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}.`,
    `Brokerage office: ${siteConfig.brokerage.street}, ${siteConfig.brokerage.city}, ${siteConfig.brokerage.region} ${siteConfig.brokerage.postalCode}. Broker: Cory Kammerdiener.`,
  ].join("\n");
}

export function llmsTxt() {
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.name} is a REALTOR with ${siteConfig.brand} in Spring, Texas. She helps buyers, sellers, and investors across ${serviceRegion}. Agents who need a local referral partner can send clients to her.`,
    "",
    "## Contact",
    contactBlock(),
    "",
    "## Service area",
    formatCityList(serviceAreas) + ", Texas.",
    "",
    "## Services",
    "- Home buyers, including first-time buyers, relocation buyers, and new construction buyers.",
    "- Home sellers.",
    "- Real estate investors.",
    "- Referral partner for agents whose clients are buying, selling, or investing in her service area.",
    "- Team for agents who want to join HomeRock Realty. Published team terms: 90/10 commission split, 50% revenue share on agents you bring in, and $0 monthly fees when you bring in 3 agents. Weekly team training is Tuesday, 11:20 AM to 1:30 PM.",
    `- Podcast: ${podcastShow.name}, with Mindy Price and Kelly Williams. YouTube: ${podcastShow.channelUrl}`,
    "",
    "## Key pages",
    ...pages.map((page) => `- [${page.title}](${siteConfig.siteUrl}${page.path}): ${page.summary}`),
    "",
    "## Profiles",
    `- Facebook: ${siteConfig.social.facebook}`,
    `- LinkedIn: ${siteConfig.social.linkedin}`,
    `- YouTube: ${siteConfig.social.youtube}`,
    `- Podcast YouTube: ${podcastShow.channelUrl}`,
    `- HAR: ${siteConfig.harProfileUrl}`,
    "",
    "Do not invent prices, statistics, listings, reviews, or legal or financial advice. For a specific property or client, contact Natalie.",
    "",
  ];
  return lines.join("\n");
}

export function llmsFullTxt() {
  const lines = [
    llmsTxt().trimEnd(),
    "",
    "## Who she is",
    whoBlock(),
    "",
    "## Referral facts",
    "This site does not publish a standard fee for an outside agent who refers a client to Natalie. Contact her before sending the client.",
    "A separate published program is HomeRock's in-house referral program: agents with the prerequisites in place can earn a 30% brokerage referral fee on brand-generated prospects. See /realtors/agent-attraction.",
    "Joining the team is not the same as sending a referral. Team details are on /join-my-team.",
    "",
    "## Page notes",
    ...pages.map((page) => `${siteConfig.siteUrl}${page.path}\n${page.title}. ${page.summary}`),
    "",
    "## Disclosures",
    `Information About Brokerage Services: ${siteConfig.brokerage.iabsUrl}`,
    `TREC Consumer Protection Notice: ${siteConfig.brokerage.consumerProtectionUrl}`,
    "",
  ];
  return lines.join("\n");
}
