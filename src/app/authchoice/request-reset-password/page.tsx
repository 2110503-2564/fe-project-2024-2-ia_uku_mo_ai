"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import requestPasswordReset from "@/libs/requestPasswordReset";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for reset password logic
    requestPasswordReset(email);
    alert("Email has been sent to " + email);
    // Optionally navigate to another page
    // router.push("/some-page");
  };

  return (
    <main className="pt-24 flex flex-col items-center bg-gradient-to-r from-zinc-50 to-slate-600 h-screen ">
      <div className="bg-white p-5 rounded-xl shadow-md w-full max-w-[430px]">
        <h1 className="text-2xl font-semibold text-center -mb-3 ">
          Forgot Password
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-4 p-4 "
        >
          <label htmlFor="email" className="text-base -mb-2">
            Enter your email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email address"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white -mt-1 py-2 rounded hover:bg-blue-600 w-[350px]"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
