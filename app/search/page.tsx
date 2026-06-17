import type { Metadata } from "next";
import { SearchPageClient } from "./SearchPageClient";
import { Sidebar } from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Search Products",
  description: "Search Bellezza Pharma products by name, ingredient, benefit, or category.",
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q || "";

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <SearchPageClient initialQuery={query} />
        </div>
      </div>
    </div>
  );
}
