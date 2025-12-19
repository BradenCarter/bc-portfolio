import type { Metadata } from 'next';
import Link from 'next/link';
import blogPosts from '../projects/data/blog';

export const metadata: Metadata = {
  title: 'Blog | Braden Carter',
  description: 'Technical articles on software architecture, performance, and engineering best practices.',
};

// Sample blog posts - replace with your actual data source (CMS, MDX, etc.)

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <main className="min-h-screen p-8 sm:p-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl">
            Technical articles on software architecture, system design, performance optimization, 
            and lessons learned from building production systems.
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-zinc-200 dark:border-zinc-800 pb-8 last:border-b-0"
            >
              <Link href={`/blog/${post.slug}`} className="group block space-y-3">
                <h2 className="text-2xl md:text-3xl font-semibold group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-lg text-zinc-700 dark:text-zinc-300">
                  {post.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>•</span>
                  <span>{post.readingTime} read</span>
                  <span>•</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-2 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                  Read article →
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
