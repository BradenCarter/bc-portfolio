import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllProjects } from './actions/inMemoryProjectService';
import { Project } from './data/projects';
import ProjectCard from './components/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects | Braden Carter',
  description: 'Explore my portfolio of web development projects and technical work.',
};

export default function ProjectsPage() {
  const projects = Object.values(getAllProjects());
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <main className="min-h-screen p-8 sm:p-20 bg-theme-color-dark-gray">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-theme">Projects</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl">
            A selection of projects demonstrating my technical skills, architectural decisions, 
            and problem-solving approach.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-theme-color-blue">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-theme-color-mint">More Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}


