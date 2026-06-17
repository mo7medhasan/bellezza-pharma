"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FlaskConical } from "lucide-react";
import { AudioButton } from "@/components/product/AudioButton";
import { cn } from "@/lib/utils";
import type { Ingredient } from "@/types/product";

interface IngredientCardProps {
  ingredient: Ingredient;
  index?: number;
}

export function IngredientCard({ ingredient, index = 0 }: IngredientCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="rounded-xl border border-border bg-card overflow-hidden hover:border-pharma-200 dark:hover:border-pharma-800 transition-colors"
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-start gap-4 p-4 text-left hover:bg-muted/50 transition-colors"
        aria-expanded={isExpanded}
      >
        <div className="w-10 h-10 rounded-xl bg-pharma-100 dark:bg-pharma-900/40 flex items-center justify-center shrink-0 mt-0.5">
          <FlaskConical className="w-5 h-5 text-pharma-600 dark:text-pharma-400" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-foreground text-sm">
              {ingredient.nameEn}
            </span>
            <AudioButton
              text={ingredient.nameEn}
              lang="en-US"
              variant="icon"
            />
            {ingredient.concentration && (
              <span className="text-xs bg-pharma-100 dark:bg-pharma-900/40 text-pharma-700 dark:text-pharma-300 px-2 py-0.5 rounded-full font-mono">
                {ingredient.concentration}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <p className="text-sm text-muted-foreground font-arabic" dir="rtl">
              {ingredient.nameAr}
            </p>
            <AudioButton
              text={ingredient.nameAr}
              lang="ar-SA"
              variant="icon"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
            {ingredient.description}
          </p>
        </div>

        <ChevronDown
          className={cn(
            "w-4 h-4 text-muted-foreground transition-transform duration-200 shrink-0 mt-1",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-4 border-t border-border pt-4">
              {/* Benefits */}
              {ingredient.benefits.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Benefits
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {ingredient.benefits.map((benefit, i) => (
                      <span
                        key={i}
                        className="text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full"
                      >
                        ✓ {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Mechanism */}
              {ingredient.mechanism && (
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Mechanism of Action
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ingredient.mechanism}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
