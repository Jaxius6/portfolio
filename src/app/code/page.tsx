"use client";

import { BackButton } from "@/components/back-button";
import { RiRobot2Line } from "react-icons/ri";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { BiCube } from "react-icons/bi";

export default function Code() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 animate-in">
      <BackButton />
      <div className="w-full max-w-4xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter">Code</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Exploring my software development projects and technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* GPT Automation */}
          <div className="p-6 transition-all border rounded-lg hover:shadow-lg border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 border rounded-md border-zinc-200 dark:border-zinc-800">
                <RiRobot2Line size={40} className="text-zinc-800 dark:text-zinc-200" />
              </div>
              <h2 className="text-xl font-semibold">GPT Automations</h2>
            </div>
            <p className="mt-3 text-sm text-center text-zinc-500 dark:text-zinc-400">
              Helping businesses automate with AI
            </p>
          </div>

          {/* VoteSniper */}
          <div className="p-6 transition-all border rounded-lg hover:shadow-lg border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 border rounded-md border-zinc-200 dark:border-zinc-800">
                <HiOutlineDocumentSearch size={40} className="text-zinc-800 dark:text-zinc-200" />
              </div>
              <h2 className="text-xl font-semibold">VoteSniper</h2>
            </div>
            <p className="mt-3 text-sm text-center text-zinc-500 dark:text-zinc-400">
              WA Parliamentary AI Hansard Explorer
            </p>
          </div>

          {/* Truth DAO */}
          <div className="p-6 transition-all border rounded-lg hover:shadow-lg border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-4 border rounded-md border-zinc-200 dark:border-zinc-800">
                <BiCube size={40} className="text-zinc-800 dark:text-zinc-200" />
              </div>
              <h2 className="text-xl font-semibold">Truth DAO</h2>
            </div>
            <p className="mt-3 text-sm text-center text-zinc-500 dark:text-zinc-400">
              Political Party Blockchain Voting Platform
            </p>
          </div>
        </div>

        <p className="text-sm text-center text-zinc-400 dark:text-zinc-500">
          Project links coming soon...
        </p>
      </div>
    </div>
  );
}
