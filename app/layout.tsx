import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewGuard – Crisis Alerts for Negative Google Review Patterns",
  description: "Monitor Google reviews and get instant alerts when negative review patterns signal a potential PR crisis. Built for restaurants, service businesses, and franchisees."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f8645e00-996c-472a-9b2a-d300892e5cab"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
