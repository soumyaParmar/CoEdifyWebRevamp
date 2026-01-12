import { getAllBlogs } from "@/lib/blogs";
import Container from "@/components/atom/Container/Container";
import BlogCard from "@/components/molecules/BlogCard/BlogCard";
import Heading from "@/components/atom/Typography/Heading";
import Text from "@/components/atom/Typography/Text";

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-32">
      <Container className="max-w-6xl">
        <div className="space-y-20">
          {/* Header Section */}
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase">
              Engineering Blog
            </div>
            <Heading
              level={1}
              className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1]"
            >
              Insights & <span className="text-slate-400">Engineering</span>
            </Heading>
            <Text
              variant="muted"
              className="text-lg md:text-xl font-medium leading-relaxed"
            >
              Thought leadership on AI systems, scalable infrastructure, and the
              future of intelligent automation.
            </Text>
          </div>

          {/* Blog Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  title={blog.title}
                  description={blog.description}
                  slug={blog.slug}
                  date={blog.date}
                  author={blog.author}
                  tags={blog.tags}
                  image={blog.image}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-32 border border-dashed border-slate-100 dark:border-white/5 rounded-[3rem] bg-slate-50/50 dark:bg-white/2">
                <Text variant="muted" className="text-lg">
                  No articles found yet. Check back soon.
                </Text>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
