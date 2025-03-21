import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    data: {
      _id: string;
      name: string;
      tel: string;
      email: string;
      role: string;
      createdAt: string;
      __v: number;
    },
    token: string;
  }

  interface Session {
    user: User;
  }
}
