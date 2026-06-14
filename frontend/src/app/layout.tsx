import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MPIT Centre of Excellence | Advanced Tech Courses",
  description: "Master AI, Cybersecurity, Drone Technology, and 3D Printing with industry experts at MPIT Centre of Excellence",
  keywords: "MPIT, Centre of Excellence, AI courses, Cybersecurity, Drone Technology, 3D Printing, Online courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
