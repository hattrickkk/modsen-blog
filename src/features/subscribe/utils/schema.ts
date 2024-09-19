import { z } from 'zod'

export const emailSchema = z.object({
    email: z
        .string()
        .email({ message: 'Invalid email address' })
        .min(5, { message: 'Must be 5 or more characters long' }),
})

export type SubscribeFormData = z.infer<typeof emailSchema>
