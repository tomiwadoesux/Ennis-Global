import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CTA from "../components/cta";
import CertBadges from "../components/cert-badges";
import { ArrowRight } from "../components/arrow-icon";

export const metadata = {
  title: "About — Ennis Global",
  description:
    "Ennis Global MGT Inc. is a Black-owned, disabled veteran-owned consulting and business solutions firm.",
};

const pillTags = [
  "Black-Owned",
  "Disabled Veteran-Owned",
  "SDVOSB",
  "Texas HUB",
  "U.S. Army",
];

const stats = [
  { k: "Est. 2025", v: "Founded" },
  { k: "U.S. Army", v: "Founder Background" },
  { k: "Federal · State · Private", v: "Sectors Served" },
  { k: "SDVOSB · VOSB · 8(a)", v: "Certifications" },
];

const capabilities = [
  {
    tag: "01 — GC",
    title: "Government Contracting",
    body:
      "Full-lifecycle consulting for federal, state, and local contracts. We guide firms through registration, proposal development, and capture strategy — then stay on through execution.",
    tags: ["SAM.gov", "Proposals", "Capture"],
  },
  {
    tag: "02 — WS",
    title: "Workforce Subletting",
    body:
      "We place credentialed staff into government facilities and private enterprise — janitorial, maintenance, and administrative. Compliant, insured, ready on day one.",
    tags: ["Janitorial", "Staffing", "Ops"],
  },
  {
    tag: "03 — NT",
    title: "Non-Emergency Medical Transport",
    body:
      "NEMT operations for Medicaid and state programs. We structure the routes, credential the drivers, and operate the service — or advise teams already doing it.",
    tags: ["NEMT", "Routing", "Fleet"],
  },
];

const pillars = [
  { n: "01", h: "Federal Government", b: "DoD, GSA, VA, HHS, and federal health agencies." },
  { n: "02", h: "State & Local", b: "State transportation, facilities management, and county services." },
  { n: "03", h: "Private Enterprise", b: "Construction, hospitality, contractors, and civilian enterprise." },
  { n: "04", h: "Public Sector", b: "Healthcare systems, school districts, and institutional programs." },
];

