import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

export default function ReviewPage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1>Product Reviews</h1>
      <Suspense fallback={<div>Loading Product...</div>}>
        <Product />
      </Suspense>
      <Suspense fallback={<div>Loading Reviews...</div>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
