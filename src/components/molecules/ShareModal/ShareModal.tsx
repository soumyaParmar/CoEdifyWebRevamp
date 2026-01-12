"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Copy,
  Check,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Share2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  url,
  title,
}) => {
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const shareLinks = [
    {
      name: "X",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
      color: "bg-black text-white",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      color: "bg-[#1877F2] text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      color: "bg-[#0A66C2] text-white",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#", // Direct web sharing for Instagram is limited
      color:
        "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 border border-slate-100 dark:border-white/5">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Share2 size={20} className="text-blue-500" />
              Share this article
            </h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Social Grid */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name !== "Instagram" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
                onClick={
                  link.name === "Instagram"
                    ? (e) => {
                        e.preventDefault();
                        handleCopy();
                      }
                    : undefined
                }
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6",
                    link.color
                  )}
                >
                  <link.icon size={22} />
                </div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          {/* Copy Link Section */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1">
              Copy Link
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                readOnly
                value={url}
                className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl py-4 pl-4 pr-32 text-sm text-slate-600 dark:text-slate-300 focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className={cn(
                  "absolute right-2 px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2",
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20"
                )}
              >
                {copied ? (
                  <>
                    <Check size={14} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="bg-slate-50 dark:bg-white/5 p-4 text-center">
          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium italic">
            "Sharing is caring. Help us spread the engineering wisdom!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
