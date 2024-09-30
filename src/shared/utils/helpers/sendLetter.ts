import emailjs from '@emailjs/browser'

import { MessagesKeys } from '@/shared'

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID

type Params = {
    data: Record<string, string>
    templateId: string | undefined
    successMessage: string
}

export const sendLetter = async ({ data, templateId, successMessage }: Params) => {
    if (publicKey && serviceId && templateId) {
        try {
            emailjs.init(publicKey)
            await emailjs.send(serviceId, templateId, data)
            return { status: 200, message: successMessage }
        } catch (error) {
            return { status: 400, message: (error as Error).message }
        }
    } else {
        return { status: 400, message: MessagesKeys.FAIL }
    }
}
