"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import requestPasswordReset from "@/libs/requestPasswordReset";

export default function resetPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for reset password logic
    requestPasswordReset(email);
    alert("Email has been sent to " +  email);
    // Optionally navigate to another page
    // router.push("/some-page");
  };

  return (
    <main className="pt-24 flex flex-col items-center bg-gray-100 h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80 flex flex-col"
      >
        <h1 className="text-xl font-bold mb-4">Reset Password</h1>
        <label htmlFor="email" className="mb-2 font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded mb-4"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
