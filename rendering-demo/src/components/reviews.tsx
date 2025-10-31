export const Reviews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <h1 className="border-2">Reviews: Products are best</h1>;
};
