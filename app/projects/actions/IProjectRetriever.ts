import { Project } from "../data/projects";

export interface IProjectRetriever {
    getAllProjects: () => Record<string, Project>;
    getProjectById: (id: string) => Project | null;
}