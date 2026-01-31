import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Schibsted_Grotesk({
  variable: "--the-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CAGH",
  description: "CAGH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
