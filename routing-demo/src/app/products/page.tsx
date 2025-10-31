import Link from "next/link";

export default function ProductList() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-700">
      <h1>Product Lists:</h1>
      <h2 className="flex flex-col space-y-2 text-blue-400">
        <Link href="/products/1" replace>
          Product 1
        </Link>
        <Link href="/products/2">Product 2</Link>
        <Link href="/products/3">Product 3</Link>
        <Link href="/products/4">Product 4</Link>
        <Link href="/products/5">Product 5</Link>
        <Link href="/products/6">Product 6</Link>
      </h2>
    </div>
  );
}
