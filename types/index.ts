export type Platform = 
  | "amazon" 
  | "flipkart" 
  | "meesho" 
  | "myntra" 
  | "ajio"
  | "reliance-digital"
  | "croma"
  | "bajaj-electronics";

export type Category = 
  | "electronics" 
  | "fashion" 
  | "home" 
  | "beauty" 
  | "sports" 
  | "toys" 
  | "books" 
  | "automotive" 
  | "all";

export type SortOption = 
  | "discount-desc" 
  | "discount-asc" 
  | "price-asc" 
  | "price-desc" 
  | "newest";

export interface IDeal {
  _id?: string;
  title: string;
  description: string;
  imageUrl: string;
  originalPrice: number;
  currentPrice: number;
  discountPercentage: number;
  platform: Platform;
  category: Category;
  productUrl: string;
  affiliateUrl: string;
  rating?: number;
  reviewCount?: number;
  isActive: boolean;
  expiresAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IDealDocument extends IDeal {
  _id: string;
}

export interface IDealFilters {
  platform?: Platform;
  category?: Category;
  minDiscount?: number;
  maxPrice?: number;
  search?: string;
  sort?: SortOption;
  page?: number;
  limit?: number;
}

export interface IDealResponse {
  deals: IDealDocument[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface IPlatformConfig {
  name: string;
  logo: string;
  color: string;
  baseUrl: string;
  affiliateParam: string;
  affiliateTag: string;
}

export interface IRawDeal {
  title: string;
  description?: string;
  imageUrl: string;
  originalPrice: number;
  currentPrice: number;
  platform: Platform;
  category: Category;
  productUrl: string;
  rating?: number;
  reviewCount?: number;
  expiresAt?: Date;
}

export interface IAffiliateLink {
  originalUrl: string;
  affiliateUrl: string;
  platform: Platform;
  generatedAt: Date;
}
