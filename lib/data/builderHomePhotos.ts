import type { CommunityPhoto } from "@/lib/data/newHomePhotos";

export type BuilderHomePhoto = CommunityPhoto & {
  creditName: string;
  creditUrl: string;
};

/**
 * One home photo per builder, only where a clean source photo exists.
 * Keyed by community slug, then the builder name used on that community.
 */
const builderHomePhotos: Record<string, Record<string, BuilderHomePhoto>> = {
  colton: {
    "Beazer Homes": {
      src: "/new-homes/colton/builders/beazer-vanderbilt.webp",
      alt: "Front of the Beazer home at 1951 Langford Street in Todd Mission, with 1951 beside the garage.",
      width: 1600,
      height: 1066,
      creditName: "Beazer Homes",
      creditUrl: "https://www.beazer.com/houston-TX/todd-mission/colton/vanderbilt",
    },
    "Coventry Homes": {
      src: "/new-homes/colton/builders/coventry-lajitas.webp",
      alt: "Front of the Coventry home at 42022 Lajitas Way, with 42022 beside the door.",
      width: 1600,
      height: 1067,
      creditName: "Coventry Homes",
      creditUrl: "https://www.coventryhomes.com/new-homes/tx/todd-mission/colton/",
    },
    "David Weekley Homes": {
      src: "/new-homes/colton/builders/david-weekley-reserve.webp",
      alt: "Front of a David Weekley home published for the COLTON Reserve Collection.",
      width: 1600,
      height: 1067,
      creditName: "David Weekley Homes",
      creditUrl: "https://www.davidweekleyhomes.com/new-homes/tx/houston/todd-mission/colton-45",
    },
    "Drees Homes": {
      src: "/new-homes/colton/builders/drees-exterior.webp",
      alt: "Front of a Drees home at dusk, published on the Drees Homes page at COLTON.",
      width: 1080,
      height: 720,
      creditName: "Drees Homes",
      creditUrl: "https://coltontx.com/builders/drees-homes/",
    },
    "Highland Homes": {
      src: "/new-homes/colton/builders/highland-vargas.webp",
      alt: "Front of the Highland home at 2244 Vargas Street in Todd Mission, with 2244 on the garage.",
      width: 1279,
      height: 850,
      creditName: "Highland Homes",
      creditUrl: "https://www.highlandhomes.com/houston/todd-mission/colton/5003-033",
    },
    "J. Patrick Homes": {
      src: "/new-homes/colton/builders/jpatrick-elevation.webp",
      alt: "Front of a J. Patrick home published on the J. Patrick Homes page at COLTON.",
      width: 1600,
      height: 1098,
      creditName: "J. Patrick Homes",
      creditUrl: "https://coltontx.com/builders/j-patrick-homes/",
    },
    "Fedrick Harris Estate Homes": {
      src: "/new-homes/colton/builders/fedrick-harris-barrow.webp",
      alt: "Angled front of the Fedrick Harris home at 1938 Barrow Way.",
      width: 1181,
      height: 787,
      creditName: "Fedrick Harris Estate Homes",
      creditUrl: "https://newmarkhomes.com/new-homes/houston/montgomery/fedrick-harris-estate-homes-colton",
    },
    "Partners in Building": {
      src: "/new-homes/colton/builders/partners-barrow.webp",
      alt: "Front of the Partners in Building home at 1934 Barrow Way, with 1934 on the house.",
      width: 1600,
      height: 899,
      creditName: "Partners in Building",
      creditUrl: "https://partnersinbuilding.com/greater-houston/colton",
    },
    "Perry Homes": {
      src: "/new-homes/colton/builders/perry-nokona.webp",
      alt: "Front of the Perry home at 42119 Nokona Way, with 42119 beside the door.",
      width: 1600,
      height: 900,
      creditName: "Perry Homes",
      creditUrl: "https://www.perryhomes.com/new-homes/texas/houston/colton",
    },
    "Village Builders": {
      src: "/new-homes/colton/builders/village-dining.webp",
      alt: "Dining area in a Village Builders home, published on the COLTON Village Builders page.",
      width: 1600,
      height: 1068,
      creditName: "Village Builders",
      creditUrl: "https://coltontx.com/builders/village-builders/",
    },
    "Westin Homes": {
      src: "/new-homes/colton/builders/westin-elevation.webp",
      alt: "Side of the Westin home at 1910 Barrow Way, with 1910 on the address plaque.",
      width: 1600,
      height: 1068,
      creditName: "Westin Homes",
      creditUrl: "https://coltontx.com/builders/westin-homes/",
    },
  },
  redbud: {
    "Taylor Morrison": {
      src: "/new-homes/redbud/builders/taylor-morrison.webp",
      alt: "Front of the Taylor Morrison home at 18034 Old Barrel Drive. A red yard sign reads Allegro.",
      width: 1600,
      height: 900,
      creditName: "Taylor Morrison",
      creditUrl: "https://www.taylormorrison.com/tx/houston/hockley/red-bud-40s-ascent",
    },
  },
  stokesbury: {
    "Centex Homes": {
      src: "/new-homes/stokesbury/builders/centex.webp",
      alt: "Single-story home published as a model exterior on the Centex Stokesbury page.",
      width: 1600,
      height: 1200,
      creditName: "Centex Homes",
      creditUrl: "https://www.centex.com/homes/texas/houston/waller/stokesbury-211361",
    },
  },
  "the-pines-at-seven-coves": {
    "Centex Homes": {
      src: "/new-homes/the-pines-at-seven-coves/builders/centex.webp",
      alt: "Front of the Centex model at 10519 Killdeer Court. A sign on the door reads Office Hours.",
      width: 1600,
      height: 1034,
      creditName: "Centex Homes",
      creditUrl: "https://www.centex.com/homes/texas/houston/willis/the-pines-at-seven-coves-210502",
    },
  },
  "grand-mason-crossing": {
    "Long Lake Ltd.": {
      src: "/new-homes/grand-mason-crossing/builders/long-lake.webp",
      alt: "Front of the brick home at 5627 Toledo Pines Lane, published on the Grand Mason Crossing page.",
      width: 1024,
      height: 684,
      creditName: "Long Lake Ltd.",
      creditUrl: "https://www.longlakeltd.com/new-homes/communities/grand-mason-crossing/",
    },
  },
  "mason-woods": {
    "Taylor Morrison": {
      src: "/new-homes/mason-woods/builders/taylor-morrison.webp",
      alt: "Front of the Taylor Morrison home at 22026 Mason Woods Road, published on the Mason Woods page.",
      width: 1600,
      height: 1066,
      creditName: "Taylor Morrison",
      creditUrl: "https://www.taylormorrison.com/tx/houston/mason-woods",
    },
    "Tri Pointe Homes": {
      src: "/new-homes/mason-woods/builders/tri-pointe.webp",
      alt: "Front of the Tri Pointe Barton home published for Mason Woods.",
      width: 1600,
      height: 1064,
      creditName: "Tri Pointe Homes",
      creditUrl: "https://www.tripointehomes.com/tx/houston/mason-woods",
    },
  },
  "oakberry-trails": {
    "Risewell Homes": {
      src: "/new-homes/oakberry-trails/builders/risewell.webp",
      alt: "Front of the Risewell home at 21519 Vineyard View, published on the Oakberry Trails Risewell page.",
      width: 1600,
      height: 1066,
      creditName: "Oakberry Trails",
      creditUrl: "https://www.oakberrytrails.com/builders-in-waller-tx/risewell-homes",
    },
  },
  "woodsons-reserve": {
    "Tri Pointe Homes": {
      src: "/new-homes/woodsons-reserve/builders/tri-pointe.webp",
      alt: "Front of the Tri Pointe Carignan home published for the 80-foot collection at Woodson's Reserve.",
      width: 1600,
      height: 966,
      creditName: "Tri Pointe Homes",
      creditUrl: "https://www.tripointehomes.com/tx/houston/woodsons-reserve",
    },
    "Toll Brothers": {
      src: "/new-homes/woodsons-reserve/builders/toll-brothers.webp",
      alt: "Outdoor living area of the Toll Brothers Lavaca plan, published for Woodson's Reserve.",
      width: 1600,
      height: 900,
      creditName: "Toll Brothers",
      creditUrl: "https://www.tollbrothers.com/luxury-homes-for-sale/Texas/Woodson's-Reserve",
    },
  },
  "the-canopies": {
    CastleRock: {
      src: "/new-homes/the-canopies/builders/castlerock.webp",
      alt: "Front of the CastleRock home at 14203 Firecracker Lane, with 14203 on the garage.",
      width: 800,
      height: 530,
      creditName: "The Canopies",
      creditUrl: "https://thecanopies.com/builder/castlerock",
    },
    "Risewell Homes": {
      src: "/new-homes/the-canopies/builders/risewell.webp",
      alt: "Front of the Risewell home published as 14459 Trumpet at The Canopies.",
      width: 800,
      height: 530,
      creditName: "The Canopies",
      creditUrl: "https://thecanopies.com/builder/risewell-homes",
    },
  },
  "avalon-at-cypress": {
    "Taylor Morrison": {
      src: "/new-homes/avalon-at-cypress/builders/taylor-morrison.webp",
      alt: "Front of the stone and stucco home published for 9207 Ocean Onyx at Avalon at Cypress.",
      width: 1000,
      height: 668,
      creditName: "Taylor Morrison",
      creditUrl: "https://www.taylormorrison.com/tx/houston/avalon-at-cypress",
    },
  },
};

export function builderHomePhoto(communitySlug: string, builderName: string) {
  return builderHomePhotos[communitySlug]?.[builderName];
}
