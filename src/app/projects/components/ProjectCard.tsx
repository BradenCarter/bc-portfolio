import Link from "next/link";
import { Project } from "../data/projects";
import TechStackBadge from "./TechStackBadge";

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <article className="relative p-6 border-2 border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors group min-h-[300px]">
            <div className="space-y-4 pb-12"> 
                <h3 className="text-2xl font-semibold">
                    <Link
                        href={`/projects/${project.url}`}
                        className="after:content-[''] after:absolute after:inset-0 after:rounded-lg group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors"
                    >
                        {project.name}
                    </Link>
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                    {project.description}
                </p>
                <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.stack.map((tech) => (
                        <li key={tech}>
                            <TechStackBadge id={tech} /> 
                        </li>
                    ))}
                </ul>
            </div>
            <div className="absolute bottom-6 left-6 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors pointer-events-none" aria-hidden="true">
                View Details →
            </div>
        </article>
    );
}
   
export default ProjectCard;