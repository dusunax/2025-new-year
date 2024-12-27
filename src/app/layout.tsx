import type { Metadata } from "next";
import { Black_Han_Sans, Orbit, Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500",  "700"],
});

const orbit = Orbit({
  variable: "--font-orbit",
  subsets: ["latin"],
  weight: [ "400"],
});

const blackHanSans = Black_Han_Sans({
  variable: "--font-black-han-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "2025 New Year Card Maker",
  description: "AI로 새해 인사 카드 만들기✨",
  openGraph: {
    title: "2025 New Year Card Maker",
    description: "AI로 새해 인사 카드 만들기✨",
    images: ["https://2025-new-year.vercel.app/images/2025-card-maker.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${orbit.variable} ${blackHanSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
