import type { Metadata } from "next";
import Link from "next/link";
import { ProductSectionHeading } from "@/components/product-page-shell";

const roadmap = [
  { label: "Phase 1", items: ["Website monitoring", "API monitoring", "SSL monitoring"] },
  { label: "Phase 2", items: ["Incident management", "Public status pages", "Maintenance windows"] },
  { label: "Phase 3", items: ["Alerting", "Custom domains", "Advanced routing"] },
];

export const metadata: Metadata = {
  title: "OpenHubble Uptime",
  description: "OpenHubble Uptime is a future product for website, API, and incident monitoring.",
};

export default function UptimePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#10B981]">Coming Soon</p>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            OpenHubble Uptime is on the way.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            Uptime will provide website monitoring, API monitoring, SSL monitoring, incident management, public status pages, maintenance windows, alerting, and custom domains in a consistent OpenHubble experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products/metrics" className="rounded-full border border-slate-300 px-6 py-3 text-center font-medium text-slate-700 transition hover:bg-white">
              Explore Metrics
            </Link>
            <Link href="/products/analytics" className="rounded-full border border-slate-300 px-6 py-3 text-center font-medium text-slate-700 transition hover:bg-white">
              View Analytics
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ProductSectionHeading
          accent="#10B981"
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
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ProductSectionHeading
          accent="#10B981"
          eyebrow="Roadmap"
          title="A steady path to launch"
          description="The rollout will expand in phases so the experience remains consistent and practical."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {roadmap.map((group) => (
            <div key={group.label} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">{group.label}</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
