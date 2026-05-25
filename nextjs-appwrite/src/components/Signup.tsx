"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Signup = () => {
    const router = useRouter()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: ""
    })

    const [error, setError] = useState("")
    const {setAuthStatus} = useAuth()

    const create = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const userData = await appwriteService.createUserAccount(formData);
            if(userData) {
                setAuthStatus(true)
                router.push("/profile")
            }
        } catch (error: any) {
            setError(error.message)
        }
    }

  return (
    <div>
      <h1>Signup</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={create}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            required
          />
        </div>

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

        <button type="submit">Create account</button>
      </form>

      <p>
        Already have an account? <Link href="/login">Log in</Link>
      </p>
    </div>
  );
};

export default Signup;
