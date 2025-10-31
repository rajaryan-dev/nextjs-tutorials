import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div className=" p-2 flex space-x-4 border [&>*]:border [&>*]:rounded [&>*]:bg-blue-500 [&>*]:text-white [&>*]:px-2 [&>*]:py-1">
        <Link href={`/articles/${articleId}?lang=en`}>Read in English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Read in Spanish </Link>
        <Link href={`/articles/${articleId}?lang=fr`}>Read in French</Link>
      </div>
    </div>
  );
}
