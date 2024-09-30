'use client'

import { ChangeEvent, Dispatch, memo, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { Post } from '@/entities'
import { AnimationTypes, ScrollAnimation, sen, TAGS, useOpenState } from '@/shared'

import { SearchedBlock } from './ui/searchedBlock'
import { useDebounce } from './utils/hooks'

import styles from './styles.module.scss'

type Props = {
    posts: Post[]
    setSelectedTags: Dispatch<SetStateAction<string[]>>
}

export const Search = memo(({ posts, setSelectedTags }: Props) => {
    const [value, setValue] = useState('')
    const [searchedPosts, setSearchedPosts] = useState<Post[]>([])
    const [isSearchOpen, closeSearch, openSearch] = useOpenState()
    const [findedTag, setFindedTag] = useState<string | undefined>()
    const t = useTranslations('categoryPage')

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }, [])

    const debouncedValue = useDebounce(value)

    useEffect(() => {
        setFindedTag(
            debouncedValue &&
                TAGS.find(tag => {
                    if (tag.includes(debouncedValue)) return tag
                })
        )
    }, [debouncedValue])

    const searchedPostsByTag = useMemo(() => {
        return posts
            .filter(post => {
                if (post.tags.includes(findedTag as string)) return post
            })
            .slice(0, 4)
    }, [posts, findedTag])

    useEffect(() => {
        setSearchedPosts(!findedTag ? [] : searchedPostsByTag)
    }, [searchedPostsByTag, findedTag])

    const handleSearchButtonClick = useCallback(() => {
        setSelectedTags(findedTag ? [findedTag] : ['none'])
        setValue('')
    }, [findedTag, setSelectedTags])

    return (
        <div className={styles.wrapper}>
            <ScrollAnimation type={AnimationTypes.toLeft}>
                <div className={styles.inputWrapper}>
                    <input
                        placeholder={t('searchPlaceholder')}
                        className={sen.className}
                        max={20}
                        onChange={onChangeHandler}
                        onClick={openSearch}
                        value={value}
                    />
                    <button
                        className={clsx(sen.className, !debouncedValue && styles.disable)}
                        onClick={handleSearchButtonClick}
                    >
                        {t('search')}
                    </button>
                </div>
            </ScrollAnimation>
            {searchedPosts.length > 0 && (
                <SearchedBlock posts={searchedPosts} closeSearch={closeSearch} isSearchOpen={isSearchOpen} />
            )}
        </div>
    )
})
