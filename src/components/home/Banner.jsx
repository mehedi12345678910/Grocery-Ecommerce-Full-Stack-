import { fontBangla } from "@/app/layout";
import Link from "next/link";
import React from "react";
// Lucide icons gulo server side e jhamela kore, tai amra ekhane image ba simple CSS bebohar korte pari
// Tobe best practice holo icon gulo ke alada client component e niye asha.

const Banner = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#fafaf9] py-20">
      
      {/* Decorative Background - No Client JS needed */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-orange-50 rounded-full blur-[100px] opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge - Pure Tailwind, No JS */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className={fontBangla.className}>১০০% খাঁটি ও প্রাকৃতিক</span>
          </div>

          {/* Title - Static but Premium */}
          <h1 className={`${fontBangla.className} text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.1] mb-8`}>
            সেরা স্বাদের <span className="text-orange-600 italic">দেশি মসলা</span>
            <br />
            এখন আপনার <span className="text-primary">রান্নাঘরে</span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed mb-12">
            ক্ষেত থেকে বাছাইকৃত সেরা মরিচ ও হলুদের গুঁড়া। কোনো কৃত্রিম রঙ বা প্রিজারভেটিভ নেই। 
            বিশুদ্ধতার গ্যারান্টি দিচ্ছি আমরা। 🌿
          </p>

          {/* Buttons - Interaction chharao premium design */}
          <div className="flex flex-wrap gap-5 justify-center">
            <Link href={'/products'} className="px-10 py-5 bg-orange-600 text-white font-bold rounded-2xl shadow-lg hover:bg-orange-700 transition-colors duration-300">
              🛒 এখনই কিনুন
            </Link>

            <Link href={'contact'} className="px-10 py-5 bg-white text-gray-800 font-bold rounded-2xl border-2 border-gray-100 shadow-sm hover:border-orange-200 hover:bg-gray-50 transition-all">
              আমাদের গল্প
            </Link>
          </div>

          {/* Stats Section - Server Side Rendering */}
          <div className="mt-20 pt-10 border-t border-gray-200/60 flex items-center justify-center gap-12 md:gap-24">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-gray-900">১০+ বছর</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-2">সুনামের সাথে</p>
            </div>

            <div className="w-[1px] h-12 bg-gray-200 hidden md:block"></div>

            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-gray-900">১০০%</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-2">ভেজালমুক্ত</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;