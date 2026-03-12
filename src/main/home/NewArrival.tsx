import React from "react";
import Image from "next/image";
import Link from "next/link";
import Label from "@/components/modules/Label";

export default function NewArrival() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <Label>Featured</Label>
        <h2 className="text-3xl md:text-4xl font-bold text-black tracking-wider">
          New Arrival
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:h-[600px]">
        {/* Left Column: PlayStation 5 */}
        <div className="bg-black rounded-md relative flex-1 min-h-[400px] lg:min-h-full overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 w-full h-full flex items-end justify-center lg:justify-end">
            <div className="relative w-full h-[90%] md:h-[95%] md:w-[90%]">
              <Image
                src="/ps5.png"
                alt="PlayStation 5"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0"></div>

          <div className="absolute bottom-8 left-8 flex flex-col gap-3 z-10 w-[80%] md:max-w-[280px]">
            <h3 className="text-2xl font-semibold text-white tracking-wide">
              PlayStation 5
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              href="/shop"
              className="text-white font-medium underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors w-max mt-1"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-8 h-full">
          {/* Top Row: Women's Collections */}
          <div className="bg-[#0D0D0D] rounded-md relative flex-1 min-h-[250px] lg:min-h-[284px] overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 w-full h-full flex justify-end">
              <div className="relative w-[65%] sm:w-[55%] h-full">
                <Image
                  src="/women-collection.png"
                  alt="Women's Collections"
                  fill
                  className="object-cover object-right sm:object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent sm:hidden z-0"></div>

            <div className="absolute bottom-8 left-8 flex flex-col gap-3 z-10 max-w-[280px]">
              <h3 className="text-2xl font-semibold text-white tracking-wide">
                Women&apos;s Collections
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Featured woman collections that give you another vibe.
              </p>
              <Link
                href="/shop"
                className="text-white font-medium underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors w-max mt-1"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Bottom Row: Split */}
          <div className="flex flex-col sm:flex-row gap-8 flex-1 min-h-[284px]">
            {/* Speakers */}
            <div className="bg-[#0D0D0D] rounded-md relative flex-1 min-h-[250px] overflow-hidden group cursor-pointer flex items-center justify-center">
              <div className="relative w-[70%] h-[70%]">
                <Image
                  src="/speakers.png"
                  alt="Speakers"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-0"></div>

              <div className="absolute bottom-6 left-6 flex flex-col gap-2 z-10 max-w-[200px]">
                <h3 className="text-xl font-semibold text-white tracking-wide">
                  Speakers
                </h3>
                <p className="text-xs text-gray-300 font-light">
                  Amazon wireless speakers
                </p>
                <Link
                  href="/shop"
                  className="text-white font-medium underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors w-max mt-1 text-sm"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Perfume */}
            <div className="bg-[#0D0D0D] rounded-md relative flex-1 min-h-[250px] overflow-hidden group cursor-pointer flex items-center justify-center">
              <div className="relative w-[70%] h-[70%]">
                <Image
                  src="/perfume.png"
                  alt="Perfume"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-0"></div>

              <div className="absolute bottom-6 left-6 flex flex-col gap-2 z-10 max-w-[200px]">
                <h3 className="text-xl font-semibold text-white tracking-wide">
                  Perfume
                </h3>
                <p className="text-xs text-gray-300 font-light">
                  GUCCI INTENSE OUD EDP
                </p>
                <Link
                  href="/shop"
                  className="text-white font-medium underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors w-max mt-1 text-sm"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
