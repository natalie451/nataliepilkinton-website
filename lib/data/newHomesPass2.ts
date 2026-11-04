import type { NewHomeCommunity } from "@/lib/data/newHomes";

/** Second pass. Each community has an official builder or developer page with a builder, a from-price, and a school district. */
export const pass2Communities: NewHomeCommunity[] = [
  {
    slug: "jordan-ranch",
    citySlug: "fulshear",
    alsoListedOn: ["katy"],
    name: "Jordan Ranch",
    developer: "Johnson Development",
    address: "30757 Jordan Crossing Blvd, Fulshear, TX 77423",
    location:
      "The Jordan Ranch buying guide places the community just off I-10 in Fulshear, with access to Katy and west Houston. The builder directory lists the office at 30757 Jordan Crossing Blvd.",
    summary:
      "Jordan Ranch is a Johnson Development community in Fulshear, south of I-10. The builder directory says homes run from the $300s to $1 million and up. The schools page places it in Lamar CISD, with Willie Melton Sr. Elementary in the community.",
    priceNote:
      "The builder directory says options run from the $300s to $1 million and up. A Chesmar page prints 55-foot homesites from the $418s. A Lennar page prints 60-foot homesites from the $460s.",
    homes: "The directory describes floor plans from nine builders. It prints seven builder names in the list and a separate Lennar page.",
    builders: [
      { name: "Beazer Homes", detail: "Named on the Jordan Ranch builder directory." },
      { name: "Chesmar Homes", detail: "55-foot homesites from the $418s. Model at 29607 Apple Glen Court, Fulshear, TX 77423." },
      { name: "David Weekley Homes", detail: "Named on the Jordan Ranch builder directory." },
      { name: "Highland Homes", detail: "Named on the Jordan Ranch builder directory." },
      { name: "J. Patrick Homes", detail: "Named on the Jordan Ranch builder directory." },
      { name: "Perry Homes", detail: "Named on the Jordan Ranch builder directory." },
      { name: "Westin Homes", detail: "Named on the Jordan Ranch builder directory." },
      { name: "Lennar", detail: "60-foot homesites from the $460s. Model at 29614 Apple Glen Court, Fulshear, TX 77423." },
    ],
    amenities: [
      "The community site describes resort-style amenities. Confirm which pools and parks are open before you tour.",
    ],
    schoolDistrict: "Lamar CISD",
    schools:
      "The schools page says Jordan Ranch is in Lamar CISD. It names on-site Willie Melton Sr. Elementary, Kathleen Joerger Lindsey Elementary, Roberts Middle School, Leaman Junior High, and Fulshear High School. Confirm the lot.",
    sources: [
      { label: "Jordan Ranch builders", url: "https://www.jordanranchtexas.com/builders/" },
      { label: "Jordan Ranch schools", url: "https://www.jordanranchtexas.com/education/" },
      { label: "Chesmar at Jordan Ranch", url: "https://www.jordanranchtexas.com/builder/chesmar-homes/" },
      { label: "Lennar at Jordan Ranch", url: "https://www.jordanranchtexas.com/builder/lennar-homes-texas/" },
      { label: "Cross Creek West news naming Jordan Ranch", url: "https://www.crosscreekwesttx.com/news/5929/johnson-development-announces-new-master-planned-community-in-fulshear-tx" },
    ],
    faqs: [
      {
        question: "Who builds in Jordan Ranch?",
        answer:
          "The directory names Beazer, Chesmar, David Weekley, Highland, J. Patrick, Perry, and Westin. A separate Lennar page lists 60-foot homesites from the $460s. The directory says there are nine builders.",
      },
      {
        question: "What school district is Jordan Ranch in?",
        answer: "Lamar CISD. The schools page names Willie Melton Sr. Elementary inside the community. Confirm the address.",
      },
      {
        question: "Is Jordan Ranch south of I-10?",
        answer: "The community guide says Jordan Ranch is just off I-10 in Fulshear, with access to Katy. The full page is filed under Fulshear and linked from Katy.",
      },
    ],
  },
  {
    slug: "harvest-green",
    citySlug: "richmond",
    name: "Harvest Green",
    developer: "Johnson Development",
    address: "3400 Harvest Corner Drive, Richmond, TX 77406",
    location: "The builder directory places the model home park on Home Sweet Home Street in Richmond, TX 77406. The contact address is 3400 Harvest Corner Drive.",
    summary:
      "Harvest Green is a Johnson Development community in Richmond. A community news page says homes are priced from the $380,000s. The schools page says students attend Fort Bend ISD.",
    priceNote:
      "The builder directory prints David Weekley 45-foot from the $470s, Perry 45-foot from the $490s, Westin 60-foot from the $700s, Perry 60-foot from the $720s, David Weekley 65-foot from the $670s, Tri Pointe 75-foot from the $900s, and Partners in Building 90-foot from the $1.3 millions. A news page says homes are priced from the $380,000s.",
    homes:
      "The custom-neighborhood news page says Partners in Building homes range from 2,800 to 6,000 square feet on 90-foot homesites. Other sections on the builder directory print their own square-footage ranges.",
    builders: [
      { name: "David Weekley Homes", detail: "45-foot from the $470s, about 1,711 to 2,700 square feet. 65-foot from the $670s, about 2,709 to 4,200 square feet." },
      { name: "Perry Homes", detail: "45-foot from the $490s, about 1,600 to 2,600 square feet. 60-foot from the $720s, about 2,700 to 3,800 square feet." },
      { name: "Westin Homes", detail: "60-foot from the $700s, about 3,427 to 3,800 square feet." },
      { name: "Coventry Homes", detail: "75-foot homesites, about 3,380 to 4,366 square feet. That line does not print a from-price." },
      { name: "Tri Pointe Homes", detail: "75-foot from the $900s, about 3,380 to 4,366 square feet." },
      { name: "Partners in Building", detail: "90-foot from the $1.3 millions, about 2,800 to 6,000 square feet." },
    ],
    amenities: [
      "The community site describes Harvest Green as a farm-to-table community. Confirm which gardens, kitchens, and parks are open on a tour.",
    ],
    schoolDistrict: "Fort Bend ISD",
    schools:
      "The schools page says young students attend Fort Bend ISD. It names Malala Elementary, Neill Elementary, Bowie Middle School, and Travis High School. Confirm the lot.",
    sources: [
      { label: "Harvest Green builders", url: "https://www.harvestgreentexas.com/home-builders" },
      { label: "Harvest Green schools", url: "https://www.harvestgreentexas.com/education" },
      { label: "Harvest Green new section", url: "https://www.harvestgreentexas.com/news/9178/discover-the-bounty-at-harvest-green" },
      { label: "Harvest Green custom section", url: "https://www.harvestgreentexas.com/news/6558/harvest-green-opens-new-custom-home-neighborhood" },
    ],
    faqs: [
      {
        question: "Who builds in Harvest Green?",
        answer:
          "The builder directory lists David Weekley, Perry, Westin, Coventry, Tri Pointe, and Partners in Building, with from-prices starting at the $470s on the 45-foot Weekley line. A news page also names Highland, Newmark, D.R. Horton, and Lennar among 10 builders, with homes from the $380,000s.",
      },
      {
        question: "What school district is Harvest Green in?",
        answer: "Fort Bend ISD. The schools page names Malala Elementary, Neill Elementary, Bowie Middle School, and Travis High School.",
      },
      {
        question: "Where is the Harvest Green office?",
        answer: "3400 Harvest Corner Drive, Richmond, Texas. The phone printed on the site is 832-945-3691.",
      },
    ],
  },
  {
    slug: "briscoe-falls",
    citySlug: "richmond",
    name: "Briscoe Falls",
    developer: "KB Home",
    address: "25403 Tanner Falls Dr., Richmond, TX 77406",
    location:
      "KB Home places the sales office at 25403 Tanner Falls Dr., Richmond, TX 77406, with access from the Westpark Tollway, the Grand Parkway, and I-10.",
    summary:
      "Briscoe Falls is a KB Home community in Richmond. The builder page says homes start from $278,995 and that the community is zoned for Lamar CISD.",
    priceNote: "KB Home lists Briscoe Falls from $278,995. The page says a homesite premium may apply.",
    homes: "KB Home says one- and two-story plans range from 1,675 to 2,980 square feet and offer up to six bedrooms.",
    builders: [
      { name: "KB Home", detail: "From $278,995. Sales office at 25403 Tanner Falls Dr., Richmond, TX 77406. About 1,675 to 2,980 square feet." },
    ],
    amenities: [
      "KB Home says a community park, pavilion, and splash pad are planned",
    ],
    schoolDistrict: "Lamar CISD",
    schools:
      "KB Home says Briscoe Falls is zoned for Lamar CISD, with all schools less than 5 miles away, and that the local high school is across the street. The page does not print the campus names. Confirm the lot.",
    sources: [
      { label: "KB Home, Briscoe Falls", url: "https://www.kbhome.com/new-homes-houston/briscoe-falls" },
    ],
    faqs: [
      {
        question: "Who builds in Briscoe Falls?",
        answer: "KB Home publishes this community, with homes from $278,995.",
      },
      {
        question: "What school district is Briscoe Falls in?",
        answer: "Lamar CISD. KB Home says the schools are less than 5 miles away and that the local high school is across the street. Confirm the address.",
      },
      {
        question: "When is the sales office open?",
        answer:
          "KB Home lists Monday 1:00 p.m. to 6:00 p.m., Tuesday through Saturday 10:00 a.m. to 6:00 p.m., and Sunday 11:00 a.m. to 6:00 p.m.",
      },
    ],
  },
  {
    slug: "veranda",
    citySlug: "richmond",
    name: "Veranda",
    developer: "Johnson Development",
    address: "23323 Pearl Glen Dr., Richmond, TX 77469",
    location:
      "Johnson Development places Veranda near the northwest corner of Richmond Parkway and US 59 in Richmond. The 2022 brochure lists The Cottage House at 23323 Pearl Glen Dr.",
    summary:
      "Veranda is a Johnson Development community in Richmond. The current developer page says homes are priced from the $500s. The 2022 community brochure says students attend Lamar CISD.",
    priceNote:
      "Johnson Development's current community list says townhomes, patio homes, and executive homes are priced from the $500s. The 2022 brochure said homes from the $300s and printed lower builder from-prices. Use the current page for today's starting price and treat the 2022 figures as dated.",
    homes: "The current developer page describes townhomes, patio homes, and executive homes on a 710-acre community.",
    builders: [
      { name: "Builders named in the 2022 brochure", detail: "The 2022 brochure names Perry, Lennar, David Weekley, Highland, Sitterle, Newmark, Westin, and Coventry, with from-prices printed at that time. The current Johnson Development page does not repeat those names. Confirm who is still selling." },
    ],
    amenities: [
      "The 2022 brochure describes streams, greenways, trails, a pool, a playground, and a recreation center. Confirm what is open.",
    ],
    schoolDistrict: "Lamar CISD",
    schools:
      "The 2022 brochure says Veranda students attend Lamar Consolidated ISD. It does not name the campuses. Confirm the lot with the district.",
    sources: [
      { label: "Johnson Development, Veranda", url: "https://www.johnsondevelopment.com/completed_master_planned_communities" },
      { label: "Veranda 2022 brochure", url: "https://www.verandatexas.com/uploads/files/Brochure/0783_VerandaBrochure_2_8_22-compressed_83_.pdf" },
    ],
    faqs: [
      {
        question: "What do new homes cost at Veranda?",
        answer: "Johnson Development's current page says homes are priced from the $500s. A 2022 brochure used a lower from-price. Ask the builder for today's sheet.",
      },
      {
        question: "What school district is Veranda in?",
        answer: "The 2022 brochure says Lamar CISD. Confirm the address with the district.",
      },
      {
        question: "Who is the developer?",
        answer: "Johnson Development. The current page describes a 710-acre community near Richmond Parkway and US 59.",
      },
    ],
  },
  {
    slug: "massey-oaks",
    citySlug: "pearland",
    name: "Massey Oaks",
    developer: "Meritage Homes",
    address: "5004 Redbud Valley Drive, Pearland, TX 77584",
    location: "Meritage places the Massey Oaks Village sales office at 5004 Redbud Valley Drive, Pearland, TX 77584.",
    summary:
      "Massey Oaks is a Meritage Homes community in Pearland. The Village series is priced from $324,590, and the page says the neighborhood is zoned to Alvin ISD.",
    priceNote:
      "The Village page says priced from $324,590. The Premier series page says from the mid $300s. The Estate series page says from the mid $400s and priced from $534,200.",
    homes: "The Village page lists plans from The Callaghan at 1,688 square feet. The Estate page lists larger plans, including The Da Vinci at 3,793 square feet.",
    builders: [
      { name: "Meritage Homes", detail: "Village series from $324,590 at 5004 Redbud Valley Drive. Premier series from the mid $300s. Estate series from the mid $400s, with a page price of $534,200." },
    ],
    amenities: [
      "Meritage describes lakes, parks, and trails at Massey Oaks",
    ],
    schoolDistrict: "Alvin ISD",
    schools: "The Village page says the neighborhood is zoned to Alvin ISD. It does not name the campuses. Confirm the lot.",
    sources: [
      { label: "Meritage, Massey Oaks Village", url: "https://www.meritagehomes.com/state/tx/houston/massey-oaks-village" },
      { label: "Meritage, Massey Oaks Premier", url: "https://www.meritagehomes.com/state/tx/houston/massey-oaks-premier-series" },
      { label: "Meritage, Massey Oaks Estate", url: "https://www.meritagehomes.com/state/tx/houston/massey-oaks-estate-series" },
    ],
    faqs: [
      {
        question: "Who builds in Massey Oaks?",
        answer: "Meritage Homes publishes the Village, Premier, and Estate series in Pearland.",
      },
      {
        question: "What school district is Massey Oaks in?",
        answer: "Alvin ISD, as printed on the Meritage Village page. Confirm the campus for the lot.",
      },
      {
        question: "Is there a current Meritage offer?",
        answer:
          "The Village page banner says a National Sales Event runs November 2 through 15, with a 3.5% introductory rate, 6.266% APR, and $10,000 toward closing costs. The page does not print the year.",
      },
    ],
  },
  {
    slug: "canterra-creek",
    citySlug: "pearland",
    name: "Canterra Creek",
    developer: "LGI Homes",
    address: "2523 Topaz Hill Ln, Arcola, TX 77583",
    location:
      "LGI Homes places the information center at 2523 Topaz Hill Ln, Arcola, TX 77583, and describes the community as near Pearland, off Highway 288.",
    summary:
      "Canterra Creek is an LGI Homes community near Pearland. The builder page says homes start from $300,900 and lists Alvin Independent School District.",
    priceNote: "LGI Homes lists Canterra Creek from $300,900. The page filter shows about 1,375 to 2,594 square feet.",
    homes: "About 1,375 to 2,594 square feet on the LGI page filter.",
    builders: [
      { name: "LGI Homes", detail: "From $300,900. Information center at 2523 Topaz Hill Ln, Arcola, TX 77583." },
    ],
    amenities: [
      "LGI lists a lazy river, pools, a splash pad, a recreation center, an exercise facility, and hike and bike trails",
    ],
    schoolDistrict: "Alvin ISD",
    schools: "The LGI feature list says Alvin Independent School District. It does not name the campuses. Confirm the lot.",
    sources: [
      { label: "LGI Homes, Canterra Creek", url: "https://www.lgihomes.com/texas/houston/canterra-creek" },
    ],
    faqs: [
      {
        question: "Who builds in Canterra Creek?",
        answer: "LGI Homes publishes this community from $300,900. The sales address is in Arcola, and the page markets it near Pearland.",
      },
      {
        question: "What school district is Canterra Creek in?",
        answer: "Alvin ISD, as printed on the LGI feature list. Confirm the campus.",
      },
      {
        question: "Does LGI print a closing-cost offer?",
        answer: "The feature list includes builder-paid closing costs and zero-down options. It does not print a dollar amount.",
      },
    ],
  },
  {
    slug: "westland-ranch",
    citySlug: "league-city",
    name: "Westland Ranch",
    developer: "Forestar",
    address: "League City, TX",
    location:
      "The community site says to take I-45 to League City Parkway, then Maple Leaf Drive. From Galveston, it says exit FM 517 and continue to Magnolia Bayou. It does not print a sales-office street number.",
    summary:
      "Westland Ranch is a Forestar community in League City with new homes priced from the $270,000s. The homepage says the community is in Clear Creek ISD and Santa Fe ISD.",
    priceNote:
      "The homepage says priced from the $270,000s. The homes page shows individual builder prices above that, including a D.R. Horton home at $281,490 in the Lakes section and higher 50-foot homes.",
    homes: "The builders page lists 70-foot homesites and 40-, 50-, and 60-foot homesites.",
    builders: [
      { name: "D.R. Horton", detail: "Named on the Westland Ranch builders page. The homes page shows D.R. Horton listings, including a 40-foot Lakes home at $281,490." },
      { name: "Ashton Woods", detail: "Named on the builders page. The homes page shows an Ashton Woods listing at $429,990." },
      { name: "DRB Homes", detail: "Named on the builders page." },
      { name: "K. Hovnanian Homes", detail: "Named on the builders page." },
      { name: "Chesmar Homes", detail: "Named on the builders page. Chesmar's own Westland Ranch page says starting from $479,990 and Clear Creek ISD." },
    ],
    amenities: [
      "Chesmar's Westland Ranch page lists a pool, lazy river, recreation center, pickleball, a playground, an event lawn, and trails. Confirm which of those are open in the section you are touring.",
    ],
    schoolDistrict: "Clear Creek ISD and Santa Fe ISD",
    schools:
      "The community homepage says Westland Ranch is located in Clear Creek ISD and Santa Fe ISD. Chesmar's page, for its section, says Clear Creek ISD and names Campbell Elementary, Creekside Intermediate, and Clear Springs High School. Confirm the lot, because the two districts are both named.",
    sources: [
      { label: "Westland Ranch", url: "https://westlandranchcommunity.com/" },
      { label: "Westland Ranch builders", url: "https://westlandranchcommunity.com/builders" },
      { label: "Westland Ranch homes", url: "https://westlandranchcommunity.com/homes" },
      { label: "Chesmar, Westland Ranch", url: "https://chesmar.com/communities/westland-ranch/" },
    ],
    faqs: [
      {
        question: "Who builds in Westland Ranch?",
        answer: "The builders page names D.R. Horton, Ashton Woods, DRB Homes, K. Hovnanian Homes, and Chesmar.",
      },
      {
        question: "What school district is Westland Ranch in?",
        answer: "The homepage says Clear Creek ISD and Santa Fe ISD. Confirm the district for the exact lot before you write a contract.",
      },
      {
        question: "What is the starting price?",
        answer: "The homepage says new homes are priced from the $270,000s.",
      },
    ],
  },
  {
    slug: "lago-mar",
    citySlug: "texas-city",
    alsoListedOn: ["dickinson"],
    name: "Lago Mar",
    developer: "Starwood Land",
    address: "13229 Golden Isle Dr, Texas City, TX 77568",
    location:
      "The February 2026 brochure places the information center at 13229 Golden Isle Dr, Texas City, TX 77568, along Interstate 45.",
    summary:
      "Lago Mar is a Starwood Land community in Texas City. The February 2026 brochure says new homes run from the high $200s to the $500s. A community post says students attend Dickinson ISD.",
    priceNote: "The February 2026 brochure says new homes for sale and rent from the high $200s to the $500s.",
    homes: "The homepage says the master plan calls for 4,500 homes on 2,033 acres.",
    builders: [
      { name: "Builders on the homepage", detail: "The homepage names Adams, Ashton Woods, CastleRock, Century Communities, Colina, D.R. Horton, Davidson, LGI, Lennar, M/I Homes, Pulte, Tricoast, and Westin. The February 2026 brochure repeats that selling group." },
    ],
    amenities: [
      "The homepage describes a 12-acre Crystal Lagoons amenity, white sand beach, and the Blue Lagoon Bar and Grill",
      "The brochure describes a resort-style pool, a 3,000-square-foot clubhouse, a fitness center, a playground, and a soccer field",
    ],
    schoolDistrict: "Dickinson ISD",
    schools:
      "A Lago Mar post says young residents attend Lobit Elementary, Lobit Middle, McAdams Junior High, and Dickinson High School in the Dickinson Independent School District. The February 2026 brochure lists Louis G. Lobit Elementary, Elva C. Lobit Middle, McAdams Junior High, and Dickinson High School. Confirm the lot.",
    sources: [
      { label: "Lago Mar", url: "https://lagomarintexascity.com/" },
      { label: "Lago Mar February 2026 brochure", url: "https://lagomarintexascity.com/wp-content/uploads/2026/02/LAGO-25039-Brochure-Developer-Story-Revision_v7_web.pdf" },
      { label: "Lago Mar schools note", url: "https://lagomarintexascity.com/lago-mar-earns-top-award/" },
    ],
    faqs: [
      {
        question: "Who builds in Lago Mar?",
        answer:
          "The homepage names Adams, Ashton Woods, CastleRock, Century, Colina, D.R. Horton, Davidson, LGI, Lennar, M/I, Pulte, Tricoast, and Westin.",
      },
      {
        question: "What school district is Lago Mar in?",
        answer: "Dickinson ISD. The community post names Lobit Elementary, Lobit Middle, McAdams Junior High, and Dickinson High School.",
      },
      {
        question: "Where is the information center?",
        answer: "13229 Golden Isle Dr, Texas City, TX 77568, as printed in the February 2026 brochure.",
      },
    ],
  },
  {
    slug: "grand-oaks",
    citySlug: "mont-belvieu",
    name: "Grand Oaks",
    developer: "Century Communities",
    address: "11319 Old Fashion Circle, Mont Belvieu, TX 77535",
    location: "Century Communities places Grand Oaks at 11319 Old Fashion Circle, Mont Belvieu, TX 77535, about 35 miles from Houston, with access to Baytown.",
    summary:
      "Grand Oaks is a Century Communities neighborhood in Mont Belvieu. The page says homes start from the mid $400s and that children zone to Barbers Hill ISD.",
    priceNote: "The page headline says from the mid $400s. One listed plan on the same page shows from $399,990.",
    homes: "The page shows single-family plans, including a 1,937-square-foot home and a 3,519-square-foot home.",
    builders: [
      { name: "Century Communities", detail: "From the mid $400s. Sales office at 11319 Old Fashion Circle, Mont Belvieu, TX 77535." },
    ],
    amenities: [
      "Century describes scenic ponds and says the community offers no MUD tax",
    ],
    schoolDistrict: "Barbers Hill ISD",
    schools:
      "Century says school-aged children zone to Barbers Hill ISD and names Barbers Hill Elementary, Barbers Hill Middle School, and Barbers Hill High School. The page says to call the district at 281-576-2221 for more detail.",
    sources: [
      { label: "Century Communities, Grand Oaks", url: "https://www.centurycommunities.com/find-your-new-home/texas/houston-metro/mont-belvieu/grand-oaks/" },
    ],
    faqs: [
      {
        question: "Who builds in Grand Oaks?",
        answer: "Century Communities publishes this community from the mid $400s.",
      },
      {
        question: "What school district is Grand Oaks in?",
        answer: "Barbers Hill ISD. Century names Barbers Hill Elementary, Middle School, and High School.",
      },
      {
        question: "Is there a MUD tax?",
        answer: "Century's Grand Oaks page says the community offers no MUD tax.",
      },
    ],
  },
  {
    slug: "riceland",
    citySlug: "mont-belvieu",
    name: "Riceland",
    developer: "Autograph Homes",
    address: "11914 Perch Drive, Mont Belvieu, TX 77523",
    location: "Autograph Homes places Riceland at 11914 Perch Drive, Mont Belvieu, TX 77523, near the Grand Parkway.",
    summary:
      "Riceland is an Autograph Homes community in Mont Belvieu. The page says homes start from the low $300s and lists Barbers Hill Independent School District.",
    priceNote: "Autograph says from the low $300s. The Seuss plan in the Hearth Collection starts from $341,990.",
    homes: "The Hearth Collection is about 1,662 to 2,561 square feet. Autograph says Riceland will hold about 4,500 families when complete.",
    builders: [
      { name: "Autograph Homes", detail: "Hearth Collection from the low $300s. Seuss plan from $341,990. Address 11914 Perch Drive, Mont Belvieu, TX 77523." },
    ],
    amenities: [
      "Autograph describes future retail and community gathering spaces. It does not print a finished amenity list.",
    ],
    schoolDistrict: "Barbers Hill ISD",
    schools:
      "Autograph lists Barbers Hill Independent School District, including the Early Childhood Center, Barbers Hill Elementary School North, Intermediate School North, Middle School North, and Barbers Hill High School. Confirm the lot.",
    sources: [
      { label: "Autograph Homes, Riceland", url: "https://autographhomes.com/community/mont-belvieu/riceland" },
    ],
    faqs: [
      {
        question: "Who builds in Riceland?",
        answer: "Autograph Homes publishes the Hearth Collection from the low $300s.",
      },
      {
        question: "What school district is Riceland in?",
        answer: "Barbers Hill ISD, as printed on the Autograph page.",
      },
      {
        question: "Where is the community?",
        answer: "11914 Perch Drive, Mont Belvieu, TX 77523.",
      },
    ],
  },
  {
    slug: "reserve-at-huntsville",
    citySlug: "huntsville",
    name: "The Reserve at Huntsville",
    developer: "Lennar",
    address: "104 Lantana Lane, Huntsville, TX 77320",
    location: "Lennar lists the community at 104 Lantana Lane, Huntsville, TX 77320.",
    summary:
      "The Reserve at Huntsville is a Lennar community of single-family homes. Lennar lists the community from $186,990 to $232,990. The page does not name a school district.",
    priceNote:
      "Lennar lists the community from $186,990 to $232,990. Plan prices on the page include the Littleton and Ramsey from $224,990, the Oxford from $228,990, and the Newlin from $232,990.",
    homes:
      "Published plans include the Newlin at 1,484 square feet, the Ramsey at 1,676 square feet, the Oxford at 1,716 square feet, and the Littleton at 1,922 square feet.",
    builders: [
      {
        name: "Lennar",
        detail: "From $186,990. Welcome home center at 104 Lantana Lane, Huntsville, TX 77320. Phone 888-671-8175.",
      },
    ],
    amenities: ["Lennar lists a park and a lake or pond"],
    schoolDistrict: "",
    schools: "",
    sources: [
      { label: "Lennar, The Reserve at Huntsville", url: "https://www.lennar.com/new-homes/texas/houston/huntsville/the-reserve-at-huntsville" },
    ],
    faqs: [
      {
        question: "Who builds at The Reserve at Huntsville?",
        answer: "Lennar. The page lists the community from $186,990 to $232,990.",
      },
      {
        question: "What are the welcome home center hours?",
        answer: "Lennar lists Monday through Saturday 10:00 a.m. to 6:00 p.m., and Sunday 12:00 p.m. to 6:00 p.m.",
      },
      {
        question: "Does Lennar name a school district?",
        answer: "No. The Lennar page does not name a school district. Ask Natalie about schools for this community.",
      },
    ],
  },
  {
    slug: "sila",
    citySlug: "huffman",
    name: "Sila",
    developer: "Lennar",
    address: "810 Prunella Lane, Huffman, TX 77336",
    location:
      "Lennar lists the community at 810 Prunella Lane, Huffman, TX 77336. The welcome home center is at 808 Prunella Ln.",
    summary:
      "Sila is a Lennar master-planned community of single-family homes in Huffman. Lennar lists homes from $132,990 to $304,990. The page does not name a school district.",
    priceNote:
      "Lennar lists Sila from $132,990 to $304,990. Collection prices on the page include the Wellton Collection from $132,990, the Cottage Collection from $168,990, and the Watermill Collection from $171,990.",
    homes:
      "Lennar publishes several collections. Named plans include the Kofa at 1,013 square feet and larger plans such as the Littleton at 1,968 square feet.",
    builders: [
      {
        name: "Lennar",
        detail: "From $132,990. Community address 810 Prunella Lane. Welcome home center at 808 Prunella Ln, Huffman, TX 77336. Phone 888-671-8175.",
      },
    ],
    amenities: ["Lennar lists a swimming pool, parks, walking trails, and a pickleball court"],
    schoolDistrict: "",
    schools: "",
    sources: [
      { label: "Lennar, Sila", url: "https://www.lennar.com/new-homes/texas/houston/huffman/sila" },
    ],
    faqs: [
      {
        question: "Who builds in Sila?",
        answer: "Lennar. The page lists homes from $132,990 to $304,990.",
      },
      {
        question: "What amenities does Lennar list?",
        answer: "A swimming pool, parks, walking trails, and a pickleball court.",
      },
      {
        question: "Does Lennar name a school district?",
        answer: "No. The Lennar page does not name a school district. Ask Natalie about schools for this community.",
      },
    ],
  },
];
