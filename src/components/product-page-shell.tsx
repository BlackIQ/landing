import Link from "next/link";
import type { ReactNode } from "react";

type ProductPageShellProps = {
  accent: string;
  children: ReactNode;
};

const productLinks = [
  { href: "/products/metrics", label: "Metrics" },
  { href: "/products/uptime", label: "Uptime" },
  { href: "/products/analytics", label: "Analytics" },
];

export function ProductPageShell({ accent, children }: ProductPageShellProps) {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-[#f8fafc]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full font-semibold text-white" style={{ backgroundColor: accent }}>
              O
            </div>
            <span className="text-lg font-semibold">OpenHubble</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-slate-300 px-4 py-2 transition hover:border-slate-400 hover:bg-white">
                Products
                <span className="text-xs text-slate-500">▾</span>
              </summary>
              <div className="absolute right-0 top-full mt-2 min-w-40 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                {productLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm transition hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            <a href="https://github.com/OpenHubble" target="_blank" rel="noreferrer" className="transition hover:text-slate-950">
              GitHub
            </a>
            <Link href="#contact" className="rounded-full border border-slate-300 px-4 py-2 transition hover:border-slate-400 hover:bg-white">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:flex-row lg:justify-between lg:px-8">
          <div>
            <h4 className="text-lg font-semibold text-slate-900">OpenHubble</h4>
            <p className="mt-2 text-slate-600">Exploring Data, Unveiling Insights.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <h5 className="mb-2 font-semibold text-slate-900">Products</h5>
              <p className="text-sm leading-7 text-slate-600">Metrics<br />Uptime<br />Analytics</p>
            </div>
            <div>
              <h5 className="mb-2 font-semibold text-slate-900">Resources</h5>
              <p className="text-sm leading-7 text-slate-600">GitHub<br />Docs<br />Contact</p>
            </div>
            <div>
              <h5 className="mb-2 font-semibold text-slate-900">Contact</h5>
              <a href="mailto:info@openhubble.com" className="text-sm text-slate-600 transition hover:text-slate-900">
                info@openhubble.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function ProductSectionHeading({
  accent,
  eyebrow,
  title,
  description,
}: {
  accent: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em]" style={{ color: accent }}>
        {eyebrow}
      </p>
      <h3 className="mb-3 text-3xl font-semibold text-slate-900">{title}</h3>
      <p className="text-base leading-8 text-slate-600">{description}</p>
    </div>
  );
}
