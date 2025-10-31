import { ImageSlider } from "@/components/ImageSlider";
import { serverSideFunction } from "@/utilis/server-utilis";
// import { clientSideFunction } from "@/utilis/client-utilis";

export default function ServerRouterPage() {
  const serverResult = serverSideFunction();
  // const clientResult = clientSideFunction();
  return (
    <div>
      <h1>Server Route Page -- {serverResult}</h1>
      {/* <h2>{clientResult}</h2> */}
      <ImageSlider />
    </div>
  );
}
