import { contactInfo } from '../models/contact'

export const contactController = {
  getWhatsAppLink: () => {
    const { phone, whatsappMessage } = contactInfo
    return `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`
  },
  
  getEmailLink: () => `mailto:${contactInfo.email}`,
  
  getGitHubLink: () => contactInfo.github,
  
  getLinkedInLink: () => contactInfo.linkedin,
  
  getPhoneFormatted: () => {
    const phone = contactInfo.phone
    return `+${phone.slice(0, 2)} (${phone.slice(2, 4)}) ${phone.slice(4, 9)}-${phone.slice(9)}`
  },
  
  getAllContacts: () => ({
    whatsapp: contactController.getWhatsAppLink(),
    email: contactController.getEmailLink(),
    github: contactController.getGitHubLink(),
    linkedin: contactController.getLinkedInLink(),
  }),
}
