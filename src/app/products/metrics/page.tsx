import type { Metadata } from "next";
import Link from "next/link";
import { ProductSectionHeading } from "@/components/product-page-shell";

const features = [
  { title: "Lightweight Agent", description: "Minimal resource usage designed for production environments." },
  { title: "Real-Time Monitoring", description: "Observe your infrastructure as metrics are collected." },
  { title: "Historical Metrics", description: "Analyze trends over time and compare system behavior." },
  { title: "Service Monitoring", description: "Monitor system services and availability from a single view." },
  { title: "Container Support", description: "Collect metrics from containerized workloads and hosts." },
  { title: "Secure Communication", description: "Authenticated communication between agents and dashboard." },
  { title: "Open Source", description: "Fully open-source and community driven." },
  { title: "REST API", description: "Integrate Metrics into your own tooling and workflows." },
];

const technologyGroups = [
  { title: "Backend", items: ["FastAPI", "SQLAlchemy", "PostgreSQL", "REST API"] },
  { title: "Frontend", items: ["Next.js", "TypeScript", "Material UI"] },
  { title: "Agent", items: ["Python", "Systemd", "Async Collectors"] },
];

const relatedProducts = [
  { name: "Uptime", href: "/products/uptime", description: "Coming soon for website and API monitoring." },
  { name: "Analytics", href: "/products/analytics", description: "Future analytics product for privacy-first insights." },
];

export const metadata: Metadata = {
  title: "OpenHubble Metrics",
  description: "OpenHubble Metrics provides infrastructure observability for servers, services, containers, and system health.",
};

export default function MetricsPage() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700">Open Source</span>
            <span className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700">Self Hosted</span>
            <span className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700">Fast Deployment</span>
            <span className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700">Cross Platform</span>
          </div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Infrastructure observability built for modern systems.
          </h1>
          <p className="mb-4 text-xl font-medium text-[#3B82F6]">
            Collect real-time infrastructure telemetry from your servers with lightweight agents.
          </p>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Monitor CPU, memory, disks, services, containers, and system health from a modern dashboard.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#installation" className="rounded-full bg-[#3B82F6] px-6 py-3 text-center font-medium text-white transition hover:bg-[#2563EB]">
              Install Agent
            </a>
            <a href="https://metrics.openhubble.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-6 py-3 text-center font-medium text-slate-700 transition hover:bg-white">
              Open Dashboard
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Current coverage</p>
          <div className="mt-5 space-y-5">
            {[
              { title: "System Metrics", detail: "CPU, memory, disks, network, processes." },
              { title: "Services", detail: "Availability and health over time." },
              { title: "Containers", detail: "Resource usage across workloads." },
            ].map((item) => (
              <div key={item.title} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-1 text-sm leading-7 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="installation" className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ProductSectionHeading
          accent="#3B82F6"
          eyebrow="Installation"
          title="Install the agent in seconds"
          description="The OpenHubble Metrics Agent connects to your infrastructure and begins reporting metrics to the dashboard immediately."
        />
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:p-8">
          <pre className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-4 text-sm text-slate-100">
            <code>{`curl -s get.metrics.openhubble.com/agent | sudo bash`}</code>
          </pre>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Install the OpenHubble Metrics Agent in seconds. Once connected, your infrastructure immediately begins reporting metrics to your dashboard.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ProductSectionHeading
          accent="#3B82F6"
          eyebrow="Architecture"
          title="A minimal path from host to dashboard"
          description="The architecture is intentionally simple so it fits into existing environments with minimal friction."
        />
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center text-sm font-medium text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">Linux Server</div>
            <div className="text-slate-400">↓</div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">OpenHubble Metrics Agent</div>
            <div className="text-slate-400">↓</div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">Secure API</div>
            <div className="text-slate-400">↓</div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">Metrics Dashboard</div>
            <div className="text-slate-400">↓</div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">You</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ProductSectionHeading
          accent="#3B82F6"
          eyebrow="Features"
          title="Built for infrastructure teams and operators"
          description="The product focuses on practical monitoring needs without adding unnecessary complexity."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#3B82F6]">Dashboard</p>
            <h3 className="mb-2 text-3xl font-semibold text-slate-900">Modern Infrastructure Dashboard</h3>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Manage servers, groups, tags, services, infrastructure metrics, and system health from a clean and responsive interface.
            </p>
          </div>
          <a href="https://metrics.openhubble.com" target="_blank" rel="noreferrer" className="rounded-full bg-[#3B82F6] px-6 py-3 text-center font-medium text-white transition hover:bg-[#2563EB]">
            Open Dashboard
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ProductSectionHeading
          accent="#3B82F6"
          eyebrow="Agent"
          title="A lightweight collector for system and service data"
          description="The agent runs on hosts and reports structured telemetry back to the Metrics service."
        />
        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <p className="text-base leading-8 text-slate-600">
            The OpenHubble Metrics Agent is designed to stay small and predictable. It gathers system and service data with low overhead and sends it to the platform using authenticated connections.
          </p>
        </div>
      </section>

      <section id="opensource" className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#3B82F6]">Open Source</p>
            <h3 className="mb-3 text-3xl font-semibold text-slate-900">The dashboard and the agent are open source.</h3>
            <p className="text-base leading-8 text-slate-600">
              Contributions are welcome. If you are working on infrastructure monitoring, system administration, or dashboard tooling, the project is open to discussion and collaboration.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a href="https://github.com/OpenHubble/metrics-agent" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 transition hover:bg-white">
              Metrics Agent
            </a>
            <a href="https://github.com/OpenHubble/metrics-dashboard-frontend" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 transition hover:bg-white">
              Dashboard Frontend
            </a>
            <a href="https://github.com/OpenHubble/metrics-dashboard-backend" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 transition hover:bg-white">
              Dashboard Backend
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ProductSectionHeading
          accent="#3B82F6"
          eyebrow="Technology"
          title="Implementation details, not hype"
          description="The stack is straightforward and practical for running the service reliably."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {technologyGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ProductSectionHeading
          accent="#3B82F6"
          eyebrow="Documentation"
          title="Reference material for operators and developers"
          description="Use the documentation and API references alongside the product to integrate Metrics into your workflows."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <a href="https://metrics.openhubble.com/docs" target="_blank" rel="noreferrer" className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:bg-slate-50">
            <h3 className="text-lg font-semibold text-slate-900">Documentation</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">Guides for installing, configuring, and operating the agent and dashboard.</p>
          </a>
          <a href="https://api.metrics.openhubble.com/redoc" target="_blank" rel="noreferrer" className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:bg-slate-50">
            <h3 className="text-lg font-semibold text-slate-900">API Reference</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">Details for integrating Metrics into your own tooling and services.</p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ProductSectionHeading
          accent="#3B82F6"
          eyebrow="Related Products"
          title="The ecosystem continues to expand"
          description="Metrics is one product within the broader OpenHubble platform."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {relatedProducts.map((product) => (
            <Link key={product.name} href={product.href} className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:bg-slate-50">
              <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{product.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
