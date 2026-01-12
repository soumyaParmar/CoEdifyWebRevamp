export interface BlogFrontmatter {
    title: string;
    description: string;
    slug: string;
    date: string;
    author: string;
    tags: string[];
    image: string;
}

export interface BlogSummary extends BlogFrontmatter { }

export interface BlogPost {
    frontmatter: BlogFrontmatter;
    content: string;
}
