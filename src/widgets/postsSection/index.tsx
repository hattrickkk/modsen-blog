'use client'

import { useTranslations } from 'next-intl'

import { useFetchPosts } from '@/entities'
import { FeaturedPostDisplay } from '@/features'
import { AnimationTypes, commonStyles, DEFAULT_PAGE, POSTS_PER_PAGE, ScrollAnimation, Title } from '@/shared'

import { AllPosts } from '../allPosts'

import styles from './styles.module.scss'

export const PostsSection = () => {
    const t = useTranslations('posts')

    const { posts } = useFetchPosts({ page: DEFAULT_PAGE, limit: POSTS_PER_PAGE })
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
