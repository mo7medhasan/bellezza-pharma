"use client";

import { useAudio } from "@/hooks/useAudio";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudioButtonProps {
  text: string;
  lang?: "ar-SA" | "en-US" | "ar-EG";
  label?: string;
  variant?: "default" | "icon" | "small";
  className?: string;
}

export function AudioButton({
  text,
  lang = "en-US",
  label,
  variant = "default",
  className,
}: AudioButtonProps) {
  const { speak, stop, isSpeaking, isSupported } = useAudio();

  if (!isSupported) return null;

  const handleClick = () => {
    if (isSpeaking) {
      stop();
    } else {
      speak(text, lang);
    }
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleClick}
        title={`Pronounce: ${text}`}
        className={cn(
          "inline-flex items-center justify-center w-6 h-6 rounded-full transition-all",
          isSpeaking
            ? "bg-pharma-100 text-pharma-600 dark:bg-pharma-900/40"
            : "text-muted-foreground hover:text-pharma-600 hover:bg-pharma-50 dark:hover:bg-pharma-900/20",
          className
        )}
        aria-label={`Pronounce ${text}`}
      >
        {isSpeaking ? (
          <Loader2 className="w-3 h-3 animate-spin" />
        ) : (
          <Volume2 className="w-3 h-3" />
        )}
      </button>
    );
  }

  if (variant === "small") {
    return (
      <button
        onClick={handleClick}
        className={cn(
          "inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-all",
          isSpeaking
            ? "bg-pharma-100 text-pharma-700 dark:bg-pharma-900/40"
            : "bg-muted text-muted-foreground hover:bg-pharma-50 hover:text-pharma-700 dark:hover:bg-pharma-900/20",
          className
        )}
        aria-label={`Pronounce ${text}`}
      >
        {isSpeaking ? (
          <Loader2 className="w-3 h-3 animate-spin" />
        ) : (
          <Volume2 className="w-3 h-3" />
        )}
        <span>{label || (lang.startsWith("ar") ? "عربي" : "English")}</span>
      </button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleClick}
      className={cn(
        "gap-2 transition-all",
        isSpeaking && "border-pharma-400 text-pharma-600 bg-pharma-50 dark:bg-pharma-900/20",
        className
      )}
      aria-label={`Pronounce ${text} in ${lang.startsWith("ar") ? "Arabic" : "English"}`}
    >
      {isSpeaking ? (
        <VolumeX className="w-4 h-4 text-pharma-600" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
      🔊 {label || (lang.startsWith("ar") ? "عربي" : "English")}
    </Button>
  );
}
