"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Login = () => {
    const router = useRouter()
    const {setAuthStatus} = useAuth()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState("")

    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const session = await appwriteService.login(formData);
            if(session) {
                setAuthStatus(true)
                router.push("/profile")
            }
        } catch (error: any) {
            setError(error.message)
        }
    }

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={login}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
            required
          />
        </div>

        <button type="submit">Log in</button>
      </form>

      <p>
        Don't have an account? <Link href="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
