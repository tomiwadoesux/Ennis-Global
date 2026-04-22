const items = [
  "Government Contracting Consulting",
  "Workforce Subletting",
  "Janitorial & Facility Staffing",
  "Non-Emergency Medical Transportation",
  "SAM.gov Registration",
  "SDVOSB Advisory",
  "HUB Certification Support",
  "Teaming & Joint Ventures",
  "Compliance & Administration",
  "Public-Private Partnerships",
];

export default function Ticker() {
  const row = [...items, ...items];
  return (
    <section className="w-full overflow-hidden border-y border-border bg-background">
      <div className="relative flex h-13 items-center py-4">
        <div className="marquee-track">
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-12 text-[13px] font-medium text-foreground"
            >
              {item}
              <span
                className="inline-block h-1 w-1 rounded-full bg-muted-2"
                aria-hidden
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
