import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImagePlaceholder } from "@/components/product/ImagePlaceholder";
import { categoryColors, categoryIcons } from "@/lib/utils";
import type { Product } from "@/types/product";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (!products.length) return null;
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground font-arabic text-right">منتجات ذات صلة</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`}
            className="group rounded-xl border border-border bg-card p-3 hover:border-pharma-300 dark:hover:border-pharma-700 hover:shadow-md transition-all duration-200 text-right">
            <ImagePlaceholder productName={product.nameAr} className="aspect-[4/3] mb-3" />
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full font-arabic ${categoryColors[product.category] || ""}`}>
              {categoryIcons[product.category]} {product.categoryLabelAr}
            </span>
            <p className="text-sm font-semibold text-foreground mt-2 group-hover:text-pharma-600 transition-colors line-clamp-1 font-arabic">
              {product.nameAr}
            </p>
            <p className="text-xs font-bold text-pharma-600 mt-1">{product.price}</p>
            <div className="flex items-center gap-1 mt-1 text-xs text-pharma-600 group-hover:gap-2 transition-all font-arabic">
              عرض <ArrowLeft className="w-3 h-3" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
