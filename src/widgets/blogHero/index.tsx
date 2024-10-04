'use client'

import { memo } from 'react'
import Image from 'next/image'

import { useFetchPostById } from '@/entities'
import { AnimationTypes, commonStyles, HeroInfo, MAIN_POST_ID, ScrollAnimation } from '@/shared'

import heroImage from './hero.png'

import styles from './styles.module.scss'

export const BlogHero = memo(() => {
    const { post } = useFetchPostById(MAIN_POST_ID)
    return (
        <section className={styles.hero}>
            <div className={commonStyles.container}>
                <div className={styles.wrapper}>
                    <HeroInfo inBlog post={post} />
                    <ScrollAnimation type={AnimationTypes.toLeft}>
                        <div className={styles.imageWrapper}>
                            <Image src={heroImage} alt='post-photo' width={515} height={360} />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
})
