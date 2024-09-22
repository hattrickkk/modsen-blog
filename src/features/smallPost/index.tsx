'use client'

import { memo, useCallback } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { type Post, useFormateDate } from '@/entities'
import { sen } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    post: Post
}

export const SmallPost = memo(({ post: { title, created, author, id } }: Props) => {
    const router = useRouter()
    const t = useTranslations('hero')
    const locale = useLocale()

    const handlePostClick = useCallback(() => {
        router.push(`/${locale}/post/${id}`)
    }, [id, router, locale])

    const date = useFormateDate(created)

    return (
        <div className={styles.post} onClick={handlePostClick}>
            <div className={styles.wrapper}>
                <p className={styles.copyright}>
                    {t('copyright')} <Link href={'/'}>{author}</Link> | {date}
                </p>
                <h3 className={clsx(styles.title, sen.className)}>{title}</h3>
            </div>
        </div>
    )
})
