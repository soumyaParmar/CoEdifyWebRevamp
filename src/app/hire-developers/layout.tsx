import { Metadata } from "next";
import React from "react";

const baseurl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const metadata: Metadata = {
  title: "Hire Elite Engineers | Engineering Beyond AI",
  description:
    "Hire elite, pre-vetted engineers from CoEdify to build scalable, intelligent systems. We deliver engineering excellence beyond AI across cloud, platforms, and real-world production systems.",
  keywords: [
    "hire developers",
    "hire elite engineers",
    "engineering beyond AI",
    "pre-vetted engineers",
    "scalable engineering teams",
    "AI-first engineering",
    "cloud engineering services",
    "full stack engineering",
    "CoEdify",
  ],
  openGraph: {
    title: "Hire Elite Engineers | Engineering Beyond AI",
    description:
      "Build with elite engineers trained for real-world scale. CoEdify delivers engineering excellence beyond AI.",
    url: `${baseurl}/hire-developers`,
    siteName: "CoEdify",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "Hire Elite Engineers – Engineering Beyond AI by CoEdify",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Elite Engineers | Engineering Beyond AI",
    description:
      "Elite, pre-vetted engineers delivering systems that scale—beyond AI, beyond hype.",
    images: ["/apple-touch-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${baseurl}/hire-developers`,
  },
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
