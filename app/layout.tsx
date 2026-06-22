import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "بيلزا فارما | منتجات صيدلانية متميزة",
    template: "%s | بيلزا فارما",
  }, icons: {
    icon: "/logo.jpg", // Or "/favicon.ico"
    apple: "/logo.jpg", // Optional: for Apple devices
  },
    openGraph: {
    title: "Home | Bellezza Pharma",
    description: "Discover Bellezza Pharma's premium range...",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bellezza Pharma Logo",
      },
    ],
  },
  description: "بيلزا فارما — منتجات صيدلانية وتجميلية متميزة للبشرة والشعر والصحة. مختبرة طبياً ومعتمدة من أطباء الجلد.",
  keywords: ["بيلزا فارما", "منتجات صيدلانية", "عناية بالبشرة", "عناية بالشعر", "مكملات غذائية"],
  authors: [{ name: "Bellezza Pharma" }],  

  twitter: {
    card: "summary_large_image",
    title: "Bellezza Pharma",
    description: "Premium pharmaceutical and cosmeceutical products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background antialiased font-arabic">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
