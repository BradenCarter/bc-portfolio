import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById } from '../actions/inMemoryProjectService';
import TechStackBadge from '../components/TechStackBadge';
import { getTechStackItem } from '../data/techStackConfig';


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} | Braden Carter`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 sm:p-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{project.name}</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => {
              return (
                <TechStackBadge 
                  key={tech} 
                  id={tech}
                />
              );
            })}
          </div>
        </div>

        {/* Problem Statement */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {project.problem}
          </p>
        </section>

        {/* Solution Overview */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {project.solution}
          </p>
        </section>

        {/* Role & Ownership */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Role & Ownership</h2>
          <p className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
            {project.role}
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-zinc-700 dark:text-zinc-300 ml-4">
            {project.ownership.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Architecture Decisions */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Architecture</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-zinc-700 dark:text-zinc-300 ml-4">
            {project.architecture.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Technical Challenges */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Technical Challenges & Tradeoffs</h2>
          <div className="space-y-6">
            {project.challenges.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                  {item.challenge}
                </h3>
                <p className="text-lg text-zinc-700 dark:text-zinc-300">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Deployment & CI/CD */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Deployment & CI/CD</h2>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {project.deployment}
          </p>
        </section>

        {/* Outcomes */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Outcomes</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-zinc-700 dark:text-zinc-300 ml-4">
            {project.outcomes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Lessons Learned */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Lessons Learned</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-zinc-700 dark:text-zinc-300 ml-4">
            {project.lessons.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Links */}
        <section className="flex gap-4 pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-black dark:border-white rounded-lg font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              View Demo
            </a>
          )}
        </section>
      </div>
    </main>
  );
}
