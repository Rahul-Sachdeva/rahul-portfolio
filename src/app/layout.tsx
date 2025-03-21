import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingStars from "@/components/FloatingStars/FloatingStars";
import Sidebar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/sonner"
import MobileNavbar from "@/components/MobileNavbar/MobileNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Sachdeva",
  description: "CSE Student Portfolio in Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 left-0 w-full h-full z-10">
          <FloatingStars/>
        </div>
        <div className="fixed bottom-0 w-full lg:hidden h-[60px] z-[100] bg-black border-t-2 border-white">
          <MobileNavbar/>
        </div>
        <div className="flex">
          <div className="w-0 lg:w-[300px] h-[100vh] max-h-screen z-[100]">
            <Sidebar/> 
          </div>
          <div className="flex flex-col h-full bg-[#050816] mb-[60px] lg:mb-0 overflow-hidden w-full md:w-[calc(100%-300px)]">
            {children}
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}
