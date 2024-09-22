'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { PostCard } from '@/features'
import { AnimationTypes, commonStyles, POSTS_ARR, sen } from '@/shared'
import { ScrollAnimation } from '@/shared'

import styles from './styles.module.scss'

export const BlogSection = () => {
    const t = useTranslations('posts')
    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <h1 className={clsx(styles.title, sen.className)}>{t('allPosts')}</h1>
                </ScrollAnimation>

                <div className={styles.posts}>
                    {POSTS_ARR.map((post, i) => (
                        <ScrollAnimation type={AnimationTypes.toLeft} delay={`0.${i}`}>
                            <PostCard post={post} key={post.id} />
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}
