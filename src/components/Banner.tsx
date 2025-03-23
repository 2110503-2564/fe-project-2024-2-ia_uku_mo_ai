"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Banner() {
  const { data: session } = useSession();

  return (
    <div className="w-[100vw] h-[60vh] relative">
      <Image
        src="/banner/1.png"
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
      />
    </div>
  );
}
