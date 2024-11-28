"use client";

import { BackButton } from "@/components/back-button";

export default function Design() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 animate-in">
      <BackButton />
      <div className="w-full max-w-4xl space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">Design</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Showcasing my design projects and creative work.
          </p>
        </div>
      </div>
    </div>
  );
}
