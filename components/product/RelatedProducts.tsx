import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/product/ImagePlaceholder";
import { categoryColors, categoryIcons } from "@/lib/utils";
import type { Product } from "@/types/product";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products.length) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group rounded-xl border border-border bg-card p-3 hover:border-pharma-300 dark:hover:border-pharma-700 hover:shadow-md transition-all duration-200"
          >
            <ImagePlaceholder
              productName={product.nameEn}
              className="aspect-[4/3] mb-3"
            />
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                categoryColors[product.category] || ""
              }`}
            >
              {categoryIcons[product.category]} {product.categoryLabel}
            </span>
            <p className="text-sm font-semibold text-foreground mt-2 group-hover:text-pharma-600 transition-colors line-clamp-1">
              {product.nameEn}
            </p>
            <p className="text-xs text-muted-foreground font-arabic mt-0.5" dir="rtl">
              {product.nameAr}
            </p>
            <div className="flex items-center gap-1 mt-2 text-xs text-pharma-600 group-hover:gap-2 transition-all">
              View <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
