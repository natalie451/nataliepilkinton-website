import type { AcademyGuide } from "@/lib/content/academy/types";
import { homeRockMortgage, lenderDisclosure } from "@/lib/content/academy/providers";

/**
 * Investor Academy guides.
 *
 * Lending and tax facts were checked against the sources listed on
 * each guide on Oct 5, 2026 — re-check them when updating.
 */

const investorBooking = {
  title: "Ready to Run the Numbers on Your First Deal?",
  description: "Book a free strategy session and Natalie will walk through your goals, your budget and what a deal needs to look like.",
  label: "Book Investor Consultation →",
};

const DATE = "2026-10-05";

export const beginnerGuide: AcademyGuide = {
  path: "/investors/beginner",
  metaTitle: "How to Start Investing in Real Estate in Houston",
  metaDescription:
    "How to buy your first Houston rental: make the rent cover PITI, the six ways real estate makes money, how much you need, and Natalie Pilkinton's one-house-a-year plan.",
  h1: "How to Start Investing in Real Estate in Houston",
  subheading: "Your first rental, the numbers it has to hit, and a plan you can actually follow",
  breadcrumbs: [
    { name: "Investors", path: "/investors" },
    { name: "Beginner Investing", path: "/investors/beginner" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "Start with one rental property whose rent covers the full monthly payment (principal, interest, taxes, and insurance, or PITI) with some cash flow left over. In the Houston area, property taxes and insurance are the costs that most often break a deal, so get real numbers for both before you make an offer.",
    "Most investment loans need 15–25% down, plus reserves for repairs and vacancies. Then add one property at a time instead of trying to scale fast.",
  ],
  sections: [
    {
      heading: "The six ways a rental property makes you money",
      paragraphs: [
        "When Natalie teaches new investors, she starts here, because cash flow is only one of the six and rarely the biggest:",
      ],
      steps: [
        { title: "Cash flow", body: "Rent left over after the mortgage, taxes, insurance and expenses." },
        { title: "Loan paydown", body: "Your tenant's rent pays down the mortgage, so your equity grows every month." },
        { title: "Appreciation", body: "Property values and rents tend to rise with inflation over time, which makes rentals a hedge against it." },
        { title: "Tax advantages", body: "Depreciation and other deductions can offset rental income. A CPA who works with investors can tell you whether strategies such as a cost segregation study make sense for you." },
        { title: "Leverage", body: "A loan lets you control a whole property with a fraction of its price in cash, which few other investments allow." },
        { title: "Equity access", body: "Later, a cash-out refinance lets you pull equity out as loan proceeds while you keep the property." },
      ],
    },
    {
      heading: "Make the rent cover PITI, especially in Texas",
      paragraphs: [
        "The first test of any rental is whether the rent covers principal, interest, taxes and insurance. Texas has no state income tax, but it makes up for it with high property taxes, and homeowners insurance near the coast has climbed with hurricane and flood risk.",
        "Watch the escrow. Your lender collects taxes and insurance monthly based on last year's bills. When both go up, the next escrow analysis can raise your payment and ask you to cover the shortage at the same time, a double hit if your margins were thin.",
        "Whoever brings you the deal (your agent, a wholesaler, or a seller) should run rental comps and real tax and insurance figures before you commit. See [how to analyze an investment property](/blog/investing/analyze-investment-properties) for the core metrics.",
      ],
    },
    {
      heading: "How much money do you need?",
      paragraphs: [
        "Plan for a down payment, closing costs, any repairs, and reserves. Most investment-property loans, including DSCR loans, typically require 20–25% down, with some programs at 15% for strong credit. Lenders also want cash reserves measured in months of the payment.",
        "If you find a property at a deep enough discount, creative strategies like [BRRRR](/investors/brrrr) can get much of your cash back out after the rehab, but they need more experience and more cushion.",
      ],
    },
    {
      heading: "Set it up like a business from day one",
      bullets: [
        "Open a separate bank account for each property and run all its rent and repairs through it.",
        "Hold the tenant's security deposit separately; it isn't your money to spend. Texas requires you to refund it, minus itemized deductions, within 30 days after the tenant moves out and gives a forwarding address.",
        "Decide on your structure (an LLC, or a DBA under an umbrella entity) with your attorney and CPA. You don't need an LLC to buy your first rental.",
        "Build a vendor list before you need it: a plumber, an electrician, a handyman and an HVAC company who work for investors.",
        "Put everything in writing: leases, contractor bids and change orders. Never pay a contractor in full up front.",
      ],
    },
    {
      heading: "Your first rental might be the house you live in now",
      paragraphs: [
        "Before you sell your home to buy the next one, ask whether it could become your first rental. If the rent covers the payment and you're ready to be a landlord, keeping it can build more wealth than selling.",
        "If you do sell, you may be able to exclude up to $250,000 of gain ($500,000 for married couples filing jointly) if you owned and lived in the home for two of the last five years. Confirm with your CPA.",
      ],
    },
    {
      heading: "Natalie's one-house-a-year plan",
      paragraphs: [
        "Natalie's beginner framework is deliberately slow. Buy one rental a year for about 15 years, keep each one rented, and let tenants pay down the loans while the properties appreciate.",
        "When you're ready to retire, refinance one house a year and live on the cash-out proceeds while still owning the property. Then repeat with the next house. It isn't TV-flip exciting, but it's a plan an ordinary family can follow.",
        "This is an illustration of a strategy, not a projection. Real results depend on prices, rents, rates, taxes and the properties you buy.",
      ],
    },
  ],
  natalieTake: {
    heading: "Treat your tenants like customers",
    paragraphs: [
      "I've had tenants stay in a house 10 and 15 years. When I got one of those houses back it needed a full rehab, but that was 15 years of zero vacancy and 15 years of someone else paying down my loan. I'll take that trade.",
      "If something breaks and it isn't my tenant's fault, I pay for it, because I want them to renew. A vacancy can cost me $2,000 at the end of the year, and charging a good tenant $200 here and $200 there hurts them a lot more than it helps me.",
      "And if you know you can't have a hard conversation or handle an eviction, hire a property manager, or invest passively with a solid operator instead of owning rentals directly.",
    ],
  },
  faqs: [
    {
      question: "How much money do I need to buy my first investment property in Houston?",
      answer:
        "Plan on a down payment of roughly 15–25% of the price for most investment loans, plus closing costs, any repairs and several months of reserves. The exact amount depends on the loan program, your credit and the property.",
    },
    {
      question: "Should I buy my first rental in an LLC?",
      answer:
        "You don't have to. Many investors start in their own name or under a DBA and move to an LLC structure later. Ask your attorney and CPA, and check with your lender, since some loans can be closed in an LLC and others can't.",
    },
    {
      question: "What's the most important number when buying a rental?",
      answer:
        "Whether the rent covers principal, interest, taxes and insurance with cash flow left over. In Texas, use the actual property tax rate and a real insurance quote, not estimates.",
    },
    {
      question: "Can I invest in real estate with my IRA?",
      answer:
        "Yes, through a self-directed IRA, but the rules are strict about who can use the property and how income and expenses flow. Work with a self-directed IRA custodian and a CPA before you buy.",
    },
    {
      question: "Do I need a property manager?",
      answer:
        "Not necessarily. Many investors self-manage their first few rentals. If you can't handle repair calls, tenant screening or an eviction, a property manager is worth the fee.",
    },
  ],
  related: [
    { label: "BRRRR strategy in Texas", href: "/investors/brrrr", description: "Buy, rehab, rent, refinance and repeat." },
    { label: "Private lending", href: "/investors/private-lending", description: "Lend on one of Natalie's deals, or partner with her." },
    { label: "DSCR loans in Texas", href: "/investors/dscr-loans-texas", description: "Qualify on the property's rent, not your W-2." },
    { label: "How to analyze an investment property", href: "/blog/investing/analyze-investment-properties", description: "Cap rate, cash-on-cash and DSCR." },
    { label: "Houston market update", href: "/market-updates", description: "What this month's numbers mean for investors." },
  ],
  sources: [
    { label: "Texas State Law Library: Security deposit refunds", url: "https://guides.sll.texas.gov/landlord-tenant-law/security-deposit-refunds" },
    { label: "IRS Topic 701: Sale of your home", url: "https://www.irs.gov/taxtopics/tc701" },
    { label: "IRS Publication 527: Residential rental property", url: "https://www.irs.gov/publications/p527" },
    { label: "Griffin Funding: DSCR loan requirements (2026)", url: "https://griffinfunding.com/blog/dscr-loans/dscr-loan-requirements/" },
  ],
  disclaimer:
    "This guide is education, not legal, tax or lending advice. Loan terms vary by lender and change over time; talk to your lender, CPA and attorney before you buy.",
  showMeetup: true,
  cta: investorBooking,
};

export const brrrrGuide: AcademyGuide = {
  path: "/investors/brrrr",
  metaTitle: "BRRRR Strategy in Texas, Step by Step",
  metaDescription:
    "How the BRRRR strategy works in Texas: buying below value, rehabbing for a rental, cash-out refinance seasoning rules for conventional and DSCR loans, and the risks.",
  h1: "What Is the BRRRR Strategy in Texas?",
  subheading: "Buy, Rehab, Rent, Refinance, Repeat, explained stage by stage",
  breadcrumbs: [
    { name: "Investors", path: "/investors" },
    { name: "BRRRR", path: "/investors/brrrr" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "BRRRR means Buy, Rehab, Rent, Refinance, Repeat. You buy a property below its after-repair value, fix it up, rent it, then refinance based on the new value to pull most of your cash back out and do it again.",
    "It only works if you buy at a real discount, keep the rehab on budget and wait out the lender's seasoning period, usually 3 to 12 months depending on the loan.",
  ],
  sections: [
    {
      heading: "The five steps",
      steps: [
        {
          title: "Buy below value",
          body: "The profit is made at purchase. Look for distressed properties: pre-foreclosures, estate sales, county foreclosure auctions, wholesaler deals or homes that need work most buyers won't take on. You often can't see inside until you write an offer.",
        },
        {
          title: "Rehab for a rental, not a flip",
          body: "A rental rehab is built for durability and low maintenance, not designer finishes. Decide the exit before you budget the work; a rental and a flip are two different projects.",
        },
        {
          title: "Rent",
          body: "Screen carefully, sign a written lease and set rent from real comps. A documented lease and rent roll help the refinance appraisal and your DSCR.",
        },
        {
          title: "Refinance",
          body: "Replace your purchase or hard-money loan with long-term financing based on the property's new value. Seasoning rules decide when you can do this and how much you can take out (below).",
        },
        { title: "Repeat", body: "Use the cash you pulled out as the down payment on the next property." },
      ],
    },
    {
      heading: "Refinance seasoning: how long you'll wait",
      paragraphs: [
        "Seasoning is the time a lender wants you to own the property before a cash-out refinance. It's the step that trips up most first-time BRRRR investors.",
      ],
      table: {
        headers: ["Loan type", "Typical seasoning", "What it means for BRRRR"],
        rows: [
          [
            "Conventional (Fannie Mae) cash-out",
            "6 months on title; any existing first-lien loan being paid off must be 12 months old",
            "If you bought with a hard-money loan, the 12-month rule can apply to paying it off.",
          ],
          [
            "Fannie Mae delayed financing",
            "No wait if you bought with cash",
            "Loan is limited to your documented purchase price plus closing costs, not the new appraised value.",
          ],
          [
            "DSCR loan cash-out",
            "Commonly 3–6 months; some lenders want 12",
            "Before full seasoning, some lenders cap the loan at purchase price plus documented rehab costs.",
          ],
        ],
        note: "Rules as of October 2026. Lenders change guidelines; confirm before you buy.",
      },
    },
    {
      heading: "An illustration of the math",
      paragraphs: [
        "Hypothetical numbers to show how the pieces fit, not a real deal or a promise of results.",
      ],
      table: {
        headers: ["Item", "Amount"],
        rows: [
          ["Purchase price", "$180,000"],
          ["Rehab", "$40,000"],
          ["Total cash and short-term loans in the deal (before closing costs)", "$220,000"],
          ["After-repair appraised value", "$280,000"],
          ["New loan at 75% of value", "$210,000"],
          ["Left in the deal before closing and holding costs", "$10,000"],
        ],
        note: "Closing costs, holding costs during the rehab and the lender's actual loan-to-value limit change the result.",
      },
    },
    {
      heading: "The risks to plan for",
      bullets: [
        "The appraisal comes in low, so you can't pull out as much cash as planned.",
        "The rehab runs over budget or over time, and you carry the payments longer.",
        "Rates rise between purchase and refinance, so the new payment no longer cash-flows.",
        "Over-leverage: pulling every dollar out leaves no cushion for vacancies, big repairs or a market dip.",
        "Contractor problems. Get everything in writing, pay by draw as work is completed, and keep change orders on paper.",
      ],
    },
  ],
  natalieTake: {
    heading: "Don't strap yourself",
    paragraphs: [
      "You can get into properties with very little down today, even with DSCR loans. But you have to be able to absorb the backslide when rents soften or values dip.",
      "I've watched people walk away from houses in a down market when two more years of holding on would have saved them. Make sure you're not over-leveraged, and keep reserves so a bad month doesn't become a foreclosure.",
    ],
  },
  faqs: [
    {
      question: "How long do I have to wait to refinance a BRRRR property?",
      answer:
        "For a conventional Fannie Mae cash-out refinance, at least six months on title, and any first-lien loan being paid off must be at least 12 months old. Many DSCR lenders allow a cash-out after 3–6 months, though some cap the loan at your purchase price plus documented rehab until the property is fully seasoned.",
    },
    {
      question: "Can I do BRRRR with no money?",
      answer:
        "Rarely. You usually need cash or a short-term loan for the purchase and rehab, plus reserves. If you buy at a steep enough discount, the refinance can return most of it, but plan for some money to stay in the deal.",
    },
    {
      question: "What loan do investors use for the refinance step?",
      answer:
        "Usually either a conventional cash-out refinance or a [DSCR loan](/investors/dscr-loans-texas), which qualifies the property on its rent instead of your personal income.",
    },
    {
      question: "Is BRRRR different in Texas?",
      answer:
        "The steps are the same, but Texas property taxes and insurance are higher than in many states, which raises the monthly payment after the refinance. Run the numbers with real tax and insurance figures before you buy.",
    },
  ],
  related: [
    { label: "DSCR loans in Texas", href: "/investors/dscr-loans-texas", description: "The loan most BRRRR investors refinance into." },
    { label: "Private lending", href: "/investors/private-lending", description: "Lend on one of Natalie's deals, or partner with her." },
    { label: "How to start investing", href: "/investors/beginner", description: "The fundamentals before your first deal." },
    { label: "How to analyze an investment property", href: "/blog/investing/analyze-investment-properties", description: "Cap rate, cash-on-cash and DSCR." },
  ],
  sources: [
    { label: "Fannie Mae Selling Guide B2-1.3-03: Cash-out refinance transactions", url: "https://selling-guide.fanniemae.com/sel/b2-1.3-03/cash-out-refinance-transactions" },
    { label: "Munoz Ghezlan: DSCR loan seasoning requirements (May 2026)", url: "https://www.munozghezlan.com/blog/dscr-loan-seasoning-requirements" },
  ],
  disclaimer:
    "This guide is education, not lending, tax or legal advice. Seasoning and loan-to-value limits vary by lender and change over time; confirm with your lender before you buy.",
  cta: investorBooking,
};

export const dscrGuide: AcademyGuide = {
  path: "/investors/dscr-loans-texas",
  metaTitle: "DSCR Loans in Texas: How They Work for Rental Investors",
  metaDescription:
    "How DSCR loans work in Texas: the debt service coverage ratio formula, typical credit, down payment and reserve requirements, and how Texas taxes and insurance affect qualifying.",
  h1: "How Do DSCR Loans Work in Texas?",
  subheading: "Qualify on the property's rent instead of your personal income",
  breadcrumbs: [
    { name: "Investors", path: "/investors" },
    { name: "DSCR Loans", path: "/investors/dscr-loans-texas" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "A DSCR (debt service coverage ratio) loan is an investment-property mortgage that qualifies you based on the property's rent instead of your W-2 income or tax returns. The lender divides the monthly rent by the monthly payment; a ratio of 1.0 or higher means the rent covers it.",
    "Typical requirements are a credit score of about 620 or higher, 20–25% down and several months of reserves. Texas property taxes and insurance raise the payment, so they're often what makes or breaks the ratio.",
  ],
  sections: [
    {
      heading: "The DSCR formula",
      paragraphs: [
        "DSCR = monthly rent ÷ monthly PITIA (principal, interest, taxes, insurance and any HOA dues).",
        "Example: rent of $2,400 and a total payment of $2,000 gives a DSCR of 1.2. A ratio of 1.0 means the rent exactly covers the payment; lenders usually price better at 1.2–1.25 or above, and some offer programs below 1.0 with stronger compensating factors.",
      ],
    },
    {
      heading: "Typical DSCR loan requirements",
      table: {
        headers: ["Requirement", "Typical range"],
        rows: [
          ["Minimum DSCR", "1.0 is the common benchmark; varies by lender"],
          ["Credit score", "About 620 minimum; 740+ gets better pricing and lower down payments"],
          ["Down payment", "20–25% (75–80% loan-to-value); some programs 15% for strong borrowers"],
          ["Reserves", "Several months of the property's payment, in cash or eligible accounts"],
          ["Income documents", "Usually no tax returns, W-2s or pay stubs; no personal debt-to-income ratio"],
          ["Ownership", "Can usually close in an LLC or other entity, often with a personal guarantee"],
          ["Property types", "Single-family, 2–4 units, condos and townhomes; short-term rentals at some lenders"],
          ["Prepayment penalty", "Common; a longer penalty period can buy a lower rate"],
        ],
        note: "Requirements as published by DSCR lenders in 2026. Programs differ, so compare several lenders.",
      },
    },
    {
      heading: "Why Texas taxes and insurance matter so much",
      paragraphs: [
        "Because DSCR divides rent by the full payment including taxes and insurance, a high tax rate or an expensive insurance quote can push a property below 1.0 even when the purchase price looks good.",
        "Before you write an offer, get the property's actual tax rate (including MUD or special districts in many Houston suburbs) and a real insurance quote, especially in flood-prone areas. Don't rely on the seller's current tax bill if it includes a homestead exemption you won't get.",
      ],
    },
    {
      heading: "When a DSCR loan fits, and when it doesn't",
      bullets: [
        "Fits: self-employed investors, buyers with several rentals already, investors who want to close in an LLC, and BRRRR investors refinancing out of short-term debt.",
        "Fits: buyers whose tax returns show low income because of depreciation and write-offs.",
        "Less ideal: buyers who qualify easily for a conventional loan, which may offer a lower rate and no prepayment penalty.",
        "Not for: a home you plan to live in. DSCR loans are for investment properties only.",
      ],
    },
  ],
  natalieTake: {
    heading: "Low down payment, high responsibility",
    paragraphs: [
      "DSCR loans make it possible to get into properties with very minimal down. That's an opportunity, but you have to be able to absorb a backslide in rents.",
      "Run your numbers with today's taxes and insurance, keep your reserves, and make sure the rent covers your PITI with something left over before you count on appreciation.",
    ],
  },
  recommended: {
    heading: "Where Natalie sends investors for DSCR loans",
    intro: "Natalie works with Brian Lupton at HomeRock Mortgage on investor financing. Compare his terms with any lender you're considering.",
    providers: [homeRockMortgage],
    disclosure: lenderDisclosure,
  },
  faqs: [
    {
      question: "What is a good DSCR for a rental property?",
      answer:
        "1.0 means the rent exactly covers the payment and is a common minimum. Most lenders give better pricing at 1.2–1.25 or higher, which also leaves you a cushion for vacancies and repairs.",
    },
    {
      question: "Do DSCR loans require tax returns?",
      answer: "Usually not. DSCR lenders qualify the property on its rent and don't calculate a personal debt-to-income ratio, though they still check credit, reserves and the property.",
    },
    {
      question: "How much down payment does a DSCR loan need?",
      answer: "Typically 20–25%. Some lenders offer 15% down for borrowers with strong credit.",
    },
    {
      question: "Can I get a DSCR loan in an LLC in Texas?",
      answer: "Generally yes. Most DSCR lenders allow closing in an LLC or other entity, usually with a personal guarantee.",
    },
    {
      question: "Can I use a DSCR loan for a BRRRR refinance?",
      answer:
        "Yes, it's one of the most common uses. Many DSCR lenders allow a cash-out refinance after 3–6 months of ownership. See [the BRRRR guide](/investors/brrrr) for seasoning details.",
    },
  ],
  related: [
    { label: "BRRRR strategy in Texas", href: "/investors/brrrr", description: "Where DSCR refinances fit in the cycle." },
    { label: "Private lending", href: "/investors/private-lending", description: "Lend on one of Natalie's deals, or partner with her." },
    { label: "How to start investing", href: "/investors/beginner", description: "How much you need for your first rental." },
    { label: "Houston property taxes", href: "/blog/market-news/houston-property-taxes", description: "Why taxes drive the payment." },
    { label: "Financing options for buyers", href: "/buyers/financing", description: "Loan programs if you'll live in the home." },
  ],
  sources: [
    { label: "Griffin Funding: DSCR loan requirements (2026)", url: "https://griffinfunding.com/blog/dscr-loans/dscr-loan-requirements/" },
    { label: "Munoz Ghezlan: DSCR loan seasoning requirements (May 2026)", url: "https://www.munozghezlan.com/blog/dscr-loan-seasoning-requirements" },
    { label: "HomeRock Mortgage: Loan officers", url: "https://www.homerockmortgage.com/loan-officer" },
  ],
  disclaimer:
    "This guide is education, not lending advice. DSCR programs vary by lender and change often; compare offers and read the prepayment terms before you commit.",
  cta: investorBooking,
};

export const privateLendingGuide: AcademyGuide = {
  path: "/investors/private-lending",
  metaTitle: "Private Lending and Partnerships in Houston and Spring",
  metaDescription:
    "Natalie Pilkinton is looking for private lenders and deal partners on her Houston and Spring investment properties. Terms are discussed one on one. Not an offer or a guarantee.",
  h1: "Private Lending and Partnership Opportunities in Houston and Spring, TX",
  subheading:
    "Natalie is looking for private lenders who want to lend on her deals, and for partners who want to co-invest with her.",
  dateModified: "2026-10-29",
  breadcrumbs: [
    { name: "Investors", path: "/investors" },
    { name: "Private Lending", path: "/investors/private-lending" },
  ],
  datePublished: DATE,
  shortAnswer: [
    "Natalie Pilkinton buys and invests in property in Spring, Houston, and Greater Houston. She is looking for private money lenders who want to lend to her on her deals, and for partners who want to co-invest or joint venture with her.",
    "She does not offer loans, and she does not lend money to other people. Any rate, split, timeline, or other terms are discussed one on one about a specific property. Nothing on this page is a term sheet, a promised return, a guarantee, or an offer of securities.",
  ],
  sections: [
    {
      heading: "Who this page is for",
      bullets: [
        "Private lenders who want to fund one of Natalie's investment properties.",
        "Partners who want to co-invest or joint venture with her on a deal.",
        "People who already invest, and people who want to look at a real Houston or Spring property with her before they decide.",
      ],
    },
    {
      heading: "What lenders and partners can expect",
      paragraphs: [
        "A first conversation is about a specific property, not a published rate or return. Natalie will describe the property, how she plans to buy it, and whether the role you are discussing is a loan to her or a partnership.",
      ],
      bullets: [
        "Terms are discussed one on one. They are not listed on this page.",
        "If you move forward, the paperwork is written for that deal. Have your own attorney review it before you send money.",
        "You can ask how you would be paid, or how you would share in the deal. She will not promise a result.",
        "Real estate deals can lose money. A conversation is not a guarantee.",
      ],
    },
    {
      heading: "What this page is not",
      bullets: [
        "Not an offer to lend money to you, and not a loan program.",
        "Not a securities offering, a fund, or a solicitation to buy a security.",
        "Not legal, tax, or financial advice. Talk with your own attorney and tax advisor before you commit money.",
      ],
    },
  ],
  faqs: [
    {
      question: "Does Natalie offer loans or lend money?",
      answer:
        "No. She does not offer loans and she does not lend money to other people. She is looking for private lenders who want to lend to her on her deals, and for partners who want to co-invest or joint venture with her.",
    },
    {
      question: "What deals is she looking for lenders or partners on?",
      answer:
        "Her own investment properties in Houston, Spring, and Greater Houston. She will describe the property when you talk. This page does not list a current deal, a price, or a return.",
    },
    {
      question: "What rate, return, or split should I expect?",
      answer:
        "None is published here. Those terms are discussed one on one and depend on the property. That conversation is not a guarantee, and it is not an offer of securities.",
    },
    {
      question: "How is a partnership different from a loan to Natalie?",
      answer:
        "A loan is money you lend to her, usually repaid under documents written for that deal. A partnership or joint venture means investing alongside her. Which one fits is discussed per property. Have your own attorney review anything before you send money.",
    },
    {
      question: "How do I talk with her about lending or partnering?",
      answer:
        "Call or text (832) 863-3468, or [book a call](https://calendly.com/nataliepilkinton). You can also meet other investors at her monthly meetup. The next date, time, and place are on Meetup.com.",
    },
  ],
  related: [
    { label: "How to start investing", href: "/investors/beginner", description: "Background on buying rentals in Houston." },
    { label: "BRRRR strategy in Texas", href: "/investors/brrrr", description: "How buy, rehab, rent, and refinance can work." },
    { label: "Multifamily investing", href: "/investors/multifamily", description: "How larger residential deals are looked at." },
    { label: "Passive investing", href: "/investors/passive", description: "How people invest alongside an operator." },
    { label: "All investor guides", href: "/investors", description: "The rest of Natalie's investor pages." },
  ],
  disclaimer:
    "This page is not an offer to lend, borrow, or invest, and it is not an offer of securities or a guarantee of any result. Terms are discussed one on one. This is not legal, tax, or financial advice.",
  sponsor: {
    name: "Jet Lending",
    category: "Hard Money Lending",
    area: "serving Texas",
    offer: "free consultation and free appraisal in the Houston metro area.",
    website: "https://jetlending.com",
    phone: "(281) 872-7800",
    phoneHref: "tel:+12818727800",
    logoSrc: "/images/jet-lending.jpg",
    logoWidth: 400,
    logoHeight: 344,
  },
  showMeetup: true,
  cta: {
    title: "Talk with Natalie about lending or partnering",
    description:
      "Call or text, or book a call, if you want to lend on one of her deals or co-invest with her. Terms are discussed one on one. This is not an offer of securities or a guarantee.",
    label: "Book a call",
    bookHref: "https://calendly.com/nataliepilkinton",
  },
};

export const investorGuides = [beginnerGuide, brrrrGuide, dscrGuide, privateLendingGuide];
