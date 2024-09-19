'use client'

import React, { memo, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { Author } from '@/entities'
import { fetchAuthors } from '@/entities/authors/helpers'
import { AuthorCard } from '@/features'
import { AnimationTypes, commonStyles, ScrollAnimation, Title } from '@/shared'

import styles from './styles.module.scss'

export const AuthorsSection = memo(() => {
    const [authors, setAuthors] = useState<Author[]>([])

    useEffect(() => {
        fetchAuthors()
            .then(res => setAuthors(res))
            .catch(err => console.error(err))
    }, [])

    const t = useTranslations('authors')

    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <ScrollAnimation type={AnimationTypes.toLeft}>
                    <Title value={t('title')} />
                </ScrollAnimation>
                <div className={styles.wrapper}>
                    {authors.map((item, i) => (
                        <ScrollAnimation type={AnimationTypes.toLeft} delay={`0.${i}`}>
                            <AuthorCard author={item} key={item.image} />
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
})
