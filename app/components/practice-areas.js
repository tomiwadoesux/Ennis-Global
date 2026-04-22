import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./arrow-icon";

const cards = [
  {
    title: "Government Contracting",
    body:
      "End-to-end consulting for firms pursuing federal, state, and local contracts — across any field. SAM.gov registration, proposal development, capture strategy, and teaming partnerships that position you to win.",
    // Pexels (RDNE): African American professional reviewing contract documents in meeting
    image:
      "https://images.pexels.com/photos/8124369/pexels-photo-8124369.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Government contracting consultant reviewing proposal documents",
  },
  {
    title: "Workforce Subletting",
    body:
      "We place vetted crews and staff into government facilities and private enterprise — janitorial, facility maintenance, grounds, and back-office support. Compliant, credentialed, and ready on day one.",
    // Pexels (Liliana Drew): two uniformed facility crew members with cleaning tools
    image:
      "https://images.pexels.com/photos/9462636/pexels-photo-9462636.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Uniformed facility maintenance crew ready for a shift",
  },
  {
    title: "NEMT & Transportation",
    body:
      "Non-emergency medical transportation operations and advisory — Medicaid routing, fleet compliance, state-funded transit programs. We consult on structure and operate on contract.",
    // Pexels (davegarcia): wheelchair rider boarding accessible van with driver assistance
    image:
      "https://images.pexels.com/photos/35831411/pexels-photo-35831411.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Rider boarding a wheelchair-accessible NEMT van with driver assistance",
  },
];

export default function PracticeAreas() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
        <div>
          <span className="eyebrow">Our Services</span>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
            What We Do
          </h2>
        </div>
        <p className="max-w-md text-[14px] leading-[1.65] text-muted">
          Three practice areas — one operating standard. Advisory when you
          need structure, execution when you need a partner who stays on.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {cards.map((c, i) => (
          <article
            key={c.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-foreground/30"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={c.image}
                alt={c.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, oklch(0.2 0.05 140.82 / 0.55) 100%)",
                }}
                aria-hidden
              />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 shadow-sm backdrop-blur">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--accent-green)" }}
                  aria-hidden
                />
                <span className="font-mono text-[10px] tracking-[0.22em] text-foreground uppercase">
                  {String(i + 1).padStart(2, "0")} / 03
                </span>
              </div>
              <h3 className="absolute inset-x-5 bottom-5 text-[22px] font-semibold leading-[1.15] tracking-[-0.01em] text-white md:text-[24px]">
                {c.title}
              </h3>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-8 p-6 md:p-7">
              <p className="text-[14px] leading-[1.65] text-muted">
                {c.body}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 self-start text-[13px] font-medium text-foreground hover:opacity-60"
              >
                Learn more
                <ArrowRight size={13} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Link
          href="/services"
          className="group inline-flex items-center gap-3 text-[15px] font-medium"
        >
          See all Services
          <span
            className="inline-flex h-9 w-9 items-center justify-center text-white transition-transform group-hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--accent-green)" }}
          >
            <ArrowRight size={14} />
          </span>
        </Link>
      </div>
    </section>
  );
}
