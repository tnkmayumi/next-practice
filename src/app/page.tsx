import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default async function Home() {
  const postsDirectory = path.join(process.cwd(), "src/app/blogs/posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents); // メタデータを取得

      return {
        slug: fileName.replace(/\.md$/, ""),
        frontmatter: data,
      };
    })
  )
  .then((posts) =>
    posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  );
  
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ブログ記事一覧</h2>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="group relative">
                  <div className="flex items-center gap-x-4 text-xs">
                    <div className="text-gray-500">
                      {post.frontmatter.date}
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link 
                      href={`/blogs/${post.slug}`}
                      className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  <p
                    className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
                    dangerouslySetInnerHTML={{ __html:`${post.frontmatter.description}`}}
                  ></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
