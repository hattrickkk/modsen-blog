import React from 'react'

import { FeaturedPostDisplay } from '@/features'
import { commonStyles, POST, Title } from '@/shared'

import { AllPosts } from '../allPosts'

import styles from './styles.module.scss'

export const PostsSection = () => {
    return (
        <div className={commonStyles.container}>
            <section className={styles.posts}>
                <div>
                    <Title value='Featured Post' />
                    <FeaturedPostDisplay post={POST} />
                </div>
                <AllPosts />
            </section>
        </div>
    )
}
