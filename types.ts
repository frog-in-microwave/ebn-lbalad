/**
 * TYPESCRIPT TYPES
 * These act as a blueprint for your data. They tell the editor exactly what 
 * properties an object should have, allowing for intelligent autocomplete 
 * and preventing typos across your app.
 * 
 * KEYWORDS TO SEARCH: "TypeScript Basics", "TypeScript Type Aliases"
 */

// A Type Alias restricting the Language variable to ONLY be "en" or "ar"
// An interface defining an object that holds translations
export interface Category {
  id: string;
  order: number;
  name: string;
}

export interface Product {
  id: string;
  categoryId: string;
  order: number;
  name: string;
  price: string;
  description?: string;
  image: string;
  isAvailable: boolean;
}
