"use client";

import Link from "next/link";
import "./animations.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-16 px-4">
      <h1 className="title">
        Test Page
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
