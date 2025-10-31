export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const productId = params.productId;
  return <h1>Details About Product: {productId} </h1>;
}
