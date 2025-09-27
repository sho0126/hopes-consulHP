# Supabase セットアップガイド

## 📋 セットアップ手順

### 1. Supabaseアカウント作成
1. [https://supabase.com](https://supabase.com) にアクセス
2. GitHubアカウントでサインアップ（推奨）またはメールで登録

### 2. プロジェクト作成
1. 「New project」をクリック
2. 以下を入力：
   - **Project name**: hopes-consulting
   - **Database Password**: 強力なパスワードを設定（保存しておく）
   - **Region**: Northeast Asia (Tokyo) を選択
3. 「Create new project」をクリック

### 3. データベース設定

#### SQLエディタで以下を実行：

```sql
-- Newsテーブル作成
CREATE TABLE news (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  date DATE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 初期データ挿入
INSERT INTO news (title, category, date, excerpt, content, image_url) VALUES
('AI導入支援サービスの提供を開始しました', 'お知らせ', '2024-01-15',
 'Custom GPTsを活用した業務自動化支援サービスの提供を開始いたします。中小企業様向けに特化したパッケージをご用意しました。',
 'ホープスコンサルティング株式会社は、この度、Custom GPTsを活用した業務自動化支援サービスの提供を正式に開始いたしました。',
 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'),

('製造業A社様にて効率化推進プロジェクトが完了', '導入事例', '2024-01-10',
 '生産管理システムの導入により、業務効率が30%向上。月間160時間の工数削減を実現しました。',
 '2023年9月から開始した製造業A社様の効率化推進プロジェクトが、この度成功裏に完了いたしました。',
 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600');

-- RLS（Row Level Security）を有効化
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- 読み取りは全員許可
CREATE POLICY "Allow public read" ON news
  FOR SELECT USING (true);

-- 書き込みは認証ユーザーのみ
CREATE POLICY "Allow authenticated insert" ON news
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update" ON news
  FOR UPDATE WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete" ON news
  FOR DELETE USING (auth.role() = 'authenticated');
```

### 4. ストレージ設定

1. Storage → New bucket
2. バケット名: `news-images`
3. Public bucketにチェック
4. 「Create bucket」をクリック

### 5. 認証設定（管理者用）

1. Authentication → Users
2. 「Invite user」をクリック
3. メールアドレス: `info.hopesconsul@gmail.com`
4. パスワードを設定

### 6. APIキー取得

1. Settings → API
2. 以下をコピー：
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public**: `eyJhbGciOiJS...`

### 7. 環境変数設定

`.env`ファイルを作成：

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJS...
```

## 🚀 動作確認

1. ブラウザで `/news` にアクセス
2. 記事が表示されることを確認
3. 管理者ログイン（`/news?admin=true`）
4. 記事の追加・削除をテスト

## 📝 本番環境での設定

### Vercel
1. Settings → Environment Variables
2. 上記の環境変数を追加

### Netlify
1. Site settings → Environment variables
2. 上記の環境変数を追加

## ⚠️ セキュリティ注意事項

- **Database Password**は絶対に公開しない
- **service_role key**は使用しない（anon keyのみ使用）
- RLS（Row Level Security）を必ず有効化
- 本番環境では環境変数を使用

## 🆘 トラブルシューティング

### 記事が表示されない
- Supabase URLとキーが正しいか確認
- テーブル名が `news` になっているか確認
- RLSポリシーが設定されているか確認

### 画像アップロードができない
- ストレージバケットが `news-images` で作成されているか確認
- Public bucketになっているか確認

### 管理者ログインができない
- Authentication でユーザーが作成されているか確認
- メールアドレスとパスワードが正しいか確認