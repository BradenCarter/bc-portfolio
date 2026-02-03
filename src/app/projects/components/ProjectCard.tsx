import Link from "next/link";
import { Project } from "../data/projects";
import TechStackBadge from "./TechStackBadge";

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <article className="group relative p-0.5 rounded-lg border-2 border-[#A5A5A5] hover:border-transparent hover:bg-linear-to-r hover:from-theme-color-blue hover:to-theme-color-mint transition-all">
            <div className="p-6 rounded-md bg-theme-color-dark-gray min-h-[300px]">
                <div className="space-y-4 pb-12"> 
                    <h3 className="text-2xl font-semibold text-theme-color-light-gray">
                        <Link
                            href={`/projects/${project.url}`}
                            className="after:content-[''] after:absolute after:inset-0 after:rounded-lg text-theme-color-light-gray] group-hover:text-white transition-colors"
                        >
                            {project.name}
                        </Link>
                    </h3>
                    <p className="text-lg text-zinc-400 group-hover:text-white transition-colors">
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
                <div className="absolute bottom-6 left-6 text-[#A5A5A5] group-hover:text-white transition-colors pointer-events-none" aria-hidden="true">
                    View Details →
                </div>
            </div>
        </article>
    );
}
   
export default ProjectCard;