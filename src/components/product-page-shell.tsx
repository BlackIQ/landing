import Link from "next/link";
import type { ReactNode } from "react";

type ProductPageShellProps = {
  accent: string;
  children: ReactNode;
};

type ProductPageShellConfig = {
  accent: string;
  productName: string;
  heroCtaHref: string;
};

function getShellConfig(accent: string): ProductPageShellConfig {
  if (accent === "#10B981") {
    return {
      accent,
      productName: "Uptime",
      heroCtaHref: "#",
    };
  }

  if (accent === "#8B5CF6") {
    return {
      accent,
      productName: "Analytics",
      heroCtaHref: "#",
    };
  }

  return {
    accent,
    productName: "Metrics",
    heroCtaHref: "https://metrics.openhubble.com",
  };
}

export function ProductPageShell({ accent, children }: ProductPageShellProps) {
  const config = getShellConfig(accent);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-[#f8fafc]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full font-semibold text-white"
              style={{ backgroundColor: accent }}
            >
              O
            </div>
            <span className="text-lg font-semibold">OpenHubble</span>
          </Link>
          <a
            href={config.heroCtaHref}
            target={
              config.heroCtaHref.startsWith("http") ? "_blank" : undefined
            }
            rel={
              config.heroCtaHref.startsWith("http") ? "noreferrer" : undefined
            }
            className="rounded-full px-4 py-2 font-medium text-white transition hover:opacity-90"
            style={{ backgroundColor: accent }}
          >
            Go to console
          </a>
        </div>
      </header>

      <main>{children}</main>

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
              <h5 className="mb-2 font-semibold text-slate-900">Products</h5>
              <p className="text-sm leading-7 text-slate-600">
                <span className="font-medium" style={{ color: accent }}>
                  Metrics
                </span>
                <br />
                <span className="font-medium" style={{ color: accent }}>
                  Uptime
                </span>
                <br />
                <span className="font-medium" style={{ color: accent }}>
                  Analytics
                </span>
              </p>
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
      <p
        className="mb-3 text-sm font-semibold uppercase tracking-[0.24em]"
        style={{ color: accent }}
      >
        {eyebrow}
      </p>
      <h3 className="mb-3 text-3xl font-semibold text-slate-900">{title}</h3>
      <p className="text-base leading-8 text-slate-600">{description}</p>
    </div>
  );
}
