import Footer from "@/components/organisms/Footer/Footer";
import type { Metadata } from "next";

const baseurl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Insights on AI, engineering, product development, and tech hiring.",
  keywords: [
    "AI blogs",
    "engineering blogs",
    "product development",
    "tech hiring",
    "CoEdify",
  ],
  openGraph: {
    type: "website",
    siteName: "CoEdify",
    url: `${baseurl}/blogs`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>{children}</div>
      <Footer />
    </section>
  );
}
