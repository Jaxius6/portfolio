"use client";

import { BackButton } from "@/components/back-button";
import Link from "next/link";

export default function Design() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 pt-24 animate-in">
      <BackButton />
      <div className="w-full max-w-4xl space-y-24 text-center mb-24">
        {/* Hero Section */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-relaxed bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Design: Evolve or Die
          </h1>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            I spent years mastering Adobe, video editing, and animation—painstakingly crafting visuals pixel by pixel. 
            Then along came AI, effortlessly out-designing me at every turn. At first, I resisted. But now? I embrace it. AI isn&apos;t the enemy; it&apos;s the ultimate tool, my new paintbrush, 
            amplifying my creativity like never before.
          </p>
        </div>

        {/* Call to Action */}
        <div className="space-y-6 bg-red-50/50 dark:bg-zinc-900/50 p-8 md:p-12 rounded-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-red-500 dark:text-red-400 leading-relaxed">
            Want to see my pre-AI work?
          </h2>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300">
            If you&apos;re stuck in the past, let go—evolution&apos;s way more fun. But if you&apos;re curious about what I made 
            before my robot revolution, check out my work:
          </p>
          <Link 
            href="https://www.behance.net/jacktaylor6" 
            target="_blank"
            className="inline-block px-5 py-2 text-base bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
          >
            View on Behance
          </Link>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300">
            Ready to evolve? Let&apos;s create something extraordinary together.
          </p>
        </div>
      </div>
    </div>
  );
}
