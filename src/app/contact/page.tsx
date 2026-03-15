"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-500 text-lg">
          We’d love to hear from you. Our friendly team is always here to chat
          and help you with any questions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="group flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.959l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Call To Us
                </h2>
              </div>
              <div className="text-gray-600 space-y-2 pl-16">
                <p>We are available 24/7, 7 days a week.</p>
                <p className="font-medium text-gray-900">+88015-88888-9999</p>
              </div>
            </div>

            <hr className="my-8 border-gray-100" />

            <div className="group flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Write To Us
                </h2>
              </div>
              <div className="text-gray-600 space-y-2 pl-16">
                <p>
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="font-medium text-gray-900">
                  customer@auramart.com
                </p>
                <p className="font-medium text-gray-900">
                  support@auramart.com
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-100" />

            <div className="group flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Location
                </h2>
              </div>
              <div className="text-gray-600 space-y-2 pl-16">
                <p>
                  111 Bijoy Sarani, Dhaka, <br />
                  DH 1515, Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1234 567890"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-10 py-2 rounded-full font-semibold hover:bg-emerald-700 hover:shadow-lg transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Send Message
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
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
