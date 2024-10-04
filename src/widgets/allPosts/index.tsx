import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import { Post } from '@/entities'
import { SmallPost } from '@/features'
import { AnimationTypes, paths, ScrollAnimation, Title } from '@/shared'

import styles from './styles.module.scss'

type Props = {
    posts: Post[]
}

export const AllPosts = ({ posts }: Props) => {
    const t = useTranslations('posts')
    const locale = useLocale()

    return (
        <ScrollAnimation type={AnimationTypes.toLeft}>
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <Title value={t('allPosts')} />
                    <Link href={`/${locale}/${paths.BLOG}`}>{t('viewAll')}</Link>
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
