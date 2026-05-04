"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// Next.js standard Lucide Icons bebohar kora hoyeche
import { Search, ArrowRight, Leaf, Flame, Sparkles, Mail } from "lucide-react";

export default function BlogPage() {
  const categories = ["All Spices", "Organic Powder", "Whole Spices", "Cooking Tips"];
  
  const blogs = [
    {
      id: 1,
      title: "The Secret of Pure Turmeric",
      excerpt: "Amader holud gura keno onno sob gura theke alada ebong eiter gunagun...",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
      date: "May 04, 2026",
      tag: "Organic",
      icon: <Leaf className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Perfect Red Chili Selection",
      excerpt: "Thik kon dhoroner morich apnar rannay sothik jhal ebong rong niye asbe...",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=800",
      date: "May 02, 2026",
      tag: "Spices",
      icon: <Flame className="w-4 h-4" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#2d2d2d] selection:bg-orange-200">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1600" 
            alt="Spices Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-4"
          >
            <div className="p-4 bg-orange-500 rounded-full shadow-2xl">
              <Sparkles className="text-white w-8 h-8 animate-pulse" />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Masala <span className="text-orange-500 italic">Journal</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-300 max-w-lg mx-auto text-lg font-light"
          >
            Explore the authentic taste of premium spices and secrets behind perfect Bangladeshi cooking.
          </motion.p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-3 overflow-x-auto pb-1 w-full md:w-auto px-2">
            {categories.map((cat, index) => (
              <button 
                key={index} 
                className="whitespace-nowrap px-6 py-2.5 rounded-2xl bg-gray-50 text-gray-700 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 border border-gray-100"
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search spices..." 
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-100/50 focus:bg-white focus:ring-2 focus:ring-orange-400 outline-none transition-all border border-transparent focus:border-orange-100"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <motion.article 
              key={blog.id}
              whileHover={{ y: -12 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-72 overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-orange-600 flex items-center gap-2 shadow-lg">
                    {blog.icon} {blog.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-400 mb-4 uppercase tracking-tighter">
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 bg-orange-200 rounded-full"></span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors leading-snug">
                  {blog.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8 line-clamp-2 text-sm">
                  {blog.excerpt}
                </p>
                <div className="flex items-center text-gray-900 font-extrabold gap-2 group-hover:text-orange-600 transition-all">
                  <span className="text-sm">Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}

          {/* Premium Newsletter Box */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-1 bg-[#1a1a1a] rounded-[2.5rem] p-10 text-white flex flex-col justify-center relative overflow-hidden group shadow-2xl"
          >
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-600 rounded-full blur-[80px] group-hover:blur-[100px] transition-all opacity-50"></div>
             
             <Mail className="w-12 h-12 text-orange-500 mb-6" />
             <h3 className="text-3xl font-bold mb-4 leading-tight">Fresh Spices in Your Inbox.</h3>
             <p className="mb-8 text-gray-400 text-sm">Subscribe to get 10% off on your first order of organic Masala.</p>
             
             <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:bg-white/10 focus:border-orange-500 transition-all" 
                />
                <button className="w-full bg-orange-600 text-white font-bold py-4 rounded-2xl hover:bg-orange-500 transition-all shadow-lg active:scale-95">
                  Subscribe Now
                </button>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 text-center">
        <div className="flex justify-center gap-6 mb-6 opacity-30">
          <div className="w-12 h-[1px] bg-gray-400"></div>
          <Sparkles className="w-4 h-4" />
          <div className="w-12 h-[1px] bg-gray-400"></div>
        </div>
        <p className="text-xs font-medium text-gray-400 tracking-[0.2em] uppercase">
          © 2026 Premium Spice Co. | Handcrafted Quality
        </p>
      </footer>

    </main>
  );
}