import React from 'react';
import { Hash, TrendingUp } from 'lucide-react';
import { useTrendingHashtags } from '../hooks/useTrendingHashtags';

interface TrendingHashtagsProps {
  onHashtagClick: (tag: string) => void;
}

export default function TrendingHashtags({ onHashtagClick }: TrendingHashtagsProps) {
  const { hashtags } = useTrendingHashtags();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-purple-600" />
          Trending Hashtags
        </h3>
      </div>
      <div className="space-y-3">
        {hashtags.map((hashtag) => (
          <button
            key={hashtag.tag}
            onClick={() => onHashtagClick(hashtag.tag)}
            className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-2">
              <Hash className="h-4 w-4 text-gray-400" />
              <span className="font-medium">#{hashtag.tag}</span>
              <span className="text-sm text-gray-500">{hashtag.platform}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                {(hashtag.count / 1000000).toFixed(1)}M
              </span>
              <span className="text-sm text-green-600">+{hashtag.growth}%</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}