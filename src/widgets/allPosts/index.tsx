'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { fetchPosts, Post } from '@/entities'
import { SmallPost } from '@/features'
import { AnimationTypes, paths, Title } from '@/shared'
import { ScrollAnimation } from '@/shared'

import styles from './styles.module.scss'

export const AllPosts = () => {
    const t = useTranslations('posts')
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        fetchPosts(0, 4)
            .then(data => setPosts(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <ScrollAnimation type={AnimationTypes.toLeft}>
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <Title value={t('allPosts')} />
                    <Link href={paths.BLOG}>{t('viewAll')}</Link>
                </header>
                <div className={styles.posts}>
                    {posts.map((post, i) => (
                        <ScrollAnimation type={AnimationTypes.toLeft} delay={`0.${i}`} key={post.id}>
                            <SmallPost post={post} />
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </ScrollAnimation>
    )
}
