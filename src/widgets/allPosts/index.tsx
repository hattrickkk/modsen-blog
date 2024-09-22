'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { SmallPost } from '@/features'
import { AnimationTypes, paths, POSTS_ARR, Title } from '@/shared'
import { ScrollAnimation } from '@/shared'

import styles from './styles.module.scss'

export const AllPosts = () => {
    const t = useTranslations('posts')
    return (
        <ScrollAnimation type={AnimationTypes.toLeft}>
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <Title value={t('allPosts')} />
                    <Link href={paths.BLOG}>{t('viewAll')}</Link>
                </header>
                <div className={styles.posts}>
                    {POSTS_ARR.map((post, i) => (
                        <ScrollAnimation type={AnimationTypes.toLeft} delay={`0.${i}`} key={post.id}>
                            <SmallPost post={post} />
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </ScrollAnimation>
    )
}
