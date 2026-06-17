"use client";

import { useState, useCallback, useRef } from "react";

interface UseAudioOptions {
  lang?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
}

interface UseAudioReturn {
  speak: (text: string, lang?: string) => void;
  stop: () => void;
  isSpeaking: boolean;
  isSupported: boolean;
}

export function useAudio(options: UseAudioOptions = {}): UseAudioReturn {
  const { rate = 0.9, pitch = 1, volume = 1 } = options;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const isSupported =
    typeof window !== "undefined" && "speechSynthesis" in window;

  const stop = useCallback(() => {
    if (isSupported) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [isSupported]);

  const speak = useCallback(
    (text: string, lang = "en-US") => {
      if (!isSupported) return;

      // Stop any current speech
      window.speechSynthesis.cancel();
      setIsSpeaking(false);

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = volume;

      // Try to find an appropriate voice
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find((v) => v.lang.startsWith(lang.split("-")[0]));
      if (voice) utterance.voice = voice;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [isSupported, rate, pitch, volume]
  );

  return { speak, stop, isSpeaking, isSupported };
}
