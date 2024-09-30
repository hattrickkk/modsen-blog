import { ReactNode } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useLocale } from 'next-intl'

import { sen } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    title: string
    text: string
    Icon: ReactNode
    path: string
}

export const CategoryCard = ({ title, text, path, Icon }: Props) => {
    const locale = useLocale()
    return (
        <div className={styles.card}>
            <Link href={`/${locale}/${path}`}>
                <div className={styles.iconWrapper}>{Icon}</div>
                <h3 className={clsx(styles.title, sen.className)}>{title}</h3>
                <p className={styles.text}>{text}</p>
            </Link>
        </div>
    )
}
