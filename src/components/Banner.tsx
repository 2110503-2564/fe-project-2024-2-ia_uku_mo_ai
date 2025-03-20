'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Banner() {

    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const { data : session } = useSession()

    return (
        <div className="relative w-screen h-[60vh] p-1 relative block" onClick={()=>setIndex((index+1)%covers.length)}>
            <button className='bg-white text-cyan-600 border border-cyan-600 rounded-lg p-2 absolute bottom-[10px] right-5 hover:bg-cyan-600 hover:text-white'
            onClick={()=>console.log(session)}>
                Log Session
            </button>
            <button className='bg-white text-cyan-600 border border-cyan-600 rounded-lg p-2 absolute bottom-[60px] right-5 hover:bg-cyan-600 hover:text-white'
            onClick={()=>console.log(session?.user?.data)}>
                Log User data
            </button>
            {
               session && session.user?.data.name ? (
                <div className="z-30 absolute top-20 right-10 text-lg text-cyan-800 border border-cyan-800 bg-white p-2 rounded-lg">
                    Welcome {session.user.data.name}
                </div>
                ) : null
            }
        </div>
        
    );
}
