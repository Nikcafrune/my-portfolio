import { contactController } from '../controllers/contactController'

export function useContact() {
  return {
    whatsappLink: contactController.getWhatsAppLink(),
    emailLink: contactController.getEmailLink(),
    githubLink: contactController.getGitHubLink(),
    linkedinLink: contactController.getLinkedInLink(),
    allContacts: contactController.getAllContacts(),
  }
}
