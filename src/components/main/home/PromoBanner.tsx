"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/modules/Container";

// --- Glassmorphic Timer Component ---
const TimerBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center w-18 h-18 sm:w-21 sm:h-21 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl">
    <span className="text-2xl sm:text-3xl font-bold text-white leading-none mb-1">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-[10px] sm:text-xs font-medium text-emerald-100 uppercase tracking-widest">
      {label}
    </span>
  </div>
);

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  });

  // Countdown Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative w-full rounded-3xl overflow-hidden bg-linear-to-br from-gray-900 via-gray-900 to-emerald-900 flex flex-col md:flex-row items-center justify-between px-6 py-12 md:p-16 lg:p-20 shadow-2xl group border border-gray-800">
          <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none transform group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-start w-full md:w-1/2">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-max mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-50 font-bold text-xs sm:text-sm tracking-[0.15em] uppercase">
                Limited Time Offer
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6">
              Elevate Your <br className="hidden sm:block" /> Soundscape.
            </h2>

            <p className="text-gray-400 text-lg sm:text-xl mb-10 max-w-md leading-relaxed">
              Experience studio-quality audio with the new JBL Boombox 3. Grab
              yours before the flash sale ends.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-12">
              <TimerBlock value={timeLeft.days} label="Days" />
              <TimerBlock value={timeLeft.hours} label="Hours" />
              <TimerBlock value={timeLeft.minutes} label="Mins" />
              <TimerBlock value={timeLeft.seconds} label="Secs" />
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-3 bg-emerald-500 text-white px-10 py-2 rounded-full font-semibold text-lg hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
            >
              Claim Offer Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="relative w-full md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end z-10">
            <div className="relative w-full max-w-112.5 lg:max-w-137.5 transform group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-700 ease-out drop-shadow-2xl">
              <Image
                src="/images/main/promoBanner/img3.png"
                alt="JBL Boombox Speaker"
                width={600}
                height={420}
                className="w-full h-auto object-contain relative z-10"
                priority
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/60 blur-xl rounded-[100%]"></div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
