"use client";

import { useState, useCallback, useMemo } from "react";
import { products } from "@/data/products";
import type { Product } from "@/types/product";

interface UseSearchReturn {
  query: string;
  results: Product[];
  isSearching: boolean;
  setQuery: (q: string) => void;
  clearSearch: () => void;
}

export function useSearch(): UseSearchReturn {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];
    const q = query.toLowerCase();
    return products.filter(
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
  }, [query]);

  const clearSearch = useCallback(() => setQuery(""), []);

  return {
    query,
    results,
    isSearching: query.length > 0,
    setQuery,
    clearSearch,
  };
}
