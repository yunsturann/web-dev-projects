// ** CSS Imports
import "./globals.css";

// ** Type Imports
import type { Metadata } from "next";

// ** Font Imports
import { Ubuntu } from "next/font/google";

// ** Third Party Imports
import { ClerkProvider } from "@clerk/nextjs";
import ToasterContext from "@/context/ToasterContext";

// ** Custom Components

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "My Kanban App",
  description: "A simple Kanban app built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${ubuntu.className} dark:bg-gray-900 text-white`}>
          <ToasterContext />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
