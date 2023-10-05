import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import nextAuth, { User, Account } from "next-auth";
import { getSession, signIn } from "next-auth/react";
import { setCookie } from 'cookies-next';
import axios from "axios";

interface token {
  accessToken: string;
}

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const res = await fetch(`${process.env.BACKEND_ENDPOINT_DEV}/auth/login-email`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === "google") {
        const res = await axios
          .post(`${process.env.BACKEND_ENDPOINT_DEV}/auth/login-google`, {
            credential: account.id_token,
          })
          .catch((err) => {
            console.log(err);
          });
        token.accessToken = res?.data.accessToken
      }
      return token
    },
    async session({ session, token}) {
      session.accessToken = token.accessToken as string
      return session
    }
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
