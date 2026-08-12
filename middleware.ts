import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Bare (unprefixed) paths that are Albanian pages living under app/[locale]/.
// Extend this list as new top-level pages are added; "/" always stays implicit.
const SQ_ROOT_PATHS = ["/", "/privacy", "/terms"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // "/sq" must not exist as a working duplicate of its unprefixed path — redirect to root.
  if (pathname === "/sq" || pathname.startsWith("/sq/")) {
    return NextResponse.redirect(new URL("/", request.url), 308);
  }

  // Albanian is served unprefixed: rewrite these to the internal "/sq" route.
  if (SQ_ROOT_PATHS.includes(pathname)) {
    const target = pathname === "/" ? "/sq" : `/sq${pathname}`;
    return NextResponse.rewrite(new URL(target, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/sq/:path*", "/privacy", "/terms"]
};
