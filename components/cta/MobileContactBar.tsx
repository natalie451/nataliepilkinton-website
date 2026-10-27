import { CallOrTextChoice } from "@/components/cta/CallOrTextChoice";

/** Fixed call-or-text / book bar. Visible only on small screens. */
export function MobileContactBar() {
  return (
    <nav
      aria-label="Contact Natalie"
      className="md:hidden fixed inset-x-0 bottom-0 z-[1100] border-t border-white/15 bg-blue pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="grid grid-cols-2 list-none m-0 p-0">
        <li className="border-r border-white/15">
          <CallOrTextChoice variant="bar" />
        </li>
        <li>
          <a
            href="/booking"
            className="flex items-center justify-center min-h-14 px-sm py-3 text-sm font-semibold text-cream hover:bg-white/10"
          >
            Book a time
          </a>
        </li>
      </ul>
    </nav>
  );
}
