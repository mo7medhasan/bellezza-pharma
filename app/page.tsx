import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductsGrid } from "@/components/home/ProductsGrid";
import { Sidebar } from "@/components/layout/Sidebar";



export const metadata: Metadata = {
  title: "Home | Bellezza Pharma",
  description:
    "Discover Bellezza Pharma's premium range of pharmaceutical and cosmeceutical products including serums, creams, supplements, and more.",
 icons: {
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
};
export default function HomePage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 min-w-0 space-y-10">
          <HeroSection />
          <ProductsGrid />
        </div>
      </div>
    </div>
  );
}
