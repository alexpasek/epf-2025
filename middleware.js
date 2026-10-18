import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Use native routing for this guide to avoid a trailing-slash rewrite loop.
  if (/^\/blog\/bathroom-drywall-oakville-repair-or-replace\/?$/.test(pathname)) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/blog/") && pathname.length > 6 && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:path*"],
};
