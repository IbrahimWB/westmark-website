import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { globalTheme } from "@/lib/theme/globals";

const clashGrotesk = localFont({
  src: [
    {
      path: "../../ClashGrotesk/ClashGrotesk_Complete/Fonts/OTF/ClashGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../ClashGrotesk/ClashGrotesk_Complete/Fonts/OTF/ClashGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../ClashGrotesk/ClashGrotesk_Complete/Fonts/OTF/ClashGrotesk-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-clash",
  display: "swap",
});

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
      <body className={`${clashGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
