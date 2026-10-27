"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { MobileMenuToggle } from "@/components/layout/MobileMenuToggle";
import { CallOrTextChoice } from "@/components/cta/CallOrTextChoice";
import { Button } from "@/components/ui/Button";
import { bookingCta, siteConfig } from "@/lib/data/navigation";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenSubmenu(null);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeAll();
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) closeAll();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-[1000] border-b transition-[background-color,box-shadow,border-color] duration-300",
        scrolled ? "bg-white/95 border-gray-light shadow-brand-md" : "bg-white border-gray-light shadow-brand-sm",
      )}
    >
      <nav
        ref={navRef}
        className="max-w-[80rem] mx-auto px-lg py-md flex justify-between items-center gap-md max-md:px-md max-sm:px-sm"
      >
        <Link href="/" onClick={closeAll} className="shrink-0 inline-flex items-center gap-sm py-1" aria-label="Natalie Pilkinton home">
          <Image
            src={siteConfig.logoUrl}
            alt=""
            width={160}
            height={160}
            className="h-10 w-10 max-md:h-8 max-md:w-8"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-navy">Natalie Pilkinton</span>
            <span className="hidden sm:block text-xs text-gray-dark">Spring, TX REALTOR</span>
          </span>
        </Link>

        <Navigation
          mobileOpen={mobileOpen}
          openSubmenu={openSubmenu}
          onToggleSubmenu={(href) => setOpenSubmenu((cur) => (cur === href ? null : href))}
          onNavigate={closeAll}
        />

        <div className="flex items-center gap-sm shrink-0">
          <div className="hidden md:flex items-center gap-sm">
            <CallOrTextChoice variant="primary" size="small" />
            <Button href={bookingCta.href} variant="secondary" size="small" className="whitespace-nowrap" onClick={closeAll}>
              {bookingCta.label}
            </Button>
          </div>
          <MobileMenuToggle active={mobileOpen} onClick={() => setMobileOpen((open) => !open)} />
        </div>
      </nav>
    </header>
  );
}
