import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopHeader } from "@/components/layout/TopHeader";
import { MainNavigation } from "@/components/layout/MainNavigation";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "河北欧意风机 - 玻璃钢风机专业制造商",
  description: "河北欧意科技集团有限公司主营玻璃钢风机、轴流风机、离心风机等产品。全国服务热线：郭建民 13931816112",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 flex flex-col min-h-screen`}
      >
        <TopHeader />
        <MainNavigation />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
