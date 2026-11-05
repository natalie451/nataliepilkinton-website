/**
 * Advertising tags. Both load only after the visitor accepts cookies.
 * Set googleAdsId to an AW- ID to load Google Ads. Leave it empty until that ID exists.
 */
export const trackingConfig = {
  metaPixelId: "1013831287957651",
  googleAdsId: "",
};

export function isMetaPixelId(value: string): boolean {
  return /^\d{5,20}$/.test(value);
}

export function isGoogleAdsId(value: string): boolean {
  return /^AW-\d+$/.test(value);
}

export function metaPixelSnippet(pixelId: string): string {
  return `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`;
}

export function metaPixelNoscriptHtml(pixelId: string): string {
  const src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
  return `<img height="1" width="1" style="display:none" alt="" src="${src}" />`;
}

export function googleAdsSnippet(adsId: string): string {
  return `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
gtag('js', new Date());
gtag('config', '${adsId}');`;
}
