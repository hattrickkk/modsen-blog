'use client'

import React from 'react'
import clsx from 'clsx'

import { sen } from '@/shared/fonts'

import styles from './styles.module.scss'

type Props = {
    value: string
}

export const Title = ({ value }: Props) => {
    return <h3 className={clsx(styles.title, sen.className)}>{value}</h3>
}
