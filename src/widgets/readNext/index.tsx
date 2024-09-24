'use client'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { fetchPosts, Post } from '@/entities'
import { PostsContainer } from '@/features'
import { commonStyles, Title } from '@/shared'

import styles from './styles.module.scss'

export const ReadNext = () => {
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        fetchPosts({ page: 1, limit: 3 })
            .then(data => setPosts(data))
            .catch(err => console.error(err))
    }, [])

    const t = useTranslations('singlePost')

    return (
        <div className={commonStyles.container}>
            <Title value={t('title')} className={styles.title} />
            <div className={styles.posts}>
                <PostsContainer posts={posts} inColumn />
            </div>
        </div>
    )
}
