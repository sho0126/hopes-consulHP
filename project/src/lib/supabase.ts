import { createClient } from '@supabase/supabase-js';

// Supabaseの設定
// 1. https://supabase.com でプロジェクト作成
// 2. Settings > API から URL と anon key を取得
// 3. 下記に設定

// 環境変数または直接設定
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

// Supabaseクライアントの作成
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// News記事の型定義
export interface NewsItem {
  id?: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content?: string;
  image_url?: string;
  created_at?: string;
}

// Newsサービス
export const newsService = {
  // 全記事取得
  async getAllNews(): Promise<NewsItem[]> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching news:', error);
      return [];
    }

    return data || [];
  },

  // 記事追加
  async addNews(news: Omit<NewsItem, 'id' | 'created_at'>): Promise<NewsItem | null> {
    const { data, error } = await supabase
      .from('news')
      .insert([news])
      .select()
      .single();

    if (error) {
      console.error('Error adding news:', error);
      return null;
    }

    return data;
  },

  // 記事更新
  async updateNews(id: number, news: Partial<NewsItem>): Promise<NewsItem | null> {
    const { data, error } = await supabase
      .from('news')
      .update(news)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating news:', error);
      return null;
    }

    return data;
  },

  // 記事削除
  async deleteNews(id: number): Promise<boolean> {
    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting news:', error);
      return false;
    }

    return true;
  },

  // 単一記事取得
  async getNewsById(id: number): Promise<NewsItem | null> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching news by id:', error);
      return null;
    }

    return data;
  },

  // 画像アップロード
  async uploadImage(file: File): Promise<string | null> {
    const fileName = `${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage
      .from('news-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Error uploading image:', error);
      return null;
    }

    // 公開URLを取得
    const { data: { publicUrl } } = supabase.storage
      .from('news-images')
      .getPublicUrl(fileName);

    return publicUrl;
  }
};

// 管理者認証
export const authService = {
  // ログイン
  async login(email: string, password: string): Promise<boolean> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      console.error('Login error:', error);
      return false;
    }

    return !!data.user;
  },

  // ログアウト
  async logout(): Promise<void> {
    await supabase.auth.signOut();
  },

  // 現在のユーザー取得
  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  // セッション確認
  async isAuthenticated(): Promise<boolean> {
    const { data: { session } } = await supabase.auth.getSession();
    return !!session;
  }
};