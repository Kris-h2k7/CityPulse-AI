import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CityPulse AI — Traffic Risk Intelligence",
  description: "A neural-network-powered traffic congestion and accident-risk prediction showcase.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar/><main className="min-h-[75vh]">{children}</main><Footer/></body></html>;
}