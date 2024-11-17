import type { Metadata } from "next";
import DefaultNavbar from "./components/Navbar/DefaultNavbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sazib Template and Section",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DefaultNavbar />
        {children}
      </body>
    </html>
  );
}
