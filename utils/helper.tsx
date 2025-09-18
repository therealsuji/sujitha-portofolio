import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import slugify from "slugify";
import { rehype } from "rehype";
import rehypeFormat from "rehype-format";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createSlug(title: string) {
  const slug = slugify(title, {
    lower: true,
  });
  return slug;
}

export function stripHtml(html: string): string {
  try {
    const result = rehype()
      .use(rehypeFormat)
      .processSync(html);
    return result.toString().replace(/<[^>]*>/g, '').trim();
  } catch (error) {
    // Fallback to simple regex if rehype fails
    return html.replace(/<[^>]*>/g, '').trim();
  }
}

export function createExcerpt(content: string, maxLength: number = 150): string {
  const plainText = stripHtml(content);
  if (plainText.length <= maxLength) {
    return plainText;
  }
  return plainText.substring(0, maxLength).trim() + '...';
}
