"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import type { ProductCategory } from "@/types/product";
import { categoryIcons } from "@/lib/utils";

const categories: { value: "all" | ProductCategory; label: string }[] = [
  { value: "all", label: "جميع المنتجات" },
  { value: "serum", label: `${categoryIcons.serum} سيروم` },
  { value: "shampoo", label: `${categoryIcons.shampoo} شامبو` },
  { value: "conditioner", label: `${categoryIcons.conditioner} بلسم` },
  { value: "cream", label: `${categoryIcons.cream} كريمات` },
  { value: "sunscreen", label: `${categoryIcons.sunscreen} واقي شمس` },
  { value: "supplement", label: `${categoryIcons.supplement} مكملات` },
  { value: "syrup", label: `${categoryIcons.syrup} شراب` },
  { value: "facial-wash", label: `${categoryIcons["facial-wash"]} غسول وجه` },
  { value: "oral-care", label: `${categoryIcons["oral-care"]} عناية فم` },
  { value: "feminine-care", label: `${categoryIcons["feminine-care"]} عناية حميمة` },
  { value: "baby-care", label: `${categoryIcons["baby-care"]} عناية أطفال` },
  { value: "deodorant", label: `${categoryIcons.deodorant} مزيل عرق` },
];

export function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState<"all" | ProductCategory>("all");

  const filtered = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-right">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-arabic">منتجاتنا</h2>
          <p className="text-muted-foreground mt-1 text-sm font-arabic" dir="ltr">Our Products — Bellezza Pharma</p>
        </div>
        <p className="text-sm text-muted-foreground font-arabic">{filtered.length} من {products.length} منتج</p>
      </div>

      <div className="flex gap-2 flex-wrap justify-end">
        {categories.map(({ value, label }) => {
          const count = value === "all" ? products.length : products.filter((p) => p.category === value).length;
          if (count === 0) return null;
          return (
            <button key={value} onClick={() => setActiveCategory(value)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 font-arabic ${
                activeCategory === value ? "bg-pharma-600 text-white shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-pharma-50 hover:text-pharma-700 dark:hover:bg-pharma-900/20"}`}>
              {label} ({count})
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
