import type { Metadata } from "next";
import { ProductCard } from "@/components/product/ProductCard";
import { Sidebar } from "@/components/layout/Sidebar";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "جميع المنتجات | بيلزا فارما",
  description: "تصفح جميع منتجات بيلزا فارما — سيروم، كريمات، مكملات، عناية بالشعر والمزيد.",
};

export default function ProductsPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <div className="mb-8 text-right">
            <h1 className="text-3xl font-bold text-foreground font-arabic">جميع المنتجات</h1>
            <p className="text-muted-foreground mt-1 font-arabic">{products.length} منتج صيدلاني متميز</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
