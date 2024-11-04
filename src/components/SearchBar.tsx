import React, { useState } from 'react';
import { Search, Hash, Loader2 } from 'lucide-react';
import { SearchFilters } from '../types';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  isLoading?: boolean;
}

export default function SearchBar({ onSearch, isLoading = false }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [platform, setPlatform] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    onSearch({ term: searchTerm.trim(), platform });
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl mx-auto">
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Hash className="h-5 w-5 text-purple-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products by hashtag or keyword..."
              className="block w-full pl-10 pr-3 py-3 border-2 border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              disabled={isLoading}
            />
          </div>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="px-4 py-3 border-2 border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            disabled={isLoading}
          >
            <option value="all">All Platforms</option>
            <option value="instagram">Instagram</option>
            <option value="twitter">Twitter</option>
            <option value="tiktok">TikTok</option>
          </select>
          <button
            type="submit"
            disabled={isLoading || !searchTerm.trim()}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Search className="h-5 w-5" />
            )}
            <span>{isLoading ? 'Searching...' : 'Search'}</span>
          </button>
        </div>
      </div>
    </form>
  );
}