import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { Sidebar } from "@/components/layout/Sidebar";
import { ProductDetailClient } from "./ProductDetailClient";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "المنتج غير موجود" };
  return {
    title: `${product.nameAr} — ${product.categoryLabel}`,
    description: product.shortDescription,
    keywords: [product.nameAr, product.nameEn, product.categoryLabel, ...product.tags, ...product.ingredients.map((i) => i.nameAr), "بيلزا فارما"],
    openGraph: {
      title: `${product.nameAr} | بيلزا فارما`,
      description: product.shortDescription,
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product.relatedProducts);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.nameAr,
    alternateName: product.nameEn,
    description: product.shortDescription,
    brand: { "@type": "Brand", name: "Bellezza Pharma — بيلزا فارما" },
    category: product.categoryLabel,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EGP",
      price: product.price.replace(" جنيه", ""),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <Sidebar />
          <div className="flex-1 min-w-0">
            {/* Breadcrumbs */}
            <nav aria-label="مسار التنقل"
              className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6 justify-end font-arabic">
              <span className="text-foreground font-medium truncate">{product.nameAr}</span>
              <ChevronLeft className="w-3.5 h-3.5" />
              <Link href="/products" className="hover:text-foreground transition-colors">المنتجات</Link>
              <ChevronLeft className="w-3.5 h-3.5" />
              <Link href="/" className="hover:text-foreground transition-colors">الرئيسية</Link>
            </nav>
            <ProductDetailClient product={product} relatedProducts={relatedProducts} />
          </div>
        </div>
      </div>
    </>
  );
}
