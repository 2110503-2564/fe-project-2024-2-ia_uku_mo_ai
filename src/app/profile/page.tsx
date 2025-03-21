'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <main className="pt-12">
      {/* TopMenu height is 50px */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-6">Profile</h1>
        {session ? (
          <div className="bg-white shadow-md rounded-lg p-6 inline-block text-left">
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Name:</span> {session.user.data.name}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Email:</span> {session.user.data.email}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Tel:</span> {session.user.data.tel}
            </p>
            <Link
              href="/api/auth/signout"
              className="mt-4 inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Sign Out
            </Link>
          </div>
        ) : (
          <p className="text-lg text-gray-500">You are not signed in</p>
        )}
      </div>
    </main>
  );
}
