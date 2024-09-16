'use client'

import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button, InputWithError, NOTIFY_OPTIONS, Title, useValidateInput } from '@/shared'

import { emailSchema } from './utilts/schema'
import { sendEmail } from './utilts/sendEmail'

import styles from './styles.module.scss'

type FormData = {
    email: string
}

export const Subscribe = () => {
    const { control, handleSubmit, reset } = useForm<FormData>({
        resolver: zodResolver(emailSchema),
        mode: 'onBlur',
    })

    const [emailField, emailError] = useValidateInput('email', control)

    const handleFormSubmit = useCallback(
        ({ email }: FormData) => {
            sendEmail(email)
            reset()
            toast('Thanks for subscribing to our blog!', NOTIFY_OPTIONS)
        },
        [reset]
    )

    return (
        <div className={styles.subscribe}>
            <Toaster />
            <Title value='Subscribe to our news letter to get latest updates and news' className={styles.title} />
            <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
                <InputWithError placeholder='Enter Your Email' error={emailError} controllerProps={emailField} />
                <Button type='submit'>Subscribe</Button>
            </form>
        </div>
    )
}
