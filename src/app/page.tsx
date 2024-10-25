// src/app/page.tsx
"use client";

import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-hidden">
      <header className="w-full bg-white shadow-lg p-4 flex justify-between items-center transition duration-500 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-indigo-600">Perfume Shop</h1>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-indigo-600 transition duration-300">Home</Link>
          <Link href="/products" className="text-gray-700 hover:text-indigo-600 transition duration-300">Products</Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition duration-300">About</Link>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-600 animate-gradient-bg"></div>
        <div className="relative z-10 flex flex-col items-center bg-white bg-opacity-80 rounded-lg p-8 mt-16 shadow-lg transition-transform duration-500 transform hover:scale-105">
          <h2 className="text-4xl font-bold text-indigo-800">Discover Your Scent</h2>
          <p className="text-gray-700 mt-4">
            Explore our exclusive range of perfumes crafted just for you.
          </p>
          <Link href="/products" className="mt-6 bg-indigo-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-indigo-500 transition duration-300 transform hover:scale-105">
            Shop Now
          </Link>
        </div>

        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            <img src="https://images.pexels.com/photos/4164842/pexels-photo-4164842.jpeg" alt="Ocean Breeze Perfume" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-2">Ocean Breeze</h3>
            <p className="text-gray-500 text-lg">$29.99</p>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            <img src="https://images.pexels.com/photos/1679612/pexels-photo-1679612.jpeg" alt="Vanilla Sunset Perfume" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-2">Vanilla Sunset</h3>
            <p className="text-gray-500 text-lg">$34.99</p>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            <img src="https://images.pexels.com/photos/1775681/pexels-photo-1775681.jpeg" alt="Citrus Splash Perfume" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-2">Citrus Splash</h3>
            <p className="text-gray-500 text-lg">$24.99</p>
          </div>

          {/* Add more product cards as needed */}
        </section>
      </main>

      <footer className="w-full bg-white shadow-lg p-4 text-center mt-auto">
        <p className="text-gray-600">© 2024 Perfume Shop. All rights reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes gradient-bg {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-bg {
          animation: gradient-bg 15s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}
