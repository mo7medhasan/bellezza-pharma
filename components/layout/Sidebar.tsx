"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn, categoryIcons } from "@/lib/utils";
import { products } from "@/data/products";
import { ScrollArea } from "@/components/ui/separator";
import { Home, Package2 } from "lucide-react";

const groupedProducts = [
  {
    group: "Serums",
    items: products.filter((p) => p.category === "serum"),
  },
  {
    group: "Hair Care",
    items: products.filter(
      (p) => p.category === "shampoo" || p.category === "conditioner"
    ),
  },
  {
    group: "Skin Care",
    items: products.filter(
      (p) =>
        p.category === "cream" ||
        p.category === "facial-wash" ||
        p.category === "sunscreen" ||
        p.category === "deodorant"
    ),
  },
  {
    group: "Supplements",
    items: products.filter((p) => p.category === "supplement" || p.category === "syrup"),
  },
  {
    group: "Oral & Intimate Care",
    items: products.filter(
      (p) =>
        p.category === "oral-care" ||
        p.category === "feminine-care"
    ),
  },
  {
    group: "Baby Care",
    items: products.filter((p) => p.category === "baby-care"),
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-64 xl:w-72 shrink-0">
      <div className="sticky top-20 rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pharma-600 to-pharma-700 p-4">
          <div className="flex items-center gap-2">
            <Package2 className="w-5 h-5 text-white" />
            <h2 className="text-sm font-bold text-white tracking-wide uppercase">
              Products
            </h2>
          </div>
        </div>

        {/* Navigation */}
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <nav className="p-2" aria-label="Products navigation">
            {/* Home link */}
            <Link
              href="/"
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 mb-2",
                pathname === "/"
                  ? "bg-pharma-100 dark:bg-pharma-900/40 text-pharma-700 dark:text-pharma-300"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>

            {/* Product groups */}
            {groupedProducts.map((group) => (
              <div key={group.group} className="mb-3">
                <p className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {group.group}
                </p>
                <div className="space-y-0.5">
                  {group.items.map((product) => {
                    const isActive = pathname === `/products/${product.slug}`;
                    return (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        className={cn(
                          "flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-all duration-150 group",
                          isActive
                            ? "bg-pharma-100 dark:bg-pharma-900/40 text-pharma-700 dark:text-pharma-300 font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="sidebar-active"
                            className="absolute left-0 w-1 h-6 bg-pharma-500 rounded-r-full"
                          />
                        )}
                        <span className="text-base leading-none">
                          {categoryIcons[product.category]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium truncate">
                            {product.nameEn}
                          </p>
                          <p
                            className="text-xs text-muted-foreground truncate font-arabic"
                            dir="rtl"
                            style={{ fontSize: "10px" }}
                          >
                            {product.nameAr}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </aside>
  );
}
