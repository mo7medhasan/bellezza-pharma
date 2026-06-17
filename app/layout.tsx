import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bellezza Pharma | Premium Pharmaceutical Products",
    template: "%s | Bellezza Pharma",
  },
  description:
    "Bellezza Pharma — premium pharmaceutical and cosmeceutical products for skin, hair, and wellness. Clinically tested, dermatologically approved.",
  keywords: [
    "bellezza pharma",
    "pharmaceutical products",
    "skincare",
    "haircare",
    "supplements",
    "dermatology",
    "egypt pharma",
    "pedro serum",
    "treo serum",
    "norgin sunblock",
  ],
  authors: [{ name: "Bellezza Pharma" }],
  creator: "Bellezza Pharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    title: "Bellezza Pharma | Premium Pharmaceutical Products",
    description:
      "Premium pharmaceutical and cosmeceutical products for skin, hair, and wellness.",
    siteName: "Bellezza Pharma",
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
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
