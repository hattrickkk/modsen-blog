'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { getPostsById, Post } from '@/entities'
import { FeaturedPostDisplay } from '@/features'
import { AnimationTypes, commonStyles, Title } from '@/shared'
import { ScrollAnimation } from '@/shared'

import { AllPosts } from '../allPosts'

import styles from './styles.module.scss'

export const PostsSection = () => {
    const t = useTranslations('posts')
    const [post, setPost] = useState<Post>({} as Post)
    useEffect(() => {
        getPostsById('1')
            .then(data => setPost(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className={commonStyles.container}>
            <section className={styles.posts}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <div>
                        <Title value={t('featuredPost')} className={styles.title} />
                        <FeaturedPostDisplay post={post} />
                    </div>
                </ScrollAnimation>
                <AllPosts />
            </section>
        </div>
    )
}
