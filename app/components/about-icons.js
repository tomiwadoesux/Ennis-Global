/**
 * Line-style SVG icons used on the About page.
 * viewBox 48x48, 1.5 stroke, currentColor — so color & size cascade
 * from the parent element (Tailwind text-* utilities control hue;
 * w-* / h-* control size).
 */

const baseProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function GovernmentContractingIcon({ className = "" }) {
  return (
    <svg className={className} {...baseProps}>
      {/* document */}
      <path d="M12 6h18l6 6v30H12z" />
      <path d="M30 6v6h6" />
      {/* contract lines */}
      <path d="M17 20h14" />
      <path d="M17 26h14" />
      <path d="M17 32h8" />
      {/* embossed seal */}
      <circle cx="32" cy="34" r="4" />
      <path d="M30.5 34l1 1 2-2" />
    </svg>
  );
}

export function WorkforceIcon({ className = "" }) {
  return (
    <svg className={className} {...baseProps}>
      {/* center figure */}
      <circle cx="24" cy="14" r="4.5" />
      <path d="M14 40v-2a10 10 0 0120 0v2" />
      {/* left figure */}
      <circle cx="9" cy="18" r="3.5" />
      <path d="M3 40v-2a8 8 0 018-8" />
      {/* right figure */}
      <circle cx="39" cy="18" r="3.5" />
      <path d="M37 30a8 8 0 018 8v2" />
    </svg>
  );
}

export function TransportIcon({ className = "" }) {
  return (
    <svg className={className} {...baseProps}>
      {/* van body */}
      <path d="M5 30V16h20l7 6h11v8H5z" />
      {/* windshield divider */}
      <path d="M25 16v14" />
      <path d="M32 22v8" />
      {/* wheels */}
      <circle cx="13" cy="32" r="3" />
      <circle cx="37" cy="32" r="3" />
      {/* accessibility mark */}
      <circle cx="15" cy="22" r="1.2" fill="currentColor" stroke="none" />
      <path d="M15 24v3h3" />
    </svg>
  );
}

export function FederalIcon({ className = "" }) {
  return (
    <svg className={className} {...baseProps}>
      {/* flag pole */}
      <path d="M10 6v36" />
      {/* flag body */}
      <path d="M10 10h26l-6 6 6 6H10" />
      {/* stars */}
      <circle cx="15" cy="13" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="19" cy="13" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="15" cy="19" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="19" cy="19" r="0.8" fill="currentColor" stroke="none" />
      {/* base */}
      <path d="M6 42h10" />
    </svg>
  );
}

export function StateLocalIcon({ className = "" }) {
  return (
    <svg className={className} {...baseProps}>
      {/* capitol base */}
      <path d="M6 42h36" />
      <path d="M8 38h32" />
      {/* columns */}
      <path d="M12 38V20" />
      <path d="M19 38V20" />
      <path d="M29 38V20" />
      <path d="M36 38V20" />
      {/* pediment */}
      <path d="M8 20h32" />
      <path d="M10 20l14-12 14 12" />
      {/* dome */}
      <path d="M21 8a3 3 0 016 0" />
      <path d="M24 5v-2" />
    </svg>
  );
}

export function PrivateEnterpriseIcon({ className = "" }) {
  return (
    <svg className={className} {...baseProps}>
      {/* briefcase body */}
      <rect x="6" y="14" width="36" height="26" rx="2" />
      {/* handle */}
      <path d="M18 14v-4a2 2 0 012-2h8a2 2 0 012 2v4" />
      {/* divider line */}
      <path d="M6 24h36" />
      {/* clasp */}
      <rect x="22" y="22" width="4" height="4" />
    </svg>
  );
}

export function PublicSectorIcon({ className = "" }) {
  return (
    <svg className={className} {...baseProps}>
      {/* heart / care outline */}
      <path d="M24 40s-13-7.5-13-17a7 7 0 0113-4 7 7 0 0113 4c0 9.5-13 17-13 17z" />
      {/* medical plus */}
      <path d="M24 18v8" />
      <path d="M20 22h8" />
    </svg>
  );
}
