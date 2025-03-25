"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import userRegister from "@/libs/userRegister";
import RegistrationFrom from "@/components/RegistrationFrom";

export default function ChoicePage() {
  return (
    <main className="pt-[50px] flex flex-col items-center bg-gray-100 h-screen">
      <div className="bg-gradient-to-r from-zinc-50 to-slate-600  p-5 flex flex-row items-center justify-end w-screen h-[100%] pr-[225px]">
        <div className="mx-auto mb-24 font-mono text-7xl ">
          <p>STEP INTO </p>A BRIGHTER FUTURE
        </div>
        <RegistrationFrom />
      </div>
    </main>
  );
}
