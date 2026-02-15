import * as React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
} as const;

const variantClasses = {
  primary:
    "bg-[#E58411] text-white hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E58411]/40",
  ghost:
    "bg-transparent hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10",
} as const;

export default function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full transition active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
