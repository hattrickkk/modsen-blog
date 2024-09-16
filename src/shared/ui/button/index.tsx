import React from 'react'
import clsx from 'clsx'

import { sen } from '@/shared/fonts'

import styles from './styles.module.scss'

type Props = {
    children?: string
    onClick?: VoidFunction
    secondary?: boolean
    type?: 'button' | 'submit'
}

export const Button = ({ children, onClick, secondary = false, type = 'button' }: Props) => {
    return (
        <button
            className={clsx(styles.button, sen.className, secondary && styles.secondary)}
            onClick={onClick}
            type={type}
        >
            {children ?? 'Read More >'}
        </button>
    )
}
