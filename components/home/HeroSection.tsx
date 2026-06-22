"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "18+", label: "منتج متميز" },
  { value: "100%", label: "جودة مختبرة" },
  { value: "6", label: "فئة متنوعة" },
  { value: "2015", label: "تأسست في القاهرة" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-bl from-pharma-950 via-pharma-900 to-pharma-800 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-pharma-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="relative z-10 px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-right">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-8">
            <Sparkles className="w-4 h-4 text-gold-300" />
            <span className="text-gold-200 font-medium font-arabic">منتجات صيدلانية وتجميلية متميزة</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 font-arabic">
              نُلهم{" "}
              <span className="bg-gradient-to-r from-gold-300 to-gold-400 bg-clip-text text-transparent">
                الثقة
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-pharma-200 mb-6 italic" dir="ltr">
              Inspire Confidence — Bellezza Pharma
            </p>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-pharma-200 max-w-2xl leading-relaxed mb-10 font-arabic mr-auto">
            بيلزا فارما تقدم منتجات صيدلانية وتجميلية مصنوعة بخبرة طبية وأجود المكونات الطبيعية. تأسسنا عام 2015 لنكون شريكك في الجمال والصحة.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12 justify-end">
            <Button size="xl" className="bg-white text-pharma-900 hover:bg-pharma-50 font-semibold group font-arabic" asChild>
              <Link href="/products">
                تصفح المنتجات
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-arabic" asChild>
              <Link href="#products">تركيباتنا الطبية</Link>
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-6 mb-12 justify-end">
            {[
              { icon: ShieldCheck, text: "مختبر جلدياً" },
              { icon: Award, text: "معتمد سريرياً" },
              { icon: ShieldCheck, text: "جودة صيدلانية" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-pharma-200">
                <span className="text-sm font-medium font-arabic">{text}</span>
                <Icon className="w-4 h-4 text-gold-300" />
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-pharma-300 font-arabic">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
