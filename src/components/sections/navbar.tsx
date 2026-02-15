"use client";

import Link from "next/link";
import { ShoppingBag, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";

const navItems = [
  { label: "Furniture", href: "#", hasDropdown: true },
  { label: "Shop", href: "#shop" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <Container>
        <div className="flex items-center justify-between h-[75px]">
          {/* Logo */}
          <Link
            href="/"
            className="text-[28px] font-bold leading-[35px] text-white hover:opacity-80 transition-opacity capitalize tracking-[0.28px]"
          >
            Panto
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-[62px]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative flex items-center gap-1 text-[18px] font-medium leading-[22px] text-white hover:text-primary transition-colors group"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    className="w-[18px] h-[18px] rotate-[-90deg] group-hover:text-primary transition-colors"
                    strokeWidth={2}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Shopping Cart */}
          <button
            className="w-[34px] h-[34px] flex items-center justify-center text-white hover:text-primary transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingBag className="w-[28px] h-[28px]" strokeWidth={1.5} />
          </button>
        </div>
      </Container>
    </nav>
  );
}
