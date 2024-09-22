'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useLocale, useTranslations } from 'next-intl'

import { Post } from '@/entities'
import { PostCard } from '@/features'
import { AnimationTypes, commonStyles, sen } from '@/shared'
import { ScrollAnimation } from '@/shared'

import styles from './styles.module.scss'

export const BlogSection = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const locale = useLocale()

    useEffect(() => {
        fetch(`/${locale}/blog/api`)
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [locale])

    const t = useTranslations('posts')
    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <h1 className={clsx(styles.title, sen.className)}>{t('allPosts')}</h1>
                </ScrollAnimation>

                <div className={styles.posts}>
                    {posts.map((post, i) => (
                        <ScrollAnimation type={AnimationTypes.toLeft} delay={`0.${i}`} key={post.id}>
                            <PostCard post={post} />
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}
