"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.75]);
  const blurValue = useTransform(scrollY, [0, 100], [0, 12]);
  
  const backgroundColor = useTransform(bgOpacity, (v) => `rgba(5, 5, 5, ${v})`);
  const backdropFilter = useTransform(blurValue, (v) => `blur(${v}px)`);

  if (!isMounted) return null;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
      style={{
        backgroundColor,
        backdropFilter,
      }}
    >
      <div className="text-white/90 font-semibold tracking-wide text-lg">
        WH-1000XM6
      </div>

      <div className="hidden md:flex items-center space-x-8 text-sm text-white/60 font-medium">
        {["Overview", "Technology", "Noise Cancelling", "Specs"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="hover:text-white/90 transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <button className="hidden md:block text-sm text-white/60 hover:text-white/90 transition-colors">
          Buy
        </button>
        <button className="relative px-5 py-2 text-sm font-semibold text-white rounded-full overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0050ff] to-[#00d6ff] opacity-80 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-[1px] bg-[#050505] rounded-full group-hover:bg-opacity-0 transition-all duration-300 z-0" />
          <span className="relative z-10 group-hover:drop-shadow-md">Experience WH-1000XM6</span>
        </button>
      </div>
    </motion.nav>
  );
}
