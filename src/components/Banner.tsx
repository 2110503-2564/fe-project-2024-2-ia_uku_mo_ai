'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Banner() {
    const { data: session } = useSession()

    return (
        <div>
            <Image 
                src="/banner/1.png" 
                alt="Banner Image" 
                width={1200} 
                height={400} 
                layout="responsive"
                priority 
            />
        </div>
    );
}
