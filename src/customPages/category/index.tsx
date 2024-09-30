'use client'

import { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { getPagesCount, Post, useFetchPosts, useFetchPostsByCategory } from '@/entities'
import { PostCard, Search } from '@/features'
import {
    AnimationTypes,
    Category,
    commonStyles,
    DEFAULT_PAGE,
    Pagination,
    POSTS_PER_PAGE_SECTION,
    ScrollAnimation,
    Title,
} from '@/shared'
import { CategoriesBlock, CategoryBanner, Tags } from '@/widgets'

import { filterPostsByTag } from './filterPostsByTag'

import styles from './styles.module.scss'

type Props = {
    params: { type: Category }
}

export const CategoryPage = ({ params: { type } }: Props) => {
    const t = useTranslations('categoryPage')
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
    const allCategoryPosts = useFetchPostsByCategory(type)
    const [allCategoryFilteredPostsCount, setAllCategoryFilteredPostsCount] = useState(0)
    const [page, setPage] = useState(DEFAULT_PAGE)

    const { posts } = useFetchPosts({ page, limit: POSTS_PER_PAGE_SECTION, param: 'category', query: type })

    useEffect(() => {
        if (!selectedTags.length) {
            setFilteredPosts([...posts])
            setAllCategoryFilteredPostsCount(posts.length)
            return
        }
        setFilteredPosts(filterPostsByTag(selectedTags, posts))
        setAllCategoryFilteredPostsCount(filterPostsByTag(selectedTags, allCategoryPosts).length)
    }, [selectedTags, posts, allCategoryPosts])

    const clearTags = useCallback(() => setSelectedTags([]), [])
    const handleNextArrowClick = useCallback(() => setPage(prevPage => prevPage + 1), [])
    const handlePrevArrowClick = useCallback(() => setPage(prevPage => prevPage - 1), [])

    return (
        <>
            <CategoryBanner category={type} />
            <div className={commonStyles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.postsWrapper}>
                        {(filteredPosts.length === 0 && selectedTags.length !== 0) || selectedTags.includes('none') ? (
                            <ScrollAnimation type={AnimationTypes.toRight}>
                                <div className={styles.info}>
                                    <Title value={t('nothingFound')} className={styles.title} />
                                    <button onClick={clearTags}> {t('seeAll')}</button>
                                </div>
                            </ScrollAnimation>
                        ) : (
                            <>
                                {filteredPosts.map((post, i) => (
                                    <ScrollAnimation type={AnimationTypes.toRight} delay={`0.${i}`} key={post.id}>
                                        <PostCard post={post} fromCategories />
                                    </ScrollAnimation>
                                ))}
                                <div className={styles.pagination}>
                                    <Pagination
                                        handlePrevArrowClick={handlePrevArrowClick}
                                        handleNextArrowClick={handleNextArrowClick}
                                        prevDisableCondition={page <= 1}
                                        nextDisableCondition={
                                            page ===
                                            getPagesCount({
                                                itemsPerPage: POSTS_PER_PAGE_SECTION,
                                                totalCount: !selectedTags.length
                                                    ? allCategoryPosts.length
                                                    : allCategoryFilteredPostsCount,
                                            })
                                        }
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    <aside className={styles.aside}>
                        <Search posts={posts} setSelectedTags={setSelectedTags} />
                        <CategoriesBlock />
                        <Tags setSelectedTags={setSelectedTags} selectedTags={selectedTags} setPage={setPage} />
                        {!selectedTags.includes('none') && (
                            <ScrollAnimation type={AnimationTypes.toLeft}>
                                <button onClick={clearTags} className={styles.clearButton}>
                                    {t('clearTags')}
                                </button>
                            </ScrollAnimation>
                        )}
                    </aside>
                </div>
            </div>
        </>
    )
}
