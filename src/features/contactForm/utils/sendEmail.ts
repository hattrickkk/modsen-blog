import emailjs from '@emailjs/browser'

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID

type Params = {
    email: string
    name: string
    query: string
    message: string
}

export const sendMessage = async ({ email, name, query, message }: Params) => {
    if (publicKey && serviceId && templateId) {
        try {
            emailjs.init(publicKey)
            await emailjs.send(serviceId, templateId, { email, name, query, message })
            return { status: 200, message: 'Thanks for subscribing to our blog!' }
        } catch (error) {
            return { status: 400, message: (error as Error).message }
        }
    } else {
        return { status: 400, message: 'Something went wrong' }
    }
}
