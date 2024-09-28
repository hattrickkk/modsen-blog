import { MessagesKeys, sendLetter } from '@/shared'

const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID

type Params = {
    email: string
    name: string
    query: string
    message: string
}

export const sendMessage = async (params: Params) => {
    return await sendLetter({ data: params, templateId, successMessage: MessagesKeys.LETTER })
}
