import { fontBangla } from "@/app/layout";
import React from "react";

const ContactPage = () => {
  return (
    <main className="bg-[#fafaf9] min-h-screen">
      {/* Header Section */}
      <section className="bg-[#1a1a1a] py-20 px-6 text-center relative overflow-hidden">
        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10">
          <h1 className={`${fontBangla.className} text-4xl md:text-6xl font-bold text-white mb-4`}>
            আমাদের সাথে <span className="text-orange-500">যোগাযোগ</span> করুন
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            আপনার যেকোনো প্রশ্ন, অভিযোগ বা পাইকারি অর্ডারের জন্য আমাদের মেসেজ দিন। আমরা দ্রুত উত্তর দেওয়ার চেষ্টা করি।
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 text-orange-600">
                📍
              </div>
              <h3 className="text-xl font-bold mb-2">ঠিকানা</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                গ্রাম: চুটচুটিয়া গছ  ,<br /> পঞ্চগড় , বাংলাদেশ।
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 text-orange-600">
                📞
              </div>
              <h3 className="text-xl font-bold mb-2">ফোন করুন</h3>
              <p className="text-gray-600 text-sm">+880 1326018868</p>
              <p className="text-gray-600 text-sm">+880 1717579744</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 text-orange-600">
                ✉️
              </div>
              <h3 className="text-xl font-bold mb-2">ইমেইল</h3>
              <p className="text-gray-600 text-sm">mithun@gamil.com</p>
              <p className="text-gray-600 text-sm">mehedi@spicestory.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
              <h2 className={`${fontBangla.className} text-3xl font-bold mb-8 text-gray-900`}>মেসেজ পাঠান</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">আপনার নাম</label>
                    <input 
                      type="text" 
                      placeholder="এখানে লিখুন..."
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">ইমেইল বা ফোন</label>
                    <input 
                      type="text" 
                      placeholder="যোগাযোগের মাধ্যম..."
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">বিষয়</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-orange-500 outline-none transition-all appearance-none cursor-pointer">
                    <option>অর্ডার সংক্রান্ত</option>
                    <option>পাইকারি ক্রয়</option>
                    <option>অভিযোগ</option>
                    <option>অন্যান্য</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">মেসেজ</label>
                  <textarea 
                    rows="5"
                    placeholder="আপনার কথা বিস্তারিত লিখুন..."
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full md:w-max px-12 py-5 bg-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-200 hover:bg-orange-700 hover:-translate-y-1 transition-all active:scale-95">
                  মেসেজ পাঠান 🚀
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Map Placeholder or Decoration */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="w-full h-80 bg-gray-200 rounded-[2.5rem] relative overflow-hidden flex items-center justify-center">
            {/* Tumi ekhane real Google Map iframe boshate paro */}
            <div className="text-center">
                <p className="text-gray-500 font-bold">Google Map Location</p>
                <p className="text-gray-400 text-xs mt-1 italic tracking-widest text-uppercase italic">Coming Soon</p>
            </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;