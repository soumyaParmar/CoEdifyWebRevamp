import type { Metadata } from "next";
import "./globals.css";
import NavMenu from "@/components/organisms/NavMenu/NavMenu";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/atom/ThemeToggle";
import { getAllBlogs } from "@/lib/blogs";
import { GoogleTagManager } from "@next/third-parties/google";
import { Suspense } from "react";
import GTMTracker from "@/components/GTMTracker";

const baseurl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(baseurl),

  title: {
    default: "Engineering AI Systems for Real-World Scale | CoEdify",
    template: "%s | CoEdify",
  },

  description:
    "CoEdify engineers AI systems for real-world scale—combining AI, ML, cloud, and full-stack engineering to build production-ready, intelligent platforms.",

  keywords: [
    "AI systems",
    "engineering AI systems",
    "scalable AI",
    "production AI",
    "AI infrastructure",
    "agentic AI",
    "LLM systems",
    "ML systems",
    "cloud AI",
    "full stack AI",
    "CoEdify",
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
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: baseurl,
    title: "Engineering AI Systems for Real-World Scale | CoEdify",
    description:
      "We engineer AI systems beyond models—built for real-world scale, reliability, and production impact.",
    siteName: "CoEdify",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "CoEdify – Engineering AI Systems for Real-World Scale",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Engineering AI Systems for Real-World Scale | CoEdify",
    description:
      "Building scalable, production-grade AI systems beyond standalone models.",
    images: ["/apple-touch-icon.png"],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const latestBlogs = getAllBlogs();
  const gtmId: string = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative overflow-x-hidden">
        <GoogleTagManager gtmId={gtmId} />
        <Suspense fallback={null}>
          <GTMTracker />
        </Suspense>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CoEdify",
              url: baseurl,
              logo: `${baseurl}/logo.png`,
              description:
                "CoEdify engineers AI systems for real-world scale, combining AI, ML, cloud, and full-stack engineering.",
              sameAs: [
                "https://www.linkedin.com/company/coedify",
                "https://twitter.com/CoEdifyTech",
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavMenu latestBlogs={latestBlogs} />
          {children}
          <div className="fixed top-26 xl:top-6 transform hidden md:block right-0 rotate-90 z-50">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
