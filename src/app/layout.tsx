import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOption";

import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Job Fair",
  description: "Register now",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nextAuthSession = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <ReduxProvider>
          <NextAuthProvider session={nextAuthSession}>
            <TopMenu />
            {children}
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
