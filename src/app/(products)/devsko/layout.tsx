import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "DevSko | AI-Powered Skill Assessment & Interviews",
  description:
    "DevSko by CoEdify is an AI-powered skill assessment and interview platform designed to evaluate real-world skills through AI-led interviews, coding assessments, and structured scoring at scale.",
  keywords: [
    "DevSko",
    "CoEdify",
    "AI skill assessment",
    "AI interview platform",
    "coding assessment platform",
    "technical hiring AI",
    "developer assessment tool",
    "AI recruitment software",
    "skill-based hiring",
    "remote technical interviews",
  ],
  authors: [{ name: "CoEdify" }],
  creator: "CoEdify",
  publisher: "CoEdify",
  metadataBase: new URL("https://www.coedify.com"),

  alternates: {
    canonical: "https://www.coedify.com/devsko",
  },

  openGraph: {
    title: "DevSko by CoEdify | AI-Powered Skill Assessment Platform",
    description:
      "Evaluate real skills, not resumes. DevSko by CoEdify enables AI-led interviews, coding assessments, and scalable skill evaluation for modern hiring teams.",
    url: "https://www.coedify.com/devsko",
    siteName: "CoEdify",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "DevSko by CoEdify – AI Skill Assessment Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DevSko by CoEdify | AI Skill Assessment & Interviews",
    description:
      "AI-powered interviews and assessments built to measure real skills at scale. DevSko is CoEdify’s skill intelligence platform.",
    images: ["/apple-touch-icon.png"],
    creator: "@coedify",
  },

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

  category: "Artificial Intelligence",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
