import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_ROUTES = ["/channels", "/friends", "/settings"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isProtectedRoute = PROTECTED_ROUTES.some(
    (route) => pathname.startsWith(route) || pathname === route
  );

  if (isProtectedRoute) {
    const firebaseToken = request.cookies.get("firebaseToken")?.value;

    const sessionCookie = request.cookies.get("session")?.value;

    const isLoggedIn = request.cookies.get("isLoggedIn")?.value === "true";

    if (!firebaseToken && !sessionCookie && !isLoggedIn) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
