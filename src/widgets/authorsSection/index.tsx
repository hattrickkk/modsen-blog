'use client'

import { memo } from 'react'
import { useTranslations } from 'next-intl'

import { useFetchAuthors } from '@/entities'
import { AuthorsContainer } from '@/features'
import {
    AnimationTypes,
    AUTHORS_PER_PAGE_HOME,
    commonStyles,
    DEFAULT_PAGE,
    Loader,
    ScrollAnimation,
    Title,
} from '@/shared'

import styles from './styles.module.scss'
type Props = {
    authorsCount?: number
}

export const AuthorsSection = memo(({ authorsCount = AUTHORS_PER_PAGE_HOME }: Props) => {
    const { authors, loading } = useFetchAuthors({ page: DEFAULT_PAGE, limit: authorsCount })
    const t = useTranslations('authors')

    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <ScrollAnimation type={AnimationTypes.toLeft}>
                    <Title value={t('title')} />
                </ScrollAnimation>
                {loading ? <Loader /> : <AuthorsContainer authors={authors} />}
            </div>
        </section>
    )
})
