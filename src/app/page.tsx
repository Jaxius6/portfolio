"use client";

import Link from "next/link";
import "./animations.css";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animationData from "../../public/lottie/animation.json";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder or loading state
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-16 px-4">
        <div className="w-64 h-64" /> {/* Placeholder for Lottie */}
        <h1 className="title">Jack Taylor</h1>
        <nav className="flex flex-col md:flex-row gap-6 md:gap-12 text-center md:text-left">
          <Link href="/code" className="nav-link">Code</Link>
          <Link href="/crypto" className="nav-link">Crypto</Link>
          <Link href="/design" className="nav-link">Design</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-16 px-4">
      <div className="w-64 h-64">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
        />
      </div>
      <h1 className="title">
        Jack Taylor
      </h1>
      
      <nav className="flex flex-col md:flex-row gap-6 md:gap-12 text-center md:text-left">
        <Link href="/code" className="nav-link">
          Code
        </Link>
        <Link href="/crypto" className="nav-link">
          Crypto
        </Link>
        <Link href="/design" className="nav-link">
          Design
        </Link>
        <Link href="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </div>
  );
}
