'use client'

import { memo } from 'react'

import { useFetchPostById } from '@/entities'
import { commonStyles, HeroInfo, MAIN_POST_ID } from '@/shared'

import styles from './styles.module.scss'

export const Hero = memo(() => {
    const { post } = useFetchPostById(MAIN_POST_ID)
    return (
        <section className={styles.hero}>
            <div className={commonStyles.container}>
                <HeroInfo post={post} />
            </div>
        </section>
    )
})
