import type { Metadata } from "next";

import "./globals.css";
import React from "react";

import { Noto_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: "OMDB",
  description: "OMDB for Aligent",
};

const notoSans = Noto_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
