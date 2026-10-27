/**
 * Ping IndexNow (Bing and other participating search engines, including
 * ChatGPT search where it uses those indexes) after this key file is live.
 *
 * Usage:
 *   node scripts/indexnow.mjs
 *   node scripts/indexnow.mjs --dry-run
 *   node scripts/indexnow.mjs https://www.nataliepilkinton.com/sitemap.xml
 *
 * The key file must already be public at
 * https://www.nataliepilkinton.com/97184bebc95ddc29510a442749936c6b.txt
 * Run this after the site deploy, not against a preview URL.
 */

const KEY = "97184bebc95ddc29510a442749936c6b";
const HOST = "www.nataliepilkinton.com";
const keyLocation = `https://${HOST}/${KEY}.txt`;
const dryRun = process.argv.includes("--dry-run");
const sitemapUrl =
  process.argv.find((arg) => arg.startsWith("http")) || `https://${HOST}/sitemap.xml`;

const sitemap = await fetch(sitemapUrl);
if (!sitemap.ok) {
  console.error(`Could not read sitemap ${sitemapUrl}: ${sitemap.status}`);
  process.exit(1);
}
const xml = await sitemap.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
const urls = urlList.filter((url) => {
  try {
    return new URL(url).host === HOST;
  } catch {
    return false;
  }
});

if (urls.length === 0) {
  console.error("No URLs found in the sitemap.");
  process.exit(1);
}

const body = { host: HOST, key: KEY, keyLocation, urlList: urls.slice(0, 10000) };
console.log(`${dryRun ? "Dry run" : "Submitting"} ${body.urlList.length} URLs from ${sitemapUrl}`);
console.log(`Key file: ${keyLocation}`);

if (dryRun) {
  console.log(body.urlList.slice(0, 8).join("\n"));
  process.exit(0);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});
const text = await response.text();
console.log(`IndexNow ${response.status} ${response.statusText}`);
if (text) console.log(text);
if (!response.ok && response.status !== 202) process.exit(1);
