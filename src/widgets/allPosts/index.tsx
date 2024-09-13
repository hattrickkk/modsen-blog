import React from 'react'
import Link from 'next/link'

import { SmallPost } from '@/features/smallPost'
import { Title } from '@/shared'
import { POSTS_ARR } from '@/shared/mocks/posts'

import styles from './styles.module.scss'

export const AllPosts = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Title value='All Posts' />
                <Link href={'blog'}>View All</Link>
            </header>
            {POSTS_ARR.map(post => (
                <SmallPost post={post} key={post.id} />
            ))}
        </div>
    )
}
