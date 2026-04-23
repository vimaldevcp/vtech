"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password, role: "user" }),
    });

    window.location.href = "/";
  };

  return (
    <div>
      <h1>User Login</h1>
      <input onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}