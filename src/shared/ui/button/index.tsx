import { ReactNode } from 'react'
import clsx from 'clsx'

import { sen } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    children?: ReactNode
    onClick?: VoidFunction
    secondary?: boolean
    type?: 'button' | 'submit'
}

export const Button = ({ children = 'Read More >', onClick, secondary = false, type = 'button' }: Props) => {
    return (
        <button
            className={clsx(styles.button, sen.className, secondary && styles.secondary)}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}
