import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'AI導入支援サービスの提供を開始しました',
      date: '2024-01-15',
      excerpt: 'Custom GPTsを活用した業務自動化支援サービスの提供を開始いたします。中小企業様向けに特化したパッケージをご用意しました。',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: '製造業A社様にてDX推進プロジェクトが完了',
      date: '2024-01-10',
      excerpt: '生産管理システムの導入により、業務効率が30%向上。月間160時間の工数削減を実現しました。',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'IT導入補助金2024年度の申請支援を開始',
      date: '2024-01-05',
      excerpt: '2024年度IT導入補助金の申請支援サービスを開始いたします。採択率向上のための専門的なサポートを提供します。',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            最新ニュース
          </h2>
          <Link 
            to="/news"
            className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center transition-colors duration-300"
          >
            すべて見る
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light mb-6">
                  {item.excerpt}
                </p>
                <Link 
                  to={`/news/${item.id}`}
                  className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center transition-colors duration-300"
                >
                  続きを読む
                  <ArrowRight className="ml-2 h-4 w-4" />
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