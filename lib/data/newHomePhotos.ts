import fs from "fs";
import path from "path";

export type CommunityPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Overrides the gallery credit when the photo is not from the community site. */
  creditName?: string;
};

export type CommunityGallery = {
  creditName: string;
  creditUrl: string;
  /** First photo is the hero. The rest are the amenity gallery. */
  photos: CommunityPhoto[];
  /** Model-home interiors, shown in their own gallery after the amenity shots. */
  interiorPhotos?: CommunityPhoto[];
};

export const communityGalleries: Record<string, CommunityGallery> = {
  "artavia": {
    creditName: "ARTAVIA",
    creditUrl: "https://artaviatx.com/",
    photos: [
      {"src":"/new-homes/artavia/hero.webp","alt":"Pine trail published as the ARTAVIA homepage hero","width":1500,"height":844},
      {"src":"/new-homes/artavia/lake.webp","alt":"Lake and boardwalk at ARTAVIA","width":1200,"height":800},
      {"src":"/new-homes/artavia/splash.webp","alt":"Splash pad at Dapple Park in ARTAVIA","width":1200,"height":800},
      {"src":"/new-homes/artavia/trails.webp","alt":"Shaded trail in ARTAVIA","width":1200,"height":799},
      {"src":"/new-homes/artavia/playground.webp","alt":"Playground at ARTAVIA","width":1200,"height":800},
      {"src":"/new-homes/artavia/amenity-center.webp","alt":"Amenity center at ARTAVIA","width":1200,"height":800},
      {"src":"/new-homes/artavia/cafe.webp","alt":"Palate Cafe at ARTAVIA","width":1200,"height":800},
      {"src":"/new-homes/artavia/fitness.webp","alt":"FitCenter at ARTAVIA","width":1200,"height":799},
    ],
  },
  "grand-central-park": {
    creditName: "Grand Central Park",
    creditUrl: "https://www.grandcentralparktx.com/lakehouse",
    photos: [
      {"src":"/new-homes/grand-central-park/hero.webp","alt":"The Lake House at Grand Central Park","width":1800,"height":712},
      {"src":"/new-homes/grand-central-park/aerial.webp","alt":"Aerial of the Lake House and lake at Grand Central Park","width":1200,"height":559},
      {"src":"/new-homes/grand-central-park/grandeur.webp","alt":"Entrance to The Grandeur preserve at Grand Central Park","width":800,"height":625},
      {"src":"/new-homes/grand-central-park/homes.webp","alt":"Homes published on the Grand Central Park site","width":960,"height":460},
    ],
  },
  "harpers-preserve": {
    creditName: "Harper's Preserve",
    creditUrl: "https://syi.net/syi-projects/harpers-preserve/",
    photos: [
      {"src":"/new-homes/harpers-preserve/hero.webp","alt":"Entrance view on the Harper's Preserve site","width":1496,"height":768},
      {"src":"/new-homes/harpers-preserve/pool.webp","alt":"Pool at Harper's Preserve","width":1200,"height":1124},
      {"src":"/new-homes/harpers-preserve/pool-patio.webp","alt":"Pool patio at Harper's Preserve","width":1200,"height":851},
      {"src":"/new-homes/harpers-preserve/park.webp","alt":"Park at Harper's Preserve","width":1200,"height":800},
      {"src":"/new-homes/harpers-preserve/bikes.webp","alt":"Residents on a path at Harper's Preserve","width":1200,"height":800},
      {"src":"/new-homes/harpers-preserve/landing.webp","alt":"Homes at Harper's Preserve","width":1200,"height":800},
      {"src":"/new-homes/harpers-preserve/trees.webp","alt":"Wooded setting at Harper's Preserve","width":1200,"height":801},
      {"src":"/new-homes/harpers-preserve/street.webp","alt":"Street of homes at Harper's Preserve","width":1200,"height":801},
    ],
  },
  "woodforest": {
    creditName: "Woodforest",
    creditUrl: "https://www.woodforesttx.com/amenities",
    photos: [
      {"src":"/new-homes/woodforest/amenity-pool.webp","alt":"Community pool at Woodforest","width":960,"height":1205},
      {"src":"/new-homes/woodforest/pool.webp","alt":"Pool at The Vue in Woodforest","width":960,"height":1204},
      {"src":"/new-homes/woodforest/pavilion.webp","alt":"Pavilion at The Vue in Woodforest","width":960,"height":1204},
      {"src":"/new-homes/woodforest/trail.webp","alt":"Trail at Woodforest","width":960,"height":1204},
      {"src":"/new-homes/woodforest/golf.webp","alt":"Junior golfer on the course at Woodforest","width":960,"height":1200},
      {"src":"/new-homes/woodforest/hero.webp","alt":"Overlook published as The Vue at Woodforest","width":960,"height":1204},
      {"src":"/new-homes/woodforest/pines.webp","alt":"Pine woods at Woodforest","width":960,"height":1200},
      {"src":"/new-homes/woodforest/palms.webp","alt":"Palm fronds in a Woodforest amenity photo","width":960,"height":1200},
    ],
  },
  "fairwater": {
    creditName: "Fairwater",
    creditUrl: "https://www.forestar.com/community/fairwater/",
    photos: [
      {"src":"/new-homes/fairwater/hero.webp","alt":"Fairwater Park sign and playground","width":1600,"height":1068},
      {"src":"/new-homes/fairwater/splash.webp","alt":"Splash pad at Fairwater","width":1200,"height":801},
      {"src":"/new-homes/fairwater/park.webp","alt":"Park lawn at Fairwater","width":1200,"height":801},
      {"src":"/new-homes/fairwater/park-2.webp","alt":"Park path at Fairwater","width":1200,"height":801},
      {"src":"/new-homes/fairwater/park-3.webp","alt":"Play area at Fairwater","width":1200,"height":801},
      {"src":"/new-homes/fairwater/pickleball.webp","alt":"Pickleball court at Fairwater","width":1200,"height":801},
      {"src":"/new-homes/fairwater/picnic.webp","alt":"Picnic area at Fairwater","width":1200,"height":801},
      {"src":"/new-homes/fairwater/lawn.webp","alt":"Open lawn at Fairwater","width":1200,"height":801},
    ],
  },
  "the-woodlands-hills": {
    creditName: "The Woodlands Hills",
    creditUrl: "https://thewoodlandshills.com/",
    photos: [
      {"src":"/new-homes/the-woodlands-hills/hero.webp","alt":"Aerial overview of The Woodlands Hills","width":1600,"height":964},
      {"src":"/new-homes/the-woodlands-hills/pool.webp","alt":"Pool at The Woodlands Hills","width":1200,"height":801},
      {"src":"/new-homes/the-woodlands-hills/fitness-pool.webp","alt":"Fitness pool at The Woodlands Hills","width":1200,"height":801},
      {"src":"/new-homes/the-woodlands-hills/path.webp","alt":"Residents walking a pathway at The Woodlands Hills","width":1200,"height":800},
      {"src":"/new-homes/the-woodlands-hills/bridge.webp","alt":"Bridge on a trail at The Woodlands Hills","width":800,"height":1200},
      {"src":"/new-homes/the-woodlands-hills/school-path.webp","alt":"Path toward school at The Woodlands Hills","width":1200,"height":674},
      {"src":"/new-homes/the-woodlands-hills/model.webp","alt":"J. Patrick model home in The Woodlands Hills","width":1200,"height":800},
      {"src":"/new-homes/the-woodlands-hills/harvest.webp","alt":"Community gathering at The Woodlands Hills","width":1200,"height":679},
    ],
  },
  "harmony": {
    creditName: "Harmony",
    creditUrl: "https://landtejas.com/historical/harmony/",
    photos: [
      {"src":"/new-homes/harmony/hero.webp","alt":"Splash pad at Harmony, the hero photo on the Land Tejas page","width":1800,"height":563},
    ],
  },
  "woodsons-reserve": {
    creditName: "Woodson's Reserve",
    creditUrl: "https://woodsonsreserve.com/",
    photos: [
      {"src":"/new-homes/woodsons-reserve/club.webp","alt":"Seating inside the Woodson's Club","width":850,"height":580},
      {"src":"/new-homes/woodsons-reserve/grounds.webp","alt":"Landscaped grounds at Woodson's Reserve","width":1200,"height":801},
      {"src":"/new-homes/woodsons-reserve/homes.webp","alt":"Homes at Woodson's Reserve","width":800,"height":800},
      {"src":"/new-homes/woodsons-reserve/school.webp","alt":"School interior published on the Woodson's Reserve site","width":800,"height":800},
      {"src":"/new-homes/woodsons-reserve/event-lawn.webp","alt":"Outdoor gathering at Woodson's Reserve","width":1000,"height":600},
      {"src":"/new-homes/woodsons-reserve/hero.webp","alt":"Candy-making event for residents at Woodson's Reserve","width":1800,"height":1200},
      {"src":"/new-homes/woodsons-reserve/pool.webp","alt":"Daylily in the landscaping at Woodson's Reserve","width":683,"height":1024},
      {"src":"/new-homes/woodsons-reserve/path.webp","alt":"Residents at an indoor community event at Woodson's Reserve","width":640,"height":480},
    ],
  },
  "bridgeland": {
    creditName: "Bridgeland",
    creditUrl: "https://www.bridgeland.com/",
    photos: [
      {"src":"/new-homes/bridgeland/hero.webp","alt":"Runner on a boardwalk over Josey Lake in Bridgeland","width":1114,"height":835},
      {"src":"/new-homes/bridgeland/pools.webp","alt":"Pool amenity photo on the Bridgeland site","width":742,"height":494},
      {"src":"/new-homes/bridgeland/trails.webp","alt":"Trail photo on the Bridgeland site","width":740,"height":494},
      {"src":"/new-homes/bridgeland/parks.webp","alt":"Park photo on the Bridgeland site","width":742,"height":494},
      {"src":"/new-homes/bridgeland/amenities.webp","alt":"Amenity view on the Bridgeland site","width":1200,"height":514},
      {"src":"/new-homes/bridgeland/lilypad.webp","alt":"Lily Pad Park in Bridgeland","width":1200,"height":675},
      {"src":"/new-homes/bridgeland/creekland.webp","alt":"Creekland Village in Bridgeland","width":1200,"height":800},
      {"src":"/new-homes/bridgeland/prairieland.webp","alt":"Prairieland Village in Bridgeland","width":1200,"height":800},
    ],
  },
  "towne-lake": {
    creditName: "Towne Lake",
    creditUrl: "https://townelaketexas.com/",
    photos: [
      {"src":"/new-homes/towne-lake/hero.webp","alt":"Water skiing on the lake at Towne Lake","width":1800,"height":1200},
      {"src":"/new-homes/towne-lake/marina.webp","alt":"Marina at Towne Lake","width":1200,"height":613},
      {"src":"/new-homes/towne-lake/boardwalk.webp","alt":"Boardwalk at Towne Lake","width":1200,"height":800},
      {"src":"/new-homes/towne-lake/waterpark.webp","alt":"Water park at Towne Lake","width":1200,"height":800},
      {"src":"/new-homes/towne-lake/lakehouse.webp","alt":"Lake house at Towne Lake","width":1200,"height":800},
      {"src":"/new-homes/towne-lake/docks.webp","alt":"Boat docks at Towne Lake","width":1200,"height":801},
      {"src":"/new-homes/towne-lake/trails.webp","alt":"Parks and trails at Towne Lake","width":1200,"height":801},
      {"src":"/new-homes/towne-lake/boat.webp","alt":"Boat on the lake at Towne Lake","width":1127,"height":599},
    ],
  },
  "marvida": {
    creditName: "Marvida",
    creditUrl: "https://marvidahouston.com/",
    photos: [
      {"src":"/new-homes/marvida/hero.webp","alt":"Aerial of Marvida","width":1800,"height":1011},
      {"src":"/new-homes/marvida/aerial-2.webp","alt":"Neighborhood aerial at Marvida","width":1200,"height":674},
      {"src":"/new-homes/marvida/amenity.webp","alt":"Amenity aerial at Marvida","width":1200,"height":674},
      {"src":"/new-homes/marvida/street.webp","alt":"Streetscape at Marvida","width":1200,"height":674},
      {"src":"/new-homes/marvida/homes.webp","alt":"Homes at Marvida","width":1200,"height":844},
      {"src":"/new-homes/marvida/play.webp","alt":"Outdoor area at Marvida","width":1200,"height":802},
    ],
  },
  "dellrose": {
    creditName: "Dellrose",
    creditUrl: "https://dellroseliving.com/",
    photos: [
      {"src":"/new-homes/dellrose/hero.webp","alt":"Aerial of Dellrose","width":1800,"height":1011},
      {"src":"/new-homes/dellrose/aerial-2.webp","alt":"Second aerial of Dellrose","width":1200,"height":680},
      {"src":"/new-homes/dellrose/homes.webp","alt":"Homes in Dellrose","width":1200,"height":804},
      {"src":"/new-homes/dellrose/street.webp","alt":"Street in Dellrose","width":1200,"height":810},
      {"src":"/new-homes/dellrose/green.webp","alt":"Green space in Dellrose","width":1200,"height":807},
      {"src":"/new-homes/dellrose/monument.webp","alt":"Dellrose entrance monument","width":1200,"height":588},
      {"src":"/new-homes/dellrose/model.webp","alt":"Coventry model home in Dellrose","width":1200,"height":703},
    ],
  },
  "sunterra": {
    creditName: "Sunterra",
    creditUrl: "https://sunterratx.com/",
    photos: [
      {"src":"/new-homes/sunterra/beach.webp","alt":"Beach cabanas at the Sunterra lagoon","width":1200,"height":800},
      {"src":"/new-homes/sunterra/lagoon.webp","alt":"Residents in the Sunterra lagoon","width":960,"height":633},
      {"src":"/new-homes/sunterra/hero.webp","alt":"The Retreat amenity village at Sunterra","width":1600,"height":1198},
      {"src":"/new-homes/sunterra/welcome.webp","alt":"Welcome center at Sunterra","width":1200,"height":1109},
      {"src":"/new-homes/sunterra/model.webp","alt":"Model home at Sunterra","width":640,"height":428},
    ],
  },
  "sunterra-lakes": {
    creditName: "Sunterra Lakes",
    creditUrl: "https://sunterralakestx.com/",
    photos: [
      {"src":"/new-homes/sunterra-lakes/hero.webp","alt":"Splash pad at Sunterra Lakes","width":1800,"height":1707},
      {"src":"/new-homes/sunterra-lakes/pool.webp","alt":"Pool at Sunterra Lakes","width":960,"height":712},
      {"src":"/new-homes/sunterra-lakes/slide.webp","alt":"Waterslide at the Sunterra Lakes pool","width":960,"height":640},
      {"src":"/new-homes/sunterra-lakes/playground.webp","alt":"Playground at Sunterra Lakes","width":960,"height":960},
      {"src":"/new-homes/sunterra-lakes/park.webp","alt":"Park lawn at Sunterra Lakes","width":960,"height":1440},
      {"src":"/new-homes/sunterra-lakes/patio.webp","alt":"Outdoor patio at Sunterra Lakes","width":960,"height":960},
      {"src":"/new-homes/sunterra-lakes/family-pool.webp","alt":"Family at the Sunterra Lakes pool","width":960,"height":815},
      {"src":"/new-homes/sunterra-lakes/gym.webp","alt":"Fitness room photo on the Sunterra Lakes site","width":960,"height":712},
    ],
  },
  "the-highlands": {
    creditName: "The Highlands",
    creditUrl: "https://thehighlands.com/",
    photos: [
      {"src":"/new-homes/the-highlands/slides.webp","alt":"Water slides at The Highlands","width":1600,"height":1067},
      {"src":"/new-homes/the-highlands/clubhouse.webp","alt":"The Hideaway clubhouse at The Highlands","width":1400,"height":933},
      {"src":"/new-homes/the-highlands/wings.webp","alt":"Wing sculpture at The Highlands","width":1200,"height":800},
      {"src":"/new-homes/the-highlands/lake.webp","alt":"Parent and child on a wooded path, published on The Highlands site","width":499,"height":392},
      {"src":"/new-homes/the-highlands/gathering.webp","alt":"Model home interior published on The Highlands site","width":1200,"height":798},
      {"src":"/new-homes/the-highlands/event.webp","alt":"Residents at a Highlands community event","width":1400,"height":933},
    ],
  },
  "valley-ranch": {
    creditName: "Valley Ranch",
    creditUrl: "https://www.valley-ranch.com/",
    photos: [
      {"src":"/new-homes/valley-ranch/live.webp","alt":"Clubhouse or leasing building at Valley Ranch","width":688,"height":564},
      {"src":"/new-homes/valley-ranch/entry.webp","alt":"Aerial of Valley Ranch Town Center and the Grand Parkway interchange","width":1200,"height":626},
      {"src":"/new-homes/valley-ranch/play.webp","alt":"Play photo published on the Valley Ranch site","width":688,"height":564},
      {"src":"/new-homes/valley-ranch/shop.webp","alt":"Shopping photo published on the Valley Ranch site","width":688,"height":564},
      {"src":"/new-homes/valley-ranch/dine.webp","alt":"Dining photo published on the Valley Ranch site","width":688,"height":564},
    ],
  },
  "harrington-trails": {
    creditName: "D.R. Horton",
    creditUrl: "https://www.drhorton.com/texas/houston/new-caney/harrington-trails-at-the-canopies",
    photos: [
      {"src":"/new-homes/harrington-trails/hero.webp","alt":"Aerial of lakes and homes in the Harrington Trails gallery","width":1150,"height":647},
      {"src":"/new-homes/harrington-trails/street.webp","alt":"Homes in Harrington Trails","width":1150,"height":647},
      {"src":"/new-homes/harrington-trails/homes.webp","alt":"Another view of homes in Harrington Trails","width":1150,"height":647},
      {"src":"/new-homes/harrington-trails/front.webp","alt":"Home on Central Concave Drive in Harrington Trails","width":1150,"height":647},
      {"src":"/new-homes/harrington-trails/yard.webp","alt":"Front yard in Harrington Trails","width":1150,"height":647},
      {"src":"/new-homes/harrington-trails/elevation.webp","alt":"Home elevation in Harrington Trails","width":1150,"height":647},
    ],
  },
  "the-canopies": {
    creditName: "The Canopies",
    creditUrl: "https://www.forestar.com/community/the-canopies/",
    photos: [
      {"src":"/new-homes/the-canopies/hero.webp","alt":"The Canopies entrance monument and lake","width":1600,"height":1066},
      {"src":"/new-homes/the-canopies/aerial-2.webp","alt":"Aerial in The Canopies gallery","width":1200,"height":799},
      {"src":"/new-homes/the-canopies/aerial-3.webp","alt":"Lake aerial in The Canopies gallery","width":1200,"height":799},
      {"src":"/new-homes/the-canopies/homes.webp","alt":"Homes in The Canopies gallery","width":1200,"height":800},
      {"src":"/new-homes/the-canopies/street.webp","alt":"Street of homes in The Canopies gallery","width":1200,"height":800},
      {"src":"/new-homes/the-canopies/park.webp","alt":"Neighborhood view in The Canopies gallery","width":1200,"height":800},
      {"src":"/new-homes/the-canopies/view.webp","alt":"Another neighborhood view in The Canopies gallery","width":1200,"height":800},
      {"src":"/new-homes/the-canopies/trees.webp","alt":"Trees and homes in The Canopies gallery","width":1200,"height":800},
    ],
  },
  "tavola": {
    creditName: "Tavola",
    creditUrl: "https://friendswooddevelopment.com/communities/master-planned/tavola",
    photos: [
      {"src":"/new-homes/tavola/hero.webp","alt":"Entry monument area at Tavola","width":1800,"height":1027},
      {"src":"/new-homes/tavola/trails.webp","alt":"Trail in Tavola","width":1200,"height":800},
      {"src":"/new-homes/tavola/playground.webp","alt":"Playground in Tavola","width":1200,"height":800},
      {"src":"/new-homes/tavola/playground-2.webp","alt":"Second playground view in Tavola","width":1200,"height":800},
      {"src":"/new-homes/tavola/landscape.webp","alt":"Landscaping in Tavola","width":1200,"height":800},
      {"src":"/new-homes/tavola/rec.webp","alt":"Recreation center at Tavola","width":600,"height":338},
      {"src":"/new-homes/tavola/pool.webp","alt":"Playground beside the Tavola recreation area","width":600,"height":338},
      {"src":"/new-homes/tavola/club.webp","alt":"Amenity interior at Tavola","width":600,"height":400},
    ],
  },
  "amira": {
    creditName: "Amira",
    creditUrl: "https://amiratexas.com/",
    photos: [
      {"src":"/new-homes/amira/hero.webp","alt":"Resort pool and clubhouse at Amira","width":1234,"height":685},
    ],
  },
  "evergreen": {
    creditName: "Evergreen",
    creditUrl: "https://evergreen-texas.com/amenities/",
    photos: [
      {"src":"/new-homes/evergreen/pool.webp","alt":"Pool and lounge chairs at The Arbor in Evergreen, with a wood pavilion behind the water","width":1328,"height":884},
      {"src":"/new-homes/evergreen/splash.webp","alt":"Splash pad at The Arbor in Evergreen","width":1328,"height":884},
      {"src":"/new-homes/evergreen/park.webp","alt":"Children on a climbing structure, published with Curiosity Park on the Evergreen site","width":1142,"height":958},
    ],
  },
  "avalon-at-cypress": {
    creditName: "Taylor Morrison",
    creditUrl: "https://www.taylormorrison.com/tx/houston/avalon-at-cypress",
    photos: [
      {"src":"/new-homes/avalon-at-cypress/hero.webp","alt":"Front of the stone and stucco home published for 9207 Ocean Onyx at Avalon at Cypress","width":1000,"height":668},
    ],
  },
  "grand-mason-crossing": {
    creditName: "Long Lake Ltd.",
    creditUrl: "https://www.longlakeltd.com/new-homes/communities/grand-mason-crossing/",
    photos: [
      {"src":"/new-homes/grand-mason-crossing/hero.webp","alt":"Stone and brick home published as the Grand Mason Crossing image","width":1600,"height":800},
    ],
  },
  "mason-woods": {
    creditName: "Tri Pointe Homes",
    creditUrl: "https://www.tripointehomes.com/tx/houston/mason-woods",
    photos: [
      {"src":"/new-homes/mason-woods/hero.webp","alt":"Pool, pavilion, and playground published on the Tri Pointe Mason Woods page","width":1600,"height":1066},
    ],
  },
  "everly": {
    creditName: "Everly",
    creditUrl: "https://www.everlytx.com/",
    photos: [
      {"src":"/new-homes/everly/hero.webp","alt":"White brick two-story home at 18831 Peony Manor Lane, published on the Everly site","width":1600,"height":900},
    ],
  },
  "stewarts-ranch": {
    creditName: "Meritage Homes",
    creditUrl: "https://www.meritagehomes.com/state/tx/houston/stewarts-ranch",
    photos: [
      {"src":"/new-homes/stewarts-ranch/hero.webp","alt":"Single-story stone home published on the Meritage Homes Stewart's Ranch page","width":1600,"height":1200},
    ],
  },
  "two-step-farm": {
    creditName: "Two Step Farm",
    creditUrl: "https://twostepfarm.com/",
    photos: [
      {"src":"/new-homes/two-step-farm/hall.webp","alt":"Wood building with a Two Step Hall sign, published on the Two Step Farm site","width":1600,"height":900},
      {"src":"/new-homes/two-step-farm/farm-shop.webp","alt":"Farm Shop building published on the Two Step Farm site","width":1600,"height":900},
      {"src":"/new-homes/two-step-farm/pavilion.webp","alt":"Open pavilion with string lights, published on the Two Step Farm site","width":1600,"height":900},
    ],
  },
  "colton": {
    creditName: "COLTON",
    creditUrl: "https://coltontx.com/",
    photos: [
      {"src":"/new-homes/colton/hero.webp","alt":"White building with a Todd Mission sign, published on the COLTON site","width":1600,"height":1068},
      {"src":"/new-homes/colton/construction.webp","alt":"Building under construction at sunset, published on the COLTON site","width":1600,"height":1068},
      {"src":"/new-homes/colton/music.webp","alt":"Musician performing at a COLTON community event","width":1600,"height":2000},
      {"src":"/new-homes/colton/event.webp","alt":"Performer with a lasso at a COLTON community event","width":1600,"height":1068},
    ],
  },
  "elyson": {
    creditName: "Elyson",
    creditUrl: "https://www.elyson.com/",
    photos: [
      {"src":"/new-homes/elyson/hero.webp","alt":"Residents by a lake in Elyson, from the community homepage","width":723,"height":768},
      {"src":"/new-homes/elyson/builders.webp","alt":"Kitchen published on the Elyson builders page","width":1200,"height":366},
    ],
  },
  "cane-island": {
    creditName: "Cane Island",
    creditUrl: "https://caneisland.com/homes/builders",
    photos: [
      {"src":"/new-homes/cane-island/models.webp","alt":"Model home published on the Cane Island builders page","width":1200,"height":664},
    ],
  },
  "oakhill-reserve": {
    creditName: "Tri Pointe Homes",
    creditUrl: "https://www.tripointehomes.com/tx/houston/oakhill-reserve",
    photos: [
      {"src":"/new-homes/oakhill-reserve/hero.webp","alt":"Sales center homes at Oakhill Reserve","width":1600,"height":1067},
    ],
  },
  "enclave-at-newport": {
    creditName: "Davidson Homes",
    creditUrl: "https://www.davidsonhomes.com/states/texas/houston-market-area/crosby/enclave-at-newport/",
    photos: [
      {"src":"/new-homes/enclave-at-newport/hero.webp","alt":"Davidson Homes sales center at 16023 Port O Call Street in Enclave at Newport","width":1600,"height":1067},
      {"src":"/new-homes/enclave-at-newport/two.webp","alt":"Photo on the Enclave at Newport page","width":1200,"height":802},
      {"src":"/new-homes/enclave-at-newport/three.webp","alt":"Second photo on the Enclave at Newport page","width":1200,"height":800},
      {"src":"/new-homes/enclave-at-newport/four.webp","alt":"Third photo on the Enclave at Newport page","width":1200,"height":800},
    ],
  },
  "river-ranch-trails": {
    creditName: "Coventry Homes",
    creditUrl: "https://www.coventryhomes.com/new-homes/tx/dayton/river-ranch-trails/",
    photos: [
      {"src":"/new-homes/river-ranch-trails/hero.webp","alt":"Angel Lagoon beach at River Ranch","width":1600,"height":1423},
      {"src":"/new-homes/river-ranch-trails/lagoon.webp","alt":"Lagoon photo on the River Ranch Trails page","width":1200,"height":900},
      {"src":"/new-homes/river-ranch-trails/beach.webp","alt":"Beach at Angel Lagoon","width":1200,"height":800},
      {"src":"/new-homes/river-ranch-trails/home.webp","alt":"Home at 209 Estelle Court in River Ranch Trails","width":1200,"height":800},
      {"src":"/new-homes/river-ranch-trails/street.webp","alt":"Street scene on the River Ranch Trails page","width":1200,"height":899},
      {"src":"/new-homes/river-ranch-trails/park.webp","alt":"Another River Ranch photo on the Coventry page","width":1200,"height":899},
    ],
  },
  "cross-creek-west": {
    creditName: "Cross Creek West",
    creditUrl: "https://www.crosscreekwesttx.com/amenities",
    photos: [
      {"src":"/new-homes/cross-creek-west/hero.webp","alt":"Aerial of tennis courts, the pool, and playground at The Waterhole in Cross Creek West","width":1800,"height":1200},
      {"src":"/new-homes/cross-creek-west/waterhole.webp","alt":"Overhead view of The Waterhole pool, playground, and courts at Cross Creek West","width":1800,"height":1348},
      {"src":"/new-homes/cross-creek-west/pool.webp","alt":"Residents at the Cross Creek West community pool","width":1800,"height":1200},
      {"src":"/new-homes/cross-creek-west/playground.webp","alt":"Playground beside the pool at The Waterhole in Cross Creek West","width":1800,"height":1200},
      {"src":"/new-homes/cross-creek-west/fitness.webp","alt":"Fitness center at The Waterhole in Cross Creek West","width":1800,"height":1201},
    ],
  },
  "tamarron": {
    creditName: "D.R. Horton",
    creditUrl: "https://www.drhorton.com/texas/houston/fulshear/tamarron",
    photos: [
      {"src":"/new-homes/tamarron/hero.webp","alt":"Lancaster model exterior published on the D.R. Horton Tamarron page","width":1030,"height":579},
    ],
  },
  "grand-oaks": {
    creditName: "Century Communities",
    creditUrl: "https://www.centurycommunities.com/find-your-new-home/texas/houston-metro/mont-belvieu/grand-oaks/",
    photos: [
      {"src":"/new-homes/grand-oaks/hero.webp","alt":"Grand Oaks model home published on the Century Communities page","width":1800,"height":1348},
      {"src":"/new-homes/grand-oaks/home.webp","alt":"Home at 12026 Old Fashion Circle in Grand Oaks, Mont Belvieu","width":1800,"height":1200},
    ],
  },
  "sienna": {
    creditName: "Sienna",
    creditUrl: "https://www.siennatx.com/",
    photos: [
      {"src":"/new-homes/sienna/hero.webp","alt":"Water slide and pool published on the Sienna homepage","width":960,"height":910},
      {"src":"/new-homes/sienna/pool.webp","alt":"Pool with a Sienna Plantation chair, published on the Sienna homepage","width":1200,"height":800},
    ],
  },
};

