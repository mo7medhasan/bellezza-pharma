"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Package, Thermometer, BookOpen, AlertTriangle, HelpCircle, FlaskConical, Sparkles, Tag } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AudioButton } from "@/components/product/AudioButton";
import { ImagePlaceholder } from "@/components/product/ImagePlaceholder";
import { IngredientCard } from "@/components/product/IngredientCard";
import { FAQSection } from "@/components/product/FAQSection";
import { WarningsSection } from "@/components/product/WarningsSection";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { categoryColors, categoryIcons } from "@/lib/utils";
import type { Product } from "@/types/product";
import Image from "next/image";

interface Props { product: Product; relatedProducts: Product[]; }

export function ProductDetailClient({ product, relatedProducts }: Props) {
  return (
    <div className="space-y-10 text-right">

      {/* HERO */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

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

        {/* Info */}
        <div className="space-y-5 order-1 lg:order-2">
          {/* Category */}
          <span className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full font-arabic ${categoryColors[product.category] || ""}`}>
            {categoryIcons[product.category]} {product.categoryLabelAr}
          </span>

          {/* Arabic name + audio */}
          <div>
            <div className="flex items-start gap-3 justify-end">
              <AudioButton text={product.nameAr} lang="ar-SA" label="🔊 عربي" />
              <h1 className="text-3xl md:text-4xl font-black text-foreground leading-tight font-arabic text-right flex-1">
                {product.nameAr}
              </h1>
            </div>
            {/* English name + audio */}
            <div className="flex items-center gap-3 mt-2 justify-end">
              <AudioButton text={product.nameEn} lang="en-US" label="🔊 English" />
              <h2 className="text-lg text-muted-foreground flex-1 text-right" dir="ltr">{product.nameEn}</h2>
            </div>
          </div>

          {/* Volume + Price */}
          <div className="flex items-center gap-4 justify-end">
            {(product.volume || product.weight) && (
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Package className="w-4 h-4" />
                <span className="font-arabic">{product.volume || product.weight}</span>
              </div>
            )}
            <div className="flex items-center gap-2 bg-pharma-50 dark:bg-pharma-900/20 border border-pharma-200 dark:border-pharma-800 rounded-xl px-4 py-2">
              <Tag className="w-4 h-4 text-pharma-600" />
              <span className="font-arabic text-xs text-muted-foreground">سعر المستهلك</span>
              <span className="text-xl font-black text-pharma-600">{product.price}</span>
            </div>
          </div>

          {/* Arabic description */}
          <div>
            <p className="text-base text-muted-foreground leading-relaxed font-arabic">{product.shortDescriptionAr}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-end">
            {product.tagsAr.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs font-arabic">{tag}</Badge>
            ))}
          </div>

          {/* Quick benefits */}
          <div className="bg-pharma-50 dark:bg-pharma-900/20 rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2 justify-end font-arabic">
              الفوائد الرئيسية
              <Sparkles className="w-4 h-4 text-pharma-600" />
            </h3>
            <ul className="space-y-2">
              {product.benefitsAr.slice(0, 4).map((b, i) => (
                <li key={i} className="flex items-start gap-2 justify-end">
                  <span className="text-sm text-foreground font-arabic">{b}</span>
                  <CheckCircle2 className="w-4 h-4 text-pharma-500 mt-0.5 shrink-0" />
                </li>
              ))}
              {product.benefitsAr.length > 4 && (
                <li className="text-xs text-pharma-600 pr-6 font-arabic">+{product.benefitsAr.length - 4} فائدة أخرى ↓</li>
              )}
            </ul>
          </div>
        </div>
      </motion.div>

      <Separator />

      {/* TABS */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <Tabs defaultValue="overview" className="space-y-6">
          <div className="overflow-x-auto pb-1">
            <TabsList className="inline-flex h-auto p-1 gap-1 bg-muted rounded-xl">
              {[
                { value: "overview",     label: "نظرة عامة",      icon: BookOpen },
                { value: "ingredients",  label: "المكونات",        icon: FlaskConical },
                { value: "usage",        label: "طريقة الاستخدام", icon: Thermometer },
                { value: "warnings",     label: "تحذيرات",         icon: AlertTriangle },
                { value: "faq",          label: "الأسئلة الشائعة", icon: HelpCircle },
              ].map(({ value, label, icon: Icon }) => (
                <TabsTrigger key={value} value={value}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm whitespace-nowrap font-arabic">
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* OVERVIEW */}
          <TabsContent value="overview" className="space-y-8 mt-0">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-arabic">عن هذا المنتج</h3>
              <p className="text-muted-foreground leading-relaxed font-arabic">{product.longDescriptionAr}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2 justify-end font-arabic">
                قائمة الفوائد الكاملة
                <CheckCircle2 className="w-5 h-5 text-pharma-500" />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.benefitsAr.map((benefit, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border hover:border-pharma-200 dark:hover:border-pharma-800 transition-colors justify-end">
                    <p className="text-sm text-foreground font-medium font-arabic">{benefit}</p>
                    <CheckCircle2 className="w-4 h-4 text-pharma-500 mt-0.5 shrink-0" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-4 font-arabic">الاستخدامات الطبية</h3>
              <div className="space-y-2">
                {product.usesAr.map((use, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 justify-end">
                    <p className="text-sm text-foreground font-arabic">{use}</p>
                    <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {product.medicalContent && (
              <div className="p-4 bg-muted/50 rounded-xl border border-border text-right">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 font-arabic">معلومات طبية وتقنية</p>
                <p className="text-sm text-muted-foreground" dir="ltr">{product.medicalContent}</p>
              </div>
            )}
          </TabsContent>

          {/* INGREDIENTS */}
          <TabsContent value="ingredients" className="space-y-6 mt-0">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-arabic text-right">المكونات الفعالة</h3>
              <p className="text-sm text-muted-foreground mb-5 font-arabic text-right">اضغط على أي مكوّن لمعرفة المزيد عن آلية عمله وفوائده.</p>
              <div className="space-y-3">
                {product.ingredients.map((ingredient, i) => (
                  <IngredientCard key={ingredient.id} ingredient={ingredient} index={i} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* USAGE */}
          <TabsContent value="usage" className="space-y-6 mt-0">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4 font-arabic">طريقة الاستخدام</h3>
              <div className="space-y-3">
                {product.directionsAr.map((step, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-pharma-200 dark:hover:border-pharma-800 transition-colors justify-end">
                    <p className="text-sm text-foreground leading-relaxed font-arabic">{step}</p>
                    <div className="w-8 h-8 rounded-xl bg-pharma-600 text-white text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* WARNINGS */}
          <TabsContent value="warnings" className="space-y-6 mt-0">
            <WarningsSection warningsAr={product.warningsAr} sideEffectsAr={product.sideEffectsAr} storageAr={product.storageAr} />
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq" className="space-y-6 mt-0">
            <FAQSection faqs={product.faqs} />
          </TabsContent>
        </Tabs>
      </motion.div>

      <Separator />

      {relatedProducts.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <RelatedProducts products={relatedProducts} />
        </motion.div>
      )}
    </div>
  );
}
