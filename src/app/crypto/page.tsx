"use client";

import { BackButton } from "@/components/back-button";
import Image from "next/image";
import Link from "next/link";

export default function Crypto() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 pt-24 animate-in">
      <BackButton />
      <div className="w-full max-w-4xl space-y-24 text-center mb-24">
        {/* Hero Section */}
        <div className="space-y-12">
          <div className="flex justify-center gap-4 py-12">
            <Image
              src="/images/bitcoin-logo.svg"
              alt="Bitcoin Logo"
              width={96}
              height={96}
              className="animate-bounce"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Welcome to Jaxius Crypto Guide
          </h1>
          <p className="text-2xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Hi, I&apos;m Jaxius, a designer and crypto trader from Western Australia. Since 2016, 
            I&apos;ve introduced many friends and family to Bitcoin, and now I&apos;m here to help more 
            people like you take your first steps into cryptocurrency.
          </p>
        </div>

        {/* Beginner's Guide Section */}
        <div className="space-y-12 bg-orange-50/50 dark:bg-zinc-900/50 p-12 rounded-3xl">
          <h2 className="text-4xl font-bold text-orange-500 dark:text-orange-400">
            Beginner&apos;s Guide to Cryptocurrency
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-semibold flex items-center gap-3">
                <span className="bg-orange-100 dark:bg-orange-900/50 p-3 rounded-full">1️⃣</span>
                Educate Yourself
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>Never trust anyone else with your financial decisions.</li>
                <li>Understand Bitcoin (BTC) and Ethereum (ETH) and why they&apos;re revolutionary.</li>
                <li>Learn your tax obligations when dealing with cryptocurrency.</li>
              </ul>
            </div>

            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-semibold flex items-center gap-3">
                <span className="bg-orange-100 dark:bg-orange-900/50 p-3 rounded-full">2️⃣</span>
                Sign Up for CoinSpot
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>Create an account: <Link href="https://www.coinspot.com.au/join/REFVW1JMW" className="text-orange-500 hover:underline">www.coinspot.com.au</Link></li>
                <li>Complete KYC (Know Your Customer) by submitting ID documents.</li>
              </ul>
            </div>

            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-semibold flex items-center gap-3">
                <span className="bg-orange-100 dark:bg-orange-900/50 p-3 rounded-full">3️⃣</span>
                Budget &amp; Dollar-Cost Average (DCA)
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>Don&apos;t invest all your money at once; spread your risk.</li>
                <li>Example: $50 every Friday or $200 monthly.</li>
                <li>Set up recurring purchases for a long-term, stress-free approach.</li>
              </ul>
            </div>

            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-semibold flex items-center gap-3">
                <span className="bg-orange-100 dark:bg-orange-900/50 p-3 rounded-full">4️⃣</span>
                Purchase Suggestions
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>BTC (65%), SOL (30%), and a few alts (5%).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trading Tips Section */}
        <div className="space-y-12 bg-orange-50/50 dark:bg-zinc-900/50 p-12 rounded-3xl">
          <h2 className="text-4xl font-bold text-orange-500 dark:text-orange-400">
            Trading Tips
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-semibold text-orange-500">Leverage Warning</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>Using leverage without proper experience guarantees losses.</li>
                <li>Start with a fake Bybit account and practise for at least 6 months.</li>
              </ul>
            </div>

            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-semibold text-orange-500">Trading Education</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>Study charting, blockchain, DEFI, risk management, and technical analysis.</li>
                <li>Understand funding fees, liquidations, and market dynamics.</li>
              </ul>
            </div>

            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-semibold text-orange-500">Patience Is Key</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-300">
                <li>Think long-term. The ultimate goal: Own at least 1 BTC.</li>
                <li>Focus on stacking satoshis and holding strong (HODL).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-orange-500 dark:text-orange-400">
            Trusted YouTube Channels
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Krown's Crypto Cave",
                url: "https://youtube.com/channel/UCnwxzpFzZNtLH8NgTeAROFA"
              },
              {
                name: "Invest Answers",
                url: "https://youtube.com/channel/UClgJyzwGs-GyaNxUHcLZrkg"
              },
              {
                name: "Coin Bureau",
                url: "https://youtube.com/channel/UCqK_GSMbpiV8spgD3ZGloSw"
              },
              {
                name: "Chico Crypto",
                url: "https://youtube.com/channel/UCHop-jpf-huVT1IYw79ymPw"
              },
              {
                name: "Crypto Face",
                url: "https://youtube.com/@CryptoFace"
              }
            ].map((channel, index) => (
              <Link
                key={index}
                href={channel.url}
                className="p-6 bg-orange-50/50 dark:bg-zinc-900/50 rounded-xl hover:bg-orange-100/50 dark:hover:bg-zinc-800/50 transition-colors"
                target="_blank"
              >
                {channel.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-orange-500 dark:text-orange-400">
            Referrals &amp; Tools
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-orange-500">Recommended Platforms</h3>
              <div className="space-y-2">
                {[
                  { name: "CoinSpot", url: "https://www.coinspot.com.au?affiliate=53PT2" },
                  { name: "Bybit", url: "https://www.bybit.com/en-US/invite?ref=vvVK8" },
                  { name: "Coinbase", url: "https://www.coinbase.com/join/taylor_hh1" },
                  { name: "Binance", url: "https://www.binance.com/en/register?ref=D59KHZ4S" }
                ].map((platform, index) => (
                  <Link
                    key={index}
                    href={platform.url}
                    className="block p-4 bg-orange-50/50 dark:bg-zinc-900/50 rounded-xl hover:bg-orange-100/50 dark:hover:bg-zinc-800/50 transition-colors"
                    target="_blank"
                  >
                    {platform.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-orange-500">Tracking &amp; Analysis Tools</h3>
              <div className="space-y-2">
                {[
                  { name: "CoinTracking", url: "https://cointracking.info?ref=J842046" },
                  { name: "TradingView", url: "https://tradingview.com/gopro/?share_your_love=Jaxius" },
                  { name: "CoinGecko", url: "https://coingecko.com/en" },
                  { name: "Coin360", url: "https://coin360.com" },
                  { name: "Phantom Wallet", url: "https://phantom.app/en-GB" }
                ].map((tool, index) => (
                  <Link
                    key={index}
                    href={tool.url}
                    className="block p-4 bg-orange-50/50 dark:bg-zinc-900/50 rounded-xl hover:bg-orange-100/50 dark:hover:bg-zinc-800/50 transition-colors"
                    target="_blank"
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Donation Section */}
        <div className="space-y-6 bg-orange-50/50 dark:bg-zinc-900/50 p-12 rounded-3xl">
          <h2 className="text-4xl font-bold text-orange-500 dark:text-orange-400">
            Support the Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Bitcoin Donation</h3>
              <p className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg break-all">
                3Ddy9NspZKwKRJXaTE5rEj9nzp6Za8z4DN
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Ethereum Donation</h3>
              <p className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg break-all">
                0x5175C53C42a8395E019B985E5059dc2fa8d76a58
              </p>
              <p className="text-zinc-500">or @jaxius.eth</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-2xl text-zinc-600 dark:text-zinc-300">
            Good luck on your crypto journey! Remember: Educate, invest wisely, and HODL strong!
          </p>
        </div>
      </div>
    </div>
  );
}
