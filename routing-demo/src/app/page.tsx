import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Welcome Home</h1>
      <div className="bg-purple-400 flex w-full rounded p-2 space-x-4 text-blue-600">
        <Link
          className="border rounded border-black text-white bg-blue-700 hover:bg-blue-900 px-2 py-1"
          href="/products/1/reviews/1"
        >
          Product 1 Review 1
        </Link>

        <Link
          className="border rounded border-black text-white bg-blue-700 hover:bg-blue-900 px-2 py-1"
          href="/complex-dashboard"
        >
          Complex-Dashboard
        </Link>

        <Link
          className="border rounded border-black text-white bg-blue-700 hover:bg-blue-900 px-2 py-1"
          href="/articles/breaking-news-123?lang=en"
        >
          Read in English
        </Link>

        <Link
          className="border rounded border-black text-white bg-blue-700 hover:bg-blue-900 px-2 py-1"
          href="/articles/breaking-news-123?lang=fr"
        >
          Read in French
        </Link>
      </div>
    </>
  );
}
