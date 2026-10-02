export type ScreenType = 'about' | 'home' | 'contact' | 'privacy';

export interface ChakraInfo {
  id: number;
  name: string;
  sanskrit: string;
  english: string;
  element: string;
  color: string;
  bgColor: string;
  ringColor: string;
  topPercent: string;
  description: string;
  symptom: string;
  cure: string;
  frequency: string;
}

export interface TalismanProduct {
  id: string;
  name: string;
  sinhalaName?: string;
  tagline: string;
  priceLKR: number;
  priceUSD: number;
  rating: number;
  reviewsCount: number;
  image: string;
  beadSizes: string[];
  materials: string[];
  consecrationDetails: string;
  chakraTarget: string;
  description: string;
  features: string[];
}

export interface CartItem {
  product: TalismanProduct;
  beadSize: string;
  quantity: number;
  recipientName?: string;
  birthYear?: string;
  intention?: string;
}

export interface AuraQuizItem {
  id: string;
  text: string;
  points: number;
  category: string;
}
