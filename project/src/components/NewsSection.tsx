import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNewsData } from '../hooks/useNewsData';

const NewsSection = () => {
  const { newsItems } = useNewsData();
  const displayItems = newsItems.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            最新ニュース
          </h2>
          <Link
            to="/news"
            className="text-sm sm:text-base text-gray-700 hover:text-gray-900 font-medium inline-flex items-center transition-colors duration-300"
          >
            <span className="hidden sm:inline">すべて見る</span>
            <span className="sm:hidden">一覧</span>
            <ArrowRight className="ml-1 sm:ml-2 h-3 sm:h-4 w-3 sm:w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {displayItems.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-6 sm:p-8">
                <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                  <Calendar className="h-3 sm:h-4 w-3 sm:w-4 mr-1 sm:mr-2" />
                  {item.date}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-light text-gray-900 mb-3 sm:mb-4 leading-tight text-center">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-light mb-4 sm:mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                <Link
                  to={`/news/${item.id}`}
                  className="text-sm sm:text-base text-gray-700 hover:text-gray-900 font-medium inline-flex items-center transition-colors duration-300">
                  続きを読む
                  <ArrowRight className="ml-1 sm:ml-2 h-3 sm:h-4 w-3 sm:w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;