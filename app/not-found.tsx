import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container max-w-2xl mx-auto px-4 py-24 flex flex-col items-center text-center gap-8">
      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-pharma-500 to-pharma-700 flex items-center justify-center shadow-xl font-serif italic text-white text-5xl font-black">
        B
      </div>
      <div>
        <h1 className="text-6xl font-black text-pharma-600 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-3 font-arabic">الصفحة غير موجودة</h2>
        <p className="text-muted-foreground font-arabic">الصفحة أو المنتج الذي تبحث عنه غير موجود أو تم نقله.</p>
      </div>
      <div className="flex gap-3">
        <Button variant="pharma" asChild>
          <Link href="/"><ArrowRight className="w-4 h-4" /><span className="font-arabic">الرئيسية</span></Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/products"><span className="font-arabic">تصفح المنتجات</span></Link>
        </Button>
      </div>
    </div>
  );
}
