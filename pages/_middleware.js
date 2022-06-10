import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const secrete = process.env.APP_SECRETE;

export default function middleware(req) {
  const { cookies } = req;

  const jwt = cookies.hash;

  const url = req.url;

  if (url.includes("/dashbord")) {
    if (jwt === undefined) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      verify(jwt, secrete);
      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  if (url.includes("/login")) {
    if (jwt) {
      try {
        verify(jwt, secrete);
        return NextResponse.redirect(new URL("/dashbord", req.url));
      } catch (e) {}
    }
  }

  if (url.includes("/signup")) {
    if (jwt) {
      try {
        verify(jwt, secrete);
        return NextResponse.redirect("/dashbord");
      } catch (e) {}
    }
  }

  return NextResponse.next();
}
