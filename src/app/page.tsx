import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Braden Carter | Full-Stack Developer',
  description: 'Full-stack developer specializing in modern web applications with React, Next.js, and Node.js.',
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Name + Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Braden Carter
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400">
            Full-Stack Developer
          </p>
        </div>

        {/* Positioning Statement */}
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            Building scalable web applications with modern technologies. 
            Focused on clean architecture, performance, and exceptional user experiences.
          </p>
        </div>

        {/* Core Stack Summary */}
        <div className="pt-4">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            TypeScript • React • Next.js • Node.js • SQL Server
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/projects"
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View Projects
          </Link>
          <Link
            href="/resume"
            className="px-8 py-4 border-2 border-black dark:border-white rounded-lg font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            Skills & Experience
          </Link>
        </div>
      </div>
    </main>
  );
}
