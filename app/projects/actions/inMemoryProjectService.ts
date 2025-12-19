import {projectsData, Project} from '../data/projects';
import {IProjectRetriever} from './IProjectRetriever';

class InMemoryProjectService implements IProjectRetriever {
    getAllProjects(): Record<string, Project> {
        return projectsData;
    }

    getProjectById(id: string): Project | null {
        return projectsData[id as keyof typeof projectsData] || null;
    }
}

const projectService = new InMemoryProjectService();

export function getAllProjects(): Record<string, Project> {
    return projectService.getAllProjects();
}

export function getProjectById(id: string): Project | null {
    return projectService.getProjectById(id);
}