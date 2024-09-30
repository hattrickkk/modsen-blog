import { z } from 'zod'

export const emailSchema = z.object({
    email: z.string().email({ message: 'invalidEmail' }),
})

export type SubscribeFormData = z.infer<typeof emailSchema>
