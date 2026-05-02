"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "./arrow-icon";

const sectors = [
  {
    idx: "01",
    tag: "Federal",
    title: "Federal Agencies & Installations",
    body:
      "Cleaning crews at federal facilities, NEMT for VA medical centers, base support services, and prime contracts under SDVOSB and 8(a) set-asides.",
    examples: ["GSA", "VA", "DoD", "USPS"],
  },
  {
    idx: "02",
    tag: "State & Municipal",
    title: "State Programs & Local Government",
    body:
      "Medicaid transportation, state DOT routing, county facility maintenance, and municipal back-office contracts.",
    examples: ["Medicaid NEMT", "State DOT", "County"],
  },
  {
    idx: "03",
    tag: "Private",
    title: "Private Enterprise & Primes",
    body:
      "Subcontracting partnerships with primes pursuing diversity targets, plus direct staffing and facilities work for hospitals, universities, and corporate campuses.",
    examples: ["Healthcare", "Higher-Ed", "Primes"],
  },
];

const credentials = [
  { code: "8(a)", label: "SBA 8(a) Certified" },
  { code: "SDVOSB", label: "Service-Disabled Veteran-Owned" },
  { code: "MBE", label: "Minority Business Enterprise" },
  { code: "SAM", label: "SAM.gov Registered" },
];

export default function AboutGrid() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll("[data-reveal]");
    if (!items?.length) return;
    gsap.from(items, {
      y: 24,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
      clearProps: "opacity,transform",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-32"
    >
      {/* Section header */}
      <div className="relative mb-14 md:mb-20">
        <div className="flex items-start justify-between">
          <span className="eyebrow" data-reveal>Sectors &amp; Reach</span>
        </div>
        <h2
          data-reveal
          className="mt-6 max-w-[18ch] text-5xl font-semibold tracking-[-0.02em] md:text-7xl"
        >
          One firm, every tier.
        </h2>
      </div>

      {/* Main grid: identity panel + sector list */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
        {/* Identity / manifesto panel */}
        <div
          data-reveal
          className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-dark p-8 text-white md:p-10 lg:col-span-5"
        >
          <div className="absolute right-6 top-6 font-mono text-[11px] tracking-[0.18em] text-white/40">
            [ IDENTITY ]
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] tracking-[0.18em] text-white/80">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent-green-soft)" }}
              />
              EST. ENNIS GLOBAL
            </div>
            <p className="mt-8 text-[22px] leading-[1.4] font-medium md:text-[26px] md:leading-[1.35]">
              A{" "}
              <span style={{ color: "var(--accent-green-soft)" }}>
                disabled veteran-owned
              </span>
              {" "}consulting firm — built to win contracts across
              federal, state, and private sectors.
            </p>
            <p className="mt-6 max-w-md text-[14px] leading-[1.65] text-white/60">
              From cleaning crews at federal facilities to NEMT fleets serving
              Medicaid riders, we operate where credentials, compliance, and
              capacity intersect.
            </p>
          </div>

          {/* Credentials row */}
          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">
              Certifications
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {credentials.map((c) => (
                <div
                  key={c.code}
                  className="group/cred flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 transition-colors hover:bg-white/20"
                  title={c.label}
                >
                  <span className="font-mono text-[11px] font-semibold tracking-[0.1em] text-white">
                    {c.code}
                  </span>
                  <span className="hidden text-[11px] text-white/70 sm:inline">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sector list */}
        <div className="lg:col-span-7" data-reveal>
          <ul className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background">
            {sectors.map((s, i) => {
              const isActive = active === i;
              return (
                <li
                  key={s.idx}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group relative cursor-pointer p-6 transition-colors duration-300 md:p-8 ${
                    isActive ? "bg-surface" : "bg-background"
                  }`}
                >
                  <div className="flex items-start gap-5 md:gap-8">
                    <div className="font-mono text-[12px] tracking-[0.18em] text-muted-2 md:pt-1">
                      {s.idx}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] tracking-[0.18em] uppercase text-foreground">
                          {s.tag}
                        </span>
                        <h3 className="text-[18px] font-semibold tracking-[-0.01em] md:text-[20px]">
                          {s.title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-2xl text-[14px] leading-[1.65] text-muted">
                        {s.body}
                      </p>

                      <div
                        className={`mt-4 flex flex-wrap gap-2 transition-all duration-500 ${
                          isActive
                            ? "max-h-20 opacity-100"
                            : "max-h-0 overflow-hidden opacity-0"
                        }`}
                      >
                        {s.examples.map((ex) => (
                          <span
                            key={ex}
                            className="rounded-md bg-background px-2.5 py-1 font-mono text-[11px] tracking-[0.1em] text-muted-2 ring-1 ring-border"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-dark text-white"
                          : "bg-surface text-foreground"
                      }`}
                    >
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
