import { AlertTriangle, ShieldAlert } from "lucide-react";

interface WarningsSectionProps {
  warningsAr: string[];
  sideEffectsAr: string[];
  storageAr: string[];
}

export function WarningsSection({ warningsAr, sideEffectsAr, storageAr }: WarningsSectionProps) {
  return (
    <div className="space-y-4 text-right">
      <div className="rounded-xl border-r-4 border-amber-400 bg-amber-50 dark:bg-amber-900/10 dark:border-amber-600 p-5">
        <div className="flex items-center gap-2 mb-3 justify-end">
          <h3 className="font-semibold text-amber-800 dark:text-amber-300 font-arabic">تحذيرات</h3>
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
        </div>
        <ul className="space-y-1.5">
          {warningsAr.map((w, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-amber-700 dark:text-amber-400 justify-end">
              <span className="font-arabic">{w}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
            </li>
          ))}
        </ul>
      </div>

      {sideEffectsAr.length > 0 && (
        <div className="rounded-xl border-r-4 border-red-300 bg-red-50 dark:bg-red-900/10 dark:border-red-700 p-5">
          <div className="flex items-center gap-2 mb-3 justify-end">
            <h3 className="font-semibold text-red-700 dark:text-red-300 font-arabic">الآثار الجانبية</h3>
            <ShieldAlert className="w-5 h-5 text-red-500 dark:text-red-400" />
          </div>
          <ul className="space-y-1.5">
            {sideEffectsAr.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400 justify-end">
                <span className="font-arabic">{s}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
              </li>
            ))}
          </ul>
        </div>
      )}

      {storageAr.length > 0 && (
        <div className="rounded-xl border border-border bg-blue-50 dark:bg-blue-900/10 p-5">
          <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-3 text-right font-arabic">🌡️ شروط التخزين</h3>
          <ul className="space-y-1.5">
            {storageAr.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-blue-600 dark:text-blue-400 justify-end">
                <span className="font-arabic">{s}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
