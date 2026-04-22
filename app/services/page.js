import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CTA from "../components/cta";
import { ArrowRight } from "../components/arrow-icon";

export const metadata = {
  title: "Services — Ennis Global",
  description:
    "Ennis Global MGT Inc. — consulting & business solutions across government contracting, workforce subletting, and non-emergency medical transportation.",
};

const stats = [
  { k: "Any Field", v: "Federal · State · Private" },
  { k: "SDVOSB · VOSB · 8(a)", v: "Certified & Verified" },
  { k: "50", v: "States Eligible to Serve" },
  { k: "100%", v: "Black &amp; Veteran Owned" },
];

const services = [
  {
    tag: "01 — GC",
    title: "Government Contracting Consulting",
    body:
      "We consult on contracts in any field — construction, IT, facilities, healthcare, logistics, professional services. SAM.gov registration, capability statements, proposal development, capture strategy, and teaming. We don't chase contracts; we help you get chosen.",
    tags: ["SAM.gov", "Capture Strategy", "Proposal Dev", "Teaming & JVs"],
    // Pexels (RDNE): two senior professionals discussing reports
    image:
      "https://images.pexels.com/photos/8123884/pexels-photo-8123884.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Consultants reviewing federal proposal documents together",
  },
  {
    tag: "02 — WS",
    title: "Workforce Subletting & Staff Augmentation",
    body:
      "We place compliant, credentialed crews into government facilities and private enterprise — janitorial, facility maintenance, grounds, security-cleared support, and administrative staff. Payroll, compliance, and scheduling handled end-to-end.",
    tags: ["Janitorial", "Facility Maintenance", "Admin Staffing", "Grounds & Landscaping"],
    // Pexels (Tima Miroshnichenko): diverse team of professional crew walking in uniform
    image:
      "https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Uniformed workforce crew arriving on a client site",
  },
  {
    tag: "03 — NT",
    title: "Non-Emergency Medical Transportation",
    body:
      "NEMT operations and advisory for Medicaid, managed care organizations, and state transportation programs. Fleet structuring, driver credentialing, route compliance, and program audit support. We consult on the program — then we run it.",
    tags: ["NEMT Operations", "Medicaid Routing", "Fleet Compliance", "MCO Partnerships"],
    // Pexels (davegarcia): driver by accessible van with open ramp
    image:
      "https://images.pexels.com/photos/35831406/pexels-photo-35831406.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Driver standing beside a wheelchair-accessible NEMT van with ramp deployed",
  },
  {
    tag: "04 — CC",
    title: "Certification & Compliance Advisory",
    body:
      "SDVOSB, VOSB, MBE, HUB, SBA 8(a), and state-level certifications — preparing documents, navigating verification interviews, and keeping status current year after year. Compliance programs for firms already operating on contract.",
    tags: ["SDVOSB / VOSB", "8(a) & HUB", "MBE & DBE", "Annual Reviews"],
    // Pexels (Tima Miroshnichenko): three professionals reviewing compliance paperwork around a laptop
    image:
      "https://images.pexels.com/photos/5439394/pexels-photo-5439394.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Compliance advisors walking a client through certification paperwork",
  },
  {
    tag: "05 — BA",
    title: "Business Administration & Back-Office",
    body:
      "Back-office structure for firms scaling into government work. Governance, contract administration, invoicing against federal terms, subcontract management, reporting, and audit-ready recordkeeping.",
    tags: ["Governance", "Contract Admin", "Invoicing", "Subcontract Mgmt"],
    // Pexels (RDNE): professional focused at desk with laptop and documents
    image:
      "https://images.pexels.com/photos/10376246/pexels-photo-10376246.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Back-office administrator managing contract records at a laptop",
  },
  {
    tag: "06 — PP",
    title: "Public-Private Strategic Partnerships",
    body:
      "Teaming agreements, joint ventures, and mentor-protégé structures between prime contractors and qualified small businesses. We broker the introduction, audit the fit, and structure the partnership.",
    tags: ["Prime/Sub Teaming", "JV Structuring", "Mentor-Protégé", "Talent Network"],
    // Pexels (Mikhail Nilov): two professionals shaking hands in a modern office
    image:
      "https://images.pexels.com/photos/8297616/pexels-photo-8297616.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Prime and small-business leaders finalizing a teaming partnership",
  },
];

function ServiceRow({ service, i, reverse }) {
  return (
    <article
      className={`grid grid-cols-1 items-center gap-10 border-t border-border py-16 md:grid-cols-2 md:gap-16 md:py-24`}
    >
      <div className={`${reverse ? "md:order-2" : ""} md:pr-6`}>
        <div className="mb-6 flex items-center gap-3">
          <div
            className="h-0.5 w-10"
            style={{ backgroundColor: "var(--accent-amber)" }}
          />
          <span className="font-mono text-[11px] tracking-[0.18em] text-muted">
            {service.tag}
          </span>
        </div>
        <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[40px]">
          {service.title}
        </h2>
        <p className="mt-6 max-w-lg text-[14px] leading-[1.65] text-muted">
          {service.body}
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {service.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-[11px] tracking-[0.08em] text-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 text-[13px] font-medium hover:opacity-60"
        >
          Book a consultation
          <ArrowRight size={13} />
        </Link>
      </div>

      <div className={`${reverse ? "md:order-1" : ""}`}>
        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-surface">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-10 md:px-10 md:pt-24 md:pb-16">
          <div className="mb-14 flex items-center justify-between">
            <span className="eyebrow">Services</span>
            <span className="code-tag">[CNS.S]</span>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <h1 className="text-[44px] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[68px]">
                Consulting &amp; business
                <br />
                solutions, under one roof.
              </h1>
              <p className="mt-8 max-w-lg text-[15px] leading-[1.65] text-muted">
                We consult on every contract &mdash; federal, state, or
                private &mdash; in any field. And for two of our core practices
                &mdash; workforce subletting and NEMT &mdash; we don&rsquo;t
                just advise; we operate.
              </p>
              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-3 text-[14px] font-medium"
              >
                Book a Consultation
                <span className="inline-flex h-9 w-9 items-center justify-center bg-dark text-white transition-transform group-hover:-translate-y-0.5">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface">
                {/* Pexels (a-darmel): multi-ethnic team discussing project around a laptop */}
                <Image
                  src="https://images.pexels.com/photos/8134162/pexels-photo-8134162.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Ennis Global team working through a client contract"
                  fill
                  priority
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-y-8 border-t border-border pt-8 md:grid-cols-4 md:gap-0">
            {stats.map((s) => (
              <div key={s.k} className="md:pr-6">
                <div
                  className="text-[22px] font-semibold tracking-[-0.01em]"
                  dangerouslySetInnerHTML={{ __html: s.k }}
                />
                <div
                  className="eyebrow mt-1"
                  dangerouslySetInnerHTML={{ __html: s.v }}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
          {services.map((s, i) => (
            <ServiceRow key={s.tag} service={s} i={i} reverse={i % 2 === 1} />
          ))}
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
