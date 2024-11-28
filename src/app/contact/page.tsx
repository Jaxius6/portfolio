"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { BackButton } from "@/components/back-button";
import {
  LinkedInLogoIcon,
  VideoIcon,
  FrameIcon,
  RocketIcon,
  EnvelopeClosedIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <LinkedInLogoIcon className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/jacktaylor6/",
    },
    {
      name: "X (Twitter)",
      icon: <Cross2Icon className="w-6 h-6 rotate-45" />,
      url: "https://x.com/JET_Graphics",
    },
    {
      name: "YouTube",
      icon: <VideoIcon className="w-6 h-6" />,
      url: "https://www.youtube.com/@jaxius6",
    },
    {
      name: "Behance",
      icon: <FrameIcon className="w-6 h-6" />,
      url: "https://www.behance.net/jaxius",
    },
    {
      name: "BlueSky",
      icon: <RocketIcon className="w-6 h-6" />,
      url: "https://bsky.app/profile/jaxius.bsky.social",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 animate-in">
      <BackButton />
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">Contact</h1>
        </div>

        <div className="flex justify-center gap-6 py-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <a
          href="mailto:jack@taylor.net"
          className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        >
          <EnvelopeClosedIcon className="w-5 h-5" />
          jack@taylor.net
        </a>
        
        <form onSubmit={handleSubmit} className="space-y-6 text-left" suppressHydrationWarning>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-all"
              suppressHydrationWarning
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-all"
              suppressHydrationWarning
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-all resize-none"
              suppressHydrationWarning
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg text-white gradient-btn focus:outline-none focus:ring-2 focus:ring-zinc-500"
            suppressHydrationWarning
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
