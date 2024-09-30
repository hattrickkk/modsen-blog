'use client'

import { memo, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'

import { Button, InputWithError, NOTIFY_OPTIONS, Title, useValidateInput } from '@/shared'

import { emailSchema, SubscribeFormData } from './utils/schema'
import { sendEmail } from './utils/sendEmail'

import styles from './styles.module.scss'

export const Subscribe = memo(() => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm<SubscribeFormData>({
        resolver: zodResolver(emailSchema),
        mode: 'onBlur',
    })

    const t = useTranslations()
    const [emailField, emailError] = useValidateInput<SubscribeFormData>('email', control)

    const handleFormSubmit = useCallback(
        async ({ email }: SubscribeFormData) => {
            const { status, message } = await sendEmail(email)
            if (status === 200) {
                reset()
            }
            toast(t(`messages.${message}`), NOTIFY_OPTIONS)
        },
        [reset, t]
    )

    return (
        <div className={styles.subscribe}>
            <Title value={t('footer.title')} className={styles.title} />
            <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
                <InputWithError placeholder={t('footer.placeholder')} error={emailError} controllerProps={emailField} />
                <Button type='submit' isSubmitting={isSubmitting}>
                    {t('footer.button')}
                </Button>
            </form>
        </div>
    )
})
