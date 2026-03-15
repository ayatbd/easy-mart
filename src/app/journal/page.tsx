"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// --- Types ---
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  isFeatured?: boolean;
}

// --- Mock Data ---
const categories = ["All", "Tech", "Lifestyle", "Guides", "News"];

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Audio: Why Spatial Audio is Changing How We Listen",
    excerpt:
      "Dive deep into the mechanics of spatial audio and discover why industry leaders are calling it the biggest leap since stereo sound. Experience music like never before.",
    category: "Tech",
    date: "March 12, 2026",
    readTime: "5 min read",
    image: "/images/journal/image2.jpg",
    isFeatured: true,
  },
  {
    id: "2",
    title: "10 Essential Desk Setup Accessories for Maximum Productivity",
    excerpt:
      "From ergonomic chairs to minimalist mechanical keyboards, elevate your workspace with these carefully curated daily drivers.",
    category: "Guides",
    date: "March 10, 2026",
    readTime: "7 min read",
    image: "/images/journal/image5.jpg",
  },
  {
    id: "3",
    title: "Minimalism in Tech: Embracing the Clean Aesthetic",
    excerpt:
      "Why modern consumer electronics are moving away from sharp edges and RGB towards soft tones, matte finishes, and warm materials.",
    category: "Lifestyle",
    date: "March 05, 2026",
    readTime: "4 min read",
    image: "/images/journal/image4.jpg",
  },
  {
    id: "4",
    title: "How to Choose the Perfect Mechanical Keyboard",
    excerpt:
      "Linear, tactile, or clicky? A beginner's guide to understanding switches, keycaps, and form factors for your next typing tool.",
    category: "Guides",
    date: "February 28, 2026",
    readTime: "8 min read",
    image: "/images/journal/image3.jpg",
  },
  {
    id: "5",
    title: "AURA Spring Collection: The 2026 Lookbook",
    excerpt:
      "Explore the intersection of high fashion and wearable technology in our latest seasonal showcase.",
    category: "News",
    date: "February 22, 2026",
    readTime: "3 min read",
    image: "/images/journal/image6.jpg",
  },
  {
    id: "6",
    title: "Smart Home Ecosystems: Matter vs. The Rest",
    excerpt:
      "Breaking down the new smart home standard and what it means for the future of your connected devices.",
    category: "Tech",
    date: "February 15, 2026",
    readTime: "6 min read",
    image: "/images/journal/image7.jpg",
  },
];

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic
  const featuredPost = blogPosts.find((post) => post.isFeatured);
  const gridPosts = blogPosts
    .filter((post) => !post.isFeatured)
    .filter(
      (post) => activeCategory === "All" || post.category === activeCategory,
    );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          The AURA Journal
        </h1>
        <p className="text-gray-500 text-lg">
          Insights, guides, and stories from the intersection of technology,
          design, and modern lifestyle.
        </p>
      </div>

      {featuredPost && activeCategory === "All" && (
        <section className="mb-16">
          <Link href={`/journal/${featuredPost.id}`} className="group block">
            <div className="bg-gray-50 rounded-3xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-full lg:w-3/5 h-75 lg:h-112.5 relative overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                    Featured
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4 font-medium">
                  <span className="text-emerald-600">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-4 transition-all duration-300">
                  Read Article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      <section className="mb-12 flex items-center justify-start md:justify-center overflow-x-auto hide-scrollbar pb-2">
        <div className="flex gap-2 p-1 bg-gray-50 rounded-full border border-gray-100">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeCategory === category
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mb-24">
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {gridPosts.map((post) => (
              <Link
                key={post.id}
                href={`/journal/${post.id}`}
                className="group flex flex-col"
              >
                <div className="relative w-full h-60 rounded-3xl overflow-hidden mb-6 bg-gray-100 shadow-sm">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              No articles found
            </h2>
            <p className="text-gray-500">
              Check back later for new {activeCategory} posts.
            </p>
          </div>
        )}
      </section>

      <section className="bg-emerald-900 rounded-3xl p-8 sm:p-16 relative overflow-hidden text-center flex flex-col items-center">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay in the loop
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Get the latest articles, styling tips, and tech news delivered
            straight to your inbox. No spam, just good content.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-400 transition-colors shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
