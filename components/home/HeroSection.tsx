"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "18+", label: "Premium Products", labelAr: "منتج متميز" },
  { value: "100%", label: "Quality Tested", labelAr: "مختبر الجودة" },
  { value: "6", label: "Categories", labelAr: "فئة" },
  { value: "2015", label: "EST. Cairo, Egypt", labelAr: "القاهرة، مصر" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pharma-950 via-red-950 to-pharma-900 dark:from-pharma-950 dark:via-pharma-900/90 dark:to-pharma-900/60 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-pharma-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pharma-600/5 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-gold-300" />
            <span className="text-gold-200 font-medium">
              Premium Pharmaceutical & Cosmeceutical Products
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
              Inspire{" "}
              <span className="bg-gradient-to-r from-gold-300 to-gold-400 bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>
            <h2
              className="text-2xl md:text-3xl font-bold text-pharma-200 font-arabic mb-6"
              dir="rtl"
            >
              نُلهم الثقة — بيلزا فارما
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-pharma-200 max-w-2xl leading-relaxed mb-10"
          >
            Bellezza Pharma delivers clinically formulated skincare, haircare, and
            wellness products backed by dermatological expertise and the finest
            natural ingredients.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button
              size="xl"
              className="bg-white text-pharma-900 hover:bg-pharma-50 font-semibold group"
              asChild
            >
              <Link href="/products">
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              asChild
            >
              <Link href="#products">
                <ShieldCheck className="w-5 h-5" />
                Our Formulas
              </Link>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-6 mb-12"
          >
            {[
              { icon: ShieldCheck, text: "Dermatologically Tested" },
              { icon: Award, text: "Clinically Validated" },
              { icon: ShieldCheck, text: "Pharma Grade Quality" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-pharma-200">
                <Icon className="w-4 h-4 text-gold-300" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-pharma-300">{stat.label}</div>
                <div
                  className="text-xs text-pharma-400 font-arabic mt-0.5"
                  dir="rtl"
                >
                  {stat.labelAr}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
