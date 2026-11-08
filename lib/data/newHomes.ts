/**
 * New-construction communities for /new-homes.
 * Every fact is taken from a developer, builder, or school page in `sources`.
 * Prices and school zones change. Pages tell buyers to confirm both.
 */

import { pass2Communities } from "@/lib/data/newHomesPass2";

export type NewHomeSource = {
  label: string;
  url: string;
};

export type NewHomeBuilder = {
  name: string;
  detail: string;
};

export type NewHomeFaq = {
  question: string;
  answer: string;
};

export type NewHomeCity = {
  slug: string;
  name: string;
  /** Short line under the city name. */
  headline: string;
  summary: string;
};

export type NewHomeCommunity = {
  slug: string;
  /** Canonical city segment. The page lives at /new-homes/{citySlug}/{slug}. */
  citySlug: string;
  /** Other city pages that should link here without duplicating the URL. */
  alsoListedOn?: string[];
  name: string;
  developer: string;
  /** Mailing or sales address published by the community. */
  address: string;
  location: string;
  summary: string;
  priceNote: string;
  homes: string;
  builders: NewHomeBuilder[];
  amenities: string[];
  /** Empty when the official page does not name a district. */
  schoolDistrict: string;
  schools: string;
  sources: NewHomeSource[];
  faqs: NewHomeFaq[];
  /** Named villages, neighborhoods, or recorded sections. Absent when the page has none. */
  directory?: {
    intro: string;
    limitation: string;
    places: {
      name: string;
      group: "Villages" | "Neighborhoods" | "HOA areas" | "Recorded sections";
      kind: "Village" | "Neighborhood" | "Multifamily" | "Active-adult community" | "HOA area" | "Plat section";
      parent?: string;
      status: string;
      detail: string;
      sourceLabel: string;
      sourceUrl: string;
    }[];
  };
};

const phone = "(832) 981-5271";

function tourFaqs(name: string): NewHomeFaq[] {
  return [
    {
      question: `How do I tour ${name} with Natalie?`,
      answer: `Bring Natalie on your first visit, or tell the on-site agent that Natalie Pilkinton is your buyer's agent before you sign in. Builders register an agent at the first visit, and that registration can apply to later homes in the same community. Call or text ${phone}, use the tour form on this page, or book a time at https://calendly.com/nataliepilkinton.`,
    },
    {
      question: `Does Natalie charge buyers to represent them at ${name}?`,
      answer: `In most new-home purchases Natalie represents the buyer at no cost to the buyer, because the builder pays the buyer's agent compensation. Ask her to confirm how that builder's registration and compensation work before you visit. Her job is to compare builders, review the contract, and keep incentives and timelines in writing.`,
    },
  ];
}

export const newHomeCities: NewHomeCity[] = [
  {
    slug: "conroe",
    name: "Conroe",
    headline: "SH 242, I-45, and the north side of The Woodlands",
    summary:
      "Conroe's largest new-home searches cluster along SH 242 and I-45. This page covers ARTAVIA, Evergreen, Grand Central Park, Harper's Preserve, and Stewart's Ranch, plus a link to The Woodlands Hills, which sits in both Conroe and Willis.",
  },
  {
    slug: "montgomery",
    name: "Montgomery",
    headline: "Lake Conroe, FM 2854, and FM 1488",
    summary:
      "Woodforest and Fairwater sit south of Lake Conroe. Woodforest is the large Johnson Development community. Fairwater is the smaller Forestar community on FM 2854. Two Step Farm is the Oxland Group community north of FM 1488, between I-45 and Highway 249.",
  },
  {
    slug: "willis",
    name: "Willis",
    headline: "I-45 north of Conroe, along FM 830",
    summary:
      "Willis is the north end of this new-home corridor. The Woodlands Hills, a Howard Hughes community, has neighborhoods in both Willis and Conroe and is zoned to Willis ISD. The Pines at Seven Coves is the Centex community off FM 830 and Highway 75, also in Willis ISD.",
  },
  {
    slug: "spring",
    name: "Spring",
    headline: "Grand Parkway, Rayford, and Natalie's home base",
    summary:
      "Spring is where Natalie is based. Harmony and Woodson's Reserve are the master-planned communities buyers ask about along the Grand Parkway, Rayford Road, and Riley Fuzzel Road.",
  },
  {
    slug: "cypress",
    name: "Cypress",
    headline: "Northwest Houston, from FM 529 to Tuckerton",
    summary:
      "Cypress new construction here means Bridgeland, Towne Lake, Marvida, Mason Woods, and Avalon at Cypress. Elyson uses a Katy address and has its own page under Katy.",
  },
  {
    slug: "waller",
    name: "Waller",
    headline: "Waller ISD and Waller County, including Hockley and Brookshire",
    summary:
      "The City of Waller is small. The new-home searches that use the Waller name usually mean Waller ISD in Hockley, or Waller County communities sold from Brookshire and the west Katy edge. Dellrose, Everly, and Redbud use Hockley addresses and Waller ISD. Stokesbury uses a Waller address and Waller ISD. Sunterra and Sunterra Lakes are the Waller County communities.",
  },
  {
    slug: "porter",
    name: "Porter",
    headline: "Grand Parkway and US 59, east Montgomery County",
    summary:
      "Porter's two large published master plans are The Highlands, by Caldwell Communities, and Valley Ranch, by The Signorelli Company. Both talk about New Caney ISD.",
  },
  {
    slug: "splendora",
    name: "Splendora",
    headline: "Highway 242 and east Montgomery County",
    summary:
      "Splendora ISD covers several new-home communities whose street addresses say New Caney or Cleveland. Harrington Trails, The Canopies, and Pinewood Trails are the ones with current builder pages.",
  },
  {
    slug: "new-caney",
    name: "New Caney",
    headline: "US 59 and the Grand Parkway",
    summary:
      "Tavola is the Friendswood Development community with a New Caney address. Valley Ranch, The Highlands, and Harrington Trails are nearby and linked from their own city pages.",
  },
  {
    slug: "tomball",
    name: "Tomball",
    headline: "Grand Parkway and Highway 249",
    summary:
      "Amira and Oakhill Reserve are the Tomball master plans with current builder pages that name prices and Tomball ISD. Confirm the campus for the lot, because Tomball ISD has been opening west-side schools.",
  },
  {
    slug: "katy",
    name: "Katy",
    headline: "FM 529, the Grand Parkway, and Fulshear south of I-10",
    summary:
      "Elyson and Cane Island are north of Interstate 10. Grand Mason Crossing is east of the Grand Parkway, with a Katy address and Katy ISD. Sunterra and Sunterra Lakes are linked here and filed under Waller. Cross Creek West, Tamarron, and Jordan Ranch are in Fulshear, south of I-10, and are linked here with their full pages under Fulshear.",
  },
  {
    slug: "magnolia",
    name: "Magnolia",
    headline: "SH 249, FM 1488, and FM 1486",
    summary:
      "Audubon and COLTON are the Magnolia-area master plans with current community sites. Audubon uses a Magnolia address at SH 249 and FM 1488. COLTON uses a Todd Mission address at SH 249 and FM 1486 and publishes Magnolia ISD schools.",
  },
  {
    slug: "humble",
    name: "Humble",
    headline: "West Lake Houston, north of Beltway 8",
    summary:
      "Balmoral is the Humble master plan with a current builder page for prices and Humble ISD. Fall Creek is an established golf community and is not listed here as an active new-home sales community.",
  },
  {
    slug: "crosby",
    name: "Crosby",
    headline: "North of the Crosby Freeway, near Lake Houston",
    summary:
      "Enclave at Newport is the active Davidson Homes section inside Newport. Crosby sits north of I-10. Older Newport builder sections have been reported sold out.",
  },
  {
    slug: "dayton",
    name: "Dayton",
    headline: "Northeast Harris and Liberty County, north of I-10",
    summary:
      "River Ranch Trails is the Dayton new-home section with a current Coventry Homes page, a starting price, and Dayton ISD.",
  },
  {
    slug: "fulshear",
    name: "Fulshear",
    headline: "FM 359, Jordan Road, and the Katy Freeway",
    summary:
      "Cross Creek West, Tamarron, and Jordan Ranch are Fulshear communities with current builder pages that name prices and Lamar CISD. All three are south of I-10 and are also linked from the Katy page.",
  },
  {
    slug: "missouri-city",
    name: "Missouri City",
    headline: "Fort Bend Parkway and Highway 6",
    summary:
      "Sienna is the Johnson Development community in Missouri City with a current builder directory, published prices, and Fort Bend ISD schools inside the community. Riverstone's sales office is in Sugar Land and is linked here.",
  },
  {
    slug: "manvel",
    name: "Manvel",
    headline: "Highway 288, south of Pearland",
    summary:
      "Meridiana and Pomona publish current builder lists, prices, and Alvin ISD schools. Meridiana's information center address is in Iowa Colony. Pomona's contact address is in Manvel.",
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    headline: "University Boulevard, Fort Bend County",
    summary:
      "Riverstone's community site says the last new homes are selling now, from the $340s, in Fort Bend ISD, with an on-site elementary school. The published sales office is in Sugar Land.",
  },
  {
    slug: "richmond",
    name: "Richmond",
    headline: "Fort Bend County, along the Grand Parkway and US 59",
    summary:
      "Harvest Green, Veranda, and Briscoe Falls have official pages that name a builder, a from-price, and a school district. Harvest Green and Veranda name Fort Bend ISD or Lamar CISD on their own sites. Briscoe Falls is a KB Home community in Lamar CISD.",
  },
  {
    slug: "pearland",
    name: "Pearland",
    headline: "Alvin ISD, along Highway 288",
    summary:
      "Massey Oaks is a Meritage community in Pearland, zoned to Alvin ISD. Canterra Creek is an LGI community whose sales address is in Arcola and whose page markets it near Pearland, also in Alvin ISD.",
  },
  {
    slug: "league-city",
    name: "League City",
    headline: "I-45, between Houston and Galveston",
    summary:
      "Westland Ranch is a Forestar community in League City with new homes from the $270,000s. The community site says it is in Clear Creek ISD and Santa Fe ISD.",
  },
  {
    slug: "texas-city",
    name: "Texas City",
    headline: "I-45, on the southwest shore of Galveston Bay",
    summary:
      "Lago Mar is the Texas City master plan with a current developer brochure that names builders, a price range, and Dickinson ISD schools. The full page is here and is also linked from Dickinson.",
  },
  {
    slug: "dickinson",
    name: "Dickinson",
    headline: "Dickinson ISD, next to Texas City",
    summary:
      "Lago Mar's information center is in Texas City, and the community site says students attend Dickinson ISD. The full page is filed under Texas City and linked here.",
  },
  {
    slug: "mont-belvieu",
    name: "Mont Belvieu",
    headline: "Barbers Hill ISD, near the Grand Parkway",
    summary:
      "Grand Oaks by Century Communities and Riceland by Autograph Homes both publish a from-price and Barbers Hill ISD.",
  },
  {
    slug: "huntsville",
    name: "Huntsville",
    headline: "Lennar community in Huntsville",
    summary:
      "The Reserve at Huntsville is a Lennar community. Lennar lists homes from $186,990. The Lennar page does not name a school district.",
  },
  {
    slug: "huffman",
    name: "Huffman",
    headline: "Lennar community in Huffman",
    summary:
      "Sila is a Lennar community in Huffman. Lennar lists homes from $132,990. The Lennar page does not name a school district.",
  },
];

export const newHomeRegions: { name: string; citySlugs: string[] }[] = [
  {
    name: "North Houston",
    citySlugs: ["conroe", "montgomery", "willis", "spring", "huntsville", "porter", "splendora", "new-caney", "humble"],
  },
  {
    name: "Northwest",
    citySlugs: ["tomball", "cypress", "magnolia", "waller"],
  },
  {
    name: "West/Katy",
    citySlugs: ["katy", "fulshear"],
  },
  {
    name: "Southwest/Fort Bend",
    citySlugs: ["sugar-land", "missouri-city", "richmond"],
  },
  {
    name: "South/Brazoria",
    citySlugs: ["manvel", "pearland"],
  },
  {
    name: "Bay Area/Galveston",
    citySlugs: ["league-city", "texas-city", "dickinson"],
  },
  {
    name: "East",
    citySlugs: ["crosby", "dayton", "huffman", "mont-belvieu"],
  },
];

