import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt(token: any, user: any) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session(session: any, token: any): Promise<any> {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }: any): any {
      const user = auth?.user;
      const isTodoPage = request.nextUrl?.pathname.startsWith("/addtodo");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      if (isTodoPage && user?.isAdmin) {
        return false;
      }
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      return true;
    },
  },
};
