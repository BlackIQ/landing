import Link from "next/link";

const products = [
  {
    name: "Metrics",
    description:
      "Collect infrastructure, container, and service telemetry with dependable dashboards.",
    accent: "#3B82F6",
    href: "/products/metrics",
  },
  {
    name: "Uptime",
    description:
      "Monitor services, public status, and incidents with confidence and clarity.",
    accent: "#10B981",
    href: "/products/uptime",
  },
  {
    name: "Analytics",
    description:
      "Capture product and web insights with privacy-friendly SDKs and real-time events.",
    accent: "#8B5CF6",
    href: "/products/analytics",
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
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black">
        {eyebrow}
      </p>
      <h3 className="mb-3 text-3xl font-bold text-slate-900 sm:text-4xl">
        {title}
      </h3>
      <p className="text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black font-semibold text-white">
              O
            </div>
            <span className="text-lg font-bold tracking-tight text-black">
              OpenHubble
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-1 rounded-full border border-slate-300 px-4 py-1.5 transition hover:border-black hover:text-black">
                Products
                <span className="text-xs text-slate-400 group-open:rotate-180 transition-transform">
                  ▾
                </span>
              </summary>
              <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                <Link
                  href="/products/metrics"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100 hover:text-black"
                >
                  <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
                  Metrics
                </Link>
                <Link
                  href="/products/uptime"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100 hover:text-black"
                >
                  <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                  Uptime
                </Link>
                <Link
                  href="/products/analytics"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100 hover:text-black"
                >
                  <span className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
                  Analytics
                </Link>
              </div>
            </details>
            <Link href="#opensource" className="transition hover:text-black">
              Open Source
            </Link>
            <a
              href="https://github.com/OpenHubble"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-black"
            >
              GitHub
            </a>
            <Link href="#roadmap" className="transition hover:text-black">
              Roadmap
            </Link>
            <Link
              href="#contact"
              className="rounded-full bg-black px-4 py-2 font-medium text-white transition hover:bg-slate-800"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                Open Source
              </span>
              <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                Self Hosted
              </span>
              <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                Developer Friendly
              </span>
            </div>
            <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-black sm:text-6xl">
              OpenHubble
            </h1>
            <p className="mb-6 text-xl font-semibold text-slate-700">
              Exploring Data, Unveiling Insights.
            </p>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              OpenHubble is an open-source observability platform for teams
              building modern systems. It brings metrics, uptime, and analytics
              together into one thoughtful ecosystem for exploring data and
              acting with clarity.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#products"
                className="rounded-full bg-black px-8 py-3.5 text-center font-semibold text-white transition hover:bg-slate-800"
              >
                Get Started
              </Link>
              <a
                href="https://github.com/OpenHubble"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-center font-semibold text-slate-900 transition hover:border-black hover:bg-slate-100"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Platform Overview
            </p>
            <div className="mt-6 space-y-6">
              {[
                {
                  title: "Metrics",
                  accent: "#3B82F6",
                  detail:
                    "Infrastructure health, collectors, and service visibility.",
                },
                {
                  title: "Uptime",
                  accent: "#10B981",
                  detail:
                    "Status pages, alerts, and incident moments in one place.",
                },
                {
                  title: "Analytics",
                  accent: "#8B5CF6",
                  detail:
                    "Privacy-friendly insight collection for real products.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: item.accent }}
                    />
                    <h2 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h2>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Products"
            title="A platform that grows with your observability needs"
            description="Each product shares the same foundation, while its own accent color gives it a distinct place in the ecosystem."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl font-bold"
                  style={{
                    backgroundColor: `${product.accent}1A`,
                    color: product.accent,
                  }}
                >
                  {product.name[0]}
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {product.name}
                </h3>
                <p className="leading-7 text-slate-600 text-sm">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="mt-6 inline-flex items-center gap-1 font-semibold text-sm transition hover:underline"
                  style={{ color: product.accent }}
                >
                  Learn More
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CEO Section */}
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Leadership
                </span>
                <h3 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Amirhossein Mohammadi
                </h3>
                <p className="mt-1 font-medium text-slate-500">
                  Founder & CEO, OpenHubble
                </p>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                  Leading OpenHubble with a focus on high-performance
                  infrastructure, open-source telemetry, and clean developer
                  tooling.
                </p>
                <p className="mt-2 text-xs font-semibold text-slate-400">
                  OpenHubble since 2024
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://amirhossein.info"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Website
                </a>
                <a
                  href="https://github.com/BlackIQ"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-black hover:bg-slate-50"
                >
                  GitHub @BlackIQ
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why OpenHubble */}
        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Why OpenHubble"
            title="A dependable foundation for modern teams"
            description="OpenHubble is built to feel calm, professional, and scalable from day one."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 h-2 w-2 rounded-full bg-black" />
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="leading-7 text-sm text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Source Banner */}
        <section
          id="opensource"
          className="mx-auto max-w-6xl px-6 py-16 lg:px-8"
        >
          <div className="rounded-3xl bg-black p-8 sm:p-12 text-white">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Open Source
                </p>
                <h3 className="mb-3 text-3xl font-bold sm:text-4xl">
                  Community-driven progress.
                </h3>
                <p className="max-w-2xl text-slate-300">
                  The ecosystem is designed to invite collaboration, sharing,
                  and contribution from developers everywhere.
                </p>
              </div>
              <a
                href="https://github.com/OpenHubble"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-8 py-3.5 text-center font-bold text-black transition hover:bg-slate-200"
              >
                Explore GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Roadmap"
            title="Built for long-term growth"
            description="The roadmap shows a durable vision that expands thoughtfully over time without compromising the experience."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {roadmap.map((group) => (
              <div
                key={group.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  {group.label}
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:justify-between lg:px-8">
          <div>
            <h4 className="text-xl font-bold text-black">OpenHubble</h4>
            <p className="mt-2 text-sm text-slate-500">
              Exploring Data, Unveiling Insights.
            </p>
            <p className="mt-4 text-xs font-semibold text-slate-400">
              OpenHubble since 2024
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h5 className="mb-3 font-bold text-black text-sm">Products</h5>
              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <Link href="/products/metrics" className="hover:text-black">
                  Metrics
                </Link>
                <Link href="/products/uptime" className="hover:text-black">
                  Uptime
                </Link>
                <Link href="/products/analytics" className="hover:text-black">
                  Analytics
                </Link>
              </div>
            </div>
            <div>
              <h5 className="mb-3 font-bold text-black text-sm">
                Social Media
              </h5>
              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <a
                  href="https://github.com/OpenHubble"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <h5 className="mb-3 font-bold text-black text-sm">Contact</h5>
              <a
                href="mailto:info@openhubble.com"
                className="text-sm text-slate-600 transition hover:text-black"
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
