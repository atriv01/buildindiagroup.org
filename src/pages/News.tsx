import { useEffect, useState } from 'react';
import { storage } from '../lib/storage';
import type { NewsItem } from '../types';

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    setNews(storage.getNews());
  }, []);

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest News</h1>

        {news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <time className="text-sm text-gray-500">
                    {new Date(item.date).toLocaleDateString()}
                  </time>
                  <h2 className="text-xl font-semibold mt-2 mb-3">{item.title}</h2>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No news articles available at the moment.</p>
        )}
      </div>
    </div>
  );
}
