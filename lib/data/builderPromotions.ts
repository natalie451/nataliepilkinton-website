/**
 * Current builder promotions, keyed by community slug.
 * Update this file weekly. Pages read it and do not hard-code offers.
 * Only include language printed on that community's or builder's official page.
 * Last checked: November 9, 2026.
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

export const promoLastChecked = "November 9, 2026";

/** Communities checked on a later date than promoLastChecked. */
const promoLastCheckedByCommunity: Record<string, string> = {
  "grand-mason-crossing": "November 8, 2026",
  redbud: "November 8, 2026",
  stokesbury: "November 8, 2026",
  "the-pines-at-seven-coves": "November 8, 2026",
  "mason-woods": "November 8, 2026",
  "avalon-at-cypress": "November 8, 2026",
};

export function lastCheckedLabel(slug: string) {
  return promoLastCheckedByCommunity[slug] ?? promoLastChecked;
}

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
      text: "New Employee Pricing on 45-foot, 50-foot, and 65-foot lots. The flyer linked from the ARTAVIA savings page says buyers who purchase a select David Weekley home in the Houston area between October 19, 2026 and December 31, 2026 receive 7% of the base price in flex dollars, not to exceed $40,000. Financing incentives in that offer require a loan from Grace Home Lending.",
      expires: "December 31, 2026",
      sourceLabel: "ARTAVIA David Weekley employee pricing flyer",
      sourceUrl:
        "https://artaviatx.com/wp-content/uploads/2026/06/HOU-26-005526-Employee-Pricing-promo-Holiday-Edition_Flyer-12.31.26.pdf",
    },
    {
      builder: "David Weekley Homes",
      text: "Half A Century of Home Sweet Home on 45-foot, 50-foot, and 65-foot lots. The ARTAVIA savings page titles this offer Save up to $25,000. The linked flyer says buyers who purchase between August 21, 2026 and December 31, 2026 and finance with Grace Home Lending receive $20,000 in financing incentives, plus up to an additional $5,000 toward closing and financing costs, for total savings of up to $25,000. The flyer says a buyer is not required to use Grace Home Lending to purchase the home.",
      expires: "December 31, 2026",
      sourceLabel: "ARTAVIA David Weekley 50th anniversary flyer",
      sourceUrl: "https://artaviatx.com/wp-content/uploads/2026/09/DWH-HOU-26-005257-50th-Anniversary_Flyer_HIGH1.pdf",
    },
    {
      builder: "Highland Homes",
      text: "Up to $50,000 to personalize your new home on 50-foot lots. The ARTAVIA savings page does not print an end date.",
      sourceLabel: "ARTAVIA builder savings",
      sourceUrl: "https://artaviatx.com/available-homes/builder-savings/",
    },
    {
      builder: "Highland Homes",
      text: "Up to $75,000 to personalize your new home on 60-foot lots. The ARTAVIA savings page does not print an end date.",
      sourceLabel: "ARTAVIA builder savings",
      sourceUrl: "https://artaviatx.com/available-homes/builder-savings/",
    },
    {
      builder: "J. Patrick Homes",
      text: "Choose Your $20,000 Financing Incentive on 55-foot and 70-foot lots. The linked flyer says the original contract must be accepted by December 31, 2026, on inventory homes and homes to be built, and only if the buyer finances and closes with a J. Patrick Homes preferred lender. The flyer says the money can buy down the interest rate, go toward closing costs, or pay for an interest rate lock. A buyer can use another lender and will not receive this incentive.",
      expires: "December 31, 2026",
      sourceLabel: "ARTAVIA J. Patrick financing flyer",
      sourceUrl: "https://artaviatx.com/wp-content/uploads/2026/06/20K-Financing-Incentives_11.1.2026.pdf",
    },
    {
      builder: "J. Patrick Homes",
      text: "Up to $55,000 in Design Center options on 55-foot lots. The linked flyer says this is for a new home built from the ground up, it cannot be combined with any other offer, and it expires December 31, 2026.",
      expires: "December 31, 2026",
      sourceLabel: "ARTAVIA J. Patrick 55-foot flyer",
      sourceUrl: "https://artaviatx.com/wp-content/uploads/2026/06/JPH-55_Promotion-Flyer_11.1.2026.pdf",
    },
    {
      builder: "J. Patrick Homes",
      text: "Up to $70,000 in Design Center options on 70-foot lots. The linked flyer says this is for a new home built from the ground up, it cannot be combined with any other offer, and it expires December 31, 2026.",
      expires: "December 31, 2026",
      sourceLabel: "ARTAVIA J. Patrick 70-foot flyer",
      sourceUrl: "https://artaviatx.com/wp-content/uploads/2026/06/JPH-70_Promotion-Flyer.11.1.2026.pdf",
    },
    {
      builder: "Perry Homes",
      text: "Year End Sales Event on 45-foot, 50-foot, and 55-foot lots. The ARTAVIA savings page titles the offer Up to $55,000. The linked flyer says up to $55,000 in flex cash and a 4.99% interest rate (5.898% APR) on a 7-year ARM, and the home must close by 12/31/26.",
      expires: "12/31/26",
      sourceLabel: "ARTAVIA Perry Year End flyer",
      sourceUrl: "https://artaviatx.com/wp-content/uploads/2026/06/PH_YearEndSalesEvent_2026_Flyer_325150_HOU_Green.pdf",
    },
    {
      builder: "Ravenna Homes",
      text: "Christmas tree, family photo shoot, and a 4.75% interest rate on 70-foot lots. The linked flyer says 4.75% (5.977% APR) on a conventional 7/6 ARM, a 10-foot Christmas tree, and a family photo shoot on select inventory homes. The contract must be written between 11/02/2026 and 12/31/2026 and must close within 30 days. The example uses a 740 credit score and 25% down.",
      expires: "Contract by 12/31/2026. Close within 30 days.",
      sourceLabel: "ARTAVIA Ravenna holiday flyer",
      sourceUrl: "https://artaviatx.com/wp-content/uploads/2026/06/Seeing-is-Believing-2026.pdf",
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
    {
      builder: "Perry Homes",
      text: "Year End Sales Event. Up to $55,000 in flex cash and a 4.99% interest rate (5.898% APR, 7-year ARM) through 12/31/26.",
      expires: "12/31/26",
      sourceLabel: "Bridgeland builder incentives",
      sourceUrl: "https://www.bridgeland.com/homes/builder-incentives/",
    },
    {
      builder: "Ravenna Homes",
      text: "A Magical Christmas, On Us. A special 4.75% financing rate (5.977% APR), plus a 10-foot Christmas tree and family photo shoot on select inventory homes through 12/31/26.",
      expires: "12/31/26",
      sourceLabel: "Bridgeland builder incentives",
      sourceUrl: "https://www.bridgeland.com/homes/builder-incentives/",
    },
    {
      builder: "Newmark Homes",
      text: "Signature Series. Up to $95,000 in flex spending on to-be-built homes through 11/30/26.",
      expires: "11/30/26",
      sourceLabel: "Bridgeland builder incentives",
      sourceUrl: "https://www.bridgeland.com/homes/builder-incentives/",
    },
    {
      builder: "Newmark Homes",
      text: "Portrait Series. Up to $50,000 in flex spending and The Newmark Store on to-be-built homes through 11/30/26.",
      expires: "11/30/26",
      sourceLabel: "Bridgeland builder incentives",
      sourceUrl: "https://www.bridgeland.com/homes/builder-incentives/",
    },
    {
      builder: "Newmark Homes",
      text: "Artisan Series. Up to $50,000 in flex spending and The Newmark Store on to-be-built homes through 11/30/26.",
      expires: "11/30/26",
      sourceLabel: "Bridgeland builder incentives",
      sourceUrl: "https://www.bridgeland.com/homes/builder-incentives/",
    },
    {
      builder: "Century Communities",
      text: "Hometown Heroes. First responders, and buyers who show proof of current or former work as a law enforcement officer, first responder, teacher, healthcare worker, or active or retired military, receive up to $1,000 off the sales price. The Century Bridgeland page links to this Houston offer.",
      expires: "Contract on or before 12/31/2026",
      sourceLabel: "Century Communities Hometown Heroes",
      sourceUrl:
        "https://www.centurycommunities.com/promos/century-communities/texas/houston-metro/hometown-heroes-houston/",
    },
    {
      builder: "Century Communities",
      text: "Tour for a chance to win $10,000 from Wayfair. The official rules say one $10,000 Wayfair gift card will be given away by a random drawing. To be entered, tour a Century Communities or Century Complete home on or between November 4, 2026 and November 30, 2026. No purchase is necessary. The card is for Wayfair merchandise only.",
      expires: "Tour by November 30, 2026",
      sourceLabel: "Century Communities Wayfair tour drawing",
      sourceUrl: "https://www.centurycommunities.com/promos/national/2026-wayfair-black-friday-10k/",
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
    {
      builder: "Empire Homes",
      text: "Empire Heroes Program. Armed forces, police officers, firefighters, paramedics, teachers, and nurses receive a $1,000 discount off the base price of a new Empire home. For every home purchased, Empire will make a donation to HomeAid Houston. The Dellrose promotions page does not print an end date.",
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
      text: "Hometown Heroes. First responders, and buyers who show proof of current or former work as a law enforcement officer, first responder, teacher, healthcare worker, or active or retired military, receive up to $1,000 off the sales price. The Sunterra Lakes page links to this Houston offer.",
      expires: "Contract on or before 12/31/2026",
      sourceLabel: "Century Communities Hometown Heroes",
      sourceUrl: "https://www.centurycommunities.com/promos/century-communities/texas/houston-metro/hometown-heroes-houston/?communityLinkID=1073745935",
    },
    {
      builder: "Century Communities",
      text: "Tour for a chance to win $10,000 from Wayfair. The Sunterra Lakes page links to this drawing. The official rules say one $10,000 Wayfair gift card will be given away by a random drawing. To be entered, tour a Century Communities or Century Complete home on or between November 4, 2026 and November 30, 2026. No purchase is necessary. The card is for Wayfair merchandise only.",
      expires: "Tour by November 30, 2026",
      sourceLabel: "Century Communities Wayfair tour drawing",
      sourceUrl:
        "https://www.centurycommunities.com/promos/national/2026-wayfair-black-friday-10k/?communityLinkID=1073745935",
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
    {
      builder: "Drees Homes",
      text: "Sign a purchase agreement on a quick move-in home between October 1 and November 22, 2026 and close by December 22 to use a 2-1 buydown starting at 4.625% (6.713% APR) in year one, 5.625% in year two, and 6.625% for years 3 through 30.",
      expires: "Sign by November 22, 2026. Close by December 22, 2026.",
      sourceLabel: "The Highlands builder incentives",
      sourceUrl: "https://thehighlands.com/home-builder-incentives/",
    },
    {
      builder: "Perry Homes",
      text: "Close on your new home by December 31, 2026 and receive up to $55,000 in flex cash plus a 4.99% interest rate (5.898% APR) on a 7-year ARM, subject to credit approval.",
      expires: "December 31, 2026",
      sourceLabel: "The Highlands builder incentives",
      sourceUrl: "https://thehighlands.com/home-builder-incentives/",
    },
    {
      builder: "Partners in Building",
      text: "Between November 1 and December 31, 2026, receive a $30,000 Design Center incentive on to-be-built custom homes across Greater Houston, plus save on select move-in ready custom homes, with price reductions ranging from $20,000 to $50,000 and up to $200,000 off the Sienna model home. The Highlands incentives page prints the Sienna model home in this offer.",
      expires: "December 31, 2026",
      sourceLabel: "The Highlands builder incentives",
      sourceUrl: "https://thehighlands.com/home-builder-incentives/",
    },
    {
      builder: "Ravenna Homes",
      text: "Purchase a select inventory home between November 2 and December 31, 2026 and close within 30 days to receive a financing rate of 4.75% (5.977% APR) on a 7/6 ARM, plus a 10-foot Christmas tree and a family photo shoot.",
      expires: "Contract by December 31, 2026. Close within 30 days.",
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
  "the-trails": [],
  "falls-at-imperial-oaks": [],
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
    {
      builder: "LGI Homes",
      text: "3.99% interest rate. For a limited time, an interest rate as low as 3.99% (5.566 APR) exclusively in Houston area communities. The Pinewood Trails page prints the APR without a percent sign and does not print an end date. The button links to the Make Your Move page.",
      sourceLabel: "LGI Homes, Pinewood Trails",
      sourceUrl: "https://www.lgihomes.com/texas/houston/pinewood-trails",
    },
  ],
  tavola: [],
  "massey-oaks": [
    {
      builder: "Meritage Homes",
      text: "National Sales Event, November 2-15. 3.5% introductory rate (6.266% APR) plus $10,000 toward closing costs. The page does not print the year.",
      expires: "November 15",
      sourceLabel: "Meritage, Massey Oaks Village",
      sourceUrl: "https://www.meritagehomes.com/state/tx/houston/massey-oaks-village",
    },
  ],
  "canterra-creek": [
    {
      builder: "LGI Homes",
      text: "The feature list includes builder-paid closing costs, no down payment required, and zero down options. The page does not print a dollar amount.",
      sourceLabel: "LGI Homes, Canterra Creek",
      sourceUrl: "https://www.lgihomes.com/texas/houston/canterra-creek",
    },
    {
      builder: "LGI Homes",
      text: "3.99% interest rate. For a limited time, an interest rate as low as 3.99% (5.566 APR) exclusively in Houston area communities. The Canterra Creek page prints the APR without a percent sign and does not print an end date. The button links to the Make Your Move page.",
      sourceLabel: "LGI Homes, Canterra Creek",
      sourceUrl: "https://www.lgihomes.com/texas/houston/canterra-creek",
    },
  ],
  colton: [
    {
      builder: "Beazer Homes",
      text: "National Sales Event on the Beazer COLTON page. Rates as low as 2.99% (5.959% APR) through November 30, when financing through Jet HomeLoans. The page does not print the year on that date.",
      sourceLabel: "Beazer Homes at COLTON",
      sourceUrl: "https://www.beazer.com/houston-TX/todd-mission/colton",
    },
    {
      builder: "Beazer Homes",
      text: "The flyer linked from the COLTON incentives page shows an FHA 2/1 buydown example on a $400,000 purchase price: 2.99% in year 1, 3.99% in year 2, and 4.99% in years 3 to 30, each at 5.959% APR. It says the offer is for select homesites on loans closed on or before December 31, 2026, and that the incentive requires financing with Jet HomeLoans.",
      expires: "Close by December 31, 2026",
      sourceLabel: "COLTON Beazer sales event flyer",
      sourceUrl: "https://coltontx.com/wp-content/uploads/2026/11/National-Sales-Event-with-Interest-Rate-offer.pdf",
    },
    {
      builder: "Coventry Homes",
      text: "Hometown Heroes. $2,000 in options for currently serving or retired U.S. military, and for currently active firefighters, nurses, teachers, doctors, EMTs, and police officers, on a new Coventry home in the Houston area. Original contract dates run from January 1, 2026 through December 31, 2026. The flyer says this cannot be combined with the Homeowner Loyalty promotion.",
      expires: "December 31, 2026",
      sourceLabel: "COLTON Coventry Hometown Heroes flyer",
      sourceUrl: "https://coltontx.com/wp-content/uploads/2026/03/112023-COV_Hometown-Heroes-Flyer_PRINT.pdf",
    },
    {
      builder: "Coventry Homes",
      text: "2026 Homeowner Loyalty Program. $2,500 in free upgrades for a buyer who already owns a Coventry home that was purchased new, not as a resale. The flyer applies to earnest money contracts dated February 2, 2026 through December 31, 2026.",
      expires: "December 31, 2026",
      sourceLabel: "COLTON Coventry Homeowner Loyalty flyer",
      sourceUrl: "https://coltontx.com/wp-content/uploads/2026/09/COV_Homeowner-Loyalty-Flyer-2026.pdf",
    },
    {
      builder: "David Weekley Homes",
      text: "New Employee Pricing. From October 19 through December 31, 2026, 7% of the base price in flex dollars, up to $40,000, on a select David Weekley home in the Houston area. The flyer says flex dollars can go toward a home discount, Design Studio selections, flex options, or financing incentives with Grace Home Lending.",
      expires: "December 31, 2026",
      sourceLabel: "COLTON David Weekley employee pricing flyer",
      sourceUrl: "https://coltontx.com/wp-content/uploads/2026/10/HOU-26-005526-Employee-Pricing-promo-Holiday-Edition_Flyer.pdf",
    },
    {
      builder: "Drees Homes",
      text: "2-1 buydown on a quick move-in home financed with First Equity Mortgage. The flyer prints year 1 at 4.625% (6.713% APR), year 2 at 5.625% (6.713% APR), and years 3 to 30 at 6.625% (6.713% APR). Purchase agreements accepted October 1 through November 22, 2026, and close by December 22, 2026. The example uses a $700,000 sales price.",
      expires: "Sign by November 22, 2026. Close by December 22, 2026.",
      sourceLabel: "COLTON Drees November flyer",
      sourceUrl: "https://coltontx.com/wp-content/uploads/2026/11/NOV-Drees-Ad.pdf",
    },
    {
      builder: "Highland Homes",
      text: "On Colton 50-foot homes, up to $25,000 toward home features and up to $15,000 toward design studio options. Contract on or after October 19, 2026 and on or before December 31, 2026, and close within 12 months. Up to $10,000 more toward title, closing costs, discount points, or prepaids when the loan is from Highland HomeLoans. The COLTON incentives page titles this offer as up to $50,000 to personalize your new home, plus more savings.",
      expires: "Contract by December 31, 2026. Close within 12 months.",
      sourceLabel: "COLTON Highland 50-foot flyer",
      sourceUrl: "https://coltontx.com/wp-content/uploads/2026/10/HOU-2026-0830-Houston-Seasons-of-Traditions-Campaign_FLYER_50K_APPROVED.pdf",
    },
    {
      builder: "Highland Homes",
      text: "On Colton 60-foot homes, up to $25,000 toward design studio options and up to $25,000 toward home features. Same contract window, October 19, 2026 through December 31, 2026, and close within 12 months. Up to $25,000 more toward title, closing costs, discount points, or prepaids when the loan is from Highland HomeLoans. The COLTON incentives page titles this offer as up to $75,000 to personalize your new home, plus more savings.",
      expires: "Contract by December 31, 2026. Close within 12 months.",
      sourceLabel: "COLTON Highland 60-foot flyer",
      sourceUrl: "https://coltontx.com/wp-content/uploads/2026/10/HOU-2026-0830-Houston-Seasons-of-Traditions-Campaign_FLYER_75K_APPROVED-USE.pdf",
    },
    {
      builder: "J. Patrick Homes",
      text: "Through December 31, 2026, $20,000 when you finance and close with a J. Patrick Homes preferred lender. The flyer says the money can buy down the interest rate, go toward closing costs, or pay for an interest rate lock.",
      expires: "December 31, 2026",
      sourceLabel: "COLTON J. Patrick financing flyer",
      sourceUrl: "https://coltontx.com/wp-content/uploads/2026/11/20K-Financing-Incentives_11.1.2026.pdf",
    },
    {
      builder: "J. Patrick Homes",
      text: "$70,000 in Design Center options when you purchase a new home to build from the ground up on 70-foot lots. The flyer says the offer expires December 31, 2026 and cannot be combined with any other offer.",
      expires: "December 31, 2026",
      sourceLabel: "COLTON J. Patrick design center flyer",
      sourceUrl: "https://coltontx.com/wp-content/uploads/2026/11/JPH-70_Promotion-Flyer.11.1.2026.pdf",
    },
    {
      builder: "Partners in Building",
      text: "$30,000 design center incentive on to-be-built custom homes, and discounted pricing on select homes, from November 1 through December 31, 2026 in Greater Houston. The flyer lists 41655 Wendele Way in Colton at $999,950, reduced from $1,049,950.",
      expires: "December 31, 2026",
      sourceLabel: "COLTON Partners in Building sales event flyer",
      sourceUrl: "https://coltontx.com/wp-content/uploads/2026/11/PiB_Houston_Sales_Event_Legal.pdf",
    },
    {
      builder: "Perry Homes",
      text: "Year End Sales Event. Up to $55,000 in flex cash and a 4.99% interest rate (5.898% APR) on a 7-year ARM. The flyer says the home must close by December 31, 2026.",
      expires: "December 31, 2026",
      sourceLabel: "COLTON Perry Year End flyer",
      sourceUrl: "https://coltontx.com/wp-content/uploads/2026/10/PH_YearEndSalesEvent_2026_Flyer_505600_HOU-10.14-scaled.jpg",
    },
    {
      builder: "Perry Homes",
      text: "Holiday Home Tour. Visit a Perry model home in any Houston community, tour an available inventory home, and be entered to win a $3,000 holiday shopping spree. The COLTON event runs from Sunday, November 1 through Sunday, December 6. Model hours on the event page are Monday through Saturday, 10am to 6pm, and Sunday, 12pm to 6pm.",
      expires: "December 6, 2026",
      sourceLabel: "COLTON Perry Holiday Home Tour",
      sourceUrl: "https://coltontx.com/event/perry-homes-holiday-home-tour/",
    },
    {
      builder: "Westin Homes",
      text: "Up to $75,000 in incentives on select move-in-ready inventory homes in COLTON. The flyer says the purchase agreement must be accepted by Westin Homes and the home must close by November 30, 2026.",
      expires: "November 30, 2026",
      sourceLabel: "COLTON Westin Give Thanks flyer",
      sourceUrl: "https://coltontx.com/wp-content/uploads/2026/11/Give-Thanks-COLT.jpg",
    },
  ],
  "cross-creek-west": [
    {
      builder: "Perry Homes",
      text: "Year End Sales Event. Up to 55K flex cash and a 4.99% interest rate for a limited time. The Cross Creek West incentives page does not print an APR or an end date.",
      sourceLabel: "Cross Creek West builder incentives",
      sourceUrl: "https://www.crosscreekwesttx.com/builder-incentives",
    },
    {
      builder: "Highland Homes",
      text: "Season of Traditions Sales Event, printed on the page as Highland Homes 60. Up to 75K to personalize your new home. The page prints an asterisk and does not explain it or print an end date.",
      sourceLabel: "Cross Creek West builder incentives",
      sourceUrl: "https://www.crosscreekwesttx.com/builder-incentives",
    },
    {
      builder: "Newmark Homes",
      text: "Newmark Homes 50. Purchase a to-be-built home from the Artisan Series in November and receive up to $50,000 in flex spending. The page prints an asterisk and does not print the year.",
      sourceLabel: "Cross Creek West builder incentives",
      sourceUrl: "https://www.crosscreekwesttx.com/builder-incentives",
    },
    {
      builder: "Newmark Homes",
      text: "Newmark Homes 70. Purchase a to-be-built Signature Series home in November and receive up to $95,000 in flex spending. The page prints an asterisk and does not print the year.",
      sourceLabel: "Cross Creek West builder incentives",
      sourceUrl: "https://www.crosscreekwesttx.com/builder-incentives",
    },
  ],
  everly: [
    {
      builder: "Perry Homes",
      text: "Year End Sales Event 2026, linked from the Perry Everly page. Purchase a select Perry Homes inventory residence in Houston. The offer is up to $55,000 toward a 7-year / 6-month ARM with an initial rate of 4.99% (5.898% APR) and flex cash. Flex cash and closing costs together are capped at 6% of the contract sales price. The home must close by 12/31/2026. The promotional rate requires financing through Crestmark Mortgage or Parkstone Mortgage. Perry Homes says it is not a lender, and a buyer is not required to use those lenders to purchase the home. The example uses a $500,000 price, 10% down, and a 780 FICO score. The page says that example rate is effective as of 10/7/2026.",
      expires: "12/31/2026",
      sourceLabel: "Perry Homes Year End Sales Event 2026",
      sourceUrl: "https://www.perryhomes.com/promotion/year-end-sales-event-2026/houston",
    },
    {
      builder: "Drees Homes",
      text: "Drees publishes a page titled Special USDA Financing at Everly. It says a qualified buyer may be able to use a USDA loan with no down payment on a new home in Everly, and that the buyer should ask a First Equity Mortgage loan officer. The page does not print a rate, a dollar credit, or an end date. It says the advertised program is for borrowers who meet USDA requirements, and that First Equity Mortgage is not the USDA.",
      sourceLabel: "Drees Homes, Everly USDA financing",
      sourceUrl: "https://www.dreeshomes.com/new-homes-houston/promotions/everly-usda/",
    },
  ],
  evergreen: [
    {
      builder: "Chesmar Homes",
      text: "The Chesmar incentives page, linked from the Evergreen pages, offers 4.999% (5.737% APR) FHA 30-year fixed-rate financing on select homes that close by 12/31/26. Available 10/19/26 through 11/15/26 with financing provided by HomeAmerican Mortgage. The page says Chesmar and HomeAmerican are affiliated, and that a buyer is not required to use HomeAmerican.",
      expires: "Offer window 10/19/26 through 11/15/26. Close by 12/31/26.",
      sourceLabel: "Chesmar Homes incentives",
      sourceUrl: "https://www.chesmar.com/incentives/",
    },
    {
      builder: "Highland Homes",
      text: "The Highland Homes Evergreen page shows a banner that says Up to $50K in Savings. The page does not print an end date, an APR, or which homes qualify.",
      sourceLabel: "Highland Homes, Evergreen",
      sourceUrl: "https://www.highlandhomes.com/houston/conroe/evergreen",
    },
    {
      builder: "Perry Homes",
      text: "Year End Sales Event 2026, linked from the Perry Evergreen page. Purchase a select Perry Homes inventory residence in Houston. The offer is up to $55,000 toward a 7-year / 6-month ARM with an initial rate of 4.99% (5.898% APR) and flex cash. Flex cash and closing costs together are capped at 6% of the contract sales price. The home must close by 12/31/2026. The promotional rate requires financing through Crestmark Mortgage or Parkstone Mortgage. Perry Homes says it is not a lender, and a buyer is not required to use those lenders to purchase the home. The example uses a $500,000 price, 10% down, and a 780 FICO score. The page says that example rate is effective as of 10/7/2026.",
      expires: "12/31/2026",
      sourceLabel: "Perry Homes Year End Sales Event 2026",
      sourceUrl: "https://www.perryhomes.com/promotion/year-end-sales-event-2026/houston",
    },
    {
      builder: "Trilogy Evergreen",
      text: "The Trilogy Evergreen page prints a Founders Circle credit on the collections: $20,000 on the Freedom 35-foot plans, priced from $334,950; $25,000 on the 40-foot plans, priced from $374,950; and $35,000 on the 50-foot plans, priced from $434,950. The page does not print an end date.",
      sourceLabel: "Shea Homes, Trilogy Evergreen",
      sourceUrl: "https://www.sheahomes.com/new-homes/texas/houston-area/conroe/trilogy-evergreen",
    },
    {
      builder: "Trilogy Evergreen",
      text: "Trailblazer Savings. Up to $35,000 in incentives on all new homes, plus 25% off options on select quick move-in homes. The banner prints an asterisk and does not explain it or print an end date.",
      sourceLabel: "Shea Homes, Trilogy Evergreen",
      sourceUrl: "https://www.sheahomes.com/new-homes/texas/houston-area/conroe/trilogy-evergreen",
    },
  ],
  "two-step-farm": [
    {
      builder: "Perry Homes",
      text: "Year End Sales Event 2026, linked from the Perry Two Step Farm page. Purchase a select Perry Homes inventory residence in Houston. The offer is up to $55,000 toward a 7-year / 6-month ARM with an initial rate of 4.99% (5.898% APR) and flex cash. Flex cash and closing costs together are capped at 6% of the contract sales price. The home must close by 12/31/2026. The promotional rate requires financing through Crestmark Mortgage or Parkstone Mortgage. Perry Homes says it is not a lender, and a buyer is not required to use those lenders to purchase the home. The example uses a $500,000 price, 10% down, and a 780 FICO score. The page says that example rate is effective as of 10/7/2026.",
      expires: "12/31/2026",
      sourceLabel: "Perry Homes Year End Sales Event 2026",
      sourceUrl: "https://www.perryhomes.com/promotion/year-end-sales-event-2026/houston",
    },
  ],
  "stewarts-ranch": [
    {
      builder: "Meritage Homes",
      text: "National Sales Event on the Stewart's Ranch page: through November 15, an introductory rate as low as 3.5% (6.266% APR) with a 2/1 buydown, plus up to $10,000 in closing costs, on select Houston-area homes. The Houston disclaimer says the contract must be accepted between November 2, 2026 and November 15, 2026, on a select quick move-in home, and must close on or before 60 days from the contract. If the buyer uses MTH Mortgage and Carefree Title, the rate example is 3.5% in year 1, 4.5% in year 2, and 5.5% after that (6.266% APR), on a 30-year conforming conventional, VA, or FHA owner-occupied loan. The example uses a $400,000 price, an FHA loan, 3.5% down, and a 640+ FICO score. Credits cannot exceed 3% of the base price plus any lot premium. A buyer may use another lender or pay cash, and this promotion does not apply in that case.",
      expires: "Contract November 2, 2026 to November 15, 2026. Close within 60 days of the contract.",
      sourceLabel: "Meritage Homes Houston sales-event disclaimer",
      sourceUrl: "https://www.meritagehomes.com/company/legal/national-sales-event-disclaimers",
    },
  ],
  tamarron: [
    {
      builder: "D.R. Horton",
      text: "A special incentive for everyday heroes, airline employees, and industrial and transportation workers. Purchase a D.R. Horton home across Houston between January 1 and December 31, 2026 and receive up to $1,000 towards closing costs or an options allowance. This text is on the Tamarron community page.",
      expires: "December 31, 2026",
      sourceLabel: "D.R. Horton, Tamarron",
      sourceUrl: "https://www.drhorton.com/texas/houston/fulshear/tamarron",
    },
  ],
  balmoral: [
    {
      builder: "Chesmar Homes",
      text: "The Chesmar Balmoral page shows a banner for 4.999% (5.737% APR) FHA 30-year fixed-rate special financing on select homes. The Chesmar incentives page says the rate is on select homes that close by 12/31/26, available 10/19/26 through 11/15/26, with financing from HomeAmerican Mortgage. Chesmar and HomeAmerican are affiliated, and a buyer is not required to use HomeAmerican.",
      expires: "Offer window 10/19/26 through 11/15/26. Close by 12/31/26.",
      sourceLabel: "Chesmar Homes incentives",
      sourceUrl: "https://www.chesmar.com/incentives/",
    },
  ],
  sienna: [
    {
      builder: "Beazer Homes",
      text: "Biggest savings and lowest prices of the year, with rates as low as 2.99% (5.959% APR) on select quick move-in homes. The Sienna incentives page prints an asterisk and does not print an end date.",
      sourceLabel: "Sienna builder incentives",
      sourceUrl: "https://www.siennatx.com/builder-incentives",
    },
    {
      builder: "Chesmar Homes",
      text: "Imagine Happier Bonus. Upgrade and personalize your new home with fixtures, finishes, and other features. The Sienna incentives page prints an asterisk and does not print a dollar amount or an end date.",
      sourceLabel: "Sienna builder incentives",
      sourceUrl: "https://www.siennatx.com/builder-incentives",
    },
    {
      builder: "J. Patrick Homes",
      text: "Receive $20,000 in financing incentives when you work with a J. Patrick Homes preferred lender. Use it to buy down the interest rate, toward closing costs, or to pay for an interest rate lock. The Sienna incentives page prints an asterisk and does not print an end date.",
      sourceLabel: "Sienna builder incentives",
      sourceUrl: "https://www.siennatx.com/builder-incentives",
    },
    {
      builder: "J. Patrick Homes",
      text: "J. Patrick Homes 70. Purchase a new home to build from the ground up and receive $70,000 in Design Center options. The page prints an asterisk and does not print an end date.",
      sourceLabel: "Sienna builder incentives",
      sourceUrl: "https://www.siennatx.com/builder-incentives",
    },
    {
      builder: "J. Patrick Homes",
      text: "J. Patrick Homes 90. Purchase a new home to build from the ground up and receive $90,000 in Design Center options. The page prints an asterisk and does not print an end date.",
      sourceLabel: "Sienna builder incentives",
      sourceUrl: "https://www.siennatx.com/builder-incentives",
    },
    {
      builder: "Partners in Building",
      text: "Year End Sales Event. Save on select custom homes with a $30,000 Design Center incentive on to-be-built homes only, and discounted pricing on select available homes. The page prints an asterisk and does not print an end date.",
      sourceLabel: "Sienna builder incentives",
      sourceUrl: "https://www.siennatx.com/builder-incentives",
    },
    {
      builder: "Perry Homes",
      text: "Year End Sales Event. Up to $55,000 for a limited time, as flex cash and a 4.99% interest rate, 5.898% APR, on a 7-year ARM. Must close by 12/31/2026.",
      expires: "12/31/2026",
      sourceLabel: "Sienna builder incentives",
      sourceUrl: "https://www.siennatx.com/builder-incentives",
    },
  ],
  "harvest-green": [
    {
      builder: "Perry Homes",
      text: "Year End Sales Event. Up to $55,000 for a limited time, as flex cash and a 4.99% interest rate (5.898% APR). The Harvest Green incentives page does not print an ARM term or an end date.",
      sourceLabel: "Harvest Green builder incentives",
      sourceUrl: "https://www.harvestgreentexas.com/builderincentives",
    },
    {
      builder: "Partners in Building",
      text: "Year End Sales Event on 90-foot homes. $30,000 Design Center incentive on to-be-built custom homes through the end of the year. The page does not print the year.",
      sourceLabel: "Harvest Green builder incentives",
      sourceUrl: "https://www.harvestgreentexas.com/builderincentives",
    },
  ],
  "jordan-ranch": [
    {
      builder: "Chesmar Homes",
      text: "Imagine Happier Bonus. Personalize a new home with fixtures, finishes, and other features. The linked flyer says the buyer can choose items worth up to 15 points, and Chesmar will include or upgrade them at no additional cost at any Houston-area community. Purchase agreements must be accepted between August 14, 2026 and December 31, 2026. The flyer does not print a dollar amount.",
      expires: "December 31, 2026",
      sourceLabel: "Jordan Ranch Chesmar Imagine Happier flyer",
      sourceUrl:
        "https://www.jordanranchtexas.com/wp-content/uploads/2024/07/Incentive-332-CHESMAR-Imagine-Happier-Bonus-flyer-AugDec2026.pdf",
    },
    {
      builder: "Beazer Homes",
      text: "Biggest savings and lowest prices of the year, with rates as low as 2.99% (5.959% APR) on select quick move-in homes. The linked flyer shows an FHA 2/1 buydown example on a $400,000 purchase price: 2.99% in year 1, 3.99% in year 2, and 4.99% in years 3 to 30, each at 5.959% APR. The offer is for select homesites on loans closed on or before December 31, 2026, and the incentive requires financing with Jet HomeLoans. A buyer is not required to use Jet to purchase the home.",
      expires: "Close by December 31, 2026",
      sourceLabel: "Jordan Ranch Beazer sales event flyer",
      sourceUrl:
        "https://www.jordanranchtexas.com/wp-content/uploads/2024/07/Incentive-844-BEAZER-Q4FY26-Sales-Event-Houston-Flyer-OctNov2026.pdf",
    },
    {
      builder: "Perry Homes",
      text: "Holiday Home Tour. Visit a Perry model home, tour an available inventory home, and be entered to win a $3,000 holiday shopping spree. The linked flyer says visits run from Sunday, November 1 through Sunday, December 6. Model hours on the flyer are Monday through Saturday, 10am to 6pm, and Sunday, 12pm to 6pm.",
      expires: "December 6",
      sourceLabel: "Jordan Ranch Perry Holiday Home Tour flyer",
      sourceUrl:
        "https://www.jordanranchtexas.com/wp-content/uploads/2024/07/Incentive-880-PERRY-HOU-HolidayHomeTour_523222_Invite-NovDec2026.pdf",
    },
  ],
  "oakhill-reserve": [
    {
      builder: "Tri Pointe Homes",
      text: "Special Rate on the Oakhill Reserve page: FHA 30-year fixed with a 4.875% rate (5.950% APR). The page lists this line twice. No end date is printed.",
      sourceLabel: "Tri Pointe Homes, Oakhill Reserve",
      sourceUrl: "https://www.tripointehomes.com/tx/houston/oakhill-reserve",
    },
    {
      builder: "Tri Pointe Homes",
      text: "Special Rate: conventional 30-year fixed with a 3.99% (5.825% APR) first-year rate. The page shows an estimated payment example for a $500,000 sales price. No end date is printed.",
      sourceLabel: "Tri Pointe Homes, Oakhill Reserve",
      sourceUrl: "https://www.tripointehomes.com/tx/houston/oakhill-reserve",
    },
    {
      builder: "Tri Pointe Homes",
      text: "Special Rate: conventional 30-year fixed with a 3.99% (5.591% APR) first-year rate. The page shows an estimated payment example for a $600,000 sales price. No end date is printed.",
      sourceLabel: "Tri Pointe Homes, Oakhill Reserve",
      sourceUrl: "https://www.tripointehomes.com/tx/houston/oakhill-reserve",
    },
    {
      builder: "Toll Brothers",
      text: "5.49% (6.27% APR) FHA 30-year fixed. Limited time only on select homes. No end date is printed on the community page.",
      sourceLabel: "Toll Brothers at Oakhill Reserve",
      sourceUrl: "https://www.tollbrothers.com/luxury-homes-for-sale/Texas/Toll-Brothers-at-Oakhill-Reserve",
    },
  ],
  "briscoe-falls": [
    {
      builder: "KB Home",
      text: "The Briscoe Falls page links to a special rate of 4.99% (5.781% APR) on a 5/1 FHA ARM through KBHS Home Loans. Qualified buyers lock the rate when they sign a purchase agreement by November 30. The rate page does not print the year on that date, and it says the advertised rate is effective as of September 24, 2026. The example uses a $471,797 loan amount. That example is not a Briscoe Falls price. A buyer is not required to use KBHS Home Loans.",
      expires: "Sign by November 30",
      sourceLabel: "KB Home special low rate",
      sourceUrl: "https://www.kbhome.com/special-low-rate",
    },
  ],
  "enclave-at-newport": [
    {
      builder: "Davidson Homes",
      text: "Find Your Place to Gather. A 4.5% rate (6.380% APR) plus $10,000 flex cash on select homes, and a free move-in package. The Enclave at Newport page dates this card November 3, 2026 to November 15, 2026 and labels it Multiple Communities.",
      expires: "November 15, 2026",
      sourceLabel: "Davidson Homes, Enclave at Newport",
      sourceUrl: "https://www.davidsonhomes.com/states/texas/houston-market-area/crosby/enclave-at-newport/",
    },
    {
      builder: "Davidson Homes",
      text: "Build Your Future. $25,000 flex cash to personalize the home, cover luxury homesite premiums, or assist with closing costs. The Enclave at Newport page dates this card November 3, 2026 to November 15, 2026 and labels it Multiple Communities.",
      expires: "November 15, 2026",
      sourceLabel: "Davidson Homes, Enclave at Newport",
      sourceUrl: "https://www.davidsonhomes.com/states/texas/houston-market-area/crosby/enclave-at-newport/",
    },
    {
      builder: "Davidson Homes",
      text: "Tour On Your Time. Tour a Davidson home, write a contract, and get an extra $1,000 toward closing costs. The Enclave at Newport page labels this card Multiple Communities and does not print an end date.",
      sourceLabel: "Davidson Homes, Enclave at Newport",
      sourceUrl: "https://www.davidsonhomes.com/states/texas/houston-market-area/crosby/enclave-at-newport/",
    },
  ],
  "river-ranch-trails": [
    {
      builder: "Coventry Homes",
      text: "Interest rates starting at 2.99% (5.959% APR) when financing through Jet HomeLoans. The River Ranch Trails page points to the Coventry sales event page, which describes limited-time Black Friday savings on select quick move-in homes and does not restate the rate.",
      sourceLabel: "Coventry Homes, River Ranch Trails",
      sourceUrl: "https://www.coventryhomes.com/new-homes/tx/dayton/river-ranch-trails/",
    },
  ],
  "grand-oaks": [
    {
      builder: "Century Communities",
      text: "Hometown Heroes. First responders, and buyers who show proof of current or former work as a law enforcement officer, first responder, teacher, healthcare worker, or active or retired military, receive up to $1,000 off the sales price. The Grand Oaks page shows this Houston offer.",
      expires: "Contract on or before 12/31/2026",
      sourceLabel: "Century Communities Hometown Heroes",
      sourceUrl:
        "https://www.centurycommunities.com/promos/century-communities/texas/houston-metro/hometown-heroes-houston/",
    },
    {
      builder: "Century Communities",
      text: "Tour for a chance to win $10,000 from Wayfair. The Grand Oaks page shows this drawing. The official rules say one $10,000 Wayfair gift card will be given away by a random drawing. To be entered, tour a Century Communities or Century Complete home on or between November 4, 2026 and November 30, 2026. No purchase is necessary. The card is for Wayfair merchandise only.",
      expires: "Tour by November 30, 2026",
      sourceLabel: "Century Communities Wayfair tour drawing",
      sourceUrl: "https://www.centurycommunities.com/promos/national/2026-wayfair-black-friday-10k/",
    },
  ],
  "grand-mason-crossing": [
    {
      builder: "Long Lake Ltd.",
      text: "Long Lake's promotions page shows an Inventory Savings flyer: 4.99% on a 5/1 ARM, 5.99% fixed FHA/VA, and 6.5% fixed conventional, on select inventory homes. The flyer says the offer can expire without notice, covers select homes under construction and select move-in ready homes, and is available with preferred lenders. It does not print an APR or an end date, and it says to ask a sales counselor which addresses qualify.",
      sourceLabel: "Long Lake inventory savings flyer",
      sourceUrl: "https://www.longlakeltd.com/wp-content/uploads/2026/11/new-homes-promotion-inventory-savings.webp",
    },
    {
      builder: "Long Lake Ltd.",
      text: "The Season of Savings flyer on the same promotions page says select move-in ready homes can have reduced pricing, additional incentives, and a BTSA. The rate choices printed are 4.99% FHA fixed and 5.5% conventional fixed, on select homes only. The flyer says the offer can expire without notice and is available with preferred lenders. It does not print an APR or an end date.",
      sourceLabel: "Long Lake Season of Savings flyer",
      sourceUrl: "https://www.longlakeltd.com/wp-content/uploads/2026/11/new-homes-promotion-pick-rate2.webp",
    },
    {
      builder: "Long Lake Ltd.",
      text: "A separate Long Lake flyer says buyers can use a 6.5% fixed FHA/VA rate on new build homes. It says inventory homes and homes under construction are excluded. The flyer says the offer can expire without notice and is available with preferred lenders. It does not print an APR or an end date.",
      sourceLabel: "Long Lake new-build FHA/VA flyer",
      sourceUrl: "https://www.longlakeltd.com/wp-content/uploads/2026/10/new-homes-promotion-fha-va-6-5-fixed.webp",
    },
  ],
  stokesbury: [
    {
      builder: "Centex Homes",
      text: "The Stokesbury page banner says: Save up to $30k: Plus Paid Closing Costs, now through 11/30. The page marks the closing-cost line with an asterisk and a disclaimer control.",
      expires: "11/30, as printed. The banner does not add a year.",
      sourceLabel: "Centex, Stokesbury",
      sourceUrl: "https://www.centex.com/homes/texas/houston/waller/stokesbury-211361",
    },
    {
      builder: "Centex Homes",
      text: "A second Stokesbury banner says: Limited time offer. No down payment, plus we pay your closing costs, now through 11/30.",
      expires: "11/30, as printed. The banner does not add a year.",
      sourceLabel: "Centex, Stokesbury",
      sourceUrl: "https://www.centex.com/homes/texas/houston/waller/stokesbury-211361",
    },
    {
      builder: "Centex Homes",
      text: "The Stokesbury page also says the 10 Day Sales Event is live. The offer is valid on contracts signed by 11/15 on select homes. The page says to see a Centex sales consultant for details.",
      expires: "Contracts signed by 11/15, as printed. The banner does not add a year.",
      sourceLabel: "Centex, Stokesbury",
      sourceUrl: "https://www.centex.com/homes/texas/houston/waller/stokesbury-211361",
    },
    {
      builder: "Centex Homes",
      text: "The Stokesbury rate banner says: Enjoy rates as low as 4.75% for a limited time. The banner does not print an APR or an end date. Centex is the builder. Natalie is not a lender, and this rate is the builder's printed offer.",
      sourceLabel: "Centex, Stokesbury",
      sourceUrl: "https://www.centex.com/homes/texas/houston/waller/stokesbury-211361",
    },
  ],
  "the-pines-at-seven-coves": [
    {
      builder: "Centex Homes",
      text: "The Pines at Seven Coves banner says: Save up to $30k: Plus Paid Closing Costs, now through 11/30. The page marks the closing-cost line with an asterisk and a disclaimer control.",
      expires: "11/30, as printed. The banner does not add a year.",
      sourceLabel: "Centex, The Pines at Seven Coves",
      sourceUrl: "https://www.centex.com/homes/texas/houston/willis/the-pines-at-seven-coves-210502",
    },
    {
      builder: "Centex Homes",
      text: "A second banner says: No Down Payment, Plus We'll Pay Your Closing Costs, now through 11/30.",
      expires: "11/30, as printed. The banner does not add a year.",
      sourceLabel: "Centex, The Pines at Seven Coves",
      sourceUrl: "https://www.centex.com/homes/texas/houston/willis/the-pines-at-seven-coves-210502",
    },
    {
      builder: "Centex Homes",
      text: "The page also says the 10 Day Sales Event is live. The offer is valid on contracts signed by 11/15 on select homes. The page says to see a Centex sales consultant for details.",
      expires: "Contracts signed by 11/15, as printed. The banner does not add a year.",
      sourceLabel: "Centex, The Pines at Seven Coves",
      sourceUrl: "https://www.centex.com/homes/texas/houston/willis/the-pines-at-seven-coves-210502",
    },
    {
      builder: "Centex Homes",
      text: "The rate banner says: Enjoy rates as low as 4.75% for a limited time. The banner does not print an APR or an end date. Centex is the builder. Natalie is not a lender, and this rate is the builder's printed offer.",
      sourceLabel: "Centex, The Pines at Seven Coves",
      sourceUrl: "https://www.centex.com/homes/texas/houston/willis/the-pines-at-seven-coves-210502",
    },
  ],
  "mason-woods": [
    {
      builder: "Taylor Morrison",
      text: "The Mason Woods page banner says $0 down, zero closing costs, and a reduced FHA rate when using Taylor Morrison Home Funding. The details print 5.75% (6.57% APR) with 3.5% forgivable down payment assistance, for contracts entered from October 28, 2026 through November 11, 2026, on select Houston quick move-in homes that close by December 31, 2026. The example uses a $400,000 price, a loan amount of $392,755, 3.5% down, and a 640 credit score.",
      expires: "Contract by November 11, 2026. Close by December 31, 2026.",
      sourceLabel: "Taylor Morrison, Mason Woods",
      sourceUrl: "https://www.taylormorrison.com/tx/houston/mason-woods",
    },
    {
      builder: "Tri Pointe Homes",
      text: "The Mason Woods page lists a special rate: FHA 30-year fixed at 4.875% (5.950% APR). The linked terms say the purchase agreement must be entered between October 23, 2026 and November 15, 2026, the home must close by December 31, 2026, and the rate requires financing through Tri Pointe Connect. The sample uses a $375,000 sales price.",
      expires: "Contract by November 15, 2026. Close by December 31, 2026.",
      sourceLabel: "Tri Pointe Homes Value of Now",
      sourceUrl: "https://www.tripointehomes.com/promotion/tx/houston/value-of-now-sales-event-fha-4-875-fixed-rate-5-950-apr-estimated-payment-for-375k-sales-price",
    },
  ],

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
