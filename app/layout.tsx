import type { Metadata } from "next";
import DefaultNavbar from "./components/Navbar/DefaultNavbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Components Library",
  description: "Conponents Templates Library",
  icons: {
    icon: "/logo.png",
  },
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
