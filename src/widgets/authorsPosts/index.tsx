'use client'

import { memo, useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { getPagesCount, Post } from '@/entities'
import { PostsContainer } from '@/features'
import { AnimationTypes, commonStyles, DEFAULT_PAGE, Pagination, POSTS_PER_PAGE, ScrollAnimation, sen } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    allPosts: Post[]
}

export const AuthorPosts = memo(({ allPosts }: Props) => {
    const t = useTranslations('author')

    const [page, setPage] = useState(DEFAULT_PAGE)
    const [posts, setPosts] = useState<Post[]>([])
    const startIndex = (page - 1) * POSTS_PER_PAGE

    useEffect(() => {
        setPosts(allPosts.slice(0, 5))
    }, [allPosts])

    const handleNextArrowClick = useCallback(() => {
        const nextStartIndex = startIndex + POSTS_PER_PAGE
        setPosts(allPosts.slice(nextStartIndex, nextStartIndex + POSTS_PER_PAGE))
        setPage(prevPage => prevPage + 1)
    }, [allPosts, startIndex])

    const handlePrevArrowClick = useCallback(() => {
        const prevStartIndex = startIndex - POSTS_PER_PAGE
        setPosts(allPosts.slice(prevStartIndex, prevStartIndex + POSTS_PER_PAGE))
        setPage(prevPage => prevPage - 1)
    }, [allPosts, startIndex])

    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <ScrollAnimation type={AnimationTypes.toRight}>
                    <h2 className={clsx(styles.title, sen.className)}>{t('posts')}</h2>
                </ScrollAnimation>
                {posts.length >= 1 ? (
                    <div className={styles.posts}>
                        <PostsContainer posts={posts} />
                    </div>
                ) : (
                    <p className={styles.text}>{t('noPosts')}</p>
                )}
                {allPosts.length > POSTS_PER_PAGE && (
                    <Pagination
                        handleNextArrowClick={handleNextArrowClick}
                        handlePrevArrowClick={handlePrevArrowClick}
                        prevDisableCondition={page <= 1}
                        nextDisableCondition={
                            page === getPagesCount({ itemsPerPage: POSTS_PER_PAGE, totalCount: allPosts.length })
                        }
                    />
                )}
            </div>
        </section>
    )
})
