'use client'

import React, { useEffect, useState } from 'react'

import { Author } from '@/entities'
import { fetchAuthors } from '@/entities/authors/helpers'
import { AuthorCard } from '@/features/authorCard'
import { commonStyles, Title } from '@/shared'

import styles from './styles.module.scss'

export const AuthorsSection = () => {
    const [authors, setAuthors] = useState<Author[]>([])

    useEffect(() => {
        fetchAuthors()
            .then(res => setAuthors(res))
            .catch(err => console.error(err))
    }, [])

    return (
        <section className={styles.section}>
            <div className={commonStyles.container}>
                <Title value='List of Authors' />
                <div className={styles.wrapper}>
                    {authors.map(item => (
                        <AuthorCard author={item} key={item.image} />
                    ))}
                </div>
            </div>
        </section>
    )
}
