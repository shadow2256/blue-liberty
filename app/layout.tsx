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
  title: "Blue Liberty — Modern Access to Florida Real Estate",
  description:
    "Transparent fractional property access built around real assets and digital simplicity. Join the waitlist for early access to premium Florida real estate investment.",
  openGraph: {
    title: "Blue Liberty — Modern Access to Florida Real Estate",
    description:
      "Fractional property access built around real assets and digital simplicity.",
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
