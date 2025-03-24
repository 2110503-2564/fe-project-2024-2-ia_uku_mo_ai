'use client'
import { useSession } from "next-auth/react";
import TopMenuItem from "./TopMenuItem"; // Import your TopMenuItem component

export default function TopMenu() {
    const { data: session } = useSession();
    return (
        <div className="fixed top-0 left-0 right-0 bg-white z-30 border-t border-b border-gray-300 flex items-center justify-between px-4">
            <div className="flex items-center space-x-4">
                <span className="font-bold text-xl text-blue-500">JOB</span>
                <TopMenuItem pageRef="/" title="Home" />
                <TopMenuItem pageRef="/company" title="Booking/Company" />
            </div>
            <div className="flex items-center">
                {session ?
                    <div className="flex items-center space-x-4">
                        <TopMenuItem pageRef="/profile" title={session.user.data.name} />
                        <TopMenuItem pageRef="/api/auth/signout" title="Sign-Out" />
                    </div>
                    
                 : 
                    <TopMenuItem pageRef="/authchoice" title="Sign-In" />
                }
            {/* <button onClick={()=>console.log(session?.user.token)}>
                Log Session
            </button> */}
            </div>
        </div>
    );
}
