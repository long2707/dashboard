import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email !== "admin123@gmail.com" && password !== "admin1234") {
          return null;
        }

        return { id: "1", name: "admin", email: "admin123@gmail.com" };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
