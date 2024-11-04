import { useState, useCallback } from 'react';
import { SearchFilters } from '../types';

interface RecentSearch {
  term: string;
  platform: string;
  timestamp: Date;
}

const MAX_RECENT_SEARCHES = 5;

export function useRecentSearches() {
  const [searches, setSearches] = useState<RecentSearch[]>([]);

  const addSearch = useCallback((filters: SearchFilters) => {
    setSearches((prev) => {
      const newSearches = prev.filter(
        (search) => search.term !== filters.term
      );
      return [
        { ...filters, timestamp: new Date() },
        ...newSearches,
      ].slice(0, MAX_RECENT_SEARCHES);
    });
  }, []);

  const clearSearch = useCallback((term: string) => {
    setSearches((prev) => prev.filter((search) => search.term !== term));
  }, []);

  return { searches, addSearch, clearSearch };
}