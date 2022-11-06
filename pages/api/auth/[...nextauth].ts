import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import clientPromise from '../../../lib/mongodb';
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID!,
      clientSecret: process.env.FACEBOOK_SECRET!,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile?.picture?.data?.url,
        };
      },
    }),
  ],

  adapter: MongoDBAdapter(clientPromise),

  session: {
    strategy: 'jwt',
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },

  pages: {
    signIn: '/auth/signin',
    newUser: '/auth/new-user',
  },

  callbacks: {
    async session({ session, token, user }) {
      session.user.id = token.sub!;
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;

      if (isAllowedToSignIn) {
        return isAllowedToSignIn;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async jwt({ token }) {
      token.userRole = 'admin';
      return token;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  debug: false,
};

export default NextAuth(authOptions);
