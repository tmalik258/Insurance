import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: {
          label: "Username or Email",
          type: "text",
          placeholder: "jhonsmith@example.com or username",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Credentials received:", credentials);
        if (!credentials) {
          return null;
        }

        const { identifier, password } = credentials;
        try {
          // Determine if identifier is an email or username
          const res = await fetch(
              `${process.env.BACKEND_URL}/auth/login/`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username: identifier,
                  password: password,
                }),
              }
            );

          if (!res.ok) {
            throw new Error("Authentication failed");
          }

          const data = await res.json();
          console.log("Data received:", data);

          if (data && data?.access) {
            return {
              id: data.user.id,
              email: data.user.email, // Assuming the backend returns user data
            };
          }
          return null;
        } catch (error) {
          console.error("Error during authentication:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    maxAge: 60 * 60, // 1 Hour
    updateAge: 60 * 60, // 1 Hour
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
