import { NextRequest, NextResponse, userAgent } from "next/server";

// Set pathname where middleware will be executed
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/data|_next/image|favicon.ico|en|ae|assets|image/catalog|1.jpg|2.png|3.jpg|4.jpg|mirage-mobile).*)",
  ],
};
export function middleware(req) {
  // Parse user agent
  const { device } = userAgent(req);

  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  if (req.nextUrl.pathname === `/`) {
    req.nextUrl.pathname = `/${viewport}`;
    // Return rewrited response
    return NextResponse.rewrite(req.nextUrl);
  }
  if (req.nextUrl.pathname === ``) {
    req.nextUrl.pathname = `/${viewport}`;
    // Return rewrited response
    return NextResponse.rewrite(
      new URL(req.nextUrl.pathname.replace("/", `/${viewport}`), req.url)
    );
  }
  if (req.nextUrl.pathname.startsWith("/products")) {
    return NextResponse.rewrite(
      new URL(
        req.nextUrl.pathname.replace("/products", `/products/${viewport}`),
        req.url
      )
    );
  }
  if (req.nextUrl.pathname.startsWith("/posts")) {
    return NextResponse.rewrite(
      new URL(req.nextUrl.pathname.replace("/posts", `/posts`), req.url)
    );
  }
  if (req.nextUrl.pathname.startsWith("/orders-list")) {
    return NextResponse.rewrite(
      new URL(
        req.nextUrl.pathname.replace(
          "/orders-list",
          `/orders-list/${viewport}`
        ),
        req.url
      )
    );
  }
  if (req.nextUrl.pathname.startsWith("/product")) {
    return NextResponse.rewrite(
      new URL(
        req.nextUrl.pathname.replace("/product", `/product/${viewport}`),
        req.url
      )
    );
  }
  if (req.nextUrl.pathname.startsWith("/account")) {
    return NextResponse.rewrite(
      new URL(
        req.nextUrl.pathname.replace("/account", `/account/${viewport}`),
        req.url
      )
    );
  }
  if (req.nextUrl.pathname.startsWith("/cart")) {
    return NextResponse.rewrite(
      new URL(
        req.nextUrl.pathname.replace("/cart", `/cart/${viewport}`),
        req.url
      )
    );
  }
  if (req.nextUrl.pathname.startsWith("/shipping-bag")) {
    return NextResponse.rewrite(
      new URL(
        req.nextUrl.pathname.replace(
          "/shipping-bag",
          `/shipping-bag/${viewport}`
        ),
        req.url
      )
    );
  }
  if (req.nextUrl.pathname.startsWith("/payment-method")) {
    return NextResponse.rewrite(
      new URL(
        req.nextUrl.pathname.replace(
          "/payment-method",
          `/payment-method/${viewport}`
        ),
        req.url
      )
    );
  }
  if (req.nextUrl.pathname.startsWith("/c")) {
    return NextResponse.rewrite(
      new URL(req.nextUrl.pathname.replace("/c", `/c/${viewport}`), req.url)
    );
  }
  if (req.nextUrl.pathname.startsWith("/all-flash-deals")) {
    return NextResponse.rewrite(
      new URL(
        req.nextUrl.pathname.replace(
          "/all-flash-deals",
          `/all-flash-deals/${viewport}`
        ),
        req.url
      )
    );
  }
  if (req.nextUrl.pathname.startsWith("/information")) {
    return NextResponse.rewrite(
      new URL(
        req.nextUrl.pathname.replace(
          "/information",
          `/information/${viewport}`
        ),
        req.url
      )
    );
  }
  if (req.nextUrl.pathname.startsWith("/payment")) {
    return NextResponse.rewrite(
      new URL(
        req.nextUrl.pathname.replace(
          "/payment",
          `/payment/${viewport}`
        ),
        req.url
      )
    );
  }
  return NextResponse.rewrite(new URL(`/404/${viewport}`, req.url));
}
