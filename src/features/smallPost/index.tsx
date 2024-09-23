'use client'

import { memo, useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { Author, getAuthorById, type Post, useFormateDate } from '@/entities'
import { sen } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    post: Post
}

export const SmallPost = memo(({ post: { title, created, authorId, id } }: Props) => {
    const router = useRouter()
    const t = useTranslations('hero')
    const locale = useLocale()

    const [author, setAuthor] = useState<Author>({} as Author)

    useEffect(() => {
        getAuthorById(authorId)
            .then(data => setAuthor(data))
            .catch(err => console.error(err))
    }, [authorId])

    const handlePostClick = useCallback(() => {
        router.push(`/${locale}/post/${id}`)
    }, [id, router, locale])

    const date = useFormateDate(created)

    return (
        <div className={styles.post} onClick={handlePostClick}>
            <div className={styles.wrapper}>
                <p className={styles.copyright}>
                    {t('copyright')} <span>{author.name}</span> | {date}
                </p>
                <h3 className={clsx(styles.title, sen.className)}>{title}</h3>
            </div>
        </div>
    )
})
