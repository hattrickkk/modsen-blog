import { z } from 'zod'

export const contactSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    name: z.string().min(2, { message: 'Fill more than 2 characters' }),
    message: z.string().min(1, { message: 'Fill the message field' }),
})

export type ContactFormData = z.infer<typeof contactSchema>
