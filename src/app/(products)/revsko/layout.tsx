import { Metadata } from "next";
import React from "react";

const baseurl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const metadata: Metadata = {
  title: "RevSko | Intelligent Revenue Automation at Scale",

  description:
    "RevSko is an AI-powered revenue automation platform that streamlines operations, improves accuracy, and scales intelligent workflows across organizations.",

  keywords: [
    "revenue automation",
    "AI revenue platform",
    "intelligent automation",
    "enterprise AI systems",
    "AI workflow automation",
    "RevSko",
    "AI operations",
    "scalable AI platforms",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: `${baseurl}/revsko`,
  },

  openGraph: {
    type: "website",
    title: "RevSko | Intelligent Revenue Automation at Scale",
    description:
      "Automate revenue workflows with RevSko—an AI-powered platform built for accuracy, efficiency, and enterprise scale.",
    url: `${baseurl}/revsko`,
    siteName: "CoEdify",
    images: [
      {
        url: "/revsko-og.png",
        width: 1200,
        height: 630,
        alt: "RevSko – Intelligent Revenue Automation Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RevSko | Intelligent Revenue Automation at Scale",
    description:
      "AI-powered revenue automation built for real-world enterprise scale.",
    images: ["/revsko-og.png"],
  },

  category: "technology",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
