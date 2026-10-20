import { siteConfig } from "@/lib/data/navigation";

const actions = [
  { label: "Call", href: siteConfig.phoneHref, external: false },
  { label: "Text", href: siteConfig.smsHref, external: false },
  { label: "Book", href: "/booking", external: false },
];

/** Fixed call / text / book bar. Visible only on small screens. */
export function MobileContactBar() {
  return (
    <nav
      aria-label="Contact Natalie"
      className="md:hidden fixed inset-x-0 bottom-0 z-[1100] border-t border-white/15 bg-navy pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="grid grid-cols-3 list-none m-0 p-0">
        {actions.map((action) => (
          <li key={action.label}>
            <a
              href={action.href}
              className="flex items-center justify-center min-h-14 px-sm py-3 text-sm font-semibold text-white hover:text-gold"
            >
              {action.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
