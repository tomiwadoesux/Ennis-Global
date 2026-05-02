import LegalLayout from "../components/legal-layout";

export const metadata = {
  title: "Privacy Policy — Ennis Global",
  description:
    "How Ennis Global MGT Inc. collects, uses, and protects your information.",
};

const sections = [
  {
    id: "scope",
    title: "Scope of This Policy",
    body: [
      "This Privacy Policy describes how Ennis Global MGT Inc. (\u201cEnnis Global,\u201d \u201cwe,\u201d \u201cus,\u201d or \u201cour\u201d) collects, uses, and discloses information when you visit our website, engage us for advisory services, or otherwise interact with us.",
      "This policy applies to prospective clients, active clients, partners, vendors, and visitors to ennisglobalmgt.com. It does not cover information practices of third parties that we do not own or control.",
    ],
  },
  {
    id: "information",
    title: "Information We Collect",
    body: [
      "We collect information you provide directly, information collected automatically when you use our site, and information from trusted third parties used to verify eligibility for government contracting engagements.",
      {
        items: [
          {
            heading: "Information you provide",
            text:
              "Name, business email, phone number, company or organization, role, contract type, and any details you share when you request a briefing, complete a form, subscribe to updates, or email us.",
          },
          {
            heading: "Engagement information",
            text:
              "For active clients, we collect materials necessary to perform our services, including RFP/RFQ documents, proposal drafts, capability statements, certifications, past performance records, and teaming information.",
          },
          {
            heading: "Automatic information",
            text:
              "IP address, device and browser type, referring URL, pages viewed, and aggregated usage data collected via cookies and similar technologies.",
          },
          {
            heading: "Public registry information",
            text:
              "Information obtained from public federal and state registries (e.g., SAM.gov, state SBA portals) used to validate standing and certifications.",
          },
        ],
      },
    ],
  },
  {
    id: "use",
    title: "How We Use Information",
    body: [
      "We use information to operate our business, provide our services, and comply with legal obligations.",
      {
        items: [
          "To respond to inquiries and schedule strategic briefings.",
          "To deliver, manage, and improve our advisory services.",
          "To verify eligibility under federal set-aside programs (VOSB, SDVOSB, HUB, SBA 8(a), etc.).",
          "To communicate about engagements, invoices, and updates to our services or policies.",
          "To detect, prevent, and investigate fraud, misuse, or security incidents.",
          "To comply with federal and state legal, regulatory, and audit requirements.",
        ],
      },
    ],
  },
  {
    id: "sharing",
    title: "How We Share Information",
    body: [
      "We do not sell personal information. We share information only in the circumstances described below.",
      {
        items: [
          {
            heading: "Service providers",
            text:
              "Vetted vendors that support our operations (hosting, analytics, email, payment processing, document signing) under contractual confidentiality obligations.",
          },
          {
            heading: "Teaming partners",
            text:
              "With your written consent, we may share capability information with prime or subcontractors for the limited purpose of structuring a teaming arrangement.",
          },
          {
            heading: "Government agencies",
            text:
              "Information may be shared with contracting officers, audit authorities, or other government entities as required to submit, execute, or certify a contract.",
          },
          {
            heading: "Legal and safety",
            text:
              "When required by law, subpoena, or court order, or to protect the rights, property, or safety of Ennis Global, our clients, or others.",
          },
          {
            heading: "Business transfers",
            text:
              "In connection with a merger, acquisition, financing, or sale of assets, subject to appropriate confidentiality protections.",
          },
        ],
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Analytics",
    body: [
      "We use essential cookies to operate the site and limited analytics cookies to understand aggregate traffic patterns. You can control cookies through your browser settings; disabling non-essential cookies will not affect access to core site functionality.",
      "We honor Global Privacy Control (GPC) signals where applicable and do not use cross-context behavioral advertising.",
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    body: [
      "We retain information for as long as needed to provide services, comply with legal and contractual obligations, resolve disputes, and enforce agreements. Retention periods for engagement records follow federal contracting recordkeeping requirements, which may extend for several years after contract closeout.",
    ],
  },
  {
    id: "rights",
    title: "Your Rights",
    body: [
      "Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal information, to restrict or object to certain processing, and to withdraw consent. Texas residents may exercise rights under the Texas Data Privacy and Security Act (TDPSA).",
      "To exercise any of these rights, email legal@ennisglobalmgt.com with sufficient information for us to verify your identity. We will respond within the timeframes required by applicable law.",
    ],
  },
  {
    id: "security",
    title: "Security",
    body: [
      "We maintain administrative, technical, and physical safeguards designed to protect information against loss, misuse, and unauthorized access, including encryption in transit, access controls, and regular security reviews. No method of transmission or storage is perfectly secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "international",
    title: "International Users",
    body: [
      "Ennis Global operates primarily within the United States. If you access the site from outside the U.S., you understand your information will be processed in the United States under U.S. laws, which may differ from those of your jurisdiction.",
    ],
  },
  {
    id: "children",
    title: "Children\u2019s Privacy",
    body: [
      "Our services are directed to businesses and government contracting professionals and are not intended for individuals under the age of 18. We do not knowingly collect information from children. If we learn we have collected information from a child, we will delete it promptly.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be reflected by updating the \u201cLast updated\u201d date above and, where appropriate, communicated through a notice on our site or by email.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "For privacy inquiries, requests, or complaints, contact us at legal@ennisglobalmgt.com or by mail at Ennis Global MGT Inc..",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      code="[CNS.P]"
      title="Privacy Policy"
      updated="January 2025"
      intro="Your trust is the foundation of every engagement. This policy explains, in plain language, what information Ennis Global collects, how we use it, and the rights you hold over it. If anything here is unclear, we would rather talk to you than leave you guessing."
      sections={sections}
      sidebarNote="Exercising a right or reporting a concern?"
    />
  );
}
