"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import resetPassword from "@/libs/resetPassword";

export default function ResetPasswordPage({
  params,
}: {
  params: { resetToken: string };
}) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      resetPassword(params.resetToken, newPassword);
      alert("Password reset successfully:" + newPassword);
      router.push("/api/auth/signin"); // Redirect to sign-in page
    } else {
      console.error("Passwords do not match");
    }
  };

  return (
    <main className="pt-24 flex flex-col items-center bg-gradient-to-r from-zinc-50 to-slate-600 h-screen">
      <div className="bg-white  p-5 rounded-xl shadow-md w-full max-w-[430px]">
        <h1 className="text-2xl font-semibold text-center -mb-1">
          Reset Password
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-3 p-4 w-full"
        >
          <div>
            <label
              htmlFor="newPassword"
              className=" text-gray-600 font-medium mb-[2px]"
            >
              New Password:
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              placeholder="Enter your password"
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className=" text-gray-600 font-medium mb-[2px]"
            >
              Confirm New Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white mt-1 py-[10px] rounded hover:bg-blue-600 w-full"
          >
            Reset Password
          </button>
        </form>
      </div>
    </main>
  );
}
