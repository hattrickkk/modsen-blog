'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'

import { Button, InputWithError, useValidateInput } from '@/shared'

import { QueryDropdown } from './ui/queryDropdown'
import { ContactFormData, contactSchema } from './utils/schema'

import styles from './styles.module.scss'
export const ContactForm = () => {
    const t = useTranslations('contact')

    const { control } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: 'onBlur',
    })

    const [emailField, emailError] = useValidateInput<ContactFormData>('email', control)
    const [nameField, nameError] = useValidateInput<ContactFormData>('name', control)
    const [messageField, messageError] = useValidateInput<ContactFormData>('message', control)

    return (
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <InputWithError placeholder={t('fullName')} error={nameError} controllerProps={nameField} />
                <InputWithError placeholder={t('email')} error={emailError} controllerProps={emailField} />
                <div className={styles.textareaWrapper}>
                    <textarea placeholder={t('message')} {...messageField} />
                    <p className={styles.error}>{messageError?.message}</p>
                </div>
                <QueryDropdown />
                <Button type='submit'>{t('sendMessage')}</Button>
            </form>
        </div>
    )
}
