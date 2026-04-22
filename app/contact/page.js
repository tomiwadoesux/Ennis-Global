import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ArrowRight } from "../components/arrow-icon";

export const metadata = {
  title: "Contact — Ennis Global",
  description:
    "Book a consultation with Ennis Global — Black-owned, disabled veteran-owned consulting & business solutions.",
};

const info = [
  { label: "Email", value: "info@ennisglobal.com", href: "mailto:info@ennisglobal.com" },
  { label: "Phone", value: "+1 (000) 000-0000", href: "tel:+10000000000" },
  { label: "Hours", value: "Mon – Fri, 8:00 AM – 6:00 PM ET" },
];

function Field({ label, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[12px] font-medium text-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-[14px] placeholder:text-muted-2 focus:border-foreground focus:outline-none";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-32">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <span className="eyebrow">Get In Touch</span>
              <div
                className="mt-2 h-0.5 w-14"
                style={{ backgroundColor: "var(--accent-green)" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <h1 className="text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[52px]">
                Let&rsquo;s talk about
                <br />
                your next contract.
              </h1>
              <p className="mt-6 max-w-md text-[14px] leading-[1.65] text-muted">
                Government contracting, workforce subletting, or non-emergency
                medical transportation &mdash; tell us what you&rsquo;re
                working on and our team will respond within one business day.
              </p>

              <div className="my-10 h-px w-full bg-border" />

              <dl className="space-y-6">
                {info.map((i) => (
                  <div key={i.label}>
                    <dt className="eyebrow mb-1">{i.label}</dt>
                    <dd className="text-[14px] font-medium">
                      {i.href ? (
                        <a
                          href={i.href}
                          className="hover:text-muted transition-colors"
                        >
                          {i.value}
                        </a>
                      ) : (
                        i.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-12 text-[11px] tracking-[0.14em] text-muted-2 uppercase">
                Black-Owned · Disabled Veteran-Owned · SDVOSB · VOSB · Texas HUB · SAM.gov
              </p>
            </div>

            <div className="md:col-span-7">
              <form className="rounded-2xl border border-border bg-background p-8 md:p-10">
                <h2 className="text-[24px] font-semibold tracking-[-0.01em]">
                  Book a Consultation
                </h2>
                <p className="mt-2 text-[13px] text-muted">
                  Tell us about your firm and what you&rsquo;re looking for.
                </p>

                <div className="mt-8 space-y-5">
                  <Field label="Full Name">
                    <input
                      type="text"
                      placeholder="John Smith"
                      className={inputCls}
                      required
                    />
                  </Field>
                  <Field label="Email Address">
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className={inputCls}
                      required
                    />
                  </Field>
                  <Field label="Company / Organization">
                    <input
                      type="text"
                      placeholder="Your company name"
                      className={inputCls}
                    />
                  </Field>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Phone Number">
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Service Area">
                      <input
                        type="text"
                        placeholder="Government contracting, subletting, NEMT..."
                        className={inputCls}
                      />
                    </Field>
                  </div>

                  <Field label="How Can We Help?">
                    <textarea
                      rows={5}
                      placeholder="Describe your project, contract, or staffing need..."
                      className={`${inputCls} resize-none`}
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  className="group mt-8 inline-flex w-full items-center justify-center gap-3 px-6 py-4 text-[14px] font-medium text-white transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: "var(--accent-green)" }}
                >
                  Book a Consultation
                  <ArrowRight size={14} />
                </button>
                <p className="mt-5 text-[11px] text-muted-2">
                  By submitting, you agree to our Privacy Policy. All inquiries
                  are confidential.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
