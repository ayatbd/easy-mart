"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Container from "@/components/modules/Container";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";

export default function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch();

  // RTK Query Mutation
  const [login, { isLoading }] = useLoginMutation();

  // Local state for form and errors
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when typing
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Reset error state

    try {
      // This will now FAIL if the backend returns 401
      const result = await login({
        email: formData.email,
        password: formData.password,
      }).unwrap();

      if (result?.token) {
        dispatch(
          setUser({
            user: result.user,
            token: result.token,
          }),
        );
        router.push("/");
      }
    } catch (err) {
      // This block will now catch the "Invalid password" or "User not found" errors
      const errorMessage =
        (err as any)?.data?.message || "Login failed. Check your credentials.";
      setError(errorMessage);
    }
  };

  return (
    <Container>
      <div className="w-full flex flex-col lg:flex-row items-center py-18 lg:py-32">
        {/* Left Side Image */}
        <div className="hidden lg:flex w-1/2 h-full bg-[#CBE4E8] items-center justify-end rounded-r-sm pr-10 overflow-hidden">
          <div className="w-full h-full max-w-200">
            <Image
              src="/images/auth/image1.png"
              alt="Shopping Cart and Phone"
              width={780}
              height={780}
              className="object-contain object-right"
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-10 lg:px-24">
          <div className="w-full max-w-100 flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-medium tracking-wide mb-4 text-black">
              Sign in to Easy Mart
            </h1>
            <p className="text-black mb-12">Enter your details below</p>

            {/* Show Error Message */}
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md mb-6 text-sm border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSignIn} className="flex flex-col gap-10">
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-1 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-1 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors"
              />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm text-slate-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    href="#"
                    className="text-emerald-600 hover:text-emerald-500 font-medium"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-2">
                <button
                  onClick={() => {
                    setFormData({
                      email: process.env.Demo_Email || "",
                      password: process.env.Demo_Password || "",
                    });
                  }}
                  type="submit"
                  disabled={isLoading}
                  className="underline text-emerald-600 hover:text-emerald-500 font-medium cursor-pointer"
                >
                  Demo Sign in as Admin
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-600 text-white py-2 rounded-sm font-medium hover:bg-emerald-700 transition-colors disabled:bg-gray-400"
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>

            <div className="mt-8 text-center lg:text-left">
              <p className="text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-black font-medium border-b border-black ml-1"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
