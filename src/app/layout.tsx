import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Deniz Barçak | CV",
  description:
    "Yazılım geliştirici ve İç Mimar Deniz Barçak'ın kişisel CV sitesi",
  icons: {
    icon: "/img/cv-2.png",
    shortcut: "/img/cv-2.png",
    apple: "/img/cv-2.png",
    other: {
      rel: "apple-touch-icon",
      url: "/img/cv-2.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <link rel="icon" type="image/png" href="/img/cv-2.png" />
        <link rel="shortcut icon" type="image/png" href="/img/cv-2.png" />
        <link rel="apple-touch-icon" href="/img/cv-2.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
