"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/product/ImagePlaceholder";
import { AudioButton } from "@/components/product/AudioButton";
import { categoryColors, categoryIcons } from "@/lib/utils";
import type { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <div className="relative h-full flex flex-col rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="gold" className="text-xs font-semibold shadow-sm">
              <Star className="w-3 h-3 mr-1 fill-current" />
              Featured
            </Badge>
          </div>
        )}

        {/* Discount badge */}
        {/* <div className="absolute top-3 right-3 z-10">
          <div className="w-10 h-10 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
            -{product.discount.percentage}%
          </div>
        </div> */}

        {/* Image */}
        <div className="relative p-4 pb-0">
          <Link href={`/products/${product.slug}`} tabIndex={-1} aria-hidden>
            {product.image ? (
              <Image
                width={500}
                height={500}
                quality={90}
                priority
                src={product.image}
                alt={product.nameEn}
                className="group-hover:scale-[1.02] transition-transform duration-300 rounded-2xl object-cover w-full max-w-md h-auto"
              />
            ) : (
              <ImagePlaceholder
                productName={product.nameEn}
                className="group-hover:scale-[1.02] transition-transform duration-300 rounded-2xl object-cover w-full max-w-md mx-auto"
              />
            )}
          </Link>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* Category */}
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full w-fit ${
              categoryColors[product.category] || categoryColors.serum
            }`}
          >
            {categoryIcons[product.category]} {product.categoryLabel}
          </span>

          {/* Names + Audio */}
          <div>
            <div className="flex items-start justify-between gap-2">
              <Link
                href={`/products/${product.slug}`}
                className="flex-1 group/link"
              >
                <h3 className="font-bold text-base text-foreground group-hover/link:text-pharma-600 transition-colors line-clamp-1">
                  {product.nameEn}
                </h3>
              </Link>
              <AudioButton
                text={product.nameEn}
                lang="en-US"
                variant="icon"
                className="flex-shrink-0 mt-0.5"
              />
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <p
                className="text-sm text-muted-foreground font-arabic"
                dir="rtl"
              >
                {product.nameAr}
              </p>
              <AudioButton text={product.nameAr} lang="ar-SA" variant="icon" />
            </div>
          </div>
{/* price */}
          <p className="text-lg font-semibold text-foreground">
          price:  {product.price}
          </p>
          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
            {product.shortDescription}
          </p>

          {/* Volume/Weight */}
          {(product.volume || product.weight) && (
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                {product.volume || product.weight}
              </span>
            </div>
          )}

          {/* Benefits preview */}
          <div className="flex flex-wrap gap-1">
            {product.benefits.slice(0, 2).map((b, i) => (
              <span
                key={i}
                className="text-xs text-pharma-700 dark:text-pharma-300 bg-pharma-50 dark:bg-pharma-900/30 px-2 py-0.5 rounded-full"
              >
                {b.length > 28 ? b.slice(0, 26) + "…" : b}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Button
            variant="pharma"
            size="sm"
            className="w-full mt-1 group/btn"
            asChild
          >
            <Link href={`/products/${product.slug}`}>
              View Details
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
