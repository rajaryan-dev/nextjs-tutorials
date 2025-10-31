import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

// Fetch user posts
async function getUserPosts(userId: string): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

// Fetch user albums
async function getUserAlbums(userId: string): Promise<Album[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  if (!res.ok) throw new Error("Failed to fetch albums");
  return res.json();
}

// Page Component
export default async function Page({ params }: { params: { userId: string } }) {
  const { userId } = params;

  // Fetch data in parallel
  const [posts, albums] = await Promise.all([
    getUserPosts(userId),
    getUserAlbums(userId),
  ]);

  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg shadow-sm transition-all duration-200"
        >
          ← Back to Homepage
        </Link>
      </div>

      <h1 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
        User Profile
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Posts Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400 flex items-center gap-2">
            📝 Posts
          </h2>
          <div className="space-y-5">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {post.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Albums Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400 flex items-center gap-2">
            🎵 Albums
          </h2>
          <div className="space-y-5">
            {albums.map((album) => (
              <div
                key={album.id}
                className="bg-gradient-to-r from-fuchsia-200 to-pink-200 dark:from-fuchsia-900 dark:to-pink-800 shadow-md hover:shadow-lg rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-gray-800 dark:text-gray-100 font-medium">
                  {album.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
