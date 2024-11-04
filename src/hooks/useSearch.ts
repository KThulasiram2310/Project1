import { useState } from 'react';
import { Product, SearchFilters } from '../types';

const MOCK_API_DELAY = 1500;

// Helper function to get relevant image based on product type
const getProductImage = (title: string): string => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('headphones')) {
    return 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e';
  } else if (lowerTitle.includes('watch') || lowerTitle.includes('smartwatch')) {
    return 'https://images.unsplash.com/photo-1546868871-7041f2a55e12';
  } else if (lowerTitle.includes('camera')) {
    return 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32';
  } else if (lowerTitle.includes('speaker')) {
    return 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1';
  } else if (lowerTitle.includes('laptop')) {
    return 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853';
  } else if (lowerTitle.includes('phone')) {
    return 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd';
  }
  // Default tech image if no specific match
  return 'https://images.unsplash.com/photo-1519389950473-47ba0277781c';
};

// Helper function to format price in Indian Rupees
const formatIndianPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

// Helper function to generate price based on product type
const generatePrice = (type: string): string => {
  const lowerType = type.toLowerCase();
  let basePrice: number;
  
  if (lowerType.includes('headphones')) {
    basePrice = 2000 + Math.random() * 8000; // ₹2,000 - ₹10,000
  } else if (lowerType.includes('watch')) {
    basePrice = 15000 + Math.random() * 25000; // ₹15,000 - ₹40,000
  } else if (lowerType.includes('camera')) {
    basePrice = 35000 + Math.random() * 65000; // ₹35,000 - ₹1,00,000
  } else if (lowerType.includes('speaker')) {
    basePrice = 3000 + Math.random() * 12000; // ₹3,000 - ₹15,000
  } else {
    basePrice = 10000 + Math.random() * 20000; // Default range
  }
  
  return formatIndianPrice(basePrice);
};

export function useSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const searchProducts = async (filters: SearchFilters) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, MOCK_API_DELAY));

      // Generate product titles based on search term
      const productTypes = ['Wireless Headphones', 'Smart Watch', 'Premium Camera', 'Bluetooth Speaker'];
      const mockResults: Product[] = productTypes.map((type, index) => ({
        id: String(index + 1),
        title: `${filters.term} ${type}`,
        image: getProductImage(`${filters.term} ${type}`),
        platform: ['Instagram', 'TikTok', 'Twitter'][Math.floor(Math.random() * 3)] as Product['platform'],
        engagement: Math.floor(Math.random() * 100000),
        sentiment: 4.5 + Math.random() * 0.5,
        price: generatePrice(type),
      }));

      setResults(mockResults);
    } catch (err) {
      setError('Failed to fetch results. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, results, error, searchProducts };
}