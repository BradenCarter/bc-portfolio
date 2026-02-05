import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById } from '../actions/inMemoryProjectService';
import TechStackBadge from '../components/TechStackBadge';
import { getTechStackItem } from '../data/techStackConfig';
import { GradientHeadings } from '../../components/GradientHeadings';


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
      <GradientHeadings />
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center text-theme-color-light-gray hover:text-theme-color-mint transition-colors"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold pb-2">{project.name}</h1>
          <p className="text-xl">
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
          <p className="text-lg leading-relaxed ">
            {project.problem}
          </p>
        </section>

        {/* Solution Overview */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-lg leading-relaxed ">
            {project.solution}
          </p>
        </section>

        {/* Role & Ownership */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Role & Ownership</h2>
          <p className="text-lg font-medium  dark:">
            {project.role}
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg ml-4">
            {project.ownership.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Architecture Decisions */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Architecture</h2>
          <ul className="list-disc list-inside space-y-2 text-lg ml-4">
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
                <h3 className="text-lg font-semibold  dark:">
                  {item.challenge}
                </h3>
                <p className="text-lg  dark:">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Deployment & CI/CD */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Deployment & CI/CD</h2>
          <p className="text-lg leading-relaxed  dark:">
            {project.deployment}
          </p>
        </section>

        {/* Outcomes */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Outcomes</h2>
          <ul className="list-disc list-inside space-y-2 text-lg ml-4">
            {project.outcomes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Lessons Learned */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Lessons Learned</h2>
          <ul className="list-disc list-inside space-y-2 text-lg ml-4">
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
