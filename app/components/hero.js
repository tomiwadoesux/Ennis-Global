import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./arrow-icon";
import CertBadges from "./cert-badges";

const SERVES = [
  {
    label: "Federal Agencies",
    description:
      "Prime and sub-contracting support across DoD, VA, GSA, and civilian agencies — from capture through delivery.",
  },
  {
    label: "State & Local",
    description:
      "Workforce, transportation, and operational advisory for state departments, counties, and municipal programs.",
  },
  {
    label: "Private Enterprise",
    description:
      "Teaming, compliance, and growth strategy for primes, small businesses, and private-sector partners.",
  },
];

const STATS = [
  { value: "3", label: "Practice Areas" },
  { value: "50", label: "States Eligible to Serve" },
  { value: "100%", label: "Compliance-Ready" },
];

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-[1440px] px-6 pt-10 pb-20 md:px-10 md:pt-14 md:pb-28">
      {/* Headline — smaller, wider */}
      <h1 className="mx-auto max-w-[34ch] text-center text-[36px] leading-[1.08] font-semibold tracking-[-0.03em] md:max-w-[40ch] md:text-[48px] lg:text-[58px] xl:text-[64px]">
        Consulting &amp; Business Solutions, Built for{" "}
        <span
          className="whitespace-nowrap"
          style={{ color: "var(--accent-green)" }}
        >
          Every Contract.
        </span>
      </h1>

      {/* Tagline */}
      <p className="mx-auto mt-6 max-w-[56ch] text-center text-[15px] leading-[1.65] text-muted md:mt-8 md:text-[16px]">
        A disabled veteran-owned consulting firm advising on government
        contracting, workforce subletting, and non-emergency medical
        transportation &mdash; all under one roof.
      </p>

      {/* Primary CTAs — brand-style */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:mt-10">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 px-5 py-3.5 text-[14px] font-medium text-white transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: "var(--accent-green)" }}
        >
          Book a Consultation
          <ArrowRight size={14} />
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground hover:opacity-60"
        >
          Explore Services
          <ArrowRight size={13} />
        </Link>
      </div>

      {/* Hero image — framed */}
      <div className="relative mt-14 md:mt-20">
        <div
          className="absolute -inset-x-3 -inset-y-3 -z-10 rounded-[28px] md:-inset-x-5 md:-inset-y-5"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.72 0.16 140.82 / 0.12) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div
          className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl md:aspect-[21/10]"
          style={{
            boxShadow:
              "0 30px 60px -25px oklch(0.2867 0.1 140.82 / 0.35), 0 8px 24px -12px oklch(0.2867 0.1 140.82 / 0.15)",
          }}
        >
          {/* Hero — Pexels (Mikhail Nilov): diverse team collaborating in modern office meeting */}
          <Image
            src="https://images.pexels.com/photos/9301297/pexels-photo-9301297.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Ennis Global consulting team collaborating on a federal capture strategy"
            fill
            priority
            sizes="(min-width: 1440px) 1440px, 100vw"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, oklch(0.2 0.05 140.82 / 0.55) 100%)",
            }}
            aria-hidden
          />

          <CornerMark className="absolute left-4 top-4 text-white/60 md:left-6 md:top-6" />
          <CornerMark
            className="absolute right-4 top-4 text-white/60 md:right-6 md:top-6"
            rotate="rotate-90"
          />
          <CornerMark
            className="absolute left-4 bottom-4 text-white/60 md:left-6 md:bottom-6"
            rotate="-rotate-90"
          />
          <CornerMark
            className="absolute right-4 bottom-4 text-white/60 md:right-6 md:bottom-6"
            rotate="rotate-180"
          />

          {/* Caption row */}
          <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-4 md:inset-x-8 md:bottom-8">
            <div className="flex flex-col gap-1 text-white">
              <span className="font-mono text-[10px] tracking-[0.28em] text-white/70 uppercase">
                Operating Nationwide
              </span>
              <span className="text-[14px] font-medium tracking-[-0.01em] md:text-[16px]">
                Federal · State · Private
              </span>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 backdrop-blur md:flex">
              <span className="font-mono text-[10px] tracking-[0.22em] text-white uppercase">
                Since 2025
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials band */}
      <div className="mt-16 flex flex-col items-center gap-8 border-t border-border pt-12 text-center md:mt-20 md:flex-row md:items-center md:justify-between md:gap-10 md:text-left">
        <div className="max-w-md">
          <div className="eyebrow mb-3">Certified &amp; Verified</div>
          <p className="text-[14px] leading-[1.65] text-muted">
            Disabled veteran-owned consulting &amp; business solutions.
            Registered in SAM.gov and certified to serve federal, state,
            and local agencies.
          </p>
        </div>
        <CertBadges
          variant="light"
          size="md"
          showLabels={false}
          className="justify-center md:justify-end"
        />
      </div>

      {/* Who We Serve */}
      <div className="relative mt-12 overflow-hidden rounded-2xl md:mt-16">
        <div
          className="relative w-full overflow-hidden text-white"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 10%, oklch(0.55 0.18 140.82 / 0.22) 0%, transparent 55%), radial-gradient(circle at 85% 90%, oklch(0.35 0.14 140.82 / 0.55) 0%, transparent 60%), linear-gradient(135deg, var(--accent-green-deep) 0%, var(--accent-green) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
            aria-hidden
          />

          <CornerMark className="absolute left-6 top-6 text-white/30 md:left-10 md:top-10" />
          <CornerMark className="absolute right-6 top-6 text-white/30 md:right-10 md:top-10" rotate="rotate-90" />
          <CornerMark className="absolute left-6 bottom-6 text-white/30 md:left-10 md:bottom-10" rotate="-rotate-90" />
          <CornerMark className="absolute right-6 bottom-6 text-white/30 md:right-10 md:bottom-10" rotate="rotate-180" />

          <div className="relative z-10 flex flex-col gap-10 p-6 md:gap-14 md:p-12 lg:p-14">
            {/* Header row — no dot */}
            <div className="flex items-center justify-center">
              <span className="font-mono text-[11px] tracking-[0.28em] text-white/60 uppercase">
                Who We Serve
              </span>
            </div>

            <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-8 md:grid-cols-3 md:gap-0 md:pt-10">
              {SERVES.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex flex-col gap-4 md:px-8 ${
                    i > 0 ? "border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pt-0" : ""
                  } ${i === 0 ? "md:pl-0" : ""} ${i === SERVES.length - 1 ? "md:pr-0" : ""}`}
                >
                  <h3 className="text-[22px] font-medium tracking-[-0.02em] md:text-[26px]">
                    {item.label}
                  </h3>
                  <p className="text-[13px] leading-[1.65] text-white/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Every Contract — redesigned */}
      <div className="relative mt-8 overflow-hidden rounded-2xl border border-border md:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left: headline panel */}
          <div className="relative flex flex-col justify-between gap-10 p-8 md:p-12 lg:col-span-5 lg:p-14">
            <div
              className="absolute inset-0 -z-0"
              style={{
                background:
                  "linear-gradient(180deg, var(--surface) 0%, #ffffff 100%)",
              }}
              aria-hidden
            />
            <div className="relative z-10 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-10"
                  style={{ backgroundColor: "var(--accent-green)" }}
                  aria-hidden
                />
                <span className="eyebrow">By the Numbers</span>
              </div>
              <h2 className="text-[40px] font-semibold leading-[1] tracking-[-0.03em] md:text-[52px] lg:text-[60px]">
                Built for{" "}
                <span style={{ color: "var(--accent-green)" }}>
                  Every Contract.
                </span>
              </h2>
              <p className="max-w-sm text-[14px] leading-[1.65] text-muted">
                Capacity, credentials, and compliance at the scale federal
                and state agencies require — without the friction.
              </p>
            </div>
            <Link
              href="/services"
              className="relative z-10 inline-flex items-center gap-2 self-start text-[13px] font-medium text-foreground hover:opacity-60"
            >
              See how we operate
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Right: stat stack */}
          <div className="lg:col-span-7">
            <dl className="flex h-full flex-col divide-y divide-border border-t border-border lg:border-t-0 lg:border-l">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="group flex flex-1 items-center justify-between gap-6 px-8 py-8 transition-colors hover:bg-surface md:px-10 md:py-10 lg:px-14"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="font-mono text-[11px] tracking-[0.28em] text-muted-2 uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <dt className="text-[15px] font-medium tracking-[-0.01em] text-foreground md:text-[17px]">
                      {s.label}
                    </dt>
                  </div>
                  <dd
                    className="text-[48px] font-semibold leading-none tracking-[-0.04em] md:text-[64px] lg:text-[72px]"
                    style={{ color: "var(--accent-green)" }}
                  >
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function CornerMark({ className = "", rotate = "" }) {
  return (
    <div
      className={`pointer-events-none h-4 w-4 ${rotate} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <path
          d="M1 6V1h5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
}
