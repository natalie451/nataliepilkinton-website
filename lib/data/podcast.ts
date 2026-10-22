/**
 * Sugar Spice and Spirits.
 * Titles and dates are the newest uploads on
 * https://www.youtube.com/@SugarSpiceandSpirits/videos as of Oct 22, 2026,
 * in the order YouTube lists them. The channel's public RSS URL
 * (rssUrl below) returned 404 from this environment that day, including
 * for other channels, so these rows were read from the videos tab instead.
 */
export const podcastShow = {
  name: "Sugar Spice and Spirits",
  channelUrl: "https://www.youtube.com/@SugarSpiceandSpirits",
  subscribeUrl: "https://www.youtube.com/@SugarSpiceandSpirits?sub_confirmation=1",
  channelId: "UCDNI90cUjNL5-LN2Ou9jLcA",
  rssUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UCDNI90cUjNL5-LN2Ou9jLcA",
  spotifyUrl: "https://open.spotify.com/show/2swreJ0bmXSzOgobO6dLu9",
  appleUrl: "https://podcasts.apple.com/us/podcast/sugar-spice-and-spirits/id1833077789",
} as const;

export const podcastEpisodes = [
  {
    id: "-EBn5fVM_EM",
    title: "What Happens to All Your Parents’ Stuff?",
    uploadDate: "2026-10-21",
    publishedLabel: "Oct 21, 2026",
  },
  {
    id: "Dd2K4npiWJs",
    title: "Everything You Need To Know About Peptides & Hormone Balance",
    uploadDate: "2026-10-14",
    publishedLabel: "Oct 14, 2026",
  },
  {
    id: "26QqPRSr24w",
    title: "Gen X Women: Halloween Then vs Now Was Wild",
    uploadDate: "2026-10-07",
    publishedLabel: "Oct 7, 2026",
  },
  {
    id: "eyUdp_-h9Cc",
    title: "Five Friends Started a Business... Here’s What Happened",
    uploadDate: "2026-09-30",
    publishedLabel: "Sep 30, 2026",
  },
  {
    id: "HXR3mUhwo2c",
    title: "Are You Playing for the Quick Win or the Long Game?",
    uploadDate: "2026-09-23",
    publishedLabel: "Sep 23, 2026",
  },
  {
    id: "6zY7pORvSJA",
    title: "Are YOU Ready For Football Season? (Or Are You A Widow?)",
    uploadDate: "2026-09-16",
    publishedLabel: "Sep 16, 2026",
  },
  {
    id: "nM-1k4gpMuY",
    title: "A Man’s Guide to Dating Women in Their 50s: What’s Going Wrong?",
    uploadDate: "2026-09-08",
    publishedLabel: "Sep 8, 2026",
  },
  {
    id: "7GXYuNW7ivs",
    title: "Women in Business: Is Leaving Your W-2 Worth It?",
    uploadDate: "2026-09-02",
    publishedLabel: "Sep 2, 2026",
  },
  {
    id: "j8mQI6MNMEs",
    title: "WE HAD THE BEST CHILDHOOD",
    uploadDate: "2026-08-26",
    publishedLabel: "Aug 26, 2026",
  },
  {
    id: "1caiWDbDfac",
    title: "She Never Planned to Stay in Alaska-Then This Happened",
    uploadDate: "2026-08-19",
    publishedLabel: "Aug 19, 2026",
  },
  {
    id: "ShI400MQ4A0",
    title: "The CEO Trap: Why Founders Self-Sabotage - Steve Rozenberg",
    uploadDate: "2026-08-12",
    publishedLabel: "Aug 12, 2026",
  },
  {
    id: "DYg2rNcWmv8",
    title: "Hard Money Lending Explained | Real Estate Investing for Gen X Entrepreneurs",
    uploadDate: "2026-08-05",
    publishedLabel: "Aug 5, 2026",
  },
] as const;

export function youtubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}
