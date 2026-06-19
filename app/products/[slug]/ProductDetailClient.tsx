"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Package,
  Thermometer,
  BookOpen,
  AlertTriangle,
  HelpCircle,
  FlaskConical,
  Sparkles,
  ChevronRight,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { AudioButton } from "@/components/product/AudioButton";
import { ImagePlaceholder } from "@/components/product/ImagePlaceholder";
import { IngredientCard } from "@/components/product/IngredientCard";
// import { DiscountCard } from "@/components/product/DiscountCard";
import { FAQSection } from "@/components/product/FAQSection";
import { WarningsSection } from "@/components/product/WarningsSection";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { categoryColors, categoryIcons } from "@/lib/utils";
import type { Product } from "@/types/product";
import Image from "next/image";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  return (
    <div className="space-y-10">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
      >
        {/* Image */}
        <div className="relative">
          {product.image? (
            <Image
              src={product.image}
              alt={product.nameEn}
              width={500}
              height={500}
              quality={90}
              priority
              className="rounded-2xl object-cover w-full max-w-md mx-auto"
            />
          ): (
            <ImagePlaceholder
              productName={product.nameEn}
              className="w-full max-w-md mx-auto"
            />
          )}
         
        </div>

        {/* Product info */}
        <div className="space-y-6">
          {/* Category */}
          <span
            className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full ${
              categoryColors[product.category] || ""
            }`}
          >
            {categoryIcons[product.category]} {product.categoryLabel}
          </span>

          {/* Name + Audio */}
          <div>
            <div className="flex items-start gap-3">
              <h1 className="text-3xl md:text-4xl font-black text-foreground leading-tight flex-1">
                {product.nameEn}
              </h1>
              <AudioButton
                text={product.nameEn}
                lang="en-US"
                label="English"
                className="shrink-0 mt-1"
              />
            </div>
            <div className="flex items-center gap-3 mt-2">
              <h2
                className="text-xl md:text-2xl font-bold text-muted-foreground font-arabic flex-1"
                dir="rtl"
              >
                {product.nameAr}
              </h2>
              <AudioButton
                text={product.nameAr}
                lang="ar-SA"
                label="عربي"
                className="shrink-0"
              />
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-foreground">
           Price:   {product.price}
            </span>
          </div>

          {/* Volume/Weight */}
          {(product.volume || product.weight) && (
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Size: {product.volume || product.weight}
              </span>
            </div>
          )}

          {/* Short description */}
          <div className="space-y-2">
            <p className="text-base text-muted-foreground leading-relaxed">
              {product.shortDescription}
            </p>
            <p
              className="text-base text-muted-foreground leading-relaxed font-arabic"
              dir="rtl"
            >
              {product.shortDescriptionAr}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs capitalize">
                {tag.replace(/-/g, " ")}
              </Badge>
            ))}
          </div>

          {/* Quick benefits */}
          <div className="bg-pharma-50 dark:bg-pharma-900/20 rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pharma-600" />
              Key Benefits
            </h3>
            <ul className="space-y-2">
              {product.benefits.slice(0, 4).map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pharma-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{b}</span>
                </li>
              ))}
              {product.benefits.length > 4 && (
                <li className="text-xs text-pharma-600 pl-6">
                  +{product.benefits.length - 4} more benefits below ↓
                </li>
              )}
            </ul>
          </div>

          {/* Discount card */}
          {/* <DiscountCard discount={product.discount} /> */}
        </div>
      </motion.div>

      <Separator />

      {/* MAIN TABS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Tabs defaultValue="overview" className="space-y-6">
          <div className="overflow-x-auto pb-1">
            <TabsList className="inline-flex h-auto p-1 gap-1 bg-muted rounded-xl">
              {[
                { value: "overview", label: "Overview", icon: BookOpen },
                { value: "ingredients", label: "Ingredients", icon: FlaskConical },
                { value: "usage", label: "Usage Guide", icon: ChevronRight },
                { value: "warnings", label: "Warnings", icon: AlertTriangle },
                { value: "faq", label: "FAQ", icon: HelpCircle },
                { value: "storage", label: "Storage", icon: Thermometer },
              ].map(({ value, label, icon: Icon }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm whitespace-nowrap"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* OVERVIEW TAB */}
          <TabsContent value="overview" className="space-y-8 mt-0">
            {/* Long description */}
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h3 className="text-lg font-bold text-foreground mb-3">About This Product</h3>
              <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>
              <div className="mt-4 p-4 bg-muted/50 rounded-xl border-r-4 border-pharma-400" dir="rtl">
                <p className="text-muted-foreground leading-relaxed font-arabic text-sm">
                  {product.longDescriptionAr}
                </p>
              </div>
            </div>

            {/* All benefits */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-pharma-500" />
                Full Benefits List
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border hover:border-pharma-200 dark:hover:border-pharma-800 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-pharma-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-foreground font-medium">{benefit}</p>
                      {product.benefitsAr[i] && (
                        <p
                          className="text-xs text-muted-foreground font-arabic mt-0.5"
                          dir="rtl"
                        >
                          {product.benefitsAr[i]}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Uses */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Medical Uses</h3>
              <div className="space-y-2">
                {product.uses.map((use, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm text-foreground">{use}</p>
                      {product.usesAr[i] && (
                        <p
                          className="text-xs text-muted-foreground font-arabic mt-0.5"
                          dir="rtl"
                        >
                          {product.usesAr[i]}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical content note */}
            {product.medicalContent && (
              <div className="p-4 bg-muted/50 rounded-xl border border-border">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Medical / Technical Information
                </p>
                <p className="text-sm text-muted-foreground">{product.medicalContent}</p>
              </div>
            )}
          </TabsContent>

          {/* INGREDIENTS TAB */}
          <TabsContent value="ingredients" className="space-y-6 mt-0">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Active Ingredients</h3>
              <p className="text-sm text-muted-foreground mb-5">
                Click any ingredient to learn more about its mechanism and benefits.
              </p>
              <div className="space-y-3">
                {product.ingredients.map((ingredient, i) => (
                  <IngredientCard
                    key={ingredient.id}
                    ingredient={ingredient}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* USAGE TAB */}
          <TabsContent value="usage" className="space-y-6 mt-0">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">
                Directions for Use
              </h3>
              <div className="space-y-3">
                {product.directions.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-pharma-200 dark:hover:border-pharma-800 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-pharma-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm text-foreground leading-relaxed">{step}</p>
                      {product.directionsAr[i] && (
                        <p
                          className="text-xs text-muted-foreground font-arabic mt-1.5"
                          dir="rtl"
                        >
                          {product.directionsAr[i]}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* WARNINGS TAB */}
          <TabsContent value="warnings" className="space-y-6 mt-0">
            <WarningsSection
              warnings={product.warnings}
              warningsAr={product.warningsAr}
              sideEffects={product.sideEffects}
              sideEffectsAr={product.sideEffectsAr}
            />
          </TabsContent>

          {/* FAQ TAB */}
          <TabsContent value="faq" className="space-y-6 mt-0">
            <FAQSection faqs={product.faqs} />
          </TabsContent>

          {/* STORAGE TAB */}
          <TabsContent value="storage" className="space-y-6 mt-0">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-blue-500" />
                Storage Conditions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.storage.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30"
                  >
                    <Thermometer className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-foreground">{s}</p>
                      {product.storageAr[i] && (
                        <p
                          className="text-xs text-muted-foreground font-arabic mt-1"
                          dir="rtl"
                        >
                          {product.storageAr[i]}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Medical disclaimer */}
              <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-900/30">
                <p className="text-xs text-amber-700 dark:text-amber-400 font-medium">
                  ⚕️ Medical Disclaimer: The information provided on this page is for
                  educational purposes only and is not a substitute for professional
                  medical advice, diagnosis, or treatment. Always consult your healthcare
                  provider before starting any new medication or supplement.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>

      <Separator />

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <RelatedProducts products={relatedProducts} />
        </motion.div>
      )}
    </div>
  );
}
