---
title: "Next.jsでmarkdownブログを作成"
date: "2024-11-14"
description: "手順を自分なりに箇条書きしていく"
thumbnail: "/images/thumbnails/edit.jpeg"
tags: ["typescript", "nextjs"]
---
1.プロジェクトを作成  
2.ルーティング作成？  
3.ヘッダー作成（TOPに戻る）  
4.マークダウンファイルの保存先をpostsに  
5.app直下のpage.tsxにpostsからブログ記事一覧を表示させる  
6.ページを装飾  
7.サムネイルの追加
8.フッダー作成（ヘッダーもglobal.css装飾から直接装飾に変更した）

---  
参考になりそう
https://exiz.org/posts/nextjs14-create-markdown-blog/ 

本文記事冒頭100文字を出すには content.slice(0, 100)を使用する？
その場合const excerptを定義してする？

undifindと表示されたのでいろいろためしますか、、

次回は
記事にタグ付け＋記事検索
記事へのコメント入力フォーム＋記事へのコメントをmarkdownに書き込み＋記事へのコメントを表示

