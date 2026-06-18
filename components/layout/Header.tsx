"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Moon, Sun, Menu, X, FlaskConical, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSearch } from "@/hooks/useSearch";
import { products } from "@/data/products";
import { categoryIcons } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { query, results, setQuery, clearSearch } = useSearch();
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Close search on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setSearchOpen(false);
      clearSearch();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        {/* Mobile menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72">
            <SheetHeader className="p-4 bg-gradient-to-r from-pharma-600 to-pharma-700">
              {/* <SheetTitle className="text-white flex items-center gap-2">

              </SheetTitle> */}
              <Image src="/logo.jpg" alt="Bellezza Pharma Logo" width={32} height={32} className="rounded-full" />
              <span className="ml-2 text-white font-bold text-lg">Bellezza Pharma</span>
            </SheetHeader>
            <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-80px)]">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-muted transition-colors"
              >
                🏠 Home
              </Link>
              <div className="pt-2 pb-1">
                <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  All Products
                </p>
              </div>
              {products.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm hover:bg-muted transition-colors"
                >
                  <span>{categoryIcons[p.category]}</span>
                  <div className="min-w-0">
                    <p className="font-medium truncate text-xs">{p.nameEn}</p>
                    <p className="text-xs text-muted-foreground truncate font-arabic" dir="rtl">
                      {p.nameAr}
                    </p>
                  </div>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
        <Image src="/logo.jpg" alt="Bellezza Pharma Logo" width={200} height={120} className="rounded-full object-cover overflow-hidden h-24 " />
              {/* <span className="ml-2 text-white font-bold text-lg">Bellezza Pharma</span> */}
        </Link>

        {/* Center nav */}
        <nav className="hidden lg:flex items-center gap-1 ml-4">
          <Link
            href="/"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            Products
          </Link>
        </nav>

        {/* Search */}
        <div className="flex-1 max-w-lg relative" ref={searchRef}>
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSearchOpen(e.target.value.length > 0);
                }}
                onFocus={() => query.length > 0 && setSearchOpen(true)}
                placeholder="Search products, ingredients…"
                className="pl-9 pr-4 h-9 text-sm"
                aria-label="Search products"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => { clearSearch(); setSearchOpen(false); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </form>

          {/* Search dropdown */}
          <AnimatePresence>
            {searchOpen && results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 4, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 right-0 mt-1.5 rounded-xl border border-border bg-popover shadow-lg overflow-hidden z-50"
              >
                <div className="p-1">
                  {results.slice(0, 6).map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      onClick={() => { setSearchOpen(false); clearSearch(); }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <span className="text-lg">{categoryIcons[product.category]}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {product.nameEn}
                        </p>
                        <p className="text-xs text-muted-foreground truncate font-arabic" dir="rtl">
                          {product.nameAr}
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                  {results.length > 6 && (
                    <Link
                      href={`/search?q=${encodeURIComponent(query)}`}
                      onClick={() => { setSearchOpen(false); }}
                      className="flex items-center justify-center gap-1 py-2.5 text-xs text-pharma-600 font-medium hover:bg-muted rounded-lg transition-colors"
                    >
                      View all {results.length} results
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </motion.div>
            )}
            {searchOpen && query.length > 1 && results.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-full left-0 right-0 mt-1.5 rounded-xl border border-border bg-popover shadow-lg p-4 text-center z-50"
              >
                <p className="text-sm text-muted-foreground">
                  No products found for &ldquo;{query}&rdquo;
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
