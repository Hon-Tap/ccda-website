"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";

export default function NewsPage() {
  const [posts, setPosts] = useState([]); // Will be populated from your DB
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated Database Fetch
    const fetchNews = async () => {
      // const res = await fetch('/api/news');
      // const data = await res.json();
      setPosts([]); // Set to [] to test the "Empty State" design
      setLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <main className="bg-[#fcfdfd] min-h-screen text-[#0a2647]">
      {/* Editorial Hero */}
      <section className="pt-32 pb-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary-green font-bold text-xs uppercase tracking-[0.4em] mb-8 block">Dispatch</span>
          <h1 className="text-7xl md:text-9xl font-serif tracking-tighter leading-[0.9]">Latest.</h1>
        </div>
      </section>

      {/* Dynamic Content Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid md:grid-cols-3 gap-12">
              {[1, 2, 3].map((i) => <div key={i} className="h-96 bg-slate-100 animate-pulse rounded-sm" />)}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
              {posts.map((post: any) => (
                <motion.article 
                  key={post.id} 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-8">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                    <Calendar size={12} /> {post.date}
                  </div>
                  <h2 className="text-3xl font-serif mb-4 flex-grow group-hover:text-primary-green transition-colors">{post.title}</h2>
                  <Link href={`/news/${post.slug}`} className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                    Read Story <ArrowRight size={14} />
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            /* Modern Empty State */
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <div className="p-8 bg-slate-50 rounded-full mb-8">
                <Newspaper size={48} className="text-slate-300" />
              </div>
              <h3 className="text-3xl font-serif mb-4">No dispatches yet</h3>
              <p className="text-slate-500 font-light max-w-sm">We are currently preparing new stories. Check back soon for updates from the field.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}