import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { BlogFrontmatter, BlogPost, BlogSummary } from "../types/blogs";

const BLOG_DIR = path.join(process.cwd(), "src/data/blogs");

function readMarkdownFile(filePath: string): string {
    return fs.readFileSync(filePath, "utf8");
}

export function getAllBlogs(): BlogSummary[] {
    const files = fs.readdirSync(BLOG_DIR);

    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => {
            const filePath = path.join(BLOG_DIR, file);
            const content = readMarkdownFile(filePath);
            const { data } = matter(content);

            const frontmatter = data as BlogFrontmatter;

            return {
                ...frontmatter,
                // Ensure slug matches filename for reliable routing
                slug: file.replace(".md", ""),
            };
        })
        .sort(
            (a, b) =>
                new Date(b.date).getTime() -
                new Date(a.date).getTime()
        );
}

export async function getBlogBySlug(
    slug: string
): Promise<BlogPost | null> {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);

    if (!fs.existsSync(filePath)) return null;

    const fileContent = readMarkdownFile(filePath);
    const { data, content } = matter(fileContent);

    const processedContent = await remark()
        .use(html)
        .process(content);

    return {
        frontmatter: data as BlogFrontmatter,
        content: processedContent.toString(),
    };
}
