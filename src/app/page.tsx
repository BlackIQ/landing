import Link from "next/link";

const products = [
  {
    name: "Metrics",
    description:
      "Collect infrastructure, container, and service telemetry with dependable dashboards.",
    accent: "#3B82F6",
  },
  {
    name: "Uptime",
    description:
      "Monitor services, public status, and incidents with confidence and clarity.",
    accent: "#10B981",
  },
  {
    name: "Analytics",
    description:
      "Capture product and web insights with privacy-friendly SDKs and real-time events.",
    accent: "#8B5CF6",
  },
];

const features = [
  {
    title: "Open Source",
    description:
      "Built for the community and shaped by contributors who believe in transparency.",
  },
  {
    title: "Developer Experience",
    description:
      "Thoughtful workflows, straightforward integrations, and clean interfaces for fast delivery.",
  },
  {
    title: "Self Hosted",
    description:
      "Deploy with control, keep your data close, and align the platform with your operations.",
  },
  {
    title: "Reliable",
    description:
      "Designed for steady growth with a platform foundation that scales alongside your team.",
  },
];

const roadmap = [
  { label: "Current", items: ["Metrics"] },
  { label: "Coming Soon", items: ["Uptime", "Analytics"] },
  { label: "Future", items: ["Logs", "Tracing", "Events", "AI"] },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#3B82F6]">
        {eyebrow}
      </p>
      <h3 className="mb-3 text-3xl font-semibold text-slate-900">{title}</h3>
      <p className="text-base leading-8 text-slate-600">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-10 border-b border-slate-800/60 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3B82F6] font-semibold text-white">
              O
            </div>
            <span className="text-lg font-semibold">OpenHubble</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-slate-300 px-4 py-2 transition hover:border-slate-400 hover:bg-white">
                Products
                <span className="text-xs text-slate-500">▾</span>
              </summary>
              <div className="absolute right-0 top-full mt-2 min-w-40 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                <Link
                  href="/products/metrics"
                  className="block rounded-xl px-3 py-2 transition hover:bg-slate-50"
                >
                  Metrics
                </Link>
                <Link
                  href="/products/uptime"
                  className="block rounded-xl px-3 py-2 transition hover:bg-slate-50"
                >
                  Uptime
                </Link>
                <Link
                  href="/products/analytics"
                  className="block rounded-xl px-3 py-2 transition hover:bg-slate-50"
                >
                  Analytics
                </Link>
              </div>
            </details>
            <Link href="#opensource" className="transition hover:text-white">
              Open Source
            </Link>
            <a
              href="https://github.com/OpenHubble"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
            <Link href="#roadmap" className="transition hover:text-white">
              Roadmap
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-slate-600 bg-slate-950 px-4 py-2 text-slate-100 transition hover:border-slate-400 hover:bg-slate-900"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700">
                Open Source
              </span>
              <span className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700">
                Self Hosted
              </span>
              <span className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700">
                Developer Friendly
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              OpenHubble
            </h1>
            <p className="mb-4 text-xl font-medium text-[#3B82F6]">
              Exploring Data, Unveiling Insights.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              OpenHubble is an open-source observability platform for teams
              building modern systems. It brings metrics, uptime, and analytics
              together into one thoughtful ecosystem for exploring data and
              acting with clarity.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#products"
                className="rounded-full bg-[#3B82F6] px-6 py-3 text-center font-medium text-white transition hover:bg-[#2563EB]"
              >
                Get Started
              </Link>
              <a
                href="https://github.com/OpenHubble"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 bg-slate-800 px-6 py-3 text-center font-medium text-white transition hover:bg-slate-700"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Platform overview
            </p>
            <div className="mt-5 space-y-5">
              {[
                {
                  title: "Metrics",
                  detail:
                    "Infrastructure health, collectors, and service visibility.",
                },
                {
                  title: "Uptime",
                  detail:
                    "Status pages, alerts, and incident moments in one place.",
                },
                {
                  title: "Analytics",
                  detail:
                    "Privacy-friendly insight collection for real products.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
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
        </section>

        <section
          id="products"
          className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20"
        >
          <SectionHeading
            eyebrow="Products"
            title="A platform that grows with your observability needs"
            description="Each product shares the same foundation, while its own accent color gives it a distinct place in the ecosystem."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: `${product.accent}14`,
                    color: product.accent,
                  }}
                >
                  <span className="text-lg font-semibold">
                    {product.name[0]}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  {product.name}
                </h3>
                <p className="leading-8 text-slate-600">
                  {product.description}
                </p>
                <Link
                  href={`/products/${product.name.toLowerCase()}`}
                  className="mt-6 inline-flex items-center gap-2 font-medium"
                  style={{ color: product.accent }}
                >
                  Learn More
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Why OpenHubble"
            title="A dependable foundation for modern teams"
            description="OpenHubble is built to feel calm, professional, and scalable from day one."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-3 text-[#3B82F6]">
                  <span className="text-xl font-semibold">•</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="leading-8 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="opensource"
          className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#3B82F6]">
                  Open Source
                </p>
                <h3 className="mb-3 text-3xl font-semibold text-white">
                  OpenHubble believes in community-driven progress.
                </h3>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  The ecosystem is designed to invite collaboration, sharing,
                  and contribution from developers everywhere.
                </p>
              </div>
              <a
                href="https://github.com/OpenHubble"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-800 px-6 py-3 text-center font-medium text-white transition hover:bg-slate-700"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section
          id="roadmap"
          className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20"
        >
          <SectionHeading
            eyebrow="Roadmap"
            title="Built for long-term growth"
            description="The roadmap shows a durable vision that expands thoughtfully over time without compromising the experience."
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
      </main>

      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:flex-row lg:justify-between lg:px-8">
          <div>
            <h4 className="text-lg font-semibold text-slate-900">OpenHubble</h4>
            <p className="mt-2 text-slate-600">
              Exploring Data, Unveiling Insights.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h5 className="mb-2 font-semibold text-white">Products</h5>
              <div className="text-sm leading-7 text-slate-300">
                <Link
                  href="/products/metrics"
                  className="transition hover:text-white"
                >
                  Metrics
                </Link>
                <br />
                <Link
                  href="/products/uptime"
                  className="transition hover:text-white"
                >
                  Uptime
                </Link>
                <br />
                <Link
                  href="/products/analytics"
                  className="transition hover:text-white"
                >
                  Analytics
                </Link>
              </div>
            </div>
            <div>
              <h5 className="mb-2 font-semibold text-slate-900">Resources</h5>
              <p className="text-sm leading-7 text-slate-600">
                GitHub
                <br />
                Docs
                <br />
                Contact
              </p>
            </div>
            <div>
              <h5 className="mb-2 font-semibold text-slate-900">Contact</h5>
              <a
                href="mailto:info@openhubble.com"
                className="text-sm text-slate-600 transition hover:text-slate-900"
              >
                info@openhubble.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
