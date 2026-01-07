"use client";

import { type ReactNode } from "react";

const WaveBackground = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-dvh relative " id="hero">
      <video
        src="/assets/bg/bgg.mp4"
        loop
        autoPlay
        muted
        preload="auto"
        className="h-full w-full object-cover absolute top-0 left-0 z-0"
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 0.9;
        }}
      ></video>
      <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/80 z-10 transition-colors duration-500"></div>
      <div className="relative z-20 h-full bg-linear-to-b from-white/5 to-white dark:from-slate-950/20 dark:to-slate-950 transition-colors duration-500">
        {children}
      </div>
    </div>
  );
};

export default WaveBackground;
