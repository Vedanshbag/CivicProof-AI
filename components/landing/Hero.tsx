"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return <section className="min-h-screen flex items-center justify-center px-6"><motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="max-w-4xl text-center glass rounded-3xl p-10 shadow-glow"><h1 className="text-5xl font-bold">Trust, <span className="text-emerald">Verified.</span></h1><p className="mt-4 text-slate-300">AI-powered civic credibility infrastructure.</p><div className="mt-8 flex gap-4 justify-center"><a href="/signup" className="px-6 py-3 bg-electric rounded-xl">Get Started</a><a href="/dashboard" className="px-6 py-3 border border-white/20 rounded-xl">Live Dashboard</a></div></motion.div></section>;
}
