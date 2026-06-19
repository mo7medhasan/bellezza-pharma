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
  questionAr: string;
  answer: string;
  answerAr: string;
}

export interface Discount {
  percentage: number;
  specialOffer: string;
  specialOfferAr: string;
  bonusProducts: string[];
  campaignDetails: string;
  campaignDetailsAr: string;
  originalPrice?: string;
  discountedPrice?: string;
}

export type ProductCategory =
  | "serum"
  | "shampoo"
  | "cream"
  | "supplement"
  | "oral-care"
  | "feminine-care"
  | "baby-care"
  | "sunscreen"
  | "conditioner"
  | "deodorant"
  | "facial-wash"
  | "syrup"
  | "solution";

export interface Product {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  image: string;
  images: string[];
  price: string;
  shortDescription: string;
  shortDescriptionAr: string;
  longDescription: string;
  longDescriptionAr: string;
  category: ProductCategory;
  categoryLabel: string;
  categoryLabelAr: string;
  tags: string[];
  tagsAr: string[];
  benefits: string[];
  benefitsAr: string[];
  ingredients: Ingredient[];
  uses: string[];
  usesAr: string[];
  directions: string[];
  directionsAr: string[];
  warnings: string[];
  warningsAr: string[];
  sideEffects: string[];
  sideEffectsAr: string[];
  storage: string[];
  storageAr: string[];
  faqs: FAQ[];
  relatedProducts: string[];
  discount: Discount;
  marketingContent: string;
  marketingContentAr: string;
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
