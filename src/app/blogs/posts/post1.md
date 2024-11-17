---
title: "時間のかかったエラー"
date: "2024-11-13"
description: "解消できたものをログとして残す"
thumbnail: "/images/thumbnails/error.png"
---

## fsを使用する際はパスを適切に指定しないとエラーが起こる

：no surch file or directory...

const postsDirectory = 

エラー：path.join(process.cwd(), 'blogs/posts');

クリア：path.join(process.cwd(), 'src/app/blogs/posts');
