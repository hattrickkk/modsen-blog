'use client'

import { memo } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import { Post, useFetchAuthorById, useFormateDate } from '@/entities'
import { NavigateButton } from '@/features'
import { sen } from '@/shared/fonts'

import { ScrollAnimation } from '../scrollAnimation'

import styles from './styles.module.scss'

type Props = {
    inBlog?: boolean
    post: Post
}

export const HeroInfo = memo(({ inBlog = false, post: { category, title, authorId, created, text, id } }: Props) => {
    const t = useTranslations()
    const locale = useLocale()
    const author = useFetchAuthorById(authorId)
    const date = useFormateDate(created)

    if (!id) return null

    return (
        <div className={styles.wrapper}>
            <ScrollAnimation>
                <h4 className={styles.subtitle}>
                    {t('hero.subtitle')} <span>{t(`categories.${category}`)}</span>
                </h4>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
                <h1 className={clsx(styles.title, sen.className)}>{title}</h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
                <p className={styles.copyright}>
                    {t('hero.copyright')}{' '}
                    <Link href={`/${locale}/author/${authorId}`} className={clsx(inBlog && styles.blogLink)}>
                        {author.name}
                    </Link>{' '}
                    | {date}
                </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
                <p className={styles.text}>{text}</p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
                <NavigateButton pathName={`/${locale}/post/${id}`} />
            </ScrollAnimation>
        </div>
    )
})
