import TopAppBar from "@/components/TopAppBar/TopAppBar";
import "./globals.css";
import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";

const pressStart2p = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2p.className} bg-brandingColor-950 text-gray-50 uppercase`}
      >
        <TopAppBar />
        {children}
      </body>
    </html>
  );
}
