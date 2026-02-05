import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import blogPosts from '../data/blog';
import { GradientHeadings } from '../../components/GradientHeadings';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Braden Carter`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 sm:p-20">
      <div className="max-w-3xl mx-auto space-y-8">
        <GradientHeadings />
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-theme-color-light-gray hover:text-theme-color-mint transition-colors"
        >
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <article className="space-y-6">
          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-theme-color-highlight-gray">
              <time dateTime={post.date} className="font-medium">
                {formatDate(post.date)}
              </time>
              <span>•</span>
              <span>{post.readingTime} read</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xl text-theme-color-highlight-gray leading-relaxed pt-4">
              {post.description}
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-zinc dark:prose-invert max-w-none pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <div className="space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p>
                <em className="text-zinc-500 dark:text-zinc-400">
                  This is a placeholder for the blog post content. In a production environment, 
                  this would be populated with the actual article content from a CMS, markdown files, 
                  or a database.
                </em>
              </p>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
              
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Key Takeaways</h2>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>First key insight from the article</li>
                <li>Second important point to consider</li>
                <li>Third practical takeaway</li>
                <li>Fourth lesson learned</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
              
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </article>

        {/* Navigation to other posts */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <Link
          href="/blog"
          className="inline-flex items-center text-theme-color-light-gray hover:text-theme-color-blue transition-colors"
        >
            ← View all articles
          </Link>
        </div>
      </div>
    </main>
  );
}
