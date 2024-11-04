import React from 'react';
import { ShoppingBag, TrendingUp, Search, BarChart2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">SocialList</h1>
              <p className="text-sm text-purple-200">Social Media to Amazon Listings</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="flex items-center space-x-2 hover:text-purple-200 transition group">
              <BarChart2 className="h-5 w-5 group-hover:scale-110 transition" />
              <span>Analytics</span>
            </a>
            <a href="#trending" className="flex items-center space-x-2 hover:text-purple-200 transition group">
              <TrendingUp className="h-5 w-5 group-hover:scale-110 transition" />
              <span>Trending</span>
            </a>
            <a href="#search" className="flex items-center space-x-2 hover:text-purple-200 transition group">
              <Search className="h-5 w-5 group-hover:scale-110 transition" />
              <span>Search</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}