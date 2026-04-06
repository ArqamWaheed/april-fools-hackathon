import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MergeGuardian 9000 — Enterprise Merge Intelligence",
  description:
    "AI-powered pull request review platform. Policy-aware. Compliance-native. Merge-hostile.",
  openGraph: {
    title: "MergeGuardian 9000",
    description:
      "The AI code reviewer that blocks every merge for spiritual reasons. 0% approval rate.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MergeGuardian 9000",
    description:
      "The AI code reviewer that blocks every merge for spiritual reasons.",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛡️</text></svg>",
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
