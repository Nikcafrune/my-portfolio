import { profileController } from '../controllers/profileController'

export function useProfile() {
  return {
    profile: profileController.getProfile(),
    name: profileController.getName(),
    headline: profileController.getHeadline(),
    initials: profileController.getInitials(),
  }
}
