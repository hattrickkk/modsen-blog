'use client'

import { memo, useRef } from 'react'
import clsx from 'clsx'

import { Post } from '@/entities'
import { useOutsideClick } from '@/shared'

import { SearchedPost } from '../searchedPost'

import styles from './styles.module.scss'
type Props = {
    posts: Post[]
    closeSearch: VoidFunction
    isSearchOpen: boolean
}

export const SearchedBlock = memo(({ posts, closeSearch, isSearchOpen }: Props) => {
    const searchBlockRef = useRef<HTMLDivElement>(null)
    useOutsideClick(searchBlockRef, closeSearch)
    return (
        <div className={clsx(styles.wrapper, isSearchOpen && styles.open)} ref={searchBlockRef}>
            <div className={styles.block}>
                {posts.map(post => (
                    <SearchedPost post={post} key={post.id} />
                ))}
            </div>
        </div>
    )
})
