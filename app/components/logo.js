export default function Logo({ className = "", onDark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 h-8 font-mono text-[11px] tracking-[0.24em] font-medium ${
        onDark
          ? "bg-white text-dark"
          : "bg-dark text-white"
      } ${className}`}
    >
      ENNIS&nbsp;GLOBAL
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: "var(--accent-green-soft)" }}
        aria-hidden
      />
    </span>
  );
}
