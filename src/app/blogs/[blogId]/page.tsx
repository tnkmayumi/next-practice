import "./blog.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";



export default async function BlogPost({ params }: { params: { blogId: string } }) {
  const { blogId } = params;
  const filePath = path.join(process.cwd(), "src/app/blogs/posts", `${blogId}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  
  const processedContent = await unified().use(remarkParse).use(remarkHtml).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leadling-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {data.title}
        </h1>
        <p className="mt-2 text-1xl">
          {data.date}
        </p>
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          ></div>
      </div>
    </div>
  );
}

// 動的ルート用のパスとデータを生成　だが以下はなくても動く、、、

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/app/blogs/posts");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    blogId: fileName.replace(/\.md$/, ""),
  }));
}
