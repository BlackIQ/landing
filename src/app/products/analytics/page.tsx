import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductPageShell,
  ProductSectionHeading,
} from "@/components/product-page-shell";

const accent = "#8B5CF6";

const features = [
  {
    title: "Privacy-first analytics",
    description: "Collect visitor and product data with a clear privacy focus.",
  },
  {
    title: "Simple SDK",
    description:
      "Integrate analytics into your application with lightweight client components.",
  },
  {
    title: "Real-time visitors",
    description: "Track active users and current activity as it happens.",
  },
  {
    title: "Events",
    description: "Record meaningful product and interaction events.",
  },
  {
    title: "Sessions",
    description: "Understand how people move through your product over time.",
  },
  {
    title: "Referrers",
    description: "See where traffic is coming from and how it changes.",
  },
  {
    title: "Countries",
    description: "Review audience distribution by location.",
  },
  {
    title: "Devices and browsers",
    description: "Understand what environments your visitors use.",
  },
  {
    title: "Performance",
    description: "Monitor client-side performance and page experiences.",
  },
  {
    title: "Bot detection",
    description: "Filter out automated traffic where appropriate.",
  },
];

export const metadata: Metadata = {
  title: "OpenHubble Analytics",
  description:
    "OpenHubble Analytics is a future privacy-first product for website and application insights.",
};

export default function AnalyticsPage() {
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
          <span className="font-medium text-slate-700">Analytics</span>
        </div>
        <div className="grid gap-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.04)] lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-10">
          <div>
            <p
              className="mb-4 text-sm font-semibold uppercase tracking-[0.24em]"
              style={{ color: accent }}
            >
              Launching October 1, 2026
            </p>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Privacy-first analytics for modern products.
            </h1>
            <p className="mb-4 text-xl font-medium" style={{ color: accent }}>
              A simple product for understanding visitors, behavior, and product
              performance.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              OpenHubble Analytics will provide a simple way to understand
              visitors, product usage, and performance without introducing
              complexity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#overview"
                className="rounded-full px-6 py-3 text-center font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: accent }}
              >
                Launch Timeline
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
              Insights
            </p>
            <div className="mt-5 space-y-5">
              {[
                {
                  title: "Visitors",
                  detail: "Live and historical audience activity.",
                },
                {
                  title: "Events",
                  detail: "Product and feature interaction tracking.",
                },
                {
                  title: "Countries",
                  detail: "Audience distribution by location.",
                },
                {
                  title: "Devices",
                  detail: "Browser and device usage patterns.",
                },
                { title: "Bots", detail: "Visibility into automated traffic." },
                {
                  title: "Performance",
                  detail: "Client-side performance and page experience.",
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
          eyebrow="Overview"
          title="A straightforward analytics product for teams"
          description="The product is intended to stay simple, useful, and respectful of user privacy."
        />
        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <p className="text-base leading-8 text-slate-600">
            Analytics is designed for teams that need practical insight into
            visitors, sessions, events, and performance without relying on heavy
            or opaque tooling.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ProductSectionHeading
          accent={accent}
          eyebrow="Features"
          title="A focused set of product insights"
          description="The initial scope is practical and easy to understand."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.24em]"
            style={{ color: accent }}
          >
            SDK example
          </p>
          <pre className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-4 text-sm text-slate-100">
            <code>{`<Analytics />`}</code>
          </pre>
          <p className="mt-5 text-base leading-8 text-slate-600">
            The intent is to provide a simple SDK component that can be embedded
            into a product with minimal setup.
          </p>
        </div>
      </section>
    </ProductPageShell>
  );
}
