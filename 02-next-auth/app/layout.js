import Nav from "@/components/Nav";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Next Auth App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100">
        <AuthProvider>
          <Nav />
          <div className="mt-2">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
