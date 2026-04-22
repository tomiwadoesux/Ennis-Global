import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./arrow-icon";

export default function CTA() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
      <div className="grid grid-cols-1 gap-8 rounded-2xl bg-surface p-8 md:grid-cols-12 md:gap-10 md:p-14">
        <div className="md:col-span-6 md:pr-6">
          <div className="mb-5">
            <div className="eyebrow mb-2">Ready To Start?</div>
            <div
              className="h-0.5 w-16"
              style={{ backgroundColor: "var(--accent-green)" }}
            />
          </div>
          <h2 className="text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[44px]">
            Need consulting
            <br />
            for your next contract?
          </h2>
          <p className="mt-6 max-w-md text-[14px] leading-[1.65] text-muted">
            Book a consultation. Tell us what you&rsquo;re working on and
            we&rsquo;ll walk you through how we can help &mdash; federal
            contracting, workforce subletting, or non-emergency medical
            transportation.
          </p>
          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 px-6 py-4 text-[14px] font-medium text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--accent-green)" }}
          >
            Book a Consultation
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="md:col-span-6">
          <div className="relative aspect-[600/400] w-full overflow-hidden rounded-xl bg-surface-2">
            {/* Pexels (thirdman): diverse professionals in a collaborative strategy session */}
            <Image
              src="https://images.pexels.com/photos/5256688/pexels-photo-5256688.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Strategy session between Ennis Global advisors and a client team"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
