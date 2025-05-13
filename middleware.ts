import { withAuth } from "next-auth/middleware";

//Enforcing users to login before entry
export default withAuth({
  pages: {
    signIn: '/', // redirect to home page if not signed in
  },
});

export const config = {
    // Only allow homepage and NextAuth sign-in page to be accessible without authentication
    matcher: [
      // Exclude /cron/daily-payment from authentication
      "/((?!api/auth|api/auth/.*|_next/static|_next/image|statics|favicon.ico|cron/daily-payment).*)"
    ]
};