import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductPageShell,
  ProductSectionHeading,
} from "@/components/product-page-shell";

const accent = "#10B981";

const roadmap = [
  {
    label: "Phase 1",
    items: ["Website monitoring", "API monitoring", "SSL monitoring"],
  },
  {
    label: "Phase 2",
    items: [
      "Incident management",
      "Public status pages",
      "Maintenance windows",
    ],
  },
  {
    label: "Phase 3",
    items: ["Alerting", "Custom domains", "Advanced routing"],
  },
];

export const metadata: Metadata = {
  title: "OpenHubble Uptime",
  description:
    "OpenHubble Uptime is a future product for website, API, and incident monitoring.",
};

export default function UptimePage() {
  return (
    <ProductPageShell accent={accent}>
      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-12">
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-slate-800">
            OpenHubble
          </Link>
          <span>/</span>
          <Link href="/products" className="transition hover:text-slate-800">
            Products
          </Link>
          <span>/</span>
          <span className="font-medium text-slate-700">Uptime</span>
        </div>
        <div className="grid gap-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.04)] lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-10">
          <div>
            <p
              className="mb-4 text-sm font-semibold uppercase tracking-[0.24em]"
              style={{ color: accent }}
            >
              Coming Soon
            </p>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Reliable uptime monitoring for websites, APIs, and services.
            </h1>
            <p className="mb-4 text-xl font-medium" style={{ color: accent }}>
              A focused experience for status visibility, incident awareness,
              and service reliability.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              OpenHubble Uptime will provide website monitoring, API monitoring,
              SSL monitoring, incident management, public status pages,
              maintenance windows, alerting, and custom domains.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#roadmap"
                className="rounded-full px-6 py-3 text-center font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: accent }}
              >
                View Roadmap
              </Link>
              <Link
                href="/products/metrics"
                className="rounded-full border border-slate-300 px-6 py-3 text-center font-medium text-slate-700 transition hover:bg-white"
              >
                Explore Metrics
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Monitoring
            </p>
            <div className="mt-5 space-y-5">
              {[
                {
                  title: "HTTPS",
                  detail: "Site and endpoint availability checks.",
                },
                {
                  title: "SSL",
                  detail: "Certificate health and expiry conditions.",
                },
                {
                  title: "API",
                  detail: "API response, latency, and status behavior.",
                },
                {
                  title: "DNS",
                  detail: "Lookup health and record consistency.",
                },
                {
                  title: "Status Page",
                  detail: "Public communication for incidents and maintenance.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                >
                  <h2 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm leading-7 text-slate-600">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ProductSectionHeading
          accent={accent}
          eyebrow="Planned Coverage"
          title="A focused uptime experience for teams"
          description="The product will center on reliability, incident visibility, and clear communication."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Website monitoring",
            "API monitoring",
            "SSL monitoring",
            "Incident management",
            "Public status pages",
            "Maintenance windows",
            "Alerting",
            "Custom domains",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ProductSectionHeading
          accent={accent}
          eyebrow="Roadmap"
          title="A steady path to launch"
          description="The rollout will expand in phases so the experience remains consistent and practical."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {roadmap.map((group) => (
            <div
              key={group.label}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                {group.label}
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </ProductPageShell>
  );
}
