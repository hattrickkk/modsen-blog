'use client'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { fetchPosts, Post } from '@/entities'
import { PostCard } from '@/features'
import { AnimationTypes, commonStyles, ScrollAnimation, Title } from '@/shared'

import styles from './styles.module.scss'

export const ReadNext = () => {
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        fetchPosts(0, 3)
            .then(data => setPosts(data))
            .catch(err => console.error(err))
    }, [])

    const t = useTranslations('singlePost')

    return (
        <div className={commonStyles.container}>
            <Title value={t('title')} className={styles.title} />
            <div className={styles.posts}>
                {posts.map((post, i) => (
                    <ScrollAnimation type={AnimationTypes.toLeft} delay={`0.${i}`} key={post.id}>
                        <PostCard post={post} inColumn />
                    </ScrollAnimation>
                ))}
            </div>
        </div>
    )
}
