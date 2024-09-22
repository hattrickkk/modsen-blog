'use client'

import { memo, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'

import { Button, InputWithError, NOTIFY_OPTIONS, Title, useValidateInput } from '@/shared'

import { emailSchema, SubscribeFormData } from './utils/schema'
import { sendEmail } from './utils/sendEmail'

import styles from './styles.module.scss'

export const Subscribe = memo(() => {
    const { control, handleSubmit, reset } = useForm<SubscribeFormData>({
        resolver: zodResolver(emailSchema),
        mode: 'onBlur',
    })

    const [emailField, emailError] = useValidateInput<SubscribeFormData>('email', control)

    const handleFormSubmit = useCallback(
        async ({ email }: SubscribeFormData) => {
            const { status, message } = await sendEmail(email)
            if (status === 200) {
                reset()
            }
            toast(message, NOTIFY_OPTIONS)
        },
        [reset]
    )
    const t = useTranslations('footer')

    return (
        <div className={styles.subscribe}>
            <Toaster />
            <Title value={t('title')} className={styles.title} />
            <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
                <InputWithError placeholder={t('placeholder')} error={emailError} controllerProps={emailField} />
                <Button type='submit'>{t('button')} </Button>
            </form>
        </div>
    )
})
