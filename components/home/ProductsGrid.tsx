"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import type { ProductCategory } from "@/types/product";
import { categoryIcons } from "@/lib/utils";

const categories: { value: "all" | ProductCategory; label: string }[] = [
  { value: "all", label: "All Products" },
  { value: "serum", label: `${categoryIcons.serum} Serums` },
  { value: "shampoo", label: `${categoryIcons.shampoo} Shampoo` },
  { value: "conditioner", label: `${categoryIcons.conditioner} Conditioner` },
  { value: "cream", label: `${categoryIcons.cream} Creams` },
  { value: "sunscreen", label: `${categoryIcons.sunscreen} Sunscreen` },
  { value: "supplement", label: `${categoryIcons.supplement} Supplements` },
  { value: "syrup", label: `${categoryIcons.syrup} Syrup` },
  { value: "facial-wash", label: `${categoryIcons["facial-wash"]} Facial Wash` },
  { value: "oral-care", label: `${categoryIcons["oral-care"]} Oral Care` },
  { value: "feminine-care", label: `${categoryIcons["feminine-care"]} Intimate Care` },
  { value: "baby-care", label: `${categoryIcons["baby-care"]} Baby Care` },
  { value: "deodorant", label: `${categoryIcons.deodorant} Deodorant` },
];

export function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState<"all" | ProductCategory>("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="space-y-8">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Our Products
          </h2>
          <p className="text-muted-foreground mt-1 font-arabic" dir="rtl">
            منتجاتنا
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          {filtered.length} of {products.length} products
        </p>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 flex-wrap">
        {categories.map(({ value, label }) => {
          // Only show categories that have products
          const count =
            value === "all"
              ? products.length
              : products.filter((p) => p.category === value).length;
          if (count === 0) return null;

          return (
            <button
              key={value}
              onClick={() => setActiveCategory(value)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === value
                  ? "bg-pharma-600 text-white shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-pharma-50 hover:text-pharma-700 dark:hover:bg-pharma-900/20"
              }`}
            >
              {label}
              <span
                className={`ml-1.5 ${
                  activeCategory === value
                    ? "text-pharma-200"
                    : "text-muted-foreground/60"
                }`}
              >
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Products grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
