import emailjs from '@emailjs/browser'

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

export const sendEmail = async (email: string) => {
    if (publicKey && serviceId && templateId) {
        try {
            emailjs.init(publicKey)
            await emailjs.send(serviceId, templateId, { email })
        } catch (error) {
            console.error(error)
        }
    } else {
        console.error('Something went wrong')
    }
}
