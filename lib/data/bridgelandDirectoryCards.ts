/**
 * HOA, price, and photo for each Bridgeland village and named neighborhood.
 * HOA figures are the 2025 approved rates. A neighborhood extra is included
 * only when that sheet prints the same name. Prices are lines printed by
 * Bridgeland or a builder page. Missing fields say Ask Natalie.
 */

export type DirectoryCardLink = { label: string; url: string };

export type DirectoryCardPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  creditName: string;
  creditUrl?: string;
};

export type DirectoryCardFacts = {
  hoa: string;
  hoaSourceLabel: string;
  hoaSourceUrl: string;
  price: string;
  priceLinks?: DirectoryCardLink[];
  photo?: DirectoryCardPhoto;
};

const hoaPdf = "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf";
const hoaLabel = "2025 approved HOA rates";

const lakelandBase =
  "The 2025 sheet lists $665 for Bridgeland Council and $725 for Lakeland Village CAI. Those two invoices together are $1,390.";
const parklandBase =
  "The 2025 sheet lists $665 for Bridgeland Council and $695 for Parkland Village CAI. Those two invoices together are $1,360.";
const prairieBase =
  "The 2025 sheet lists $665 for Bridgeland Council and $690 for Prairieland Village CAI. Those two invoices together are $1,355.";
const creekBase =
  "The 2025 sheet lists $665 for Bridgeland Council and $690 for Creekland Village CAI. Those two invoices together are $1,355.";
const centralHoa =
  "Ask Natalie. The 2025 sheet lists Bridgeland Council and the Lakeland, Parkland, Prairieland, and Creekland associations. It does not list Bridgeland Central or this name.";

const checked = "Checked November 9, 2026.";

