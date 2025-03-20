'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'


export default function Banner() {

    const { data : session } = useSession()

    return (
        <div className="relative w-full h-[90vh] p-1 relative block">
            <Image src='/img/cover.jpg' 
            layout='fill' 
            alt='cover' 
            className='fill object-cover brightness-50'
            />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-white text-5xl font-bold text-center mt-10'>Welcome to Online Job Fair</h1>
                <p className="text-lg text-gray-300 text-center">The virtual job fair where you can meet potential employers and learn about their companies.</p>
            </div>
            <button className='bg-white text-cyan-600 border border-cyan-600 rounded-lg p-2 absolute bottom-[10px] right-5 hover:bg-cyan-600 hover:text-white'
            onClick={()=>console.log(session)}>
                Log Session
            </button>
            <button className='bg-white text-cyan-600 border border-cyan-600 rounded-lg p-2 absolute bottom-[60px] right-5 hover:bg-cyan-600 hover:text-white'
            onClick={()=>console.log(session?.user?.data)}>
                Log User data
            </button>
        </div>
        
    );
}
