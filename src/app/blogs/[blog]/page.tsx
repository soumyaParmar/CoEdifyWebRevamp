import { getBlogBySlug } from "@/lib/blogs";
import { notFound } from "next/navigation";
import Container from "@/components/atom/Container/Container";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import ShareButton from "@/components/molecules/ShareButton/ShareButton";
import CodeBlockWrapper from "@/components/molecules/CodeBlock/CodeBlockWrapper";

interface PageProps {
  params: Promise<{ blog: string }>;
}

export default async function BlogPage({ params }: PageProps) {
  const { blog } = await params;
  const blogPost = await getBlogBySlug(blog);

  if (!blogPost) notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-24">
      <Container className="max-w-5xl">
        {/* Navigation Back */}
        <Link
          href="/blogs"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors mb-12 group"
        >
          <ChevronLeft
            size={16}
            className="mr-1 group-hover:-translate-x-1 transition-transform"
          />
          Back to all articles
        </Link>

        {/* Content Header */}
        <header className="space-y-8 mb-16">
          {/* Featured Image */}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              <span>{blogPost.frontmatter.date}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span>{blogPost.frontmatter.author}</span>
            </div>

            <ShareButton
              url={`https://coedify.com/blogs/${blog}`}
              title={blogPost.frontmatter.title}
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            {blogPost.frontmatter.title}
          </h1>
          <div className="relative max-h-[400px] aspect-video w-full rounded-3xl overflow-hidden mb-12 border border-slate-100 dark:border-white/5">
            <Image
              src={blogPost.frontmatter.image}
              alt={blogPost.frontmatter.title}
              height={1000}
              width={1000}
              className=" max-h-[400px] w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {blogPost.frontmatter.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-[10px] font-bold bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 rounded-md uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Main Prose Content */}
        <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-3xl prose-pre:bg-slate-900 prose-pre:rounded-2xl prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50 dark:prose-blockquote:bg-blue-900/10 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic">
          <CodeBlockWrapper>
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </CodeBlockWrapper>
        </article>

        {/* Footer Navigation */}
        <footer className="mt-20 pt-12 border-t border-slate-100 dark:border-white/5 text-center">
          <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium">
            Enjoyed this article?
          </p>
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Read more stories
          </Link>
        </footer>
      </Container>
    </div>
  );
}
