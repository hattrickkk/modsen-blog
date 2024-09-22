'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Post } from '@/entities'
import { Title } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    post: Post
    inColumn?: boolean
}

export const PostCard = ({ post: { title, image, text, category }, inColumn = false }: Props) => {
    const t = useTranslations('categories')
    return (
        <div className={clsx(styles.card, inColumn && styles.column)}>
            <div className={styles.imageWrapper}>
                <Image src={image as string} alt='post-photo' width={490} height={320} />
            </div>
            <div className={styles.info}>
                <h3 className={styles.subtitle}>{t(category)}</h3>
                <Title value={title} className={styles.title} />
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}
