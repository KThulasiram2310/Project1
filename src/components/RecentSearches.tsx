import React from 'react';
import { Clock, X } from 'lucide-react';

interface RecentSearch {
  term: string;
  platform: string;
  timestamp: Date;
}

interface RecentSearchesProps {
  searches: RecentSearch[];
  onSearchClick: (term: string, platform: string) => void;
  onClearSearch: (term: string) => void;
}

export default function RecentSearches({ searches, onSearchClick, onClearSearch }: RecentSearchesProps) {
  if (searches.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center gap-2">
        <Clock className="h-4 w-4" />
        Recent Searches
      </h3>
      <div className="flex flex-wrap gap-2">
        {searches.map((search) => (
          <div
            key={`${search.term}-${search.timestamp.getTime()}`}
            className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm"
          >
            <button
              onClick={() => onSearchClick(search.term, search.platform)}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              {search.term}
            </button>
            <button
              onClick={() => onClearSearch(search.term)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-3 w-3 text-gray-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}