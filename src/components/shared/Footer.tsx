import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/modules/Container";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-6">
      <Container>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold tracking-wide mb-2">
                Easy Mart
              </h3>
              <h4 className="text-xl font-medium">Subscribe</h4>
              <p className="text-base font-light">
                Get 10% off your first order
              </p>
              <div className="relative flex items-center border border-white rounded mt-2 w-max lg:w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent text-white placeholder-gray-400 px-4 py-2.5 outline-none w-full text-sm"
                />
                <button className="pr-4 hover:text-gray-300 transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.91196 11.9998H3.99996L2.02296 4.1348C2.0103 4.0891 2.00259 4.04216 1.99996 3.9948C1.97796 3.2738 2.77196 2.7738 3.45996 3.1038L22 11.9998L3.45996 20.8958C2.77996 21.2228 1.99596 20.7368 1.99996 20.0288C2.00196 19.9678 2.01396 19.9078 2.03296 19.8508L3.49996 14.9998"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Support</h3>
              <p className="text-base font-light leading-relaxed">
                111 Bijoy sarani, Dhaka, <br />
                DH 1515, Bangladesh.
              </p>
              <p className="text-base font-light">exclusive@gmail.com</p>
              <p className="text-base font-light">+88015-88888-9999</p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Account</h3>
              <Link
                href="/account"
                className="text-base font-light hover:underline w-max"
              >
                My Account
              </Link>
              <Link
                href="/login"
                className="text-base font-light hover:underline w-max"
              >
                Login / Register
              </Link>
              <Link
                href="/cart"
                className="text-base font-light hover:underline w-max"
              >
                Cart
              </Link>
              <Link
                href="/wishlist"
                className="text-base font-light hover:underline w-max"
              >
                Wishlist
              </Link>
              <Link
                href="/shop"
                className="text-base font-light hover:underline w-max"
              >
                Shop
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Quick Link</h3>
              <Link
                href="/privacy"
                className="text-base font-light hover:underline w-max"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-base font-light hover:underline w-max"
              >
                Terms Of Use
              </Link>
              <Link
                href="/faq"
                className="text-base font-light hover:underline w-max"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-base font-light hover:underline w-max"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium mb-2">Download App</h3>
              <p className="text-xs text-gray-400 font-medium">
                Save $3 with App New User Only
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-[80px] h-[80px] relative">
                  <Image
                    src="/qr-code.png"
                    alt="QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-[110px] h-[34px] relative cursor-pointer hover:opacity-80 transition-opacity">
                    <Image
                      src="/google-play.png"
                      alt="Google Play"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="w-[110px] h-[34px] relative cursor-pointer hover:opacity-80 transition-opacity">
                    <Image
                      src="/app-store.png"
                      alt="App Store"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4">
                <Link
                  href="#"
                  className="hover:text-gray-400 transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-400 transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 5.8999C21.26 6.2299 20.45 6.4499 19.6 6.5499C20.48 6.0199 21.15 5.1899 21.46 4.1899C20.66 4.6599 19.78 5.0099 18.84 5.1899C18.09 4.3899 17.02 3.8999 15.84 3.8999C13.56 3.8999 11.72 5.7399 11.72 8.0199C11.72 8.3399 11.75 8.6499 11.82 8.9499C8.39 8.7799 5.35 7.1299 3.32 4.6899C2.97 5.2999 2.77 6.0099 2.77 6.7599C2.77 8.1899 3.49 9.4599 4.6 10.1999C3.93 10.1799 3.29 9.9999 2.73 9.6899V9.7399C2.73 11.7399 4.15 13.3999 6.04 13.7799C5.7 13.8699 5.34 13.9199 4.97 13.9199C4.7 13.9199 4.45 13.8899 4.19 13.8399C4.72 15.4799 6.24 16.6799 8.05 16.7099C6.63 17.8199 4.85 18.4799 2.92 18.4799C2.59 18.4799 2.27 18.4599 1.95 18.4199C3.78 19.5999 5.95 20.2799 8.28 20.2799C15.88 20.2799 20.03 13.9899 20.03 8.5299C20.03 8.3499 20.03 8.1799 20.02 7.9999C20.83 7.4099 21.52 6.7099 22 5.8999Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-400 transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2.16296C15.204 2.16296 15.584 2.17596 16.85 2.23396C18.026 2.28796 18.673 2.49396 19.106 2.66196C19.681 2.88496 20.091 3.16196 20.521 3.59196C20.951 4.02196 21.228 4.43196 21.451 5.00696C21.618 5.43996 21.825 6.08696 21.879 7.26296C21.936 8.52896 21.949 8.90896 21.949 12.113C21.949 15.317 21.936 15.697 21.879 16.963C21.825 18.139 21.618 18.786 21.451 19.219C21.228 19.794 20.951 20.204 20.521 20.634C20.091 21.064 19.681 21.341 19.106 21.564C18.673 21.731 18.026 21.938 16.85 21.992C15.584 22.049 15.204 22.062 12 22.062C8.796 22.062 8.416 22.049 7.15 21.992C5.974 21.938 5.327 21.731 4.894 21.564C4.319 21.341 3.909 21.064 3.479 20.634C3.049 20.204 2.772 19.794 2.549 19.219C2.382 18.786 2.175 18.139 2.121 16.963C2.064 15.697 2.051 15.317 2.051 12.113C2.051 8.90896 2.064 8.52896 2.121 7.26296C2.175 6.08696 2.382 5.43996 2.549 5.00696C2.772 4.43196 3.049 4.02196 3.479 3.59196C3.909 3.16196 4.319 2.88496 4.894 2.66196C5.327 2.49396 5.974 2.28796 7.15 2.23396C8.416 2.17596 8.796 2.16296 12 2.16296ZM12 7.19996C9.338 7.19996 7.18 9.35796 7.18 12.02C7.18 14.682 9.338 16.84 12 16.84C14.662 16.84 16.82 14.682 16.82 12.02C16.82 9.35796 14.662 7.19996 12 7.19996ZM12 15.068C10.317 15.068 8.952 13.703 8.952 12.02C8.952 10.337 10.317 8.97196 12 8.97196C13.683 8.97196 15.048 10.337 15.048 12.02C15.048 13.703 13.683 15.068 12 15.068ZM17.202 5.61796C17.202 6.27396 16.671 6.80496 16.015 6.80496C15.359 6.80496 14.828 6.27396 14.828 5.61796C14.828 4.96196 15.359 4.43096 16.015 4.43096C16.671 4.43096 17.202 4.96196 17.202 5.61796Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-400 transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8.338 9.333H6V18H8.338V9.333ZM7.169 8.167C6.398 8.167 5.772 7.541 5.772 6.77C5.772 5.999 6.398 5.373 7.169 5.373C7.94 5.373 8.566 5.999 8.566 6.77C8.566 7.541 7.94 8.167 7.169 8.167ZM18.001 18H15.663V13.804C15.663 12.804 15.645 11.516 14.269 11.516C12.875 11.516 12.661 12.603 12.661 13.731V18H10.322V9.333H12.569V10.518H12.601C12.913 9.927 13.676 9.302 14.819 9.302C17.192 9.302 18.001 10.864 18.001 12.894V18Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-[#141414] mt-16 pt-6 pb-2 text-center text-[#3D3D3D] flex items-center justify-center gap-2 font-medium">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 15.5C14.152 16.4251 12.8806 16.7329 11.7371 16.3262C10.5936 15.9196 9.77884 14.8726 9.64571 13.642C9.51259 12.4113 10.0827 11.2133 11.107 10.5707C12.1313 9.92813 13.4308 9.95389 14.436 10.637"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Copyright Easy Mart 2026. All right reserved</span>
      </div>
    </footer>
  );
}
