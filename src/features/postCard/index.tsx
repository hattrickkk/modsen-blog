'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import { Post, useFetchAuthorById, useFormateDate } from '@/entities'
import { Title } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    post: Post
    inColumn?: boolean
}

export const PostCard = ({
    post: { id, title, image, text, category, authorId, created },
    inColumn = false,
}: Props) => {
    const t = useTranslations()
    const locale = useLocale()
    const date = useFormateDate(created)
    const author = useFetchAuthorById(authorId)

    return (
        <div className={clsx(styles.card, inColumn && styles.column)}>
            <div className={styles.imageWrapper}>
                <Image src={image as string} alt='post-photo' width={490} height={320} />
            </div>
            <div className={styles.info}>
                {inColumn ? (
                    <p className={styles.copyright}>
                        {t('hero.copyright')} <Link href={`/${locale}/author/${authorId}`}>{author.name}</Link> | {date}
                    </p>
                ) : (
                    <h3 className={styles.subtitle}>{t(`categories.${category}`)}</h3>
                )}
                <Link href={`/${locale}/post/${id}`}>
                    <Title value={title} className={styles.title} />
                </Link>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}
