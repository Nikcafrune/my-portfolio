import { projects } from '../models/projects'

export const projectsController = {
  getProjects: () => projects,
  
  hasProjects: () => projects.length > 0,
  
  getProjectCount: () => projects.length,
  
  getProjectsByTech: (tech) => {
    return projects.filter(p => p.tech?.includes(tech))
  },
}
