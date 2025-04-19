import { withAuth } from "next-auth/middleware";

//Enforcing users to login before entry
export default withAuth({
  pages: {
    signIn: '/', // redirect to home page if not signed in
  },
});

export const config = {
    matcher: ["/((?!register|login|$).*)"], // excludes /, /login, /register
};