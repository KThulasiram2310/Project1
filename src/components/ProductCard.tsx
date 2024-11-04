import React from 'react';
import { Star, Share2, ExternalLink, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';

type ProductCardProps = Product;

export default function ProductCard({
  image,
  title,
  platform,
  engagement,
  sentiment,
  price,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02] group">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform group-hover:scale-105" 
        />
        <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          {platform}
        </div>
        <button className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="h-5 w-5 text-red-500" />
        </button>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold line-clamp-2 mb-3 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="ml-1 text-sm font-medium text-yellow-700">
                {sentiment.toFixed(1)}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              {engagement.toLocaleString()} Engagements
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-purple-600">{price}</span>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-purple-50 rounded-full transition-colors">
              <Share2 className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-purple-50 rounded-full transition-colors">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-purple-50 rounded-full transition-colors">
              <ExternalLink className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}