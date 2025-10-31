export const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="flex border-2">
      <h1>Product: This is the product component</h1>
      <div className="flex flex-col ml-4">
        <h2>Macbook</h2>
        <h2>ExpertBook</h2>
        <h2>ThinkPad</h2>
        <h2>Iphone</h2>
      </div>
    </div>
  );
};
