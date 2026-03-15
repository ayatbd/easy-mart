import React from "react";
import Image from "next/image";
import Link from "next/link";

// --- Types ---
interface Stat {
  id: string;
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

// --- Mock Data ---
const stats: Stat[] = [
  {
    id: "1",
    value: "10.5k",
    label: "Sellers active on our site",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
        />
      </svg>
    ),
  },
  {
    id: "2",
    value: "33k",
    label: "Monthly Product Sales",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "3",
    value: "45.5k",
    label: "Customers active globally",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    id: "4",
    value: "25k",
    label: "Annual gross sales on site",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
];

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "/images/about/image2.jpg",
  },
  {
    id: "2",
    name: "Emma Watson",
    role: "Managing Director",
    image: "/images/about/image3.jpg",
  },
  {
    id: "3",
    name: "Will Smith",
    role: "Product Designer",
    image: "/images/about/image4.jpg",
  },
];

export default function About() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-8">
              Our Story
            </h1>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Launched in 2015, AURA is South Asia&apos;s premier online
                shopping mall with an active presence in Bangladesh. Supported
                by a wide range of tailored marketing, data, and service
                solutions, AURA has 10,500 sellers and 300 brands and serves 3
                million customers across the region.
              </p>
              <p>
                AURA has more than 1 Million products to offer, growing at a
                very fast pace. AURA offers a diverse assortment in categories
                ranging from consumer electronics to fashion, luxury goods, and
                everyday essentials.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative h-100 sm:h-125 lg:h-150 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about/image1.jpg"
              alt="People shopping and smiling"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group flex flex-col items-center justify-center p-8 bg-white border border-gray-200 rounded-3xl hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300 cursor-default shadow-sm hover:shadow-xl"
            >
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600 text-center group-hover:text-emerald-50 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16 tracking-tight">
          Meet Our Leadership
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col group">
              <div className="relative w-full h-100 bg-gray-100 rounded-3xl overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-500 mb-4">{member.role}</p>

              <div className="flex items-center gap-4 text-gray-900">
                <Link
                  href="#"
                  className="hover:text-emerald-600 transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 4.00986C21.25 4.33986 20.45 4.54986 19.6 4.65986C20.47 4.12986 21.14 3.30986 21.46 2.30986C20.66 2.77986 19.78 3.12986 18.84 3.31986C18.09 2.51986 17.02 2.02986 15.84 2.02986C13.56 2.02986 11.72 3.86986 11.72 6.14986C11.72 6.46986 11.75 6.78986 11.82 7.08986C8.39 6.91986 5.35 5.26986 3.32 2.82986C2.97 3.43986 2.77 4.14986 2.77 4.89986C2.77 6.32986 3.49 7.59986 4.6 8.33986C3.93 8.31986 3.29 8.13986 2.73 7.82986V7.87986C2.73 9.87986 4.15 11.5399 6.04 11.9199C5.7 12.0099 5.34 12.0599 4.97 12.0599C4.7 12.0599 4.45 12.0299 4.19 11.9799C4.72 13.6199 6.24 14.8199 8.05 14.8499C6.63 15.9599 4.85 16.6199 2.92 16.6199C2.59 16.6199 2.27 16.5999 1.95 16.5599C3.78 17.7399 5.95 18.4199 8.28 18.4199C15.88 18.4199 20.03 12.1299 20.03 6.66986C20.03 6.48986 20.03 6.31986 20.02 6.13986C20.83 5.54986 21.52 4.84986 22 4.00986Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="hover:text-emerald-600 transition-colors"
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
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM7.999 18.5H5.4V9.5H7.999V18.5ZM6.7 8.3C5.8 8.3 5.1 7.6 5.1 6.7C5.1 5.8 5.8 5.1 6.7 5.1C7.6 5.1 8.3 5.8 8.3 6.7C8.3 7.6 7.6 8.3 6.7 8.3ZM18.6 18.5H16V13.8C16 12.5 15.4 11.9 14.4 11.9C13.2 11.9 12.5 12.7 12.5 14V18.5H9.9V9.5H12.4V10.8C13 9.8 14 9.3 15.3 9.3C17.3 9.3 18.6 10.6 18.6 13V18.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
