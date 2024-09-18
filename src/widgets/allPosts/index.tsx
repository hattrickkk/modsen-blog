import Link from 'next/link'

import { SmallPost } from '@/features'
import { AnimationTypes, paths, POSTS_ARR, Title } from '@/shared'
import { ScrollAnimation } from '@/shared'

import styles from './styles.module.scss'

export const AllPosts = () => {
    return (
        <ScrollAnimation type={AnimationTypes.toLeft}>
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <Title value='All Posts' />
                    <Link href={paths.BLOG}>View All</Link>
                </header>
                {POSTS_ARR.map((post, i) => (
                    <ScrollAnimation type={AnimationTypes.toLeft} delay={`0.${i}`} key={post.id}>
                        <SmallPost post={post} />
                    </ScrollAnimation>
                ))}
            </div>
        </ScrollAnimation>
    )
}
