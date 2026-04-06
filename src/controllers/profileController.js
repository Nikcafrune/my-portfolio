import { profile } from '../models/profile'

export const profileController = {
  getProfile: () => profile,
  
  getName: () => profile.name,
  
  getHeadline: () => profile.headline,
  
  getInitials: () => {
    return profile.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  },
}
