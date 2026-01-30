import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes and handles conditional logic
 * Ensure the word 'export' is present before 'function'
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
