"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, SlidersHorizontal, Package } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import type { ProductCategory } from "@/types/product";
import { categoryIcons } from "@/lib/utils";

const CATEGORIES = [
  { value: "all" as const, label: "الكل" },
  { value: "serum" as const, label: "سيروم" },
  { value: "shampoo" as const, label: "شامبو" },
  { value: "conditioner" as const, label: "بلسم" },
  { value: "cream" as const, label: "كريمات" },
  { value: "sunscreen" as const, label: "واقي شمس" },
  { value: "supplement" as const, label: "مكملات" },
  { value: "syrup" as const, label: "شراب" },
  { value: "facial-wash" as const, label: "غسول وجه" },
  { value: "oral-care" as const, label: "عناية فم" },
  { value: "feminine-care" as const, label: "عناية حميمة" },
  { value: "baby-care" as const, label: "عناية أطفال" },
  { value: "deodorant" as const, label: "مزيل عرق" },
];

export function SearchPageClient({ initialQuery }: { initialQuery: string }) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<"all" | ProductCategory>("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) router.replace(`/search?q=${encodeURIComponent(query)}`, { scroll: false });
      else router.replace("/search", { scroll: false });
    }, 300);
    return () => clearTimeout(timer);
  }, [query, router]);

  const results = useMemo(() => {
    let filtered = products;
    if (activeCategory !== "all") filtered = filtered.filter((p) => p.category === activeCategory);
    if (query.trim().length > 1) {
      const q = query.toLowerCase();
      filtered = filtered.filter((p) =>
        p.nameEn.toLowerCase().includes(q) || p.nameAr.includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.ingredients.some((i) => i.nameEn.toLowerCase().includes(q) || i.nameAr.includes(q)) 
      );
    }
    return filtered;
  }, [query, activeCategory]);

  const clearAll = () => { setQuery(""); setActiveCategory("all"); };
  const hasFilters = query.length > 0 || activeCategory !== "all";

  return (
    <div className="space-y-6 text-right">
      <div>
        <h1 className="text-2xl font-bold text-foreground font-arabic">بحث عن المنتجات</h1>
        <p className="text-muted-foreground text-sm mt-1 font-arabic">ابحث بالاسم أو المكوّن أو الفائدة أو الفئة</p>
      </div>

      <div className="relative">
        <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input value={query} onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث عن منتجات، مكونات، فوائد..."
          className="pr-11 pl-10 h-12 text-base rounded-2xl border-2 focus-visible:border-pharma-400 font-arabic text-right"
          dir="rtl" autoFocus aria-label="بحث عن المنتجات" />
        {query && (
          <button onClick={() => setQuery("")}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-end">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <span className="font-medium font-arabic">تصفية:</span>
          <SlidersHorizontal className="w-3.5 h-3.5" />
        </div>
        {CATEGORIES.map(({ value, label }) => {
          const count = value === "all" ? products.length : products.filter((p) => p.category === value).length;
          if (count === 0) return null;
          return (
            <button key={value} onClick={() => setActiveCategory(value)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all font-arabic ${
                activeCategory === value ? "bg-pharma-600 text-white" : "bg-muted text-muted-foreground hover:bg-pharma-50 hover:text-pharma-700 dark:hover:bg-pharma-900/20"}`}>
              {value !== "all" && <span>{categoryIcons[value as ProductCategory]}</span>}
              {label} ({count})
            </button>
          );
        })}
        {hasFilters && (
          <button onClick={clearAll}
            className="mr-auto text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors font-arabic">
            مسح الكل <X className="w-3 h-3" />
          </button>
        )}
      </div>

      <div className="text-right">
        <p className="text-sm text-muted-foreground font-arabic">
          {query || activeCategory !== "all" ? (
            <><span className="font-semibold text-foreground">{results.length}</span> نتيجة
              {query && <> لـ <span className="font-semibold text-pharma-600">&ldquo;{query}&rdquo;</span></>}</>
          ) : (
            <>عرض جميع <span className="font-semibold text-foreground">{results.length}</span> منتج</>
          )}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {results.length > 0 ? (
          <motion.div key={`${query}-${activeCategory}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {results.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="py-20 flex flex-col items-center gap-4 text-center">
            <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center">
              <Package className="w-10 h-10 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1 font-arabic">لا توجد منتجات</h3>
              {query && <p className="text-sm text-muted-foreground font-arabic">لا نتائج لـ &ldquo;{query}&rdquo; — جرّب كلمة أخرى</p>}
            </div>
            <Button variant="outline" onClick={clearAll} className="font-arabic">مسح الفلاتر</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