const communities: NewHomeCommunity[] = [
  {
    slug: "artavia",
    citySlug: "conroe",
    name: "ARTAVIA",
    developer: "AIRIA Development",
    address: "17590 Artavia Parkway, Conroe, TX 77302",
    location:
      "ARTAVIA is in Conroe and Montgomery County on SH 242, between I-45 North and US 59. The developer describes access to The Woodlands, Houston, I-45, US 59, and the Grand Parkway.",
    summary:
      "ARTAVIA is a 2,842-acre master-planned community that opened in 2019. AIRIA says about 6,500 homes are planned, and a 2026 community article said more than 1,700 homeowners were already there. Ten builders sell homes on 40-foot to 80-foot homesites.",
    priceNote:
      "A community article says home prices range from the mid $300s to $800 and up. The builder directory publishes section prices, including Lennar and David Weekley from the $350s and Jamestown Estate Homes from the $800s on 80-foot homesites. Those figures are the ones on the community site and change.",
    homes:
      "About 6,500 homes at completion. Homesites from 40 to 80 feet. The developer has reserved about 120 acres for commercial, mixed-use, and retail.",
    builders: [
      { name: "Beazer Homes", detail: "65-foot homesites, from the $480s" },
      { name: "Chesmar Homes", detail: "55-foot homesites, from the $370s" },
      { name: "David Weekley Homes", detail: "45-foot from the $350s, 50-foot from the $420s, 65-foot from the $550s" },
      { name: "Highland Homes", detail: "50-foot from the $390s, 60-foot from the $500s" },
      { name: "J. Patrick Homes", detail: "55-foot from the $490s, 70-foot from the $610s" },
      { name: "Jamestown Estate Homes", detail: "80-foot homesites, from the $800s" },
      { name: "Lennar", detail: "55-foot homesites, from the $350s" },
      { name: "Perry Homes", detail: "45-foot from the $400s, 50-foot from the $440s, 55-foot from the $550s" },
      { name: "Ravenna Homes", detail: "70-foot homesites, from the $650s" },
      { name: "Westin Homes", detail: "40-foot from the $460s, 60-foot from the $550s, 65-foot from the $740s" },
    ],
    amenities: [
      "Dapple Park, described as a 13-acre park with a five-acre lake, paddle boats, boardwalk, playground, splash pad, event lawn, and trails",
      "24/7 FitCenter, Palate Cafe, gathering rooms, and a lifestyle team",
      "Miles of trails and ARTscape installations",
      "Canopy Park, a second park the community said was under construction and planned to open in late fall 2026, with pickleball, a playground, a splash pad, and a pavilion",
    ],
    schoolDistrict: "Conroe ISD",
    schools:
      "ARTAVIA says students attend Conroe ISD. A community article names San Jacinto Elementary, Grangerland Intermediate, Moorhead Junior High, and Caney Creek High School as nearby zoned schools. Conroe ISD has purchased land near Dapple Park for a future on-site school. Zoning can change. Confirm the address with the district.",
    sources: [
      { label: "ARTAVIA builders", url: "https://artaviatx.com/available-homes/builders/" },
      { label: "ARTAVIA FAQ", url: "https://artaviatx.com/frequently-asked-questions/" },
      { label: "ARTAVIA community comparison", url: "https://artaviatx.com/master-planned-communities-in-conroe-tx/" },
      { label: "ARTAVIA homepage", url: "https://artaviatx.com/" },
    ],
    faqs: [
      {
        question: "Who is building in ARTAVIA?",
        answer:
          "The ARTAVIA builder directory lists Beazer Homes, Chesmar Homes, David Weekley Homes, Highland Homes, J. Patrick Homes, Jamestown Estate Homes, Lennar, Perry Homes, Ravenna Homes, and Westin Homes. Starting prices on that page run from the $350s to the $800s depending on the builder and homesite width.",
      },
      {
        question: "What school district is ARTAVIA in?",
        answer:
          "ARTAVIA says it is served by Conroe ISD. The community has also said Conroe ISD purchased land near Dapple Park for a future on-site school. Named campuses in a community article are San Jacinto Elementary, Grangerland Intermediate, Moorhead Junior High, and Caney Creek High School. Confirm the lot with Conroe ISD.",
      },
      {
        question: "Where is ARTAVIA?",
        answer:
          "The sales address published by ARTAVIA is 17590 Artavia Parkway, Conroe, TX 77302. The community is on SH 242 in Montgomery County, between I-45 North and US 59.",
      },
    ],
  },
  {
    slug: "grand-central-park",
    citySlug: "conroe",
    name: "Grand Central Park",
    developer: "Johnson Development",
    address: "750 Grand Central Parkway, Conroe, TX 77304",
    location:
      "Johnson Development places Grand Central Park in Conroe, about five miles north of The Woodlands. The community describes shopping at 336 Marketplace and City Central, including the Hyatt Regency Hotel and Convention Center, as nearby.",
    summary:
      "Grand Central Park is a Johnson Development community in Conroe. The developer says only about 800 of more than 2,000 acres will be developed, with a large share left as woodland and lakes. A January 2026 Johnson Development note said builders had closed on more than 1,550 homes and that the final homesites had been released.",
    priceNote:
      "Johnson Development's community page says homes are priced from the low $330,000s to more than $1 million. The live builder directory starts higher on several sections, including Highland Homes 40-foot homesites from the $390s and Drees Custom Homes 60-foot homesites from the $530s. Use the builder's current price sheet.",
    homes:
      "Planned for 1,700 luxury homes, townhomes, and patio homes. Drees describes 60-foot villa plans at about 2,400 to 3,700 square feet. Johnson Development said the final 159 homesites, 45 to 60 feet wide, went to builders and that the last new homes were expected in the third or fourth quarter of 2027.",
    builders: [
      { name: "Highland Homes", detail: "40-foot from the $390s, 55-foot from the $480s" },
      { name: "Perry Homes", detail: "45-foot from the $440s, 50-foot from the $470s" },
      { name: "Westin Homes", detail: "45-foot from the $470s" },
      { name: "David Weekley Homes", detail: "55-foot from the $480s" },
      { name: "Drees Custom Homes", detail: "60-foot from the $530s, about 2,400 to 3,700 square feet" },
      { name: "Jamestown Estate Homes", detail: "Listed on the current builder directory" },
    ],
    amenities: [
      "The Lake House, a 13-acre amenity complex with an event lawn, resort-style pool, dog park, playground, pavilion, grand room, fitness center, and lake views",
      "Six lakes and miles of trails, with the developer describing more than 1,000 acres of woods",
      "336 Marketplace, which the developer says includes more than 250,000 square feet of retail, including Kroger, Dick's Sporting Goods, and Ulta",
    ],
    schoolDistrict: "Confirm with the district for the homesite",
    schools:
      "Grand Central Park's developer pages reviewed for this guide do not name a school district or campus list. The community is in Conroe. Ask the builder for the attendance zone and confirm it with the district before you rely on a school.",
    sources: [
      { label: "Grand Central Park builders", url: "https://www.grandcentralparktx.com/home-builders" },
      { label: "Drees at Grand Central Park", url: "https://www.grandcentralparktx.com/home-builders/432/drees-custom-homes" },
      { label: "Johnson Development community page", url: "https://www.johnsondevelopment.com/conroe-tx/mpc_grand_central_park" },
      {
        label: "Final homesites announcement",
        url: "https://www.johnsondevelopment.com/news/10349/grand-central-park-builders-receive-final-homesites",
      },
    ],
    faqs: [
      {
        question: "Is Grand Central Park still selling new homes?",
        answer:
          "Johnson Development said in January 2026 that the final homesites had been released to David Weekley Homes, Drees Custom Homes, Highland Homes, Perry Homes, and Westin Homes, and that the last new homes were expected in the third or fourth quarter of 2027. Inventory is the remaining homes, not a brand-new section.",
      },
      {
        question: "What is the price range at Grand Central Park?",
        answer:
          "Johnson Development has published a range from the low $330,000s to more than $1 million. The builder directory's section prices start around the $390s for Highland Homes and go to the $530s for Drees 60-foot homes. Prices change. Get the current sheet from each model.",
      },
      {
        question: "What amenities are open at Grand Central Park?",
        answer:
          "Johnson Development describes The Lake House as a 13-acre complex with a resort-style pool, fitness center, playground, dog park, event lawn, pavilion, and lake views, plus six lakes, trails, and 336 Marketplace retail.",
      },
    ],
  },
  {
    slug: "harpers-preserve",
    citySlug: "conroe",
    name: "Harper's Preserve",
    developer: "Sam Yager Incorporated",
    address: "About 1 mile east of I-45 on TX 242, Conroe, TX",
    location:
      "Sam Yager Incorporated places Harper's Preserve one mile east of I-45 on Texas 242 in the Conroe and Montgomery County area, north of The Woodlands.",
    summary:
      "Harper's Preserve is a gated master-planned community built around a 160-acre forested preserve. The developer describes about 2,100 single-family homes, two amenity centers, trails, Suchma Elementary inside the community, and a retail area called Harper's Downtown anchored by an H-E-B.",
    priceNote:
      "The developer project page says homes range from the low $300s to over $1.2 million. A third-party builder index has marked the master plan sold out, so treat new-home inventory as limited and ask which builders, if any, still have homes to sell.",
    homes:
      "About 2,100 single-family homes. A 2022 community contact sheet lists 40-foot through 80-foot homesites. The same developer page also mentions two multifamily communities.",
    builders: [
      { name: "Chesmar Homes", detail: "40-foot and 50-foot homesites on the 2022 community sheet" },
      { name: "Meritage Homes", detail: "40-foot, 50-foot, and 60-foot homesites on the 2022 community sheet" },
      { name: "M/I Homes", detail: "40-foot, 50-foot, and 80-foot homesites on the 2022 community sheet" },
      { name: "HistoryMaker Homes", detail: "50-foot homesites on the 2022 community sheet" },
      { name: "Empire Communities", detail: "60-foot homesites on the 2022 community sheet" },
      { name: "Shea Homes", detail: "60-foot homesites on the 2022 community sheet" },
      { name: "Drees Custom Homes", detail: "70-foot and 80-foot homesites on the 2022 community sheet" },
    ],
    amenities: [
      "160-acre forested preservation area",
      "Two amenity centers, which the developer calls the Pool Barn and Club Palmetto",
      "Trail system",
      "Harper's Downtown retail, described as anchored by an H-E-B",
    ],
    schoolDistrict: "Suchma Elementary is in the community. Confirm the full zone.",
    schools:
      "The developer says Harper's Preserve has its own public elementary school, Suchma Elementary. The project page does not publish the junior high and high school. Confirm the full attendance zone for the address.",
    sources: [
      { label: "Harper's Preserve association", url: "https://harperspreserve.com/" },
      { label: "Sam Yager project page", url: "https://syi.net/syi-projects/harpers-preserve/" },
      {
        label: "2022 builder contact sheet",
        url: "https://harperspreserve.com/sites/default/files/pdf/2023_Community_Contact_Information_(REV_12.21.2022).pdf",
      },
    ],
    faqs: [
      {
        question: "Is Harper's Preserve gated?",
        answer:
          "Yes. The property owners association and the developer both describe Harper's Preserve as a gated community surrounding a 160-acre forested preserve in the Conroe area.",
      },
      {
        question: "Who built homes in Harper's Preserve?",
        answer:
          "A community contact sheet revised in December 2022 lists Chesmar Homes, Meritage Homes, M/I Homes, HistoryMaker Homes, Empire Communities, Shea Homes, and Drees Custom Homes across 40-foot to 80-foot homesites. Ask whether any of those builders still have inventory.",
      },
      {
        question: "What school is inside Harper's Preserve?",
        answer:
          "Sam Yager Incorporated says the community has its own public elementary school, Suchma Elementary. Confirm junior high and high school zoning for the specific address.",
      },
    ],
  },
  {
    slug: "evergreen",
    citySlug: "conroe",
    name: "Evergreen",
    developer: "Shea Homes",
    address: "Northwest corner of FM 242 and FM 1314, Conroe, TX",
    location:
      "The Evergreen homepage says the community is a 740-acre Shea Homes community at the northwest corner of FM 242 and FM 1314 in Conroe. From I-45, the connect page says to take FM 242 east and proceed 5 miles. Evergreen is on the left. Shea lists The Arbor amenity village at 16305 Gulf Coast Road, Conroe, TX 77302, and a Trilogy model gallery at 16135 Reunion Rd., Conroe, TX 77302.",
    summary:
      "Evergreen is Shea Homes' 740-acre master-planned community in Conroe, at FM 242 and FM 1314. The community map says about 2,000 homes at completion, on homesites from 40 feet to 70 feet, with Shea Homes, Perry Homes, Highland Homes, and Chesmar Homes. Trilogy Evergreen is the 55+ section Shea calls Converde on the builders page.",
    priceNote:
      "Trilogy Evergreen is priced from $334,950. Shea Homes lists the 40-foot collection from $334,990, the 45-foot from $361,990, the 50-foot from $386,990, the 55-foot from $439,990, the 60-foot from $505,990, and the 70-foot from $605,990. Highland Homes lists the Portofino plan starting at $346,990. Chesmar lists the 40-foot collection from $350,000 and the 60-foot collection from $490,000. Perry Homes lists the 50-foot section from the $440s and the 70-foot section from the $670s. Prices change.",
    homes:
      "740 acres and about 2,000 homes at completion. First-phase homesites are 40, 45, 50, 55, 60, and 70 feet. The community map says more than 100 acres are devoted to parks, green space, and amenities. The builders page says model homes are open daily.",
    builders: [
      {
        name: "Chesmar Homes",
        detail:
          "40-foot collection from $350,000, about 1,683 to 2,630 square feet. 60-foot collection from $490,000, about 2,637 to 3,636 square feet. The 60-foot page says final opportunities. Model address 16339 Sheridan River Trail, Conroe, TX 77302. Chesmar says Conroe ISD.",
      },
      {
        name: "Highland Homes",
        detail:
          "Model at 12990 Soaring Forest Dr, Conroe, TX 77302. The Portofino plan is listed starting at $346,990. The Evergreen page shows a banner that says Up to $50K in Savings and does not print the terms.",
      },
      {
        name: "Perry Homes",
        detail:
          "50-foot section from the $440s, about 2,100 to 3,100 square feet. 70-foot section from the $670s, about 2,800 to 5,300 square feet.",
      },
      {
        name: "Shea Homes",
        detail:
          "40-foot from $334,990, about 1,529 to 2,588 square feet. 45-foot from $361,990, about 1,741 to 2,978 square feet. 50-foot from $386,990, about 1,802 to 3,023 square feet. 55-foot from $439,990, about 2,110 to 3,576 square feet. 60-foot from $505,990, about 2,671 to 4,136 square feet. 70-foot from $605,990, about 3,086 to 4,838 square feet. The Evergreen incentives page said no current incentives were available. Ask Natalie about current incentives.",
      },
      {
        name: "Trilogy Evergreen",
        detail:
          "Shea's 55+ section, also called Converde on the Evergreen builders page. Priced from $334,950, about 1,514 to 2,524 square feet, single story. Model gallery at 16135 Reunion Rd., Conroe, TX 77302. The collection pages print Founders Circle credits of $20,000, $25,000, and $35,000.",
      },
    ],
    amenities: [
      "The Arbor amenity village at 16305 Gulf Coast Road, with a clubhouse, playground, pickleball courts, and event space",
      "Resort-style pool and splash pad",
      "Curiosity Park",
      "The Sandlot whiffleball field",
      "Bark Avenue Dog Park, named on the amenities page",
      "Trails, and more than 100 acres of parks, green space, and amenities",
    ],
    schoolDistrict: "Conroe ISD",
    schools:
      "The Evergreen education page says Mittie J. Campbell Elementary is now open on site. It also lists Grangerland Intermediate, Moorhead Junior High, and Caney Creek High. The page says enrollment and boundaries are subject to change.",
    sources: [
      { label: "Evergreen homepage", url: "https://evergreen-texas.com/" },
      { label: "Evergreen builders", url: "https://evergreen-texas.com/our-builders/" },
      { label: "Evergreen community map", url: "https://evergreen-texas.com/community-map/" },
      { label: "Evergreen amenities", url: "https://evergreen-texas.com/amenities/" },
      { label: "Evergreen schools", url: "https://evergreen-texas.com/education/" },
      { label: "Evergreen directions", url: "https://evergreen-texas.com/connect/" },
      { label: "Evergreen builder incentives", url: "https://evergreen-texas.com/builder-incentives/" },
      { label: "Shea Homes at Evergreen", url: "https://www.sheahomes.com/new-homes/texas/houston-area/conroe/evergreen" },
      { label: "Trilogy Evergreen", url: "https://www.sheahomes.com/new-homes/texas/houston-area/conroe/trilogy-evergreen" },
      { label: "Perry Homes at Evergreen", url: "https://www.perryhomes.com/new-homes/texas/houston/evergreen" },
      { label: "Highland Homes at Evergreen", url: "https://www.highlandhomes.com/houston/conroe/evergreen" },
      { label: "Chesmar Homes Evergreen 40s", url: "https://www.chesmar.com/texas/houston-new-homes/conroe/evergreen-40s/" },
      { label: "Chesmar Homes Evergreen 60s", url: "https://www.chesmar.com/texas/houston-new-homes/conroe/evergreen-60s/" },
      { label: "Chesmar Homes incentives", url: "https://www.chesmar.com/incentives/" },
    ],
    faqs: [
      {
        question: "Where is Evergreen?",
        answer:
          "Evergreen publishes its location as the northwest corner of FM 242 and FM 1314 in Conroe. From I-45, take FM 242 east about 5 miles. The community is on the left.",
      },
      {
        question: "What do new homes in Evergreen cost?",
        answer:
          "Shea Homes lists collections from $334,990, and Trilogy Evergreen from $334,950. Highland, Chesmar, and Perry publish their own starting prices on their Evergreen pages. Confirm the homesite.",
      },
      {
        question: "What schools does Evergreen name?",
        answer:
          "Conroe ISD. The education page says Mittie J. Campbell Elementary is open on site, and it lists Grangerland Intermediate, Moorhead Junior High, and Caney Creek High. Boundaries can change.",
      },
    ],
  },
  {
    slug: "stewarts-ranch",
    citySlug: "conroe",
    name: "Stewart's Ranch",
    developer: "Meritage Homes",
    address: "1514 Hughes Ranch Ct, Conroe, TX 77301",
    location:
      "Meritage Homes says Stewart's Ranch is off SH 336 in Conroe, with access to I-45. The sales office is 1514 Hughes Ranch Ct, Conroe, TX 77301. Sunday hours are 12:00 PM to 6:00 PM. Monday through Saturday hours are 10:00 AM to 6:00 PM.",
    summary:
      "Stewart's Ranch is a Meritage Homes community in Conroe. The builder page says homes are priced from $319,540, and from the low $300s. It describes a future playground and pavilion, and it points buyers to the nearby 201-acre Carl Barton Jr. park.",
    priceNote:
      "Meritage Homes says new homes in Conroe at Stewart's Ranch are priced from $319,540, and from the low $300s. Prices change.",
    homes:
      "Meritage lists floor plans from The Greenville at 1,654 square feet, with 3 bedrooms and 2 bathrooms, through larger plans including The Cedar at 3,176 square feet. The page does not name a separate developer.",
    builders: [
      {
        name: "Meritage Homes",
        detail:
          "Priced from $319,540. Plans on the page include The Greenville at 1,654 square feet and The Cedar at 3,176 square feet. Sales office at 1514 Hughes Ranch Ct, Conroe, TX 77301.",
      },
    ],
    amenities: [
      "Future playground and pavilion, as the Meritage page describes them",
      "The page points to the nearby 201-acre Carl Barton Jr. park",
      "The page map lists Bozman Intermediate School. It does not name a school district.",
    ],
    schoolDistrict: "",
    schools:
      "The Meritage page does not name a school district. Its map lists Bozman Intermediate School. Confirm the address with the district.",
    sources: [
      { label: "Stewart's Ranch, Meritage Homes", url: "https://www.meritagehomes.com/state/tx/houston/stewarts-ranch" },
      {
        label: "Meritage Homes Houston sales-event disclaimer",
        url: "https://www.meritagehomes.com/company/legal/national-sales-event-disclaimers",
      },
    ],
    faqs: [
      {
        question: "Where is Stewart's Ranch?",
        answer:
          "The Meritage sales office is 1514 Hughes Ranch Ct, Conroe, TX 77301. The page says the community is off SH 336, with access to I-45.",
      },
      {
        question: "What do homes at Stewart's Ranch cost?",
        answer:
          "Meritage says the community is priced from $319,540, and from the low $300s. That is the builder's advertised price. Confirm the homesite.",
      },
      {
        question: "Does Meritage name the schools?",
        answer:
          "The Stewart's Ranch page does not name a school district. The map on that page lists Bozman Intermediate School. Confirm the lot with the district before you rely on a campus.",
      },
    ],
  },
  {
    slug: "woodforest",
    citySlug: "montgomery",
    name: "Woodforest",
    developer: "Johnson Development",
    address: "251 Central Pine Street, Montgomery, TX 77316",
    location:
      "Woodforest is in Montgomery, about six miles south of Lake Conroe and about five miles north of The Woodlands, according to Johnson Development.",
    summary:
      "Woodforest is a Johnson Development master-planned community on about 3,000 acres. The developer says it is planned for 5,500 homes, with prices from the low $300,000s, and that it includes the Bonterra 55+ section by Taylor Morrison and frontage on the Woodforest Golf Club.",
    priceNote:
      "Johnson Development says homes are priced from the low $300,000s. The current Woodforest builder page shows Highland Homes townhomes around 1,761 to 2,297 square feet, Highland 60-foot plans around 2,667 to 3,919 square feet, Chesmar villas around 1,700 to 1,900 square feet, and Tipler Luxury Homes from $1.4 million. Prices change.",
    homes:
      "Planned for 5,500 single-family homes, townhomes, patio homes, and custom homes. Bonterra at Woodforest is described as a 700-plus home Taylor Morrison community for ages 55 and better, with a 10,000-square-foot clubhouse. Pine Island is a gated custom section on homesites up to 1.5 acres.",
    builders: [
      { name: "Chesmar Homes", detail: "Villas at Stewart Heights, about 1,700 to 1,900 square feet" },
      { name: "Highland Homes", detail: "Townhomes about 1,761 to 2,297 square feet, and 60-foot plans about 2,667 to 3,919 square feet" },
      { name: "Jeff Paul Custom Homes", detail: "Custom homes near the golf course, listed on the builder page" },
      { name: "Tipler Luxury Homes", detail: "From $1.4 million, listed with Jeff Paul near Woodforest Golf Club" },
      { name: "Taylor Morrison", detail: "Bonterra at Woodforest, the 55+ section named by Johnson Development" },
    ],
    amenities: [
      "Forest Island recreation center with a freeform pool, water slides, tennis, and basketball",
      "Lily Pad Splash Park, a fitness pool, and Stampede Sportsplex",
      "16 parks and more than 15 miles of trails. The community site also describes more than 700 acres of parks",
      "Woodforest Golf Club, a 27-hole course the developer credits to Steve Elkington",
      "Pine Market shopping and dining, Fire Station 34, and on-site preschools",
    ],
    schoolDistrict: "Conroe ISD and Montgomery ISD",
    schools:
      "Woodforest publishes two zones. Conroe ISD: Stewart Elementary on site at 680 Fish Creek Thoroughfare, Peet Junior High, and Conroe High School. Montgomery ISD: Lone Star Elementary, Oak Hills Junior High, and Lake Creek High School. Confirm which side of the line a homesite is on.",
    sources: [
      { label: "Woodforest builders", url: "https://www.woodforesttx.com/home-builders" },
      { label: "Woodforest schools", url: "https://www.woodforesttx.com/schools" },
      { label: "Woodforest amenities overview", url: "https://www.woodforesttx.com/keys-to-happiness" },
      { label: "Johnson Development community page", url: "https://www.johnsondevelopment.com/montgomery-tx/mpc_woodforest" },
    ],
    faqs: [
      {
        question: "Which school district is Woodforest in?",
        answer:
          "Woodforest says it is zoned to both Conroe ISD and Montgomery ISD. The community's school page lists Stewart Elementary, Peet Junior High, and Conroe High School on the Conroe ISD side, and Lone Star Elementary, Oak Hills Junior High, and Lake Creek High School on the Montgomery ISD side.",
      },
      {
        question: "What is there to do in Woodforest?",
        answer:
          "The community describes Forest Island, Lily Pad Splash Park, 16 parks, more than 15 miles of trails, a sportsplex, Pine Market, and the 27-hole Woodforest Golf Club. Bonterra is the 55+ section with its own clubhouse.",
      },
      {
        question: "Who is selling new homes in Woodforest right now?",
        answer:
          "The current builder page lists Chesmar villas, Highland Homes townhomes and 60-foot homes, Jeff Paul Custom Homes, and Tipler Luxury Homes. Johnson Development also names Taylor Morrison at Bonterra. Older sections were built by other builders, so a resale may not match today's model lineup.",
      },
    ],
  },
  {
    slug: "fairwater",
    citySlug: "montgomery",
    name: "Fairwater",
    developer: "Forestar",
    address: "FM 2854 and Fairwater Parkway, Magnolia, TX 77316",
    location:
      "Forestar's community page uses a Magnolia address at FM 2854 and Fairwater Parkway, 77316. Builder listings have used Montgomery, TX 77316 for the same community. It is south of Lake Conroe, off FM 2854 near TX 105.",
    summary:
      "Fairwater is a Forestar master-planned community near Lake Conroe. The developer describes it as an amenity community for families who want nearby schools and outdoor recreation. It is smaller than Woodforest and is a fit when you want Montgomery-area new construction without the largest master plan.",
    priceNote:
      "Forestar's current community page does not publish a community-wide price. Older sales material and builder listings have quoted starting prices. Ask the builder who is still selling, because sections marketed by D.R. Horton and CastleRock Communities have been reported sold out by listing sites.",
    homes: "Forestar describes Fairwater as a master-planned community with room for families to grow. The current page does not publish a home or lot count.",
    builders: [
      { name: "Forestar Communities", detail: "Named on the Forestar community page" },
      {
        name: "D.R. Horton and CastleRock Communities",
        detail: "Both have marketed Montgomery addresses in Fairwater. Confirm whether either section still has new homes.",
      },
    ],
    amenities: ["Splash pad", "Firepit", "Pavilion", "Playground", "Pickleball"],
    schoolDistrict: "Montgomery ISD was named in a 2020 opening notice. Confirm the current zone.",
    schools:
      "A 2020 Fairwater opening notice said the community was zoned to Montgomery ISD, including Lake Creek High School. Forestar's current page says families value nearby schools and does not list campuses. Confirm the address with Montgomery ISD.",
    sources: [
      { label: "Forestar: Fairwater", url: "https://www.forestar.com/community/fairwater/" },
      { label: "2020 opening notice", url: "https://houstoneflyer.com/Archives5/19243-FORESTAR/" },
    ],
    faqs: [
      {
        question: "Is Fairwater in Montgomery or Magnolia?",
        answer:
          "Forestar publishes the address as FM 2854 and Fairwater Parkway, Magnolia, TX 77316. Builder listings have used Montgomery, TX 77316. Use the homesite address, not the marketing city, when you check taxes and schools.",
      },
      {
        question: "What amenities does Fairwater publish?",
        answer: "Forestar lists a splash pad, firepit, pavilion, playground, and pickleball.",
      },
      {
        question: "Can I still buy new construction in Fairwater?",
        answer:
          "Maybe. The developer page is still up, and D.R. Horton and CastleRock have both sold homes here. Listing sites have marked some of those sections sold out. Natalie can check which models are actually open before you drive out.",
      },
    ],
  },
  {
    slug: "two-step-farm",
    citySlug: "montgomery",
    name: "Two Step Farm",
    developer: "Oxland Group",
    address: "11725 Howdy Drive, Montgomery, TX 77316",
    location:
      "Two Step Farm publishes 11725 Howdy Drive, Montgomery, TX 77316. The homepage says it is just north of The Woodlands, off Fish Creek Thoroughfare and FM 1488. A July 20, 2026 Oxland release says it sits north of FM 1488, between I-45 and Highway 249. Several builder pages say the main entrance is not finished and give 3319 Wilderness Way, Montgomery, TX 77316, as a temporary GPS address.",
    summary:
      "Two Step Farm is an Oxland Group master-planned community in Montgomery. The homepage says more than 4,000 homes, with nine builders and prices from the $300s to over $1 million. A July 20, 2026 Oxland release calls the community 1,800 acres and says phase 2 homesites start going to builders in December 2026.",
    priceNote:
      "David Weekley Homes lists the Ashby plan from $287,990. The same page says pricing runs from the $300s to the high $400s. Autograph Homes lists the Brazos plan from $330,990. Other builder pages on the Two Step Farm site list Coventry from the mid $300s, DSLD from the mid $300s, Pulte from the $300s, Highland from the mid $400s, Perry from the $440s and the $570s, Drees from the $600s, and Partners in Building from the $900s. Prices change.",
    homes:
      "The homepage says more than 4,000 homes, with floor plans from around 1,400 to 6,000 square feet, and names Autograph Homes, Coventry Homes, David Weekley Homes, Drees Custom Homes, DSLD Homes, Highland Homes, Partners in Building, Perry Homes, and Pulte Homes. The July 20, 2026 release says phase 2 is 156 acres, with homes anticipated from the mid-$300,000s to more than $1 million, and adds McKinley Homes, Trilogy by Shea Homes, and William David Homes. It says homesites go to builders beginning in December 2026.",
    builders: [
      {
        name: "Autograph Homes",
        detail:
          "Trio and Symphony collections, about 1,700 to 2,600 square feet, starting in the low $300s. The Brazos plan is listed from $330,990. Models at 8117, 8113, and 8109 Yall Street. Ask Natalie about current incentives.",
      },
      {
        name: "Coventry Homes",
        detail:
          "About 1,400 to 3,200 square feet, prices starting in the mid $300s. The Wildorado plan is listed from $354,990. Ask Natalie about current incentives.",
      },
      {
        name: "David Weekley Homes",
        detail:
          "Floor plans about 1,374 to 3,370 square feet. The page says pricing from the $300s to the high $400s, and lists the Ashby plan from $287,990. Patio homes are described as coming in 2027. Models at 8133, 8129, and 8138 Yall Street. Ask Natalie about current incentives.",
      },
      {
        name: "Drees Custom Homes",
        detail:
          "The Two Step Farm page says homes start in the $600s. The Brenner plan is listed from $588,900. Detached townhomes are described as coming in 2027. Ask Natalie about current incentives.",
      },
      {
        name: "DSLD Homes",
        detail:
          "About 1,500 to 3,600 square feet, prices starting in the mid $300s. The Ironstone II plan is listed from $348,990. Ask Natalie about current incentives.",
      },
      {
        name: "Highland Homes",
        detail:
          "Artisan and Classic collections, about 2,100 to 4,000 square feet, starting in the mid $400s. The Dorchester plan is listed from $449,000. Models at 8215 and 8219 Folks Street. Ask Natalie about current incentives.",
      },
      {
        name: "Partners in Building",
        detail:
          "Custom homes about 3,800 to over 6,000 square feet, pricing from the $900s. Ask Natalie about current incentives.",
      },
      {
        name: "Perry Homes",
        detail:
          "On the Perry site, the 50-foot section is from the $440s, about 2,100 to 3,600 square feet, and the 60-foot section is from the $570s, about 2,700 to 4,100 square feet. Models at 8211 and 8207 Folks Street.",
      },
      {
        name: "Pulte Homes",
        detail:
          "About 1,600 to 3,300 square feet, starting in the $300s. The Kerrville plan is listed from $341,990. Models at 8110, 8106, and 8102 Yall Street. Ask Natalie about current incentives.",
      },
    ],
    amenities: [
      "Two Step Hall, the dance hall named on the homepage",
      "The Grazery",
      "Beer garden",
      "Goat barn",
      "Farm Shop, shown in a photo on the community site",
      "Green spaces and trails in preserved forest",
    ],
    schoolDistrict: "Montgomery ISD",
    schools:
      "The Two Step Farm homepage says the community has Montgomery ISD schools and does not name the campuses. A Perry Homes plan page for Two Step Farm lists Keenan Elementary, Oak Hills Junior High, and Lake Creek High School. Confirm the lot with Montgomery ISD.",
    sources: [
      { label: "Two Step Farm homepage", url: "https://twostepfarm.com/" },
      { label: "Autograph Homes at Two Step Farm", url: "https://twostepfarm.com/autograph-homes" },
      { label: "Coventry Homes at Two Step Farm", url: "https://twostepfarm.com/coventry-homes" },
      { label: "David Weekley Homes at Two Step Farm", url: "https://twostepfarm.com/david-weekley-homes" },
      { label: "Drees Custom Homes at Two Step Farm", url: "https://twostepfarm.com/drees-custom-homes" },
      { label: "DSLD Homes at Two Step Farm", url: "https://twostepfarm.com/dsld-homes" },
      { label: "Highland Homes at Two Step Farm", url: "https://twostepfarm.com/highland-homes" },
      { label: "Partners in Building at Two Step Farm", url: "https://twostepfarm.com/partners-in-building" },
      { label: "Pulte Homes at Two Step Farm", url: "https://twostepfarm.com/pulte-homes" },
      { label: "Perry Homes at Two Step Farm", url: "https://www.perryhomes.com/new-homes/texas/houston/two-step-farm" },
      {
        label: "Perry Homes schools note",
        url: "https://www.perryhomes.com/new-homes/texas/houston/two-step-farm/two-step-farm-60/2769w",
      },
      {
        label: "Oxland phase 2 release, July 20, 2026",
        url: "https://cms.twostepfarm.com/wp-content/uploads/2026/07/Oxland-Phase-2-Builders-Press-Release_072026.pdf",
      },
    ],
    faqs: [
      {
        question: "Where is Two Step Farm?",
        answer:
          "The published address is 11725 Howdy Drive, Montgomery, TX 77316, north of FM 1488 and just north of The Woodlands. Some builder pages say the main entrance is not finished and list 3319 Wilderness Way as a temporary GPS point.",
      },
      {
        question: "What do new homes at Two Step Farm cost?",
        answer:
          "The homepage says prices run from the $300s to over $1 million. Builder pages list plan prices from David Weekley's Ashby at $287,990 through Partners in Building from the $900s. Confirm the homesite.",
      },
      {
        question: "What schools does Two Step Farm name?",
        answer:
          "The homepage says Montgomery ISD and does not list campuses. A Perry Homes plan page lists Keenan Elementary, Oak Hills Junior High, and Lake Creek High School. Confirm the lot with the district.",
      },
    ],
  },
  {
    slug: "the-woodlands-hills",
    citySlug: "willis",
    alsoListedOn: ["conroe"],
    name: "The Woodlands Hills",
    developer: "Howard Hughes",
    address: "Model park on Adoration Woods Court, Willis, TX 77318",
    location:
      "The community is about 2,000 acres on FM 830, west of I-45, with land running north toward FM 1097 and south toward League Line Road. Neighborhoods north of FM 830 use Willis addresses. Neighborhoods south of FM 830 use Conroe addresses. It is about 13 miles north of The Woodlands.",
    summary:
      "The Woodlands Hills is a Howard Hughes community in Willis and Conroe, and a sister community to The Woodlands and Bridgeland. The community site lists nine builders and a 17-acre Founders Park. This page lives under Willis because the model park and the published school zone are Willis addresses. Conroe sections are the neighborhoods south of FM 830.",
    priceNote:
      "The builder directory does not publish one community-wide starting price. It does publish size ranges for some collections, including Chesmar's Chateau Collection at about 1,628 to 1,901 square feet, J. Patrick Homes at about 2,802 to 4,600 square feet, and Ravenna Homes at about 2,688 to 3,799 square feet.",
    homes:
      "About 2,000 acres. Nine builders are named on the community news page: Century Communities, Chesmar Homes, David Weekley Homes, DRB Homes, Highland Homes, J. Patrick Homes, Perry Homes, Ravenna Homes, and Westin Homes.",
    builders: [
      { name: "Century Communities", detail: "Model at 119 Adoration Court, Willis, TX 77318" },
      { name: "Chesmar Homes", detail: "Chateau Collection about 1,628 to 1,901 square feet, plus a model on Adoration Woods Court" },
      { name: "David Weekley Homes", detail: "Models on Adoration and Painters Ridge Court in Willis" },
      { name: "DRB Homes", detail: "Model at 206 Painters Ridge Court, Willis" },
      { name: "Highland Homes", detail: "Model at 102 Adoration Woods Court, Willis" },
      { name: "J. Patrick Homes", detail: "About 2,802 to 4,600 square feet" },
      { name: "Perry Homes", detail: "Models on Painters Ridge Court and Adoration Woods Court" },
      { name: "Ravenna Homes", detail: "About 2,688 to 3,799 square feet. One model uses a Conroe 77318 address" },
      { name: "Westin Homes", detail: "55-foot and 65-foot models on Adoration Woods Court" },
    ],
    amenities: [
      "Founders Park, a 17-acre park with an activity center, fitness center, and events lawn",
      "Leisure and fitness pools, a lazy river, a playground, a dog park, and tennis courts",
      "Forested trails with bike lanes on major connectors",
      "A plan for 20 neighborhood parks",
    ],
    schoolDistrict: "Willis ISD",
    schools:
      "The February 2026 community resource guide lists Willis ISD for the initial phase: William Lloyd Meador Elementary (Pre-K through 5), Robert P. Brabham Middle School (grades 6 through 8), and Willis High School (grades 9 through 12). The community says Meador and Brabham are adjacent, with a connector path. Confirm the address, especially if the homesite is south of FM 830.",
    sources: [
      { label: "Home builders", url: "https://thewoodlandshills.com/homes/home-builders/" },
      { label: "Community amenities and schools", url: "https://thewoodlandshills.com/community/" },
      {
        label: "February 2026 resource guide",
        url: "https://thewoodlandshills.com/wp-content/uploads/2026/03/TWH-Resource-Guide_V1_020326.pdf",
      },
      {
        label: "Community information sheet",
        url: "https://www.ravennahomes.com/wp-content/uploads/2026/02/TWH-CommInfo-1.1.25.pdf",
      },
    ],
    faqs: [
      {
        question: "Is The Woodlands Hills in Willis or Conroe?",
        answer:
          "Both. Howard Hughes says the community is in Conroe and Willis. The resource guide says neighborhoods north of FM 830 are Willis and neighborhoods south of FM 830 are Conroe. The model park addresses on the builder page are mostly Willis, TX 77318.",
      },
      {
        question: "What schools does The Woodlands Hills name?",
        answer:
          "The community resource guide names Willis ISD campuses: Meador Elementary, Brabham Middle School, and Willis High School. Meador and Brabham sit next to the community. Confirm the homesite, because a Conroe mailing address does not by itself change the published Willis ISD zone.",
      },
      {
        question: "What is Founders Park?",
        answer:
          "The community describes Founders Park as a 17-acre amenity with an activity center, fitness center, events lawn, leisure and fitness pools, a lazy river, a playground, a dog park, and tennis courts.",
      },
    ],
  },
  {
    slug: "harmony",
    citySlug: "spring",
    name: "Harmony",
    developer: "Land Tejas, co-managed with Johnson Development",
    address: "Rayford Road and Riley Fuzzel Road, Spring, TX",
    location:
      "Land Tejas places Harmony about five miles east of I-45, near the Spring Creek Greenway and the ExxonMobil campus, with access toward historic Spring, The Woodlands, and Lake Conroe. Johnson Development's 2012 announcement located it at Rayford Road and Riley Fuzzel Road.",
    summary:
      "Harmony is a 1,000-acre master-planned community in Spring. Land Tejas now lists it as a historical community, co-managed by Johnson Development. New-home inventory may be limited. The page is here because buyers still compare Harmony with newer communities on the Grand Parkway.",
    priceNote:
      "Do not use the 2012 announcement prices, which were from the $150s to the $400s. Land Tejas does not publish a current starting price on the historical community page. Ask for today's resale or remaining-spec prices.",
    homes:
      "1,000 acres near the Spring Creek Greenway. Johnson Development said in 2012 that the community would hold about 2,600 homes when complete. That announcement is old. It is useful for size, not for today's lot map.",
    builders: [
      {
        name: "Earlier announced builders",
        detail:
          "The 2012 Johnson Development announcement named Ashton Woods, Darling Homes, Highland Homes, Perry Homes, Village Builders, and Westin Homes. Later resale listings name additional builders. Confirm who, if anyone, still has a model open.",
      },
    ],
    amenities: [
      "The Thicket recreation complex, with a beach-entry pool, lap lanes, a splash pad, a playground, an event lawn, an exercise room, and a clubhouse",
      "Access to the Spring Creek Greenway, which Land Tejas describes as a large forested preserve",
    ],
    schoolDistrict: "Conroe ISD",
    schools:
      "Land Tejas says children attend Conroe ISD. The 2012 announcement named Broadway Elementary, Cox Intermediate, York Junior High, and Oak Ridge High School. Zones in this part of Spring have changed since then, including the opening of Grand Oaks High School. Confirm the current campus for the address with Conroe ISD.",
    sources: [
      { label: "Land Tejas: Harmony", url: "https://landtejas.com/historical/harmony/" },
      {
        label: "2012 Johnson Development announcement",
        url: "https://www.johnsondevelopment.com/news/1081/johnson-development-named-developer-of-harmony-newly-named-north-houston-community",
      },
    ],
    faqs: [
      {
        question: "Is Harmony still a new-construction community?",
        answer:
          "Land Tejas lists Harmony as a historical community. Some homes may still be available from a builder or as resale. Natalie can check current inventory before you plan a tour.",
      },
      {
        question: "What school district is Harmony in?",
        answer:
          "Land Tejas says Harmony is served by Conroe ISD. Campus names from the 2012 launch are not a safe zone list for 2026. Confirm the address on the Conroe ISD map.",
      },
      {
        question: "Where is The Thicket?",
        answer:
          "The Thicket is Harmony's recreation complex. Land Tejas describes a beach-entry pool, lap lanes, a splash pad, a playground, an event lawn, an exercise room, and a clubhouse.",
      },
    ],
  },
  {
    slug: "woodsons-reserve",
    citySlug: "spring",
    name: "Woodson's Reserve",
    developer: "Published by the community and by Toll Brothers and Tri Pointe Homes",
    address: "4679 Bridgewood Drive, Spring, TX 77386",
    location:
      "Woodson's Reserve is on the Grand Parkway in Spring, in southern Montgomery County. Toll Brothers says it is minutes from the ExxonMobil campus and The Woodlands, with access toward I-45, the Hardy Toll Road, and US 59.",
    summary:
      "Woodson's Reserve is a 692-acre community in Spring with two builders still publishing new homes: Toll Brothers and Tri Pointe Homes. The community site says Grand Oaks High School and Clark Intermediate School are on site.",
    priceNote:
      "The community builder page says Toll Brothers homes start in the mid $400s and Tri Pointe Homes start in the low $400s. Tri Pointe's own page says plans run about 2,128 to 5,316 square feet, with 3 to 5 bedrooms. Prices change.",
    homes:
      "692 acres, with Toll Brothers describing 4.7 acres of amenities and more than 115 acres of preserved nature. Tri Pointe says it sells 45-foot, 50-foot, 60-foot, 70-foot, and 80-foot home collections.",
    builders: [
      { name: "Toll Brothers", detail: "New homes starting in the mid $400s, as listed on the community builder page" },
      {
        name: "Tri Pointe Homes",
        detail: "From the low $400s. About 2,128 to 5,316 square feet, 3 to 5 bedrooms, 2 to 5 baths",
      },
    ],
    amenities: [
      "Woodson's Club, a 9,000-square-foot amenity center with a 24-hour fitness center and a children's room",
      "Resort-style pool and lazy river, plus a lap pool",
      "Children's play garden, event lawns, and catch-and-release lakes",
      "Trails and, on the Toll Brothers page, a one-acre dog park",
    ],
    schoolDistrict: "Conroe ISD",
    schools:
      "The community says two schools are on site: Grand Oaks High School and Clark Intermediate School, and that the district is Conroe ISD. Toll Brothers also lists Hines Elementary nearby. Nearby is not the same as zoned. Confirm the elementary campus for the homesite.",
    sources: [
      { label: "Woodson's Reserve builders", url: "https://woodsonsreserve.com/builders/" },
      { label: "Woodson's Reserve community", url: "https://woodsonsreserve.com/community/" },
      { label: "Woodson's Reserve amenities", url: "https://woodsonsreserve.com/amenities/" },
      { label: "Tri Pointe Homes", url: "https://www.tripointehomes.com/tx/houston/woodsons-reserve" },
      { label: "Toll Brothers", url: "https://www.tollbrothers.com/luxury-homes-for-sale/Texas/Woodson's-Reserve" },
    ],
    faqs: [
      {
        question: "Who is building in Woodson's Reserve?",
        answer:
          "The community builder page lists Toll Brothers, from the mid $400s, and Tri Pointe Homes, from the low $400s. Tri Pointe publishes plans of about 2,128 to 5,316 square feet on 45-foot to 80-foot collections.",
      },
      {
        question: "Which schools are inside Woodson's Reserve?",
        answer:
          "The community site names Grand Oaks High School and Clark Intermediate School as the two on-site schools and places the community in Conroe ISD. Confirm the elementary zone for the address.",
      },
      {
        question: "How big is Woodson's Reserve?",
        answer:
          "Toll Brothers describes a 692-acre community in Spring with more than 115 acres of preserved nature and 4.7 acres of amenities, including the 9,000-square-foot Woodson's Club.",
      },
    ],
  },
  {
    slug: "the-pines-at-seven-coves",
    citySlug: "willis",
    name: "The Pines at Seven Coves",
    developer: "Centex Homes",
    address: "10519 Killdeer Court, Willis, TX 77378",
    location:
      "Centex publishes the sales address as 10519 Killdeer Court, Willis, TX 77378. The page says the community is off FM 830 and TX Highway 75, next to Willis High School, less than one mile from I-45, and six miles from Lake Conroe. Centex also describes it as north Conroe. The monument reads The Pines at Seven Coves.",
    summary:
      "The Pines at Seven Coves is a Centex community in Willis. The page lists carriage homes and single-family homes from $193,990, about 1,204 to 2,531 square feet. Schools on the page are Willis ISD. This is the Centex community by that name, not a section inside another master plan.",
    priceNote:
      "Centex lists The Pines at Seven Coves from $193,990, about 1,204 to 2,531 square feet. Inventory cards on the page are labeled Villages. One example checked November 8, 2026 is 10646 Willet Way, the Springfield plan, at $245,489, with $254,489 shown with a line through it. Prices change.",
    homes:
      "Carriage homes and single-family homes. Villages is the series name on the inventory cards, not a separate neighborhood. Sales hours are Monday, Tuesday, Thursday, Friday, and Saturday 10 am to 6 pm, and Wednesday and Sunday 12 pm to 6 pm. Phone (936) 755-5262.",
    builders: [
      {
        name: "Centex Homes",
        detail:
          "From $193,990, about 1,204 to 2,531 square feet. Sales address 10519 Killdeer Court, Willis, TX 77378. The page lists carriage homes and single-family homes.",
      },
    ],
    amenities: [
      "Walking trails",
      "Less than one mile from I-45",
      "Less than 15 miles from The Woodlands",
      "Six miles from Lake Conroe",
    ],
    schoolDistrict: "Willis ISD",
    schools:
      "Centex lists Turner Elementary School at 10575 HWY 75 N, Robert P. Brabham Middle School at 10000 FM 830, and Willis High School. The page prints a phone for Willis High School, (936) 856-1250, and does not print the high school street address. Confirm the lot with the district.",
    sources: [
      {
        label: "Centex, The Pines at Seven Coves",
        url: "https://www.centex.com/homes/texas/houston/willis/the-pines-at-seven-coves-210502",
      },
    ],
    faqs: [
      {
        question: "Where is The Pines at Seven Coves?",
        answer:
          "Centex lists 10519 Killdeer Court, Willis, TX 77378, off FM 830 and TX Highway 75, next to Willis High School. The page says it is six miles from Lake Conroe.",
      },
      {
        question: "What do homes cost?",
        answer:
          "The Centex page starts at $193,990, with homes about 1,204 to 2,531 square feet. Confirm the plan.",
      },
      {
        question: "What schools does Centex name?",
        answer:
          "Willis ISD: Turner Elementary, Robert P. Brabham Middle School, and Willis High School.",
      },
    ],
  },
  {
    slug: "bridgeland",
    citySlug: "cypress",
    name: "Bridgeland",
    developer: "Howard Hughes Communities",
    address: "Model homes use Cypress, TX 77433 addresses",
    location:
      "Bridgeland is in Cypress, in northwest Houston. Howard Hughes describes it as one of the largest communities in that corridor. Model homes on the builder page use Cypress addresses along streets such as Skylark Forest Drive, Medina River Drive, and Linnaeus Lane.",
    summary:
      "Bridgeland is an 11,500-acre Howard Hughes community in Cypress. The homepage cites 250 miles of trails, more than 75 parks, about 90,000 square feet of retail and restaurants, and 70,000 residents at buildout. The villages page names five villages: Lakeland, Parkland, Prairieland, Creekland, and Bridgeland Central.",
    priceNote:
      "Bridgeland does not publish one price for every village. Century Communities lists Creekland Village homes from $329,990. Other builders on the model list publish their own prices. Expect a wide range, including a Del Webb active-adult section.",
    homes:
      "11,500 acres planned through several villages. The model-home directory lists David Weekley, DRB, Highland, Perry, Beazer, Century Communities, Chesmar, Coventry, Lennar, Ravenna, Westin, Del Webb, Newmark, Village Builders, Tri Pointe, Partners in Building, and Fedrick Harris Estate Homes.",
    builders: [
      { name: "David Weekley Homes", detail: "Several models, including 40-foot and 60-foot labels on the directory" },
      { name: "DRB Homes", detail: "Models on Skylark Forest Drive" },
      { name: "Highland Homes", detail: "Models in more than one village" },
      { name: "Perry Homes", detail: "Models including 45-foot and 55-foot labels" },
      { name: "Beazer Homes", detail: "Includes a duet collection on Zebra Swallowtail Drive" },
      { name: "Century Communities", detail: "Creekland Village. The builder page shows homes from $329,990" },
      { name: "Chesmar Homes", detail: "Includes a courtyard collection" },
      { name: "Coventry Homes", detail: "Listed on the model directory" },
      { name: "Lennar", detail: "Listed on the model directory" },
      { name: "Ravenna Homes", detail: "Listed on the model directory" },
      { name: "Westin Homes", detail: "Listed on the model directory" },
      { name: "Newmark Homes", detail: "45-foot, 50-foot, and 70-foot labels" },
      { name: "Village Builders", detail: "50-foot and 65-foot labels" },
      { name: "Tri Pointe Homes", detail: "70-foot and 80-foot labels" },
      { name: "Del Webb", detail: "Del Webb Bridgeland on Denton Creek Drive" },
      { name: "Partners in Building", detail: "Model on Openwood Lands Lane" },
      { name: "Fedrick Harris Estate Homes", detail: "Model on Openwood Lands Lane" },
    ],
    amenities: [
      "More than 75 parks and 250 miles of trails, as published on the Bridgeland homepage",
      "About 90,000 square feet of retail and restaurants",
      "Village amenity programs that differ by neighborhood. Ask which park and pool a homesite can use",
    ],
    schoolDistrict: "More than one district. Confirm the village.",
    schools:
      "Bridgeland's homepage says the community is home to top-ranked schools and does not assign one district to every village. Creekland Village has been marketed with Waller ISD in builder materials, while other villages are commonly checked against Cypress-Fairbanks ISD. Confirm the homesite with the district before you compare schools.",
    sources: [
      { label: "Bridgeland homepage", url: "https://www.bridgeland.com/" },
      { label: "Bridgeland villages", url: "https://www.bridgeland.com/homes/villages/" },
      { label: "Builders and model homes", url: "https://www.bridgeland.com/homes/builders-model-homes/" },
      {
        label: "2025 HOA rates",
        url: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
      },
      {
        label: "2024 tax rates by area",
        url: "https://www.bridgeland.com/wp-content/uploads/2025/04/Tax-Rates-for-2024.xlsx",
      },
      {
        label: "Bridgeland inventory list",
        url: "https://dts.bridgeland.com/DTS/lots/fb_inventory.asp",
      },
      {
        label: "Century Communities, Creekland Village",
        url: "https://www.centurycommunities.com/find-your-new-home/texas/houston-metro/cypress/bridgeland/",
      },
    ],
    faqs: [
      {
        question: "How big is Bridgeland?",
        answer:
          "Howard Hughes says Bridgeland is 11,500 acres, with 250 miles of trails, more than 75 parks, and 70,000 residents at buildout. It is one of the largest new-home communities in northwest Houston.",
      },
      {
        question: "Which builders have models in Bridgeland?",
        answer:
          "The model directory includes David Weekley, DRB, Highland, Perry, Beazer, Century Communities, Chesmar, Coventry, Lennar, Ravenna, Westin, Del Webb, Newmark, Village Builders, Tri Pointe, Partners in Building, and Fedrick Harris Estate Homes. The right builder depends on the village and the homesite width.",
      },
      {
        question: "Are all Bridgeland homes in the same school district?",
        answer:
          "No. The community covers more than one attendance zone. Confirm the district and campus for the lot. Do not assume a Cypress mailing address means Cypress-Fairbanks ISD.",
      },
    ],
    directory: {
      intro:
        "Howard Hughes says the Bridgeland master plan features five villages. This directory separates those villages, the neighborhoods Bridgeland's own pages describe, and the extra-fee areas printed on the 2025 HOA rate sheet. Parks on the village pages are left off.",
      limitation:
        "Checked November 8, 2026 against the villages page, the five village pages, the news posts linked below, the 2025 HOA rate PDF, and the 2024 tax sheet. This is not a complete plat list. The HOA sheet names areas that pay an extra 2025 assessment. Sections that pay only the village fee do not appear on it. Parkland's page says its neighborhoods are named after Texas State Parks and does not publish that full list. Lockhart, San Angelo, Colorado Bend, Falcon, and Sheldon Lake are the park-style names that do appear on the HOA sheet. Prairieland and Creekland village pages name parks and do not name smaller neighborhoods. The 2025 HOA sheet has no Bridgeland Central column, so Southbridge, Easthaven, Emerald Heights, Starling, and Del Webb are not on it. The 2024 tax sheet groups Lakeland Village, Parkland Village Section 1-8, Parkland Village Section 9+, Prairieland Village Section 1-4, Prairieland Village Section 5+, Creekland Village, Bridgeland Central, and Harmony Grove. Those section ranges are tax groups. The Easthaven announcement describes Village Green as shops, restaurants, workplaces, and entertainment. City Series by Highland Homes is a townhome product. Builder lot-width labels are not neighborhoods.",
      places: [
        {
          name: "Lakeland Village",
          group: "Villages",
          kind: "Village",
          status: "Opened in 2006. Bridgeland's first village.",
          detail: "The village page says it has grown to more than 3,000 families.",
          sourceLabel: "Lakeland Village",
          sourceUrl: "https://www.bridgeland.com/village/lakeland-village/",
        },
        {
          name: "Lakeland Heights",
          group: "Neighborhoods",
          kind: "Neighborhood",
          parent: "Lakeland Village",
          status: "Existing. The village page calls it Bridgeland's first traditional neighborhood design. The 2025 HOA sheet lists a $50 Lakeland Heights assessment.",
          detail: "A separate HOA line, TH @ Lakeland Heights, is $2,142. That line is listed with the HOA areas below.",
          sourceLabel: "Lakeland Village",
          sourceUrl: "https://www.bridgeland.com/village/lakeland-village/",
        },
        {
          name: "Harmony Grove",
          group: "Neighborhoods",
          kind: "Neighborhood",
          parent: "Lakeland Village",
          status: "Announced February 10, 2020 as the final neighborhood in Lakeland Village. The 2025 HOA sheet lists a $2,544 Harmony Grove assessment. The 2024 tax sheet also lists Harmony Grove as its own tax area.",
          detail: "The post says Beazer Homes townhomes, 68 homesites, about 1,563 to 2,063 square feet, from the $220s in that announcement, with front-yard maintenance. The post's event dates say 2019 while the publish date is February 10, 2020.",
          sourceLabel: "Harmony Grove announcement",
          sourceUrl: "https://www.bridgeland.com/news/find-peace-at-harmony-grove/",
        },
        {
          name: "Parkland Village",
          group: "Villages",
          kind: "Village",
          status: "One of the five villages on the master-plan page.",
          detail: "The page says its neighborhoods are named after Texas State Parks. It does not list those neighborhood names. The highlights on that page are parks.",
          sourceLabel: "Parkland Village",
          sourceUrl: "https://www.bridgeland.com/village/parkland-village/",
        },
        {
          name: "Parkland Square",
          group: "Neighborhoods",
          kind: "Neighborhood",
          parent: "Parkland Village",
          status: "The October 6, 2021 article says it sold out earlier that year. The 2025 HOA sheet still lists a $110 Parkland Square assessment.",
          detail: "The article calls it the traditional neighborhood design that Parkland Row follows.",
          sourceLabel: "Parkland Row article",
          sourceUrl: "https://www.bridgeland.com/parkland-row-a-new-tnd-coming-to-parkland-village/",
        },
        {
          name: "Parkland Row",
          group: "Neighborhoods",
          kind: "Neighborhood",
          parent: "Parkland Village",
          status: "Announced October 6, 2021. Models were anticipated in winter 2022. The 2025 HOA sheet lists a $110 Parkland Row assessment. The article does not give a later sales update.",
          detail: "Near Fry Road and Tuckerton Road. 288 homesites. The article's first sentence names David Weekley Homes. A later sentence prints David Weekly. About 1,400 to 3,400 square feet.",
          sourceLabel: "Parkland Row article",
          sourceUrl: "https://www.bridgeland.com/parkland-row-a-new-tnd-coming-to-parkland-village/",
        },
        {
          name: "Prairieland Village",
          group: "Villages",
          kind: "Village",
          status: "One of the five villages on the master-plan page.",
          detail: "The village page says it includes about 7,000 homesites. It names parks and an activity center, not smaller neighborhoods.",
          sourceLabel: "Prairieland Village",
          sourceUrl: "https://www.bridgeland.com/village/prairieland-village/",
        },
        {
          name: "Creekland Village",
          group: "Villages",
          kind: "Village",
          status: "Selling. The January 10, 2023 post called it the fourth and final residential village and said the first homesites were available.",
          detail: "The post says nearly 2,300 acres and about 3,000 single-family homes, with lots from 28 to 50 feet, and homes from the $290s at that announcement. The village page names parks and does not name smaller neighborhoods.",
          sourceLabel: "Creekland Village",
          sourceUrl: "https://www.bridgeland.com/village/creekland-village/",
        },
        {
          name: "Bridgeland Central",
          group: "Villages",
          kind: "Village",
          status: "Described as a 925-acre emerging urban district.",
          detail: "The page says it will include office, retail, dining, medical, entertainment, single-family homes, and multifamily homes.",
          sourceLabel: "Bridgeland Central",
          sourceUrl: "https://www.bridgeland.com/village/bridgeland-central/",
        },
        {
          name: "Southbridge",
          group: "Neighborhoods",
          kind: "Neighborhood",
          parent: "Bridgeland Central",
          status: "The Bridgeland Central page says new homes here are now selling.",
          detail: "Named in the same sentence as Easthaven. The page does not add a separate description.",
          sourceLabel: "Bridgeland Central",
          sourceUrl: "https://www.bridgeland.com/village/bridgeland-central/",
        },
        {
          name: "Easthaven",
          group: "Neighborhoods",
          kind: "Neighborhood",
          parent: "Bridgeland Central",
          status: "The Bridgeland Central page says new homes here are now selling.",
          detail: "Also called the Easthaven Collection on that page. DRB Homes and David Weekley Homes. Floor plans about 2,500 to 3,150 square feet, with 2 to 4 bedrooms.",
          sourceLabel: "Bridgeland Central",
          sourceUrl: "https://www.bridgeland.com/village/bridgeland-central/",
        },
        {
          name: "Emerald Heights",
          group: "Neighborhoods",
          kind: "Neighborhood",
          parent: "Bridgeland Central",
          status: "Newest traditional neighborhood design in Bridgeland Central. The January 21, 2026 post says presales are underway and models will begin construction soon.",
          detail: "350 homesites, 35-foot, 42-foot, and 50-foot. David Weekley Homes and Perry Homes. Off North Bridgeland Lake Parkway and Emerald Enclave Drive. The Bridgeland Central page says presales will begin soon and model homes will be complete this spring. The Bridgeland inventory list dated November 7, 2026 includes Emerald Heights rows on Emerald Enclave Drive, and some of those rows say Available Now.",
          sourceLabel: "Emerald Heights news post",
          sourceUrl: "https://www.bridgeland.com/news/emerald-heights-the-latest-neighborhood-coming-to-bridgeland-central/",
        },
        {
          name: "Starling at Bridgeland",
          group: "Neighborhoods",
          kind: "Multifamily",
          parent: "Bridgeland Central",
          status: "Named on the Bridgeland Central page as multifamily.",
          detail: "Apartments, not single-family homes for sale. The page describes a clubhouse, fitness center, and a resort-style pool.",
          sourceLabel: "Bridgeland Central",
          sourceUrl: "https://www.bridgeland.com/village/bridgeland-central/",
        },
        {
          name: "Del Webb Bridgeland",
          group: "Neighborhoods",
          kind: "Active-adult community",
          status: "Announced February 5, 2026. Model homes are slated to be complete this fall. The announcement does not name a parent village.",
          detail: "Gated 55+ community. 190 acres. 672 homes on 50-foot and 65-foot homesites, with a Del Webb amenity center. The 2025 HOA sheet does not list it.",
          sourceLabel: "Del Webb Bridgeland announcement",
          sourceUrl: "https://www.bridgeland.com/news/del-webb-announces-first-active-adult-community-in-bridgeland/",
        },
        {
          name: "Allen Shores",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Lakeland Village",
          status: "Extra 2025 assessment of $500. The village page does not describe it.",
          detail: "Printed under Lakeland Village CAI on the 2025 HOA rate sheet.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "Hidden Creek Estates",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Lakeland Village",
          status: "Extra 2025 assessment of $935. The village page does not describe it.",
          detail: "Printed under Lakeland Village CAI on the 2025 HOA rate sheet.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "Hidden Creek Reserve",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Lakeland Village",
          status: "Extra 2025 assessment of $935. The village page does not describe it.",
          detail: "Printed under Lakeland Village CAI on the 2025 HOA rate sheet.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "Reserve at First Bend",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Lakeland Village",
          status: "Extra 2025 assessment of $1,900. The village page does not describe it.",
          detail: "Printed under Lakeland Village CAI on the 2025 HOA rate sheet.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "TH @ Lakeland Heights",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Lakeland Village",
          status: "Extra 2025 assessment of $2,142. Separate from the $50 Lakeland Heights line.",
          detail: "Printed under Lakeland Village CAI. The sheet does not spell out the TH abbreviation.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "BL Central (Sec 1)",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Parkland Village",
          status: "Extra 2025 assessment of $1,100. Printed in the Parkland Village column.",
          detail: "The sheet prints BL Central (Sec 1) under Parkland Village CAI. It is a different label from the Bridgeland Central village.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "Lockhart",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Parkland Village",
          status: "Extra 2025 assessment of $1,200. The village page does not list this name.",
          detail: "Printed under Parkland Village CAI. Lockhart is also the name of a Texas state park. The sheet does not say this is one of the park-named neighborhoods.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "San Angelo (Sec 42)",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Parkland Village",
          status: "Extra 2025 assessment of $1,250.",
          detail: "Printed under Parkland Village CAI with section 42.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "Colorado Bend Quads (Sec 55/60)",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Parkland Village",
          status: "Extra 2025 assessment of $75.",
          detail: "Printed under Parkland Village CAI with sections 55 and 60.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "Falcon (Sec 57)",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Parkland Village",
          status: "Extra 2025 assessment of $1,250.",
          detail: "Printed under Parkland Village CAI with section 57.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "Sheldon Lake",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Parkland Village",
          status: "Extra 2025 assessment of $800. The village page does not list this name.",
          detail: "Printed under Parkland Village CAI.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "Desert Marble (Sec 24)",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Prairieland Village",
          status: "Extra 2025 assessment of $800.",
          detail: "Printed under Prairieland Village CAI with section 24. The village page does not describe it.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "Olympia Marble (Sec 28)",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Prairieland Village",
          status: "Extra 2025 assessment of $800.",
          detail: "Printed under Prairieland Village CAI with section 28.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "Zebra Swallowtail (Sec 34)",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Prairieland Village",
          status: "Extra 2025 assessment of $1,200.",
          detail: "Printed under Prairieland Village CAI with section 34.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "Fiery Skipper (Sec 10)",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Prairieland Village",
          status: "Extra 2025 assessment of $75.",
          detail: "Printed under Prairieland Village CAI with section 10.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "Medina (Sec 2)",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Creekland Village",
          status: "Extra 2025 assessment of $1,200.",
          detail: "Printed under Creekland Village CAI with section 2. The village page does not describe it.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
        {
          name: "Maravillas (Sec 5)",
          group: "HOA areas",
          kind: "HOA area",
          parent: "Creekland Village",
          status: "Extra 2025 assessment of $1,200.",
          detail: "Printed under Creekland Village CAI with section 5.",
          sourceLabel: "2025 HOA rates",
          sourceUrl: "https://www.bridgeland.com/wp-content/uploads/2025/04/HOA-2025-Approved-Rates-FINAL.pdf",
        },
      ],
    },
  },
  {
    slug: "towne-lake",
    citySlug: "cypress",
    name: "Towne Lake",
    developer: "Caldwell Companies",
    address: "10855 Towne Lake Parkway, Cypress, TX 77433",
    location:
      "Caldwell Companies places Towne Lake in the Cypress-Fairbanks area of northwest Houston. The published address is 10855 Towne Lake Parkway, Cypress, TX 77433.",
    summary:
      "Towne Lake is a Caldwell Companies community built around a private lake. The developer says the plan covers about 2,450 acres and 3,000 homes, with a 300-acre recreational lake, a boardwalk, a marina, and commercial space that includes a Kroger.",
    priceNote:
      "The current builder page prices custom builders from the $900s and Partners in Building from the $1.2 millions. Caldwell Homes is listed without a starting price on that page. This is a higher price band than Marvida.",
    homes:
      "About 2,450 acres and 3,000 homes at completion. Caldwell says development began in 2006. About 300 acres are described as commercial, including the boardwalk and marina.",
    builders: [
      { name: "Caldwell Homes", detail: "Listed for the main community and for an active-adult 55+ section" },
      { name: "Partners in Building", detail: "From the $1.2 millions" },
      { name: "Bavaria Builders", detail: "Custom, from the $900s" },
      { name: "Braziel Building Group", detail: "Custom, from the $900s" },
      { name: "Brickland Custom Homes", detail: "Custom, from the $900s" },
      { name: "Jamestown Estate Homes", detail: "Custom, from the $900s" },
      { name: "William David Homes", detail: "Custom, from the $900s" },
    ],
    amenities: [
      "300-acre recreational lake",
      "Boardwalk and marina",
      "Park and trail system",
      "Commercial area the developer says includes a Kroger and medical services",
    ],
    schoolDistrict: "Cypress-Fairbanks area. Confirm the campus.",
    schools:
      "Caldwell describes Towne Lake as part of the Cypress-Fairbanks area, and a resident quote on the builder page mentions Cy-Fair schools. The pages reviewed here do not publish a campus list. Confirm the address with Cypress-Fairbanks ISD.",
    sources: [
      { label: "Caldwell Companies: Towne Lake", url: "https://caldwellcos.com/development/communities/towne-lake" },
      { label: "Towne Lake builders", url: "https://townelaketexas.com/builders" },
    ],
    faqs: [
      {
        question: "What is the lake at Towne Lake?",
        answer:
          "Caldwell Companies describes a 300-acre recreational lake as the center of the community, with a boardwalk and marina. The community plan is about 2,450 acres and 3,000 homes.",
      },
      {
        question: "What do new homes cost in Towne Lake?",
        answer:
          "The builder page lists custom builders from the $900s and Partners in Building from the $1.2 millions. Caldwell Homes is also building. Get a current price for the section you like, because custom pricing moves with the lot and the plan.",
      },
      {
        question: "Is Towne Lake in Cy-Fair ISD?",
        answer:
          "The developer places it in the Cypress-Fairbanks area. Confirm the campus for the homesite with Cypress-Fairbanks ISD. A community marketing line is not the attendance zone.",
      },
    ],
  },
  {
    slug: "marvida",
    citySlug: "cypress",
    name: "Marvida",
    developer: "Starwood Land",
    address: "North of FM 529, between Fry Road and the Grand Parkway, Cypress, TX",
    location:
      "Marvida's master-plan page places the community on 856 acres north of FM 529, west of Fry Road and east of the Grand Parkway, in Cypress.",
    summary:
      "Marvida is an 856-acre Starwood Land community planned for about 2,500 homes. The amenity is The Island Amenity Village, with a lazy river. Residents also get access to amenities at sister communities Miramesa, Bridge Creek, and Canyon Lakes West. A 2025 brochure says Cypress-Fairbanks ISD serves the community.",
    priceNote:
      "The 2025 brochure map does not print one community-wide price. A 2022 Perry Homes post on the Marvida site quoted 45-foot homes from the $390s and 55-foot homes from the $520s. Those Perry figures are old. Use each builder's current price sheet.",
    homes:
      "About 2,500 homes on 856 acres. The August 2025 brochure map names sections for M/I Homes, Smith Douglas, Tricoast, CastleRock, Chesmar, Hamilton Thomas, Long Lake, KB Home, K. Hovnanian, Perry Homes, Centex, and Brightland, plus Willow at Marvida as homes for rent.",
    builders: [
      { name: "CastleRock Communities", detail: "Named on the community site and on the 2025 brochure map. Model at 8502 Trident Point Drive" },
      { name: "Perry Homes", detail: "45-foot and 55-foot models on Fairway Palms Drive" },
      { name: "Chesmar Homes", detail: "Named on the 2025 brochure map" },
      { name: "M/I Homes", detail: "Named on the 2025 brochure map" },
      { name: "KB Home", detail: "Named on the 2025 brochure map" },
      { name: "K. Hovnanian Homes", detail: "Named on the 2025 brochure map" },
      { name: "Centex", detail: "Named on the 2025 brochure map" },
      { name: "Smith Douglas Homes", detail: "Named on the 2025 brochure map" },
      { name: "Tricoast Homes", detail: "Named on the 2025 brochure map" },
      { name: "Hamilton Thomas Homes", detail: "Named on the 2025 brochure map" },
      { name: "Long Lake", detail: "Named on the 2025 brochure map" },
      { name: "Brightland Homes", detail: "Named on the 2025 brochure map" },
      { name: "Willow at Marvida", detail: "Listed as homes for rent, not a for-sale builder" },
    ],
    amenities: [
      "The Island Amenity Village: lazy river, lap pool, splash pad, water playground, clubhouse, event lawn, shaded pavilion, dog park, sport courts, sand volleyball, exercise stations, playgrounds, and pickleball",
      "Access to parks, pools, and clubhouses at Miramesa, Bridge Creek, and Canyon Lakes West",
    ],
    schoolDistrict: "Cypress-Fairbanks ISD",
    schools:
      "Marvida's school page lists Cypress-Fairbanks ISD and names Walker Elementary or Andre Elementary, Rowe Middle School, and Cypress Park High School. The page says zones can change and tells buyers to confirm with the district. Rowe Middle and Cypress Park High sit on Westgreen Boulevard.",
    sources: [
      { label: "Marvida master plan", url: "https://marvidahouston.com/community/master-plan/" },
      { label: "Marvida amenities", url: "https://marvidahouston.com/amenities/" },
      { label: "Marvida schools", url: "https://marvidahouston.com/schools/" },
      {
        label: "August 2025 brochure",
        url: "https://marvidahouston.com/wp-content/uploads/2025/08/MV-25013-Brochure-Developer-Story-Revision-v2-WEB37.pdf",
      },
      { label: "Perry Homes at Marvida", url: "https://marvidahouston.com/homebuilders/perry-homes/" },
      { label: "CastleRock at Marvida", url: "https://marvidahouston.com/homebuilders/castlerock-communities/" },
    ],
    faqs: [
      {
        question: "What is The Island at Marvida?",
        answer:
          "The Island Amenity Village is Marvida's main park. The community lists a lazy river, lap pool, splash pad, playgrounds, a dog park, sport courts, a clubhouse, an event lawn, and a shaded pavilion. Residents can also use selected amenities at Miramesa, Bridge Creek, and Canyon Lakes West.",
      },
      {
        question: "What schools does Marvida list?",
        answer:
          "The community school page lists Cypress-Fairbanks ISD campuses: Walker Elementary, Andre Elementary, Rowe Middle School, and Cypress Park High School. It also says to confirm the current zone with the district.",
      },
      {
        question: "Who develops Marvida?",
        answer:
          "Starwood Land is the developer. The community is 856 acres in Cypress, north of FM 529 between Fry Road and the Grand Parkway, planned for about 2,500 homes.",
      },
    ],
  },
  {
    slug: "mason-woods",
    citySlug: "cypress",
    name: "Mason Woods",
    developer: "Taylor Morrison and Tri Pointe Homes",
    address: "22038 Mason Woods Road, Cypress, TX 77433",
    location:
      "Tri Pointe Homes publishes the community address as 22038 Mason Woods Road, Cypress, TX 77433. Taylor Morrison says Mason Woods is about 300 acres between Cypress and Katy, with access to the Grand Parkway, I-10, and US 290. This is a different community from Grand Mason Crossing, which uses a Katy address east of the Grand Parkway.",
    summary:
      "Mason Woods is a master-planned community in Cypress. Taylor Morrison says it covers about 300 acres, with 40-foot and 45-foot collections, and that it is zoned to Cy-Fair ISD. Tri Pointe Homes also sells The Cove, The Ridge, and The Timbers at Mason Woods.",
    priceNote:
      "Taylor Morrison lists the Burton plan at 21823 Lush Pampa Lane from $298,990. That card also shows $319,990. The 40-foot collection is labeled the upper $200s, about 1,366 to 2,236 square feet, and the 45-foot collection is labeled the low $300s, about 1,612 to 2,897 square feet. Tri Pointe lists The Cove and The Ridge in the low $300s and The Timbers in the mid $300s. Prices change.",
    homes:
      "About 300 acres, with Taylor Morrison collections on 40-foot and 45-foot lots. Tri Pointe lists The Cove at about 1,492 to 2,492 square feet, The Ridge at about 1,474 to 2,313 square feet, and The Timbers at about 1,622 to 2,442 square feet. Tri Pointe hours are Monday through Saturday 10 am to 6 pm, and Sunday 12 pm to 6 pm.",
    builders: [
      {
        name: "Taylor Morrison",
        detail:
          "40-foot collection from the upper $200s, about 1,366 to 2,236 square feet. 45-foot collection from the low $300s, about 1,612 to 2,897 square feet. A Burton plan at 21823 Lush Pampa Lane is listed at $298,990, reduced from $319,990. The published model photo is at 22026 Mason Woods Road.",
      },
      {
        name: "Tri Pointe Homes",
        detail:
          "The Cove and The Ridge are priced from the low $300s. The Timbers are priced from the mid $300s. Square footage on the page runs about 1,474 to 2,492. Sales address 22038 Mason Woods Road, Cypress, TX 77433.",
      },
    ],
    amenities: [
      "Community pool, trails, and a fitness center on the Taylor Morrison page",
      "Pavilion and playground on the Tri Pointe page",
    ],
    schoolDistrict: "Cy-Fair ISD",
    schools:
      "Taylor Morrison says Mason Woods is zoned to Cy-Fair ISD. The page does not name the campuses. Confirm the lot with the district.",
    sources: [
      { label: "Taylor Morrison, Mason Woods", url: "https://www.taylormorrison.com/tx/houston/mason-woods" },
      { label: "Tri Pointe Homes, Mason Woods", url: "https://www.tripointehomes.com/tx/houston/mason-woods" },
      {
        label: "Tri Pointe Homes Value of Now",
        url: "https://www.tripointehomes.com/promotion/tx/houston/value-of-now-sales-event-fha-4-875-fixed-rate-5-950-apr-estimated-payment-for-375k-sales-price",
      },
    ],
    faqs: [
      {
        question: "Is Mason Woods the same community as Grand Mason Crossing?",
        answer:
          "No. Mason Woods uses a Cypress address on Mason Woods Road and is sold by Taylor Morrison and Tri Pointe Homes. Grand Mason Crossing uses 5658 Belton Hollow Lane, Katy, TX 77449, and is sold by Long Lake.",
      },
      {
        question: "What do homes at Mason Woods cost?",
        answer:
          "Taylor Morrison labels the 40-foot collection from the upper $200s and lists a Burton plan at $298,990. Tri Pointe labels The Cove and The Ridge from the low $300s and The Timbers from the mid $300s. Confirm the homesite.",
      },
      {
        question: "What schools does Mason Woods name?",
        answer:
          "Cy-Fair ISD. Taylor Morrison does not name the campuses on the Mason Woods page. Confirm the address with the district.",
      },
    ],
  },
  {
    slug: "avalon-at-cypress",
    citySlug: "cypress",
    name: "Avalon at Cypress",
    developer: "Taylor Morrison",
    address: "21835 Brooking Gorge Lane, Cypress, TX 77433",
    location:
      "Taylor Morrison's directions page lists the sales center at 21835 Brooking Gorge Lane, Cypress, TX 77433. From Grand Parkway, the page says to exit West Road, go east toward Mason Road, turn left on Mason Road, and turn right toward Avalon Landing. The community page also mentions the Grand Parkway and future access to the Mason Road expansion.",
    summary:
      "Avalon at Cypress is a Taylor Morrison community in Cypress. The builder page lists four collections, from the 40-foot Milestone homes in the high $300s through the 70-foot Affinity homes in the high $500s, and says the community is in Cy-Fair ISD.",
    priceNote:
      "Taylor Morrison labels Avalon at Cypress 40s, Milestone, from the high $300s, about 1,675 to 2,462 square feet. The 50s, Endeavor, are from the low $400s, about 2,380 to 3,432 square feet. The 60s, Venture, are from the mid $500s, about 2,796 to 3,934 square feet. The 70s, Affinity, are from the high $500s, about 3,174 to 4,925 square feet. Prices change.",
    homes:
      "Four Taylor Morrison collections on the Avalon at Cypress page: 40-foot Milestone, 50-foot Endeavor, 60-foot Venture, and 70-foot Affinity. Sales center hours on the directions page are Monday through Saturday 10 am to 6 pm, and Sunday 12 pm to 6 pm.",
    builders: [
      {
        name: "Taylor Morrison",
        detail:
          "40s Milestone from the high $300s. 50s Endeavor from the low $400s. 60s Venture from the mid $500s. 70s Affinity from the high $500s. The Avalon at Cypress page did not print a Houston incentive on November 8, 2026. Ask Natalie about current incentives.",
      },
    ],
    amenities: [
      "Community pool",
      "Outdoor fireplace",
      "Playscape",
      "Tennis and pickleball courts",
    ],
    schoolDistrict: "Cy-Fair ISD",
    schools:
      "Taylor Morrison says Avalon at Cypress is surrounded by the Cy-Fair Independent School District. The page does not name the campuses. Confirm the lot with the district.",
    sources: [
      { label: "Taylor Morrison, Avalon at Cypress", url: "https://www.taylormorrison.com/tx/houston/avalon-at-cypress" },
      {
        label: "Avalon at Cypress directions",
        url: "https://www.taylormorrison.com/tx/houston/cypress/avalon-at-cypress-50s-endeavor/directions",
      },
    ],
    faqs: [
      {
        question: "Where is Avalon at Cypress?",
        answer:
          "The Taylor Morrison sales center is 21835 Brooking Gorge Lane, Cypress, TX 77433, near the Grand Parkway and West Road.",
      },
      {
        question: "What do homes at Avalon at Cypress cost?",
        answer:
          "Taylor Morrison labels the 40-foot collection from the high $300s, the 50-foot collection from the low $400s, the 60-foot collection from the mid $500s, and the 70-foot collection from the high $500s. Confirm the homesite.",
      },
      {
        question: "Did the Avalon page list a current incentive?",
        answer:
          "On November 8, 2026 the legal text attached to the rate banner on the Avalon at Cypress page described Treasure Coast quick move-in homes, not Houston. That offer is not listed here. Ask Natalie about a current Houston incentive.",
      },
    ],
  },
  {
    slug: "dellrose",
    citySlug: "waller",
    name: "Dellrose",
    developer: "Published at Dellrose Living",
    address: "17312 Springfield Meadow Drive, Hockley, TX 77447",
    location:
      "Dellrose's sales address is in Hockley, TX 77447, minutes from Cypress and Bridgeland. It is on this Waller page because the community says students attend Waller ISD, including an on-site elementary school. It is not inside the City of Waller limits.",
    summary:
      "Dellrose is a 600-acre community in Hockley that says it is in the final phase, with fewer than 100 homesites left. The community is selling homes from the high $200s to the $500s and highlights Waller ISD, including Bryan Lowe Elementary on site.",
    priceNote:
      "The homepage says homes run from the high $200s to the $500s. The builder page lists Empire Homes from the low $300s at about 1,527 to 2,649 square feet, and Ashton Woods from the $300s at about 1,747 to 2,896 square feet.",
    homes:
      "600 acres. The community says the final section is selling and fewer than 100 homesites remain. Floor plans are described as three, four, and five bedrooms.",
    builders: [
      { name: "Empire Homes", detail: "From the low $300s, about 1,527 to 2,649 square feet. Highlighted on the current builder page" },
      { name: "Ashton Woods", detail: "From the $300s, about 1,747 to 2,896 square feet. Model area at 17312 Springfield Meadow Drive" },
      {
        name: "Chesmar Homes, Coventry Homes, and Lennar",
        detail: "Named with Empire and Ashton Woods in a Dellrose builder article. Confirm who still has homesites.",
      },
    ],
    amenities: [
      "The community describes contemporary amenities and space to run, relax, play, and gather",
      "On-site Bryan Lowe Elementary, which residents can walk or bike to",
    ],
    schoolDistrict: "Waller ISD",
    schools:
      "Dellrose says students attend Waller ISD. Bryan Lowe Elementary, at 31502 Conifer Farm Drive, Hockley, TX 77447, is the on-site K-5 campus the community said opened for the 2024-2025 school year. The schools page also lists Roberts Road Elementary, Waller Junior High, and Waller High School. Confirm the current secondary campus for the address.",
    sources: [
      { label: "Dellrose homepage", url: "https://dellroseliving.com/" },
      { label: "Dellrose builders", url: "https://dellroseliving.com/builders/" },
      { label: "Dellrose schools", url: "https://dellroseliving.com/community/schools/" },
      { label: "Lowe Elementary opening note", url: "https://dellroseliving.com/new-lowe-elementary-gears-up-for-the-school-year/" },
    ],
    faqs: [
      {
        question: "Is Dellrose in Waller or Hockley?",
        answer:
          "The published address is Hockley, TX 77447. The community says it is zoned to Waller ISD and sits minutes from Cypress and Bridgeland. Use Hockley for the mailing address and Waller ISD for the school check.",
      },
      {
        question: "What does Dellrose cost?",
        answer:
          "Dellrose says homes run from the high $200s to the $500s, and that fewer than 100 homesites remain in the final section. Empire Homes lists plans from the low $300s and Ashton Woods from the $300s.",
      },
      {
        question: "What school is inside Dellrose?",
        answer:
          "Bryan Lowe Elementary is the on-site Waller ISD K-5 school at 31502 Conifer Farm Drive. The community said it opened for the 2024-2025 year. The schools page also names Roberts Road Elementary, Waller Junior High, and Waller High School.",
      },
    ],
  },
  {
    slug: "everly",
    citySlug: "waller",
    name: "Everly",
    developer: "Johnson Land Ventures, a Johnson Development Corp. affiliate",
    address: "21821 Everly Fields Blvd, Hockley, TX 77447",
    location:
      "Everly publishes 21821 Everly Fields Blvd, Hockley, TX 77447. The FAQ calls it a Hockley master-planned community and says the builders are near Cypress and Hockley. Johnson Development says it is in Hockley, right off the Grand Parkway. The FAQ lists Harris County tax entities, including Harris County MUD 535. It is on this Waller page because the community says students attend Waller ISD. The mailing city is Hockley.",
    summary:
      "Everly is a Johnson Land Ventures community of about 351 acres in Hockley, planned for 1,059 homes. The builders page says homesites run from 45 feet to 60 feet, with prices from the $400s, from Perry Homes, Drees Homes, and Westin Homes. The FAQ lists annual HOA dues of $1,100.",
    priceNote:
      "Perry Homes lists the 45-foot section from the $340s, the 50-foot section from the $420s, and the 60-foot section from the $570s. Westin Homes lists the 50-foot section from $489,892. The Everly builders page says prices from the $400s across the builders. The Drees Everly 45 page did not print a starting price. Prices change.",
    homes:
      "About 351 acres and 1,059 homes. Homesites from 45 feet to 60 feet. The FAQ says the current annual HOA assessment is $1,100, managed by Sterling Association Services. It also prints 2025 tax rates, including Harris County MUD 535 at $1.50 and Waller ISD at $1.06 per $100, and says to verify them at hctax.net.",
    builders: [
      {
        name: "Drees Homes",
        detail:
          "Named on the Everly builders page, with model addresses at 18811 Peony Manor Lane and 18827 Peony Manor Lane, Hockley, TX 77447. The Drees Everly 45 page did not print a starting price. Drees does publish a USDA financing page for Everly.",
      },
      {
        name: "Perry Homes",
        detail:
          "45-foot section from the $340s, about 1,600 to 2,700 square feet. 50-foot section from the $420s, about 2,200 to 3,400 square feet. 60-foot section from the $570s, about 2,700 to 4,100 square feet. Model addresses on Peony Manor Lane.",
      },
      {
        name: "Westin Homes",
        detail:
          "50-foot section from $489,892, about 3,040 to 3,400 square feet. Model at 18823 Peony Manor Lane, Hockley, TX 77447. The Westin Everly page did not print a current incentive. Ask Natalie about current incentives.",
      },
    ],
    amenities: [
      "Resort-style pool",
      "Amenity center",
      "Fitness center",
      "Pickleball courts",
      "Playground",
      "Walking trails",
    ],
    schoolDistrict: "Waller ISD",
    schools:
      "Everly says students are zoned to Waller ISD. The FAQ lists Bryan Lowe Elementary (Pre-K to 5th), W.C. Schultz Junior High (6th to 8th), and Waller High School (9th to 12th). The education page lists Lowe at 31502 Conifer Farm Drive, Hockley, TX 77447, Schultz at 20950 Field Store Rd, Waller, TX 77484, and Waller High at 31213 Waller Spring Creek Rd, Waller, TX 77484. The FAQ says boundaries can change.",
    sources: [
      { label: "Everly FAQ", url: "https://www.everlytx.com/faq/" },
      { label: "Everly builders", url: "https://www.everlytx.com/builders/" },
      { label: "Everly community", url: "https://www.everlytx.com/community/" },
      { label: "Everly schools", url: "https://www.everlytx.com/education/" },
      { label: "Johnson Development, Everly", url: "https://www.johnsondevelopment.com/hockley-tx/mpc_everly" },
      { label: "Perry Homes at Everly", url: "https://www.perryhomes.com/new-homes/texas/houston/everly" },
      { label: "Westin Homes at Everly", url: "https://www.westin-homes.com/communities/houston/everly" },
      { label: "Drees Homes Everly 45", url: "https://www.dreeshomes.com/new-homes-houston/hockley/comm-everly/everly-45/" },
      { label: "Drees Homes, Everly USDA financing", url: "https://www.dreeshomes.com/new-homes-houston/promotions/everly-usda/" },
      { label: "Perry Homes Year End Sales Event 2026", url: "https://www.perryhomes.com/promotion/year-end-sales-event-2026/houston" },
    ],
    faqs: [
      {
        question: "Is Everly in Cypress, Katy, or Hockley?",
        answer:
          "The published address is 21821 Everly Fields Blvd, Hockley, TX 77447. The community markets itself as near Cypress and Hockley, and Johnson Development says it is off the Grand Parkway. The FAQ lists Harris County tax entities and Waller ISD schools.",
      },
      {
        question: "What do new homes in Everly cost?",
        answer:
          "The builders page says prices from the $400s. Perry Homes lists sections from the $340s, the $420s, and the $570s. Westin Homes lists its 50-foot section from $489,892. The Drees page did not print a starting price.",
      },
      {
        question: "What schools does Everly name?",
        answer:
          "Waller ISD. The FAQ lists Bryan Lowe Elementary, W.C. Schultz Junior High, and Waller High School, and says to verify enrollment with the district.",
      },
      {
        question: "What are the HOA dues?",
        answer:
          "The FAQ says the current annual HOA assessment is $1,100, managed by Sterling Association Services.",
      },
    ],
  },
  {
    slug: "redbud",
    citySlug: "waller",
    name: "Redbud",
    developer: "Taylor Morrison",
    address: "18034 Old Barrel Drive, Hockley, TX 77447",
    location:
      "Taylor Morrison's January 2026 fact sheet lists 18034 Old Barrel Drive, Hockley, TX 77447. It says the entrance is off Bauer Hockley Road and Hopfe Road, along the Grand Parkway. The mailing city is Hockley. The page is under Waller because the fact sheet names Waller ISD.",
    summary:
      "Redbud is a Taylor Morrison community in Hockley. The fact sheet names Waller ISD schools, a $950 annual HOA fee, and planned resort-style amenities. Taylor Morrison sells two collections, Redbud 40s (Ascent) and Redbud 45s (Passage).",
    priceNote:
      "The January 2026 fact sheet does not print a starting price. A Redbud 45s home page checked November 8, 2026 listed 21938 Longhorn Ridge Drive, the Barrett plan, at $275,000, with $301,990 shown with a line through it. That is one home, not a community-wide starting price.",
    homes:
      "Redbud 40s is the Ascent collection. Redbud 45s is the Passage collection. Those names are lot-width series. The fact sheet does not name other internal neighborhoods. The directions page lists sales hours of Monday through Saturday 10 am to 6 pm and Sunday 12 pm to 6 pm. Phone on the fact sheet: (281) 619-8241.",
    builders: [
      {
        name: "Taylor Morrison",
        detail:
          "Builder of Redbud 40s (Ascent) and Redbud 45s (Passage). Sales address 18034 Old Barrel Drive, Hockley, TX 77447. The fact sheet does not print a starting price. One Redbud 45s home, 21938 Longhorn Ridge Drive, was listed at $275,000 on November 8, 2026.",
      },
    ],
    amenities: [
      "The fact sheet says Redbud has planned resort-style amenities",
      "A Redbud 45s home page says community amenities are coming soon, including a pool, a playground, and greenspace",
    ],
    schoolDistrict: "Waller ISD",
    schools:
      "The fact sheet names Waller ISD: Lowe Elementary at 31502 Conifer Farm Dr, Schultz Junior High at 20950 Fields Store Rd, and Waller High School at 31213 Waller Spring Creek Rd. Confirm the lot with the district.",
    sources: [
      {
        label: "Taylor Morrison Redbud fact sheet, January 2026",
        url: "https://www.taylormorrison.com/-/media/sites/tm/homes/texas/houston/hockley/redbud/collateral/redbud-community-fact-sheet-jan-2026-(1).pdf",
      },
      {
        label: "Redbud 40s directions",
        url: "https://www.taylormorrison.com/tx/houston/hockley/red-bud-40s-ascent/directions",
      },
      {
        label: "Redbud 45s, Barrett at 21938 Longhorn Ridge Drive",
        url: "https://www.taylormorrison.com/tx/houston/hockley/red-bud-45s-passage/floor-plans/barrett/home-available-now-at-21938-longhorn-ridge-drive",
      },
    ],
    faqs: [
      {
        question: "Is Redbud in Cypress or Hockley?",
        answer:
          "The fact sheet address is 18034 Old Barrel Drive, Hockley, TX 77447. The entrance is off Bauer Hockley Road and Hopfe Road. Schools on the fact sheet are Waller ISD.",
      },
      {
        question: "What is the HOA fee?",
        answer:
          "The fact sheet lists a homeowners association fee of $950 a year and a $950 capital fee due once at closing. It names Inframark Community Management.",
      },
      {
        question: "What schools does the fact sheet name?",
        answer:
          "Waller ISD: Lowe Elementary, Schultz Junior High, and Waller High School. Confirm the address with the district.",
      },
    ],
  },
  {
    slug: "stokesbury",
    citySlug: "waller",
    name: "Stokesbury",
    developer: "Centex Homes",
    address: "23134 Deanston Drive, Waller, TX 77484",
    location:
      "Centex publishes the Stokesbury sales address as 23134 Deanston Drive, Waller, TX 77484. The page describes the community as new construction in Waller. Centex also publishes a separate community, The Courtyards at Stokesbury, at 23126 Deanston Drive.",
    summary:
      "Stokesbury is a Centex community in Waller. The page lists single-family homes from $220,990, about 1,204 to 2,947 square feet, in three series: Villages, Arbors, and Villas. Schools on the page are Waller ISD.",
    priceNote:
      "Centex lists Stokesbury from $220,990. Villages start at $220,990 and about 1,204 square feet. Arbors start at $245,990 and about 1,408 square feet. Villas start at $279,990, with plans from about 1,762 to 2,947 square feet. Prices change.",
    homes:
      "One and two story single-family homes. Villages, Arbors, and Villas are home series on this page, not separate neighborhoods. The Courtyards at Stokesbury is a different Centex page, with plans from $184,990 and about 1,056 to 1,353 square feet, at 23126 Deanston Drive. Sales hours are Monday through Saturday 10 am to 6 pm and Sunday 12 pm to 6 pm. Phone (936) 296-3200.",
    builders: [
      {
        name: "Centex Homes",
        detail:
          "From $220,990, about 1,204 to 2,947 square feet. Villages from $220,990, Arbors from $245,990, and Villas from $279,990. Sales address 23134 Deanston Drive, Waller, TX 77484.",
      },
    ],
    amenities: [
      "Resort-style pool",
      "Pickleball courts",
      "Bocce ball court",
      "Playground",
      "Walking trails",
      "Lake",
    ],
    schoolDistrict: "Waller ISD",
    schools:
      "Centex lists Waller High School at 31213 Waller Spring Creek Road, Schultz Junior High School at 20950 Field Store Road, and Cure Elementary. The page does not print a street address or phone for Cure Elementary. Confirm the lot with the district.",
    sources: [
      { label: "Centex, Stokesbury", url: "https://www.centex.com/homes/texas/houston/waller/stokesbury-211361" },
      {
        label: "Centex, The Courtyards at Stokesbury",
        url: "https://www.centex.com/homes/texas/houston/waller/the-courtyards-at-stokesbury-211630/davilla-699894",
      },
    ],
    faqs: [
      {
        question: "Where is Stokesbury?",
        answer:
          "Centex lists the sales address as 23134 Deanston Drive, Waller, TX 77484. The Courtyards at Stokesbury is a separate Centex page at 23126 Deanston Drive.",
      },
      {
        question: "What do homes in Stokesbury cost?",
        answer:
          "The community page starts at $220,990. Villages, Arbors, and Villas are the three series, from $220,990, $245,990, and $279,990.",
      },
      {
        question: "What schools does Centex name?",
        answer:
          "Waller High School, Schultz Junior High School, and Cure Elementary. The page prints addresses for the high school and junior high, and the name only for Cure Elementary.",
      },
    ],
  },
  {
    slug: "sunterra",
    citySlug: "waller",
    alsoListedOn: ["katy"],
    name: "Sunterra",
    developer: "Starwood Land",
    address: "North of I-10 and west of the Grand Parkway. Many sales addresses use Katy, TX",
    location:
      "Starwood Land places Sunterra just north of Interstate 10 and west of the Grand Parkway. Marketing often says Katy. Royal ISD campuses on the school page use Brookshire and Pattison addresses, which is why it is grouped with the Waller County new-home search. Confirm the city and county on the survey for the lot you like.",
    summary:
      "Sunterra is a Starwood Land community with two amenity villages, The Sol Club and The Retreat. The developer's 2025-2026 brochure says Sunterra was the top-selling community in Texas for a third straight year. Homes are served by Katy ISD and Royal ISD, depending on the section.",
    priceNote:
      "The builder page says new homes are priced from the high $200s to the $800s. That range covers very different sections. Get the price for the district and homesite width you actually want.",
    homes:
      "The brochure describes lake-view homes, a gated section, on-site school sites, and the Shops at Sunterra. It does not replace a lot-level survey for county, MUD, or school zone.",
    builders: [
      {
        name: "Builder directory",
        detail:
          "The Sunterra builder page names Brohn Homes, CastleRock Communities, Chesmar, and D.R. Horton, and says additional builders are selling. Prices on that page run from the high $200s to the $800s. Confirm the builder for the section.",
      },
    ],
    amenities: [
      "The Sol Club, with a Crystal Lagoon, white-sand beach, kayaking, and paddleboarding",
      "The Retreat, with a resort pool, lazy river, clubhouse, fitness lawn, splash pad, and dog park",
      "GreenBolt Trail, described as a 12-foot-wide path through the community",
      "A lifestyle calendar and the Shops at Sunterra",
    ],
    schoolDistrict: "Katy ISD and Royal ISD",
    schools:
      "Sunterra says sections are zoned to Katy ISD or Royal ISD. The school page lists Katy ISD campuses including Cross Elementary, Robertson Elementary, McElwain Elementary, Haskett Junior High, Nelson Junior High, Katy High School, and Paetow High School, plus a future Katy ISD elementary. Royal ISD names include Royal Early Childhood Center, Royal Elementary, Royal Prairie Elementary, and Royal STEM Academy. The brochure says zones can change. Confirm the lot.",
    sources: [
      { label: "Sunterra builders", url: "https://sunterratx.com/homebuilders/" },
      { label: "Sunterra schools", url: "https://sunterratx.com/schools/" },
      {
        label: "2025-2026 brochure",
        url: "https://sunterratx.com/wp-content/uploads/2026/03/SUN-25046-Brochure-Update-2025-2026-1_v6_web.pdf",
      },
    ],
    faqs: [
      {
        question: "Why is Sunterra on the Waller page?",
        answer:
          "Sunterra is marketed with Katy addresses and is also served in part by Royal ISD, whose campuses are in Brookshire and Pattison in Waller County. The Katy ISD sections are a different zone. Ask Natalie to sort the section before you compare taxes or schools.",
      },
      {
        question: "What are the two amenity villages?",
        answer:
          "The Sol Club is built around a Crystal Lagoon with a beach, kayaking, and paddleboarding. The Retreat is built around a pool and lazy river, with a clubhouse, splash pad, and dog park. A 12-foot GreenBolt Trail connects the community.",
      },
      {
        question: "What is the published price range?",
        answer:
          "Sunterra's builder page says new homes run from the high $200s to the $800s. The range mixes Katy ISD and Royal ISD sections, so compare the specific builder and lot.",
      },
    ],
  },
  {
    slug: "sunterra-lakes",
    citySlug: "waller",
    alsoListedOn: ["katy"],
    name: "Sunterra Lakes",
    developer: "Starwood Land",
    address: "Brookshire, in Waller County, north of I-10 and west of the Grand Parkway",
    location:
      "Sunterra Lakes is the Starwood Land community next to Sunterra. The community site says it is just outside Katy. Century Communities places it in Brookshire, in Waller County, about 30 miles from downtown Houston, north of I-10 and west of the Grand Parkway.",
    summary:
      "Sunterra Lakes is a 1,463-acre community on the Waller County side of the Katy and Brookshire line. Starwood Land says residents can use Sunterra's Sol Club while the Sunterra Lakes amenity is built, and that students attend Royal ISD. A future on-site elementary is shown on the plan.",
    priceNote:
      "The Sunterra Lakes overview does not publish a single starting price. Century Communities is one builder with a Brookshire page for the community. Ask each builder for the current sheet.",
    homes: "1,463 acres. The developer describes a range of home choices and a lifestyle director. A home count is not printed on the overview page reviewed here.",
    builders: [
      {
        name: "Century Communities",
        detail: "Publishes a Sunterra Lakes community page for Brookshire in Waller County",
      },
      {
        name: "Additional builders",
        detail: "The developer describes diverse home choices and does not limit the community to one builder on the overview. Confirm who is open.",
      },
    ],
    amenities: [
      "Immediate access to Sunterra's Sol Club lagoon, beach, clubhouse, pickleball, and playgrounds while the local amenity is under construction",
      "Planned Sunterra Lakes amenities described by Century Communities: walking paths, a quarter-mile track, playground, splash pad, volleyball, basketball, shaded pickleball, a fitness course, a pavilion, and an event lawn",
    ],
    schoolDistrict: "Royal ISD",
    schools:
      "Sunterra Lakes says children attend Royal ISD. The brochure names Royal Early Childhood Center, Royal Elementary, Royal STEM Academy, Royal Junior High, and Royal High School. The plan includes a proposed on-site elementary. Confirm the campus for the lot.",
    sources: [
      { label: "Sunterra Lakes homepage", url: "https://sunterralakestx.com/" },
      {
        label: "Sunterra Lakes brochure",
        url: "https://sunterralakestx.com/wp-content/uploads/2026/02/SL-25013-11x17-Brochure-v12-WEB.pdf",
      },
      {
        label: "Century Communities",
        url: "https://www.centurycommunities.com/find-your-new-home/texas/houston-metro/brookshire/sunterra-lakes/",
      },
    ],
    faqs: [
      {
        question: "Is Sunterra Lakes the same as Sunterra?",
        answer:
          "No. Sunterra Lakes is the 1,463-acre Starwood community next door. Residents are told they can use Sunterra's Sol Club while the Sunterra Lakes amenity is built. Schools published for Sunterra Lakes are Royal ISD.",
      },
      {
        question: "What county is Sunterra Lakes in?",
        answer:
          "Century Communities places Sunterra Lakes in Brookshire, in Waller County, north of I-10 and west of the Grand Parkway. Confirm the lot survey. Marketing also says the community is just outside Katy.",
      },
      {
        question: "Will there be a school on site?",
        answer:
          "The community says a future on-site elementary is proposed, and that students attend Royal ISD campuses including Royal Elementary, Royal STEM Academy, Royal Junior High, and Royal High School.",
      },
    ],
  },
  {
    slug: "the-highlands",
    citySlug: "porter",
    name: "The Highlands",
    developer: "Caldwell Communities",
    address: "21875 Zion Drive, Porter, TX 77365",
    location:
      "The Highlands is in Porter, in Montgomery County, just off the Grand Parkway (Texas 99). Caldwell describes it as north of Houston and a short drive east of The Woodlands and Conroe.",
    summary:
      "The Highlands is a 2,300-acre Caldwell Communities master plan in Porter, planned for about 4,000 homes. The community says it won the Greater Houston Builders Association 2024 Master Planned Community of the Year. Thirteen builders are listed, including a 55+ section called Fairway Pines.",
    priceNote:
      "The FAQ says new homes start from the $350s to $1 million and up. The builder directory is more specific, from Beazer in the mid $300s and Lennar from the $350s to Drees from the mid $600s and Partners in Building from the $650s.",
    homes:
      "About 2,300 acres and 4,000 homes at completion. Fairway Pines is the 55+ section, with Caldwell Homes from the $460s and Encore by David Weekley Homes.",
    builders: [
      { name: "Beazer Homes", detail: "From the mid $300s" },
      { name: "Chesmar Homes", detail: "From the $400s" },
      { name: "Coventry Homes", detail: "From the $370s" },
      { name: "David Weekley Homes", detail: "From the $340s, plus Encore in the 55+ section" },
      { name: "Drees Homes", detail: "From the mid $600s" },
      { name: "Highland Homes", detail: "From the $380s" },
      { name: "Lennar", detail: "From the $350s" },
      { name: "Newmark Homes", detail: "From the $440s" },
      { name: "Partners in Building", detail: "From the $650s" },
      { name: "Perry Homes", detail: "From the $370s" },
      { name: "Ravenna Homes", detail: "From the $400s" },
      { name: "Village Builders", detail: "From the $450s" },
      { name: "Caldwell Homes", detail: "55+ homes at Fairway Pines, from the $460s" },
    ],
    amenities: [
      "18-hole golf course, driving range, and clubhouse",
      "Discovery Cove amenity complex with a resort pool, waterpark, lazy river, and fitness center",
      "More than 30 miles of trails, lakes, a 200-acre natural preserve, event lawn, playgrounds, tennis, and pickleball",
      "On-site lifestyle staff. The community publishes an annual CAI fee of about $1,584, which it says includes a social golf membership",
    ],
    schoolDistrict: "New Caney ISD",
    schools:
      "The Highlands says students are zoned to New Caney ISD. Highlands Elementary is on site and opened for the 2025-2026 school year. The community says Highlands Middle is planned to open in fall 2027. The FAQ also names White Oak Middle School, Pine Valley Middle School, and Porter High School. Confirm the current secondary zone.",
    sources: [
      { label: "The Highlands homepage", url: "https://thehighlands.com/" },
      { label: "The Highlands builders", url: "https://thehighlands.com/builders/" },
      { label: "The Highlands FAQ", url: "https://thehighlands.com/community/frequently-asked-questions/" },
      { label: "The Highlands schools", url: "https://thehighlands.com/gallery/schools/" },
      {
        label: "FAQ PDF",
        url: "https://thehighlands.com/wp-content/uploads/2026/04/Highlands_FAQ_v8-1.31.26-1.pdf",
      },
    ],
    faqs: [
      {
        question: "What do homes cost in The Highlands?",
        answer:
          "The community FAQ says new homes run from the $350s to $1 million and up. Builder starting prices on the directory include David Weekley from the $340s, Beazer from the mid $300s, and Partners in Building from the $650s.",
      },
      {
        question: "What school is inside The Highlands?",
        answer:
          "Highlands Elementary, a New Caney ISD campus, opened on site for the 2025-2026 school year. The community says Highlands Middle is planned for fall 2027. The FAQ also names White Oak Middle, Pine Valley Middle, and Porter High School.",
      },
      {
        question: "Is there golf in The Highlands?",
        answer:
          "Yes. The community publishes an 18-hole golf course, a driving range, and a clubhouse, and says the annual CAI fee of about $1,584 includes a social membership. Confirm the current fee and what the membership includes.",
      },
    ],
  },
  {
    slug: "valley-ranch",
    citySlug: "porter",
    alsoListedOn: ["new-caney"],
    name: "Valley Ranch",
    developer: "The Signorelli Company",
    address: "US 59 and the Grand Parkway, Porter, TX",
    location:
      "Valley Ranch is a Signorelli Company community at US 59/69 and the Grand Parkway. The developer markets it as Porter and says downtown Houston is about 25 minutes away. The Kingwood and Humble area and The Woodlands are the nearby job and shopping centers it names.",
    summary:
      "Valley Ranch is a 1,400-acre master-planned community planned for 1,500 single-family homes and more than 1,000 multifamily residences. The about page lists New Caney ISD schools inside the community and a planned 240-acre town center.",
    priceNote:
      "The about page says new homes by First America Homes, Legend Homes, D.R. Horton, and CastleRock Communities are priced from the $200,000s to the $400,000s. A new-homes page on the same site says prices range from the $180s to the $400s. Use the builder's current price.",
    homes:
      "1,400 acres, with 1,500 single-family homes and more than 1,000 multifamily homes in the plan. The new-homes page also names Signorelli Homes among the model builders.",
    builders: [
      { name: "First America Homes", detail: "Named on the Valley Ranch about page and the new-homes page" },
      { name: "Legend Homes", detail: "Named on both Valley Ranch pages" },
      { name: "D.R. Horton", detail: "Named on the about page" },
      { name: "CastleRock Communities", detail: "Named on the about page" },
      { name: "Signorelli Homes", detail: "Named on the new-homes page as a current model builder" },
    ],
    amenities: [
      "Valley Ranch Recreation Center",
      "150 acres of parks and green space",
      "The Grove, a planned 135-acre nature preserve with seven lakes and forested trails",
      "A planned 240-acre Valley Ranch Town Center, described as more than 1.5 million square feet of shopping, dining, and entertainment",
    ],
    schoolDistrict: "New Caney ISD",
    schools:
      "Both Valley Ranch pages say children can attend New Caney ISD, and the new-homes page says schools are located within the community. The pages reviewed here do not name the campuses. Confirm the address with New Caney ISD.",
    sources: [
      { label: "About Valley Ranch", url: "https://www.valley-ranch.com/valley-ranch-residential" },
      { label: "New homes in Porter", url: "https://www.valley-ranch.com/new-homes-porter" },
    ],
    faqs: [
      {
        question: "Is Valley Ranch in Porter or New Caney?",
        answer:
          "The Signorelli Company markets Valley Ranch as a Porter community at US 59 and the Grand Parkway, and says students attend New Caney ISD. New Caney is the neighboring city and the school district. Use the homesite address when you check taxes.",
      },
      {
        question: "Who is building in Valley Ranch?",
        answer:
          "The about page lists First America Homes, Legend Homes, D.R. Horton, and CastleRock Communities, from the $200,000s to the $400,000s. The new-homes page also lists Signorelli Homes and a range from the $180s to the $400s.",
      },
      {
        question: "What is The Grove?",
        answer:
          "The developer describes The Grove as a 135-acre nature preserve and park next to the planned town center, with seven lakes and forested trails. The town center itself is described as 240 acres and still planned.",
      },
    ],
  },
  {
    slug: "harrington-trails",
    citySlug: "splendora",
    alsoListedOn: ["new-caney"],
    name: "Harrington Trails",
    developer: "Forestar, with homes by D.R. Horton",
    address: "20715 Central Concave Drive, New Caney, TX 77372",
    location:
      "D.R. Horton places Harrington Trails at The Canopies on Highway 242 in New Caney, about four miles from US 59/69 and about 20 minutes from I-45. Forestar announced it as a northeast Houston community served by Splendora ISD. It is filed under Splendora because of that school zone.",
    summary:
      "Harrington Trails is a Forestar community sold by D.R. Horton's Express series. The current builder page says homes start at $249,990 and at about 1,412 square feet, with an on-site elementary school, a pool, a splash pad, trails, and a playground.",
    priceNote:
      "D.R. Horton lists homes from $249,990. The 2020 opening announcement said homes started in the $180s. Use the current builder price, not the opening price.",
    homes:
      "Express series homes with 3 to 5 bedrooms, 2 to 3 baths, 1 or 2 stories, from about 1,412 square feet. The 2020 announcement described eight floor plans of about 1,412 to 2,482 square feet.",
    builders: [
      {
        name: "D.R. Horton",
        detail: "Express series from $249,990, from about 1,412 square feet, at 20715 Central Concave Drive, New Caney, TX 77372",
      },
    ],
    amenities: [
      "Swimming pool and splash pad",
      "Walking and running trails",
      "Playground with a covered picnic area",
      "On-site elementary school",
    ],
    schoolDistrict: "Splendora ISD",
    schools:
      "D.R. Horton lists Timber Lakes Elementary (Pre-K through 6) about 0.2 miles away, Splendora Junior High (grades 7 and 8), and Splendora High School (grades 9 through 12). Forestar said Timber Lakes opened on site in August 2020. Confirm the current zone.",
    sources: [
      {
        label: "D.R. Horton: Harrington Trails at The Canopies",
        url: "https://www.drhorton.com/texas/houston/new-caney/harrington-trails-at-the-canopies",
      },
      {
        label: "Forestar opening announcement",
        url: "https://harringtontrails.com/news/forestar-group-inc-proudly-announces-opening-harrington-trails-community",
      },
    ],
    faqs: [
      {
        question: "Is Harrington Trails in Splendora or New Caney?",
        answer:
          "The model address D.R. Horton publishes is 20715 Central Concave Drive, New Caney, TX 77372, on Highway 242. The schools it lists are Splendora ISD, including on-site Timber Lakes Elementary. Both labels show up in listings.",
      },
      {
        question: "What is the starting price?",
        answer:
          "D.R. Horton's community page lists Harrington Trails at The Canopies from $249,990, with plans from about 1,412 square feet and 3 to 5 bedrooms. Incentives change that number.",
      },
      {
        question: "What amenities are published?",
        answer:
          "D.R. Horton lists a pool, a splash pad, walking trails, a playground, and an on-site elementary school.",
      },
    ],
  },
  {
    slug: "the-canopies",
    citySlug: "splendora",
    name: "The Canopies",
    developer: "Sold by D.R. Horton. School sites involve Splendora ISD.",
    address: "Splendora, TX 77372",
    location:
      "D.R. Horton lists The Canopies in Splendora, TX 77372, as a nearby community on the Harrington Trails page. Splendora ISD has described The Canopies as the site of a junior high and as the alternate site for a replacement elementary school.",
    summary:
      "The Canopies is a D.R. Horton community in Splendora. The Harrington Trails page lists it with homes from the $200s and plans from about 1,156 square feet. It is also a school site for Splendora ISD, separate from the homes themselves.",
    priceNote:
      "The nearby-community card says homes from the $200s, 3 to 6 bedrooms, 2 to 3 baths, and from 1,156 square feet. That card is a snapshot. Open the current D.R. Horton price list before you compare it with Harrington Trails.",
    homes: "D.R. Horton describes 1 and 2 story plans with 3 to 6 bedrooms, from about 1,156 square feet.",
    builders: [
      {
        name: "D.R. Horton",
        detail: "Listed from the $200s, from about 1,156 square feet, in Splendora, TX 77372",
      },
    ],
    amenities: [
      "Amenity details beyond the home card were not on the page reviewed here. Ask the sales office what is open before you count on a pool or park.",
    ],
    schoolDistrict: "Splendora ISD",
    schools:
      "In a May 9, 2024 letter, Splendora ISD said it moved a planned Greenleaf Elementary replacement to The Canopies, next to a junior high site the district said was slated to open in August 2025. Confirm which campus a specific lot is zoned to now.",
    sources: [
      {
        label: "D.R. Horton nearby listing on the Harrington Trails page",
        url: "https://www.drhorton.com/texas/houston/new-caney/harrington-trails-at-the-canopies",
      },
      {
        label: "Splendora ISD letter, May 9, 2024",
        url: "https://www.splendoraisd.org/view-all-news/news-details/~board/district-news/post/greenleaf-elementary-school-replacement-project-update",
      },
    ],
    faqs: [
      {
        question: "How is The Canopies different from Harrington Trails?",
        answer:
          "D.R. Horton lists them as separate communities. Harrington Trails at The Canopies uses a New Caney model address and starts at $249,990 on that page. The Canopies card says Splendora and homes from the $200s. Tour the model that matches the lot, not the similar name.",
      },
      {
        question: "Why do school plans mention The Canopies?",
        answer:
          "Splendora ISD said in May 2024 that a junior high site and a replacement elementary site were at The Canopies. That is a district plan. Confirm today's zone for the address.",
      },
      {
        question: "What home sizes are listed?",
        answer:
          "The D.R. Horton card lists 3 to 6 bedrooms, 2 to 3 baths, one and two story plans, from about 1,156 square feet, priced from the $200s.",
      },
    ],
  },
  {
    slug: "pinewood-trails",
    citySlug: "splendora",
    alsoListedOn: ["new-caney"],
    name: "Pinewood Trails",
    developer: "LGI Homes",
    address: "25507 Greenwood Canyon Drive, Cleveland, TX 77328",
    location:
      "LGI Homes places the information center at 25507 Greenwood Canyon Drive, Cleveland, TX 77328, in east Montgomery County. The builder describes access to I-69, TX 105, and the Grand Parkway, and shopping in Cleveland, Splendora, and at Valley Ranch Town Center. A Splendora ISD letter identifies LGI as the developer of Pinewood Trails.",
    summary:
      "Pinewood Trails is an LGI Homes community in east Montgomery County, filed here because buyers searching Splendora and New Caney are usually looking at this corridor. LGI lists homes from $234,900, with a 4-acre park, splash pad, and trails.",
    priceNote:
      "LGI lists homes from $234,900. The page also shows a monthly figure that depends on the offer. Read the builder's conditions before you treat any monthly number as a payment.",
    homes:
      "LGI describes new 3 and 4 bedroom, one and two story homes. Included features listed by the builder include stainless appliances, fiber access, granite counters, and fenced back yards on the community page.",
    builders: [
      { name: "LGI Homes", detail: "From $234,900. Information center at 25507 Greenwood Canyon Drive, Cleveland, TX 77328" },
    ],
    amenities: [
      "4-acre community park with playgrounds, a splash pad, picnic areas, and a covered pavilion",
      "Walking trails, ponds, green space, grills, and a shade ramada",
      "Fiber access, as listed by LGI",
    ],
    schoolDistrict: "Confirm the zone. A planned campus here was moved.",
    schools:
      "On May 9, 2024, Splendora ISD said a Greenleaf Elementary replacement that had been planned at Pinewood Trails was moved to The Canopies after problems with the Pinewood Trails site. Do not assume an on-site school. Confirm the current district and campus for the lot.",
    sources: [
      { label: "LGI Homes: Pinewood Trails", url: "https://www.lgihomes.com/texas/houston/pinewood-trails" },
      {
        label: "Splendora ISD letter, May 9, 2024",
        url: "https://www.splendoraisd.org/view-all-news/news-details/~board/district-news/post/greenleaf-elementary-school-replacement-project-update",
      },
    ],
    faqs: [
      {
        question: "Is Pinewood Trails in Splendora?",
        answer:
          "The information center address LGI publishes is in Cleveland, TX 77328, in east Montgomery County. The community is a common search for Splendora and New Caney buyers because of the roads and the Splendora ISD conversation around the site. Use the lot address for schools and taxes.",
      },
      {
        question: "What is the starting price at Pinewood Trails?",
        answer: "LGI Homes lists Pinewood Trails from $234,900, with 3 and 4 bedroom plans. Confirm the incentive and the monthly offer on the builder's page.",
      },
      {
        question: "Is there a school inside Pinewood Trails?",
        answer:
          "Not according to the May 9, 2024 Splendora ISD letter. The district said a planned elementary at Pinewood Trails was moved to The Canopies. Confirm the current zone.",
      },
    ],
  },
  {
    slug: "tavola",
    citySlug: "new-caney",
    name: "Tavola",
    developer: "Friendswood Development Company",
    address: "Model addresses on Sentosa Bluff Court, New Caney, TX 77357",
    location:
      "Friendswood Development places Tavola in New Caney, with access to US 59 and the Grand Parkway. The developer says that puts residents toward the Greenspoint business district, downtown Houston, and George Bush Intercontinental Airport.",
    summary:
      "Tavola is a Friendswood Development community in New Caney, set in woods with greenbelt trails and lakes. The developer page lists Lennar, Perry Homes, Westin Homes, and M/I Homes, plus a rec center, pool, clubhouse, and a zip line.",
    priceNote:
      "The Friendswood builder list includes Lennar from the $210s on 40-foot homesites, M/I Homes from the $300s on 50-foot homesites, Perry Homes from the $460s on 55-foot homesites, and Westin Homes from the $490s on 55-foot homesites. Those are the figures printed on the developer page and may not be today's price. Ask the builder.",
    homes:
      "Friendswood lists Lennar on 40-foot, 50-foot, 55-foot, and 65-foot homesites, Perry on 55-foot and 65-foot homesites, Westin on 55-foot homesites, and M/I on 50-foot homesites. An East Montgomery County improvement district table has described Tavola as a large lot plan. Use the developer page, not that table, for who is selling.",
    builders: [
      { name: "Lennar", detail: "From the $210s on 40-foot homesites, with other Lennar collections listed from the $220s, $280s, $320s, and $400s" },
      { name: "M/I Homes", detail: "From the $300s on 50-foot homesites. A model address on the page is 23408 Sentosa Bluff Court" },
      { name: "Perry Homes", detail: "From the $460s on 55-foot homesites and from the $480s on 65-foot homesites" },
      { name: "Westin Homes", detail: "From the $490s on 55-foot homesites" },
    ],
    amenities: [
      "Rec center, pool, and clubhouse",
      "Greenbelt trails, parks, and lakes",
      "A zip line, listed by Friendswood among the amenity highlights",
    ],
    schoolDistrict: "New Caney ISD",
    schools:
      "Friendswood lists Tavola Elementary, Keefer Crossing Middle School, and New Caney High School, and says that list came from New Caney ISD for the 2021-2022 year and can change. Confirm the address with the district. The developer also published a 2022 total tax estimate of 3.43 percent and said to verify it with the taxing units.",
    sources: [
      { label: "Friendswood Development: Tavola", url: "https://friendswooddevelopment.com/communities/master-planned/tavola" },
    ],
    faqs: [
      {
        question: "Who is building in Tavola?",
        answer:
          "The Friendswood Development page lists Lennar, M/I Homes, Perry Homes, and Westin Homes. Printed starting prices run from the $210s for a Lennar 40-foot homesite to the $490s for Westin. Confirm which of those collections are still selling.",
      },
      {
        question: "What schools does Tavola name?",
        answer:
          "Friendswood names Tavola Elementary, Keefer Crossing Middle School, and New Caney High School, based on New Caney ISD information for 2021-2022. The developer says zones can change every year.",
      },
      {
        question: "Where is Tavola?",
        answer:
          "Model addresses on the developer page are on Sentosa Bluff Court and nearby streets in New Caney, TX 77357, with access to US 59 and the Grand Parkway.",
      },
    ],
  },
  {
    slug: "amira",
    citySlug: "tomball",
    name: "Amira",
    developer: "Published by the Amira community site. The site names Beazer Homes and Perry Homes as the builders.",
    address: "20508 Mueschke Road, Tomball, TX 77377",
    location:
      "Amira's site places the community just north of the Grand Parkway in Tomball, with access toward Tomball, Cypress, and The Woodlands.",
    summary:
      "Amira is a 554-acre master-planned community in Tomball. The community site names Beazer Homes and Perry Homes, The Resort at Amira, five lakes, trails, and Tomball ISD.",
    priceNote:
      "The builders page lists Beazer Homes from the $300s to the $660s and Perry Homes from the $300s to the $700s. Beazer's own page also shows a plan from $344,990. Prices change.",
    homes:
      "Beazer lists single-family plans of about 1,460 to 3,966 square feet on 45-foot and 50-foot homesites. Perry lists about 1,600 to 3,800 square feet on 45-foot homesites.",
    builders: [
      { name: "Beazer Homes", detail: "From the $300s to the $660s. About 1,460 to 3,966 square feet. Models on Bronco Ridge Drive." },
      { name: "Perry Homes", detail: "From the $300s to the $700s. About 1,600 to 3,800 square feet. Model on Bronco Ridge Drive." },
    ],
    amenities: [
      "The Resort at Amira, with a resort-style pool, sun decks, and shaded verandas",
      "Dog park, yoga studio, and a fitness center",
      "Event lawn, walking trails, and five lakes",
    ],
    schoolDistrict: "Tomball ISD",
    schools:
      "Amira says children attend Tomball ISD. The education page names West Elementary, which opened for the 2024-2025 school year for pre-kindergarten through fourth grade, at 18444 Cypress Heights Drive. The page does not name the intermediate, junior high, or high school. Confirm the full zone with Tomball ISD.",
    sources: [
      { label: "Amira homepage", url: "https://amiratexas.com/" },
      { label: "Amira builders", url: "https://amiratexas.com/builders/" },
      { label: "Amira schools", url: "https://amiratexas.com/education/" },
    ],
    faqs: [
      {
        question: "Who builds in Amira?",
        answer:
          "The Amira site names two builders: Beazer Homes, from the $300s to the $660s, and Perry Homes, from the $300s to the $700s.",
      },
      {
        question: "What school does Amira name?",
        answer:
          "Amira says the community is in Tomball ISD and names West Elementary, opened for 2024-2025. Confirm the rest of the zone with the district.",
      },
      {
        question: "Where is The Resort at Amira?",
        answer:
          "The community describes The Resort at Amira as the recreation complex, with a resort-style pool, a dog park, a yoga studio, a fitness center, and an event lawn. The published address is 20508 Mueschke Road, Tomball, TX 77377.",
      },
    ],
  },
  {
    slug: "oakhill-reserve",
    citySlug: "tomball",
    name: "Oakhill Reserve",
    developer: "Sold by Tri Pointe Homes and Toll Brothers. A single developer is not named on those pages.",
    address: "22514 Pearl Valley Drive, Tomball, TX 77377",
    location:
      "Tri Pointe places Oakhill Reserve near the Grand Parkway in Tomball. Toll Brothers has also used 22414 Decker Prairie Rosehill Road as a community address.",
    summary:
      "Oakhill Reserve is a new Tomball community with Tri Pointe Homes and Toll Brothers both publishing homes. Both say the community is in Tomball ISD.",
    priceNote:
      "Tri Pointe lists homes from the high $300s, with a 50-foot collection from the mid $400s. Toll Brothers lists the Foxtail Collection from $349,995 and the Longleaf Collection from $449,995. An April 2026 Toll Brothers announcement said pricing starts from the upper $300,000s.",
    homes:
      "Tri Pointe: 45-foot plans about 2,128 to 2,931 square feet, and 50-foot plans about 2,391 to 3,289 square feet. Toll Brothers: Foxtail about 1,884 to 3,039 square feet and Longleaf about 2,230 to 3,436 square feet, on 45-foot and 50-foot homesites.",
    builders: [
      { name: "Tri Pointe Homes", detail: "From the high $300s on 45-foot homesites and from the mid $400s on 50-foot homesites. Address 22514 Pearl Valley Drive." },
      { name: "Toll Brothers", detail: "Foxtail Collection from $349,995. Longleaf Collection from $449,995." },
    ],
    amenities: [
      "Toll Brothers' April 2026 opening note describes a resort-style pool, green space, walking and biking trails, pickleball, and a playground",
      "Tri Pointe says the community is planned for recreation and everyday comfort and does not print a separate amenity list",
    ],
    schoolDistrict: "Tomball ISD",
    schools:
      "Tri Pointe and Toll Brothers both say Oakhill Reserve is zoned to Tomball ISD. Neither page names the campus list. Confirm the address with the district.",
    sources: [
      { label: "Tri Pointe Homes", url: "https://www.tripointehomes.com/tx/houston/oakhill-reserve" },
      { label: "Toll Brothers", url: "https://www.tollbrothers.com/luxury-homes-for-sale/Texas/Toll-Brothers-at-Oakhill-Reserve" },
      { label: "Toll Brothers opening note", url: "https://www.tollbrothers.com/blog/toll-brothers-at-oakhill-reserve-tomball-texas-grand-openings" },
    ],
    faqs: [
      {
        question: "Who is selling in Oakhill Reserve?",
        answer:
          "Tri Pointe Homes publishes homes from the high $300s. Toll Brothers publishes the Foxtail Collection from $349,995 and the Longleaf Collection from $449,995.",
      },
      {
        question: "What school district is Oakhill Reserve in?",
        answer: "Both builder pages say Tomball ISD. Confirm the campus for the homesite.",
      },
      {
        question: "What amenities does Toll Brothers describe?",
        answer:
          "The April 2026 opening note lists a resort-style pool, green space, walking and biking trails, pickleball courts, and a playground.",
      },
    ],
  },
  {
    slug: "grand-mason-crossing",
    citySlug: "katy",
    name: "Grand Mason Crossing",
    developer: "Long Lake Ltd",
    address: "5658 Belton Hollow Lane, Katy, TX 77449",
    location:
      "Long Lake publishes 5658 Belton Hollow Lane, Katy, TX 77449, and calls the area Katy/Fulshear. The page says the community is on the east side of the Grand Parkway (Highway 99), about seven miles north of I-10, and minutes from Elyson Town Center and Katy Asian Town. It is not Mason Woods. Mason Woods uses a Cypress address on Mason Woods Road.",
    summary:
      "Grand Mason Crossing is a Long Lake community in Katy. The page lists Katy ISD schools, future amenities, and current inventory from $400,480. Long Lake is the builder. The model lines named on the page are Briarwood, Discovery, Lake Ridge, and Lakewood.",
    priceNote:
      "Current inventory on the Grand Mason Crossing page runs from $400,480. On November 8, 2026 the page listed 5618 Toledo Pines Lane, Plan 264, at $400,480, with $498,325 shown with a line through it, and 5627 Toldeo Pines Lane, Plan 265, at $453,990. Prices change.",
    homes:
      "The page lists homes now for sale on Toledo Pines Lane and Cisco Point Lane. Hours are Monday through Saturday 10 am to 7 pm, and Sunday 12 pm to 7 pm. The page names Crest Management as the HOA contact and lists water service as NW Harris County MUD 12.",
    builders: [
      {
        name: "Long Lake Ltd.",
        detail:
          "Inventory on the community page starts at $400,480 for 5618 Toledo Pines Lane, Plan 264. 5627 Toldeo Pines Lane, Plan 265, is listed at $453,990. Other homes on the same list are in the $410,000s to the $430,000s. Sales office 5658 Belton Hollow Lane, Katy, TX 77449.",
      },
    ],
    amenities: [
      "Future pickleball court",
      "Future playground with shade",
      "Future pavilion seating",
      "Future synthetic turf lawn and landscaped gathering areas",
    ],
    schoolDistrict: "Katy ISD",
    schools:
      "Long Lake says Grand Mason Crossing is in Katy ISD. The page lists McRoberts Elementary at 3535 Fry Rd, Katy, TX 77449, McDonald Junior High at 3635 Lakes of Bridgewater Dr, Katy, TX 77449, and Paetow High School at 23111 Stockdick School Rd, Katy, TX 77493. Confirm the lot with the district.",
    sources: [
      { label: "Grand Mason Crossing", url: "https://www.longlakeltd.com/new-homes/communities/grand-mason-crossing/" },
      {
        label: "Houston Planning staff report, Mason Road",
        url: "https://houstontx.gov/planning/transportation/MTFP_26/PH-Staff-Report-Mason-Road.pdf",
      },
      { label: "TDLR TABS2026000447", url: "https://www.tdlr.texas.gov/TABS/Projects/TABS2026000447" },
      {
        label: "Briarwood Crossing model series",
        url: "https://www.longlakeltd.com/new-homes/communities/briarwood/",
      },
      { label: "Long Lake promotions", url: "https://www.longlakeltd.com/promotions/" },
      {
        label: "Long Lake inventory savings flyer",
        url: "https://www.longlakeltd.com/wp-content/uploads/2026/11/new-homes-promotion-inventory-savings.webp",
      },
      {
        label: "Long Lake Season of Savings flyer",
        url: "https://www.longlakeltd.com/wp-content/uploads/2026/11/new-homes-promotion-pick-rate2.webp",
      },
      {
        label: "Long Lake new-build FHA/VA flyer",
        url: "https://www.longlakeltd.com/wp-content/uploads/2026/10/new-homes-promotion-fha-va-6-5-fixed.webp",
      },
    ],
    faqs: [
      {
        question: "Where is Grand Mason Crossing?",
        answer:
          "The published address is 5658 Belton Hollow Lane, Katy, TX 77449, on the east side of the Grand Parkway. It is a Long Lake community, separate from Mason Woods in Cypress.",
      },
      {
        question: "What do homes in Grand Mason Crossing cost?",
        answer:
          "On November 8, 2026 the community page listed inventory from $400,480, including 5618 Toledo Pines Lane at $400,480 and 5627 Toldeo Pines Lane at $453,990. Confirm the homesite.",
      },
      {
        question: "What schools does Grand Mason Crossing name?",
        answer:
          "Katy ISD. The page lists McRoberts Elementary, McDonald Junior High, and Paetow High School. Confirm the lot with the district.",
      },
      {
        question: "Are the amenities open?",
        answer:
          "The page describes a future amenity area with a pickleball court, shaded playground, pavilion, synthetic turf, and landscaped gathering areas. It does not say that area is open.",
      },
    ],
    directory: {
      intro:
        "Long Lake does not name internal villages or neighborhoods on the Grand Mason Crossing page. Briarwood, Discovery, Lake Ridge, and Lakewood are the model series on that page. The same four series are also printed on Briarwood Crossing in Rosenberg. Mason Woods is a separate community on Mason Woods Road in Cypress.",
      limitation:
        "Checked November 8, 2026: the Long Lake community page, the Long Lake neighborhoods index, the Long Lake communities list, a City of Houston Planning staff report, and a Texas Department of Licensing and Regulation project record. None of those sources gives Grand Mason Crossing a set of named villages. The records below use section numbers. This page does not treat those numbers as neighborhood names, and it does not claim later sections will not be platted. The Houston staff report's table is plats within a quarter mile of a Mason Road study. Elyson, Westfield Village, and the 1,138-acre Grand Mason GP in that table are nearby plans. Grand Mason GP is a separate general plan from Grand Mason Crossing GP.",
      places: [
        {
          name: "Grand Mason Crossing GP",
          group: "Recorded sections",
          kind: "Plat section",
          status: "General plan. 0 lots on the staff-report table.",
          detail: "The Houston Planning staff report lists Grand Mason Crossing GP, cycle 2023-21, as a general plan of 217.52 acres.",
          sourceLabel: "Houston Planning staff report, Mason Road",
          sourceUrl: "https://houstontx.gov/planning/transportation/MTFP_26/PH-Staff-Report-Mason-Road.pdf",
        },
        {
          name: "Grand Mason Crossing Sec 2",
          group: "Recorded sections",
          kind: "Plat section",
          status: "Recorded single-family section. 60 lots.",
          detail: "The same staff report lists Grand Mason Crossing Sec 2, cycle 2024-10, as single-family residential with drainage and detention, 23.31 acres and 60 lots.",
          sourceLabel: "Houston Planning staff report, Mason Road",
          sourceUrl: "https://houstontx.gov/planning/transportation/MTFP_26/PH-Staff-Report-Mason-Road.pdf",
        },
        {
          name: "Section 1 landscape improvements",
          group: "Recorded sections",
          kind: "Plat section",
          status: "Landscape and amenity permit. The record dates the work from January 1, 2026 to May 1, 2026.",
          detail: "TDLR project TABS2026000447 is named Grand Mason Crossing Section 1 Landscape Improvements. The scope lists a sidewalk, site furniture, drainage, a pavilion, a pickleball court, synthetic lawn, a playground, amenity fountains, irrigation, and planting. The record address is W. Little York Rd / Mason Rd, Katy, TX 77449.",
          sourceLabel: "TDLR TABS2026000447",
          sourceUrl: "https://www.tdlr.texas.gov/TABS/Projects/TABS2026000447",
        },
      ],
    },
  },
  {
    slug: "elyson",
    citySlug: "katy",
    name: "Elyson",
    developer: "Brookfield Residential builds in Elyson and the community site is elyson.com.",
    address: "7303 Prairie Lakeshore Lane, Katy, TX 77493",
    location:
      "From the Grand Parkway, exit FM 529 and travel west, then follow Elyson Village Road. FM 529 is north of I-10. The welcome center is 7303 Prairie Lakeshore Lane, Katy, TX 77493.",
    summary:
      "Elyson is a Katy master-planned community north of I-10. The homepage says there are 9 builders and 27 model homes, with new homes from Brookfield Residential and David Weekley starting in the low $300s. Sections west of Peek Road are Katy ISD. Sections east of Peek Road are Cy-Fair ISD.",
    priceNote:
      "The builders page lists Brookfield Residential and Chesmar Homes from the low $300s, Beazer Homes and David Weekley from the mid $300s, and Highland Homes and Toll Brothers from the low to mid $400s. The homepage also says homes from the low $300s.",
    homes:
      "Published size ranges include Brookfield about 1,594 to 3,808 square feet, Chesmar about 1,474 to 4,011 square feet, and Highland collections up to about 4,994 square feet. The homepage describes paired homes, single-family homes, luxury homes, and single-story plans.",
    builders: [
      { name: "Beazer Homes", detail: "About 1,604 to 2,828 square feet, from the mid $300s" },
      { name: "Brookfield Residential", detail: "About 1,594 to 3,808 square feet, from the low $300s" },
      { name: "Chesmar Homes", detail: "About 1,474 to 4,011 square feet, from the low $300s" },
      { name: "David Weekley Homes", detail: "About 1,639 to 2,795 square feet, from the mid $300s" },
      { name: "Highland Homes", detail: "Collections from the low $400s and the mid $400s, with plans up to about 4,994 square feet" },
      { name: "Toll Brothers", detail: "Collections from the mid $400s, about 2,210 to 4,634 square feet and about 2,410 to 3,905 square feet" },
    ],
    amenities: [
      "The homepage describes parks and a new neighborhood where Brookfield and David Weekley models start in the low $300s",
      "A full amenity inventory is not printed on the builders or schools pages reviewed here. Ask at the welcome center which parks and pools are open",
    ],
    schoolDistrict: "Katy ISD west of Peek Road. Cy-Fair ISD east of Peek Road.",
    schools:
      "Elyson says students west of Peek Road attend Katy ISD, including Boudny Elementary, McElwain Elementary, Nelson Junior High, and Freeman High School. Students east of Peek Road attend Cy-Fair ISD. Harmony School of Excellence - Katy, a public charter, is on site and the community says it accepts students from either side. Confirm the lot.",
    sources: [
      { label: "Elyson homepage", url: "https://www.elyson.com/" },
      { label: "Elyson builders", url: "https://www.elyson.com/homes/homebuilders/" },
      { label: "Elyson schools", url: "https://www.elyson.com/schools/" },
    ],
    faqs: [
      {
        question: "Is Elyson north of I-10?",
        answer:
          "Yes. The directions on elyson.com start at the Grand Parkway and FM 529, which is north of Interstate 10. The welcome center is in Katy, TX 77493.",
      },
      {
        question: "Who is building in Elyson?",
        answer:
          "The builders page names Beazer Homes, Brookfield Residential, Chesmar Homes, David Weekley Homes, Highland Homes, and Toll Brothers, with starting prices from the low $300s to the mid $400s. The homepage says the community has 9 builders.",
      },
      {
        question: "Which school district is Elyson in?",
        answer:
          "Elyson says west of Peek Road is Katy ISD and east of Peek Road is Cy-Fair ISD. Named Katy ISD campuses include Boudny Elementary, McElwain Elementary, Nelson Junior High, and Freeman High School.",
      },
    ],
  },
  {
    slug: "cane-island",
    citySlug: "katy",
    name: "Cane Island",
    developer: "Published at caneisland.com. The site does not name a separate development company on the pages reviewed here.",
    address: "2100 Cane Island Parkway, Katy, TX 77493",
    location:
      "Cane Island says it is three minutes from I-10 on Cane Island Parkway, just west of the Grand Parkway and north of I-10.",
    summary:
      "Cane Island is a Katy master-planned community north of I-10. The community says the final sections are selling, with six premier builders, 14 models, and an on-site Katy ISD elementary school.",
    priceNote:
      "The community says move-in ready homes run from the $400s to the millions. The builders page names William David Custom Homes from $1.75 million and up. A community news note has also listed David Weekley homes from the mid $300s on 50-foot homesites and from the mid $400s on 60-foot homesites, and Perry Homes from the $370s. Confirm who is still selling before you visit.",
    homes:
      "The hometown page says buyers can choose floor plans from six builders and that homesites include oversized lots. The Estates section has been described as half-acre custom homesites.",
    builders: [
      { name: "Six premier builders", detail: "The current hometown page says six builders and 14 models, with homes from the $400s to the millions. It does not print all six names in the text." },
      { name: "William David Custom Homes", detail: "From $1.75 million and up, listed on the builders page." },
    ],
    amenities: [
      "The hometown page lists an on-site Katy ISD elementary, a yoga studio, and an on-site restaurant",
      "The builders page points visitors to resort-style amenities at Cane Quarter",
    ],
    schoolDistrict: "Katy ISD",
    schools:
      "Cane Island says it is zoned to Katy ISD. Robertson Elementary is on site at 7400 Innovation Drive, northwest of Cane Island Parkway. The schools page does not name the junior high or high school. Confirm those with Katy ISD.",
    sources: [
      { label: "Cane Island hometown", url: "https://caneisland.com/hometown" },
      { label: "Cane Island builders", url: "https://caneisland.com/homes/builders" },
      { label: "Cane Island schools", url: "https://caneisland.com/schools" },
    ],
    faqs: [
      {
        question: "Is Cane Island north of I-10?",
        answer:
          "Yes. The community site says Cane Island is just west of the Grand Parkway and north of I-10, at 2100 Cane Island Parkway, Katy, TX 77493.",
      },
      {
        question: "What does a new home cost in Cane Island?",
        answer:
          "The community says move-in ready homes run from the $400s to the millions. William David Custom Homes is listed from $1.75 million and up.",
      },
      {
        question: "What school is inside Cane Island?",
        answer:
          "Robertson Elementary, a Katy ISD campus, is on site at 7400 Innovation Drive. Confirm junior high and high school with the district.",
      },
    ],
  },
  {
    slug: "audubon",
    citySlug: "magnolia",
    name: "Audubon",
    developer: "Published at audubonliving.com.",
    address: "40001 Audubon Parkway, Magnolia, TX 77354",
    location:
      "Audubon says it is in the Magnolia extraterritorial jurisdiction in Montgomery County, at SH 249 and FM 1488.",
    summary:
      "Audubon is a Magnolia master-planned community with several districts, homes the FAQ lists from the $270s to $1 million, and Magnolia ISD schools including an on-site elementary.",
    priceNote:
      "The FAQ says new homes run from the $270s to $1 million. The districts page lists Creekside from the high $200s to $1 million and Audubon Park from the high $400s to the $800s and up.",
    homes:
      "Creekside North is described with 40-foot and 50-foot homesites. Audubon Park is described with 60-foot and 70-foot homesites. Creekside South is described with 45-foot, 60-foot patio, and 80-foot homesites.",
    builders: [
      { name: "Creekside North", detail: "The FAQ names Anglia Homes and Smith Douglas Homes on 40-foot and 50-foot homesites. The districts page also names Century Communities, David Weekley, Drees, Newmark, Perry, and Sitterle in the Creekside districts." },
      { name: "Audubon Park", detail: "The FAQ names Drees Custom Homes, Empire, Perry Homes, and Ravenna Homes on 60-foot and 70-foot homesites." },
      { name: "Creekside South", detail: "The FAQ names David Weekley Homes, Drees Custom Homes, Newmark Homes, Perry Homes, and Sitterle Homes." },
    ],
    amenities: [
      "Screech Park in Heron Heights, with a play structure, swings, lawns, and trails",
      "Legacy Park, with oak trees, a play area, picnic spots, and trails",
      "Audubon Park trail and a pond viewing area",
      "Future amenities named on the FAQ include a club amenity center, a resort-style pool, and a kids' pool",
    ],
    schoolDistrict: "Magnolia ISD",
    schools:
      "Audubon says students attend Magnolia ISD. The FAQ lists Audubon Elementary (fall 2024), Magnolia Parkway Elementary, Bear Branch Intermediate, Bear Branch Junior High, and Magnolia High School. Confirm the lot, because the FAQ says the first neighborhoods use that list.",
    sources: [
      { label: "Audubon FAQ", url: "https://audubonliving.com/faq/" },
      { label: "Audubon districts", url: "https://audubonliving.com/districts/" },
    ],
    faqs: [
      {
        question: "Where is Audubon?",
        answer:
          "Audubon publishes 40001 Audubon Parkway, Magnolia, TX 77354, at SH 249 and FM 1488 in Montgomery County.",
      },
      {
        question: "What is the price range?",
        answer:
          "The FAQ says homes run from the $270s to $1 million. District pages break that into a Creekside range from the high $200s and an Audubon Park range from the high $400s.",
      },
      {
        question: "What schools does Audubon name?",
        answer:
          "Magnolia ISD, including Audubon Elementary, Magnolia Parkway Elementary, Bear Branch Intermediate, Bear Branch Junior High, and Magnolia High School.",
      },
    ],
  },
  {
    slug: "colton",
    citySlug: "magnolia",
    name: "COLTON",
    developer: "AIRIA Development",
    address: "42030 Texoma Way, Todd Mission, TX 77316",
    location:
      "The sales address is 42030 Texoma Way, Todd Mission, TX 77316. COLTON says the community spans three counties, with most of it in Montgomery County and smaller portions in Waller and Grimes Counties. Phase 1 is in Montgomery County, inside the extraterritorial jurisdiction of Todd Mission, at SH 249 (Aggie Expressway) and FM 1486. The community facts page says that is about 45 miles from College Station and about 45 miles from downtown Houston. From SH 249 north, exit FM 1486 and go south 0.2 miles. The entrance is on the right.",
    summary:
      "COLTON is a 5,700-acre AIRIA Development community in the Todd Mission area of Montgomery County. The developer says about 11,000 single-family homes are planned at build-out. Phase 1 has about 685 lots and 11 builders. Builder pages start in the $300s. Arroyos Park is set to open in 2026.",
    priceNote:
      "Village Builders lists homes from the $300s. Other builder pages list David Weekley Homes from the $340s and the $550s, Westin Homes from the $390s and the $520s, Beazer Homes from the $420s, Highland Homes from the $420s and the $510s, Perry Homes from the $440s, Coventry Homes from the $510s, Drees Homes from the $590s, J. Patrick Homes from the $770s, Fedrick Harris Estate Homes from the high $870s, and Partners in Building from the $970s. Prices change.",
    homes:
      "About 5,700 acres, with approximately 11,000 single-family homes at build-out. Phase 1 is about 685 lots, 45 to 80 feet wide, with minimum depths starting at 125 feet, and 11 builders. The community page lists 2026 HOA dues of $1,440 per year, managed by Crest Management. It also prints a 2025 combined tax rate of $3.0808 per $100 of valuation and says those rates are estimates to verify.",
    builders: [
      {
        name: "Beazer Homes",
        detail: "55-foot lots, 1,800 to 3,200 square feet, from the $420s. Model home open.",
      },
      {
        name: "Coventry Homes",
        detail: "65-foot lots, 2,600 to 4,100 square feet, from the $510s. Model home open.",
      },
      {
        name: "David Weekley Homes",
        detail:
          "45-foot lots, 1,500 to 2,700 square feet, from the $340s. 65-foot lots, 2,600 to 4,100 square feet, from the $550s. Model homes open.",
      },
      {
        name: "Drees Homes",
        detail: "70-foot lots, 2,800 to 4,600 square feet, from the $590s. Model home open.",
      },
      {
        name: "Highland Homes",
        detail:
          "50-foot lots, 1,600 to 2,900 square feet, and 60-foot lots, 2,400 to 3,700 square feet, from the $420s and the $510s. Model homes open.",
      },
      {
        name: "J. Patrick Homes",
        detail: "70-foot lots, 2,800 to 4,600 square feet, from the $770s. Model home open.",
      },
      {
        name: "Fedrick Harris Estate Homes",
        detail:
          "80-foot lots, 3,500 to 5,750 square feet, from the high $870s. Model home open. The COLTON incentives page did not list a current offer for this builder. Ask Natalie about current incentives.",
      },
      {
        name: "Partners in Building",
        detail: "80-foot lots, 3,500 to 5,750 square feet, from the $970s. Model home open.",
      },
      {
        name: "Perry Homes",
        detail: "55-foot lots, 1,800 to 3,200 square feet, from the $440s.",
      },
      {
        name: "Village Builders",
        detail: "50-foot lots, 1,600 to 2,900 square feet, from the $300s.",
      },
      {
        name: "Westin Homes",
        detail:
          "45-foot lots, 1,500 to 2,700 square feet, from the $390s. 60-foot lots, 2,400 to 3,700 square feet, from the $520s.",
      },
    ],
    amenities: [
      "Phase 1 green space of over 186 acres, with 10-foot-wide hike and bike trails connected to walking trails",
      "Arroyos Park, about 8 acres, set to open in 2026, with W. Blakley Hall, The Welcome Inn, and The Iron Yard 24/7 gym",
      "Planned splash pad, playgrounds, amphitheater, picnic areas, and a fire pit at Arroyos Park",
      "Micro 9-hole disc golf course at Arroyos Park, plus a championship disc golf course by HouckDesign planned through the green space",
    ],
    schoolDistrict: "Magnolia ISD",
    schools:
      "COLTON says students are zoned to Williams Elementary, Magnolia Parkway Intermediate, Magnolia Parkway Junior High, and Magnolia West High School. A COLTON news post says the Magnolia ISD board approved a land exchange for a future elementary site inside COLTON, about 16 acres, after the 2026 bond. The post says the district will set the timing, so that campus is not open. Confirm the lot with Magnolia ISD.",
    sources: [
      { label: "COLTON community facts", url: "https://coltontx.com/community-facts/" },
      { label: "COLTON location", url: "https://coltontx.com/location/" },
      { label: "COLTON amenities", url: "https://coltontx.com/amenities/" },
      { label: "COLTON schools", url: "https://coltontx.com/schools/" },
      {
        label: "Future elementary site",
        url: "https://coltontx.com/future-elementary-school-site-approved-within-colton/",
      },
      { label: "COLTON community HOA and taxes", url: "https://coltontx.com/community/" },
      { label: "COLTON builder incentives", url: "https://coltontx.com/builder-incentives/" },
      { label: "Beazer Homes at COLTON", url: "https://coltontx.com/builders/beazer-homes/" },
      { label: "Coventry Homes at COLTON", url: "https://coltontx.com/builders/coventry-homes/" },
      { label: "David Weekley Homes at COLTON", url: "https://coltontx.com/builders/david-weekley-homes/" },
      { label: "Drees Homes at COLTON", url: "https://coltontx.com/builders/drees-homes/" },
      { label: "Highland Homes at COLTON", url: "https://coltontx.com/builders/highland-homes/" },
      { label: "J. Patrick Homes at COLTON", url: "https://coltontx.com/builders/j-patrick-homes/" },
      { label: "Fedrick Harris Estate Homes at COLTON", url: "https://coltontx.com/builders/fedrick-harris-estate-homes/" },
      { label: "Partners in Building at COLTON", url: "https://coltontx.com/builders/partners-in-building/" },
      { label: "Perry Homes at COLTON", url: "https://coltontx.com/builders/perry-homes/" },
      { label: "Village Builders at COLTON", url: "https://coltontx.com/builders/village-builders/" },
      { label: "Westin Homes at COLTON", url: "https://coltontx.com/builders/westin-homes/" },
    ],
    faqs: [
      {
        question: "Where is COLTON?",
        answer:
          "The published address is 42030 Texoma Way, Todd Mission, TX 77316, at SH 249 and FM 1486. Phase 1 is in Montgomery County, in the extraterritorial jurisdiction of Todd Mission. COLTON says the full community also includes smaller portions in Waller and Grimes Counties, and that the entrance is about 45 miles from College Station and about 45 miles from downtown Houston.",
      },
      {
        question: "What do new homes in COLTON cost?",
        answer:
          "The builder pages start with Village Builders from the $300s. The same pages list ranges up through Partners in Building from the $970s and Fedrick Harris Estate Homes from the high $870s. Those are advertising prices. Confirm the homesite.",
      },
      {
        question: "Which schools does COLTON name?",
        answer:
          "Magnolia ISD. COLTON says current students are zoned to Williams Elementary, Magnolia Parkway Intermediate, Magnolia Parkway Junior High, and Magnolia West High School. A news post says a future elementary site inside COLTON was approved through a land exchange. That campus is not open, and Magnolia ISD sets the schedule.",
      },
      {
        question: "Is Arroyos Park open?",
        answer:
          "COLTON says Arroyos Park is set to open in 2026. The amenities page describes the hall, gym, splash pad, playgrounds, amphitheater, and disc golf as what the park will include.",
      },
    ],
  },
  {
    slug: "balmoral",
    citySlug: "humble",
    name: "Balmoral",
    developer: "A 2023 community brochure identifies Starwood Land.",
    address: "15815 Invergelder Drive, Humble, TX 77346",
    location:
      "Chesmar's Balmoral page places the community in Humble, north of Beltway 8, in the West Lake Houston area. That is north of I-10.",
    summary:
      "Balmoral is a Humble master-planned community still selling homes. Chesmar calls its section a final opportunity and lists Humble ISD. A 2023 brochure describes a Crystal Lagoon and a wider builder list that may have changed.",
    priceNote:
      "Chesmar publishes Balmoral homes from $302,990, about 1,474 to 2,054 square feet. That is Chesmar's section, not a price for every builder.",
    homes:
      "Chesmar describes a courtyard collection and two-story plans. The 2023 brochure listed Brightland Homes, CastleRock Communities, Chesmar Homes, Colina Homes, New Home Co., Lennar, Long Lake, and WB Homes. Treat that roster as the brochure's list, and confirm who still has homes.",
    builders: [
      { name: "Chesmar Homes", detail: "From $302,990. About 1,474 to 2,054 square feet. Model area at 15815 Invergelder Drive. The builder page says final opportunity." },
      { name: "2023 brochure roster", detail: "Brightland, CastleRock, Colina, New Home Co., Lennar, Long Lake, and WB Homes were named with Chesmar in the October 2023 brochure. Confirm who is still selling." },
    ],
    amenities: [
      "The 2023 brochure describes a Crystal Lagoon, sand beach, a 7,500-square-foot clubhouse, fitness center, splash pad, playground, and an infinity-edge pool",
      "Victory Park is described with sports courts and playgrounds",
    ],
    schoolDistrict: "Humble ISD",
    schools:
      "Chesmar lists Humble ISD and names Centennial Elementary, Autumn Ridge Middle School, and Summer Creek High School. The 2023 brochure also mentions Ridge Creek Elementary and a future school. Confirm the address with Humble ISD.",
    sources: [
      { label: "Chesmar Homes at Balmoral", url: "https://www.chesmar.com/texas/houston-new-homes/humble/balmoral/" },
      { label: "2023 Balmoral brochure", url: "https://balmoralhouston.com/wp-content/uploads/2024/12/BAL-23029-Brochure-Update-October-2023_v6-WEB.pdf" },
    ],
    faqs: [
      {
        question: "Is Balmoral still selling new homes?",
        answer:
          "Chesmar's page calls its Balmoral section a final opportunity and still lists homes from $302,990. Other builders named in the 2023 brochure should be confirmed before a tour.",
      },
      {
        question: "What schools does Chesmar list?",
        answer:
          "Humble ISD: Centennial Elementary, Autumn Ridge Middle School, and Summer Creek High School. Confirm the lot.",
      },
      {
        question: "What is the lagoon?",
        answer:
          "The 2023 brochure describes Balmoral's amenity village around a Crystal Lagoon, with a sand beach, clubhouse, splash pad, and an infinity-edge pool.",
      },
    ],
  },
  {
    slug: "enclave-at-newport",
    citySlug: "crosby",
    name: "Enclave at Newport",
    developer: "Davidson Homes, inside the Newport community.",
    address: "16023 Port O Call Street, Crosby, TX 77532",
    location:
      "Davidson Homes places Enclave at Newport just north of the Crosby Freeway, about 25 miles northeast of downtown Houston. Crosby is north of I-10.",
    summary:
      "Enclave at Newport is Davidson Homes' new-home section in Crosby, with access to Newport's clubhouse, golf, and pool. The page names Crosby ISD campuses and shows homes from about $273,990.",
    priceNote:
      "Davidson lists plans from $273,990 and shows a quick move-in at 15919 Port O Call Street for $316,990. Plan sizes run about 1,300 to 2,500 square feet.",
    homes: "Plans with 3 to 4 bedrooms, 2 to 3 bathrooms, and two-car garages, about 1,300 to 2,500 square feet.",
    builders: [
      { name: "Davidson Homes", detail: "From $273,990. About 1,300 to 2,500 square feet. Sales address 16023 Port O Call Street, Crosby, TX 77532." },
    ],
    amenities: [
      "Davidson says residents get access to a clubhouse and golf course, a community pool, a splash pad, tennis courts, and a playground",
      "The page also points to Lake Houston and the San Jacinto River nearby",
    ],
    schoolDistrict: "Crosby ISD",
    schools:
      "Davidson names Newport Elementary School, Crosby Middle School, and Crosby High School. Confirm the address with Crosby ISD.",
    sources: [
      { label: "Davidson Homes, Enclave at Newport", url: "https://www.davidsonhomes.com/states/texas/houston-market-area/crosby/enclave-at-newport/" },
    ],
    faqs: [
      {
        question: "Is this the same as Newport?",
        answer:
          "Enclave at Newport is the Davidson Homes section inside Newport in Crosby. Older Newport sections by other builders have been reported sold out. This page is the section Davidson is selling now.",
      },
      {
        question: "What is the starting price?",
        answer: "Davidson lists plans from $273,990, with a quick move-in example at $316,990.",
      },
      {
        question: "What schools are named?",
        answer: "Crosby ISD: Newport Elementary, Crosby Middle School, and Crosby High School.",
      },
    ],
  },
  {
    slug: "river-ranch-trails",
    citySlug: "dayton",
    name: "River Ranch Trails",
    developer: "Coventry Homes publishes the section inside River Ranch.",
    address: "209 Estelle Court, Dayton, TX 77535",
    location:
      "Coventry places River Ranch Trails in Dayton, in a gated section of River Ranch. Dayton is northeast of Houston and north of I-10.",
    summary:
      "River Ranch Trails is a Dayton new-home section by Coventry Homes, starting at $249,990, with Dayton ISD and access to River Ranch's Angel Lagoon.",
    priceNote:
      "Coventry lists homes starting at $249,990, with plans about 1,480 to 2,587 square feet. A listed quick move-in, the Young plan, was shown at $343,644.",
    homes: "About 1,480 to 2,587 square feet, with plans described as 3 to 5 bedrooms.",
    builders: [
      { name: "Coventry Homes", detail: "Starting at $249,990. About 1,480 to 2,587 square feet. Address 209 Estelle Court, Dayton, TX 77535." },
    ],
    amenities: [
      "Coventry describes Angel Lagoon as a 40-acre lagoon with white sand beaches",
      "Walking trails, parks, and a recreation center",
    ],
    schoolDistrict: "Dayton ISD",
    schools:
      "Coventry says the community is in Dayton ISD and mentions access to local elementary, middle, and high schools. The page does not name the campuses. Confirm the address with the district.",
    sources: [
      { label: "Coventry Homes, River Ranch Trails", url: "https://www.coventryhomes.com/new-homes/tx/dayton/river-ranch-trails/" },
    ],
    faqs: [
      {
        question: "Who builds in River Ranch Trails?",
        answer: "Coventry Homes publishes this section, with homes starting at $249,990.",
      },
      {
        question: "What is Angel Lagoon?",
        answer: "Coventry describes Angel Lagoon as a 40-acre lagoon with white sand beaches inside River Ranch.",
      },
      {
        question: "What school district is it?",
        answer: "Dayton ISD. The builder page does not name the individual campuses. Confirm the lot.",
      },
    ],
  },
  {
    slug: "cross-creek-west",
    citySlug: "fulshear",
    alsoListedOn: ["katy"],
    name: "Cross Creek West",
    developer: "Johnson Development",
    address: "4803 Garden Crest Lane, Fulshear, TX 77441",
    location:
      "The community news page places Cross Creek West on FM 359 and Jordan Road in Fulshear, a few miles from Cross Creek Ranch and Jordan Ranch. The builder directory lists the information center at 4803 Garden Crest Lane.",
    summary:
      "Cross Creek West is a Johnson Development community in Fulshear planned for more than 3,000 homes on 1,258 acres. The builder page lists homes from the $390s, and the schools page places it in Lamar CISD with Haygood Elementary on site.",
    priceNote:
      "The builder directory prints Perry Homes 45-foot homesites from the $390s, Newmark 50-foot from the $430s, Westin 45-foot from the $450s, Coventry 50-foot from the $450s, Village Builders 60-foot from the $470s, Perry 55-foot from the $490s, Westin 55-foot from the $560s, Highland 60-foot from the $580s, Ravenna 60-foot from the $600s, Toll Brothers 65-foot from the $600s, and Highland 70-foot from the $700s.",
    homes:
      "Johnson Development says the 1,258-acre plan is for more than 3,000 homes. The north phase adds 65-, 70-, and 80-foot homesites. The south tract is still selling.",
    builders: [
      { name: "Perry Homes", detail: "45-foot from the $390s at 31506 Wild Yukon Ct. 55-foot from the $490s at 31518 Wild Yukon Court." },
      { name: "Newmark Homes", detail: "50-foot from the $430s at 31514 Wild Yukon Court. A 70-foot model is listed at 32007 Monarch Skies Dr without a from-price on that line." },
      { name: "Westin Homes", detail: "45-foot from the $450s at 31510 Wild Yukon Court. 55-foot from the $560s at 31522 Wild Yukon Ct." },
      { name: "Coventry Homes", detail: "50-foot from the $450s at 31507 Wild Yukon Ct. The page says the model is coming soon to the south tract model home park." },
      { name: "Village Builders", detail: "60-foot from the $470s at 31506 Bramble Hollow Ct." },
      { name: "David Weekley Homes", detail: "65-foot model listed at 32015 Monarch Skies Dr. That line does not print a from-price." },
      { name: "Highland Homes", detail: "60-foot from the $580s at 31523 Wild Yukon Court. 70-foot from the $700s at 32003 Monarch Skies Dr." },
      { name: "Ravenna Homes", detail: "60-foot from the $600s at 31511 Wild Yukon Ct. The page says the model is coming soon." },
      { name: "Toll Brothers", detail: "65-foot from the $600s at 32011 Monarch Skies Dr." },
    ],
    amenities: [
      "Resort-style pool, 3-lane lap pool, kids splash park, tennis or pickleball courts, playground, and fitness center at The Waterhole",
      "Cross Creek Ranch amenities are shared, including the page's count of 35 or more parks, three pools, 60 or more miles of trails, and 400 or more acres of lakes",
      "Coming soon on the amenities page: Zoomies Dog Park, Silly Goose Park, The Links putting green, and Twilight Park",
    ],
    schoolDistrict: "Lamar CISD",
    schools:
      "The schools page lists current campuses as on-site Haygood Elementary, Roberts Middle School, Dean Leaman Junior High, and Fulshear High School. It says a 2026 rezoning note keeps south-tract students at those four schools. Campuses it lists as opening in 2027 are Cantu Elementary, Dresner Middle School, on-site Debbie Urbanski Junior High, and on-site Troy Williams High School. Confirm the lot.",
    sources: [
      { label: "Cross Creek West builders", url: "https://www.crosscreekwesttx.com/fulshear-home-builders" },
      { label: "Cross Creek West schools", url: "https://www.crosscreekwesttx.com/fulshear-schools" },
      { label: "Cross Creek West amenities", url: "https://www.crosscreekwesttx.com/amenities" },
      { label: "Cross Creek West north phase", url: "https://www.crosscreekwesttx.com/news/11223/cross-creek-west-begins-north-phase-of-development" },
      { label: "Cross Creek West builder incentives", url: "https://www.crosscreekwesttx.com/builder-incentives" },
    ],
    faqs: [
      {
        question: "Who builds in Cross Creek West?",
        answer:
          "The builder directory lists Perry Homes, Newmark Homes, Westin Homes, Coventry Homes, Village Builders, David Weekley Homes, Highland Homes, Ravenna Homes, and Toll Brothers, with published from-prices starting at the $390s.",
      },
      {
        question: "What school district is Cross Creek West in?",
        answer:
          "Lamar CISD. The schools page lists on-site Haygood Elementary now, plus Roberts Middle, Dean Leaman Junior High, and Fulshear High. It also lists new campuses opening in 2027. Confirm the address.",
      },
      {
        question: "Can Cross Creek West residents use Cross Creek Ranch amenities?",
        answer:
          "The amenities page says Cross Creek West is part of the Cross Creek Ranch Community Association and that residents have access to amenities in both communities.",
      },
    ],
  },
  {
    slug: "tamarron",
    citySlug: "fulshear",
    alsoListedOn: ["katy"],
    name: "Tamarron",
    developer: "D.R. Horton",
    address: "31730 Barrymoor Trace, Fulshear, TX 77441",
    location:
      "D.R. Horton places Tamarron off Jordan Road and Tamarron Parkway in Fulshear, with access to the Katy Freeway and downtown Fulshear.",
    summary:
      "Tamarron is a D.R. Horton community in Fulshear. The builder page lists homes from $280,990 on 45-, 50-, and 60-foot homesites, in Lamar CISD, with Tamarron Elementary and Slawinski Elementary in the community.",
    priceNote:
      "D.R. Horton lists Tamarron from $280,990. Homes range from 1,535 to 3,188 square feet, with 3 to 5 bedrooms. A listed quick move-in on the same page was shown at $304,990.",
    homes: "About 1,535 to 3,188 square feet, on 45-foot, 50-foot, and 60-foot homesites, one and two stories.",
    builders: [
      {
        name: "D.R. Horton",
        detail: "Tradition Series from $280,990. Sales center at 31730 Barrymoor Trace, Fulshear, TX 77441. About 1,535 to 3,188 square feet.",
      },
    ],
    amenities: [
      "Two recreation centers with a resort-style pool, a competition lap pool, a splash pad, water slides, and fitness centers",
      "Soccer fields, lakes, pickleball, tennis, a playground, and walking trails. The amenities list also says 8 miles of walking trails.",
    ],
    schoolDistrict: "Lamar CISD",
    schools:
      "D.R. Horton says Tamarron is zoned to Lamar Consolidated ISD and that Tamarron Elementary and Slawinski Elementary are in the community. The same page lists Dean Leaman Junior High, Roberts Middle School, and Fulshear High School. Confirm the lot, because nearby sections can differ.",
    sources: [
      { label: "D.R. Horton, Tamarron", url: "https://www.drhorton.com/texas/houston/fulshear/tamarron" },
    ],
    faqs: [
      {
        question: "Who builds in Tamarron?",
        answer: "D.R. Horton publishes Tamarron, with homes from $280,990.",
      },
      {
        question: "Where is the Tamarron sales center?",
        answer: "31730 Barrymoor Trace, Fulshear, TX 77441. The page lists Sunday and Monday 12:00 p.m. to 7:00 p.m., and Tuesday through Saturday 10:00 a.m. to 7:00 p.m.",
      },
      {
        question: "What schools does D.R. Horton list?",
        answer:
          "Tamarron Elementary, Slawinski Elementary, Dean Leaman Junior High, Roberts Middle School, and Fulshear High School, in Lamar CISD. Confirm the address with the district.",
      },
    ],
  },
  {
    slug: "sienna",
    citySlug: "missouri-city",
    name: "Sienna",
    developer: "Johnson Development",
    address: "Missouri City, TX",
    location:
      "The Sienna FAQ places the community in Missouri City, about 25 miles southwest of downtown Houston, with access from Fort Bend Parkway, Highway 6, Beltway 8, and Loop 610.",
    summary:
      "Sienna is a 10,800-acre Johnson Development community in Missouri City. The facts page says homes start from the $250s. The FAQ says prices typically run from the $300s to more than $1 million. Fort Bend ISD campuses are inside the community.",
    priceNote:
      "The facts page says homes from the $250s. The FAQ says prices typically range from the $300s to more than $1 million. The builders page prints Beazer from the $290s and a Toll Brothers ladder from the $380s on 45-foot homesites through from the $850s on 90-foot homesites.",
    homes:
      "The FAQ describes single-family homes, luxury estates, duets, and townhomes. Builder sections on the directory run from about 1,474 square feet in a Chesmar courtyard collection to about 6,092 square feet on Toll Brothers 90-foot homesites.",
    builders: [
      { name: "Beazer Homes", detail: "From the $290s. Signature Collection about 1,610 to 2,572 square feet." },
      { name: "Chesmar Homes", detail: "Courtyard Collection about 1,474 to 2,746 square feet. Chateau Collection about 1,710 to 1,901 square feet. The page also prints from the $330s and from the $400s on the Chesmar block." },
      { name: "David Weekley Homes", detail: "40-foot homesites about 1,592 to 2,502 square feet, with from the $320s printed on that section. 42-foot about 1,544 to 3,073 square feet. 65-foot about 2,564 to 4,537 square feet." },
      { name: "Toll Brothers", detail: "45-foot from the $380s, 50-foot from the $420s, 60-foot from the $540s, 70-foot from the $640s, 80-foot from the $760s, and 90-foot from the $850s." },
      { name: "Newmark Homes", detail: "45-foot about 2,134 to 2,650 square feet. 50-foot about 1,926 to 2,989 square feet, with from the $470s printed beside the 50-foot line." },
      { name: "Westin Homes", detail: "45-foot about 2,599 to 2,800 square feet. 60-foot about 3,429 to 3,800 square feet, with from the $630s printed on the Westin block." },
      { name: "Tri Pointe Homes", detail: "45-foot about 2,125 to 2,688 square feet. 60-foot about 3,039 to 4,091 square feet. 80-foot about 3,799 to 5,344 square feet." },
      { name: "Perry Homes", detail: "50-foot about 2,300 to 3,200 square feet. 55-foot about 2,700 to 3,500 square feet. 60-foot about 2,700 to 3,800 square feet. 65-foot about 3,400 to 4,600 square feet." },
      { name: "Shea Homes", detail: "65-foot about 2,671 to 4,122 square feet. 70-foot about 3,086 to 4,838 square feet." },
      { name: "Highland Homes", detail: "Listed on the builders page, including plans about 3,050 to 3,926 square feet." },
      { name: "J. Patrick Homes", detail: "70-foot homesites about 2,802 to 4,683 square feet, and plans about 3,598 to 5,580 square feet." },
      { name: "Partners in Building", detail: "Named on the Sienna FAQ builder list and on the builders page. The directory block does not print a from-price." },
      { name: "Jamestown Estate Homes", detail: "100-foot homesites on the builders page. The FAQ also names Jamestown Estate Homes." },
    ],
    amenities: [
      "Sawmill Lake Club, Club Sienna, and Camp Sienna, which the FAQ calls a 160-acre sports complex",
      "Pools, fitness centers, tennis, sand volleyball, playgrounds, fishing docks, and trails",
      "Sienna Oaks Amenity Center is described on the FAQ as a future clubhouse, lap pool, playground, and event lawn",
    ],
    schoolDistrict: "Fort Bend ISD",
    schools:
      "The facts page says Sienna is entirely in Fort Bend ISD. Elementary schools it names are Donald Leonetti, Jan Schiff, Sienna Crossing, Scanlan Oaks, and Alyssa Ferguson. Middle schools are Ronald Thornton, Billy Baines, and First Colony. High schools are Almeta Crawford, Hightower, and Ridge Point. Confirm the lot.",
    sources: [
      { label: "Sienna FAQ", url: "https://www.siennatx.com/faq" },
      { label: "Sienna builders", url: "https://www.siennatx.com/builders" },
      { label: "Sienna facts", url: "https://www.siennatx.com/sienna-facts" },
    ],
    faqs: [
      {
        question: "Who builds in Sienna?",
        answer:
          "The Sienna FAQ names Beazer, Chesmar, David Weekley, Highland, J. Patrick, Jamestown Estate Homes, Newmark, Partners in Building, Perry, Shea, Toll Brothers, Tri Pointe, and Westin.",
      },
      {
        question: "What do homes cost in Sienna?",
        answer:
          "The FAQ says prices typically range from the $300s to more than $1 million. The builders page also prints Beazer from the $290s and Toll Brothers from the $380s to from the $850s by homesite width.",
      },
      {
        question: "What school district is Sienna in?",
        answer:
          "Fort Bend ISD. The facts page names Donald Leonetti, Jan Schiff, Sienna Crossing, Scanlan Oaks, and Alyssa Ferguson elementaries, Ronald Thornton, Billy Baines, and First Colony middle schools, and Almeta Crawford, Hightower, and Ridge Point high schools. Confirm the address.",
      },
    ],
  },
  {
    slug: "meridiana",
    citySlug: "manvel",
    name: "Meridiana",
    developer: "Meridiana",
    address: "4003 Meridiana Parkway, Iowa Colony, TX 77583",
    location:
      "The FAQ places Meridiana in Iowa Colony and Manvel, off State Highway 288, about 10 minutes south of Pearland Town Center.",
    summary:
      "Meridiana is a 3,000-acre community in Iowa Colony and Manvel. The FAQ says pricing starts in the $260s and goes past $1 million, with nine builders, Alvin ISD, and on-site Meridiana Elementary, Barbara Bennett Elementary, and Jackie Doucet Caffey Junior High.",
    priceNote:
      "The FAQ form lists Chesmar from the $260s, Imagination Homes from the $300s, Beazer from the $330s, Highland from the $330s, Newmark from the $330s, David Weekley from the $340s, Perry from the $350s, Westin from the $490s, Shea from the $550s, and Drees from the $620s. The same page says pricing starts in the $260s and goes to over $1 million.",
    homes:
      "The FAQ says offerings range from townhomes and 40-foot lots to custom estates on 90-foot lots, with 23 model homes and 9 home builders.",
    builders: [
      { name: "Chesmar Homes", detail: "From the $260s on the FAQ form" },
      { name: "Imagination Homes", detail: "From the $300s on the FAQ form" },
      { name: "Beazer Homes", detail: "From the $330s on the FAQ form" },
      { name: "Highland Homes", detail: "From the $330s on the FAQ form" },
      { name: "Newmark Homes", detail: "From the $330s on the FAQ form" },
      { name: "David Weekley Homes", detail: "From the $340s on the FAQ form" },
      { name: "Perry Homes", detail: "From the $350s on the FAQ form" },
      { name: "Westin Homes", detail: "From the $490s on the FAQ form" },
      { name: "Shea Homes", detail: "From the $550s on the FAQ form" },
      { name: "Drees Custom Homes", detail: "From the $620s on the FAQ form" },
    ],
    amenities: [
      "Oasis Village with a fitness center, family pool, splash pad, lap pool, amphitheater, and conservatory",
      "Adventure Cove with a wave pool, tidal river, island pool, a second fitness center, and a food truck park",
      "The FAQ lists more than 50 miles of trails, Iowa Colony Regional Park, Challenger Park, and two dog parks",
    ],
    schoolDistrict: "Alvin ISD",
    schools:
      "The FAQ says Meridiana is served by Alvin ISD. On-site campuses named there are Meridiana Elementary, Barbara Bennett Elementary, and Jackie Doucet Caffey Junior High. Iowa Colony High School is described as immediately adjacent. Confirm the lot.",
    sources: [
      { label: "Meridiana FAQ", url: "https://meridianatexas.com/frequently-asked-questions/" },
      { label: "Meridiana schools", url: "https://www.meridianatexas.com/schools/" },
    ],
    faqs: [
      {
        question: "Where is the Meridiana information center?",
        answer: "4003 Meridiana Parkway, Iowa Colony, TX 77583. The FAQ lists Monday through Saturday, 10 a.m. to 6 p.m.",
      },
      {
        question: "Who builds in Meridiana?",
        answer:
          "The FAQ names Chesmar, David Weekley, Imagination Homes, Beazer, Drees, Highland, Newmark, Perry, Shea, and Westin, and says buyers can choose among 9 home builders.",
      },
      {
        question: "What school district is Meridiana in?",
        answer:
          "Alvin ISD. The FAQ names Meridiana Elementary, Barbara Bennett Elementary, Jackie Doucet Caffey Junior High, and adjacent Iowa Colony High School.",
      },
    ],
  },
  {
    slug: "pomona",
    citySlug: "manvel",
    name: "Pomona",
    developer: "Hillwood Communities",
    address: "4545 Pomona Parkway, Manvel, TX 77578",
    location:
      "The Pomona FAQ places the community in Manvel, south of Houston off Highway 288, near Pearland Town Center.",
    summary:
      "Pomona is a Hillwood Communities master plan in Manvel. The FAQ names Coventry, David Weekley, Highland, Lennar, and Toll Brothers. The site plan prints section prices from the $240s, and the schools page places the community in Alvin ISD with Pomona Elementary on site.",
    priceNote:
      "The site plan prints Coventry from the $240s to the $310s, Perry and Highland from the $290s to the $360s, Perry and Coventry from the $320s to the $420s, Coventry and Highland from the $380s to the $470s, a gated Toll Brothers section from the $410s to the $500s, Coventry and Toll from the $490s to the $670s, and a Coventry, Highland, and Perry section from the $430s to the $530s.",
    homes: "The site plan groups homes by builder and price band. It does not print a single square-footage range for the whole community.",
    builders: [
      { name: "Coventry Homes", detail: "Named on the FAQ. The site plan shows Coventry in bands from the $240s to the $310s and in higher bands with other builders." },
      { name: "David Weekley Homes", detail: "Named on the Pomona FAQ builder list. The site plan price bands do not print a separate Weekley from-price." },
      { name: "Highland Homes", detail: "Named on the FAQ. The site plan pairs Highland with Perry from the $290s to the $360s and with other builders in higher bands." },
      { name: "Lennar", detail: "Named on the Pomona FAQ builder list." },
      { name: "Toll Brothers", detail: "Named on the FAQ. The site plan shows a gated Toll section from the $410s to the $500s and a Coventry and Toll band from the $490s to the $670s." },
      { name: "Perry Homes", detail: "Named on the site plan with Highland from the $290s to the $360s and in other bands. The FAQ builder list does not include Perry." },
    ],
    amenities: [
      "The FAQ describes pocket parks, a fitness center, a lake with a Fish Camp and The Dock for electric boats, kayaks, and paddleboards",
      "The site plan describes Camp Pomona with a playground, resort-style pools, cabanas, a catering kitchen, an event lawn, and a fitness center",
      "HOA dues are $1,375 per year on the FAQ, including amenity access",
      "The Grove and The Zone are described as amenities in development. The Dock label on the site plan still says Coming Summer 2021.",
    ],
    schoolDistrict: "Alvin ISD",
    schools:
      "The FAQ says Pomona is zoned to Alvin ISD. Pomona Elementary is within walking distance. Rodeo Palms Junior High and Manvel High School are within seven miles. Confirm the lot.",
    sources: [
      { label: "Pomona FAQ", url: "https://www.pomonabyhillwood.com/news/faq" },
      { label: "Pomona site plan", url: "https://www.pomonabyhillwood.com/location/site-plan" },
      { label: "Pomona schools", url: "https://www.pomonabyhillwood.com/location/schools" },
    ],
    faqs: [
      {
        question: "Who builds in Pomona?",
        answer:
          "The FAQ names Coventry Homes, David Weekley Homes, Highland Homes, Lennar, and Toll Brothers. The site plan also names Perry Homes in published price bands.",
      },
      {
        question: "What is the Pomona contact address?",
        answer: "The FAQ lists 4545 Pomona Parkway, Manvel, TX 77578. The site plan header also prints 4714 Orchard Creek Lane, Manvel, TX.",
      },
      {
        question: "What school district is Pomona in?",
        answer: "Alvin ISD. The FAQ names Pomona Elementary, Rodeo Palms Junior High, and Manvel High School.",
      },
    ],
  },
  {
    slug: "riverstone",
    citySlug: "sugar-land",
    alsoListedOn: ["missouri-city"],
    name: "Riverstone",
    developer: "Riverstone",
    address: "18353 University Boulevard, Sugar Land, TX 77479",
    location:
      "The community page describes Riverstone as a Fort Bend County community near Sugar Land. The contact address on the site is 18353 University Boulevard, Sugar Land, TX 77479.",
    summary:
      "Riverstone's site says luxury homes start from the $340s and that the last new homes are now selling. The schools page says residents are served by Fort Bend ISD, including on-site Sullivan Elementary.",
    priceNote:
      "The community page says luxury homes from the $340s. The builders page says Psalms Fine Homes is selling the last newly constructed homes, at 5,200 to 6,200 square feet, and lists 4707 Sunset Circle, Sugar Land, TX 77479. It does not print a dollar price for that home.",
    homes: "Psalms Fine Homes is listed at 5,200 to 6,200 square feet. The virtual tour page, which is still on the site, describes a wider range from the $340,000s to the millions.",
    builders: [
      {
        name: "Psalms Fine Homes",
        detail: "The builders page says these are the last newly constructed homes in Riverstone, 5,200 to 6,200 square feet, at 4707 Sunset Circle, Sugar Land, TX 77479.",
      },
    ],
    amenities: [
      "The virtual tour page lists resort-style pools, neighborhood parks and playgrounds, walking trails, tennis, and catch-and-release fishing",
      "The Club at Riverstone, more than 200 acres of lakes, and another 500 acres of open space and recreation, as printed on that page",
    ],
    schoolDistrict: "Fort Bend ISD",
    schools:
      "The schools page says Riverstone is served by Fort Bend ISD, including Sullivan Elementary on site. The same page discusses Commonwealth Elementary and Fort Settlement Middle School in a 2020 ranking note. Confirm the campus for the lot.",
    sources: [
      { label: "Riverstone community", url: "https://www.riverstone.com/riverstone-community" },
      { label: "Riverstone builders", url: "https://www.riverstone.com/builders" },
      { label: "Riverstone schools", url: "https://www.riverstone.com/schools" },
      { label: "Riverstone virtual tour", url: "https://www.riverstone.com/virtualtour" },
    ],
    faqs: [
      {
        question: "Are new homes still for sale in Riverstone?",
        answer:
          "The builders page says Psalms Fine Homes is now selling the last newly constructed homes in the community, at 5,200 to 6,200 square feet.",
      },
      {
        question: "What school district is Riverstone in?",
        answer: "Fort Bend ISD. The schools page names on-site Sullivan Elementary. Confirm the address with the district.",
      },
      {
        question: "Where is the Riverstone office?",
        answer: "18353 University Boulevard, Sugar Land, TX 77479, as printed on the community site.",
      },
    ],
  },
  ...pass2Communities,
];

export const newHomeCommunities: NewHomeCommunity[] = communities.map((community) => ({
  ...community,
  faqs: [...community.faqs, ...tourFaqs(community.name)],
}));

export function getNewHomeCity(slug: string) {
  return newHomeCities.find((city) => city.slug === slug);
}

export function getNewHomeCommunity(citySlug: string, slug: string) {
  return newHomeCommunities.find((community) => community.citySlug === citySlug && community.slug === slug);
}

export function communitiesForCity(citySlug: string) {
  const primary = newHomeCommunities.filter((community) => community.citySlug === citySlug);
  const linked = newHomeCommunities.filter((community) => community.alsoListedOn?.includes(citySlug));
  return { primary, linked };
}

/** Content date for sitemap lastmod. Not a build clock. */
export const newHomesContentDate = "2026-11-08";

export function newHomePaths() {
  return [
    "/new-homes",
    ...newHomeCities.map((city) => `/new-homes/${city.slug}`),
    ...newHomeCommunities.map((community) => `/new-homes/${community.citySlug}/${community.slug}`),
  ];
}
