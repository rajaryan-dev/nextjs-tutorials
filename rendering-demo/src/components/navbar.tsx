import { Navsearch } from "@/components/nav-search";
import { Navlink } from "@/components/nav-links";

export function Navbar() {
  console.log(`NavBar rendered`);
  return (
    <>
      <Navlink />
      <Navsearch />
    </>
  );
}
