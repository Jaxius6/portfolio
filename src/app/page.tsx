"use client";

import Link from "next/link";
import "./animations.css";
import dynamic from 'next/dynamic';
import { useState, useEffect, Suspense } from 'react';

// Dynamically import Lottie with no SSR and suspense
const Lottie = dynamic(() => import('lottie-react'), { 
  ssr: false
});
import animationData from "../../public/lottie/animation.json";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-16 px-4">
      <div className="relative w-64 h-64 flex items-center justify-center">
        <Suspense fallback={null}>
          {mounted && (
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid slice',
                progressiveLoad: true
              }}
            />
          )}
        </Suspense>
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
