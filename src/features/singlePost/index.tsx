'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import { Author, getAuthorById, Post, useFormateDateForSinglePost } from '@/entities'
import { AnimationTypes, CATEGORY_ITEMS, commonStyles, ScrollAnimation, sen } from '@/shared'

import { PostText } from './ui/postText'

import styles from './styles.module.scss'

type Props = {
    post: Post
}
export const SinglePost = ({ post: { authorId, title, image, created, category } }: Props) => {
    const [author, setAuthor] = useState<Author>({} as Author)
    const locale = useLocale()
    const t = useTranslations()

    useEffect(() => {
        getAuthorById(authorId)
            .then(data => setAuthor(data))
            .catch(err => console.error(err))
    }, [authorId])

    const categoryItem = CATEGORY_ITEMS.find(el => el.title == category)

    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <div className={styles.top}>
                        <div className={styles.author}>
                            <div className={styles.avatarWrapper}>
                                <Image src={author && author.image} alt='post-photo' width={50} height={50} />
                            </div>
                            <div>
                                <Link
                                    href={`/${locale}/author/${author.id}`}
                                    className={clsx(styles.name, sen.className)}
                                >
                                    {author.name}
                                </Link>
                                <p
                                    className={styles.date}
                                >{`${t('singlePost.posted')} ${useFormateDateForSinglePost(created)}`}</p>
                            </div>
                        </div>
                        <h1 className={clsx(sen.className, styles.title)}>{title}</h1>
                        <div className={styles.category}>
                            <div className={styles.iconWrapper}>{categoryItem?.Icon}</div>
                            <p className={clsx(styles.type, sen.className)}>{t(`categories.${categoryItem?.title}`)}</p>
                        </div>
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
}
