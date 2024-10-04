'use client'

import { memo } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import { Post, useFetchAuthorById, useFormateDateForSinglePost } from '@/entities'
import { AnimationTypes, CATEGORY_ITEMS, commonStyles, paths, ScrollAnimation, sen } from '@/shared'

import { PostText } from './ui/postText'

import styles from './styles.module.scss'

type Props = {
    post: Post
}
export const SinglePost = memo(({ post: { authorId, title, image, created, category } }: Props) => {
    const locale = useLocale()
    const t = useTranslations()
    const author = useFetchAuthorById(authorId)
    const categoryItem = CATEGORY_ITEMS.find(el => el.title === category)
    const formatedDate = useFormateDateForSinglePost(created)

    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <div className={styles.top}>
                        <div className={styles.author}>
                            <div className={styles.avatarWrapper}>
                                {author.image && <Image src={author.image} alt='avatar-photo' width={50} height={50} />}
                            </div>
                            <div>
                                <Link
                                    href={`/${locale}/author/${author.id}`}
                                    className={clsx(styles.name, sen.className)}
                                >
                                    {author.name}
                                </Link>
                                <p className={styles.date}>{`${t('singlePost.posted')} ${formatedDate}`}</p>
                            </div>
                        </div>
                        <h1 className={clsx(sen.className, styles.title)}>{title}</h1>
                        <Link href={`/${locale}/${paths.CATEGORY}/${categoryItem?.title}`} className={styles.category}>
                            <div className={styles.iconWrapper}>{categoryItem?.Icon}</div>
                            <p className={clsx(styles.type, sen.className)}>{t(`categories.${categoryItem?.title}`)}</p>
                        </Link>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation type={AnimationTypes.toLeft}>
                    <div className={styles.imageWrapper}>
                        <Image src={image} alt='post-photo' width={1280} height={580} />
                    </div>
                </ScrollAnimation>
                <PostText />
            </div>
        </section>
    )
})
