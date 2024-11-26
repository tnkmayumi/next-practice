# マークダウンブログ

このプロジェクトは**Next.js**(TypeScript)を使用して構築したマークダウンベースのブログアプリケーションです。
Markdownファイルを読み込み、ブログ記事として表示する機能を備えています。

## 使用している主な技術

- Next.js 13 (App Router 使用)
- TypeScript
- Markdown (remark/remark-html を利用)
- CSS (tailwind 必要に応じてデザイン調整)
- Node.js

## プロジェクトの概要

このブログは以下の特徴を持ちます：

1. Markdown ファイルを使用して記事を管理します。
2. 動的ルーティング機能で記事ごとの専用ページを生成します。
3. 各記事にはタグやコメント機能を追加できます。(今後余裕があれば追加予定)
4. 検索やナビゲーション機能を備えたシンプルなデザインです。（今後余裕があれば追加予定）

## ディレクトリ構成

next-practice/
├── app/
│ ├── blogs/
│ │ ├── [blogId]/
│ │ │ ├── page.tsx # 動的ルーティング用のページ
│ │ ├── posts
│ │ ├──post1.md # Markdown 記事
│ │ ├──post2.md # Markdown 記事
│ │ ├──post3.md # Markdown 記事
│ │ ├──post4.md # Markdown 記事
│ │ ├──post5.md # Markdown 記事
│ ├── layout.tsx # ヘッダーやフッター
│ ├── page.tsx # トップページ
├── public/ # 静的ファイル
├── styles/ # CSS スタイル
├── package.json # プロジェクトの依存関係

## 開発環境の構築方法

1. リポジトリをクローンします。  
   `https://github.com/tnkmayumi/next-practice.git`
2. 依存関係をインストールします。  
   `npm install`
3. 環境変数を設定します。  
   プロジェクトルートに`.env.local`ファイルを作成し、必要な設定を記述してください。
4. 開発サーバーを設定します。  
   `npm run dev`
5. ブラウザで http://localhost:3000 にアクセスします。

## トラブルシューティング

### 開発サーバーが起動しない場合

- 依存関係が正しくインストールされているか確認してください
  `npm install`
- 環境変数が正しく設定されているか確認してください

### Markdown ファイルが表示されない場合

- posts/ ディレクトリに記事(Markdownファイル)が存在しているか確認してください。
- 記事のフォーマットが正しいか確認してください。

---

この`README`を参考に、プロジェクトのセットアップやトラブルシューティングを進めてください☆
