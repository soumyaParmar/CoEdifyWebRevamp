import type { Metadata } from "next";
import { getBlogBySlug } from "@/lib/blogs";

interface LayoutProps {
    children: React.ReactNode;
    params: { blog?: string };
}

export async function generateMetadata(
    { params }: LayoutProps
): Promise<Metadata> {
    const blogParam = await params;
    if (!blogParam?.blog) {
        return {
            title: "Blogs | CoEdify",
            description:
                "Insights on AI, engineering, and product development from CoEdify.",
        };
    }

    const blog = await getBlogBySlug(blogParam.blog);

    if (!blog) {
        return {
            title: "Blog Not Found | CoEdify",
        };
    }

    return {
        title: blog.frontmatter.title,
        description: blog.frontmatter.description,
        keywords: blog.frontmatter.tags,
        authors: [{ name: blog.frontmatter.author }],
        openGraph: {
            title: blog.frontmatter.title,
            description: blog.frontmatter.description,
            type: "article",
            publishedTime: blog.frontmatter.date,
            siteName: "CoEdify",
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default function BlogsLayout({ children }: LayoutProps) {
    return <section>{children}</section>;
}
