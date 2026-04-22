import Link from "next/link";
import Logo from "./logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1440px] border-t border-border px-6 md:px-10">
      {/* Main footer */}
      <div className="flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between md:py-12">
        <div>
          <Logo />
          <p className="mt-5 text-[13px] text-foreground">
            Ennis Global MGT Inc. · Consulting &amp; Business Solutions
          </p>
          <p className="mt-2 text-[11px] tracking-[0.12em] text-muted-2 uppercase">
            Serving Federal · State · Private
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-foreground hover:text-muted transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <span className="hidden h-3 w-px bg-border md:inline-block" aria-hidden />
          {legal.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 border-t border-border py-6 text-[11px] tracking-[0.08em] text-muted-2 md:flex-row md:items-center">
        <span>© 2025 Ennis Global MGT Inc. All rights reserved.</span>
        <span className="text-muted-2/70">Black-Owned · Disabled Veteran-Owned · SDVOSB</span>
      </div>
    </footer>
  );
}
