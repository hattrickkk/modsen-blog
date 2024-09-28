'use client'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'

import { Button, InputWithError, NOTIFY_OPTIONS, useValidateInput } from '@/shared'

import { QUERY_ITEMS } from './constants/queryItems'
import { QueryDropdown } from './ui/queryDropdown'
import { ContactFormData, contactSchema } from './utils/schema'
import { sendMessage } from './utils/sendMessage'

import styles from './styles.module.scss'
export const ContactForm = () => {
    const t = useTranslations()
    const [query, setQuery] = useState(QUERY_ITEMS[0])

    const {
        control,
        handleSubmit,
        reset,
        formState: { isValid, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: 'onBlur',
    })

    const [emailField, emailError] = useValidateInput<ContactFormData>('email', control)
    const [nameField, nameError] = useValidateInput<ContactFormData>('name', control)
    const [messageField, messageError] = useValidateInput<ContactFormData>('message', control)

    const onSubmitHandler = useCallback(
        async ({ email, name, message }: ContactFormData) => {
            const { message: responseMessage, status } = await sendMessage({ email, name, message, query })
            if (status === 200) reset()
            toast(t(`messages.${responseMessage}`), NOTIFY_OPTIONS)
        },
        [query, reset, t]
    )

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
                <InputWithError
                    placeholder={t('contact.fullName')}
                    error={nameError}
                    controllerProps={nameField}
                    maxLength={25}
                />
                <InputWithError
                    placeholder={t('contact.email')}
                    error={emailError}
                    controllerProps={emailField}
                    maxLength={25}
                />
                <div className={styles.textareaWrapper}>
                    <textarea placeholder={t('contact.message')} {...messageField} maxLength={250} />
                    {messageError && <p className={styles.error}>{t(`messages.${messageError.message}`)}</p>}
                </div>
                <QueryDropdown query={query} setQuery={setQuery} />
                <Button type='submit' disabled={!isValid} isSubmitting={isSubmitting}>
                    {t('contact.sendMessage')}
                </Button>
            </form>
        </div>
    )
}
