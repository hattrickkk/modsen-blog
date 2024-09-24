'use client'

import { useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'
import { useLocale, useTranslations } from 'next-intl'

import { fetchPosts, getPagesCount, getPostsCount, Post } from '@/entities'
import { PostCard } from '@/features'
import { AnimationTypes, commonStyles, Loader, Pagination, POSTS_PER_PAGE, ScrollAnimation, sen } from '@/shared'

import styles from './styles.module.scss'

export const BlogSection = () => {
    const locale = useLocale()
    const [posts, setPosts] = useState<Post[]>([])
    const [postsCount, setPostsCount] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const t = useTranslations('')

    useEffect(() => {
        setLoading(true)
        fetchPosts({ page, limit: POSTS_PER_PAGE })
            .then(data => setPosts(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [locale, page])

    useEffect(() => {
        getPostsCount()
            .then(res => setPostsCount(res))
            .catch(err => console.error(err))
    }, [])

    const handleNextArrowClick = useCallback(() => {
        setPage(prevPage => prevPage + 1)
    }, [])

    const handlePrevArrowClick = useCallback(() => {
        setPage(prevPage => prevPage - 1)
    }, [])

    if (loading)
        return (
            <div className={styles.wrapper}>
                <Loader />
            </div>
        )

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
                    <Pagination
                        handlePrevArrowClick={handlePrevArrowClick}
                        handleNextArrowClick={handleNextArrowClick}
                        prevDisableCondition={page <= 1}
                        nextDisableCondition={
                            page === getPagesCount({ itemsPerPage: POSTS_PER_PAGE, totalCount: postsCount })
                        }
                    />
                )}
            </div>
        </section>
    )
}
