import Link from "next/link";
import Logo from "./logo";
import { ArrowRight } from "./arrow-icon";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b border-border bg-background">
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Link href="/" aria-label="Ennis Global home">
          <Logo />
        </Link>
        <div className="flex items-center gap-8 md:gap-10">
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
          <Link
            href="/contact"
            aria-label="Book a briefing"
            className="inline-flex h-10 w-10 items-center justify-center bg-dark text-white transition-transform hover:-translate-y-0.5"
          >
            <ArrowRight size={14} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
