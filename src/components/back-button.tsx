"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="fixed top-6 left-6 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700"
      aria-label="Back to home"
    >
      <ArrowLeftIcon className="h-5 w-5" />
    </button>
  );
}
