import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userLogIn from "@/libs/userLogin";
import getMe from "@/libs/getMe";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "text", placeholder: "Email" },
            password: { label: "Password", type: "password" },
          },
          async authorize(credentials) {
            if (!credentials) return null;
            const user = await userLogIn(credentials.email, credentials.password);
            if (user) {
              const res = await getMe(user.token);
              if(res) return { ...res, token: user.token };
            } else {
              throw new Error("Invalid login");
            }
          },
        }),
      ],
      session: {
        strategy: "jwt",
      },
      callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token = { ...token, ...user };
          }
          return token;
        },
        async session({ session, token }) {
          if (token) {
            session.user = token as any;
          }
          return session;
        },
        async redirect({ url, baseUrl }) {
          return url.startsWith(baseUrl) ? url : baseUrl + "/";
        }
      },
    };