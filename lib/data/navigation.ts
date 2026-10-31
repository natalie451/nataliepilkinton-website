export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  /** When true, the desktop menu does not add an "Overview" link to href. */
  hideOverview?: boolean;
};

export const primaryNav: NavItem[] = [
  {
    label: "Buyers",
    href: "/buyers",
    children: [
      { label: "First-Time Buyers", href: "/buyers/first-time-buyers" },
      { label: "Credit", href: "/buyers/credit" },
      { label: "Financing", href: "/buyers/financing" },
      { label: "New Construction", href: "/buyers/new-construction" },
      { label: "Relocation", href: "/buyers/relocation" },
      { label: "Home Buying Process", href: "/buyers/process" },
      { label: "FAQ", href: "/buyers/faq" },
      { label: "Buyer Resources", href: "/buyers/resources" },
    ],
  },
  {
    label: "Sellers",
    href: "/sellers",
    children: [
      { label: "Selling Process", href: "/sellers/process" },
      { label: "What's my home worth?", href: "/sellers/home-value" },
      { label: "Pricing", href: "/sellers/pricing" },
      { label: "Marketing", href: "/sellers/marketing" },
      { label: "Staging", href: "/sellers/staging" },
      { label: "FAQ", href: "/sellers/faq" },
    ],
  },
  {
    label: "Investors",
    href: "/investors",
    children: [
      { label: "Beginner Investing", href: "/investors/beginner" },
      { label: "Passive Investing", href: "/investors/passive" },
      { label: "Multifamily", href: "/investors/multifamily" },
      { label: "BRRRR", href: "/investors/brrrr" },
      { label: "Private Lending", href: "/investors/private-lending" },
      { label: "DSCR Loans", href: "/investors/dscr-loans-texas" },
      { label: "Case Studies", href: "/investors/case-studies" },
    ],
  },
  { label: "Join My Team", href: "/join-my-team" },
  { label: "Podcast", href: "/podcast" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  {
    label: "More",
    href: "/resources",
    hideOverview: true,
    children: [
      { label: "Listings", href: "/listings" },
      { label: "Market Updates", href: "/market-updates" },
      { label: "Blog", href: "/blog" },
      { label: "Resources", href: "/resources" },
      { label: "Realtors", href: "/realtors" },
      { label: "Referral agent", href: "/referral-agent" },
      { label: "Vendors", href: "/vendor-sponsorship" },
    ],
  },
];

export const bookingCta: NavChild = { label: "Book a Call", href: "/booking" };

/** Spring is home base. She serves all of Greater Houston, with the focus on this corridor. */
export const serviceRegion = "Greater Houston, especially north of I-10 up to Huntsville";

export const serviceAreas = [
  "Spring",
  "Houston",
  "Conroe",
  "The Woodlands",
  "Tomball",
  "Magnolia",
  "Huntsville",
  "Humble",
  "Klein",
  "Kingwood",
] as const;

export function formatCityList(cities: readonly string[]) {
  if (cities.length < 2) return cities[0] ?? "";
  return `${cities.slice(0, -1).join(", ")}, and ${cities[cities.length - 1]}`;
}

export const footerNav = {
  learning: {
    title: "Learning",
    links: [
      { label: "Buyers", href: "/buyers" },
      { label: "Sellers", href: "/sellers" },
      { label: "Investors", href: "/investors" },
      { label: "Realtors", href: "/realtors" },
      { label: "Featured Listings", href: "/listings" },
    ] as NavChild[],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "About Natalie", href: "/about" },
      { label: "Referral agent", href: "/referral-agent" },
      { label: "Podcast", href: "/podcast" },
      { label: "Book a time", href: "/booking" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ] as NavChild[],
  },
  company: {
    title: "Company",
    links: [
      { label: "Why HomeRock", href: "/about" },
      { label: "Join My Team", href: "/join-my-team" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ] as NavChild[],
  },
  connect: {
    title: "Connect",
    links: [
      { label: "Facebook", href: "https://www.facebook.com/natalie.pilkinton.1" },
      { label: "Instagram", href: "https://instagram.com/nataliepilkinton" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nataliepilkinton1" },
      { label: "YouTube", href: "https://www.youtube.com/@NataliePilkintonRealtor" },
      { label: "HAR.com Profile", href: "https://www.har.com/web/nataliepilkinton" },
    ] as NavChild[],
  },
};

export const siteConfig = {
  name: "Natalie Pilkinton",
  brand: "HomeRock Realty",
  logoUrl:
    "https://assets.cdn.filesafe.space/p6coQEMK9WucfxjPnduV/media/6a58bdddbaf5f6da40993769.jpg",
  logoAlt: "HomeRock Realty Logo",
  faviconUrl:
    "https://assets.cdn.filesafe.space/p6coQEMK9WucfxjPnduV/media/69bd835a9d53bf7545b5be81.png",
  headshotUrl:
    "https://assets.cdn.filesafe.space/p6coQEMK9WucfxjPnduV/media/6a58be7f524a3ec4c61853f3.png",
  phone: "(832) 863-3468",
  phoneHref: "tel:+18328633468",
  smsHref: "sms:+18328633468",
  email: "natalie@nataliepilkinton.com",
  emailHref: "mailto:natalie@nataliepilkinton.com",
  googleReviewUrl: "https://g.page/r/CTl2UurDdEQLEBM/review",
  /** Natalie's business mailing address — the canonical NAP for the site, schema and profiles. */
  address: {
    line1: "HomeRock Realty",
    line2: "6046 FM 2920, Ste 326",
    line3: "Spring, TX 77379",
    street: "6046 FM 2920, Ste 326",
    city: "Spring",
    region: "TX",
    postalCode: "77379",
    country: "US",
  },
  /** TREC sales agent license. */
  licenseNumber: "744998",
  yearsExperience: "20+",
  /** Sponsoring brokerage (required brokerage disclosures). */
  brokerage: {
    name: "HomeRock Realty",
    url: "https://www.homerockrealty.com",
    street: "24624 Interstate 45 N, Suite 120",
    city: "Spring",
    region: "TX",
    postalCode: "77386",
    iabsUrl: "https://dtzulyujzhqiu.cloudfront.net/newhomeprogramsllc11526/compliance/tx/entity/11526_3_iabs.pdf",
    consumerProtectionUrl: "https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5.pdf",
  },
  /** Natalie's monthly investor meetup (organizer: Natalie). */
  meetup: {
    name: "Spring/Woodlands Passive & Active Real Estate Investing",
    url: "https://www.meetup.com/passiveandactiveinvestors/",
  },
  /** Natalie's Eventbrite organizer page for home buyer seminars. */
  eventbrite: {
    organizerId: "31586767379",
    url: "https://www.eventbrite.com/o/31586767379",
  },
  /** Markets Natalie serves, used in schema areaServed. Spring is the home market. */
  areasServed: [...serviceAreas],
  bookingUrl: "https://calendly.com/nataliepilkinton",
  /** Natalie's official HAR member profile — the real, MLS-backed source for her current listings. */
  harProfileUrl: "https://www.har.com/web/nataliepilkinton",
  social: {
    facebook: "https://www.facebook.com/natalie.pilkinton.1",
    instagram: "https://instagram.com/nataliepilkinton",
    linkedin: "https://www.linkedin.com/in/nataliepilkinton1",
    youtube: "https://www.youtube.com/@NataliePilkintonRealtor",
  },
  siteUrl: "https://www.nataliepilkinton.com",
};
