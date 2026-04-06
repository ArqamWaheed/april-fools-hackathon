import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MergeGuardian 9000 — Enterprise Merge Intelligence",
  description:
    "AI-powered pull request review platform. Policy-aware. Compliance-native. Merge-hostile.",
  openGraph: {
    title: "MergeGuardian 9000",
    description: "The AI code reviewer that blocks every merge for spiritual reasons.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-guardian-bg text-guardian-text antialiased">
        {children}
      </body>
    </html>
  );
}
