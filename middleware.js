import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Keep the repair guides and the Dundas project companion guide on native routing.
  if ([
    '/blog/why-popcorn-ceiling-removal-needs-skim-coating-hamilton',
    '/blog/how-to-compare-drywall-repair-quotes-occupied-home',
    '/blog/can-drywall-be-patched-and-painted-in-one-day',
    '/blog/what-should-drywall-repair-quote-include',
    '/blog/repaint-wall-after-drywall-repair',
    '/blog/drywall-repair-drying-time-before-primer-paint',
  ].includes(pathname.replace(/\/$/, ""))) return NextResponse.next();

  // These guides use native routing to avoid a trailing-slash rewrite loop.
  if (['/blog/skim-coating-after-popcorn-ceiling-removal-mississauga', '/blog/popcorn-ceiling-removal-burlington-local-guide', '/blog/condo-popcorn-ceiling-removal-mississauga', '/blog/repairing-water-damaged-drywall', '/blog/popcorn-ceiling-repair-after-wall-removal', '/blog/concrete-condo-ceiling-popcorn-removal-finish-options', '/blog/ceiling-water-stain-after-painting', '/blog/bathroom-drywall-materials-and-finishing-guide','/blog/bathroom-drywall-mississauga-renovation-plan','/blog/bathroom-ceiling-repair-burlington','/blog/bathroom-drywall-after-leak-grimsby','/blog/toronto-condo-bathroom-drywall-planning'].includes(pathname.replace(/\/$/, ""))) return NextResponse.next();


  // Oakville articles use native Next routing. Rewriting their trailing slash
  // while trailingSlash is enabled can normalize back to the same URL and
  // repeatedly proxy the request instead of rendering the article.
  if (/^\/blog\/[^/]*oakville[^/]*\/?$/.test(pathname)) {
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
