import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webxact — Automated Identity Monitoring for Employees",
  description: "Webxact is automated identity monitoring and alert software employers offer their teams.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
