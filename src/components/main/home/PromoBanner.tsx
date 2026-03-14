"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/modules/Container";

const TimerCircle = ({ value, label }: { value: number; label: string }) => (
  <div className="w-18 h-18 sm:w-21.5 sm:h-21.5 bg-white rounded-full flex flex-col items-center justify-center text-black shadow-lg">
    <span className="text-base sm:text-lg font-bold leading-none mb-1">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-[10px] sm:text-xs font-medium leading-none">
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
        <div className="bg-black w-full rounded-none md:rounded-sm flex flex-col md:flex-row items-center justify-between px-6 py-12 md:p-14 lg:p-14 relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-start w-full md:w-1/2">
            <span className="text-[#00FF66] font-semibold text-sm md:text-base mb-6 md:mb-8">
              Categories
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold text-white leading-[1.2] tracking-wide mb-8">
              Enhance Your <br className="hidden sm:block" /> Music Experience
            </h2>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
              <TimerCircle value={timeLeft.hours} label="Hours" />
              <TimerCircle value={timeLeft.days} label="Days" />
              <TimerCircle value={timeLeft.minutes} label="Minutes" />
              <TimerCircle value={timeLeft.seconds} label="Seconds" />
            </div>

            <Link
              href="/buy"
              className="bg-[#00FF66] text-white px-10 py-2 rounded-sm font-medium text-base hover:bg-[#00E65C] transition-colors"
            >
              Buy Now!
            </Link>
          </div>

          <div className="relative w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 h-62.5 sm:w-87.5 sm:h-87.5 lg:w-112.5 lg:h-112.5 bg-[#D9D9D9] blur-[100px] sm:blur-[150px] opacity-20 rounded-full pointer-events-none z-0"></div>

            <div className="relative z-10 w-full max-w-125 lg:max-w-150 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/main/promoBanner/image.png"
                alt="JBL Boombox Speaker"
                width={600}
                height={420}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
