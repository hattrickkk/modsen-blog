'use client'

import { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'
import { useLocale, useTranslations } from 'next-intl'

import { fetchPosts, Post } from '@/entities'
import { getPostsCount } from '@/entities/post/helpers'
import { PostCard } from '@/features'
import { AnimationTypes, commonStyles, Loader, sen } from '@/shared'
import { ScrollAnimation } from '@/shared'

import styles from './styles.module.scss'

const POSTS_PER_PAGE = 5

export const BlogSection = () => {
    const locale = useLocale()
    const [posts, setPosts] = useState<Post[]>([])
    const [postsCount, setPostsCount] = useState(0)
    const [start, setStart] = useState(0)
    const [loading, setLoading] = useState(true)
    const t = useTranslations('')

    useEffect(() => {
        setLoading(true)
        fetchPosts(start, POSTS_PER_PAGE)
            .then(data => setPosts(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [locale, start])

    useEffect(() => {
        getPostsCount()
            .then(res => setPostsCount(res))
            .catch(err => console.error(err))
    }, [])

    const handleNextArrowClick = useCallback(() => {
        setStart(prev => prev + POSTS_PER_PAGE)
    }, [])

    const handlePrevArrowClick = useCallback(() => {
        setStart(prev => prev - POSTS_PER_PAGE)
    }, [])

    if (loading) return <Loader />

    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <h1 className={clsx(styles.title, sen.className)}>{t('posts.allPosts')}</h1>
                </ScrollAnimation>
                <div className={styles.posts}>
                    {posts.map((post, i) => (
                        <ScrollAnimation type={AnimationTypes.toLeft} delay={`0.${i}`} key={post.id}>
                            <PostCard post={post} />
                        </ScrollAnimation>
                    ))}
                </div>
                {posts.length > 0 && (
                    <ScrollAnimation type={AnimationTypes.toRight}>
                        <div className={styles.arrows}>
                            <button
                                className={clsx(sen.className, styles.arrow, start <= 0 && styles.disable)}
                                onClick={handlePrevArrowClick}
                            >
                                &lt; {t('arrows.prev')}
                            </button>
                            <button
                                className={clsx(
                                    sen.className,
                                    styles.arrow,
                                    postsCount <= POSTS_PER_PAGE + start && styles.disable
                                )}
                                onClick={handleNextArrowClick}
                            >
                                {t('arrows.next')} &gt;
                            </button>
                        </div>
                    </ScrollAnimation>
                )}
            </div>
        </section>
    )
}
