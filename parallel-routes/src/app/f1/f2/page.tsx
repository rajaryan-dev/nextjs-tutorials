import Link from "next/link";

export default function F2() {
  return (
    <div>
      <h1>F2 Page</h1>
      <Link href={"/f4"}>F4</Link>
      <br />
      <Link href={"/f1/f2/innerf2"}>Inner F2</Link>
    </div>
  );
}
