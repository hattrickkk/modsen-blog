import React from 'react'
import Link from 'next/link'

import { SmallPost } from '@/features'
import { paths, POSTS_ARR, Title } from '@/shared'

import styles from './styles.module.scss'

export const AllPosts = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Title value='All Posts' />
                <Link href={paths.BLOG}>View All</Link>
            </header>
            {POSTS_ARR.map(post => (
                <SmallPost post={post} key={post.id} />
            ))}
        </div>
    )
}
