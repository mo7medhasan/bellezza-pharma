import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  className?: string;
  productName?: string;
}

export function ImagePlaceholder({ className, productName }: ImagePlaceholderProps) {
  return (
    <div className={cn(
      "relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-pharma-50 via-white to-pharma-100 dark:from-pharma-950 dark:via-pharma-900 dark:to-pharma-800 border border-pharma-100 dark:border-pharma-800",
      "aspect-[4/5] flex flex-col items-center justify-center gap-4", className)}
      role="img" aria-label={productName ? `صورة ${productName}` : "صورة المنتج"}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-pharma-200/40 dark:bg-pharma-700/20" />
        <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-pharma-200/30 dark:bg-pharma-700/15" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-20 h-20 rounded-2xl bg-white dark:bg-pharma-800 shadow-lg flex items-center justify-center border border-pharma-100 dark:border-pharma-700">
          <ImageIcon className="w-10 h-10 text-pharma-400 dark:text-pharma-500" strokeWidth={1.5} />
        </div>
        <div className="text-center px-6">
          <p className="text-sm font-medium text-pharma-600 dark:text-pharma-400 font-arabic">صورة المنتج</p>
          <p className="text-xs text-pharma-400 dark:text-pharma-500 mt-0.5 font-arabic">ستُضاف قريباً</p>
          {productName && (
            <p className="text-xs font-semibold text-pharma-700 dark:text-pharma-300 mt-2 truncate max-w-[180px] font-arabic">{productName}</p>
          )}
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <span className="text-xs text-pharma-300 dark:text-pharma-600 font-light tracking-widest italic">Bellezza Pharma</span>
      </div>
    </div>
  );
}
