"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";
import { cn } from "@/lib/utils";
import CardLayout from "@/components/atom/Card/CardLayout";

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  tags?: string[];
  image: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  slug,
  date,
  author,
  tags,
  image,
  className,
}) => {
  return (
    <Link
      href={`/blogs/${slug}`}
      className={cn(
        "group h-full flex flex-col rounded-3xl transition-all duration-500 overflow-hidden",
        "bg-white dark:bg-slate-900/40",
        "hover:bg-slate-50 dark:hover:bg-slate-800/60",
        "hover:shadow-2xl hover:shadow-blue-500/5 dark:hover:shadow-none",
        "hover:-translate-y-1.5",
        className
      )}
    >
      <CardLayout className="p-0 flex flex-col overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            height={500}
            width={500}
            className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col grow space-y-5 p-6 sm:p-4">
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800" />
            <span className="text-blue-500 dark:text-blue-400/80">
              {author}
            </span>
          </div>

          <div className="grow space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white  transition-colors duration-300 leading-tight">
              {title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed text-xsu sm:text-sm">
              {description}
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-50 dark:border-white/5 transition-colors group-hover:border-blue-50 dark:group-hover:border-blue-900/20">
            <div className="flex flex-wrap gap-1.5">
              {tags?.slice(0, 2).map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-slate-50 dark:bg-white/5 text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tighter"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="shrink-0 w-8 h-8 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center text-blue-500 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
              <span className="text-lg">→</span>
            </div>
          </div>
        </div>
      </CardLayout>
    </Link>
  );
};

export default BlogCard;
