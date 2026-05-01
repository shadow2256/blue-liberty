import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Blue Liberty — Tokenized Real Estate. Anywhere.",
  description:
    "Borderless fractional access to income-producing real estate — launching in Florida, expanding to Quebec, Europe, and beyond. Asset-backed, on-chain, transparent.",
  openGraph: {
    title: "Blue Liberty — Tokenized Real Estate. Anywhere.",
    description:
      "Borderless fractional access to real estate. Florida launch, global pipeline.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-salt-white">
        {children}
      </body>
    </html>
  );
}
