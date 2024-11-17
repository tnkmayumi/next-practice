import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Home() {
  const postsDirectory = path.join(process.cwd(), "src/app/blogs/posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents); // メタデータを取得
    return {
      slug: fileName.replace(/\.md$/, ""),
      ...data, // title, date などのメタデータ
    };
  });

  return (
    <div>
      <h1>ブログ記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
