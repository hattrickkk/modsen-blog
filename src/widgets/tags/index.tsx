'use client'

import { Dispatch, memo, SetStateAction, useCallback } from 'react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { AnimationTypes, DEFAULT_PAGE, ScrollAnimation, sen, TAGS, Title } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    setSelectedTags: Dispatch<SetStateAction<string[]>>
    selectedTags: string[]
    setPage: Dispatch<SetStateAction<number>>
}

export const Tags = memo(({ setSelectedTags, selectedTags, setPage }: Props) => {
    const t = useTranslations('categoryPage')

    const handleTagClick = useCallback(
        (tag: string) => () => {
            setPage(DEFAULT_PAGE)
            setSelectedTags(prevTags => {
                const tags = prevTags.includes('none') ? prevTags.slice(1) : prevTags
                return tags.find(selectedTag => selectedTag === tag)
                    ? tags.filter(selectedTag => selectedTag !== tag)
                    : [...tags, tag]
            })
        },
        [setSelectedTags, setPage]
    )

    return (
        <>
            <ScrollAnimation type={AnimationTypes.toLeft}>
                <Title value={t('title')} className={styles.title} />
            </ScrollAnimation>
            <ScrollAnimation type={AnimationTypes.toLeft} delay={0.1}>
                <div className={styles.tagsWrapper}>
                    {TAGS.map(tag => (
                        <button
                            key={tag}
                            className={clsx(styles.tag, sen.className, selectedTags.includes(tag) && styles.active)}
                            onClick={handleTagClick(tag)}
                        >
                            {tag[0].toUpperCase() + tag.slice(1)}
                        </button>
                    ))}
                </div>
            </ScrollAnimation>
        </>
    )
})
