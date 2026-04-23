"use client";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password, role: "admin" }),
    });

    if (res.ok) {
      window.location.href = "/admin/dashboard";
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <div className="p-8 bg-gray-900 rounded-xl shadow-lg">
        <h1 className="text-2xl mb-4">Admin Login</h1>
        <input
          className="p-2 mb-2 w-full text-black"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="p-2 mb-4 w-full text-black"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-white text-black px-4 py-2 w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
}