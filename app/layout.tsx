import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Distribute — The Compute Marketplace",
  description:
    "Distribute connects idle compute to real demand. Earn from your hardware or access affordable GPU and CPU power on demand.",
  keywords: [
    "compute marketplace",
    "rent GPU",
    "distributed computing",
    "sell compute power",
    "AI compute",
  ],
  openGraph: {
    title: "Distribute — The Compute Marketplace",
    description: "Idle compute, put to work.",
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
