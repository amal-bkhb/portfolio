import React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-on-accent hover:brightness-110 active:brightness-95 shadow-sm hover:shadow-[0_0_20px_rgba(247,164,64,0.35)] border border-transparent",
  secondary:
    "bg-transparent border border-line-strong text-fg hover:border-accent hover:text-accent hover:bg-[rgba(247,164,64,0.05)]",
  ghost:
    "bg-transparent border border-line-strong text-fg hover:border-accent hover:text-accent hover:bg-[rgba(247,164,64,0.05)]",
};

/**
 * Reusable Button component supporting primary and secondary/ghost styles,
 * polymorphic rendering as an anchor <a> when `href` is supplied,
 * automatic safe external link handling, and focus rings.
 */
export default function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
  icon,
  iconPosition = "left",
  target,
  rel,
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 flex items-center justify-center" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="shrink-0 flex items-center justify-center" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    const isExternal =
      /^https?:\/\//i.test(href) ||
      href.startsWith("//") ||
      target === "_blank";

    const computedRel = isExternal
      ? rel || "noopener noreferrer"
      : rel;
    const computedTarget = isExternal ? target || "_blank" : target;

    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        target={computedTarget}
        rel={computedRel}
        {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}

export { Button };
