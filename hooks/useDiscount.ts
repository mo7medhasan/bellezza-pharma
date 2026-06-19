"use client";

import { useState, useCallback } from "react";
import { validateDiscountPassword } from "@/lib/utils";

interface UseDiscountReturn {
  isUnlocked: boolean;
  password: string;
  error: string;
  isAnimating: boolean;
  setPassword: (value: string) => void;
  unlock: () => void;
  reset: () => void;
}

export function useDiscount(): UseDiscountReturn {
  const [isUnlocked, setIsUnlocked] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const unlock = useCallback(() => {
    if (validateDiscountPassword(password)) {
      setIsAnimating(true);
      setError("");
      setTimeout(() => {
        setIsUnlocked(true);
        setIsAnimating(false);
      }, 600);
    } else {
      setError("Incorrect password. Try again.");
      setTimeout(() => setError(""), 3000);
    }
  }, [password]);

  const reset = useCallback(() => {
    setIsUnlocked(false);
    setPassword("");
    setError("");
    setIsAnimating(false);
  }, []);

  return {
    isUnlocked,
    password,
    error,
    isAnimating,
    setPassword,
    unlock,
    reset,
  };
}
