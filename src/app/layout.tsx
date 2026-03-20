import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BobTides — The Peptide Wave",
  description: "Premium peptide education, research, and lifestyle. Ride the wave of optimal performance.",
  openGraph: {
    title: "BobTides — The Peptide Wave",
    description: "Premium peptide education, research, and lifestyle.",
    url: "https://bobtides.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0A0A0F] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
