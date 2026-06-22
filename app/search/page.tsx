import type { Metadata } from "next";
import { SearchPageClient } from "./SearchPageClient";
import { Sidebar } from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "بحث المنتجات | بيلزا فارما",
  description: "ابحث عن منتجات بيلزا فارما بالاسم أو المكوّن أو الفائدة أو الفئة.",
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <SearchPageClient initialQuery={params.q || ""} />
        </div>
      </div>
    </div>
  );
}
