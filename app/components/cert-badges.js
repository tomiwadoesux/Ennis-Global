import Image from "next/image";

const badges = [
  {
    src: "/badges/sdvosb.svg",
    alt: "SDVOSB — Service-Disabled Veteran-Owned Small Business",
    label: "SDVOSB",
  },
  {
    src: "/badges/vosb.png",
    alt: "VOSB — Veteran-Owned Small Business (CVE verified)",
    label: "VOSB",
  },
  {
    src: "/badges/veteran-owned.png",
    alt: "Veteran Owned Business",
    label: "Veteran Owned",
  },
];

export default function CertBadges({
  variant = "light",
  size = "md",
  showLabels = true,
  className = "",
}) {
  const dims = size === "lg" ? 88 : size === "sm" ? 56 : 72;
  const onDark = variant === "dark";

  return (
    <div
      className={`flex flex-wrap items-center gap-x-10 gap-y-6 ${className}`}
      aria-label="Certifications"
    >
      {badges.map((b) => (
        <div key={b.label} className="flex items-center gap-4">
          <div
            className={`flex items-center justify-center ${
              onDark
                ? "rounded-full bg-white/90 p-2"
                : ""
            }`}
            style={{ width: dims, height: dims }}
          >
            <Image
              src={b.src}
              alt={b.alt}
              width={dims}
              height={dims}
              className="h-full w-full object-contain"
            />
          </div>
          {showLabels && (
            <div className="text-[11px] tracking-[0.18em] uppercase">
              <div
                className={onDark ? "text-white" : "text-foreground font-medium"}
              >
                {b.label}
              </div>
              <div
                className={onDark ? "text-white/50" : "text-muted-2"}
              >
                Certified
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
