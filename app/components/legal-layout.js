import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";

export default function LegalLayout({
  eyebrow,
  code,
  title,
  updated,
  intro,
  sections,
  sidebarNote,
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-[1440px] px-6 pt-16 pb-10 md:px-10 md:pt-24 md:pb-16">
          <div className="mb-12 flex items-center justify-between">
            <span className="eyebrow">{eyebrow}</span>
            <span className="code-tag">{code}</span>
          </div>
          <h1 className="text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[64px]">
            {title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-[12px] tracking-[0.12em] text-muted-2 uppercase">
            <span>Last updated · {updated}</span>
            <span className="h-3 w-px bg-border" aria-hidden />
            <span>Ennis Global MGT Inc.</span>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-6 pb-28 md:px-10 md:pb-36">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <aside className="md:col-span-4">
              <div className="md:sticky md:top-8">
                <div className="rounded-2xl bg-surface p-6 md:p-8">
                  <div className="eyebrow mb-4">Contents</div>
                  <ol className="space-y-3 text-[13px]">
                    {sections.map((s, i) => (
                      <li key={s.id} className="flex gap-3">
                        <span className="font-mono text-muted-2">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <a
                          href={`#${s.id}`}
                          className="text-foreground hover:text-muted transition-colors"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
                {sidebarNote && (
                  <p className="mt-6 px-2 text-[12px] leading-[1.65] text-muted">
                    {sidebarNote}{" "}
                    <Link href="/contact" className="text-foreground underline underline-offset-2">
                      Contact us
                    </Link>
                    .
                  </p>
                )}
              </div>
            </aside>

            <article className="md:col-span-8">
              <p className="text-[16px] leading-[1.75] text-foreground">
                {intro}
              </p>

              <div className="mt-12 space-y-14">
                {sections.map((s, i) => (
                  <section key={s.id} id={s.id} className="scroll-mt-24">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[12px] tracking-[0.12em] text-muted-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-[22px] font-semibold tracking-[-0.01em] md:text-[26px]">
                        {s.title}
                      </h2>
                    </div>
                    <div className="mt-4 space-y-4 text-[14px] leading-[1.75] text-muted">
                      {s.body.map((p, idx) =>
                        typeof p === "string" ? (
                          <p key={idx}>{p}</p>
                        ) : (
                          <ul
                            key={idx}
                            className="list-disc space-y-2 pl-6 marker:text-muted-2"
                          >
                            {p.items.map((item, j) => (
                              <li key={j}>
                                {item.heading && (
                                  <span className="font-medium text-foreground">
                                    {item.heading}:{" "}
                                  </span>
                                )}
                                {item.text || item}
                              </li>
                            ))}
                          </ul>
                        )
                      )}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-16 rounded-2xl border border-border bg-background p-6 md:p-8">
                <div className="eyebrow mb-3">Questions?</div>
                <p className="text-[14px] leading-[1.65] text-muted">
                  If you have questions about this document or need to exercise
                  any of your rights, reach our team at{" "}
                  <a
                    href="mailto:legal@ennisglobalmgt.com"
                    className="text-foreground underline underline-offset-2"
                  >
                    legal@ennisglobalmgt.com
                  </a>{" "}
                  or by mail at Ennis Global MGT Inc.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
