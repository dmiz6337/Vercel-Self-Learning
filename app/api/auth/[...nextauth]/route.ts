import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    })
  ],
  pages: {
    signIn: '/api/auth/signin',
    signOut: '/api/auth/signout',
    error: '/api/auth/error',
    verifyRequest: '/api/auth/verify-request',
    newUser: '/api/auth/new-user'
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('Sign in attempt:', { user, account, profile });
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log('Redirect attempt:', { url, baseUrl });
      if (url.startsWith(baseUrl)) return url;
      else if (url.startsWith('/')) return new URL(url, baseUrl).toString();
      return baseUrl;
    },
    async session({ session, user, token }) {
      console.log('Session callback:', { session, user, token });
      if (session?.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
    async jwt({ token, user, account, profile }) {
      console.log('JWT callback:', { token, user, account, profile });
      return token;
    }
  },
  events: {
    async signIn(message) { console.log('User signed in:', message) },
    async signOut(message) { console.log('User signed out:', message) }
  },
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60 // 24 hours
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

export const runtime = "nodejs";
