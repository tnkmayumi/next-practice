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
    <div>
      <h1>{data.title}</h1>
      
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/app/blogs/posts");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    blogId: fileName.replace(/\.md$/, ""),
  }));
}
