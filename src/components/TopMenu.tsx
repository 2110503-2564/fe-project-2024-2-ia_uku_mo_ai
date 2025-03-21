'use client'
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function TopMenu() {
    const { data: session } = useSession()
    return (
        <div className="fixed top-0 left-0 right-0 h-[50px] bg-white z-30 border-t border-b border-gray-300 flex items-center justify-between px-4">
            <div className="flex items-center space-x-4">
                <span className="font-bold text-xl text-blue-500">JOB</span>
                <Link href="/" className="px-3 py-1 flex items-center hover:bg-gray-100 transition">
                    Home
                </Link>
                <Link href="/booking" className="px-3 py-1 flex items-center hover:bg-gray-100 transition">
                    Reservation
                </Link>
                <Link href="/company" className="px-3 py-1 flex items-center hover:bg-gray-100 transition">
                    Company
                </Link>
            </div>
            <div className="flex items-center">
                {session ?
                    <Link href="/profile" className="ml-4 px-3 py-1 flex items-center hover:bg-gray-100 transition">
                        {session.user.data.name}
                    </Link>
                 : 
                    
                    <Link href="/authchoice" className="ml-4 px-3 py-1 flex items-center hover:bg-gray-100 transition">
                        Sign-In {session}
                    </Link>
                }
            </div>
        </div>
    );
}
