import Footer from "@/components/organisms/Footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs | CoEdify",
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
    return <section>
        <div>{children}</div>
        <Footer />
    </section>;
}
