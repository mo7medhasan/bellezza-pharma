"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, categoryIcons } from "@/lib/utils";
import { products } from "@/data/products";
import { ScrollArea } from "@/components/ui/separator";
import { Home, Package2 } from "lucide-react";

const groupedProducts = [
  { group: "سيروم", items: products.filter((p) => p.category === "serum") },
  { group: "عناية بالشعر", items: products.filter((p) => p.category === "shampoo" || p.category === "conditioner") },
  { group: "عناية بالبشرة", items: products.filter((p) => ["cream","facial-wash","sunscreen","deodorant"].includes(p.category)) },
  { group: "مكملات وأدوية", items: products.filter((p) => p.category === "supplement" || p.category === "syrup") },
  { group: "عناية حميمة وفموية", items: products.filter((p) => ["oral-care","feminine-care"].includes(p.category)) },
  { group: "عناية بالأطفال", items: products.filter((p) => p.category === "baby-care") },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-64 xl:w-72 shrink-0">
      <div className="sticky top-20 rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
        <div className="bg-gradient-to-l from-pharma-600 to-pharma-800 p-4">
          <div className="flex items-center gap-2">
            <Package2 className="w-5 h-5 text-white" />
            <h2 className="text-sm font-bold text-white font-arabic">المنتجات</h2>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-12rem)]">
          <nav className="p-2" aria-label="التنقل بين المنتجات">
            <Link href="/"
              className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 mb-2 font-arabic",
                pathname === "/" ? "bg-pharma-100 dark:bg-pharma-900/40 text-pharma-700 dark:text-pharma-300" : "text-muted-foreground hover:bg-muted hover:text-foreground")}>
              <Home className="w-4 h-4" />
              الرئيسية
            </Link>

            {groupedProducts.map((group) => (
              <div key={group.group} className="mb-3">
                <p className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider font-arabic">
                  {group.group}
                </p>
                <div className="space-y-0.5">
                  {group.items.map((product) => {
                    const isActive = pathname === `/products/${product.slug}`;
                    return (
                      <Link key={product.id} href={`/products/${product.slug}`}
                        className={cn("flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-all duration-150",
                          isActive ? "bg-pharma-100 dark:bg-pharma-900/40 text-pharma-700 dark:text-pharma-300 font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground")}>
                        <span className="text-base leading-none">{categoryIcons[product.category]}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium truncate font-arabic">{product.nameAr}</p>
                          <p className="text-xs text-muted-foreground font-arabic">{product.price}</p>
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