function imageSize(file: string) {
  const buf = fs.readFileSync(file);
  if (buf[0] === 0x89 && buf.toString("ascii", 1, 4) === "PNG") {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < buf.length) {
      if (buf[offset] !== 0xff) break;
      const marker = buf[offset + 1];
      const length = buf.readUInt16BE(offset + 2);
      if (marker >= 0xc0 && marker <= 0xc2) {
        return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
      }
      offset += 2 + length;
    }
  }
  if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    const chunk = buf.toString("ascii", 12, 16);
    if (chunk === "VP8X") {
      return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
    }
    if (chunk === "VP8 " && buf.length >= 30) {
      return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    }
    if (chunk === "VP8L" && buf.length >= 25) {
      const bits = buf.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
  }
  return { width: 1600, height: 1067 };
}

const natalieElysonAlts = [
  "Resort-style pool with shaded lounge seating at Elyson's amenity center, Katy TX",
  "Covered poolside patio with dining tables overlooking the Elyson pool",
  "Splash pad and lawn with colorful Adirondack chairs and homes behind",
  "Lakeside Landing pavilion with stone fireplace overlooking the lake",
  "Lake and walking trail with new homes along the shoreline",
  "Two-story light-brick new home with modern black windows",
  "Open living room with fireplace and wall of shuttered windows",
  "Kitchen with blue-gray cabinetry, wood range hood and marble island",
  "Two-island kitchen with white quartz counters and blue cabinets",
  "Chef's kitchen with oak cabinetry, wine storage and black-marble waterfall island",
  "Formal dining room with soaring ceiling, chandelier and built-in bar",
  "Primary bedroom with sitting area and tall shuttered windows",
  "Primary bath with freestanding tub and glass tile shower",
  "Spa bath with marble-look tile, freestanding tub and walk-in shower",
  "Laundry room with built-in desk, open shelving and patterned tile floor",
];

