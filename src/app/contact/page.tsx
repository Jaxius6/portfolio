"use client";

import { useState, useEffect } from "react";
import { BackButton } from "@/components/back-button";
import {
  LinkedInLogoIcon,
  VideoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { FaBehanceSquare, FaTwitter } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";
import confetti from 'canvas-confetti';

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
    
    // Only load reCAPTCHA if we're in the browser
    if (typeof window !== 'undefined') {
      // Load reCAPTCHA v3
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=6LePiI0qAAAAAFpvcGLErn2qxg3DTrwSPOoCmmq3`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.grecaptcha.ready(() => {
          console.log('reCAPTCHA ready');
          setRecaptchaLoaded(true);
        });
      };
      document.head.appendChild(script);

      return () => {
        // Clean up script tag on unmount
        const scriptElement = document.querySelector(`script[src="${script.src}"]`);
        if (scriptElement && document.head.contains(scriptElement)) {
          document.head.removeChild(scriptElement);
        }
      };
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!recaptchaLoaded || !window.grecaptcha) {
        throw new Error('Security check is still loading. Please wait.');
      }

      // Execute reCAPTCHA v3
      console.log('Executing reCAPTCHA...');
      let token;
      try {
        token = await window.grecaptcha.execute('6LePiI0qAAAAAFpvcGLErn2qxg3DTrwSPOoCmmq3', { 
          action: 'submit' 
        });
        console.log('Got token:', {
          length: token?.length,
          preview: token ? token.substring(0, 20) + '...' : 'null'
        });
      } catch (error) {
        console.error('Error executing reCAPTCHA:', error);
        throw new Error('Failed to execute security check');
      }

      if (!token) {
        throw new Error('Failed to get security token');
      }

      // Verify reCAPTCHA token through our API
      console.log('Sending verification request...');
      const verifyResponse = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const verifyResult = await verifyResponse.json();
      console.log('Verification response:', verifyResult);
      
      if (!verifyResponse.ok) {
        throw new Error(verifyResult.error || 'Security check failed');
      }

      console.log('Verification successful, sending message...');
      // Only send webhook if reCAPTCHA verification succeeded
      const response = await fetch('https://hook.eu2.make.com/hjwmyvq8wlt89d5rrpbmybywiqokt7i1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      alert(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    }
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
      name: "Twitter",
      icon: <FaTwitter className="w-6 h-6" />,
      url: "https://x.com/JET_Graphics",
    },
    {
      name: "YouTube",
      icon: <VideoIcon className="w-6 h-6" />,
      url: "https://www.youtube.com/@jaxius6",
    },
    {
      name: "Behance",
      icon: <FaBehanceSquare className="w-6 h-6" />,
      url: "https://www.behance.net/jaxius",
    },
    {
      name: "Bluesky",
      icon: <SiBluesky className="w-6 h-6" />,
      url: "https://bsky.app/profile/jaxius.bsky.social",
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 animate-in contact-page">
      <BackButton />
      <div className="w-full max-w-md space-y-8 text-center">
        {!isSubmitted && (
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">Contact Jack</h1>
          </div>
        )}

        {isSubmitted ? (
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Thanks for your message!</h2>
              <p className="text-zinc-600 dark:text-zinc-400">I&apos;ll get back to you soon.</p>
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
          </div>
        ) : (
          <>
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
              <div className="grid md:grid-cols-2 gap-6">
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
              >
                Send Message
              </button>
              
              <p className="text-xs text-zinc-500 dark:text-zinc-600 text-center">
                Protected by reCAPTCHA - 
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-zinc-600 dark:hover:text-zinc-500"
                > Privacy</a> - 
                <a 
                  href="https://policies.google.com/terms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-zinc-600 dark:hover:text-zinc-500"
                >Terms</a>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
