import { useState, useEffect } from 'react';

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content?: string;
  image: string;
}

const defaultNews: NewsItem[] = [
  {
    id: 1,
    title: 'HPをリニューアルしました',
    category: 'お知らせ',
    date: '2025-09-22',
    excerpt: 'この度、ホープスコンサルティング株式会社は、AI・効率化支援サービスの提供開始に伴い、公式ウェブサイトを全面リニューアルいたしました。中小企業診断士とAIエンジニアの専門チームが、経営視点での本質的なデジタル変革をご支援します。',
    content: '平素より格別のご高配を賜り、厚く御礼申し上げます。ホープスコンサルティング株式会社は、2025年9月22日、公式ウェブサイトを全面リニューアルいたしました。多くの中小企業様が「効率化を進めたいが、何から始めればよいか分からない」「ツールを導入したが定着しない」「投資に見合う効果が得られるか不安」といった課題を抱えています。当社は、中小企業診断士の経営視点とAIエンジニアの技術力を融合させ、単なるツール導入ではなく、利益向上に直結する本質的な効率化をご提供します。',
    image: '/images/news/EMXN1y8qTQoG効率化Bsb2FkEg55bGFiLXN0dW50LXNncBoza2xpbmcvZG93bmxvYWQvTWprd05Ea3dPVGN4TlRBd09UUTFNVFV3TkRjd05qUXdOdz09.origin.png'
  }
];

const STORAGE_KEY = 'hopes_news_data';

export const useNewsData = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    const storedNews = localStorage.getItem(STORAGE_KEY);
    if (storedNews) {
      try {
        const parsed = JSON.parse(storedNews);
        setNewsItems(parsed);
      } catch (error) {
        console.error('Failed to parse stored news:', error);
        setNewsItems(defaultNews);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultNews));
      }
    } else {
      setNewsItems(defaultNews);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultNews));
    }
  }, []);

  const addNews = (newItem: NewsItem) => {
    const updatedNews = [newItem, ...newsItems];
    setNewsItems(updatedNews);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNews));
  };

  const updateNews = (id: number, updatedItem: NewsItem) => {
    const updatedNews = newsItems.map(item =>
      item.id === id ? updatedItem : item
    );
    setNewsItems(updatedNews);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNews));
  };

  const deleteNews = (id: number) => {
    const updatedNews = newsItems.filter(item => item.id !== id);
    setNewsItems(updatedNews);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNews));
  };

  const sortedNews = [...newsItems].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    newsItems: sortedNews,
    addNews,
    updateNews,
    deleteNews
  };
};