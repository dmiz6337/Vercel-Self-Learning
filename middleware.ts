import { withAuth } from "next-auth/middleware";

//Enforcing users to login before entry
export default withAuth({
  pages: {
    signIn: '/', // redirect to home page if not signed in
  },
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|$).*)"], // protect all routes except homepage and api routes
};