/** Natalie's Elyson photos in public/images/new-homes/elyson/, files 01 through 15. */
function natalieElysonPhotos(): CommunityPhoto[] {
  const dir = path.join(process.cwd(), "public/images/new-homes/elyson");
  if (!fs.existsSync(dir)) return [];
  const photos: CommunityPhoto[] = [];
  for (let index = 0; index < natalieElysonAlts.length; index += 1) {
    const file = `elyson-natalie-${String(index + 1).padStart(2, "0")}.webp`;
    const full = path.join(dir, file);
    if (!fs.existsSync(full)) continue;
    const size = imageSize(full);
    photos.push({
      src: `/images/new-homes/elyson/${file}`,
      alt: natalieElysonAlts[index],
      width: size.width,
      height: size.height,
      creditName: "Natalie Pilkinton",
    });
  }
  return photos;
}

export function getCommunityGallery(slug: string) {
  const gallery = communityGalleries[slug];
  if (!gallery) return undefined;
  if (slug !== "elyson") return gallery;
  const natalie = natalieElysonPhotos();
  if (natalie.length === 0) return gallery;
  const amenities = natalie.filter((photo) => {
    const match = photo.src.match(/elyson-natalie-(\d+)\./);
    return match ? Number(match[1]) <= 5 : false;
  });
  const interiors = natalie.filter((photo) => {
    const match = photo.src.match(/elyson-natalie-(\d+)\./);
    return match ? Number(match[1]) >= 6 : false;
  });
  const complete = amenities.length === 5 && interiors.length === 10;
  return {
    ...gallery,
    photos: complete ? amenities : [...amenities, ...gallery.photos],
    interiorPhotos: interiors,
  };
}

/** Pulls the first "from the $X" phrase a developer actually published. */
export function publishedPriceLabel(note: string) {
  const match = note.match(/from (?:the )?(?:low |mid |high )?\$[\d,]+(?:s| millions?)?/i);
  return match ? match[0].replace(/\s+/g, " ") : null;
}

export function amenityChips(amenities: string[], count = 4) {
  return amenities.slice(0, count).map((item) => {
    const head = item.split(/[,.(]/)[0]?.trim() ?? item;
    return head.length > 46 ? `${head.slice(0, 44).trim()}...` : head;
  });
}
