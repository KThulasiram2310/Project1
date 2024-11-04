import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import TrendingHashtags from './components/TrendingHashtags';
import RecentSearches from './components/RecentSearches';
import { useSearch } from './hooks/useSearch';
import { useRecentSearches } from './hooks/useRecentSearches';

function App() {
  const { isLoading, results, error, searchProducts } = useSearch();
  const { searches, addSearch, clearSearch } = useRecentSearches();

  const handleSearch = (filters: { term: string; platform: string }) => {
    searchProducts(filters);
    addSearch(filters);
  };

  const handleHashtagClick = (tag: string) => {
    handleSearch({ term: tag, platform: 'all' });
  };

  const handleRecentSearchClick = (term: string, platform: string) => {
    handleSearch({ term, platform });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Convert Social Trends to Amazon Listings
          </h2>
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          <RecentSearches
            searches={searches}
            onSearchClick={handleRecentSearchClick}
            onClearSearch={clearSearch}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics Overview</h2>
            <Dashboard />
          </div>
          <div>
            <TrendingHashtags onHashtagClick={handleHashtagClick} />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {results.length > 0 ? 'Search Results' : 'Trending Products'}
          </h2>
          <ProductList 
            products={results} 
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>

      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 SocialList. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;