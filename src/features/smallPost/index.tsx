'use client'

import { memo, useCallback } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { type Post, useFetchAuthorById, useFormateDate } from '@/entities'
import { sen } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    post: Post
}

export const SmallPost = memo(({ post: { title, created, authorId, id } }: Props) => {
    const router = useRouter()
    const t = useTranslations('hero')
    const locale = useLocale()
    const author = useFetchAuthorById(authorId)
    const date = useFormateDate(created)

    const handlePostClick = useCallback(() => {
        router.push(`/${locale}/post/${id}`)
    }, [id, router, locale])

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
