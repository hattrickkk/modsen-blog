'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { sen } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    children?: ReactNode
    onClick?: VoidFunction
    secondary?: boolean
    type?: 'button' | 'submit'
    disabled?: boolean
    isSubmitting?: boolean
}

export const Button = ({
    children,
    onClick,
    secondary = false,
    type = 'button',
    disabled = false,
    isSubmitting = false,
}: Props) => {
    const t = useTranslations('button')
    return (
        <button
            className={clsx(
                styles.button,
                sen.className,
                secondary && styles.secondary,
                disabled && styles.disabled,
                isSubmitting && styles.submitting
            )}
            onClick={onClick}
            type={type}
        >
            {children ?? t('title')}
        </button>
    )
}
