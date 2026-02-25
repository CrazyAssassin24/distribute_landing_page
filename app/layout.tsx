import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ComputeLink — Connect Idle Compute to Real Demand",
  description:
    "ComputeLink is the marketplace that connects people with spare compute power to developers, researchers, and teams who need it — cheaply, instantly, and securely.",
  keywords: [
    "compute marketplace",
    "rent GPU",
    "distributed computing",
    "sell compute power",
    "AI compute",
    "cloud GPU",
  ],
  openGraph: {
    title: "ComputeLink — Connect Idle Compute to Real Demand",
    description:
      "The marketplace that matches spare compute with real demand. Join the waitlist today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
