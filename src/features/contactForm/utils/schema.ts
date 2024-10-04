import { z } from 'zod'

export const contactSchema = z.object({
    email: z.string().email({ message: 'invalidEmail' }),
    name: z.string().min(2, { message: 'nameMin' }),
    message: z.string().min(1, { message: 'messageFill' }),
})

export type ContactFormData = z.infer<typeof contactSchema>
