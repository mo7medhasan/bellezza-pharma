import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { Sidebar } from "@/components/layout/Sidebar";
import { ProductDetailClient } from "./ProductDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.nameEn} — ${product.categoryLabel}`,
    description: product.shortDescription,
    keywords: [
      product.nameEn,
      product.nameAr,
      product.categoryLabel,
      ...product.tags,
      ...product.ingredients.map((i) => i.nameEn),
      "bellezza pharma",
    ],
    openGraph: {
      title: `${product.nameEn} | Bellezza Pharma`,
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
    name: product.nameEn,
    alternateName: product.nameAr,
    description: product.shortDescription,
    brand: {
      "@type": "Brand",
      name: "Bellezza Pharma",
    },
    category: product.categoryLabel,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EGP",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <Sidebar />
          <div className="flex-1 min-w-0">
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6"
            >
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link
                href="/products"
                className="hover:text-foreground transition-colors"
              >
                Products
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground font-medium truncate">
                {product.nameEn}
              </span>
            </nav>

            <ProductDetailClient product={product} relatedProducts={relatedProducts} />
          </div>
        </div>
      </div>
    </>
  );
}
