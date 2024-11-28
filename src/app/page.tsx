"use client";

import Link from "next/link";
import "./animations.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-16 px-4">
      <h1 className="title">
        Jack Taylor
      </h1>
      
      <nav className="flex gap-12">
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
