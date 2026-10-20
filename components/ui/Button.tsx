import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "outline" | "outline-light" | "gold";
type Size = "small" | "base" | "large";

const variantClasses: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-gold hover:text-navy shadow-brand-sm hover:shadow-brand-md",
  secondary: "bg-cream text-navy border border-navy hover:bg-navy hover:text-white",
  outline: "bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white",
  "outline-light": "bg-transparent text-white border-2 border-white hover:bg-white hover:text-navy",
  gold: "bg-gold text-navy hover:bg-white hover:text-navy shadow-brand-sm",
};

const sizeClasses: Record<Size, string> = {
  small: "px-md py-sm text-sm",
  base: "px-lg py-md text-base",
  large: "px-xl py-md text-lg",
};

// Every button in the site shares this base: same radius, same easing, same
// hover lift, same focus ring — so primary/secondary/outline all *feel* like
// one family instead of three ad-hoc styles.
const baseClasses =
  "inline-flex items-center justify-center gap-xs rounded-xs font-semibold tracking-[0.01em] text-center " +
  "transition-all duration-200 ease-out cursor-pointer " +
  "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "base", className } = props;
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, external, children, variant: _variant, size: _size, className: _className, ...rest } = props;
    const nativeProtocol = /^(tel:|sms:|mailto:)/.test(href);
    if (external || nativeProtocol) {
      return (
        <a
          href={href}
          {...rest}
          {...(external && !nativeProtocol ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} {...rest} className={classes}>
        {children}
      </Link>
    );
  }

  const { children, variant: _variant, size: _size, className: _className, ...rest } = props as ButtonAsButton;
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
