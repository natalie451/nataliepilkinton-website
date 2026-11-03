/**
 * New-construction communities for /new-homes.
 * Every fact is taken from a developer, builder, or school page in `sources`.
 * Prices and school zones change. Pages tell buyers to confirm both.
 */

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
  schoolDistrict: string;
  schools: string;
  sources: NewHomeSource[];
  faqs: NewHomeFaq[];
};

const phone = "(832) 863-3468";

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
      "Conroe's largest new-home searches cluster along SH 242 and I-45. This page covers ARTAVIA, Grand Central Park, and Harper's Preserve, plus a link to The Woodlands Hills, which sits in both Conroe and Willis.",
  },
  {
    slug: "montgomery",
    name: "Montgomery",
    headline: "Lake Conroe and FM 2854",
    summary:
      "Montgomery's master-planned new homes sit south of Lake Conroe. Woodforest is the large Johnson Development community. Fairwater is the smaller Forestar community on FM 2854.",
  },
  {
    slug: "willis",
    name: "Willis",
    headline: "I-45 north of Conroe, along FM 830",
    summary:
      "Willis is the north end of this new-home corridor. The Woodlands Hills, a Howard Hughes community, has neighborhoods in both Willis and Conroe and is zoned to Willis ISD.",
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
      "Cypress new construction here means Bridgeland, Towne Lake, and Marvida. Elyson uses a Katy address and has its own page under Katy.",
  },
  {
    slug: "waller",
    name: "Waller",
    headline: "Waller ISD and Waller County, including Hockley and Brookshire",
    summary:
      "The City of Waller is small. The new-home searches that use the Waller name usually mean Waller ISD in Hockley, or Waller County communities sold from Brookshire and the west Katy edge. Dellrose, Sunterra, and Sunterra Lakes are those communities.",
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
    headline: "North of I-10, along FM 529 and the Grand Parkway",
    summary:
      "This page is only the Katy-area master plans north of Interstate 10. Elyson and Cane Island have their own pages. Sunterra and Sunterra Lakes sit north of I-10 and are linked here, with the full pages filed under Waller County.",
  },
  {
    slug: "magnolia",
    name: "Magnolia",
    headline: "SH 249 and FM 1488",
    summary:
      "Audubon is the Magnolia master plan with a current community site that names builders, price bands, and Magnolia ISD campuses.",
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
    slug: "bridgeland",
    citySlug: "cypress",
    name: "Bridgeland",
    developer: "Howard Hughes Communities",
    address: "Model homes use Cypress, TX 77433 addresses",
    location:
      "Bridgeland is in Cypress, in northwest Houston. Howard Hughes describes it as one of the largest communities in that corridor. Model homes on the builder page use Cypress addresses along streets such as Skylark Forest Drive, Medina River Drive, and Linnaeus Lane.",
    summary:
      "Bridgeland is an 11,500-acre Howard Hughes community in Cypress. The homepage cites 250 miles of trails, more than 75 parks, about 90,000 square feet of retail and restaurants, and 70,000 residents at buildout. Villages include Prairieland, Parkland, Creekland, and Bridgeland Central.",
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
      { label: "Builders and model homes", url: "https://www.bridgeland.com/homes/builders-model-homes/" },
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
export const newHomesContentDate = "2026-11-03";

export function newHomePaths() {
  return [
    "/new-homes",
    ...newHomeCities.map((city) => `/new-homes/${city.slug}`),
    ...newHomeCommunities.map((community) => `/new-homes/${community.citySlug}/${community.slug}`),
  ];
}
