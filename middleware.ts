import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// 中间件路由授权
export default NextAuth(authConfig).auth;

// 中间件路由验证
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
