'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import { Author, getAuthorById, type Post, useFormateDate } from '@/entities'
import { sen } from '@/shared'

import { NavigateButton } from '../navigateButton'

import styles from './styles.module.scss'

type Props = {
    post: Post
}

export const FeaturedPostDisplay = ({ post: { id, text, title, created, authorId, image } }: Props) => {
    const date = useFormateDate(created)
    const t = useTranslations('hero')
    const locale = useLocale()

    const [author, setAuthor] = useState<Author>({} as Author)
    useEffect(() => {
        getAuthorById(authorId)
            .then(data => setAuthor(data))
            .catch(err => console.error(err))
    }, [authorId])

    return (
        <div className={styles.post}>
            <div className={styles.wrapper}>
                <div className={styles.imageWrapper}>
                    <Image src={image} width={670} height={350} alt='post-photo' />
                </div>
                <p className={styles.copyright}>
                    {t('copyright')} <Link href={`/${locale}/author/${authorId}`}>{author.name}</Link> | {date}
                </p>
                <h2 className={clsx(styles.title, sen.className)}>{title}</h2>
                <p className={styles.text}>{text}</p>
                <NavigateButton pathName={`/${locale}/post/${id}`} />
            </div>
        </div>
    )
}
