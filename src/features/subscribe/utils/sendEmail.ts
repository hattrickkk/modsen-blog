import { MessagesKeys, sendLetter } from '@/shared'

const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

export const sendEmail = async (email: string) => {
    return await sendLetter({ data: { email }, templateId, successMessage: MessagesKeys.SUBSCRIBE })
}
