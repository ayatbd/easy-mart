import Container from "@/components/modules/Container";
import React from "react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: "1",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 16H6.5C5.67157 16 5 15.3284 5 14.5V8.5C5 7.67157 5.67157 7 6.5 7H14.5C15.3284 7 16 7.67157 16 8.5V16H14"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 9H19.5L22 12.5V16H19.5"
        />
        <circle cx="10" cy="16" r="2" />
        <circle cx="17.5" cy="16" r="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 9H4M1 11H3M2 13H4"
        />
      </svg>
    ),
  },
  {
    id: "2",
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 15v-5a9 9 0 0 1 18 0v5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 15a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 15a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 19c-1 1.5-3.5 2.5-6 1.5"
        />
      </svg>
    ),
  },
  {
    id: "3",
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <Container>
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[88px] h-[88px] bg-gray-300 rounded-full flex items-center justify-center mb-6">
                <div className="w-[58px] h-[58px] bg-black rounded-full flex items-center justify-center text-white">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-[20px] font-bold text-black tracking-wider mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-800 font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
