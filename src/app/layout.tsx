import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <Navbar />
        {children}
        <footer className="w-full bg-white py-8 flex flex-col items-center justify-center mt-12">
          <div className="text-black text-3xl font-extrabold tracking-widest mb-2">ART GALLERY</div>
          <div className="text-black text-sm mb-4">Ikuti Kami :</div>
          <div className="flex gap-6 text-black text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="none"/><path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM18 6.5C18.2761 6.5 18.5 6.72386 18.5 7C18.5 7.27614 18.2761 7.5 18 7.5C17.7239 7.5 17.5 7.27614 17.5 7C17.5 6.72386 17.7239 6.5 18 6.5Z" fill="currentColor"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="none"/><path d="M10 15.5V8.5L16 12L10 15.5Z" fill="currentColor"/><rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2"/></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="none"/><path d="M16.5 7.5V13.5C16.5 15.1569 15.1569 16.5 13.5 16.5C11.8431 16.5 10.5 15.1569 10.5 13.5C10.5 11.8431 11.8431 10.5 13.5 10.5H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2"/></svg>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