export const bridgelandDirectoryCards: Record<string, DirectoryCardFacts> = {
  "Lakeland Village": {
    hoa: lakelandBase,
    hoaSourceLabel: hoaLabel,
    hoaSourceUrl: hoaPdf,
    price: `Ask Natalie. The Lakeland Village page does not print a current from price. ${checked}`,
    photo: {
      src: "/new-homes/bridgeland/directory/lakeland.webp",
      alt: "Lakeland Village entrance sign beside a curved road and lawn, published on the Lakeland Village page.",
      width: 1400,
      height: 638,
      creditName: "Bridgeland",
      creditUrl: "https://www.bridgeland.com/village/lakeland-village/",
    },
  },
  "Parkland Village": {
    hoa: parklandBase,
    hoaSourceLabel: hoaLabel,
    hoaSourceUrl: hoaPdf,
    price: `Highland Homes says it sells in Parkland Village and Prairieland Village, with 40-foot lots from the $380s and 65-foot lots from the $750s. That page does not split the range by village. ${checked}`,
    priceLinks: [
      { label: "Highland Homes, Bridgeland", url: "https://www.highlandhomes.com/houston/cypress/bridgeland" },
    ],
    photo: {
      src: "/new-homes/bridgeland/directory/parkland.webp",
      alt: "Parkland Village brick entrance sign and arch, published on the Parkland Village page.",
      width: 1400,
      height: 934,
      creditName: "Bridgeland",
      creditUrl: "https://www.bridgeland.com/village/parkland-village/",
    },
  },
  "Prairieland Village": {
    hoa: prairieBase,
    hoaSourceLabel: hoaLabel,
    hoaSourceUrl: hoaPdf,
    price: `The Prairieland model park page says homes run from the $300s to $2M+. Highland Homes also lists 40-foot lots from the $380s and 65-foot lots from the $750s for Parkland Village and Prairieland Village together. ${checked}`,
    priceLinks: [
      { label: "Prairieland model park", url: "https://www.bridgeland.com/prairieland-model-park/" },
      { label: "Highland Homes, Bridgeland", url: "https://www.highlandhomes.com/houston/cypress/bridgeland" },
    ],
    photo: {
      src: "/new-homes/bridgeland/directory/prairieland.webp",
      alt: "Prairieland monument beside a trail, with houses beyond the green, published on the Prairieland Village page.",
      width: 1400,
      height: 788,
      creditName: "Bridgeland",
      creditUrl: "https://www.bridgeland.com/village/prairieland-village/",
    },
  },
  "Creekland Village": {
    hoa: creekBase,
    hoaSourceLabel: hoaLabel,
    hoaSourceUrl: hoaPdf,
    price: `Century Communities lists Creekland Village homes from $329,990. Bridgeland's October 1, 2026 post says Empire Homes in Creekland starts in the high $300s, about 1,500 to 2,800 square feet. Bridgeland does not print one price for every Creekland builder. ${checked}`,
    priceLinks: [
      {
        label: "Century Communities, Creekland Village",
        url: "https://www.centurycommunities.com/find-your-new-home/texas/houston-metro/cypress/bridgeland/",
      },
      {
        label: "Empire Homes in Creekland, October 1, 2026",
        url: "https://www.bridgeland.com/news/empire-homes-bridgelands-newest-builder-addition-opens-a-model-home-in-creekland-village/",
      },
    ],
    photo: {
      src: "/new-homes/bridgeland/directory/creekland.webp",
      alt: "Creekland monument and lighted tower at dusk, published on the Creekland Village page.",
      width: 1400,
      height: 930,
      creditName: "Bridgeland",
      creditUrl: "https://www.bridgeland.com/village/creekland-village/",
    },
  },
  "Bridgeland Central": {
    hoa: centralHoa,
    hoaSourceLabel: hoaLabel,
    hoaSourceUrl: hoaPdf,
    price: `Ask Natalie for one Bridgeland Central price. The homes page prices Bridgeland from the low $300s to over $2 million and does not assign that range to this village. ${checked}`,
    priceLinks: [{ label: "Bridgeland homes", url: "https://www.bridgeland.com/homes/" }],
    photo: {
      src: "/new-homes/bridgeland/directory/central.webp",
      alt: "People on a covered patio, published as the Bridgeland Central page hero.",
      width: 1400,
      height: 934,
      creditName: "Bridgeland",
      creditUrl: "https://www.bridgeland.com/village/bridgeland-central/",
    },
  },
  "Lakeland Heights": {
    hoa: `${lakelandBase} The same sheet lists a $50 Lakeland Heights extra. Those three lines together are $1,440. A separate line, TH @ Lakeland Heights, is $2,142. The sheet does not define that abbreviation, so it stays in the HOA areas list.`,
    hoaSourceLabel: hoaLabel,
    hoaSourceUrl: hoaPdf,
    price: `Ask Natalie. No current from price for Lakeland Heights was printed on the village page or a builder page opened November 9, 2026.`,
  },
  "Harmony Grove": {
    hoa: `${lakelandBase} The same sheet lists a $2,544 Harmony Grove extra. Those three lines together are $3,934.`,
    hoaSourceLabel: hoaLabel,
    hoaSourceUrl: hoaPdf,
    price: `Ask Natalie. The February 10, 2020 announcement said townhomes from the $220s. That is not a current price, and no later from price was on a builder page opened November 9, 2026.`,
  },
  "Parkland Square": {
    hoa: `${parklandBase} The same sheet lists a $110 Parkland Square extra. Those three lines together are $1,470.`,
    hoaSourceLabel: hoaLabel,
    hoaSourceUrl: hoaPdf,
    price: `Ask Natalie. The October 6, 2021 article says Parkland Square sold out earlier that year. It does not print a current price.`,
  },
  "Parkland Row": {
    hoa: `${parklandBase} The same sheet lists a $110 Parkland Row extra. Those three lines together are $1,470.`,
    hoaSourceLabel: hoaLabel,
    hoaSourceUrl: hoaPdf,
    price: `Ask Natalie. The October 6, 2021 article does not print a from price, and no later builder price was opened on November 9, 2026.`,
  },
  Southbridge: {
    hoa: centralHoa,
    hoaSourceLabel: hoaLabel,
    hoaSourceUrl: hoaPdf,
    price: `Ask Natalie. The Bridgeland Central page says new homes in Southbridge are now selling and does not print a from price. No builder page opened November 9, 2026 gave a Southbridge starting price.`,
  },
  Easthaven: {
    hoa: centralHoa,
    hoaSourceLabel: hoaLabel,
    hoaSourceUrl: hoaPdf,
    price: `David Weekley lists the Easthaven Vision Collection from the $494s, about 2,523 to 2,988 square feet, and the Horizon Collection from the $534s, about 2,633 to 3,381 square feet. The Bridgeland Central page also names DRB Homes. A current DRB from price was not on a page opened November 9, 2026. ${checked}`,
    priceLinks: [
      {
        label: "David Weekley, Easthaven Vision",
        url: "https://www.davidweekleyhomes.com/new-homes/tx/houston/cypress/bridgeland-central-55-homesites",
      },
      {
        label: "David Weekley, Easthaven Horizon",
        url: "https://www.davidweekleyhomes.com/new-homes/tx/houston/cypress/bridgeland-central-62-homesites",
      },
    ],
  },
  "Emerald Heights": {
    hoa: centralHoa,
    hoaSourceLabel: hoaLabel,
    hoaSourceUrl: hoaPdf,
    price: `David Weekley lists Emerald Heights Cottages Row from the $349s, Landmark Row from the $454s, and Enclave Row from the $491s. The plan pages show the Edmond from $349,990, a Landmark home at $454,990, and the Fanning from $491,990. Those pages title the neighborhood Emerald Heights. Their web addresses still contain lakeland-heights. ${checked}`,
    priceLinks: [
      {
        label: "David Weekley, Emerald Heights Cottages",
        url: "https://www.davidweekleyhomes.com/new-homes/tx/houston/cypress/lakeland-heights-34-series",
      },
      {
        label: "David Weekley, Emerald Heights Landmark",
        url: "https://www.davidweekleyhomes.com/new-homes/tx/houston/cypress/lakeland-heights-42",
      },
      {
        label: "David Weekley, Emerald Heights Enclave",
        url: "https://www.davidweekleyhomes.com/new-homes/tx/houston/cypress/lakeland-heights-50",
      },
    ],
  },
  "Del Webb Bridgeland": {
    hoa: centralHoa,
    hoaSourceLabel: hoaLabel,
    hoaSourceUrl: hoaPdf,
    price: `Ask Natalie. The February 5, 2026 announcement and the Bridgeland Del Webb page do not print a from price. ${checked}`,
    photo: {
      src: "/new-homes/bridgeland/directory/del-webb.webp",
      alt: "White single-story home with two garage doors, published as the Renown model on the Bridgeland Del Webb page.",
      width: 1387,
      height: 862,
      creditName: "Bridgeland",
      creditUrl: "https://www.bridgeland.com/home/del-webb/",
    },
  },
  "Starling at Bridgeland": {
    hoa: centralHoa,
    hoaSourceLabel: hoaLabel,
    hoaSourceUrl: hoaPdf,
    price: `Ask Natalie. The Bridgeland Central page describes Starling as apartments and does not print a rent. ${checked}`,
    photo: {
      src: "/new-homes/bridgeland/area-starling.webp",
      alt: "Starling at Bridgeland. The monument shows 16200, with multifamily buildings behind it. Starling is not a single-family home for sale.",
      width: 1600,
      height: 900,
      creditName: "Natalie Pilkinton",
    },
  },
};
