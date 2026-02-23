import type { Metadata } from "next";
import "./globals.css";
import { globalTheme } from "@/lib/theme/globals";

export const metadata: Metadata = {
  title: globalTheme.seoTitle,
  description: globalTheme.seoDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
