import Link from "next/link";
import { ArrowRight } from "./arrow-icon";

const cases = [
  {
    sector: "Federal",
    tag: "Capture & Teaming",
    title: "Break into federal prime contracting",
    scenario:
      "You're a small business with a strong commercial track record but no federal vehicle. We map SAM.gov and set-aside paths, stand up your capture library, and broker a teaming arrangement with a prime already on an IDIQ so you can deliver from day one.",
    outcome: "A reliable lane onto federal work",
  },
  {
    sector: "Workforce",
    tag: "Facility Staffing",
    title: "Staff a federal or state facility the right way",
    scenario:
      "Your facility needs janitorial, grounds, or back-office support, and the vendor you had couldn't keep credentials current. We scope the roles, stand up a compliant subletting program, and hand you a credentialed crew ready on day one — with us accountable for compliance, not you.",
    outcome: "Compliant crews, zero audit exposure",
  },
  {
    sector: "State / Medicaid",
    tag: "NEMT Operations",
    title: "Launch or fix a Medicaid NEMT operation",
    scenario:
      "Your agency needs an NEMT partner that Medicaid auditors can actually verify. We structure routing, driver credentialing, and billing workflows against the state's contract terms, then operate the rollout — not just hand you a binder.",
    outcome: "Audit-ready rides, from route sheet up",
  },
  {
    sector: "Private",
    tag: "Prime Subcontracting",
    title: "Meet diversity subcontracting targets without risk",
    scenario:
      "You're a prime with SDVOSB or 8(a) flow-down targets on an upcoming award. We plug in as a qualified sub, handle the compliance paperwork, and bring operators — not just a certification — so the work actually gets delivered.",
    outcome: "Targets met, delivery de-risked",
  },
];

export default function CaseStudies() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
      <div className="mb-12 flex flex-col gap-4 md:mb-16">
        <span className="eyebrow">Use Cases</span>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[22ch] text-[32px] font-semibold leading-[1.05] tracking-[-0.025em] md:text-[48px]">
            How teams put Ennis Global to work.
          </h2>
          <p className="max-w-md text-[14px] leading-[1.65] text-muted">
            Examples of the contracts and scenarios we&rsquo;re built for.
            Real engagements look like these — pick the shape that matches
            yours and we&rsquo;ll walk through it.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {cases.map((c, i) => (
          <article
            key={i}
            className="group relative flex flex-col gap-8 overflow-hidden rounded-2xl border border-border bg-background p-7 transition-colors hover:border-foreground/30 md:p-9"
          >
            <span
              className="absolute left-0 top-7 h-10 w-[3px]"
              style={{ backgroundColor: "var(--accent-green)" }}
              aria-hidden
            />
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">
                {String(i + 1).padStart(2, "0")} · {c.sector}
              </span>
              <span className="inline-flex items-center rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-muted-2 uppercase">
                {c.tag}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="max-w-[28ch] text-[22px] leading-[1.2] font-semibold tracking-[-0.01em] md:text-[26px]">
                {c.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-muted">
                {c.scenario}
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
              <div>
                <div className="font-mono text-[10px] tracking-[0.28em] text-muted-2 uppercase">
                  Outcome
                </div>
                <div
                  className="mt-1.5 text-[14px] font-semibold tracking-[-0.01em]"
                  style={{ color: "var(--accent-green)" }}
                >
                  {c.outcome}
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground hover:opacity-60"
                aria-label={`Discuss ${c.title}`}
              >
                Talk it through
                <ArrowRight size={13} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
