import Link from "next/link";
import { Project } from "../data/projects";
import TechStackBadge from "./TechStackBadge";

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Link
            href={`/projects/${project.url}`}
            className="block p-6 border-2 border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors group relative min-h-[300px]"
        >
            <div className="space-y-4 pb-12"> 
                <h3 className="text-2xl font-semibold group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                    {project.name}
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <TechStackBadge
                            key={tech}
                            id={tech}
                        /> 
                    ))}
                </div>
            </div>
            <div className="absolute bottom-6 left-6 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                View Details →
            </div>
        </Link>
    );
}
   
export default ProjectCard;