import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "6efd9b6a-dc3f-4ab1-8cd3-9bad6dbf8c59");
  requestHeaders.set("x-createxyz-project-group-id", "9c0167f8-f235-46bc-956b-8786472c1678");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}
