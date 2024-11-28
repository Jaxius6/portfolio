"use client";

import { BackButton } from "@/components/back-button";

export default function Crypto() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 animate-in">
      <BackButton />
      <div className="w-full max-w-4xl space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">Crypto</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Exploring blockchain technology and cryptocurrency projects.
          </p>
        </div>
      </div>
    </div>
  );
}
