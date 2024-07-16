import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import slugify from "slugify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createSlug(title: string) {
  const slug = slugify(title, {
    lower: true,
  });
  return slug;
}
