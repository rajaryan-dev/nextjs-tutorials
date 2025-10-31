import { Suspense } from "react";
import { Author } from "./author";
import { div } from "framer-motion/client";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  const filteredPosts = posts.filter((post) => post.id % 10 === 1);

  return (
    <div>
      <div className="p-6 sm:p-10 max-w-7xl mx-auto transition-colors duration-300 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <h1 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Blog Posts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100 leading-tight">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed line-clamp-3">
                {post.body}
              </p>

              <Suspense
                fallback={
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Loading author...
                  </div>
                }
              >
                <Author userId={post.userId} />
              </Suspense>

              <div className="mt-5 flex justify-end">
                <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
