import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "outline" | "outline-light" | "on-blue";
type Size = "small" | "base" | "large";

export const buttonVariantClasses: Record<Variant, string> = {
  primary: "bg-blue text-white border-2 border-blue hover:bg-blue-hover hover:border-blue-hover shadow-brand-sm hover:shadow-brand-md",
  secondary: "bg-white text-blue border-2 border-blue hover:bg-blue-soft",
  outline: "bg-white text-blue border-2 border-blue hover:bg-blue-soft",
  "outline-light": "bg-cream text-blue border-2 border-cream hover:bg-white hover:border-white shadow-brand-sm",
  "on-blue": "bg-cream text-blue border-2 border-cream hover:bg-white hover:border-white shadow-brand-sm",
};

export const buttonSizeClasses: Record<Size, string> = {
  small: "px-md py-sm text-sm min-h-11",
  base: "px-lg py-md text-base min-h-12",
  large: "px-xl py-md text-lg min-h-14",
};

export const buttonBaseClasses =
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
  const classes = cn(buttonBaseClasses, buttonVariantClasses[variant], buttonSizeClasses[size], className);

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
