import type { Metadata } from "next";
import { ProductCard } from "@/components/product/ProductCard";
import { Sidebar } from "@/components/layout/Sidebar";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Browse all Bellezza Pharma products — premium serums, creams, supplements, hair care, and more.",
};

export default function ProductsPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        <Sidebar />
        <div className="flex-1 min-w-0">
          {/* Page header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">All Products</h1>
            <p className="text-muted-foreground mt-1">
              {products.length} premium pharmaceutical products
            </p>
            <p className="text-muted-foreground font-arabic mt-1" dir="rtl">
              {products.length} منتج صيدلاني متميز
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
