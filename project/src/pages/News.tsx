import React, { useState, useEffect } from 'react';
import { Calendar, Tag, ChevronRight, Plus, Lock, Edit2, Trash2 } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import NewsForm from '../components/NewsForm';
import { useNewsData } from '../hooks/useNewsData';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('全て');
  const [showForm, setShowForm] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const { newsItems, addNews, deleteNews } = useNewsData();

  const categories = ['全て', 'お知らせ', 'プレスリリース', '導入事例', 'セミナー'];
  const ADMIN_PASSWORD = 'hopes2024';
  const ITEMS_PER_PAGE = 5; // 1ページあたりの表示件数

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get('admin') === 'true') {
      const isAuthenticated = sessionStorage.getItem('isAdminAuthenticated');
      if (isAuthenticated === 'true') {
        setIsAdminMode(true);
      } else {
        setShowPasswordDialog(true);
      }
    }
  }, [location]);

  const handlePasswordSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAdminMode(true);
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      setShowPasswordDialog(false);
      setPassword('');
    } else {
      alert('パスワードが正しくありません');
      setPassword('');
    }
  };

  const handleAddNews = (newsData: any) => {
    if (!newsData.image) {
      newsData.image = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600';
    }
    addNews(newsData);
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('このニュースを削除してもよろしいですか？')) {
      deleteNews(id);
    }
  };


  const filteredNews = selectedCategory === '全て'
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory);

  // カテゴリが変更されたらページを1に戻す
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // ページネーション計算
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  // ページ番号の配列を生成（最大5ページ表示）
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // 開始ページの調整
    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="pt-20">
      {/* Password Dialog */}
      {showPasswordDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-6 w-6 text-gray-700" />
              <h2 className="text-xl font-light">管理者認証</h2>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4"
              placeholder="パスワードを入力"
              autoFocus
            />
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setShowPasswordDialog(false);
                  window.history.pushState({}, '', '/news');
                }}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                キャンセル
              </button>
              <button
                onClick={handlePasswordSubmit}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white rounded-lg hover:opacity-90"
              >
                認証
              </button>
            </div>
          </div>
        </div>
      )}

      {/* News Form */}
      {showForm && (
        <NewsForm
          onSubmit={handleAddNews}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* Hero Section with Banner */}
      <section className="relative bg-white">
        {/* Banner Image */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/news-banner.png')`,
            }}
          >
            {/* Dark Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="mb-6">
                <span className="text-base font-semibold text-white tracking-widest uppercase drop-shadow-lg">NEWS & UPDATES</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-medium mb-8 text-white drop-shadow-2xl">
                News
              </h1>

              <p className="text-2xl md:text-3xl text-white max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-lg">
                最新のお知らせや導入事例、
                <br />
                セミナー情報をお届けします。
              </p>

            </div>
          </div>

          {/* Gradient Overlay at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </section>

      {/* Admin Button Section */}
      {isAdminMode && (
        <section className="py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white rounded-lg hover:opacity-90 transition-opacity">
                <Plus className="h-5 w-5" />
                新規投稿
              </button>
            </div>
          </div>
        </section>
      )}

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
          {/* 記事件数表示 */}
          {filteredNews.length > 0 && (
            <div className="text-sm text-gray-500 mb-6">
              {filteredNews.length}件中 {startIndex + 1}-{Math.min(endIndex, filteredNews.length)}件を表示
            </div>
          )}

          <div className="grid gap-12">
            {currentNews.map((item) => (
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
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/news/${item.id}`}
                        className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300">
                        続きを読む
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                      {isAdminMode && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="削除"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-16">
              <div className="flex gap-2 items-center">
                {/* 前へボタン */}
                {currentPage > 1 && (
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    ←
                  </button>
                )}

                {/* ページ番号 */}
                {getPageNumbers().map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-12 h-12 rounded-lg font-medium transition-all ${
                      currentPage === pageNum
                        ? 'bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white'
                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                {/* 次へボタン */}
                {currentPage < totalPages && (
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    →
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;