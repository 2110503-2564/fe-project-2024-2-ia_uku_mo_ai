'use client'
import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function AuthChoicePage() {
  const { data: session } = useSession();
  return (
    <main className="pt-36 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to Jobfair</h1>
      <p className="text-gray-600 mb-8">Please choose an option to continue:</p>
      <div className="space-x-4">
        {
          session ? (
            <div className='flex flex-col items-center'>
              <h1 className='px-4 py-2'>You have already log in.</h1>
              <Link href="/profile">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Your Profile
                </button>
              </Link>
            </div>
          ) : 
          <div className='flex space-x-4'>
            <Link href="/api/auth/signin">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Log in
              </button>
            </Link>
            <Link href="/authchoice/register">
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Register
              </button>
            </Link>
          </div>
        }
        
      </div>
    </main>
  );
}
