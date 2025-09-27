import React, { useState } from 'react';
import { Calendar, Tag, ChevronRight } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('全て');
  
  const categories = ['全て', 'お知らせ', 'プレスリリース', '導入事例', 'セミナー'];
  
  const newsItems = [
    {
      id: 1,
      title: 'AI導入支援サービスの提供を開始しました',
      category: 'お知らせ',
      date: '2024-01-15',
      excerpt: 'Custom GPTsを活用した業務自動化支援サービスの提供を開始いたします。中小企業様向けに特化したパッケージをご用意しました。',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: '製造業A社様にてDX推進プロジェクトが完了',
      category: '導入事例',
      date: '2024-01-10',
      excerpt: '生産管理システムの導入により、業務効率が30%向上。月間160時間の工数削減を実現しました。',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'IT導入補助金2024年度の申請支援を開始',
      category: 'お知らせ',
      date: '2024-01-05',
      excerpt: '2024年度IT導入補助金の申請支援サービスを開始いたします。採択率向上のための専門的なサポートを提供します。',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: '「中小企業のためのAI活用セミナー」開催のお知らせ',
      category: 'セミナー',
      date: '2023-12-20',
      excerpt: '2024年2月15日（木）に中小企業経営者様向けのAI活用セミナーを開催いたします。参加費無料、オンライン開催です。',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'ホープスコンサルティング設立のお知らせ',
      category: 'プレスリリース',
      date: '2023-12-01',
      excerpt: 'AI・DXコンサルティング事業を展開するホープスコンサルティング株式会社を設立いたしました。',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: 'サービス業B社様の業務自動化プロジェクト開始',
      category: '導入事例',
      date: '2023-11-25',
      excerpt: '顧客管理システムの導入により、営業効率の向上を目指すプロジェクトを開始いたします。',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filteredNews = selectedCategory === '全て' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-500 tracking-widest uppercase">NEWS & UPDATES</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-12 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              News
            </h1>
            
            <p className="text-xl md:text-2xl mb-16 text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              最新のお知らせや導入事例、
              <br />
              セミナー情報をお届けします。
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {filteredNews.map((item) => (
              <article key={item.id} className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item.date}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 leading-tight">
                      {item.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed font-light mb-8">
                      {item.excerpt}
                    </p>
                    
                    <button className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300">
                      続きを読む
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-16">
            <div className="flex gap-2">
              <button className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white w-12 h-12 rounded-lg font-medium">
                1
              </button>
              <button className="bg-white text-gray-600 w-12 h-12 rounded-lg font-medium border border-gray-200 hover:bg-gray-50">
                2
              </button>
              <button className="bg-white text-gray-600 w-12 h-12 rounded-lg font-medium border border-gray-200 hover:bg-gray-50">
                3
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;