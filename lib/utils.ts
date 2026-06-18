import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const DISCOUNT_PASSWORD = "123456";

export function validateDiscountPassword(input: string): boolean {
  return input === DISCOUNT_PASSWORD;
}

export const categoryColors: Record<string, string> = {
  serum: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  shampoo: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  cream: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  supplement: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  "oral-care": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
  "feminine-care": "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
  "baby-care": "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  sunscreen: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  conditioner: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  deodorant: "bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-300",
  "facial-wash": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  syrup: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  solution: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
};

export const categoryIcons: Record<string, string> = {
  serum: "✨",
  shampoo: "💧",
  cream: "🧴",
  supplement: "💊",
  "oral-care": "🦷",
  "feminine-care": "🌸",
  "baby-care": "👶",
  sunscreen: "☀️",
  conditioner: "🌿",
  deodorant: "🌬️",
  "facial-wash": "🫧",
  syrup: "🍃",
  solution: "💉",
};
