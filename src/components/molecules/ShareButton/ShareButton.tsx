"use client";

import React, { useState } from "react";
import { Share2 } from "lucide-react";
import ShareModal from "../ShareModal/ShareModal";

interface ShareButtonProps {
  url: string;
  title: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 text-xs font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95 border border-slate-100 dark:border-white/5 hover:border-blue-100 dark:hover:border-blue-900/30"
      >
        <Share2 size={14} />
        Share
      </button>

      <ShareModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url={url}
        title={title}
      />
    </>
  );
};

export default ShareButton;
