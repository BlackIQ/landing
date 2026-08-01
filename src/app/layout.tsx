import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenHubble | Observability Platform",
  description:
    "OpenHubble is an open-source observability platform for metrics, uptime, and analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
