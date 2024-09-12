'use client'

import React from 'react'
import clsx from 'clsx'

import { sen } from '@/shared/fonts'

import styles from './styles.module.scss'

type Props = {
    children?: string
    onClick: VoidFunction
    secondary?: boolean
}

export const Button = ({ children, onClick, secondary = false }: Props) => {
    return (
        <button className={clsx(styles.button, sen.className, secondary && styles.secondary)} onClick={onClick}>
            {children ?? 'Read More >'}
        </button>
    )
}
