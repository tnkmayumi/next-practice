---
title: "コードメモ"
date: "2024-11-17"
description: "検索したコードまとめ"
thumbnail: "/images/thumbnails/free.jpeg"
---

■dangerouslySetInnerHTMLとは  
ReactプロパティでHTML形式の文字列をHTMLとして扱い、  
そのHTMLをコンポーネント内に直接挿入することができる  
外部から取得したHTMLコンテンツを表示する場合に使用  
blogs/[blogId]/page.tsx  
`div dangerouslySetInnerHTML={{ __html: contentHtml }}`  
※使用には注意が必要

---
