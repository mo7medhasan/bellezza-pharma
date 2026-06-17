"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, Tag, Gift, Sparkles, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDiscount } from "@/hooks/useDiscount";
import { cn } from "@/lib/utils";
import type { Discount } from "@/types/product";
import { useState } from "react";

interface DiscountCardProps {
  discount: Discount;
}

export function DiscountCard({ discount }: DiscountCardProps) {
  const { isUnlocked, password, error, isAnimating, setPassword, unlock } =
    useDiscount();
  const [showPassword, setShowPassword] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") unlock();
  };

  return (
    <div className="rounded-2xl border-2 border-dashed border-gold-300 dark:border-gold-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gold-500 to-amber-500 p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
          <Tag className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-bold text-base">Special Offer</h3>
          <p className="text-gold-100 text-xs">Enter password to reveal discount</p>
        </div>
        <div className="ml-auto">
          <AnimatePresence mode="wait">
            {isUnlocked ? (
              <motion.div
                key="unlock"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Unlock className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="lock"
                animate={isAnimating ? { rotate: [0, -15, 15, -10, 10, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <Lock className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-b from-gold-50 to-white dark:from-gold-950/20 dark:to-card">
        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4"
            >
              {/* Teaser */}
              <div className="text-center py-4 relative">
                <div className="text-5xl font-black text-gold-300 dark:text-gold-700 blur-sm select-none">
                  -{discount.percentage}%
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white dark:bg-card/80 rounded-xl px-4 py-2 shadow-sm border border-gold-200 dark:border-gold-800">
                    <p className="text-sm font-semibold text-muted-foreground">
                      🔒 Discount locked
                    </p>
                  </div>
                </div>
              </div>

              {/* Password input */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Enter dealer password:
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="••••••"
                      className={cn(
                        "pr-10 border-gold-200 dark:border-gold-800 focus-visible:ring-gold-400",
                        error && "border-red-400 focus-visible:ring-red-400"
                      )}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <Button
                    variant="gold"
                    onClick={unlock}
                    disabled={isAnimating}
                    className="shrink-0"
                  >
                    {isAnimating ? "..." : "Unlock"}
                  </Button>
                </div>

                {/* Error */}
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-red-500 flex items-center gap-1"
                    >
                      ❌ {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="space-y-4"
            >
              {/* Success indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring" }}
                className="flex items-center justify-center gap-2 py-2"
              >
                <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Special offer unlocked!
                </div>
              </motion.div>

              {/* Discount percentage */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
                className="text-center py-3"
              >
                <div className="text-6xl font-black bg-gradient-to-r from-gold-500 to-amber-600 bg-clip-text text-transparent">
                  -{discount.percentage}%
                </div>
                <p className="text-sm text-muted-foreground mt-1">discount applied</p>
              </motion.div>

              {/* Price */}
              {discount.originalPrice && discount.discountedPrice && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-center gap-4 py-2 bg-white dark:bg-card rounded-xl border border-gold-100 dark:border-gold-900"
                >
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Original</p>
                    <p className="text-lg font-bold line-through text-muted-foreground">
                      {discount.originalPrice}
                    </p>
                  </div>
                  <div className="text-2xl text-gold-400">→</div>
                  <div className="text-center">
                    <p className="text-xs text-pharma-600">New Price</p>
                    <p className="text-2xl font-black text-pharma-600">
                      {discount.discountedPrice}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Special offer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="p-4 bg-gold-50 dark:bg-gold-900/20 rounded-xl border border-gold-200 dark:border-gold-800"
              >
                <div className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {discount.specialOffer}
                    </p>
                    <p
                      className="text-sm text-muted-foreground font-arabic mt-1"
                      dir="rtl"
                    >
                      {discount.specialOfferAr}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Bonus products */}
              {discount.bonusProducts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <p className="text-sm font-semibold text-foreground">
                    🎁 Bonus included:
                  </p>
                  <ul className="space-y-1">
                    {discount.bonusProducts.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-pharma-700 dark:text-pharma-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-pharma-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Campaign details */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="text-xs text-muted-foreground border-t border-border pt-3"
              >
                {discount.campaignDetails}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
