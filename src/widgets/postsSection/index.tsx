'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { fetchPosts, Post } from '@/entities'
import { FeaturedPostDisplay } from '@/features'
import { AnimationTypes, commonStyles, POSTS_PER_PAGE, ScrollAnimation, Title } from '@/shared'

import { AllPosts } from '../allPosts'

import styles from './styles.module.scss'

export const PostsSection = () => {
    const t = useTranslations('posts')

    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        fetchPosts({ page: 1, limit: POSTS_PER_PAGE })
            .then(data => setPosts(data))
            .catch(err => console.error(err))
    }, [])

    const [firstPost, ...otherPosts] = posts

    return (
        <div className={commonStyles.container}>
            <section className={styles.posts}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <div>
                        <Title value={t('featuredPost')} className={styles.title} />
                        {firstPost && <FeaturedPostDisplay post={firstPost} />}
                    </div>
                </ScrollAnimation>
                <AllPosts posts={otherPosts} />
            </section>
        </div>
    )
}
