"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "./arrow-icon";

const quotes = [
  {
    text:
      "Ennis Global doesn't just consult — they operate. They helped us structure our subletting program for a federal facility and their team stayed on through execution. No hand-off, no dropped ball.",
    name: "Derrick Johnson",
    role: "President, Apex Facility Services",
    result: "Full-cycle execution",
  },
  {
    text:
      "We needed NEMT structure that Medicaid could audit and riders could trust. Ennis Global built it from the route sheets up.",
    name: "Maria Alvarez",
    role: "Director of Operations, RideCare Health",
    result: "Audit-ready rollout",
  },
  {
    text:
      "A disabled veteran-led consulting firm that understands federal contracting from the inside. Rare combination — and exactly what our shop needed.",
    name: "Colonel R. Bennett (Ret.)",
    role: "Founder, Bennett & Peña Construction",
    result: "Federal capture won",
  },
];

export default function Quote() {
  const [index, setIndex] = useState(0);
  const q = quotes[index];
  const next = () => setIndex((i) => (i + 1) % quotes.length);
  const prev = () => setIndex((i) => (i - 1 + quotes.length) % quotes.length);

  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
      <div className="mb-10 flex items-center justify-between">
        <span className="eyebrow">Client Voices</span>
        <span className="font-mono text-[11px] tracking-[0.18em] text-muted-2">
          {String(index + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
        </span>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl border border-border"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, var(--surface) 100%)",
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute top-8 left-8 font-serif text-[180px] leading-none md:top-10 md:left-14 md:text-[240px]"
          style={{ color: "var(--accent-green)", opacity: 0.08 }}
        >
          &ldquo;
        </span>

        <div className="relative grid grid-cols-1 gap-0 md:grid-cols-12">
          <div className="p-8 md:col-span-8 md:p-14 lg:p-16">
            <blockquote className="text-[22px] leading-[1.4] tracking-[-0.01em] text-foreground md:text-[30px] lg:text-[34px]">
              &ldquo;{q.text}&rdquo;
            </blockquote>

            <div className="mt-10 flex items-center gap-3">
              <span
                className="h-px w-8"
                style={{ backgroundColor: "var(--accent-green)" }}
                aria-hidden
              />
              <div>
                <div className="text-[14px] font-semibold tracking-[-0.01em]">
                  {q.name}
                </div>
                <div className="text-[12px] text-muted">{q.role}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 border-t border-border p-8 md:col-span-4 md:border-t-0 md:border-l md:p-10">
            <div>
              <div className="eyebrow mb-3">Outcome</div>
              <div className="text-[20px] font-semibold leading-[1.2] tracking-[-0.01em] md:text-[22px]">
                {q.result}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1 rounded-full transition-all ${
                      i === index ? "w-8 bg-foreground" : "w-4 bg-muted-2/50"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-2 transition-colors hover:border-foreground/40 hover:text-foreground"
                >
                  <ArrowLeft size={14} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-2 transition-colors hover:border-foreground/40 hover:text-foreground"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
