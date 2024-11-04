export interface Product {
  id: string;
  image: string;
  title: string;
  platform: 'Instagram' | 'Twitter' | 'TikTok';
  engagement: number;
  sentiment: number;
  price: string;
}

export interface SearchFilters {
  term: string;
  platform: string;
}