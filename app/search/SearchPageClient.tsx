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
  { value: "all" as const, label: "All" },
  { value: "serum" as const, label: "Serums" },
  { value: "shampoo" as const, label: "Shampoo" },
  { value: "conditioner" as const, label: "Conditioner" },
  { value: "cream" as const, label: "Creams" },
  { value: "sunscreen" as const, label: "Sunscreen" },
  { value: "supplement" as const, label: "Supplements" },
  { value: "syrup" as const, label: "Syrup" },
  { value: "facial-wash" as const, label: "Facial Wash" },
  { value: "oral-care" as const, label: "Oral Care" },
  { value: "feminine-care" as const, label: "Intimate Care" },
  { value: "baby-care" as const, label: "Baby Care" },
  { value: "deodorant" as const, label: "Deodorant" },
];

interface SearchPageClientProps {
  initialQuery: string;
}

export function SearchPageClient({ initialQuery }: SearchPageClientProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<"all" | ProductCategory>("all");

  // Update URL when query changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        router.replace(`/search?q=${encodeURIComponent(query)}`, { scroll: false });
      } else {
        router.replace("/search", { scroll: false });
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [query, router]);

  const results = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    // Filter by query
    if (query.trim().length > 1) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.nameEn.toLowerCase().includes(q) ||
          p.nameAr.includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.categoryLabelAr.includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.tagsAr.some((t) => t.includes(q)) ||
          p.ingredients.some(
            (i) =>
              i.nameEn.toLowerCase().includes(q) ||
              i.nameAr.includes(q)
          ) ||
          p.benefits.some((b) => b.toLowerCase().includes(q)) ||
          p.benefitsAr.some((b) => b.includes(q)) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.shortDescriptionAr.includes(q)
      );
    }

    return filtered;
  }, [query, activeCategory]);

  const clearAll = () => {
    setQuery("");
    setActiveCategory("all");
  };

  const hasFilters = query.length > 0 || activeCategory !== "all";

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Search Products</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Search by name, ingredient, benefit, or category
        </p>
      </div>

      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products, ingredients, benefits…"
          className="pl-11 pr-10 h-12 text-base rounded-2xl border-2 focus-visible:border-pharma-400"
          autoFocus
          aria-label="Search products"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 items-center">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span className="font-medium">Filter:</span>
        </div>
        {CATEGORIES.map(({ value, label }) => {
          const count =
            value === "all"
              ? products.length
              : products.filter((p) => p.category === value).length;
          if (count === 0) return null;
          return (
            <button
              key={value}
              onClick={() => setActiveCategory(value)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === value
                  ? "bg-pharma-600 text-white"
                  : "bg-muted text-muted-foreground hover:bg-pharma-50 hover:text-pharma-700 dark:hover:bg-pharma-900/20"
              }`}
            >
              {value !== "all" && (
                <span>{categoryIcons[value as ProductCategory]}</span>
              )}
              {label}
              <span
                className={`${
                  activeCategory === value ? "text-pharma-200" : "text-muted-foreground/60"
                }`}
              >
                ({count})
              </span>
            </button>
          );
        })}

        {hasFilters && (
          <button
            onClick={clearAll}
            className="ml-auto text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <X className="w-3 h-3" />
            Clear all
          </button>
        )}
      </div>

      {/* Results header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {query || activeCategory !== "all" ? (
            <>
              <span className="font-semibold text-foreground">{results.length}</span>{" "}
              result{results.length !== 1 ? "s" : ""}
              {query && (
                <>
                  {" "}for{" "}
                  <span className="font-semibold text-pharma-600">
                    &ldquo;{query}&rdquo;
                  </span>
                </>
              )}
            </>
          ) : (
            <>
              Showing all{" "}
              <span className="font-semibold text-foreground">{results.length}</span>{" "}
              products
            </>
          )}
        </p>
      </div>

      {/* Results grid */}
      <AnimatePresence mode="wait">
        {results.length > 0 ? (
          <motion.div
            key={`${query}-${activeCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {results.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-20 flex flex-col items-center gap-4 text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center">
              <Package className="w-10 h-10 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                No products found
              </h3>
              {query && (
                <p className="text-sm text-muted-foreground">
                  No results for &ldquo;{query}&rdquo;. Try a different search term.
                </p>
              )}
            </div>
            <Button variant="outline" onClick={clearAll}>
              Clear filters
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
