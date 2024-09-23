'use client'

import { useEffect, useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'

import { fetchPosts, Post } from '@/entities'
import { FeaturedPostDisplay } from '@/features'
import { AnimationTypes, commonStyles, ScrollAnimation, Title } from '@/shared'

import { AllPosts } from '../allPosts'

import styles from './styles.module.scss'

export const PostsSection = () => {
    const t = useTranslations('posts')

    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        fetchPosts(0, 5)
            .then(data => setPosts(data))
            .catch(err => console.error(err))
    }, [])

    const otherPosts = useMemo(() => posts.slice(1), [posts])

    return (
        <div className={commonStyles.container}>
            <section className={styles.posts}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <div>
                        <Title value={t('featuredPost')} className={styles.title} />
                        {posts[0] && <FeaturedPostDisplay post={posts[0]} />}
                    </div>
                </ScrollAnimation>
                <AllPosts posts={otherPosts} />
            </section>
        </div>
    )
}
