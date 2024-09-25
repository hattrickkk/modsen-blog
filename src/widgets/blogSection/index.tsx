'use client'

import { useCallback, useState } from 'react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { getPagesCount, useFetchPosts } from '@/entities'
import { PostsContainer } from '@/features'
import { AnimationTypes, commonStyles, Loader, Pagination, POSTS_PER_PAGE, ScrollAnimation, sen } from '@/shared'

import styles from './styles.module.scss'

export const BlogSection = () => {
    const t = useTranslations('')

    const [page, setPage] = useState(1)
    const { posts, postsCount, loading } = useFetchPosts({ page, limit: POSTS_PER_PAGE })

    const handleNextArrowClick = useCallback(() => setPage(prevPage => prevPage + 1), [])
    const handlePrevArrowClick = useCallback(() => setPage(prevPage => prevPage - 1), [])

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
                    <PostsContainer posts={posts} />
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
