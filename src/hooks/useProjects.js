import { projectsController } from '../controllers/projectsController'

export function useProjects() {
  return {
    projects: projectsController.getProjects(),
    hasProjects: projectsController.hasProjects(),
    count: projectsController.getProjectCount(),
  }
}
