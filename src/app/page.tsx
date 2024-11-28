import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const postsDirectory = path.join(process.cwd(), "src/app/blogs/posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents); // メタデータを取得

      return {
        slug: fileName.replace(/\.md$/, ""),
        frontmatter: data,
        thumbnail: data.thumbnail,
        description: data.description,
        beginning: content.slice(0, 100),
      };
    }),
  ).then((posts) =>
    // 最新日付順に並び替え
    posts.sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    ),
  );

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ブログ記事一覧
          </h2>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex w-full mx-auto flex-col items-start justify-between"
              >
                <div className="flex">
                  <div className="group relative">
                    <div className="items-center gap-x-4 text-xs">
                      <Link href={`/blogs/${post.slug}`}>
                        <Image
                          src={post.thumbnail}
                          alt={post.frontmatter.title}
                          width={300}
                          height={200}
                          style={{ objectFit: "cover" }}
                        />
                      </Link>
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
                  </div>
                  <div className="teamb mx-auto ml-3">
                    <p
                      className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: `${post.frontmatter.description}`,
                      }}
                    ></p>
                    <div className="w-[40ch] break-words">{post.beginning}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
