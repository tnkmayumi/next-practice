// import fs from "fs";
// import path from "path";
// import { POSTS_PER_PAGE } from "./constants";
// import { PageData, PostItem } from "./types";
// import matter from "gray-matter";

// const getPostData = async(): Promise<PostItem[]> => {
//   const postsDirectory = path.join(process.cwd(), "src/app/blogs/posts")
//   const filenames = fs.readdirSync(postsDirectory);
//   const posts = filenames
//     .map((filename) => {
//       const filePath = path.join(postsDirectory, filename);
//       const fileContents = fs.readFileSync(filePath, "utf-8");
//       const { data } = matter(fileContents);
    

//       return{
//         blogId: filename.replace(/\.md$/, ""),
//         title: data.title,
//         description: data.description,
//         date: data.date,
//         image: data.image,
//         tags: data.tags || [],
//         contentHTML: "",
//       };
//     })
//     .sort((postA, postB) => 
//       new Date(postA.date) > new Date(postB.date) ? -1: 1
//     );
//   return posts;
// };

// //タグ一覧ページ用の記事データ
// async function getTagsData(blogId: string): Promise<PostItem[]> {
//   const posts = await getPostData();

//   return posts
//     .filter((post) => post.tags?.includes(decodeURIComponent(blogId)))
//     .sort((postA, postB)=>
//       new Date(postA.date) > new Date(postB.date)? -1: 1
//   );
// }

// const createPageData = (
//   currentPage: number,
//   totalPostCount: number
// ): PageData => {
//   const page = currentPage;
//   const totalPages = Math.ceil(totalPostCount / POSTS_PER_PAGE);
//   const start = (page -1) * POSTS_PER_PAGE;
//   const end = start + POSTS_PER_PAGE;
//   const pages = Array.from({ length: totalPages }, (_, i: number) => {
//     return 1 + i;
//   });

//   return {
//     currentPage: currentPage,
//     totalPages: totalPages,
//     start: start,
//     end: end,
//     pages: pages,
//   };
// };

// export { getPostData, getTagsData, createPageData };
// export type { PageData };