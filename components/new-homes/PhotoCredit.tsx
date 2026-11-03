export function PhotoCredit({
  name,
  url,
  tone = "light",
}: {
  name: string;
  url: string;
  tone?: "light" | "on-dark";
}) {
  return (
    <p className={tone === "on-dark" ? "mb-0 text-xs text-cream/85" : "mb-0 text-xs text-gray-dark"}>
      Photo:{" "}
      <a href={url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
        {name}
      </a>
    </p>
  );
}
