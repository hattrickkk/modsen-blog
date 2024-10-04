'use client'

import { memo } from 'react'
import { useTranslations } from 'next-intl'

import { useFetchPosts } from '@/entities'
import { PostsContainer } from '@/features'
import { Category, commonStyles, DEFAULT_PAGE, POSTS_PER_PAGE_SECTION, Title } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    category: Category
}

export const ReadNext = memo(({ category }: Props) => {
    const { posts } = useFetchPosts({
        page: DEFAULT_PAGE,
        limit: POSTS_PER_PAGE_SECTION,
        param: 'category',
        query: category,
    })
    const t = useTranslations('singlePost')

    return (
        <div className={commonStyles.container}>
            <Title value={t('title')} className={styles.title} />
            <div className={styles.posts}>
                <PostsContainer posts={posts} inColumn />
            </div>
        </div>
    )
})
