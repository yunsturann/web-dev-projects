// **  Nextjs Imports
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";

// ** Global Styles
import "./globals.css";

// ** Custom Components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const KUMBH_SANS = Kumbh_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "A product Page of A E-commerce Website",
  description: "A product Page of A E-commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={KUMBH_SANS.className}>
        <main className="min-h-screen flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
