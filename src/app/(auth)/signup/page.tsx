import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row items-center pt-10 pb-20 lg:py-0">
      <div className="hidden lg:flex w-1/2 bg-[#CBE4E8] h-[800px] items-center justify-end rounded-r-sm pr-10 overflow-hidden relative">
        <div className="relative w-full h-full max-w-[800px]">
          <Image
            src="/signup-image.png"
            alt="Shopping Cart and Phone"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-10 lg:px-24">
        <div className="w-full max-w-[400px] flex flex-col">
          <h1 className="text-3xl sm:text-4xl font-medium tracking-wide mb-4 text-black">
            Create an account
          </h1>
          <p className="text-black mb-12">Enter your details below</p>

          <form className="flex flex-col gap-10">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 py-1.5 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors"
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full border-b border-gray-300 py-1.5 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-300 py-1.5 bg-transparent text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors"
            />

            <div className="flex flex-col gap-4 mt-2">
              <button
                type="submit"
                className="w-full bg-[#DB4444] text-white py-4 rounded-sm font-medium hover:bg-[#c93d3d] transition-colors"
              >
                Create Account
              </button>

              <button
                type="button"
                className="w-full border border-gray-400 bg-white text-black py-4 rounded-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign up with Google
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="text-gray-600">Already have account?</span>
            <Link
              href="/login"
              className="text-black font-medium border-b border-black pb-[1px] hover:text-gray-600 hover:border-gray-600 transition-colors"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
