"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Container from "@/components/modules/Container";
import {
  useRegisterUserMutation,
  useLoginMutation,
} from "@/redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/auth/authSlice";

export default function SignUp() {
  const router = useRouter();
  const dispatch = useDispatch();

  // RTK Query Mutations
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [login] = useLoginMutation();

  // Local State for errors and form
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    // 1. Validation: Password must be less than 6 characters
    if (password.length >= 6) {
      setError("Password is too long! Must be less than 6 characters.");
      return;
    }

    // 2. Capitalize first letter of Name
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

    const userInfo = {
      name: formattedName,
      email: email.toLowerCase(),
      role: "user",
    };

    try {
      // 3. Send to Backend
      const res = await registerUser(userInfo).unwrap();

      // 4. Check if Backend rejected based on existing email
      // (Your express code returns { message: "user already exists" })
      if (res.message === "user already exists") {
        setError("This email is already registered. Please use another.");
        return;
      }

      // 5. If successful, get JWT and login
      const tokenRes = await login({ email: userInfo.email }).unwrap();
      dispatch(setUser({ user: userInfo, token: tokenRes.token }));

      router.push("/admin"); // Or wherever you want them to go
    } catch (err) {
      setError("Something went wrong. Please try again.");
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
              alt="Auth Image"
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
              Create an account
            </h1>
            <p className="text-black mb-12">Enter your details below</p>

            {/* Error Message Display */}
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md mb-6 text-sm border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleRegister} className="flex flex-col gap-10">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-1 bg-transparent text-black focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-1 bg-transparent text-black focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="password"
                name="password"
                required
                placeholder="Password (less than 6 chars)"
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-1 bg-transparent text-black focus:outline-none focus:border-black transition-colors"
              />

              <div className="flex flex-col gap-4 mt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-600 text-white py-2 rounded-sm font-medium hover:bg-emerald-700 transition-colors disabled:bg-gray-400"
                >
                  {isLoading ? "Creating..." : "Create Account"}
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-4 mt-8">
              <span className="text-gray-600">Already have account?</span>
              <Link
                href="/signin"
                className="text-black font-medium border-b border-black pb-px hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
