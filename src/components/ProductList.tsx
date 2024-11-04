import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { Loader2 } from 'lucide-react';

interface ProductListProps {
  products: Product[];
  isLoading?: boolean;
  error?: string | null;
}

export default function ProductList({ products, isLoading = false, error = null }: ProductListProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 className="h-8 w-8 text-purple-600 animate-spin mb-4" />
        <p className="text-gray-600">Searching for products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No products found. Try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}