import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // "/sq" must not exist as a working duplicate of "/" — redirect to the canonical root.
  if (pathname === "/sq" || pathname.startsWith("/sq/")) {
    return NextResponse.redirect(new URL("/", request.url), 308);
  }

  // Albanian is served unprefixed: rewrite "/" to the [locale] route internally.
  if (pathname === "/") {
    return NextResponse.rewrite(new URL("/sq", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/sq/:path*"]
};
