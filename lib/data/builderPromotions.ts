/**
 * Current builder promotions, keyed by community slug.
 * Update this file weekly. Pages read it and do not hard-code offers.
 * Only include language printed on that community's or builder's official page.
 * Last checked: November 3, 2026.
 */

export type BuilderPromo = {
  builder: string;
  /** Offer text as published. Do not add terms the source did not print. */
  text: string;
  /** Only when the source prints an end date. */
  expires?: string;
  sourceLabel: string;
  sourceUrl: string;
};

export const promoLastChecked = "November 3, 2026";

export const promoDisclaimer =
  "Promotions change often and are set by the builder; ask Natalie for the latest.";

export const builderPromotions: Record<string, BuilderPromo[]> = {
  artavia: [
    {
      builder: "Chesmar Homes",
      text: "Imagine Happier Bonus on 55-foot lots. The ARTAVIA savings page names this offer and does not print a dollar amount or an end date.",
      sourceLabel: "ARTAVIA builder savings",
      sourceUrl: "https://artaviatx.com/available-homes/builder-savings/",
    },
    {
      builder: "David Weekley Homes",
      text: "Enjoy New Employee Pricing on 45-foot, 50-foot, and 65-foot lots. The ARTAVIA savings page names this offer and does not print a dollar amount or an end date.",
      sourceLabel: "ARTAVIA builder savings",
      sourceUrl: "https://artaviatx.com/available-homes/builder-savings/",
    },
  ],
  "grand-central-park": [
    {
      builder: "Drees Custom Homes",
      text: "Fueling the Future: qualified buyers who build a new home with Drees are eligible to receive a $2,500 Design Center credit.",
      sourceLabel: "Grand Central Park builder incentives",
      sourceUrl: "https://www.grandcentralparktx.com/builder-incentives",
    },
    {
      builder: "Drees Custom Homes",
      text: "Hometown Heroes receive $2,500 towards design options on a new home.",
      sourceLabel: "Grand Central Park builder incentives",
      sourceUrl: "https://www.grandcentralparktx.com/builder-incentives",
    },
    {
      builder: "Drees Custom Homes",
      text: "Spice Up Your Home and Save your Way: up to $50,000 when you purchase a Drees quick move-in or build-to-order home.",
      sourceLabel: "Grand Central Park builder incentives",
      sourceUrl: "https://www.grandcentralparktx.com/builder-incentives",
    },
    {
      builder: "Drees Custom Homes",
      text: "Spice Up Your Home Sales Event: qualified buyers can take advantage of a great rate on a 2-1 buydown option when financing a quick move-in home with First Equity Mortgage. The page does not print the rate.",
      sourceLabel: "Grand Central Park builder incentives",
      sourceUrl: "https://www.grandcentralparktx.com/builder-incentives",
    },
    {
      builder: "Highland Homes",
      text: "Season of Traditions Sales Event. Up to $75,000 to personalize your new home.",
      sourceLabel: "Grand Central Park builder incentives",
      sourceUrl: "https://www.grandcentralparktx.com/builder-incentives",
    },
    {
      builder: "David Weekley Homes",
      text: "Holiday Savings. Receive 7% of the base price of your new home, up to $40,000, in Flex Dollars to use your way.",
      sourceLabel: "Grand Central Park builder incentives",
      sourceUrl: "https://www.grandcentralparktx.com/builder-incentives",
    },
    {
      builder: "Perry Homes",
      text: "Year End Sales Event. Up to $55,000 for a limited time, as flex cash and a 4.99% interest rate, 5.898% APR, on a 7-year ARM. Must close by 12/31/2026.",
      expires: "12/31/2026",
      sourceLabel: "Grand Central Park builder incentives",
      sourceUrl: "https://www.grandcentralparktx.com/builder-incentives",
    },
    {
      builder: "Perry Homes",
      text: "Holiday Home Tour. Visit a Perry model home, tour an available inventory home, and be entered to win a $3,000 Holiday Shopping Spree.",
      sourceLabel: "Grand Central Park builder incentives",
      sourceUrl: "https://www.grandcentralparktx.com/builder-incentives",
    },
  ],
  "harpers-preserve": [],
  woodforest: [
    {
      builder: "Highland Homes",
      text: "Season of Traditions Sales Event. Up to $75,000 to personalize your new home.",
      sourceLabel: "Woodforest builder incentives",
      sourceUrl: "https://www.woodforesttx.com/builder-incentives",
    },
    {
      builder: "Highland Homes",
      text: "Luxury from the ground up. Home features valued up to $25,000 plus $10,000 toward closing costs.",
      sourceLabel: "Woodforest builder incentives",
      sourceUrl: "https://www.woodforesttx.com/builder-incentives",
    },
  ],
  fairwater: [],
  "the-woodlands-hills": [],
  harmony: [],
  "woodsons-reserve": [
    {
      builder: "Tri Pointe Homes",
      text: "Special Rate on the Woodson's Reserve page: FHA 30-year fixed with a 4.875% rate (5.950% APR). No end date is printed.",
      sourceLabel: "Tri Pointe Homes, Woodson's Reserve",
      sourceUrl: "https://www.tripointehomes.com/tx/houston/woodsons-reserve",
    },
    {
      builder: "Tri Pointe Homes",
      text: "Special Rate: conventional 30-year fixed with a 3.99% (5.591% APR) first-year rate. The page shows an estimated payment example for a $600,000 sales price. No end date is printed.",
      sourceLabel: "Tri Pointe Homes, Woodson's Reserve",
      sourceUrl: "https://www.tripointehomes.com/tx/houston/woodsons-reserve",
    },
    {
      builder: "Tri Pointe Homes",
      text: "Special Rate: 4.00% (6.864% APR) first-year rate on a 7/6 ARM with a 2-1 buydown. The page shows an estimated payment example for a $550,000 sales price. No end date is printed.",
      sourceLabel: "Tri Pointe Homes, Woodson's Reserve",
      sourceUrl: "https://www.tripointehomes.com/tx/houston/woodsons-reserve",
    },
    {
      builder: "Tri Pointe Homes",
      text: "Special Rate: 4.00% (6.854% APR) first-year rate on a 7/6 ARM with a 2-1 buydown. The page shows an estimated payment example for a $650,000 sales price. No end date is printed.",
      sourceLabel: "Tri Pointe Homes, Woodson's Reserve",
      sourceUrl: "https://www.tripointehomes.com/tx/houston/woodsons-reserve",
    },
    {
      builder: "Tri Pointe Homes",
      text: "Special Rate: 4.250% (6.789% APR) first-year rate on a conventional jumbo 30-year fixed with a 2/1 buydown. No end date is printed.",
      sourceLabel: "Tri Pointe Homes, Woodson's Reserve",
      sourceUrl: "https://www.tripointehomes.com/tx/houston/woodsons-reserve",
    },
    {
      builder: "Toll Brothers",
      text: "5.49% (5.76% APR) 30-year fixed. Limited time only on select homes. No end date is printed on the community page.",
      sourceLabel: "Toll Brothers, Woodson's Reserve",
      sourceUrl: "https://www.tollbrothers.com/luxury-homes-for-sale/Texas/Woodson's-Reserve",
    },
  ],
  bridgeland: [
    {
      builder: "Howard Hughes Communities",
      text: "$5,000 incentive on new homes for buyers who sign a contract from October 1 to November 30, 2026. Funds may be used toward the price of the home, design center upgrades, or closing costs. The purchase must close by March 31, 2027. Not available for homes in Del Webb Bridgeland. The developer says this can be stacked with participating builder incentives.",
      expires: "Contract by November 30, 2026. Close by March 31, 2027.",
      sourceLabel: "Bridgeland $5,000 offer",
      sourceUrl: "https://www.bridgeland.com/buy-a-new-home-and-receive-5000/",
    },
    {
      builder: "Beazer Homes",
      text: "National sales event through 12/31/26. The Bridgeland incentives page does not print the dollar amount.",
      expires: "12/31/26",
      sourceLabel: "Bridgeland builder incentives",
      sourceUrl: "https://www.bridgeland.com/homes/builder-incentives/",
    },
    {
      builder: "Perry Homes",
      text: "Holiday Home Tour. Visit a model home in any Houston community, tour an available inventory home, and be entered to win a $3,000 holiday shopping spree through 12/6/26.",
      expires: "12/6/26",
      sourceLabel: "Bridgeland builder incentives",
      sourceUrl: "https://www.bridgeland.com/homes/builder-incentives/",
    },
    {
      builder: "Chesmar Homes",
      text: "A New Home for the Holidays. Close by the end of the year and enjoy no HOA fees on your home through 12/31/26.",
      expires: "12/31/26",
      sourceLabel: "Bridgeland builder incentives",
      sourceUrl: "https://www.bridgeland.com/homes/builder-incentives/",
    },
    {
      builder: "DRB Homes",
      text: "Up to $30,000 on select quick move-in homes through 11/30/26.",
      expires: "11/30/26",
      sourceLabel: "Bridgeland builder incentives",
      sourceUrl: "https://www.bridgeland.com/homes/builder-incentives/",
    },
    {
      builder: "Highland Homes",
      text: "Season of Traditions sales event. Up to $50,000 to personalize your new home through 12/31/26.",
      expires: "12/31/26",
      sourceLabel: "Bridgeland builder incentives",
      sourceUrl: "https://www.bridgeland.com/homes/builder-incentives/",
    },
    {
      builder: "Highland Homes",
      text: "Season of Traditions sales event. Up to $75,000 to personalize your new home through 12/31/26.",
      expires: "12/31/26",
      sourceLabel: "Bridgeland builder incentives",
      sourceUrl: "https://www.bridgeland.com/homes/builder-incentives/",
    },
    {
      builder: "Highland Homes",
      text: "Luxury included from the ground up in Bridgeland Central. Home features valued up to $35,200 plus $10,000 toward closing costs through 12/31/26.",
      expires: "12/31/26",
      sourceLabel: "Bridgeland builder incentives",
      sourceUrl: "https://www.bridgeland.com/homes/builder-incentives/",
    },
  ],
  "towne-lake": [],
  marvida: [],
  dellrose: [
    {
      builder: "Empire Homes",
      text: "For a limited time, lock in a 30-year, 4.99% fixed rate on select homes. The Dellrose promotions page does not print an end date.",
      sourceLabel: "Dellrose builder incentives",
      sourceUrl: "https://dellroseliving.com/builders/promotions/",
    },
  ],
  sunterra: [
    {
      builder: "Starlight Homes",
      text: "Through the Starlight Advantage Program, the builder contributes a set amount toward closing costs. The Sunterra article also says Starlight offers options that may allow a purchase with little to no down payment. The page does not print the dollar amount.",
      sourceLabel: "Sunterra, Starlight Homes",
      sourceUrl: "https://sunterratx.com/starlight-makes-home-ownership-possible/",
    },
  ],
  "sunterra-lakes": [
    {
      builder: "Century Communities",
      text: "Financing offer on select homes through Inspire Home Loans. Contract on or before 11/16/2026 and close on or before 11/30/2026. Printed options include an FHA or VA 5/1 ARM at 3.875% for years 1 to 5 (FHA 4.735% APR, VA 4.302% APR), a conventional 7/6 ARM at 4.875% for years 1 to 7 (7.36% APR), and 30-year fixed rates of 5.25% FHA (6.143% APR), 5.25% VA (5.719% APR), or 5.5% conventional (5.775% APR). Sunterra Lakes in Brookshire is on the eligible community list.",
      expires: "Contract by 11/16/2026. Close by 11/30/2026.",
      sourceLabel: "Century Communities Houston financing offer",
      sourceUrl: "https://www.centurycommunities.com/promos/century-communities/texas/houston-metro/financing-offer/?communityLinkID=1073745935",
    },
    {
      builder: "Century Communities",
      text: "Hometown Heroes. First responders, and buyers who show proof of current or former work as a law enforcement officer, first responder, teacher, healthcare worker, or active or retired military, receive up to $1,000 off the sales price. The Sunterra Lakes page links to this Houston offer.",
      expires: "Contract on or before 12/31/2026",
      sourceLabel: "Century Communities Hometown Heroes",
      sourceUrl: "https://www.centurycommunities.com/promos/century-communities/texas/houston-metro/hometown-heroes-houston/?communityLinkID=1073745935",
    },
  ],
  "the-highlands": [
    {
      builder: "Coventry Homes",
      text: "2026 Homeowner Loyalty Program. Receive $2,500 in upgrades when you purchase your new home. No end date is printed.",
      sourceLabel: "The Highlands builder incentives",
      sourceUrl: "https://thehighlands.com/home-builder-incentives/",
    },
    {
      builder: "David Weekley Homes",
      text: "Purchase a select home in the Houston area between October 19 and December 31, 2026 and receive 7% of the base price in flex dollars, up to $40,000, toward a home discount, Design Studio selections, flex options, or financing incentives.",
      expires: "December 31, 2026",
      sourceLabel: "The Highlands builder incentives",
      sourceUrl: "https://thehighlands.com/home-builder-incentives/",
    },
    {
      builder: "David Weekley Homes",
      text: "Same October 19 to December 31, 2026 flex-dollar offer, with financing incentives of up to $20,000 when the loan is from Grace Home Lending.",
      expires: "December 31, 2026",
      sourceLabel: "The Highlands builder incentives",
      sourceUrl: "https://thehighlands.com/home-builder-incentives/",
    },
    {
      builder: "David Weekley Homes",
      text: "50th anniversary offer. Save up to $25,000 in financing incentives and closing cost credits when you purchase a new home in the Houston area between August 21 and December 31, 2026 and finance with Grace Home Lending.",
      expires: "December 31, 2026",
      sourceLabel: "The Highlands builder incentives",
      sourceUrl: "https://thehighlands.com/home-builder-incentives/",
    },
    {
      builder: "Drees Homes",
      text: "Sign a purchase agreement on a quick move-in or build-to-order home between October 1 and November 22, 2026 and save up to $50,000 toward Design Center upgrades, a lower price, or financing incentives, plus up to $10,000 toward closing costs. Quick move-in homes must close by December 22.",
      expires: "Sign by November 22, 2026. Quick move-in close by December 22, 2026.",
      sourceLabel: "The Highlands builder incentives",
      sourceUrl: "https://thehighlands.com/home-builder-incentives/",
    },
    {
      builder: "Drees Homes",
      text: "Hometown Heroes. Active military, veterans, teachers, healthcare workers, firefighters, paramedics, and police officers receive $2,500 toward design options on a new home.",
      sourceLabel: "The Highlands builder incentives",
      sourceUrl: "https://thehighlands.com/home-builder-incentives/",
    },
    {
      builder: "Drees Homes",
      text: "Fueling the Future. Buyers who work in oil, gas, transportation, or manufacturing may qualify for a $2,500 design credit.",
      sourceLabel: "The Highlands builder incentives",
      sourceUrl: "https://thehighlands.com/home-builder-incentives/",
    },
    {
      builder: "Perry Homes",
      text: "Close on your new home by December 31, 2026, and take advantage of up to $55,000 in flex cash along with a 4.99% interest rate (5.178% APR) on a 30-year fixed-rate loan, subject to credit approval, through Parkstone Mortgage or Crestmark Mortgage.",
      expires: "December 31, 2026",
      sourceLabel: "The Highlands builder incentives",
      sourceUrl: "https://thehighlands.com/home-builder-incentives/",
    },
  ],
  "valley-ranch": [],
  "harrington-trails": [
    {
      builder: "D.R. Horton",
      text: "A special incentive for everyday heroes, airline employees, and industrial and transportation workers. Purchase a D.R. Horton home across Houston between January 1 and December 31, 2026 and receive up to $1,000 towards closing costs or an options allowance. This text is on the Harrington Trails community page.",
      expires: "December 31, 2026",
      sourceLabel: "D.R. Horton, Harrington Trails at The Canopies",
      sourceUrl: "https://www.drhorton.com/texas/houston/new-caney/harrington-trails-at-the-canopies",
    },
    {
      builder: "D.R. Horton",
      text: "Limited time opportunity: 5.50% rate available on certain homes. The page says the offer is subject to terms and conditions and does not print an end date.",
      sourceLabel: "D.R. Horton, Harrington Trails at The Canopies",
      sourceUrl: "https://www.drhorton.com/texas/houston/new-caney/harrington-trails-at-the-canopies",
    },
  ],
  "the-canopies": [],
  "pinewood-trails": [
    {
      builder: "LGI Homes",
      text: "The Pinewood Trails page says the Make Your Move National Sales Event is happening now, with interest rates as low as 4.99% (5.864% APR). The linked event page says buyers can save up to $50,000 on select homes toward interest rate incentives, builder-paid closing costs, and included upgrades. The same page says, Closing costs? We've got you covered. Ask your New Home Consultant for details. No end date is printed.",
      sourceLabel: "LGI Homes Make Your Move",
      sourceUrl: "https://www.lgihomes.com/make-your-move",
    },
    {
      builder: "LGI Homes",
      text: "The Pinewood Trails community features list includes builder-paid closing costs. The page does not print the dollar amount.",
      sourceLabel: "LGI Homes, Pinewood Trails",
      sourceUrl: "https://www.lgihomes.com/texas/houston/pinewood-trails",
    },
  ],
  tavola: [],
};

export function promosForCommunity(slug: string) {
  return builderPromotions[slug] ?? [];
}

function namesMatch(builderName: string, promoBuilder: string) {
  const a = builderName.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const b = promoBuilder.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  if (!a || !b) return false;
  return a.includes(b) || b.includes(a);
}

export function promosForBuilder(communitySlug: string, builderName: string) {
  return promosForCommunity(communitySlug).filter((promo) => namesMatch(builderName, promo.builder));
}

/** Offers whose builder name does not match a card, such as a developer incentive. */
export function unmatchedPromos(communitySlug: string, builderNames: string[]) {
  const matched = new Set(builderNames.flatMap((name) => promosForBuilder(communitySlug, name)));
  return promosForCommunity(communitySlug).filter((promo) => !matched.has(promo));
}
