"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { ArrowRight } from "./arrow-icon";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-40 w-full border-b border-border bg-background">
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Link href="/" aria-label="Ennis Global home">
          <Logo />
        </Link>
        <div className="flex items-center gap-4 md:gap-10">
          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 text-sm md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-foreground transition-opacity hover:opacity-60"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Desktop CTA */}
          <Link
            href="/contact"
            aria-label="Book a consultation"
            className="hidden h-10 w-10 items-center justify-center text-white transition-transform hover:-translate-y-0.5 md:inline-flex"
            style={{ backgroundColor: "var(--accent-green)" }}
          >
            <ArrowRight size={14} />
          </Link>
          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span
              aria-hidden
              className={`absolute block h-[1.5px] w-6 bg-foreground transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              aria-hidden
              className={`absolute block h-[1.5px] w-6 bg-foreground transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-background transition-[max-height,border-color] duration-300 ease-in-out md:hidden ${
          open ? "max-h-[520px] border-t border-border" : "max-h-0 border-t border-transparent"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-b border-border py-4 text-[20px] font-medium transition-colors ${
                  isActive ? "text-foreground" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                <span>{l.label}</span>
                <ArrowRight size={16} />
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center gap-3 px-5 py-4 text-[14px] font-medium text-white"
            style={{ backgroundColor: "var(--accent-green)" }}
          >
            Book a Consultation
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </header>
  );
}
