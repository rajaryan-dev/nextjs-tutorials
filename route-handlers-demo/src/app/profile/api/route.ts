import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  // const requestHeader = new Headers(request.headers);
  // console.log("Request Header:", requestHeader.get("Authorization"));

  const headersList = await headers();
  console.log("Headers List:", headersList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log("Theme Cookie:", theme);

  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "20");

  return new Response("<h1>Profile API Route</h1>", {
    status: 200,
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
