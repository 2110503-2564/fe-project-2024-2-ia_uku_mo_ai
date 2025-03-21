'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import userRegister from "@/libs/userRegister";

export default function ChoicePage() {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await userRegister(
      formData.name,
      formData.tel,
      formData.email,
      formData.password,
      "user"
    );
    if (response.success) {
      router.push("/api/auth/signin");
    } else {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <main className="pt-24 flex flex-col items-center bg-gray-100 h-screen">
      <div className="bg-white rounded w-1/4 shadow-lg">
        <h1 className="p-2 pt-6 text-center">Registration Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="tel"
          name="tel"
          placeholder="Telephone"
          value={formData.tel}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Register
        </button>
      </form>
      </div>
      
    </main>
  );
}
