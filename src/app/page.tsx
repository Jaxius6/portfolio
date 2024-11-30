"use client";

import Link from "next/link";
import "./animations.css";
import dynamic from 'next/dynamic';
import circleAnimation from "../../public/images/circle.json";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-16 px-4">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
          <Lottie animationData={circleAnimation} loop={true} />
        </div>
        <h1 className="title relative z-10">
          Jack Taylor
        </h1>
      </div>
      
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