const values = [
  { h: "Discipline", b: "Military precision in every deliverable." },
  { h: "Service", b: "We measure value in client outcomes." },
  { h: "Integrity", b: "Straight talk, long relationships." },
  { h: "Excellence", b: "We don't hand over work — we hand over the win." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-10 md:px-10 md:pt-24 md:pb-16">
          <div className="mb-14 flex items-center justify-between">
            <span className="eyebrow">About Ennis Global</span>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <h1 className="text-[44px] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[68px]">
                Black-owned.
                <br />
                Veteran-led.
                <br />
                Built to serve.
              </h1>
              <p className="mt-8 max-w-lg text-[15px] leading-[1.65] text-muted">
                Ennis Global MGT Inc. is a Black-owned, disabled veteran-owned
                consulting and business solutions firm. We serve federal,
                state, and private-sector clients with a focus on government
                contracting, workforce subletting, and non-emergency medical
                transportation.
              </p>
              <ul className="mt-10 flex flex-wrap gap-2">
                {pillTags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-[11px] tracking-[0.14em] text-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5">
              <div
                className="relative flex aspect-[4/3] w-full flex-col justify-between overflow-hidden rounded-2xl p-8 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-green-deep) 0%, var(--accent-green) 100%)",
                }}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-[0.28em] text-white/60 uppercase">
                    Ennis Global
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.18em] text-white/40">
                    MGT Inc.
                  </span>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.28em] text-white/60 uppercase">
                    Veteran-Founded · 2025
                  </div>
                  <div className="mt-3 text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[32px]">
                    Service doesn&rsquo;t end when you take off the uniform.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-y-8 border-t border-border pt-8 md:grid-cols-4 md:gap-0">
            {stats.map((s) => (
              <div key={s.k}>
                <div className="text-[20px] font-semibold tracking-[-0.01em]">
                  {s.k}
                </div>
                <div className="eyebrow mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications showcase */}
        <section className="mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10 md:pb-24">
          <div className="rounded-2xl border border-border bg-background p-8 md:p-12">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Credentials</span>
                <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.02em] md:text-[36px]">
                  Verified where it matters.
                </h2>
              </div>
              <p className="max-w-sm text-[13px] leading-[1.65] text-muted">
                Our certifications aren&rsquo;t paper &mdash; they&rsquo;re the
                receipts on a decade of service. Each is current, verifiable,
                and active in SAM.gov.
              </p>
            </div>
            <CertBadges variant="light" size="lg" />
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="mb-10 eyebrow">Our Purpose</div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-dark p-10 text-white">
              <div className="eyebrow !text-white/60 mb-5">01</div>
              <h3 className="text-[28px] font-semibold tracking-[-0.02em] md:text-[36px]">
                Mission
              </h3>
              <p className="mt-6 max-w-md text-[14px] leading-[1.65] text-white/70">
                To be the consulting and business solutions partner that
                small-business owners, federal contractors, and
                state-transportation programs can actually rely on &mdash;
                because we&rsquo;ve been on every side of the table.
              </p>
            </div>
            <div className="rounded-2xl bg-surface p-10">
              <div className="eyebrow mb-5">02</div>
              <h3 className="text-[28px] font-semibold tracking-[-0.02em] md:text-[36px]">
                Vision
              </h3>
              <p className="mt-6 max-w-md text-[14px] leading-[1.65] text-muted">
                A landscape where Black-owned and veteran-owned firms
                consistently win, hold, and grow government contracts &mdash;
                and where state-funded transportation programs run like they
                were designed to.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {["Gov Contracting", "Workforce", "NEMT"].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-[11px] tracking-[0.08em]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Founder callout */}
        <section className="mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10 md:pb-24">
          <div className="grid grid-cols-1 gap-8 rounded-2xl bg-surface p-8 md:grid-cols-12 md:gap-10 md:p-14">
            <div className="md:col-span-7">
              <blockquote className="text-[22px] leading-[1.45] font-medium tracking-[-0.01em] md:text-[26px]">
                &ldquo;Service doesn&rsquo;t end when you take off the uniform.
                It evolves.&rdquo;
              </blockquote>
              <p className="mt-6 max-w-lg text-[14px] leading-[1.65] text-muted">
                Ennis Global was founded by a disabled U.S. Army veteran who
                spent years inside federal contracting before building the
                firm he wished existed for everyone else. Black ownership and
                veteran-owned status aren&rsquo;t marketing &mdash;
                they&rsquo;re what shape how we show up for every client.
              </p>
              <div className="mt-10 flex items-center gap-3">
                <span
                  className="h-px w-10"
                  style={{ backgroundColor: "var(--accent-green)" }}
                  aria-hidden
                />
                <div>
                  <div className="text-[13px] font-semibold">Founder &amp; Principal Consultant</div>
                  <div className="text-[12px] text-muted">
                    U.S. Army Veteran · Disabled · Black-Owned Business Owner
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div
                className="flex aspect-[4/3] w-full items-center justify-center rounded-xl border border-border bg-surface p-8"
              >
                <div className="grid grid-cols-2 gap-3 text-center">
                  {["SDVOSB", "VOSB", "8(a)", "SAM.gov"].map((c) => (
                    <div
                      key={c}
                      className="flex h-20 items-center justify-center rounded-lg border border-border bg-background font-mono text-[13px] font-semibold tracking-[0.12em]"
                      style={{ color: "var(--accent-green)" }}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="mb-12 eyebrow">How We Operate</div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <h2 className="text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[44px]">
                Consulting &amp; Business
                <br />
                Solutions, End to End.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-[14px] leading-[1.65] text-muted">
                We consult on every contract &mdash; federal, state, or private,
                in any field. In two of our practices, we also operate the
                service: placing staff into government facilities and running
                non-emergency medical transportation programs.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {capabilities.map((c) => (
              <article
                key={c.tag}
                className="rounded-2xl bg-surface p-8"
              >
                <div className="eyebrow mb-4">{c.tag}</div>
                <h3 className="text-[20px] font-semibold tracking-[-0.01em]">
                  {c.title}
                </h3>
                <p className="mt-4 text-[13px] leading-[1.65] text-muted">
                  {c.body}
                </p>
                <div className="my-8 flex h-32 items-center justify-center rounded-full bg-surface-2">
                  <span className="code-tag">[ Icon ]</span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-background px-3 py-1 text-[10px] tracking-[0.12em] text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Pillars */}
        <section className="mx-auto w-full max-w-[1440px] border-t border-border px-6 py-16 md:px-10 md:py-24">
          <div className="mb-10 eyebrow">Who We Serve</div>
          <h2 className="text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[44px]">
            Federal. State. Private.
            <br />
            Any field, any contract.
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.n} className="md:pr-6">
                <div className="font-mono text-[13px] text-muted">{p.n}</div>
                <div className="eyebrow mt-3">{p.h}</div>
                <p className="mt-3 max-w-[18ch] text-[13px] leading-[1.6] text-muted">
                  {p.b}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto w-full max-w-[1440px] border-t border-border px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-8">
            {values.map((v, i) => (
              <div key={v.h}>
                <div className="font-mono text-[11px] text-muted-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.01em]">
                  {v.h}
                </h3>
                <p className="mt-3 max-w-[22ch] text-[13px] leading-[1.6] text-muted">
                  {v.b}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dark CTA */}
        <section className="mx-auto w-full max-w-[1440px] px-6 pb-20 md:px-10 md:pb-28">
          <div className="grid grid-cols-1 gap-8 rounded-2xl bg-dark p-8 text-white md:grid-cols-12 md:gap-10 md:p-14">
            <div className="md:col-span-7">
              <div className="eyebrow !text-white/60">Ready to work with us?</div>
              <h2 className="mt-5 text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[48px]">
                Talk to us about
                <br />
                any contract.
              </h2>
              <p className="mt-6 max-w-lg text-[14px] leading-[1.65] text-white/70">
                Federal, state, or private &mdash; book a consultation with our
                team. No commitment required.
              </p>
              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-3 bg-white px-6 py-4 text-[14px] font-medium text-dark transition-transform hover:-translate-y-0.5"
              >
                Book a Consultation
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="md:col-span-5">
              <div
                aria-hidden
                className="flex h-full min-h-[200px] items-center justify-center font-mono text-[120px] font-bold text-white/5 md:text-[200px]"
              >
                01
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
