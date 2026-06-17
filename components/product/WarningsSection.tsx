import { AlertTriangle, ShieldAlert, Info } from "lucide-react";

interface WarningsSectionProps {
  warnings: string[];
  warningsAr: string[];
  sideEffects: string[];
  sideEffectsAr: string[];
}

export function WarningsSection({
  warnings,
  warningsAr,
  sideEffects,
  sideEffectsAr,
}: WarningsSectionProps) {
  return (
    <div className="space-y-4">
      {/* Warnings */}
      <div className="rounded-xl border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-900/10 dark:border-amber-600 p-5">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <h3 className="font-semibold text-amber-800 dark:text-amber-300">Warnings</h3>
        </div>
        <ul className="space-y-1.5">
          {warnings.map((w, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-amber-700 dark:text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
              {w}
            </li>
          ))}
        </ul>
        {warningsAr.length > 0 && (
          <div className="mt-4 pt-4 border-t border-amber-200 dark:border-amber-800">
            <ul className="space-y-1.5" dir="rtl">
              {warningsAr.map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-amber-700 dark:text-amber-400 font-arabic">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Side Effects */}
      {sideEffects.length > 0 && (
        <div className="rounded-xl border-l-4 border-red-300 bg-red-50 dark:bg-red-900/10 dark:border-red-700 p-5">
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="w-5 h-5 text-red-500 dark:text-red-400" />
            <h3 className="font-semibold text-red-700 dark:text-red-300">Side Effects</h3>
          </div>
          <ul className="space-y-1.5">
            {sideEffects.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          {sideEffectsAr.length > 0 && (
            <div className="mt-4 pt-4 border-t border-red-200 dark:border-red-900" dir="rtl">
              <ul className="space-y-1.5">
                {sideEffectsAr.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400 font-arabic">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Storage */}
      <div className="rounded-xl border border-border bg-blue-50 dark:bg-blue-900/10 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Info className="w-5 h-5 text-blue-500 dark:text-blue-400" />
          <h3 className="font-semibold text-blue-700 dark:text-blue-300">Storage Conditions</h3>
        </div>
        <p className="text-sm text-blue-600 dark:text-blue-400">
          See product storage section for detailed information.
        </p>
      </div>
    </div>
  );
}
