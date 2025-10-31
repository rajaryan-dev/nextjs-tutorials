export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay for 3 seconds");
    }, 3000);
  });
  return <h1>My Blogpage</h1>;
}
