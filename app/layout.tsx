import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumee - Klinika Medycyny Estetycznej",
  description: "Fikcyjny demo landing page dla kliniki medycyny estetycznej.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
