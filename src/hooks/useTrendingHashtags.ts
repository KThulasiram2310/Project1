import { useState, useEffect } from 'react';

interface TrendingHashtag {
  tag: string;
  count: number;
  platform: 'Instagram' | 'Twitter' | 'TikTok';
  growth: number;
}

export function useTrendingHashtags() {
  const [hashtags, setHashtags] = useState<TrendingHashtag[]>([
    { tag: 'techgadgets', count: 1234567, platform: 'Instagram', growth: 23 },
    { tag: 'smartwatch', count: 987654, platform: 'TikTok', growth: 45 },
    { tag: 'headphones', count: 876543, platform: 'Twitter', growth: 12 },
    { tag: 'gaming', count: 765432, platform: 'Instagram', growth: 67 },
    { tag: 'hometech', count: 654321, platform: 'TikTok', growth: 34 },
  ]);

  return { hashtags };
}