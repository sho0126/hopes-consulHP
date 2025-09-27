import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { useNewsData } from '../hooks/useNewsData';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { newsItems } = useNewsData();
  const [currentNews, setCurrentNews] = useState<any>(null);

  useEffect(() => {
    if (id && newsItems.length > 0) {
      const news = newsItems.find(item => item.id === parseInt(id));
      if (news) {
        setCurrentNews(news);
      } else {
        navigate('/news');
      }
    }
  }, [id, newsItems, navigate]);

  if (!currentNews) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">読み込み中...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/news"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            ニュース一覧に戻る
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentNews.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              {currentNews.date}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 leading-tight">
            {currentNews.title}
          </h1>

          {currentNews.image && (
            <img
              src={currentNews.image}
              alt={currentNews.title}
              className="w-full h-96 object-cover rounded-2xl mb-12"
            />
          )}

          <div className="prose prose-lg max-w-none">
            {/* 本文がある場合は本文を、ない場合は概要を表示 */}
            {currentNews.content ? (
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  {currentNews.excerpt}
                </p>
                <div className="mt-8 text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {currentNews.content}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  {currentNews.excerpt}
                </p>
                <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
                  <p className="text-gray-600 leading-relaxed">
                    詳細情報は準備中です。
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Navigation */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Link
              to="/news"
              className="px-8 py-3 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              ニュース一覧へ戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;