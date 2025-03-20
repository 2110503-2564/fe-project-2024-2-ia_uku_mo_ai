import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOption";
import { Link } from "@mui/material"

export default async function TopMenu() {
    const session = await getServerSession(authOptions);
    return (
        <div className="fixed top-0 left-0 right-0 h-[50px] bg-white z-30 border-t border-b border-gray-300 flex items-center justify-end px-4 space-x-4">
            {
                    session ?
                    <Link href="/api/auth/signout" className="ml-4 px-3 py-1 h-[36px] flex items-center hover:bg-gray-100 transition">
                        <div>Sign Out</div>
                    </Link> :
                    <Link href="/api/auth/signin" className="ml-4 px-3 py-1 h-[36px] flex items-center hover:bg-gray-100 transition">
                        <div>Sign-In</div>
                    </Link>
            }
        </div>
    );
}
