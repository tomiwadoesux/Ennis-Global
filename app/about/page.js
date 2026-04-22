import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CTA from "../components/cta";
import CertBadges from "../components/cert-badges";
import {
  GovernmentContractingIcon,
  WorkforceIcon,
  TransportIcon,
  FederalIcon,
  StateLocalIcon,
  PrivateEnterpriseIcon,
  PublicSectorIcon,
} from "../components/about-icons";

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
    Icon: GovernmentContractingIcon,
  },
  {
    tag: "02 — WS",
    title: "Workforce Subletting",
    body:
      "We place credentialed staff into government facilities and private enterprise — janitorial, maintenance, and administrative. Compliant, insured, ready on day one.",
    tags: ["Janitorial", "Staffing", "Ops"],
    Icon: WorkforceIcon,
  },
  {
    tag: "03 — NT",
    title: "Non-Emergency Medical Transport",
    body:
      "NEMT operations for Medicaid and state programs. We structure the routes, credential the drivers, and operate the service — or advise teams already doing it.",
    tags: ["NEMT", "Routing", "Fleet"],
    Icon: TransportIcon,
  },
];

const pillars = [
  {
    n: "01",
    h: "Federal Government",
    b: "DoD, GSA, VA, HHS, and federal health agencies.",
    Icon: FederalIcon,
  },
  {
    n: "02",
    h: "State & Local",
    b: "State transportation, facilities management, and county services.",
    Icon: StateLocalIcon,
  },
  {
    n: "03",
    h: "Private Enterprise",
    b: "Construction, hospitality, contractors, and civilian enterprise.",
    Icon: PrivateEnterpriseIcon,
  },
  {
    n: "04",
    h: "Public Sector",
    b: "Healthcare systems, school districts, and institutional programs.",
    Icon: PublicSectorIcon,
  },
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
            {capabilities.map((c) => {
              const Icon = c.Icon;
              return (
                <article
                  key={c.tag}
                  className="group relative flex flex-col rounded-2xl bg-surface p-8 transition-colors duration-300 hover:bg-surface-2"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="eyebrow">{c.tag}</div>
                    <span
                      aria-hidden
                      className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-background ring-1 ring-border transition-[background-color,transform] duration-500 group-hover:bg-accent-green group-hover:ring-accent-green"
                    >
                      <Icon className="h-7 w-7 text-foreground transition-colors duration-500 group-hover:text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-[20px] font-semibold tracking-[-0.01em]">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-[1.65] text-muted">
                    {c.body}
                  </p>
                  <span
                    aria-hidden
                    className="mt-8 block h-[1.5px] w-8 bg-accent-green transition-all duration-500 group-hover:w-24"
                  />
                  <ul className="mt-6 flex flex-wrap gap-2">
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
              );
            })}
          </div>
        </section>

        {/* Pillars */}
        <section className="mx-auto w-full max-w-[1440px] border-t border-border px-6 py-20 md:px-10 md:py-28">
          <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <div className="eyebrow">Who We Serve</div>
              <h2 className="mt-4 text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[44px]">
                Federal. State. Private.
                <br />
                Any field, any contract.
              </h2>
            </div>
            <div className="md:col-span-5 md:pt-3">
              <p className="max-w-md text-[14px] leading-[1.65] text-muted">
                Four sectors, one operating standard. We meet each one on its
                own terms — credentialing, compliance, and the procurement
                rhythm it runs on.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => {
              const Icon = p.Icon;
              return (
                <article
                  key={p.n}
                  className="group relative flex flex-col gap-10 overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.12)] md:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] tracking-[0.28em] text-muted-2">
                      {p.n}
                    </span>
                    <Icon className="h-7 w-7 text-muted-2 transition-colors duration-300 group-hover:text-accent-green" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold tracking-[-0.01em] md:text-[19px]">
                      {p.h}
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.65] text-muted">
                      {p.b}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="h-[1.5px] w-8 bg-accent-green transition-all duration-500 group-hover:w-full"
                  />
                </article>
              );
            })}
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto w-full max-w-[1440px] border-t border-border px-6 py-20 md:px-10 md:py-28">
          <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <div className="eyebrow">Operating Principles</div>
              <h2 className="mt-4 text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[44px]">
                The standards we hold
                <br />
                ourselves to.
              </h2>
            </div>
            <div className="md:col-span-5 md:pt-3">
              <p className="max-w-md text-[14px] leading-[1.65] text-muted">
                Four values, not slogans. Each one shapes how we take on work,
                deliver it, and stay in the room after the contract is signed.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.h}
                className="group relative flex flex-col justify-between gap-12 overflow-hidden rounded-2xl border border-border bg-background p-8 transition-[transform,border-color,background-color] duration-500 hover:-translate-y-1 hover:border-foreground/30 hover:bg-surface md:p-10"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[56px] font-light leading-none tracking-[-0.04em] text-muted-2/40 transition-colors duration-500 group-hover:text-accent-green md:text-[68px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className="h-px w-0 bg-accent-green transition-[width] duration-500 group-hover:w-12"
                  />
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold tracking-[-0.01em] uppercase md:text-[24px]">
                    {v.h}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.65] text-muted">
                    {v.b}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
