export interface Ingredient {
  id: string;
  nameAr: string;
  nameEn: string;
  description: string;
  benefits: string[];
  mechanism: string;
  concentration?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type ProductCategory =
  | "serum" | "shampoo" | "cream" | "supplement" | "oral-care"
  | "feminine-care" | "baby-care" | "sunscreen" | "conditioner"
  | "deodorant" | "facial-wash" | "syrup" | "solution";

export interface Product {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  image: string;
  images: string[];
  price: string;
  shortDescription: string;
  longDescription: string;
  category: ProductCategory;
  categoryLabel: string;
  tags: string[];
  benefits: string[];
  ingredients: Ingredient[];
  uses: string[];
  directions: string[];
  warnings: string[];
  sideEffects: string[];
  storage: string[];
  faqs: FAQ[];
  relatedProducts: string[];
  marketingContent: string;
  medicalContent: string;
  volume?: string;
  weight?: string;
  featured?: boolean;
}

export interface SearchResult {
  product: Product;
  matchType: "name" | "ingredient" | "benefit" | "category" | "tag";
  matchedTerm: string;
}